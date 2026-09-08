// Optimized Way For TODO
const express = require("express");
const app = express();
const TaskManager = require("./TaskManager.js");
const {
  updateTodoMiddleWare,
  MiddlewavePut,
  MiddlewavePost,
  MiddleWareID,
  LogRequestMiddleware,
} = require("./MiddleWaveUpdate.js");
const {
  getTodoController,
  postTodoController,
  putTodocontorller,
  patchTodoController,
  deleteTodoController,
} = require("./controller.js");


app.use(express.json());
app.use(LogRequestMiddleware); // so that we can easily see which task is being performed and what inputs are given in body and params

//API to get todo list
app.get("/todo", getTodoController);

app.post("/todo", MiddlewavePost, postTodoController);

app.put("/todo/:id", MiddlewavePut, putTodocontorller);

app.patch("/todo/:id", updateTodoMiddleWare, patchTodoController);

app.delete("/todo/:id", MiddleWareID, deleteTodoController);

app.listen(3000, () => {
  console.log("TODO Application running on http://localhost:3000/");
});
