const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/", (req, res) => {
  console.log("Conectado");
  res.send("Servidor ligado!");
});

// Criar usuario
routes.post("/newUser", UserController.store);
// Login do usuario
routes.post("/session", SessionController.index);

module.exports = routes;
