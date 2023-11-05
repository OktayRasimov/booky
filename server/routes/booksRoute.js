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
    if ((!req.body.title, !req.body.author, !req.body.completed)) {
      return res.status(404).send({
        message: "All required elements must be filled title,author,completed",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      completed: req.body.completed,
    };
    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send({ message: "No book found" });
    }
    return res.status(200).send({ message: "Book deleted succesfully", book });
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something went wrong with deleting book` });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).send({ message: "No book found" });
    }

    return res.status(200).send(book);
  } catch (err) {
    res.status(500).send({ message: `Something went wrong with editing book` });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "No book found" });
    }
    return res.status(200).send(book);
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something went wrong with selecting book` });
  }
});

export default router;
