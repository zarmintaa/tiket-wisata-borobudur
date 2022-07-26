"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candi.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      address: DataTypes.STRING,
      price_kid: DataTypes.STRING,
      price_adult: DataTypes.STRING,
      video: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Candi",
    }
  );
  return Candi;
};
