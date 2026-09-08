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

const isAuthenticatedMiddleware = async (req, res, next) => {
  const username = req.query.username;
  const password = req.query.password;
  const user = await UserListData.get(username, password);
  if (Object.keys(user).length == 0) {
    return res.json({
      message: "Invalid username or password",
    });
  }
  req.user = user;
  next();
};

const isAdminMiddleware = (req, res, next) => {
  const user = req.user;
  if (!user.roles.includes("admin")) {
    return res.json({
      message: "Unauthorized",
    });
  }
  next();
};

app.get(
  "/user-all",
  isAuthenticatedMiddleware,
  isAdminMiddleware,
  (req, res) => {
    const userList = UserListData.getAll();
    return res.json({
      message: "success",
      data: userList,
    });
  },
);

(async () => {
  const username = "yuvansh";
  const password = "abc";
  const hashedPassword = await hashPass(password);
  const user = new User(username, hashedPassword, ["user", "admin"]);
  UserListData.add(user);
})();

app.listen(3000, () => {
  console.log("Application started on http://localhost:3000");
});
