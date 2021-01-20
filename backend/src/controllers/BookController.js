const User = require("../models/User");
const Book = require("../models/Book");

module.exports = {
  async index(req, res) {
    const { id_user } = req.headers;

    const books = await Book.find({ user: id_user });

    return res.json(books);
  },
  async store(req, res) {
    const {
      title,
      publisher,
      author,
      date,
      collection,
      avaliation,
      observation,
      pages,
    } = req.body;
    const { user_id } = req.headers;

    const thumbnail = req.file.buffer.toString("base64");

    const user = await User.findById(user_id);

    console.log(user);

    if (!user) {
      return res.status(400).json({ error: "O Usuario não existe" });
    }

    const book = await Book.create({
      thumbnail,
      title,
      publisher,
      author,
      date,
      collection,
      avaliation,
      observation,
      pages,
      user: user_id,
    });
    return res.json(book);
  },
};
