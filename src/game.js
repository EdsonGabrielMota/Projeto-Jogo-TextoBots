const Hero = require('./hero');
const Villain = require('./villain');
const Shop = require('./shop');
const { intro, phase1, phase2, phase3, trainHero } = require('./utils');

class Game {
  constructor(heroName) {
    this.hero = new Hero(heroName);
  }

  start() {
    intro(this.hero);
    this.phase1();
  }
//FASE 1
  phase1() { 
  console.log('\nVocê avista um tronco dando sopa ali parado e resolve tentar usa-lo para treinar.\n');
  console.log('Dependendo do seu manuseio você consiguirá aumentar sua força ou sua saúde.\n\n');
    trainHero(this.hero, () => phase1(this.hero, this.nextPhase.bind(this, 1)));
    
  }
//FASE 2
  phase2() {
    console.log(`\nVocê avista um lago e resolve nadar.\n`);
    console.log('Dependendo da forma que você nadar consiguirá aumentar sua força ou sua saúde.\n\n'); 
    trainHero(this.hero, () => phase2(this.hero, this.nextPhase.bind(this, 2)));
  }
//FASE 3
  phase3() {
    console.log(`\n ${this.hero.name} avista uma gigantesca rocha em seu caminho.\n`);
    console.log('Dependendo da forma que você quebrar consiguirá aumentar sua força ou sua saúde.\n\n');
    trainHero(this.hero, () => {
      const shop = new Shop();
      shop.enter(this.hero, () => phase3(this.hero, this.endGame.bind(this)));
    });
  }
//PASSAR DE FASE
  nextPhase(currentPhase) {
    if (currentPhase === 1) {
      this.phase2();
    } else if (currentPhase === 2) {
      this.phase3();
    }
  }
//FIM DO GAME
  endGame() {
    console.log('\nVocê salvou a todos nós!\n');
    console.log('Obrigado por jogar!\n\n');
  }
}

module.exports = Game;
