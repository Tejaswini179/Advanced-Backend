const express = require('express');
const Brand = require('../models/Brand.model')
const router = express.Router();

//BRAND CRUD
router.get("", async (req, res) => {
    try {
      const brands = await Brand.find().populate("productId").lean().exec();
      return res.status(200).send({ brands: brands });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.post("/create", async (req, res) => {
    try {
      const brand = await Brand.create(req.body);
      return res.status(201).send({ brand: brand });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      console.log(req.params);
      const brand = await Brand.findById(req.params.id);
      return res.status(200).send({ brand: brand });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.patch("/:id/edit", async (req, res) => {
    try {
      const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(brand);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });

  module.exports = router