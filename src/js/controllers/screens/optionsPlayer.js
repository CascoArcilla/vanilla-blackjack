import { renderMessage } from "./message";
import { disableBet, enableBet } from "../ui/disableButtons";
import { renderMoneyPlayer, renderScorePlayer, renderScoreDealer } from "../ui/rendersCounts";
import { dealCards, dealCardPlayer } from "../ui/showCards";
import { PHASE_STATUS } from "../../consts/Values";
import { toggleMenu } from "../ui/toggleMenu";

export function hit(game) {
    if (game.getStatus() === PHASE_STATUS.DEAL) {
        return false;
    }

    disableBet();

    const player = game.getPlayer();

    if (player.getBet() <= 0) {
        toggleMenu();
        renderMessage("Debes apostar antes de empezar la ronda");
        game.setStatus(PHASE_STATUS.BET);
        enableBet();
        return false;
    }

    if (!player.hasCards() && game.getStatus() === PHASE_STATUS.BET) {
        initialHit(game);
        return true;
    }

    playerHit(game);
    return true;
}

function playerHit(game) {
    game.setStatus(PHASE_STATUS.DEAL);
    game.hitPlayer();
    renderScorePlayer(game.getPlayer().getScore());
    dealCardPlayer(game);
    return true;
}

function initialHit(game) {
    game.setStatus(PHASE_STATUS.DEAL);
    game.makeBet();
    game.initialCast();

    renderMoneyPlayer(game.getPlayer().getMoney());
    renderScorePlayer(game.getPlayer().getScore());
    renderScoreDealer(game.getDealer().getScore());

    dealCards(game);
}

export function stand(game) {
    const player = game.getPlayer();

    if (player.getBet() <= 0) {
        toggleMenu();
        renderMessage("Debes apostar antes de empezar la ronda");
        return false;
    }

    return true;
}