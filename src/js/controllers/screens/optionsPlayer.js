import { toggleMenu } from "../ui/toggleMenu";
import { renderMessage } from "./message";
import { disableBet } from "../ui/disableBet";
import { renderMoneyPlayer } from "../ui/rendersCounts";

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

    return true;
}

function initialHit(game) {
    disableBet();
    game.makeBet();
    game.initialCast();
    renderMoneyPlayer(game.getPlayer().getMoney());
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