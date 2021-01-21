const User = require("../models/User");
const Book = require("../models/Book");

module.exports = {
  async index(req, res) {
    const { user_id } = req.query;
    const user = await User.findById(user_id);

    // Validando se o usuario existe
    if (!user) return res.status(402).json({ error: "user not exists! " });

    // Localizando os livros
    const books = await Book.find({ user: user._id });

    // Retornando a lista de livros
    return res.json(books);
  },
  async store(req, res) {
    const {
      thumbnail,
      title,
      publisher,
      author,
      date,
      collection,
      avaliation,
      observation,
      pages,
    } = req.body;
    // Encontrando o usuario
    const user = await User.findById(req.userId);

    // Validando a existência do usuario
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    // Criando livro no banco de dados
    const book = await Book.create({
      thumbnail: thumbnail[0],
      title,
      publisher,
      author,
      date,
      collection_book: collection,
      avaliation,
      observation,
      pages,
      user: req.userId,
    });

    // retornando o livro criado
    return res.json(book);
  },
  async show(req, res) {
    const { id_book } = req.query;

    // Localizando livro especificadamente
    const book = await Book.find({ _id: id_book, user: req.userId });

    // Retornando o livro localizado
    return res.status(200).json(book);
  },
  async update(req, res) {
    const {
      thumbnail,
      title,
      publisher,
      author,
      date,
      collection,
      avaliation,
      observation,
      pages,
    } = req.body;
    const { id_book } = req.query;

    // Localizando livro em especifico
    const book = await Book.findOne({ _id: id_book, user: req.userId });

    // Validando a existência do livro
    if (!book) res.status(404).json({ error: "Book not found!" });

    // Atualizando livro
    const updatedBook = await Book.findOneAndUpdate(book._id, {
      thumbnail,
      title,
      publisher,
      author,
      date,
      collection_book: collection,
      avaliation,
      observation,
      pages,
    });

    // Retornando versão anterior do livro
    return res.status(202).json(updatedBook);
  },
  async delete(req, res) {
    const { id_book } = req.query;

    // Localizando o livro em específico
    const book = await Book.findOne({ _id: id_book, user: req.userId });

    // Validando a existencia do livro
    if (!book) return res.status(404).json({ error: "Book not found!" });

    // Deletando o livro
    await Book.findOneAndDelete(book._id);

    // Retornando com status (204 - sem conteúdo)
    res.status(204).json({ success: "Book deleted!" });
  },
};
