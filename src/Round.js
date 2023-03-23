const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    this.incorrectAnswer = []
    this.correctAnswer = []
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount]
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.returnCurrentCard())
    this.turnCount++
    if (guess !== currentTurn.card.correctAnswer) {
      this.incorrectAnswer.push(currentTurn.card.id)
    } 
    else if (guess === currentTurn.card.correctAnswer) {
      this.correctAnswer.push(currentTurn.card.id)
    }
    return currentTurn.giveFeedback()
  }

  calculatePercentCorrect() {
   return Math.floor((1 - (this.incorrectAnswer.length / this.turnCount)) * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}



module.exports = Round