const { inqMenu, inqPause, readInput } = require('./helpers/inquirerMenu');
const { Task } = require('./models/task');
const Tasks = require('./models/Tasks');

console.clear();

const main = async () => {
  let option = '';
  const tasks = new Tasks();

  do {
    option = await inqMenu();

    switch (option) {
      case '1':
        const desc = await readInput('Descripcion:');
        tasks.newTask(desc);
        break;
      case '2':
        console.log(tasks.arrayToList);
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        break;
    }
    if (option !== '0') await inqPause();
  } while (option !== '0');
};
main();
