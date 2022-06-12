const express = require('express');
const Review = require('../models/Review.model')
const router = express.Router();

//REVIEW CRUD

router.get("", async (req, res) => {
    try {
      const reviews = await Review.find().lean().exec();
      return res.status(200).send({ reviews: reviews });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.post("/create", async (req, res) => {
    try {
      const reviews = await Review.create(req.body);
      return res.status(201).send({ reviews: reviews });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      console.log(req.params);
      const review = await Review.findById(req.params.id);
      return res.status(200).send({ review: review });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.patch("/:id/edit", async (req, res) => {
    try {
      const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(review);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  router.delete("/:id/delete", async (req, res) => {
    try {
      const review = await Review.findByIdAndDelete(req.params.id);
      return res.status(200).send(review);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });

  module.exports = router;