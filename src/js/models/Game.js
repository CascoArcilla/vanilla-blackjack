import Player from "./Player";
import Dealer from "./Dealer";
import { PHASE_STATUS, WIN_SCORE } from "../consts/Values";

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

    hitPlayer() {
        this.#player.addCard(this.#dealer.drawCard());
        return this.#player.getScore();
    }

    hitDealer() {
        this.#dealer.addCard(this.#dealer.drawCard());
        return this.#dealer.getScore();
    }

    resetRound() {
        this.#player.resetBet();
        this.#player.resetCards();
        this.#dealer.resetCards();
    }

    checkWinner() {
        const scorePlayer = this.#player.getScore();
        const scoreDealer = this.#dealer.getScore();

        if (scorePlayer > scoreDealer && scorePlayer <= WIN_SCORE) {
            this.#player.win();
            return "player";
        } else if (scorePlayer < scoreDealer && scoreDealer <= WIN_SCORE) {
            return "dealer";
        } else if (scorePlayer === scoreDealer) {
            this.#player.push();
            return "draw";
        }
    }

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
