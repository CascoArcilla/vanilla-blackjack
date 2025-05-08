import {
  CARD_RENDER_DIV,
  CARD_REVERSE,
  CARD_SUIT_IMAGE,
  CARD_VALUES,
  CARD_WRAPER_DIV,
} from "../consts/Styles";
import { Suit } from "../consts/Suit";

export default class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.iconSuit = `assets/imgs/${this.suit}`;
    this.render = document.createElement("div");
    this.colorText = "";
    this.flipped = false;
  }

  setSizeCardRender() {
    this.height = this.render.getBoundingClientRect().height;
    this.width = this.render.getBoundingClientRect().width;

    this.render.style.width = `${this.width}px`;
    this.render.style.height = `${this.height}px`;
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

    this.render.classList.add(this.colorText, ...CARD_RENDER_DIV);

    const content = document.createElement("div");
    content.classList.add(...CARD_WRAPER_DIV);

    const backCard = document.createElement("img");
    backCard.classList.add(...CARD_REVERSE);
    backCard.src = "assets/imgs/reverse.png";
    backCard.alt = "reverso de una carta";

    const valueShowTop = document.createElement("div");
    valueShowTop.classList.add(...CARD_VALUES);
    valueShowTop.innerText = this.value;

    const valueShowBottom = document.createElement("div");
    valueShowBottom.classList.add(...CARD_VALUES, "rotate-180");
    valueShowBottom.innerText = this.value;

    const suitImage = document.createElement("img");
    suitImage.setAttribute("src", this.iconSuit);
    suitImage.setAttribute("alt", `icono de ${this.suit}`);
    suitImage.classList.add(...CARD_SUIT_IMAGE);

    const divImg = document.createElement("div");
    divImg.classList.add("px-5", "my-3");
    divImg.appendChild(suitImage);

    content.appendChild(valueShowTop);
    content.appendChild(divImg);
    content.appendChild(valueShowBottom);

    this.render.appendChild(backCard);
    this.render.appendChild(content);
  }

  rotateY() {
    this.render.animate(
      [
        // keyframes
        { transform: `rotateY(0deg)` },
        { transform: `rotateY(180deg)` },
      ],
      {
        // opciones de la animación
        duration: 260,
        easing: "ease-out",
        iterations: 1,
      }
    );
  }

  flip() {
    this.setSizeCardRender();

    if (this.flipped) {
      this.rotateY();

      this.render.querySelector("img").classList.add("hidden");
      this.render.querySelector("div").classList.remove("hidden");

      this.flipped = !this.flipped;
    } else {
      this.rotateY();

      this.render.querySelector("img").classList.remove("hidden");
      this.render.querySelector("div").classList.add("hidden");

      this.flipped = !this.flipped;
    }
  }

  getCard() {
    return { suit: this.suit, value: this.value };
  }

  getCardRender() {
    this.createRenderCard();
    return this.render;
  }
}
