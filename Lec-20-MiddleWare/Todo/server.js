// Optimized Way For TODO
const express = require("express");
const app = express();
const TaskManager = require("./TaskManager.js");
const { updateTodoMiddleWare } = require("./MiddleWaveUpdate.js");
const { MiddlewavePut } = require("./MiddleWarePut.js");
const { MiddlewavePost, MiddleWareID } = require("./MiddleWavepost.js");
const TodoList = new TaskManager();

app.use(express.json());

//API to get todo list
app.get("/todo", (req, res) => {
  res.json({
    message: "Success",
    data: TodoList.get(),
  });
});

app.post("/todo", MiddlewavePost, (req, res) => {
  const todo = req.body.task;

  TodoList.add(todo);
  res.json({
    message: "Success",
  });
});

app.put("/todo/:id", MiddlewavePut, (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;

  const Casteid = Number(id);
  try {
    TodoList.overwrite(Casteid, task, status);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
  res.json({
    message: "Update Successful",
  });
});

app.patch("/todo/:id", updateTodoMiddleWare, (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;

  try {
    TodoList.update(id, task, status);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }

  res.json({
    message: "Update Successful",
  });
});

app.delete("/todo/:id",MiddleWareID, (req, res) => {
  const id = req.params.id;

  try {
    TodoList.delete(id);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
  res.json({
    message: "Success",
  });
});

app.listen(3000, () => {
  console.log("TODO Application running on http://localhost:3000/");
});
