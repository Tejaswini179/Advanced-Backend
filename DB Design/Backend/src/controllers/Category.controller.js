const express = require('express');
const Categorty = require('../models/Category.model');
const router = express.Router();

//Categorty CRUD
router.get("", async (req, res) => {
    try {
      const categories = await Categorty.find().lean().exec();
      return res.status(200).send({ categories: categories });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.post("/create", async (req, res) => {
    try {
      const categories = await Categorty.create(req.body);
      return res.status(201).send({ categories: categories });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      console.log(req.params);
      const categorty = await Categorty.findById(req.params.id);
      return res.status(200).send({ categorty: categorty });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.patch("/:id/edit", async (req, res) => {
    try {
      const categorty = await Categorty.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).send(categorty);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  router.delete("/:id/delete", async (req, res) => {
    try {
      const categorty = await Categorty.findByIdAndDelete(req.params.id);
      return res.status(200).send(categorty);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });

  module.exports = router