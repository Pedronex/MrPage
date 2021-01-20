const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    thumbnail: String,
    title: String,
    publisher: String,
    author: String,
    date: Date,
    collection: String,
    avaliation: Number,
    observation: String,
    pages: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
module.exports = mongoose.model("Book", BookSchema);
