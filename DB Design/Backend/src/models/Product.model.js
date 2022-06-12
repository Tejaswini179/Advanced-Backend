const mongoose = require('mongoose');

//Product SCHEMA
//step 1: creating Schema
const productSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  //step 2: creating Product Model
  const Product = mongoose.model("product", productSchema);
  
  module.exports = Product;