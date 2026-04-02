import { renderMessage } from "./message";
import { disableBet, enableBet } from "../ui/disableButtons";
import { renderScorePlayer, renderMoneyPlayer, renderBetPlayer, renderScoreDealer } from "../ui/rendersCounts";
import { dealCards, dealCardPlayer } from "../ui/showCards";
import { PHASE_STATUS } from "../../consts/Values";
import { toggleMenu } from "../ui/toggleMenu";
import { drawDelaerFlow } from "./conditionsWinner";

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
