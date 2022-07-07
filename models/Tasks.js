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
      const ic = `${i + 1}`.green;
      console.log(
        `${ic}. ${task.desc} :: ${
          task.completedIn ? 'Completa'.green : 'Pendiente'.yellow
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
              task.completedIn ? 'Completa'.green : 'Pendiente'.yellow
            } :: ${task.completedIn.green} `,
          );
        }
      } else {
        if (!task.completedIn) {
          index += 1;
          console.log(
            `${index}. ${task.desc} :: ${
              task.completedIn ? 'Completa'.green : 'Pendiente'.yellow
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
