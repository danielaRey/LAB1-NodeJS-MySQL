"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      calificacion: {
        type: Sequelize.STRING,
      },
      comentario: {
        type: Sequelize.STRING,
      },
      tourID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tours",
          key: "id",
        },
      },
      clienteIdentificacion: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "clientes",
          key: "identificacion",
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
    await queryInterface.dropTable("reviews");
  },
};
