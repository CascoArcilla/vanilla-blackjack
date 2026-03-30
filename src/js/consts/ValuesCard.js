import { WIN_SCORE } from "./Values";

export const ValuesCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

export function getCardValue(value, scorePlayer) {
  switch (value) {
    case "A":
      return defineValueAs(scorePlayer);

    case "J":
    case "Q":
    case "K":
      return 10;

    default:
      return value;
  }
}

function defineValueAs(scorePlayer) {
  const eleven = 11;
  const one = 1;

  if (scorePlayer + eleven <= WIN_SCORE) {
    return eleven;
  } else {
    return one;
  }
}
