import express from "express";
import { Book } from "../models/booksModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send({ count: books.length, data: books });
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something went wrong with getting books` });
  }
});
router.post("/", async (req, res) => {
  try {
    if ((!req.body.title, !req.body.author, !req.body.rating)) {
      return res.status(404).send({
        message: "All required elements must be filled title,author,rating",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      rating: req.body.rating,
    };
    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

export default router;
