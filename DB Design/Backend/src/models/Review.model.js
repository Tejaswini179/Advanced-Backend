
//REVIEW SCHEMA
const mongoose = require('mongoose');

//step 1: creating Schema
const reviewSchema = new mongoose.Schema(
    {
      body: { type: String, required: true },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  //step 2: creating Review Model
  const Review = mongoose.model("review", reviewSchema);

  module.exports = Review;