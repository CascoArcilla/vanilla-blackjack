import { toggleMenu } from "../ui/toggleMenu";
import { renderMessage } from "./message";
import { disableBet, enableHitAndStand } from "../ui/disableButtons";
import { renderMoneyPlayer, renderScorePlayer, renderScoreDealer } from "../ui/rendersCounts";
import { dealCards } from "../ui/showCards";

export function hit(game) {
    const player = game.getPlayer();

    if (player.getBet() <= 0) {
        toggleMenu();
        renderMessage("Debes apostar antes de empezar la ronda");
        return false;
    }

    if (!player.hasCards()) {
        initialHit(game);
        return true;
    }

    playerHit(game);
    return true;
}

function playerHit(game) {
    console.log("Carda de jugador tomada");
    return true;
}

function initialHit(game) {
    disableBet();
    game.makeBet();
    game.initialCast();

    renderMoneyPlayer(game.getPlayer().getMoney());
    renderScorePlayer(game.getPlayer().getScore());
    renderScoreDealer(game.getDealer().getScore());

    dealCards(game.getPlayer().getCards(), game.getDealer().getCards());
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