const { combineTableNames } = require('sequelize/lib/utils');
const { Logger } = require('../config');
const {StatusCodes} = require('http-status-codes')
const {AirPlaneError} = require('../utils')

class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data,
            }
        })
        if(!response){
            throw new AirPlaneError('Not able find resources', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data)
        if(!response){
            throw new AirPlaneError('Not able find resources', StatusCodes.NOT_FOUND);
        }
        return response;

    }

    async getAll(data) {
        const response = await this.model.findAll(data)
        return response;
    }

    async update(id, data) {
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        })
        return response;
    }
}

module.exports = CrudRepository;