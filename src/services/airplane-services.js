const { AirplaneRepository } = require('../repositories');
const {StatusCodes} = require('http-status-codes')
const {AirPlaneError} = require('../utils')
const airplaneRepository = new AirplaneRepository()

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if(error.name === 'SequelizeValidationError'){
       
                let explanation = [];
                error.errors.forEach(err => {
                    explanation.push(err.message);
                });
                throw new AirPlaneError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AirPlaneError('cannot creating aiplane object ', StatusCodes.INTERNAL_SERVER_ERROR)    }
}

async function getAirplanes(){
    try{
      
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }catch(error){
        throw new AirPlaneError('C`annot fetsch data of airplanes', StatusCodes.INTERNAL_SERVER_ERROR)    }

    }


module.exports  = {
    createAirplane,
    getAirplanes,
}