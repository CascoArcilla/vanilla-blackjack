import { Suit } from "./Suit";
import Card from "./models/Card";

export default function showAllCards() {
  showCards(Suit.HEART);
  showCards(Suit.CLUP);
  showCards(Suit.DAIMOND);
  showCards(Suit.SPADES);
}

function showCards(suit) {
  document
    .querySelector("#app")
    .appendChild(new Card(suit, "A").getCardRender());
  for (let number = 1; number < 11; number++) {
    document
      .querySelector("#app")
      .appendChild(new Card(suit, number).getCardRender());
  }
  document
    .querySelector("#app")
    .appendChild(new Card(suit, "J").getCardRender());
  document
    .querySelector("#app")
    .appendChild(new Card(suit, "Q").getCardRender());
  document
    .querySelector("#app")
    .appendChild(new Card(suit, "K").getCardRender());
}
