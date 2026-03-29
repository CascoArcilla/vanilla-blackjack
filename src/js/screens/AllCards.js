import Deck from "./js/models/Deck";

const wrapScreen = document.querySelector("#wrap-screen");
const deck = new Deck();

let countC = 2
const cardsC = []
const crupier = document.createElement("div");
const showCountC = document.createElement("p")
showCountC.classList.add("pl-4", "text-2xl", "font-bold")
showCountC.textContent = 0

let countP = 2
const cardsP = []
const player = document.createElement("div");
const showCountP = document.createElement("p")
showCountP.classList.add("pl-4", "text-2xl", "font-bold")
showCountP.textContent = 0

crupier.classList.add("flex", "flex-row", "gap-2");
player.classList.add("flex", "flex-row", "gap-2");

deck.shuffle();

for (let i = 0; i < countC; i++) {
    const card = deck.drawCard();
    crupier.appendChild(card.getCardRender());
    cardsC.push(card);
    if (i == 1) {
        card.flip();
    }
}

for (let i = 0; i < countP; i++) {
    const card = deck.drawCard();
    player.appendChild(card.getCardRender());
    cardsP.push(card);
}

wrapScreen.appendChild(crupier);
wrapScreen.appendChild(showCountC);

wrapScreen.appendChild(player);
wrapScreen.appendChild(showCountP);

function updateCountCrupier(cards, showCount) {
    let count = 0;
    for (let i = 0; i < cards.length; i++) {
        if (i == 1) {
            continue;
        }
        count += getCardValue(cards[i].value);
    }
    showCount.textContent = count;
}

function updateCountPlayer(cards, showCount) {
    let count = 0;
    for (let i = 0; i < cards.length; i++) {
        count += getCardValue(cards[i].value);
    }
    showCount.textContent = count;
}

updateCountCrupier(cardsC, showCountC);
updateCountPlayer(cardsP, showCountP);

function addCardPlayer() {
    const card = deck.drawCard();
    player.appendChild(card.getCardRender());
    cardsP.push(card);
    updateCountPlayer(cardsP, showCountP);
}

function addCardCrupier() {
    const card = deck.drawCard();
    crupier.appendChild(card.getCardRender());
    cardsC.push(card);
    updateCountCrupier(cardsC, showCountC);
}

const buttonAddPlayer = document.createElement("button");
buttonAddPlayer.textContent = "Agregar carta";
buttonAddPlayer.classList.add("bg-blue-500", "text-white", "px-4", "py-2", "rounded");
buttonAddPlayer.addEventListener("click", addCardPlayer);
wrapScreen.appendChild(buttonAddPlayer);

const buttonAddCrupier = document.createElement("button");
buttonAddCrupier.textContent = "Agregar carta Crupier";
buttonAddCrupier.classList.add("bg-blue-500", "text-white", "px-4", "py-2", "rounded");
buttonAddCrupier.addEventListener("click", addCardCrupier);
wrapScreen.appendChild(buttonAddCrupier);