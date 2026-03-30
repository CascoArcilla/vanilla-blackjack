import { showModal, hideModal } from "../../ui/modal";
import { ChangeSreen as ChangeScreenHome } from "../../screens/ScreenHome";
import { ChangeSreen as ChangeScreenSetGame } from "../../screens/ScrenSetGame";

export function finishGame() {
    const content = `
    <div class="flex justify-center gap-4 flex-wrap">
        <button id="btn-confirm-finish" class="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Si
        </button>
        <button id="btn-confirm-new" class="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            No
        </button>
    </div>
    `

    showModal("¿Estás seguro de que quieres finalizar el juego?", content);

    const btnConfirmFinish = document.getElementById("btn-confirm-finish");
    const btnConfirmNew = document.getElementById("btn-confirm-new");

    btnConfirmFinish.removeEventListener("click", () => { ChangeScreenHome(); });
    btnConfirmFinish.addEventListener("click", () => { ChangeScreenHome(); });

    btnConfirmNew.removeEventListener("click", () => { hideModal(); });
    btnConfirmNew.addEventListener("click", () => { hideModal(); });
}

export function newGame() {
    const content = `
    <div class="flex justify-center gap-4 flex-wrap">
        <button id="btn-new-game" class="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Si
        </button>
        <button id="btn-cancel-new-game" class="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            No
        </button>
    </div>
    `

    showModal("¿Estás seguro de que quieres iniciar una nueva partida?", content);

    const btnNewGame = document.getElementById("btn-new-game");
    const btnCancelNewGame = document.getElementById("btn-cancel-new-game");

    btnNewGame.removeEventListener("click", () => { ChangeScreenSetGame() });
    btnNewGame.addEventListener("click", () => { ChangeScreenSetGame() });

    btnCancelNewGame.removeEventListener("click", () => { hideModal(); });
    btnCancelNewGame.addEventListener("click", () => { hideModal(); });
}