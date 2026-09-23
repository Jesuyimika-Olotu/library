const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/book", getBooks);
router.get("/book/:id", getBook);
router.get("/book", createBook);
router.get("/book/:id", updateBook);
router.get("/book/:id", deleteBook);

module.exports = router;
