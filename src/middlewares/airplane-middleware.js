const {StatusCodes} = require('http-status-codes')
const {errorResponse, AirPlaneError} = require('../utils')

function validateAirplaneRequest(req,res, next){
    if(!req.body.modelNumber){
        errorResponse.error = new AirPlaneError(['Model number not found correct in incoming request in correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next();
}

module.exports = validateAirplaneRequest;