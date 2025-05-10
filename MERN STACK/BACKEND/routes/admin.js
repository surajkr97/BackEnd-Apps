const express = require("express");
const router = express.Router();

router.post("/createAdmin", async (req, res) => {
  try {
    console.log("Working Fine");
    res.status(200).send("Hello Admin");
  } catch (error) {
    console.log("Error in creating admin", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
