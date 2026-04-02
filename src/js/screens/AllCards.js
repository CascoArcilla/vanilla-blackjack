import Deck from "../models/Deck.js";

export function showCards() {
    const wrapScreen = document.querySelector("#wrap-screen");
    const deck = new Deck();

    deck.cards.forEach(card => {
        wrapScreen.appendChild(card.getCardRender());
    });
}