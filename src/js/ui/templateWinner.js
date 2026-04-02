export function WINNER_TEMPLATE(data) {
    let iconColor = "text-black"

    if (data.playerWin) {
        iconColor = "text-yellow-600"
    }

    return `
<article id="screen-winner" class="w-full h-full flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-yellow-500">
        <div class="mb-6">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4">
                <svg class="w-10 h-10 ${iconColor}" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-2">${data.titles.title}</h2>
            <p class="text-xl text-gray-600 font-medium">${data.titles.subtitle}</p>
        </div>

        <div class="space-y-4 mb-8">
            <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-500 uppercase font-semibold">Monto ganado</p>
                <p class="text-3xl font-bold text-green-600">$${data.finalAmount}</p>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <button type="button" class="btn-jugar w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-green-200 uppercase tracking-wide">
                Jugar de Nuevo
            </button>
            <button type="button" class="btn-volver w-full bg-neutral-400 hover:bg-neutral-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-neutral-200 uppercase tracking-wide">
                Volver al Inicio
            </button>
        </div>
    </div>
</article>
`
}