const express = require("express");
const router = express.Router();

const User = require('../models/userModel');

//routes

//CRUD  Operations

//View/Read

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

//Create

router.post("/users", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});


module.exports = router;