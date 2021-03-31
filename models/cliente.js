"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.usuario, { foreignKey: "usuarioCorreo" });
    }
  }
  cliente.init(
    {
      identificacion: { type: DataTypes.STRING, primaryKey: true },
      usuarioCorreo: { type: DataTypes.STRING, allowNull: false },
      nombre: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      pais: DataTypes.STRING,
      fechaNacimiento: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "cliente",
    }
  );
  return cliente;
};
