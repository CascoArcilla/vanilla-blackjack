import Card from "./Card";
import { Suit } from "../consts/Suit";
import { ValuesCard } from "../consts/ValuesCard";

const SUITS_DECK = 4;

export default class Deck {
  constructor() {
    this.cards = new Array(ValuesCard.length * SUITS_DECK);

    for (let index = 0; index < ValuesCard.length; index++) {
      this.cards[index] = new Card(
        Suit.CLUP,
        ValuesCard[index]
      );

      this.cards[index + ValuesCard.length] = new Card(
        Suit.DAIMOND,
        ValuesCard[index]
      );

      this.cards[index + ValuesCard.length * 2] = new Card(
        Suit.SPADES,
        ValuesCard[index]
      );

      this.cards[index + ValuesCard.length * 3] = new Card(
        Suit.HEART,
        ValuesCard[index]
      );
    }
  }

  /**
   * Algoritmo de Fisher-Yates: Es para barajar cartas
   */
  shuffle() {
    const shuffleCards = [...this.cards]; // Crear una copia para no modificar el original
    let currentIndex = shuffleCards.length;
    let randomIndex;

    // Mientras queden elementos por reubicar
    while (currentIndex > 0) {
      // Elegir un elemento aleatorio que no haya sido reubicado
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Intercambiarlo con el elemento actual
      [shuffleCards[currentIndex], shuffleCards[randomIndex]] = [
        shuffleCards[randomIndex],
        shuffleCards[currentIndex],
      ];
    }

    this.cards = shuffleCards;
  }

  drawCard() {
    return this.cards.pop();
  }
}
