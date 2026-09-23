const Book = require("../models/Book");

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "The book does not exist",
      });
    }

    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

const createBook = async (req, res, next) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      publishedYear: req.body.publishedYear,
      genre: req.body.genre,
      isRead: req.body.isRead,
    });

    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "The book does not exist",
      });
    }

    const { title, author, description, publishedYear, genre, isRead } =
      req.body;

    if (
      title === undefined &&
      author === undefined &&
      description === undefined &&
      publishedYear === undefined &&
      genre === undefined &&
      isRead === undefined
    ) {
      return res.status(400).json({
        message: "Please provide at least one resource to be updated",
      });
    }

    if (title !== undefined) book.title = title;
    if (author !== undefined) book.author = author;
    if (description !== undefined) book.description = description;
    if (publishedYear !== undefined) book.publishedYear = publishedYear;
    if (genre !== undefined) book.genre = genre;
    if (isRead !== undefined) book.isRead = isRead;

    await book.save();

    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "The book does not exist",
      });
    }

    res.status(200).json({
      message: "The book has been successfully deleted",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
