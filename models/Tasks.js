const { Task } = require('./task');

// {uuid: { id: , desc: }}
class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  deleteTask(id = '') {
    if (this._list[id]) delete this._list[id];
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

  taskComplete(complete = true) {
    let index = 0;

    this.listToArray.forEach((task) => {
      if (complete) {
        if (task.completedIn) {
          index += 1;
          console.log(
            `${index}. ${task.desc} :: ${
              task.completedIn ? 'Completa' : 'Pendiente'
            } :: ${task.completedIn} `,
          );
        }
      } else {
        if (!task.completedIn) {
          index += 1;
          console.log(
            `${index}. ${task.desc} :: ${
              task.completedIn ? 'Completa' : 'Pendiente'
            }`,
          );
        }
      }
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

  toggleComplete(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completedIn) {
        task.completedIn = new Date().toISOString();
      }
    });

    this.listToArray.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completedIn = null;
      }
    });
  }
}
module.exports = Tasks;
