import ShowCreen from "../utils/showScreen";
import { ChangeSreen as ChangeSreenHome } from "./ScreenHome";
import { showModal } from "../ui/modal";

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
    return `
    <section id="screen-help" class="w-full h-full flex flex-col items-center overflow-y-auto p-4 text-black">
        <div class="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6 my-auto">
            <h1 class="text-2xl font-bold text-center">Ayuda</h1>
            <p class="text-center italic font-bold">
                Aquí puedes encontrar información sobre el juego.
            </p>
            <hr class="border-2 rounded-full">
            <ul class="space-y-4 list-disc list-inside">
                ${points.map((point) => `<li>${point}</li>`).join('')}
            </ul>
            <hr class="border-2 rounded-full">
            <button class="btn-volver w-full bg-blue-500 text-white py-2 rounded-lg">
                Volver
            </button>
        </div>
    </section>
    `;
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-volver")) {
        ChangeSreenHome();
    }
});

export function ChangeSreen() {
    ShowCreen(ScreenHelp());
}