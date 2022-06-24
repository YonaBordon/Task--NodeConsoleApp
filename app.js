const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async () => {
  do {
    option = await showMenu();
    console.log({ option });
    await pause();
  } while (option !== '0');
};
main();
