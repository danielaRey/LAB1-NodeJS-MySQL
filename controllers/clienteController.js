const Sequelize = require("sequelize");
const cliente = require("../models").cliente;

module.exports = {
  create(req, res) {
    return cliente
      .create({
        identificacion: req.body.identificacion,
        usuarioCorreo: req.body.usuarioCorreo,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        pais: req.body.pais,
        fechaNacimiento: req.body.fechaNacimiento,
      })
      .then((cliente) => res.status(200).send(cliente))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return cliente
      .findAll({}) //attributes: ["*"]
      .then((cliente) => res.status(200).send(cliente))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return cliente
      .findAll({
        where: {
          usuarioCorreo: req.params.correo,
        },
      })
      .then((cliente) => res.status(200).send(cliente))
      .catch((error) => res.status(400).send(error));
  },
};
