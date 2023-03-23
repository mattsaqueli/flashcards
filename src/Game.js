const data = require('./data');
const Round = require('./Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound
    
  }

  start() {
    const cards = prototypeQuestions.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer))
    const deck = new Deck(cards)
    const round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;