"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class foto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tour, { foreignKey: "tourID" });
    }
  }
  foto.init(
    {
      nombre: DataTypes.STRING,
      imagen: DataTypes.BLOB,
      tourID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "foto",
    }
  );
  return foto;
};
