const { inqMenu, inqPause } = require('./helpers/inquirerMenu');
const { Task } = require('./models/task');
const Tasks = require('./models/Tasks');

console.clear();

const main = async () => {
  let option = '';
  do {
    option = await inqMenu();
    console.log({ option });

    if (option !== '0') await inqPause();
  } while (option !== '0');
};
main();
