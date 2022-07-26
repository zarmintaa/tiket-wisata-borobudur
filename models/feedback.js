"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      feedback: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Feedback",
    }
  );
  return Feedback;
};
