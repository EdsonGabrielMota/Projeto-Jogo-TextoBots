class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
    }
  //Formula de calculo de dano
    attack() {
      return Math.floor(Math.random() * this.strength);
    }
  
    takeDamage(damage) {
      this.health -= damage;
    }
  }
  
  module.exports = Character;
  