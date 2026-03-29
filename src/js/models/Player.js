export default class Player {
    constructor({
        name = "Player",
        score = 0,
        money = 100,
        cards = []
    }) {
        this.name = name;
        this.score = score;
        this.money = money;
        this.cards = cards;
    }

    addCard(card) {
        this.cards.push(card);
        this.score += card.value;
    }

    reset() {
        this.score = 0;
        this.cards = [];
    }
}