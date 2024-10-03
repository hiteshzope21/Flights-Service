const express = require('express');
const router = express.Router();
const {airplaneController} = require('../../controllers');
const {validateAirplanes} = require('../../middlewares');
router.post('/', validateAirplanes, airplaneController.createAirplane);
router.get('/', airplaneController.getAirplanes);
router.get('/:id', airplaneController.getAirplane);
router.delete('/:id', airplaneController.deleteAirplane);


module.exports  = router;





