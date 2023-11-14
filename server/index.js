import express from "express";
import mongoose from "mongoose";
import booksRoute from "../server/routes/booksRoute.js";
import cors from "cors";

import { PORT, uri } from "./config.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(201).send(`welcomr`);
});

app.use(cors());
app.use("/books", booksRoute);

// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     console.log("Successfully connected to Atlas");
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

//    ORIGINAL
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App listening to port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
