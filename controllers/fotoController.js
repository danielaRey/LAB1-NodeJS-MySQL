const Sequelize = require("sequelize");
const foto = require("../models").foto;

module.exports = {
  create(req, res) {
    return foto
      .create({
        nombre: req.body.nombre,
        tourID: req.body.tourID,
        imagen: req.body.imagen,
      })
      .then((foto) => res.status(200).send(foto))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return foto
      .findAll({ attributes: ["imagen"] }) //attributes: ["*"]
      .then((foto) => res.status(200).send(foto))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return foto
      .findAll({
        where: {
          identificacion: req.params.identificacion,
        },
      })
      .then((foto) => res.status(200).send(foto))
      .catch((error) => res.status(400).send(error));
  },
};
