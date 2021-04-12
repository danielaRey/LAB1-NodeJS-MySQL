const Sequelize = require("sequelize");
const review = require("../models").review;

module.exports = {
  create(req, res) {
    return review
      .create({
        calificacion: req.body.calificacion,
        comentario: req.body.comentario,
        tourID: req.body.tourID,
        clienteIdentificacion: req.body.clienteIdentificacion,
      })
      .then((review) => res.status(200).send(review))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return review
      .findAll({}) //attributes: ["*"]
      .then((review) => res.status(200).send(review))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return review
      .findAll({
        where: {
          correo: req.params.correo,
        },
      })
      .then((review) => res.status(200).send(review))
      .catch((error) => res.status(400).send(error));
  },
};
