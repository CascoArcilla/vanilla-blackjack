export default function moveCardTo(card, parenToMove, isFirst = false) {
  parenToMove.appendChild(card);
  card.style.position = "relative";

  if (!isFirst) {
    card.style.marginLeft = "-90px";
  }

  let fx = app.clientWidth;
  let fy = 0;

  animationFrom({ fromX: fx, fromY: fy, card: card });
}

function animationFrom(
  { fromX, fromY, card } = { fromX: 0, fromY: 0, card: null }
) {
  card.animate(
    [
      // keyframes
      { transform: `translate(${fromX}px, ${fromY}px)` },
      // { opacity: 1, offset: 0.5 }, // offset es equivalente al porcentaje
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
