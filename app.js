const {
  inqMenu,
  inqPause,
  readInput,
  deleteTaskList,
  confirm,
  showCheckList,
} = require('./helpers/inquirerMenu');
const { saveDB, readDB } = require('./helpers/saveFile');
const { Task } = require('./models/task');
const Tasks = require('./models/Tasks');

console.clear();

const main = async () => {
  let option = '';

  const tasks = new Tasks();
  const tasksDB = readDB();
  if (tasksDB) {
    tasks.uploadFromArray(tasksDB);
    console.log(tasks);
  }
  await inqPause();

  do {
    option = await inqMenu();

    switch (option) {
      case '1':
        const desc = await readInput('Descripcion:');
        tasks.newTask(desc);
        break;
      case '2':
        tasks.completeList();
        break;
      case '3':
        tasks.taskComplete();
        break;
      case '4':
        tasks.taskComplete(false);
        break;
      case '5':
        const ids = await showCheckList(tasks.listToArray);
        console.log(ids);
        tasks.toggleComplete(ids);
        break;
      case '6':
        const id = await deleteTaskList(tasks.listToArray);
        if (id !== '0') {
          console.log(id);
          const ok = await confirm('Esta seguro?');
          if (ok) {
            tasks.deleteTask(id);
            console.log(`Tarea borrada correctamente`);
          }
        }

        break;
    }
    saveDB(tasks.listToArray);
    if (option !== '0') await inqPause();
  } while (option !== '0');
};
main();
