const { Logger } = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data) {
      const response =  await this.model.create(data);
      return response;
    }

    async destroy(data){
        try{
            const response = await this.model.destroy({
                where:{
                    id: data,
                }
            })
            return response;
        }catch(e){
            Logger.error('something went wrong');
            throw e;
        }
    }

    async get(data){
        try{
            const response =  await this.model.findByPk(data)
            return response;
        }catch(e){
            Logger.error('something went wrong');
            throw e;
        }
    }

    async getAll(data){
        try{
            const response =  await this.model.findAll(data)
            return response;
        }catch(e){
            Logger.error('something went wrong');
            throw e;
        }
    }
    
    async update(id, data){
        try{
            const response =  await this.model.update(data, {
                where: {
                    id: id
                }
            })
            return response;
        }catch(e){
            Logger.error('something went wrong');
            throw e;
        }
    }
}

module.exports = CrudRepository;