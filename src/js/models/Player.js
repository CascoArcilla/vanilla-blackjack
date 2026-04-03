import { getCardValue } from "../consts/ValuesCard.js";
import { WIN_SCORE } from "../consts/Values.js";

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
        let score = 0;
        let aces = 0;

        for (const card of this.#cards) {
            if (card.value === "A") {
                aces++;
            } else {
                score += getCardValue(card.value, score);
            }
        }

        for (let i = 0; i < aces; i++) {
            score += getCardValue("A", score);
        }

        this.#score = score;
        return score;
    }

    betOrLose(amount) { this.#money -= amount; }

    win() { this.#money += this.#bet * 2; }

    isLose() { return this.#score > WIN_SCORE; }

    isBlackjack() { return this.getScore() === WIN_SCORE }

    growBet(amount) { this.#bet += amount; }

    push() { this.#money += this.#bet; }

    getMoney() { return this.#money; }

    getName() { return this.#name; }

    getCards() { return this.#cards; }

    getBet() { return this.#bet; }

    hasCards() { return this.#cards.length > 0; }
}