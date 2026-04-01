import { renderMessage } from "./message";
import { updateCounts } from "../ui/rendersCounts";
import { PHASE_STATUS } from "../../consts/Values";
import { enableBet } from "../ui/disableButtons";
import { emptyCards } from "../ui/showCards";

export function playerBlackjack(game) {
    renderMessage("¡Eso es un Blackjack!, ganas la ronda.");
    game.getPlayer().win();
    game.resetRound();
}

export function playerBust(game) {
    renderMessage("¡Te has pasado!, perdiste la ronda.");
    game.resetRound();
}

export function checkConditions(game) {
    if (game.getPlayer().isBlackjack()) {
        playerBlackjack(game);
        changeStatus(game, PHASE_STATUS.BET);

    } else if (game.getPlayer().isLose()) {
        playerBust(game);
        changeStatus(game, PHASE_STATUS.BET);

    } else {
        game.setStatus(PHASE_STATUS.WAITING_PLAYER_ACTION);
    }
}

function changeStatus(game, status) {
    setTimeout(() => {
        game.setStatus(status);
        updateCounts(game);
        emptyCards();
        enableBet();
    }, 3000);
}