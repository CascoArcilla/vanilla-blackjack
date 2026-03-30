import ShowCreen from "../utils/showScreen";
import Game from "../models/Game";
import { MAIN_CONTENT_GAME, ASIDE_MENU } from "../ui/Game";
import { renderMoneyPlayer, renderWinAmount } from "../controllers/ui/rendersCounts";
import { finishGame, newGame } from "../controllers/screens/finishGame";

let game;

function ScreenGame() {
    return `
<section id="screen-game" class="w-full h-full flex gap-4 items-center overflow-y-auto p-4 text-white">
    ${MAIN_CONTENT_GAME}
    ${ASIDE_MENU}
</section>
    `;
}

document.addEventListener("click", (e) => {
    if (e.target.id === "show-menu") {
        const actionsContainer = document.getElementById("actions-container");
        actionsContainer.classList.toggle("hidden");
    }

    if (e.target.closest(".btn-finish-game")) { finishGame(); }
    if (e.target.closest(".btn-new-game")) { newGame(); }
});

export function ChangeSreen(winAmount, startAmount, playerName) {
    // Renderizar pantalla de juego
    ShowCreen(ScreenGame());

    // Inicar el juego y actualiar valores en la UI
    game = new Game(winAmount, startAmount, playerName);
    renderMoneyPlayer(game.player.money);
    renderWinAmount(game.winAmount);
}
