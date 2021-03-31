/* Controllers */
const usuarioController = require("../controllers/usuarioController");
const clienteController = require("../controllers/clienteController");
const tourController = require("../controllers/tourController");

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
};
