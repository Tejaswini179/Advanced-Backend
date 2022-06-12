const express = require("express");
const User = require("../models/User.model");
const router = express.Router();

//CRUD OPERATIONS

//GET => getting data
//POST => adding data to the server
//PUT/patch => updating data in the server
//DELETE => deleting data from the server

//USERS CRUD
router.get("", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
      return res.status(200).send({ users: users });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.post("/create", async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.status(201).send({ user: user });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      console.log(req.params);
      const user = await User.findById(req.params.id);
      return res.status(200).send({ user: user });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.patch("/:id/edit", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  router.delete("/:id/delete", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id/addresses", async (req, res) => {
    try {
      //   const users = await User.findById().lean().exec();
      //   return res.status(200).send({ users : users });
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { $push: { address: req.body } },
        { new: true }
      );
      return res.status(201).send(user);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id/addresses/create", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id,{ $push: { addresses: req.body } },{new:true});
      return res.status(201).send(user)
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  
  router.get("/:id/addresses/idx/edit", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(201).send(user);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  });
  

module.exports = router;