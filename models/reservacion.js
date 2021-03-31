"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cliente, { foreignKey: "clienteIdentificacion" });
      this.belongsTo(models.tour, { foreignKey: "tourID" });
    }
  }
  reservacion.init(
    {
      cantidad: DataTypes.INTEGER,
      clienteIdentificacion: DataTypes.STRING,
      tourID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "reservacion",
    }
  );
  return reservacion;
};
