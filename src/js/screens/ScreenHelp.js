import ShowCreen from "../utils/showScreen.js";
import { ChangeSreen as ChangeSreenHome } from "./ScreenHome.js";
import { HELP_TEMPLATE } from "../ui/templateHelp.js";

const points = [
    'El objetivo del juego es obtener una mano de cartas con un valor total más cercano a 21 que la mano del crupier (dealer o quien reparte las cartas), sin exceder 21',
    'Las cartas del 2 al 10 valen su valor nominal, si es 4 vale 4, si es 5 vale 5, etc.',
    'Las cartas con figuras (J, Q, K) valen 10 puntos',
    'El As vale 1 o 11 puntos, según convenga',
    'Si el valor total de la mano excede 21, se produce un "bust" y el jugador pierde automáticamente',
    'Si el valor total de la mano es igual a 21, se produce un "blackjack" y el jugador gana automáticamente',
    'Si el valor total de la mano es mayor que el del crupier y no excede 21, el jugador gana',
    'Si el valor total de la mano es menor que el del crupier y no excede 21, el jugador pierde',
    'Si el valor total de la mano es igual al del crupier y no excede 21, se produce un "push" y el jugador no gana ni pierde',
];

function ScreenHelp() {
    return HELP_TEMPLATE(points);
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-volver")) {
        ChangeSreenHome();
    }
});

export function ChangeSreen() {
    ShowCreen(ScreenHelp());
}