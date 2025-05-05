import { Suit } from "../consts/Suit";

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
      "p-2",
      "shadow-lg",
      this.colorText,
      "card-blackjack",
      "relative"
    );

    const grapContent = document.createElement("div");
    grapContent.classList.add("flex", "flex-col", "items-center");

    const valueShowTop = document.createElement("div");
    valueShowTop.classList.add("font-bold", "text-4xl", "w-full");
    valueShowTop.innerText = this.value;

    const valueShowBottom = document.createElement("div");
    valueShowBottom.classList.add(
      "font-bold",
      "text-4xl",
      "w-full",
      "rotate-180"
    );
    valueShowBottom.innerText = this.value;

    const suitImage = document.createElement("img");
    suitImage.setAttribute("src", this.iconSuit);
    suitImage.setAttribute("alt", `icono de ${this.suit}`);
    suitImage.classList.add("w-24", "h-24", "mb-3", "rounded-full");

    const divImg = document.createElement("div");
    divImg.classList.add("px-5", "my-3");
    divImg.appendChild(suitImage);

    grapContent.appendChild(valueShowTop);
    grapContent.appendChild(divImg);
    grapContent.appendChild(valueShowBottom);

    this.render.appendChild(grapContent);
  }

  getCard() {
    return { suit: this.suit, value: this.value };
  }

  getCardRender() {
    this.createRenderCard();
    return this.render;
  }
}
