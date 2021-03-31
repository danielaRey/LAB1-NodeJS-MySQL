'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tour.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    indicacionesGenerales: DataTypes.STRING,
    actividadesIncluidas: DataTypes.STRING,
    actividadesNoIncluidas: DataTypes.STRING,
    duracion: DataTypes.STRING,
    fechaIda: DataTypes.DATEONLY,
    fechaVuelta: DataTypes.DATEONLY,
    pais: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    categoria: DataTypes.STRING,
    horaInicio: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'tour',
  });
  return tour;
};