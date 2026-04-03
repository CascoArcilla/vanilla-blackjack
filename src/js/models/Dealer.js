import Deck from "./Deck.js";
import { getCardValue } from "../consts/ValuesCard.js";
import { WIN_SCORE } from "../consts/Values.js";

export default class Dealer {
  #score;
  #cards;
  #deck;
  #limitScore;

  constructor() {
    this.#score = 0;
    this.#cards = [];
    this.#deck = new Deck();
    this.#limitScore = 17;
  }

  shuffleDeck() { this.#deck.shuffle(); }

  drawCard() {
    if (this.#deck.hasCards()) {
      return this.#deck.drawCard();
    }

    this.#deck = new Deck();
    this.#deck.shuffle();
    return this.#deck.drawCard();
  }

  addCard(card) {
    this.#cards.push(card);
  }

  resetCards() {
    this.#score = 0;
    this.#cards = [];
  }

  isGrow() { return this.getScore(false) < this.#limitScore; }

  isBlackjack() { return this.getScore(false) === WIN_SCORE; }

  isLose() { return this.getScore(false) > WIN_SCORE; }

  getScore(hideSecondCard = true) {
    let score = 0;
    let aces = 0;

    this.#cards.forEach((card, index) => {
      if (hideSecondCard && index === 1) return;

      if (card.value === "A") {
        aces++;
      } else {
        score += getCardValue(card.value, score);
      }
    });

    for (let i = 0; i < aces; i++) {
      score += getCardValue("A", score);
    }

    this.#score = score;
    return this.#score;
  }

  getCards() { return this.#cards; }
}
