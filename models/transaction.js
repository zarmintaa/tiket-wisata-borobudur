"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      candi: DataTypes.STRING,
      hari: DataTypes.STRING,
      jam: DataTypes.STRING,
      nama: DataTypes.STRING,
      no_hp: DataTypes.STRING,
      email: DataTypes.STRING,
      dewasa: DataTypes.STRING,
      anak: DataTypes.STRING,
      no_identitas: DataTypes.STRING,
      total_bayar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
