const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connectWithMongo = async () => {
  await mongoose.connect(
    "mongodb://jainyuvansh2007_db_user:1ZPHyO9Yh8EIuPtE@ac-dzxirra-shard-00-00.g2ta0tm.mongodb.net:27017,ac-dzxirra-shard-00-01.g2ta0tm.mongodb.net:27017,ac-dzxirra-shard-00-02.g2ta0tm.mongodb.net:27017/?ssl=true&replicaSet=atlas-7mftco-shard-0&authSource=admin&appName=Cluster0",
  );
  console.log("connected to mongo db");
};

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  task: String,
  status: Boolean,
});

const TodoModel = mongoose.model("todo-list", TodoSchema);

app.post("/todo", async (req, res) => {
  const { task, status = false } = req.body;
  const todo = new TodoModel({
    task: task,
    status: status,
  });
  await todo.save();
  res.json({
    message: "success",
    data: todo,
  });
});

app.patch("/todo", async (req, res) => {
  const { id, task, status } = req.body;

  await TodoModel.findByIdAndUpdate(id, {
    task: task,
    status: status,
  });
  res.json({
    message: "success",
  });
});

app.get("/todo", async (req, res) => {
  const id = req.query.id;
  const searchQuery = {};
  if (id) {
    searchQuery._id = id;
  }
  const todoList = await TodoModel.find(searchQuery);

  res.json({
    message: "success",
    data: todoList,
  });
});

app.get("/health", (req, res) => {
  const status = mongoose.connection.readyState;
  const statusStates = {
    0: "Disconnected",
    1: "Connected",
    2: "Connecting",
    3: "Disconnecting",
  };

  res.json({
    health: "OK",
    database_status: statusStates[status],
  });
});

(async () => {
  try {
    connectWithMongo();
  } catch (error) {
    console.log(error);
    throw new Error("Mongo Connection Failed");
  }
})();

app.listen(3000, () => {
  console.log("site started on http://localhost:3000");
});
