import { WIN_SCORE } from "./Values.js";

export const ValuesCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

export function getCardValue(value, score) {
  switch (value) {
    case "A":
      return defineValueAs(score);

    case "J":
    case "Q":
    case "K":
      return 10;

    default:
      return value;
  }
}

function defineValueAs(score) {
  const eleven = 11;
  const one = 1;

  return (score + eleven <= WIN_SCORE) ? eleven : one;
}
