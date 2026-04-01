export function renderMessage(message, time = 3000) {
    const baseMessage = "Mensaje del juego";
    const messageElement = document.querySelector("#message-text");
    messageElement.textContent = message;

    messageElement.classList.add('duration-200', 'transition-colors');

    const listaHex = ['#ffffff', '#fff52D'];
    let white = false;

    const showMessageInterval = setInterval(() => {
        messageElement.style.color = white ? listaHex[0] : listaHex[1];
        white = !white;
    }, 400);

    setTimeout(() => {
        messageElement.classList.remove('duration-200', 'transition-colors');
        messageElement.style.color = "white";
        messageElement.textContent = baseMessage;
        clearInterval(showMessageInterval);
    }, time);
}