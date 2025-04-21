import { Suit } from "./Suit";

export default class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.iconSuit = `assets/imgs/${this.suit}`;
    this.render = document.createElement("div");
    this.colorText = "";
  }

  setColorText() {
    if (this.suit == Suit.CLUP || this.suit == Suit.SPADES) {
      this.colorText = "text-black";
    } else if (this.suit == Suit.HEART) {
      this.colorText = "text-red-600";
    } else if (this.suit == Suit.DAIMOND) {
      this.colorText = "text-red-700";
    }
  }

  createRenderCard() {
    this.setColorText();

    this.render.classList.add(
      "bg-white",
      "border",
      "border-gray-200",
      "rounded-lg",
      "px-10",
      "py-5",
      "shadow-lg",
      this.colorText
    );

    const grapContent = document.createElement("div");
    grapContent.classList.add("flex", "flex-col", "items-center");

    const valueShow = document.createElement("div");
    valueShow.classList.add("font-bold", "text-8xl");
    valueShow.innerText = this.value;

    const suitImage = document.createElement("img");
    suitImage.setAttribute("src", this.iconSuit);
    suitImage.setAttribute("alt", `icono de ${this.suit}`);
    suitImage.classList.add("w-24", "h-24", "mb-3", "rounded-full");

    grapContent.appendChild(valueShow);
    grapContent.appendChild(suitImage);

    this.render.appendChild(grapContent);
    return this.render;
  }

  getCard() {
    this.createRenderCard();
    return this.render;
  }
}
