import ShowCreen from "../utils/showScreen.js";
import { ChangeSreen as ChangeSreenSetGame } from "./ScreenSetGame.js";
import { ChangeSreen as ChangeSreenHelp } from "./ScreenHelp.js";
import { HOME_TEMPLATE } from "../ui/templateHome.js";

function ScreenHome() {
    return HOME_TEMPLATE;
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-jugar")) {
        ChangeSreenSetGame();
    }

    if (e.target.closest(".btn-ayuda")) {
        ChangeSreenHelp();
    }
});

export function ChangeSreen() {
    ShowCreen(ScreenHome());
}
