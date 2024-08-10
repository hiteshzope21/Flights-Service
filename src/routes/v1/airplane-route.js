const express = require('express');
const router = express.Router();
const {airplaneController} = require('../../controllers');
router.post('/', airplaneController.createAirplane);

module.exports  = router;
