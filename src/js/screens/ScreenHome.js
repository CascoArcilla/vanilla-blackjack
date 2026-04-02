import ShowCreen from "../utils/showScreen";
import { ChangeSreen as ChangeSreenSetGame } from "./ScreenSetGame";
import { ChangeSreen as ChangeSreenHelp } from "./ScreenHelp";
import { HOME_TEMPLATE } from "../ui/templateHome";

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
