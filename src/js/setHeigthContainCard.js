import { Suit } from "./consts/Suit";
import Card from "./models/Card";

export default function setHeightContainCard(container) {
  let card = new Card(Suit.CLUP, "A");
  let rendCard = card.render();
  container.appendChild(rendCard);
  let height = container.clientHeight;
  container.style.minHeight = `${height}px`;
  rendB.style.display = "none";
}
