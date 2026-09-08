class TaskManager {
  TodoMap = {};
  lastIndex = -1;

  get() {
    return Object.values(this.TodoMap);
  }

  add(task, status = false) {
    this.TodoMap[this.lastIndex + 1] = {
      id: this.lastIndex + 1,
      task, //equivalent task: task
      status, // equivalent status: status
    };
    this.lastIndex += 1;
  }

  update(id, task, status) {
    if (!this.TodoMap[id]) {
      throw new Error("Not Found");
    }

    if (status != undefined && status != null) this.TodoMap[id].status = status;
    if (task) this.TodoMap[id].task = task;
  }

  overwrite(id, task, status) {
    if (!this.TodoMap[id]) {
      throw new Error("Not Found");
    }
    this.TodoMap[id] = {
      id: id,
      task: task,
      status: status,
    };
  }

  delete(id) {
    if (!this.TodoMap[id]) {
      throw new Error("Not Found");
    }
    delete this.TodoMap[id];
  }
}

module.exports = TaskManager;
