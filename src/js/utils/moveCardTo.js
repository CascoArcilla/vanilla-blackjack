/**
 * Permite generar la animacion de que una carte se mueva de una lado exterior hacia su posicion original
 * Considerar que siempre se movera desde la esquina superior derecha externa del padre contenedor
 *
 * @param { HTMLDivElement } card Carta creada con la clase Card
 * @param { HTMLElement } target Padre a donde se movera la Card
 * @param { Boolean } isFirst Indica si es la primer carta que se vera en el padre, si es true esto agrega un margen negativo a la izquierda
 */
export default function moveCardTo(card, target, isFirst = false) {
  target.appendChild(card);

  if (!isFirst) {
    card.style.marginLeft = "-90px";
  }

  let app = document.getElementById("app");

  let fx = app.clientHeight;
  let fy = card.getBoundingClientRect().top - app.getBoundingClientRect().top;

  animationFrom({ fromX: fx, fromY: fy * -1, card: card });
}

function animationFrom(
  { fromX, fromY, card } = { fromX: 0, fromY: 0, card: null }
) {
  card.animate(
    [
      // keyframes
      { transform: `translate(${fromX}px, ${fromY}px)` },
      { transform: `translate(0)` },
    ],
    {
      // opciones de la animación
      duration: 500,
      easing: "ease-out",
      iterations: 1,
    }
  );
}
