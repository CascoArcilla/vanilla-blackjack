import { PHASE_STATUS } from "../consts/Values.js";

/**
 * Clase que representa el menú de apuestas usado en el juego para móviles.
 * Controla el abierto y cerrado del menú
 */
export default class BetMenu {
    #menu

    /**
     * @param {HTMLElement} menu  
     */
    constructor(menu = document.getElementById("actions-container")) {
        this.#menu = menu;
    }

    /**
     * Alterna el menú de apuestas.
     */
    toggle(status = PHASE_STATUS.DEAL) {
        if (this.isOpen()) {
            this.close();
        } else if (status !== PHASE_STATUS.DEAL) {
            this.open(status);
        }
    }

    /**
     * Abre el menú de apuestas.
     */
    open(status = PHASE_STATUS.DEAL) {
        if (this.isOpen() || status === PHASE_STATUS.DEAL) return;
        this.#menu.classList.remove("hidden");
    }

    /**
     * Cierra el menú de apuestas.
     */
    close() {
        if (!this.isOpen()) return;
        this.#menu.classList.add("hidden");
    }

    /**
     * Verifica si el menú está abierto.
     * @returns {boolean} True si el menú está abierto, false en caso contrario.
     */
    isOpen() {
        return !this.#menu.classList.contains("hidden");
    }
}