'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    static associate(models) {
    }
  }

  cars.init({
    name: DataTypes.STRING,
    rentPrice: DataTypes.INTEGER,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cars',
  });
  
  return cars;
};