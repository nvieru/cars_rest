const cars = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

cars.get('/', all);
cars.get('/:carId', single);

cars.param('carId', findObject('car'));

module.exports = cars;