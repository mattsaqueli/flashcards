const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')


describe('Game', () => {
  let newGame

  beforeEach('setup', () => {
    newGame = new Game()
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', () => {
    expect(newGame).to.be.an.instanceOf(Game)
  })

  it('should start a new game', () => {
    expect(newGame.start(), 'Welcome to FlashCards! You are playing with 30 cards. -----------------------------------------------------------------------')
  })

  it('should track current round', () => {
    newGame.start()
    expect(newGame.currentRound).to.be.an.instanceOf(Round)
  })

})


