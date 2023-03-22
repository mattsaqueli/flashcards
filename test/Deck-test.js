const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', () => {
  let deck
  let card1
  let card2
  let card3

  beforeEach('setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
    deck = new Deck([card1, card2, card3])
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should contain an array of cards', () => {
    expect(deck.cards).to.be.a('array')
    expect(deck.cards).to.have.lengthOf(3)
  })

  it('should have a method to count the cards', () => {
    expect(deck.countCards()).to.equal(3)
  })

})