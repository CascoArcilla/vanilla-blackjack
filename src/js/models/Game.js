import Deck from "./Deck";
import Player from "./Player";
import Dealer from "./Dealer";

export default class Game {
    constructor() {
        this.deck = new Deck();
        this.player = new Player();
        this.dealer = new Dealer();
    }
}