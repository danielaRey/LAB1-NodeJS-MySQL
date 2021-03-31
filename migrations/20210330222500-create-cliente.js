"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("clientes", {
      identificacion: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      usuarioCorreo: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "correo",
        },
      },
      nombre: {
        type: Sequelize.STRING,
      },
      apellidos: {
        type: Sequelize.STRING,
      },
      pais: {
        type: Sequelize.STRING,
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("clientes");
  },
};
