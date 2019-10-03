const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');
const findObject = require('../../utils/findObject');

models.get('/:modelId', single);
models.get('/', all);
models.use('/:modelId/cars', cars);

models.param('modelId', findObject('model'));

module.exports = models;