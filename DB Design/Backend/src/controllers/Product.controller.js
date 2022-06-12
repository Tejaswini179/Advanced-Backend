const express = require('express');
const Product = require('../models/Product.model');
const router = express.Router();

//PRODUCT CRUD
router.get("", async (req, res) => {
    try {
      const products = await Product.find().lean().exec();
      return res.status(200).send({ products: products });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  router.post("/create", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(201).send({ product: product });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      console.log(req.params);
      const product = await Product.findById(req.params.id);
      return res.status(200).send({ product: product });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.patch("/:id/edit", async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(product);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.delete("/:id/delete", async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      return res.status(200).send(product);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });

  module.exports = router