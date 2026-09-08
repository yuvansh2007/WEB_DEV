const TaskManager = require("./TaskManager");

const TodoList = new TaskManager();
const getTodoController = (req, res) => {
  res.json({
    message: "Success",
    data: TodoList.get(),
  });
};

const postTodoController = (req, res) => {
  const todo = req.body.task;

  TodoList.add(todo);
  res.json({
    message: "Success",
  });
};

const putTodocontorller = (req, res) => {
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
};

const patchTodoController = (req, res) => {
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
};

const deleteTodoController = (req, res) => {
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
};

module.exports = {
  getTodoController,
  postTodoController,
  putTodocontorller,
  patchTodoController,
  deleteTodoController,
};
