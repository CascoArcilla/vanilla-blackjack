export const HELP_TEMPLATE = (points) => `
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
`