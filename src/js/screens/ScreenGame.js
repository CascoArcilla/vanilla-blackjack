import ShowCreen from "../utils/showScreen";
import Game from "../models/Game";
import { Suit } from "../consts/Suit";
import { MAIN_CONTENT_GAME, ASIDE_MENU } from "../ui/Game";
import { renderMoneyPlayer, renderWinAmount } from "../controllers/ui/rendersCounts";
import { finishGame, newGame } from "../controllers/screens/finishGame";
import { bet } from "../controllers/screens/bets";
import { hit, stand } from "../controllers/screens/optionsPlayer";
import { toggleMenu } from "../controllers/ui/toggleMenu";

let game;

function preloadImages() {
    Object.values(Suit).forEach(suitFile => {
        const img = new Image();
        img.src = `assets/imgs/${suitFile}`;
    });

    const reverse = new Image();
    reverse.src = "assets/imgs/reverse.png";
}

function ScreenGame() {
    return `
<section id="screen-game" class="w-full h-full flex gap-4 items-center overflow-y-auto p-4 text-white">
    ${MAIN_CONTENT_GAME}
    ${ASIDE_MENU}
</section>
    `;
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-show-hide-menu")) { toggleMenu(); }
    if (e.target.closest(".btn-finish-game")) { finishGame(); }
    if (e.target.closest(".btn-new-game")) { newGame(); }
    if (e.target.closest(".btn-hit")) { hit(game); }
    if (e.target.closest(".btn-stand")) { stand(game); }
    if (e.target.closest(".bet-option")) { bet(e.target.dataset.bet, game); }
});

export function ChangeSreen(winAmount, startAmount, playerName) {
    preloadImages();
    // Renderizar pantalla de juego
    ShowCreen(ScreenGame());

    // Inicar el juego y actualiar valores en la UI
    game = new Game(winAmount, startAmount, playerName);
    renderMoneyPlayer(game.getPlayer().getMoney());
    renderWinAmount(game.getWinAmount());
}
