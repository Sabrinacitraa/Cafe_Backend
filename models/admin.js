'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    static associate(models) {
      // define association here
    }
  };

  admin.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin', // Gunakan 'Admin' bukan 'admin'
  });
  
  return admin;
};
