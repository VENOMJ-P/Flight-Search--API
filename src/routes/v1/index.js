const express = require('express')

// console.log(require('../../controllers'));

const CityController = require("../../controllers/city-controller.js");
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);

module.exports=router;

