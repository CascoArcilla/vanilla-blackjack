export const ValuesCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

export function getCardValue(value) {
  switch (value) {
    case "A":
      return 1;

    case "J":
    case "Q":
    case "K":
      return 10;

    default:
      return value;
  }
}

function defineValueAs(scorePlayer) {
  let winScore = 21;
  let eleven = 11;
  let one = 1;

  if (scorePlayer + eleven > winScore) {
    return one;
  } else {
    return eleven;
  }
}
