"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("reservacions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cantidad: {
        type: Sequelize.INTEGER,
      },
      clienteIdentificacion: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "clientes",
          key: "identificacion",
        },
      },
      tourID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tours",
          key: "id",
        },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("reservacions");
  },
};
