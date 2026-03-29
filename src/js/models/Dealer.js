import Deck from "./Deck";

export default class Dealer {
  constructor({
    score = 0,
    cards = [],
    deck = new Deck()
  }) {
    this.score = score;
    this.cards = cards;
    this.deck = deck;
  }

  shuffleDeck() {
    this.deck.shuffle();
  }

  dealCardsFirst() {
    this.shuffleDeck();
    let cardsPlayer = [];
    cardsPlayer.push(this.cardToPlayer());
    drawCard();
    cardsPlayer.push(this.cardToPlayer());
    drawCard();

    return cardsPlayer;
  }

  cardToPlayer() {
    return this.deck.drawCard();
  }

  drawCard() {
    this.ownCards.push(this.deck.drawCard());
  }
}
