import gsap from "gsap";
import { toggleMenu } from "../ui/toggleMenu";

export function addCardDealer(card, hideCard = false) {
    const wrapCards = document.querySelector("#crupier-cards");
    let cardRender;

    if (hideCard) {
        cardRender = card.getCardReverse();
    } else {
        cardRender = card.getCardRender();
    }

    wrapCards.appendChild(cardRender);
    return cardRender;
}

export function addCardPlayer(card) {
    const wrapCards = document.querySelector("#player-cards");
    const cardRender = card.getCardRender();
    wrapCards.appendChild(cardRender);
    return cardRender;
}


/**
 * Se usa la libreria gsap para crear una animacion de reparto de cartas inicial
 * 
 * @param {Array<Card>} cardsPlayer 
 * @param {Array<Card>} cardsDealer 
 */
export function dealCards(cardsPlayer, cardsDealer) {
    const timeLine = gsap.timeline({
        defaults: {
            duration: 0.8,
            ease: "power2.out",
            clearProps: "transform" // Asegura que el translate se elimine al terminar
        }
    });

    const origenX = -window.innerWidth;
    const origenY = window.innerHeight / 2;

    const cp1 = addCardPlayer(cardsPlayer[0]);
    const cd1 = addCardDealer(cardsDealer[0]);
    const cp2 = addCardPlayer(cardsPlayer[1]);
    const cd2 = addCardDealer(cardsDealer[1], true);

    // Desactivar transiciones CSS para evitar conflictos con GSAP
    gsap.set([cp1, cd1, cp2, cd2], { transition: "none" });

    // Animaciones encadenadas y solapadas
    timeLine
        .from(cp1, { x: origenX, y: -origenY })
        .from(cd1, { x: origenX, y: -origenY }, "-=0.6")
        .from(cp2, { x: origenX, y: -origenY }, "-=0.6")
        .from(cd2, { x: origenX, y: -origenY }, "-=0.6");

    // Restaurar la transición al finalizar
    timeLine.eventCallback("onComplete", () => {
        gsap.set([cp1, cd1, cp2, cd2], { clearProps: "transition" });
    });

    toggleMenu();
}

/**
 * Reparte una carta al jugador
 * 
 * @param {Card} card 
 */
export function dealCardPlayer(card) {
    const cardRender = addCardPlayer(card);
    gsap.from(cardRender, {
        x: -window.innerWidth,
        y: window.innerHeight / 2,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "transform"
    });
}