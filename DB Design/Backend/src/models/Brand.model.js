const mongoose = require("mongoose")

//BRAND SCHEMA
//step 1: creating Schema
const brandSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
  
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  //step 2: creating Brand Model
  const Brand = mongoose.model("brand", brandSchema);

  module.exports = Brand