import express from "express";
import mongoose from "mongoose";
import booksRoute from "../server/routes/booksRoute.js";

import { PORT, url } from "./config.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(201).send(`welcomr`);
});

app.use("/books", booksRoute);
app.use(cors());

mongoose
  .connect(url)
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App listening to port : ${PORT}`);
    });
  })
  .catch((err) => {
    res
      .status(500)
      .send({ message: "Something went wrong with connecting to database" });
  });
