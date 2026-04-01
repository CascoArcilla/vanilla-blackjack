import { getCardValue } from "../consts/ValuesCard";
import { WIN_SCORE } from "../consts/Values";

export default class Player {
    #money;
    #name;
    #score;
    #cards;
    #bet;

    constructor(money = 100, name = "Player") {
        this.#money = money;
        this.#name = name;
        this.#score = 0;
        this.#cards = [];
        this.#bet = 0;
    }

    addCard(card) {
        this.#cards.push(card);
        this.#score += getCardValue(card.value, this.#score);
    }

    reset() {
        this.#score = 0;
        this.#cards = [];
        this.#bet = 0;
    }

    betOrLose(amount) { this.#money -= amount; }

    win(amount) { this.#money += amount; }

    isLose() { return this.#score > WIN_SCORE; }

    isBlackjack() { return this.#score === WIN_SCORE; }

    growBet(amount) { this.#bet += amount; }

    resetBet() { this.#bet = 0; }

    getMoney() { return this.#money; }

    getName() { return this.#name; }

    getScore() { return this.#score; }

    getCards() { return this.#cards; }

    getBet() { return this.#bet; }

    hasCards() { return this.#cards.length > 0; }
}