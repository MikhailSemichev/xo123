let express = require('express');

module.exports = app => {
    var testRouter = express.Router();
    app.use('/test', testRouter);

    testRouter.get('/', (req, res) => {
        res.status(200).json('Service works!');
    });

    testRouter.post('/', (req, res) => {
        res.status(201).json(req.body);
    });
};