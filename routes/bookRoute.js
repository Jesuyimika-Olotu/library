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
router.post("/book", createBook);
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

module.exports = router;
