export const ValuesCard = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

export function getRealValue(value, scorePlayer) {
  switch (value) {
    case "A":
      return defineValueAs(scorePlayer);
      break;

    case "J":
    case "Q":
    case "K":
      return 10;
      break;

    default:
      return value;
      break;
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
