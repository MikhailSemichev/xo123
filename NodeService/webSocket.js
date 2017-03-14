let socket_io = require('socket.io');

const SIZE = 12;

let games = [
	{ name: 'vika', cells: makeCells(), turn: 'X' },
	{ name: 'sasha', cells: makeCells(), turn: 'X' },
	{ name: 'igor', cells: makeCells(), turn: 'X' }
];

module.exports = (app) => {
	let io = socket_io();
	app.io = io;

	io.on('connection', function (socket) {
		socket.emit('games', games);

		socket.on('startGame', startGame);
		socket.on('clickCell', clickCell);
	});

	function startGame(name) {
		games.push({
			name,
			cells: makeCells(),
			turn: 'X'
		});

		// Notify all clients
		io.emit('games', games);
	}

	function clickCell({ name, i, j }) {
		let game = games.find(g => g.name === name);
		let row = game.cells[i];

		row[j] = game.turn;
		game.turn = game.turn === 'X' ? 'O' : 'X'; 

		// Notify all clients
		io.emit('games', games);
	}

};


///

function makeCells() {
	let cells = [];
	for (let i = 0; i < SIZE; i++) {
		cells.push([]);
		for (let j = 0; j < SIZE; j++) {
			cells[i][j] = ' ';
		}
	}
	return cells;
}