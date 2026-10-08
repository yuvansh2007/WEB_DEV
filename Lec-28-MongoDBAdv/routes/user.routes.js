const express = require("express");
const { UserModel } = require("../models/user");
const { hashPass, comparePass } = require("./password_routes");
const Jwt = require("jsonwebtoken");
const Router = express.Router();

Router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const hashedPass = await hashPass(password);
  const user = new UserModel({
    username,
    password: hashedPass,
  });
  await user.save();
  res.json({
    message: "success",
    user: user,
  });
});

Router.get("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    username,
  });
  if (!user) {
    res.status(400).json({
      message: "Unauthorized",
    });
  }
  const hashedPassword = user.password;
  const isValidPass = await comparePass(hashedPassword, password);
  if (!isValidPass) {
    res.status(400).json({
      message: "Unauthorized",
    });
  }

  const accessToken = Jwt.sign(
    {
      id: user,
      _id,
      username: user.username,
    },
    "secret",
    { expiresIn: "1h" },
  );

  res.json({
    message: "success",
    user: user,
  });
});

module.exports = Router;
