const express = require("express");
const router = express.Router();

const UserModel = require("../models/userModel");

//routes

//CRUD  Operations

//Read

router.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post("/getuserbyemail", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const users = await UserModel.findOne({ email });
    if (!users) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

//Create

router.post("/createUsers", async (req, res) => {
  console.log("Working Fine");
  try {
    console.log("Inside try block");
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const datapreset = await UserModel.findOne({ email });
    if (datapreset) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const newUser = await UserModel.create({ name, email, password });
    res.status(200).json({ success: true, user: newUser });
  } catch (err) {
    console.log("Inside catch block");
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
