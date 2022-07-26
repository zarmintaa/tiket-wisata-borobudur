"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candi: {
        type: Sequelize.STRING,
      },
      hari: {
        type: Sequelize.STRING,
      },
      jam: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      no_hp: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      dewasa: {
        type: Sequelize.STRING,
      },
      anak: {
        type: Sequelize.STRING,
      },
      total_bayar: {
        type: Sequelize.STRING,
      },
      no_identitas: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Transactions");
  },
};
