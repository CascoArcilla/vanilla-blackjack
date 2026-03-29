import ShowCreen from "../utils/showScreen";
import { ChangeSreen as ChangeSreenSetGame } from "./ScrenSetGame";

function ScreenHome() {
    return `
<section id="screen-home" class="w-full h-full flex flex-col items-center justify-center">
    <header>
        <h1 class="text-4xl font-bold text-center mb-5">Simple Blackjack</h1>
        <p class="text-xl text-center">Bienvenido, para comenzar presiona <span
                class="text-blue-400 font-bold">Partida</span></p>
    </header>

    <section class="w-full flex flex-col items-center mt-8">
        <button
            class="uppercase border-b-4 rounded-2xl border-b-red-900 border-t-red-900 bg-red-400 px-4 py-2 text-2xl font-bold w-fit active:border-b-0 active:border-t-4 active:text-red-950 transition duration-150 btn-partida">
            Partida
        </button>
        <button
            class="uppercase border-b-4 rounded-2xl border-b-neutral-900 border-t-neutral-900 bg-neutral-400 px-4 py-2 text-2xl font-bold w-fit active:border-b-0 active:border-t-4 active:text-neutral-950 transition duration-150 mt-5 btn-ayuda">
            Ayuda
        </button>
    </section>
</section>
    `;
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-partida")) {
        ChangeSreenSetGame();
    }

    if (e.target.closest(".btn-ayuda")) {
        alert("Implementando Ayuda");
    }
});

export function ChangeSreen() {
    ShowCreen(ScreenHome());
}
