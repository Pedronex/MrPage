const Book = require("../models/Book");

module.exports = {
  async store(req, res) {
    // Colentando informações da requisição via JSON
    const { id_book, page } = req.body;

    // Localizando lista dos livros
    const book = await Book.find({ _id: id_book, user: req.userId });

    // Objeto que será inserido
    const bookmark = {
      page,
      updatedAt: Date.now(),
    };

    // Atualizando o marcador de livro
    const updatedBook = await Book.findOneAndUpdate(book._id, { bookmark });

    // Versão anterior da livro
    return res.status(200).json(updatedBook);
  },
  async delete(req, res) {
    // Coletando informações enviada via query na requisição http://url?query=dado
    const { id_book } = req.query;

    // Localizando lista dos livros
    const book = await Book.find({ _id: id_book });

    // Atualizando informações para zerar as informações
    const updatedBook = await Book.findOneAndUpdate(book._id, {
      bookmark: { page: 0, updatedAt: Date.now() },
    });

    return res.status(204).json(updatedBook);
  },
};
