const express = require('express')

// console.log(require('../../controllers'));

const CityController = require("../../controllers/city-controller.js");
const flightController = require('../../controllers/flight-controller.js')
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);

router.post('/flights',flightController.create);

module.exports=router;

