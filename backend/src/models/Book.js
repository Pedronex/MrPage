const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    thumbnail: String,
    title: String,
    publisher: String,
    author: String,
    date: String,
    collection_book: String,
    avaliation: Number,
    observation: String,
    pages: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bookmark: {
      page: {
        type: Number,
        default: 0,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
module.exports = mongoose.model("Book", BookSchema);
