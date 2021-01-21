const User = require("../models/User");
const Book = require("../models/Book");
const crypt = require("crypto");

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    // Preparando criptografia
    const sha1 = crypt.createHash("sha1");

    // Criptografando senha
    const criptPass = sha1.update(password).digest("hex");

    // Localizar email
    let user = await User.findOne({ email });

    // VAlidando se email está em uso
    if (!user) {
      const user = await User.create({
        name,
        email,
        password: criptPass,
      });
      return res.status(201).json(user);
    } else
      return res.status(400).json({ error: "Email is already registered" });
  },
  async update(req, res) {
    const { name, email, password } = req.body;

    // Localizar usuario
    const userLocate = await User.findById(req.userId);

    // Validar existência do usuario
    if (!userLocate) return res.status(404).json({ error: "User not found!" });

    // Preparando criptografia
    const sha1 = crypt.createHash("sha1");

    // Criptografando a senha
    const criptPass = sha1.update(password).digest("hex");

    // Atualizando usuario
    const user = await User.findOneAndUpdate(req.userId, {
      name,
      email,
      password: criptPass,
    });

    // Mostrando usuario na versão anterior
    return res.status(204).json(user);
  },
  async delete(req, res) {
    // Localizar usuario
    const userLocate = await User.findById(req.userId);

    // Listando os livros localizados
    const books = await Book.find({ user: req.userId });

    // Deletando os livros relacionados ao usuario
    for (var i = 0; books.length > i; i++) {
      await Book.findByIdAndDelete(books[i]._id);
    }

    // Validando a existência do usuario
    if (!userLocate) return res.status(404).json({ error: "User not found!" });

    // Deletando o usuario
    const user = await User.findOneAndDelete(req.userId);

    if (!user) res.status(204).send("Sucesso usuario deletado");
  },
};
