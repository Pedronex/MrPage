const express = require("express");

// Controllers
const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController");
const SessionController = require("./controllers/SessionController");
const BookmarkController = require("./controllers/BookmarkController");

// Middlewares
const VerifyToken = require("./middlewares/VerifyToken");

const routes = express.Router();

routes.get("/", (req, res) => {
  console.log("Conectado", req.hostname);
  res.send("Servidor ligado!");
});

// Login do usuario
routes.post("/user/login", SessionController.show);
// Logout do usuario
routes.post("/user/logout", VerifyToken.verifyJWT, SessionController.delete);

// Criar usuario
routes.post("/user/create", UserController.store);
// Atualizar usuario
routes.put("/user/update", VerifyToken.verifyJWT, UserController.update);
// Deletar usuario
routes.delete("/user/delete", VerifyToken.verifyJWT, UserController.delete);

// Listar Livros
routes.get("/book/list", BookController.index);
// Criar livro
routes.post("/book/create", VerifyToken.verifyJWT, BookController.store);
// Atualizar livro
routes.put("/book/update", VerifyToken.verifyJWT, BookController.update);
// Delete livro
routes.delete("/book/delete", VerifyToken.verifyJWT, BookController.delete);
// Consultar livro
routes.post("/book/info", VerifyToken.verifyJWT, BookController.show);

// Marcador Criar/Atualizar
routes.post("/mark/update", VerifyToken.verifyJWT, BookmarkController.store);
// Marcador Delete
routes.delete("/mark/delete", VerifyToken.verifyJWT, BookmarkController.delete);

module.exports = routes;
