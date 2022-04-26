const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/user");
const SECRET_KEY = "1234567";

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  console.log(req.body.email, req.body.password);
  if (!user)
    return res
      .status(400)
      .send({ message: "Invalid email / pw provided for authentication" });

  let pwValid = await bcrypt.compare(req.body.password, user.password);
  if (!pwValid)
    return res
      .status(400)
      .send({ message: "Invalid email / pw provided for authentication" });

  let token = jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    SECRET_KEY
  );
  return res
    .status(200)
    .send({ token: token, isAdmin: user.isAdmin, id: user._id });
    
});
module.exports = router;
