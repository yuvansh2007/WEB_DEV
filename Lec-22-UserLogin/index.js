const express = require("express");
const { hashPass } = require("./helper");
const User = require("./user-Model");
const UserList = require("./userList-Model");
const app = express();

const UserListData = new UserList();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Application started successfully");
});

app.post("/user", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const hashedPassword = await hashPass(password);
  const user = new User(username, hashedPassword);
  UserListData.add(user);
  res.json({
    message: "success",
  });
});

app.get("/user", async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const user = await UserListData.get(username, password);
  if (Object.keys(user).length == 0) {
    return res.json({
      message: "Invalid username or password",
    });
  }

  res.json({
    message: "Success",
    data: {
      username: user.username,
      password: user.password,
    },
  });
});

app.listen(3000, () => {
  console.log("Application started on http://localhost:3000");
});
