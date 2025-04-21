export default class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.iconSuit = `asstes/imgs/${this.suit}.png`;
    this.render = document.createElement("div");
  }

  createRenderCard() {
    this.render.classList.add(
      "bg-white",
      "border",
      "border-gray-200",
      "rounded-lg",
      "px-10",
      "py-5",
      "shadow-lg"
    );

    const grapContent = document.createElement("div");
    grapContent.classList.add("flex ", "flex-col ", "items-center");

    const valueShow = document.createElement("div");
    valueShow.classList.add("font-bold ", "text-8xl");
    valueShow.innerText = this.value;

    const suitImage = document.createElement("img");
    suitImage.setAttribute("src", this.iconSuit);
    suitImage.setAttribute("alt", `icono de ${this.suit}`);
    suitImage.classList.add("w-24", "h-24", "mb-3", "rounded-full");

    grapContent.appendChild(valueShow);
    grapContent.appendChild(suitImage);

    this.render.appendChild(grapContent);
  }

  getCard() {
    return this.createRenderCard();
  }
}
