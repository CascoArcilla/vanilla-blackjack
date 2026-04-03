import ShowCreen from "../utils/showScreen.js";
import { WINNER_TEMPLATE } from "../ui/templateWinner.js";

function ScreenWinner(stadistics) {
    return WINNER_TEMPLATE({ ...stadistics });
}

export function ChangeSreen(stadistics = {
    finalAmount: 0,
    playerWin: false,
    titles: {
        title: "No hay partida",
        subtitle: "No se ha jugado ninguna partida"
    }
}) {
    ShowCreen(ScreenWinner({ ...stadistics }));
}
