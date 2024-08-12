const express = require('express');
const router = express.Router();
const {airplaneController, infoController} = require('../../controllers');
const {validateAirplanes} = require('../../middlewares')
const airplaneRoutes = require('./airplane-route');
router.use('/airplanes', validateAirplanes, airplaneRoutes);
router.get('/info', infoController.info);

module.exports = router;    