const Character = require('./character');

class Hero extends Character {
  constructor(name) {
    super(name, 100, 50);
    this.coins = 50;
  }
    //BARRA DE ILUSTRAÇÃO DA PARTE DOS STATUS
    status() {
        let informacao= `||Nome: ${this.name}|| ||Vida: ${this.health}|| ||Força: ${this.strength}|| ||Dinheiro: R$ ${this.coins}||`;

        var tamanho = informacao.length;
    
        var barras = '';
    
        for (let i = 0; i < tamanho; i++) {
            barras += '=';
        }
    
        console.log(barras);
        console.log(informacao);
       console.log(barras);
    }
    
    addCoins(amount) {
      this.coins += amount;
    }
  
    spendCoins(amount) {
      if (this.coins >= amount) {
        this.coins -= amount;
        return true;
      }
      return false;
    }
  }
  
  module.exports = Hero;
  