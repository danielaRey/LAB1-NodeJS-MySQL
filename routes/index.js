/* Controllers */
const usuarioController = require("../controllers/usuarioController");
const clienteController = require("../controllers/clienteController");
const tourController = require("../controllers/tourController");
const reviewController = require("../controllers/reviewController");
const reservacionController = require("../controllers/reservacionController");
const favoritoController = require("../controllers/favoritoController");

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message:
        "Example project did not give you access to the api web services",
    })
  );
  //usuario
  app.post("/api/usuario/create", usuarioController.create);
  app.get("/api/usuario/list", usuarioController.list);
  app.get("/api/usuario/find/correo/:correo", usuarioController.find);

  //cliente
  app.post("/api/cliente/create", clienteController.create);
  app.get("/api/cliente/list", clienteController.list);
  app.get(
    "/api/cliente/find/identificacion/:identificacion",
    clienteController.find
  );

  //tour
  app.post("/api/tour/create", tourController.create);
  app.get("/api/tour/list", tourController.list);
  app.get("/api/tour/find/correo/:correo", tourController.find);

  //review
  app.post("/api/review/create", reviewController.create);
  app.get("/api/review/list", reviewController.list);
  app.get("/api/review/find/correo/:correo", reviewController.find);

  //reservacion
  app.post("/api/reservacion/create", reservacionController.create);
  app.get("/api/reservacion/list", reservacionController.list);
  app.get("/api/reservacion/find/correo/:correo", reservacionController.find);

  //favorito
  app.post("/api/favorito/create", favoritoController.create);
  app.get("/api/favorito/list", favoritoController.list);
  app.get("/api/favorito/find/correo/:correo", favoritoController.find);
};
