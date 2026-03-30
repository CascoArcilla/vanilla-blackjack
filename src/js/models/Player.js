import { getCardValue } from "../consts/ValuesCard";
import { WIN_SCORE } from "../consts/Values";

export default class Player {
    constructor(money = 100, name = "Player") {
        this.money = money;
        this.name = name;
        this.score = 0;
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
        this.score += getCardValue(card.value, this.score);
    }

    reset() {
        this.score = 0;
        this.cards = [];
    }

    betOrLose(amount) { this.money -= amount; }

    win(amount) { this.money += amount; }

    isLose() { return this.score > WIN_SCORE; }

    isBlackjack() { return this.score === WIN_SCORE; }
}