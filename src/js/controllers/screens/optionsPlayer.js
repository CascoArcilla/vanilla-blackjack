import { renderMessage } from "./message.js";
import { disableBet, enableBet } from "../ui/disableButtons.js";
import { renderScorePlayer, renderMoneyPlayer, renderBetPlayer, renderScoreDealer } from "../ui/rendersCounts.js";
import { dealCards, dealCardPlayer } from "../ui/showCards.js";
import { PHASE_STATUS } from "../../consts/Values.js";
import { toggleMenu } from "../ui/toggleMenu.js";
import { drawDelaerFlow } from "./conditionsWinner.js";

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
    const scorePlayer = game.hitPlayer();
    renderScorePlayer(scorePlayer);
    dealCardPlayer(game);
    return true;
}

function initialHit(game) {
    game.setStatus(PHASE_STATUS.DEAL);
    game.makeBet();
    game.initialCast();

    renderMoneyPlayer(game.getPlayer().getMoney());
    renderBetPlayer(game.getPlayer().getBet());

    dealCards(game);
}

export function stand(game) {
    if (game.getStatus() !== PHASE_STATUS.WAITING_PLAYER_ACTION) {
        return false;
    }

    game.setStatus(PHASE_STATUS.DEAL);

    const cardToReveal = game.getDealer().getCards()[1];
    cardToReveal.flip();

    const scoreDealer = game.getDealer().getScore(false);
    renderScoreDealer(scoreDealer);

    drawDelaerFlow(game);

    return true;
}
