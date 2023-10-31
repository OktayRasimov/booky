import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
});

export const Book = mongoose.model("Book", bookSchema);
