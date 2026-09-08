const express = require("express");
const app = express();

app.use(express.json());

let TodoList = [
  {
    id: 1,
    task: "Swim",
    status: false,
  },
];

//API to get todo list
app.get("/todo", (req, res) => {
  res.json({
    message: "Success",
    data: TodoList,
  });
});

app.post("/create-todo", (req, res) => {
  // const body = req.body;
  // const todo = body.todo;
  const todo = req.body.todo; //equivalent to const body = req.body; const todo = body.todo;
  console.log("THIS IS TODO FROM BODY", todo, req.body);
  const newTask = {
    id: TodoList.length + 1, //This is to introduce a new unique id currently it is dependent on Index
    task: todo,
    status: false,
  };
  TodoList.push(newTask);
  res.json({
    message: "Success",
  });
});

//This creates a problem as it will add new index if the index does not exist
// app.put("/overwrite-todo/:index", (req, res) => {
//   const task = req.body.task;
//   const status = req.body.status;
//   const index = req.params.index;

//   TodoList[index] = {
//     task: task,
//     status: status,
//   };

//   res.json({
//     message: "Update Successful",
//   });
// });

app.put("/overwrite-todo/:id", (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;

  const updateIndex = TodoList.findIndex((todo) => {
    if (todo.id == id) return todo;
  });

  if (updateIndex == -1) {
    return res.json({
      message: "NOT FOUND",
    });
  }

  TodoList[updateIndex] = {
    id: Number(id),
    task: task,
    status: status,
  };

  res.json({
    message: "Update Successful",
  });
});

app.patch("/patch-todo/:id", (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;

  const updateIndex = TodoList.findIndex((todo) => {
    if (todo.id == id) return todo;
  });

  if (updateIndex == -1) {
    return res.json({
      message: "NOT FOUND",
    });
  }

  const oldTodo = TodoList[updateIndex];

  if (task) oldTodo.task = task;

  if (status != undefined && status != null) oldTodo.status = status;

  TodoList[updateIndex] = oldTodo;

  res.json({
    message: "Update Successful",
  });
});

app.delete("/delete-todo/:id", (req, res) => {
  const id = req.params.id;

  const temp = TodoList.filter((todo) => {
    if (todo.id != id) return todo;
  });
  TodoList = temp;
  res.json({
    message: "Success",
  });
});

app.listen(3000, () => {
  console.log("TODO Application running on http://localhost:3000/");
});
