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
        this.getScore();
    }

    resetCards() {
        this.#score = 0;
        this.#cards = [];
    }

    resetBet() { this.#bet = 0; }

    getScore() {
        const newScore = this.#cards.reduce((score, card) => score + getCardValue(card.value, score), 0);
        this.#score = newScore;
        return newScore;
    }

    betOrLose(amount) { this.#money -= amount; }

    win() { this.#money += this.#bet * 2; }

    isLose() { return this.#score > WIN_SCORE; }

    isBlackjack() { return this.getScore() === WIN_SCORE }

    growBet(amount) { this.#bet += amount; }

    getMoney() { return this.#money; }

    getName() { return this.#name; }

    getCards() { return this.#cards; }

    getBet() { return this.#bet; }

    hasCards() { return this.#cards.length > 0; }
}