const express = require("express");

const productsController = require("./controller/product.controllers")

const app = express()

app.use("/products", productsController)

module.exports = app;