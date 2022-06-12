const express = require('express');
const Order = require('../models/order.model');
const router = express.Router();


//Orders CRUD
router.get("", async (req, res) => {
    try {
      const orders = await Order.find().lean().exec();
      return res.status(200).send({ orders: orders });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.post("/create", async (req, res) => {
    try {
      const orders = await Order.create(req.body);
      return res.status(201).send({ orders: orders });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      console.log(req.params);
      const order = await Order.findById(req.params.id);
      return res.status(200).send({ order: order });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.patch("/:id/edit", async (req, res) => {
    try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(order);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  router.delete("/:id/delete", async (req, res) => {
    try {
      const order = await Order.findByIdAndDelete(req.params.id);
      return res.status(200).send(order);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  module.exports = router;