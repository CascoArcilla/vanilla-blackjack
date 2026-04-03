import { renderBetPlayer } from "../ui/rendersCounts.js";
import { renderMessage } from "./message.js";
import { PHASE_STATUS } from "../../consts/Values.js";

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
        game.getBetMenu().close();
        renderMessage("No tienes saldo para apostar");
        return false;
    }

    if (currentBet + bet > currentMoney) {
        game.getBetMenu().close();
        renderMessage("No tienes saldo suficiente para apostar");
        return false;
    }

    player.growBet(bet);
    renderBetPlayer(player.getBet());
    return true;
}
