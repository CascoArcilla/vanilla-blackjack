import ShowCreen from "../utils/showScreen";
import { ChangeSreen as ChangeSreenHome } from "./ScreenHome";
import { ChangeSreen as ChangeSreenGame } from "./ScreenGame";
import { SET_GAME_TEMPLATE } from "../ui/templateSetGame";

function ScreenSetGame() {
    return SET_GAME_TEMPLATE;
}

document.addEventListener("click", (e) => {
    if (e.target.closest("#btn-cancel-setup")) {
        ChangeSreenHome();
    }

    if (e.target.closest("#btn-start-game")) {
        const playerNameLong = document.querySelector("#player-name").value.trim();
        const winAmount = parseInt(document.querySelector("#win-amount").value);
        const startAmount = parseInt(document.querySelector("#start-amount").value);
        ChangeSreenGame(winAmount, startAmount, playerNameLong);
    }
});

export function ChangeSreen() {
    ShowCreen(ScreenSetGame());
}
