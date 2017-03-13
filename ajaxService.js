let express = require('express');
let todoList = require('./todoList');
let _ = require('lodash');

module.exports = app => {
    var todoRouter = express.Router();
    app.use('/todo', todoRouter);

    todoRouter.get('/', (req, res) => {
        res.status(200).json(todoList);
    });

    todoRouter.get('/:id', (req, res) => {
        let todoItem = _.find(todoList, i => i.id === +req.params.id);
        res.status(200).json(todoItem);
    });

    todoRouter.post('/', (req, res) => {
        let data = req.body;
        let todoItem = {
            id: new Date().getTime(),
            isDone: data.isDone,
            text: data.text,
            description: data.description,
            time: data.time
        };

        todoList.push(todoItem);
        res.status(201).json(todoItem);
    });

    todoRouter.put('/:id', (req, res) => {
        var data = req.body;

        var todoItem = _.find(todoList, i => i.id === +req.params.id);
        todoItem.id = data.id;
        todoItem.isDone = data.isDone;
        todoItem.text = data.text;
        todoItem.description = data.description;
        todoItem.time = data.time;

        res.status(204).end();
    });

    todoRouter.delete('/:id', (req, res) => {
        _.remove(todoList, i => i.id === +req.params.id);
        res.status(204).end();
    });
};