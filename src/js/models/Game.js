import Player from "./Player";
import Dealer from "./Dealer";

export default class Game {
    #player;
    #dealer;
    #winAmount;
    #activateRound;

    constructor(winAmount = 500, startAmount = 100, playerName = "Jugador") {
        this.#player = new Player(startAmount, playerName);
        this.#dealer = new Dealer();
        this.#winAmount = winAmount;
        this.#activateRound = false;
        this.#dealer.shuffleDeck();
    }

    initialCast() {
        this.startRound();
        const numberOfCards = 2;

        for (let i = 0; i < numberOfCards; i++) {
            this.#player.addCard(this.#dealer.drawCard());
            this.#dealer.addCard(this.#dealer.drawCard());
        }
    }

    makeBet() {
        const bet = this.#player.getBet();
        this.#player.betOrLose(bet);
    }

    startRound() { this.#activateRound = true; }

    stopRound() { this.#activateRound = false; }

    isRoundStarted() { return this.#activateRound; }

    getPlayer() { return this.#player; }

    getDealer() { return this.#dealer; }

    getWinAmount() { return this.#winAmount; }
}