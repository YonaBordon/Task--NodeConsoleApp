const { Task } = require('./task');

// {uuid: { id: , desc: }}
class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  get listToArray() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      list.push(this._list[key]);
    });
    return list;
  }

  completeList() {
    this.listToArray.forEach((task, i) => {
      console.log(
        `${i + 1}. ${task.desc} :: ${
          task.completedIn ? 'Completa' : 'Pendiente'
        }`,
      );
    });
  }

  uploadFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  newTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}
module.exports = Tasks;
