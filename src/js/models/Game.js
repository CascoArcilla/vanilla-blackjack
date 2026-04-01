import Player from "./Player";
import Dealer from "./Dealer";
import { PHASE_STATUS } from "../consts/Values";

export default class Game {
    #player;
    #dealer;
    #winAmount;
    #status;

    constructor(winAmount = 500, startAmount = 100, playerName = "Jugador") {
        this.#player = new Player(startAmount, playerName);
        this.#dealer = new Dealer();
        this.#winAmount = winAmount;
        this.#status = PHASE_STATUS.BET;

        this.#dealer.shuffleDeck();
    }

    initialCast() {
        const numberOfCards = 2;

        for (let i = 0; i < numberOfCards; i++) {
            this.#player.addCard(this.#dealer.drawCard());
            this.#dealer.addCard(this.#dealer.drawCard());
        }
    }

    hitPlayer() { this.#player.addCard(this.#dealer.drawCard()); }

    hitDealer() { this.#dealer.addCard(this.#dealer.drawCard()); }

    makeBet() {
        const bet = this.#player.getBet();
        this.#player.betOrLose(bet);
    }

    getPlayer() { return this.#player; }

    getDealer() { return this.#dealer; }

    getWinAmount() { return this.#winAmount; }

    getStatus() { return this.#status; }

    setStatus(status) { this.#status = status; }
}
