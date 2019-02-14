const { expect } = require('chai');
const { Pokemon, Trainer, Battle } = require('../index.js');

describe('Pokemon', () => {
  const pikachu = new Pokemon(
    'Pikachu',
    100,
    10,
    'Pikachu',
    'Thunderbolt',
    'Electric'
  );

  it('when returning pokemon constructor we check to see if it returns an object', () => {
    expect(pikachu).to.be.an.instanceof(Pokemon);
  });
  it('check when we return pokemon name it has the relevant property name', () => {
    expect(pikachu).to.have.all.keys(
      'name',
      'hitPoints',
      'attackDamage',
      'sound',
      'move',
      'type'
    );
  });
  it('check whether pokemon methods exist', () => {
    expect(pikachu.talk).to.exist;
    expect(pikachu.useYourMoves).to.exist;
  });
});
describe('Trainer', () => {
  const jynx = new Pokemon('Jynx', 120, 30, 'Jynx', 'Dry skin', 'Ice');

  const trainer = new Trainer('Challen');
  it('when returning trainer constructor we check to see if it returns an object', () => {
    expect(typeof trainer).to.eql('object');
  });
  it('check when we return trainer name and storage it has the relevant property name and storage', () => {
    expect(trainer.name).to.exist;
    expect(trainer.storage).to.exist;
  });
  it('check whether trainer methods exist', () => {
    expect(trainer.catch).to.exist;
    trainer.catch(jynx);
    expect(trainer.storage.hasOwnProperty);
  });
});
describe('Battle', () => {
  const jynx = new Pokemon('Jynx', 120, 30, 'Jynx', 'Dry skin', 'Ice');

  const pikachu = new Pokemon(
    'Pikachu',
    100,
    10,
    'Pikachu',
    'Thunderbolt',
    'Electric'
  );
  const trainerOne = new Trainer('Challen');
  const trainerTwo = new Trainer('Veronica');
  it('when using battle constructor it returns an object', () => {
    expect(typeof trainer).to.eql('object');
  });
});
