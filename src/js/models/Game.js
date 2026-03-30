import Player from "./Player";
import Dealer from "./Dealer";

export default class Game {
    constructor(winAmount = 500, startAmount = 100, playerName = "Jugador",) {
        this.player = new Player(startAmount, playerName);
        this.dealer = new Dealer();
        this.winAmount = winAmount;
    }

    initialCast() {
        this.dealer.shuffleDeck();
        const numberOfCards = 2;

        for (let i = 0; i < numberOfCards; i++) {
            this.player.addCard(this.dealer.drawCard());
            this.dealer.addCard(this.dealer.drawCard());
        }
    }
}