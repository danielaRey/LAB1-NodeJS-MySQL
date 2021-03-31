const Sequelize = require("sequelize");
const usuario = require("../models").usuario;

module.exports = {
  create(req, res) {
    return usuario
      .create({
        correo: req.body.correo,
        password: req.body.password,
        tipoUsuario: req.body.tipoUsuario,
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return usuario
      .findAll({}) //attributes: ["*"]
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return usuario
      .findAll({
        where: {
          correo: req.params.correo,
        },
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },
};
