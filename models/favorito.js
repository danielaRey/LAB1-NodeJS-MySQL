"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorito extends Model {
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
  favorito.init(
    {
      esFavorito: DataTypes.INTEGER,
      tourID: { type: DataTypes.INTEGER, allowNull: false },
      clienteIdentificacion: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "favorito",
    }
  );
  return favorito;
};
