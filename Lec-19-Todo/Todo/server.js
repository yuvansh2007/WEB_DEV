// Optimized Way For TODO
const express = require("express");
const app = express();
const TaskManager = require("./TaskManager.js");
const TodoList = new TaskManager();

app.use(express.json());

//API to get todo list
app.get("/todo", (req, res) => {
  res.json({
    message: "Success",
    data: TodoList.get(),
  });
});

app.post("/create-todo", (req, res) => {
  const todo = req.body.todo;
  TodoList.add(todo);
  res.json({
    message: "Success",
  });
});

app.put("/overwrite-todo/:id", (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;

  try {
    TodoList.overwrite(id, task, status);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
  res.json({
    message: "Update Successful",
  });
});

app.patch("/patch-todo/:id", (req, res) => {
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

app.delete("/delete-todo/:id", (req, res) => {
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
