import { renderMessage } from "./message";
import { updateCounts } from "../ui/rendersCounts";
import { PHASE_STATUS } from "../../consts/Values";
import { enableBet } from "../ui/disableButtons";
import { emptyCards, dealCardDealer } from "../ui/showCards";

export function checkPlayerConditions(game) {
    if (game.getPlayer().isBlackjack()) {
        renderPlayerBlackjack(game);
        renderChangeStatus(game, PHASE_STATUS.BET);

    } else if (game.getPlayer().isLose()) {
        renderPlayerBust(game);
        renderChangeStatus(game, PHASE_STATUS.BET);

    } else {
        game.setStatus(PHASE_STATUS.WAITING_PLAYER_ACTION);
    }
}

export function drawDelaerFlow(game) {
    // Dealer tiene blackjack
    if (game.getDealer().isBlackjack()) {
        renderDealerBlackjack(game);
        renderChangeStatus(game, PHASE_STATUS.BET);

        // Dealer tiene que seguir tomando cartas
    } else if (game.getDealer().isGrow()) {
        game.hitDealer();
        dealCardDealer(game);

        // Dealer pierde
    } else if (game.getDealer().isLose()) {
        renderDealerBust(game);
        renderChangeStatus(game, PHASE_STATUS.BET);

        // Comprobar condiciones del ganador
    } else {
        const winner = game.checkWinner();
        switch (winner) {
            case "player":
                renderPlayerWin(game);
                renderChangeStatus(game, PHASE_STATUS.BET);
                break;
            case "dealer":
                renderDealerWin(game);
                renderChangeStatus(game, PHASE_STATUS.BET);
                break;
            case "draw":
                renderDraw(game);
                renderChangeStatus(game, PHASE_STATUS.BET);
                break;
        }
    }
}


function renderChangeStatus(game, status) {
    setTimeout(() => {
        game.setStatus(status);
        updateCounts(game);
        emptyCards();
        enableBet();
    }, 3000);
}

export function renderDraw(game) {
    renderMessage("¡Empate!, tu puntuación es igual a la del crupier.");
    game.resetRound();
}

export function renderPlayerBlackjack(game) {
    renderMessage("¡Eso es un Blackjack!, ganas la ronda.");
    game.getPlayer().win();
    game.resetRound();
}

export function renderPlayerBust(game) {
    renderMessage("¡Te has pasado!, perdiste la ronda.");
    game.resetRound();
}

export function renderDealerBust(game) {
    renderMessage("¡El crupier se ha pasado!, ganas la ronda.");
    game.getPlayer().win();
    game.resetRound();
}

export function renderDealerBlackjack(game) {
    renderMessage("¡El crupier tiene un Blackjack!, pierdes la ronda.");
    game.resetRound();
}

export function renderDealerWin(game) {
    renderMessage("¡El crupier tiene más puntos que tú!, pierdes la ronda.");
    game.resetRound();
}

export function renderPlayerWin(game) {
    renderMessage("¡Tienes más puntos que el crupier!, ganas la ronda.");
    game.getPlayer().win();
    game.resetRound();
}