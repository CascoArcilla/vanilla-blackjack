import { Suit } from "./Suit";
import Card from "./Card";

export default function showAllCards() {
  showCards(Suit.HEART);
  showCards(Suit.CLUP);
  showCards(Suit.DAIMOND);
  showCards(Suit.SPADES);
}

function showCards(suit) {
  document.querySelector("#app").appendChild(new Card(suit, "A").getCard());
  for (let number = 1; number < 11; number++) {
    document
      .querySelector("#app")
      .appendChild(new Card(suit, number).getCard());
  }
  document.querySelector("#app").appendChild(new Card(suit, "J").getCard());
  document.querySelector("#app").appendChild(new Card(suit, "Q").getCard());
  document.querySelector("#app").appendChild(new Card(suit, "K").getCard());
}
