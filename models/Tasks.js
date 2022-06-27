const { Task } = require('./task');

// {uuid: { id: , desc: }}
class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  newTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}
module.exports = Tasks;
