const { inqMenu, inqPause } = require('./helpers/inquirerMenu');

console.clear();

const main = async () => {
  do {
    option = await inqMenu();
    console.log({ option });
    if (option !== '0') await inqPause();
  } while (option !== '0');
};
main();
