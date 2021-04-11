const Sequelize = require("sequelize");
const favorito = require("../models").favorito;

module.exports = {
  create(req, res) {
    return favorito
      .create({
        esFavorito: req.body.esFavorito,
        tourID: req.body.tourID,
        clienteIdentificacion: req.body.clienteIdentificacion,
      })
      .then((favorito) => res.status(200).send(favorito))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return favorito
      .update(
        {
          esFavorito: req.body.esFavorito,
        },
        {
          where: {
            tourID: req.body.tourID,
            clienteIdentificacion: req.body.clienteIdentificacion,
          },
        }
      )
      .then((favorito) => res.status(200).send(favorito))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return favorito
      .findAll({}) //attributes: ["*"]
      .then((favorito) => res.status(200).send(favorito))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return favorito
      .findAll({
        where: {
          correo: req.params.correo,
        },
      })
      .then((favorito) => res.status(200).send(favorito))
      .catch((error) => res.status(400).send(error));
  },
};
