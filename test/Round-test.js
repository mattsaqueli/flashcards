const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

describe('Round', () => {
  let card1
  let card2
  let card3
  let deck
  let round

  beforeEach('setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round)
  })

  it('should have a deck of cards', () => {
    expect(round.deck).to.equal(deck)
  })

  it('should have a method that returns the current card', () => {
    expect(round.returnCurrentCard(), card1)
  })

  it('should start with 0 turns', () => {
    expect(round.turnCount).to.equal(0)
  })

  it('should update turns when a turn a made', () => {
    expect(round.turnCount, 0)
    round.takeTurn()
    expect(round.turnCount, 1)
    round.takeTurn()
    expect(round.turnCount, 2)
  })

  it('should update current card after a turn', () => {
    round.takeTurn()
    expect(round.returnCurrentCard(), card2)
  })

  it('should be able to store correct answers', () => {
    expect(round.correctAnswer).to.deep.equal([])
  })

  it('should be able to store incorrect answers', () => {
    expect(round.incorrectAnswer).to.deep.equal([])
  })

  it('should give feedback if answer is correct', () => {
    expect(round.takeTurn('sea otter')).to.deep.equal('correct!')
  })

  it('should give feedback if answer is incorrect', () => {
    expect(round.takeTurn('pug')).to.deep.equal('incorrect..')
  })

  it('should calculate the percentage of correct answers', () => {
    round.takeTurn('sea otter')
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('sea otter')
    expect(round.calculatePercentCorrect()).to.equal(50)
    round.takeTurn('appendix')
    expect(round.calculatePercentCorrect()).to.equal(33)
  })


  it('should have a method that ends the round', () => {
    round.takeTurn('sea otter')
    round.takeTurn('appendix')
    round.takeTurn('William')


    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })

})