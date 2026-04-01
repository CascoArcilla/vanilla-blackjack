import Deck from "./Deck";
import { getCardValue } from "../consts/ValuesCard";
import { WIN_SCORE } from "../consts/Values";

export default class Dealer {
  #score;
  #cards;
  #deck;

  constructor() {
    this.#score = 0;
    this.#cards = [];
    this.#deck = new Deck();
  }

  shuffleDeck() { this.#deck.shuffle(); }

  drawCard() { return this.#deck.drawCard(); }

  addCard(card) {
    this.#cards.push(card);
  }

  reset() {
    this.#score = 0;
    this.#cards = [];
  }

  isLose() { return this.#score > WIN_SCORE; }

  isBlackjack() { return this.#score === WIN_SCORE; }

  getScore(hideSecondCard = true) {
    let score = 0;
    this.#cards.forEach((card, index) => {
      if (hideSecondCard && index === 1) return;
      score += getCardValue(card.value, score);
    });

    this.#score = score;
    return this.#score;
  }

  getCards() { return this.#cards; }
}
