const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Tejaswini:Tejaswini@cluster0.0kblt.mongodb.net/ONLINEDB?retryWrites=true&w=majority"
  );
};

module.exports = connect;