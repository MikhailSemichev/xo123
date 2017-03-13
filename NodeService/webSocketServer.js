let socket_io = require('socket.io');

let games = [
	{ name: 'vika', field: [] },
	{ name: 'sasha', field: [] },
	{ name: 'igor', field: [] }
];

module.exports = (app) => {
	let io = socket_io();
	app.io = io;

	io.on('connection', function (socket) {
		socket.emit('games', games);

		socket.on('startGame', function (name) {
			games.push({
				name: name,
				field: []
			});
			io.emit('games', games);
		});
	});
};
