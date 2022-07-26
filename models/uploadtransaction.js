'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UploadTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UploadTransaction.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    nomor_identitas: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UploadTransaction',
  });
  return UploadTransaction;
};