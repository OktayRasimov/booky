import express from "express";
import mongoose from "mongoose";
import { PORT, url } from "./config.js";
import booksRoute from "../server/routes/booksRoute.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(201).send(`Welcome to the MERN stack`);
});

app.use("/books", booksRoute);

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
