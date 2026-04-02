import gsap from "gsap";
import { toggleMenu } from "../ui/toggleMenu.js";
import { checkPlayerConditions, drawDelaerFlow } from "../screens/conditionsWinner.js";
import { renderScoreDealer, updateCounts } from "./rendersCounts.js";
import Game from "../../models/Game.js";

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
 * Calcula el offset desde la izquierda de la pantalla hasta el elemento dado
 * para que parezca que viene desde la izquierda.
 */
function getCenterOffset(element) {
    const rect = element.getBoundingClientRect();
    const centerX = -window.innerWidth;
    const centerY = window.innerHeight / 2;

    return {
        x: centerX,
        y: centerY - (rect.top + rect.height / 2)
    };
}

/**
 * Se usa la libreria gsap para crear una animacion de reparto de cartas inicial
 * 
 * @param {Game} game 
 */
export function dealCards(game) {
    const cardsPlayer = game.getPlayer().getCards();
    const cardsDealer = game.getDealer().getCards();

    const wrapPlayer = document.querySelector("#player-cards");
    const wrapDealer = document.querySelector("#crupier-cards");

    gsap.set([wrapPlayer, wrapDealer], { overflow: "visible" });

    const cp1 = addCardPlayer(cardsPlayer[0]);
    const cd1 = addCardDealer(cardsDealer[0]);
    const cp2 = addCardPlayer(cardsPlayer[1]);
    const cd2 = addCardDealer(cardsDealer[1], true);

    const offsetCP1 = getCenterOffset(cp1);
    const offsetCD1 = getCenterOffset(cd1);
    const offsetCP2 = getCenterOffset(cp2);
    const offsetCD2 = getCenterOffset(cd2);

    const timeLine = gsap.timeline({
        defaults: {
            duration: 0.8,
            ease: "power2.out",
            clearProps: "transform"
        },
        onComplete: () => {
            // Restaurar el scroll y limpiar estilos de clipping
            gsap.set([wrapPlayer, wrapDealer], { clearProps: "overflow" });
            gsap.set([cp1, cd1, cp2, cd2], { clearProps: "transition,zIndex" });

            updateCounts(game);
            checkPlayerConditions(game);
        }
    });

    // Desactivar transiciones CSS y asegurar que estén por encima de todo
    gsap.set([cp1, cd1, cp2, cd2], { transition: "none", zIndex: 50 });

    toggleMenu();

    timeLine
        .from(cp1, { x: offsetCP1.x, y: offsetCP1.y })
        .from(cd1, { x: offsetCD1.x, y: offsetCD1.y }, "-=0.5")
        .from(cp2, { x: offsetCP2.x, y: offsetCP2.y }, "-=0.5")
        .from(cd2, { x: offsetCD2.x, y: offsetCD2.y }, "-=0.5");
}

/**
 * Reparte una carta al jugador
 * 
 * @param {Game} game 
 */
export function dealCardPlayer(game) {
    const card = game.getPlayer().getCards()[game.getPlayer().getCards().length - 1];
    const cardRender = addCardPlayer(card);
    const wrapPlayer = document.querySelector("#player-cards");

    const offset = getCenterOffset(cardRender);

    gsap.set(wrapPlayer, { overflow: "visible" });
    gsap.set(cardRender, { transition: "none", zIndex: 50 });

    toggleMenu();

    gsap.from(cardRender, {
        x: offset.x,
        y: offset.y,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "transform",
        onComplete: () => {
            gsap.set(wrapPlayer, { clearProps: "overflow" });
            gsap.set(cardRender, { clearProps: "transition,zIndex" });

            updateCounts(game);
            checkPlayerConditions(game);
        }
    });
}

/**
 * Reparte una carta al crupier
 * 
 * @param {Game} game 
 */
export function dealCardDealer(game) {
    const card = game.getDealer().getCards()[game.getDealer().getCards().length - 1];
    const cardRender = addCardDealer(card);
    const wrapDealer = document.querySelector("#crupier-cards");

    const offset = getCenterOffset(cardRender);

    gsap.set(wrapDealer, { overflow: "visible" });
    gsap.set(cardRender, { transition: "none", zIndex: 50 });

    toggleMenu();

    gsap.from(cardRender, {
        x: offset.x,
        y: offset.y,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "transform",
        onComplete: () => {
            gsap.set(wrapDealer, { clearProps: "overflow" });
            gsap.set(cardRender, { clearProps: "transition,zIndex" });

            const scoreDealer = game.getDealer().getScore(false);
            renderScoreDealer(scoreDealer);

            setTimeout(() => {
                drawDelaerFlow(game);
            }, 500);
        }
    });
}

export function emptyCards() {
    const wrapPlayer = document.querySelector("#player-cards");
    const wrapDealer = document.querySelector("#crupier-cards");
    wrapPlayer.innerHTML = "";
    wrapDealer.innerHTML = "";
}