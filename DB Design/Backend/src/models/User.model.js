const mongoose = require("mongoose")
//USER SCHEMA
//step 1: creating Schema
const userSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
     
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      address: [
        {
          add: { type: String, required: true },
         
        },
      ],
    
    },
    {
      timestamps: true,
    }
  );
  //step 2: creating the User Model
  const User = mongoose.model("user", userSchema);

  module.exports = User;