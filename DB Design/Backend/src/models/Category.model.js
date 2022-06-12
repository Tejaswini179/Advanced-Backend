
const mongoose = require('mongoose');

//Categorty SCHEMA
//step 1: creating Schema
const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    //- [Ancestors]
    //- ParentID
  });
  //step 2: creating category Model
  const Categorty = mongoose.model("category", categorySchema);

  module.exports = Categorty;
  