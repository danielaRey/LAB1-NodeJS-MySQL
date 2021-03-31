"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init(
    {
      correo: { type: DataTypes.STRING, primaryKey: true },
      password: { type: DataTypes.STRING, allowNull: false },
      tipoUsuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "usuario",
    }
  );
  return usuario;
};
