const { inqMenu, inqPause, readInput } = require('./helpers/inquirerMenu');
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
        break;
      case '6':
        break;
    }
    saveDB(tasks.listToArray);
    if (option !== '0') await inqPause();
  } while (option !== '0');
};
main();
