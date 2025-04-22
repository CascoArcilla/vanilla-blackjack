import Deck from "./Deck";

class Crupier {
  constructor() {
    this.deck = new Deck();
    this.ownCards = [];
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
