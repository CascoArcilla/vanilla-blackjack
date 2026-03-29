import ShowCreen from "../utils/showScreen";
import { ChangeSreen as ChangeSreenSetGame } from "./ScrenSetGame";
import { ChangeSreen as ChangeSreenHelp } from "./ScreenHelp";

function ScreenHome() {
    return `
<section id="screen-home" class="w-full h-full flex flex-col items-center justify-center text-black">
    <div class="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <header class="space-y-2">
            <h1 class="text-4xl font-bold text-center mb-5">Simple Blackjack</h1>
            <p class="text-4xl text-center">
                ♠️ ♥️ ♦️ ♣️
            </p>
        </header>
        <section class="w-full space-y-2">
            <button
                class="btn-jugar w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-green-200 uppercase tracking-wide">
                Jugar
            </button>
            <button
                class="btn-ayuda w-full bg-neutral-400 hover:bg-neutral-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-neutral-200 uppercase tracking-wide">
                Ayuda
            </button>
        </section>
    </div>
</section>
    `;
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
