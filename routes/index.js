/* Controllers */
const usuarioController = require("../controllers/usuarioController");
const clienteController = require("../controllers/clienteController");
const tourController = require("../controllers/tourController");
const reviewController = require("../controllers/reviewController");
const reservacionController = require("../controllers/reservacionController");
const favoritoController = require("../controllers/favoritoController");
const fotoController = require("../controllers/fotoController");
const usuario = require("../models").usuario;

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
  app.get("/api/usuario/find/", usuarioController.find);

  //cliente
  app.post("/api/cliente/create", clienteController.create);
  app.get("/api/cliente/list", clienteController.list);
  app.get("/api/cliente/find/correo/:correo", clienteController.find);

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
  app.put("/api/favorito/update", favoritoController.update);
  app.get("/api/favorito/find/correo/:correo", favoritoController.find);

  //foto
  app.post("/api/foto/create", fotoController.create);
  app.get("/api/foto/list", fotoController.list);
  app.get("/api/foto/find/correo/:correo", fotoController.find);

  // adding new user (sign-up route)
  app.post("/api/register", function (req, res) {
    // taking a user
    const newuser = new usuario(req.body);

    const responseUsuario = usuario.findOne({
      where: { correo: newuser.correo },
    });

    Promise.all([responseUsuario]).then((response) => {
      if (response[0]) {
        return res.status(400).json({ auth: false, message: "email exits" });
      } else {
        return usuario
          .create({
            correo: req.body.correo,
            password: req.body.password,
            tipoUsuario: req.body.tipoUsuario,
          })
          .then((participacion) => res.status(200).send(participacion))

          .catch((error) => res.status(400).send(error));
      }
    });
  });

  //login
  app.post("/api/login", function (req, res) {
    // taking a user
    const newuser = new usuario(req.body);

    const responseUsuario = usuario.findOne({
      where: { correo: newuser.correo, password: newuser.password },
    });

    Promise.all([responseUsuario]).then((response) => {
      if (response[0]) {
        const tipoUsuario = response[0]["tipoUsuario"];
        const correo = response[0]["correo"];
        return res
          .status(200)
          .json({ tipoUsuario: tipoUsuario, token: correo });
      } else {
        return res
          .status(400)
          .json({ auth: false, message: "Username or password incorrectas." });
      }
    });
  });
};
