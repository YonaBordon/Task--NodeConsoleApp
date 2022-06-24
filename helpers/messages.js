const Menu = () => {
  console.log('=======================');
  console.log(' Selecciona una opcion');
  console.log('=======================\n');

  console.log(`1. Crear tarea`);
  console.log(`2. Listar tareas`);
  console.log(`3. Listar tareas completadas`);
  console.log(`4. Listar tareas pendientes`);
  console.log(`5. Completar tareas`);
  console.log(`6. Borrar tarea`);
  console.log(`0. Salir\n`);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question('Seleccione una opcion: ', (option) => {
    console.log({ option });
    readline.close();
  });
};

module.exports = {
  Menu,
};
