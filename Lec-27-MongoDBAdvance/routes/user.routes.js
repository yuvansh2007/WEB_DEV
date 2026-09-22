const express = require("express");
const { UserModel } = require("../models/user");
const  Router  = express.Router();

Router.post("/", async (req, res) => {
  const { username } = req.body;
  const user = new UserModel({
    username,
  });
  await user.save();
  res.json({
    message: "success",
    user: user,
  });
});

module.exports = Router;
