const inquirer = require('inquirer');
const Villain = require('./villain');
//INTRODUÇÃO
function intro(hero) {
    console.log('\n\nTEXTOBOTS AVENTURA ROBOTIZADA SEM IGUAL\n\n');
  console.log(`Bem-vindo, ${hero.name}! Sua jornada começa agora.\n\n`);
  console.log(`Você é um robô,que luta para proteger o mundo de outros robôs que só querem destruir o mundo.\n\n`);
  console.log('Seu objetivo é derrotar os vilões que assolam esta terra e trazer paz ao mundo.\n\n');
}
//PARTE DE TREINAMENTO DE HEROI
function trainHero(hero, next) {
  console.log('\n\nVocê tem a oportunidade de treinar e melhorar suas habilidades.\n');
  inquirer.prompt([
    {
      type: 'list',
      name: 'training',
      message: '\nEscolha um treinamento:\n',
      choices: [
        { name: 'Treinar força (+5 de força)', value: 'strength' },
        { name: 'Treinar defesa (+10 de saúde)', value: 'health' }
      ]
    }
  ]).then(answers => {
    if (answers.training === 'strength') {
      hero.strength += 5;
      console.log(`Sua força agora é ${hero.strength}.`);
      console.log('Você sente sua força aumentar enquanto pratica.\n\n');
    } else if (answers.training === 'health') {
      hero.health += 10;
      console.log(`Sua saúde agora é ${hero.health}.`);
      console.log('Você passa horas treinando sua resistência, aprendendo a suportar mais dano.\n\n');
    }
    next();
  });
}
//BATALHA DA FASE 1
function phase1(hero, next) {
  console.log('\nFase 1: Malvabot aparece!\n');
  console.log('\n\nVocê entra em uma floresta escura, os galhos rangem ao vento e a atmosfera é sombria.');
  console.log('De repente, um Malvabot salta de trás de uma árvore, brandindo uma adaga enferrujada.\n\n');
  const villain = new Villain('Malvabot', 30, 5);
  battle(hero, villain, 1, next);
 
}
//BATALHA DA FASE 2
function phase2(hero, next) {
  console.log('Fase 2: Um Imperialbot aparece!');
  console.log('\n\nVocê se encontra em um vale amplo, cercado por montanhas imponentes.');
  console.log('Um Imperialbot gigante surge, sua lataria verde e braços enormes são assustadores.\n\n');
  const villain = new Villain('Imperialbot', 50, 10);
  battle(hero, villain, 2, next);
  
}
//BATALHA DA FASE 3
function phase3(hero, next) {
  console.log('\nFase 3: Malvatron aparece!\n');
  console.log('\n\nVocê chega a uma caverna, o calor intenso e o cheiro de enxofre preenchem o ar.');
  console.log('De dentro da caverna,o lider dos robôs Malignos emerge,Malvatron o impiedoso se apronta para batalha.\n\n');
  const villain = new Villain('Malvatron', 100, 20);
  battle(hero, villain, 3, next);
 
}
//COMANDO BATALHA EM GERAL
//ESTRUTURA DE REPETIÇÃO ATÉ A BATALHA TERMINAR
function battle(hero, villain, phase, next) {
  console.log(`\nUma batalha feroz começa entre ${hero.name} e ${villain.name}!`);
  while (hero.health > 0 && villain.health > 0) {
    const heroAttack = hero.attack();
    villain.takeDamage(heroAttack);
    console.log(`${hero.name} atacou ${villain.name} causando ${heroAttack} de dano.`);
//CONDICIONAL PARA CALCULO DE VIDA
    if (villain.health > 0) {
      const villainAttack = villain.attack();
      hero.takeDamage(villainAttack);
      console.log(`${villain.name} atacou ${hero.name} causando ${villainAttack} de dano.`);
    }
  }
//TELA PÓS LUTA COM RECOMPENSA
  if (hero.health > 0) {
    console.log(`\n${hero.name} derrotou ${villain.name}!\n`);
    hero.addCoins(20);
    console.log(`${hero.name} encontrou 20 moedas no corpo de ${villain.name}.`);
    
    hero.status()
    
    next(phase);
    //EM CASO DE DERROTA
  } else {
    console.log(`${hero.name} foi derrotado.`);
    console.log(`A aventura de ${hero.name} termina aqui, mas suas lendas viverão para sempre.`);
    next(phase);
  }
}

module.exports = { intro, phase1, phase2, phase3, trainHero };
