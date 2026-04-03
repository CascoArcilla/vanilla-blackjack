export const SET_GAME_TEMPLATE = `
<article id="screen-set-game" class="w-full h-full flex items-center justify-center p-4">
    <div class="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center uppercase tracking-wider">Ajustes de Partida</h2>

        <form class="space-y-6">
            <div>
                <label class="block text-sm font-semibold text-gray-600 uppercase mb-2">Nombre del Jugador (opcional)</label>
                <input type="text" id="player-name"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all font-medium text-black"
                    value="Jugador" placeholder="Ej. Alex" />
            </div>

            <div>
                <label class="block text-sm font-semibold text-gray-600 uppercase mb-2">Monto para Ganar</label>
                <div class="relative">
                    <select id="win-amount"
                        class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all font-medium bg-white appearance-none cursor-pointer text-black">
                        <option value="500" selected>500 monedas</option>
                        <option value="800">800 monedas</option>
                        <option value="1200">1200 monedas</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                         <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <label class="block text-sm font-semibold text-gray-600 uppercase mb-2">Monto Inicial</label>
                <div class="relative">
                    <select id="start-amount"
                        class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all font-medium bg-white appearance-none cursor-pointer text-black">
                        <option value="100" selected>100 monedas</option>
                        <option value="200">200 monedas</option>
                        <option value="300">300 monedas</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                         <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3 pt-4">
                <button type="button" id="btn-start-game"
                    class="btn-start-game w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-green-200 uppercase tracking-wide">
                    Iniciar Partida
                </button>
                <button type="button" id="btn-cancel-setup"
                    class="btn-cancel-setup bg-neutral-400 hover:bg-neutral-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-neutral-200 uppercase tracking-wide">
                    Cancelar
                </button>
            </div>
        </form>
    </div>
</article>
`;