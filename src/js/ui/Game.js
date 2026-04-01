export const MAIN_CONTENT_GAME = `
<div id="game-container" class="w-full h-full flex flex-col flex-1 gap-4 items-center">
    <article id="crupier" class="w-full flex-1 flex flex-col items-center">
        <section id="crupier-cards" class="flex flex-wrap max-w-2xl w-full h-full relative gap-2 border border-gray-300 rounded-lg px-4 py-2"></section>
        <p class="text-center italic font-bold">
            Puntuación del dealer: <span class="score-dealer">0</span>
        </p>
    </article>

    <article class="w-full">
        <p id="message-text" class="text-center font-bold text-xl">
            Mensaje del juego
        </p>
    </article>

    <article id="player" class="w-full flex-1 flex flex-col justify-end items-center">
        <section id="player-cards" class="flex flex-wrap max-w-2xl w-full h-full relative gap-2 border border-gray-300 rounded-lg px-4 py-2"></section>
        <p class="text-center italic font-bold">
            Tu puntuación: <span class="score-player">0</span>
        </p>
    </article>

    <article id="actions" class="flex md:hidden justify-end flex-col gap-4 w-full bg-white text-black p-4 rounded-lg relative">
        <div id="actions-container" class="hidden flex justify-end flex-col gap-4 w-full absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg">
            <section class="flex justify-end gap-2">
                <button class="btn-finish-game w-fit bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                    🏁 Finalizar Partida
                </button>
                <button class="btn-new-game w-fit bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">
                    ➕ Nueva Partida
                </button>
            </section>
            <section id="bet-container" class="flex items-center justify-center gap-4 flex-wrap">
                <p class="text-center italic font-bold border border-gray-300 rounded-lg p-2">
                    Apuesta: <span class="bet">0</span>
                </p>
                <p class="text-center italic font-bold border border-gray-300 rounded-lg p-2">
                    Tu saldo: <span class="money-player">100</span>
                </p>
                <p class="text-center italic font-bold border border-gray-300 rounded-lg p-2">
                    Saldo para ganar: <span class="win-amount">200</span>
                </p>
            </section>
            <section class="space-y-2">
                <p class="font-bold">Elige tu apuesta y presiona pedir para empezar la ronda:</p>
                <ul class="flex justify-center flex-wrap gap-2 text-black">
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="1">1</li>
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="2">2</li>
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="5">5</li>
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="10">10</li>
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="20">20</li>
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="50">50</li>
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="100">100</li>
                    <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="reset">Restablecer</li>
                </ul>
            </section>
            <section class="flex flex-wrap justify-center gap-2">
                <button class="btn-hit flex-1 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                    Pedir
                </button>
                <button class="btn-stand flex-1 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                    Plantarse
                </button>
                <button class="btn-show-hide-menu md:hidden flex-1 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                    Ocultar Menú
                </button>
            </section>
        </div>
        <button class="btn-show-hide-menu md:hidden bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
            Mostrar Menú
        </button>
    </article>
</div>
`

export const ASIDE_MENU = `
<div id="aside-menu" class="h-full hidden md:flex max-w-xs w-full flex-col justify-end gap-4 items-center  overflow-y-auto p-4 bg-white rounded-lg text-black">
    <button class="btn-finish-game w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
        🏁 Finalizar Partida
    </button>
    <button class="btn-new-game w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">
        ➕ Nueva Partida
    </button>
    <div class="flex-1 flex justify-end flex-col gap-4 w-full">
        <section class="flex flex-col gap-2">
            <p class="text-center italic font-bold border border-gray-300 rounded-lg p-2">
                Saldo para ganar: <span class="win-amount">200</span>
            </p>
        </section>
        <section class="space-y-2">
            <p class="font-bold">Elige tu apuesta y presiona pedir para empezar la ronda:</p>
            <ul class="flex flex-wrap gap-2 text-black">
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="1">1</li>
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="2">2</li>
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="5">5</li>
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="10">10</li>
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="20">20</li>
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="50">50</li>
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="100">100</li>
                <li class="bet-option font-bold cursor-pointer bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2" data-bet="reset">Restablecer</li>
            </ul>
        </section>
        <section id="bet-container" class="flex items-center justify-center gap-4">
            <p class="text-center italic font-bold border border-gray-300 rounded-lg p-2">
                Apuesta: <span class="bet">0</span>
            </p>
            <p class="text-center italic font-bold border border-gray-300 rounded-lg p-2">
                Tu saldo: <span class="money-player">0</span>
            </p>
        </section>
        <section class="flex flex-col justify-center gap-2">
            <button class="btn-hit bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                Pedir
            </button>
            <button class="btn-stand bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                Plantarse
            </button>
        </section>
    </div>
</div>
`