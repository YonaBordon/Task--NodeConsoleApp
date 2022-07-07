const inquirer = require('inquirer');
const { Task } = require('../models/task');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `1. Crear tarea`,
      },
      {
        value: '2',
        name: `2. Listar tareas`,
      },
      {
        value: '3',
        name: `3. Listar tareas completadas`,
      },
      {
        value: '4',
        name: `4. Listar tareas pendientes`,
      },
      {
        value: '5',
        name: `5. Completar tareas`,
      },
      {
        value: '6',
        name: `6. Borrar tarea`,
      },
      {
        value: '0',
        name: `0. Salir\n`,
      },
    ],
  },
];

const inqMenu = async () => {
  console.clear();

  console.log('=======================');
  console.log(' Selecciona una opcion');
  console.log('=======================\n');

  const { option } = await inquirer.prompt(questions);

  return option;
};

const inqPause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: ` Presione ENTER para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) return 'Por favor, ingrese un valor';
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const deleteTaskList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    return {
      value: task.id,
      name: `${i + 1}. ${task.desc}`,
    };
  });

  choices.unshift({
    value: '0',
    name: `0. Cancelar`,
  });

  const tasksQuestions = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    },
  ];
  const { id } = await inquirer.prompt(tasksQuestions);
  return id;
};

const confirm = async (message) => {
  const confirmQuestion = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];
  const { ok } = await inquirer.prompt(confirmQuestion);
  return ok;
};

const showCheckList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    return {
      value: task.id,
      name: `${i + 1} ${task.desc}`,
      checked: task.completedIn ? true : false,
    };
  });

  const checkQuestion = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'selecciones',
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(checkQuestion);
  return ids;
};

module.exports = {
  confirm,
  deleteTaskList,
  inqMenu,
  inqPause,
  readInput,
  showCheckList,
};
