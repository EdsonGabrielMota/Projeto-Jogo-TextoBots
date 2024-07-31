const inquirer = require('inquirer');
const items = require('../data/items.json');
//LOJA PARA COMPRAR ITENS
class Shop {
  async enter(hero, callback) {
    console.log('\nBem-vindo à loja!\n Você tem', hero.coins, 'moedas.');
    const { buy } = await inquirer.prompt({
      type: 'confirm',
      name: 'buy',
      message: '\nDeseja comprar algo?\n'
    });
//ESTRUTURA CONDICIONAL NA HORA DA COMPRA SIM OU NÃO
    if (buy) {
      const { itemIndex } = await inquirer.prompt({
        type: 'list',
        name: 'itemIndex',
        message: 'Escolha um item:',
        choices: items.map((item, index) => ({ name: `${item.name} - ${item.price} moedas`, value: index }))
      });

      const item = items[itemIndex];

      if (hero.spendCoins(item.price)) {
        hero.strength += item.strength;
        console.log(`\n\nVocê comprou ${item.name}! Sua força agora é ${hero.strength}.`);
      } else {
        console.log('\nMoedas insuficientes.\n');
      }
    }

    callback();
  }
}

module.exports = Shop;
