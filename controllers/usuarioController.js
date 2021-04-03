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
          correo: req.body.correo,
          password: req.body.password,
        },
      })
      .then((usuario) => {
        const tipoUsuario = usuario[0]["tipoUsuario"];
        res.status(200).send({
          tipoUsuario: tipoUsuario,
          token: "test123",
        });
      })
      .catch((error) => res.status(400).send(error));
  },
  findUser(req, res) {
    return usuario.findOne({ email: newuser.email }, function (err, user) {
      if (user)
        return res.status(400).json({ auth: false, message: "email exits" });

      newuser.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.status(400).json({ success: false });
        }
        res.status(200).json({
          succes: true,
          user: doc,
        });
      });
    });
  },
};
