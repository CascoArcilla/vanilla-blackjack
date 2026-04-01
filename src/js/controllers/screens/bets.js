import { renderBetPlayer } from "../ui/rendersCounts";
import { renderMessage } from "./message";
import { toggleMenu } from "../ui/toggleMenu";
import { PHASE_STATUS } from "../../consts/Values";

export function bet(bet, game) {
    if (game.getStatus() !== PHASE_STATUS.BET) {
        return false;
    }

    const player = game.getPlayer();

    if (bet === "reset") {
        player.resetBet();
        renderBetPlayer(player.getBet());
        return true;
    }

    bet = parseInt(bet);
    const currentMoney = player.getMoney();
    const currentBet = player.getBet();

    if (currentMoney <= 0) {
        toggleMenu();
        renderMessage("No tienes saldo para apostar");
        return false;
    }

    if (currentBet + bet > currentMoney) {
        toggleMenu();
        renderMessage("No tienes saldo suficiente para apostar");
        return false;
    }

    player.growBet(bet);
    renderBetPlayer(player.getBet());
    return true;
}
