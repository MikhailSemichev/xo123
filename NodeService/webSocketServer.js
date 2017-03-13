let socket_io = require('socket.io');

const SIZE = 12;

let games = [
	{ name: 'vika', tiles: makeTiles() },
	{ name: 'sasha', tiles: makeTiles() },
	{ name: 'igor', tiles: makeTiles() }
];

module.exports = (app) => {
	let io = socket_io();
	app.io = io;

	io.on('connection', function (socket) {
		socket.emit('games', games);

		socket.on('startGame', (name) => {
			games.push({
				name,
				tiles: makeTiles(),
				turnType: false
			});

			io.emit('games', games);
		});

		socket.on('clickTile', ({ name, i, j }) => {
			let game = games.find(g => g.name === name);
			let row = game.tiles[i];
			row[j] = 'X';

			io.emit('games', games);
		});
	});
};

function makeTiles() {
	let tiles = [];
	for (let i = 0; i < SIZE; i++) {
		let cols = [];
		for (let j = 0; j < SIZE; j++) {
			cols.push('');
		}
		tiles.push(cols);
	}
	return tiles;
}