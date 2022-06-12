const mongoose = require('mongoose');

//ORDER SCHEMA
//step 1: creating Schema
const orderSchema = new mongoose.Schema(
    {
      //   title: { type: String, required: true },
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
  //step 2: creating Order Model
  const Order = mongoose.model("order", orderSchema);
  
  module.exports = Order;