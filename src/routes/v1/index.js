const express = require('express')

// console.log(require('../../controllers'));

const CityController = require("../../controllers/city-controller.js");
const FlightController = require('../../controllers/flight-controller.js')
const AirportController = require('../../controllers/airport-controller.js')
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);

router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);

router.post('/airports',AirportController.create);
router.delete('/airports/:id',AirportController.destroy);
router.patch('/airports/:id',AirportController.update);
router.get('/airports/:id',AirportController.get);
router.get('/airports',AirportController.getAll);


module.exports=router; 

