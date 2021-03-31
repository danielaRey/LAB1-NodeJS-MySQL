const Sequelize = require("sequelize");
const tour = require("../models").tour;

module.exports = {
  create(req, res) {
    return tour
      .create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        indicacionesGenerales: req.body.indicacionesGenerales,
        actividadesIncluidas: req.body.actividadesIncluidas,
        actividadesNoIncluidas: req.body.actividadesNoIncluidas,
        duracion: req.body.duracion,
        fechaIda: req.body.fechaIda,
        fechaVuelta: req.body.fechaVuelta,
        pais: req.body.pais,
        precio: req.body.precio,
        categoria: req.body.categoria,
        horaInicio: req.body.horaInicio,
      })
      .then((tour) => res.status(200).send(tour))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return tour
      .findAll({}) //attributes: ["*"]
      .then((tour) => res.status(200).send(tour))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return tour
      .findAll({
        where: {
          correo: req.params.correo,
        },
      })
      .then((tour) => res.status(200).send(tour))
      .catch((error) => res.status(400).send(error));
  },
};
