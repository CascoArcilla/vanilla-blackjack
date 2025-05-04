/**
 * Algoritmo de Fisher-Yates: Es para barajar cartas
 * Esta implementado dentro de la clase Deck.js
 */
function shuffle(array) {
  const arr = [...array]; // Crear una copia para no modificar el original
  let currentIndex = arr.length;
  let randomIndex;

  // Mientras queden elementos por reubicar
  while (currentIndex != 0) {
    // Elegir un elemento aleatorio que no haya sido reubicado
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Intercambiarlo con el elemento actual
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
