var list = [];

for (var i = 0; i < 5; i++) {
	list.push({
		id: i,
		isDone: i % 3 === 0,
		text: 'item' + i,
		description: 'description' + i,
		time: i * 10
	});
}

module.exports = list;