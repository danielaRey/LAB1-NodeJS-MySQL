'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      indicacionesGenerales: {
        type: Sequelize.STRING
      },
      actividadesIncluidas: {
        type: Sequelize.STRING
      },
      actividadesNoIncluidas: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.STRING
      },
      fechaIda: {
        type: Sequelize.DATEONLY
      },
      fechaVuelta: {
        type: Sequelize.DATEONLY
      },
      pais: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DOUBLE
      },
      categoria: {
        type: Sequelize.STRING
      },
      horaInicio: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tours');
  }
};