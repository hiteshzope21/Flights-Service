const {airplanes} = require('../services');
const {errorResponse,successResponse} = require('../utils')
const {StatusCodes} = require('http-status-codes')

async function createAirplane(req, res){
    try {
        const airplane = await airplanes.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        })
        successResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        console.log({error})
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse)
    }
}

module.exports = {createAirplane};