/**
 * Permite cambiar la pantalla vista por otra, el template debe ser en string HTML
 * @param {string} template
*/
export default function ShowCreen(template) {
    const $wrapScreen = document.querySelector("#wrap-screen");
    $wrapScreen.innerHTML = template;
}