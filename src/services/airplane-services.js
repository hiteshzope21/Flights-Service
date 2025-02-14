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
        throw new AirPlaneError('Cannot fetch data of airplanes', StatusCodes.INTERNAL_SERVER_ERROR)    }

    }

async function getAirplane(data){
        try{
          
            const airplanes = await airplaneRepository.get(data);
            return airplanes;
        }catch(error){
            if(error.statusCode == StatusCodes.NOT_FOUND){
                throw new AirPlaneError('The airplane you requested is not found', StatusCodes.NOT_FOUND)
            }
            throw new AirPlaneError('Cannot fetch data of airplane', StatusCodes.INTERNAL_SERVER_ERROR)    }
    
}

async function deleteAirplane(id){
    try{
      
        const response = await airplaneRepository.destroy(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AirPlaneError('The airplane you deleted is not found', StatusCodes.NOT_FOUND)
        }
        throw new AirPlaneError('cannot able to delete the airplane', StatusCodes.INTERNAL_SERVER_ERROR)    }

    }

module.exports  = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
}