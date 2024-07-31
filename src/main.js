const inquirer = require('inquirer');
const Game = require('./game');

async function main() {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Qual é o nome do seu herói?'
  });

  const game = new Game(name);
  game.start();
}

main();
