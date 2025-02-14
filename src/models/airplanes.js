'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airplanes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  airplanes.init({
    modelNumber: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
      max: 1000
      }
    }
  }, {
    sequelize,
    modelName: 'airplanes',
  });
  return airplanes;
};