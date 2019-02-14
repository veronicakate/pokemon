function Pokemon(name, hitPoints, attackDamage, sound, move, type = 'normal') {
  (this.name = name),
  (this.hitPoints = hitPoints),
  (this.attackDamage = attackDamage),
  (this.sound = sound),
  (this.move = move),
  (this.type = type);
}

const pokemonMethods = {
  talk: function() {
    return this.sound;
  },
  useYourMoves: function() {
    return this.move;
  }
};
Pokemon.prototype = pokemonMethods;

function Trainer(name) {
  (this.name = name), (this.storage = {});
}
const trainerMethods = {
  catch: function(pokemon) {
    this.storage[pokemon.name] = pokemon;
  }
};
Trainer.prototype = trainerMethods;

function Battle(trainerOne, trainerTwo, pokemonOne, pokemonTwo) {
  trainerOne.fight;
}

const battleMethods = {
  fight: function(pokemonOne, pokemonTwo) {
    pokemonTwo.hitPoints -= pokemonOne.attackDamage;
    if (pokemonTwo.hitPoints <= 0)
      console.log('Pokemon one is the winner, woo, Pokemon two is dead');
  }
};
Battle.prototype = battleMethods;

module.exports = { Pokemon, Trainer, Battle };
