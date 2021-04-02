const Sequelize = require("sequelize");
const reservacion = require("../models").reservacion;

module.exports = {
  create(req, res) {
    return reservacion
      .create({
        cantidad: req.body.cantidad,
        tourID: req.body.tourID,
        clienteIdentificacion: req.body.clienteIdentificacion,
      })
      .then((reservacion) => res.status(200).send(reservacion))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return reservacion
      .findAll({}) //attributes: ["*"]
      .then((reservacion) => res.status(200).send(reservacion))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return reservacion
      .findAll({
        where: {
          correo: req.params.correo,
        },
      })
      .then((reservacion) => res.status(200).send(reservacion))
      .catch((error) => res.status(400).send(error));
  },
};
