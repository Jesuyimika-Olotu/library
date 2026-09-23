const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 2,
    maxLength: 150,
    required: true,
  },
  author: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  description: {
    type: String,
    maxLength: 500,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
