export const WIN_SCORE = 21;

/**
 * Estados de ronda
 * bet - Se apuesta, presionar botones para subir apuesta, no puede presionar "Plantarse", el boton "Pedir" inicia el reparto de cartas y marca el inicio de la ronda.
 * deal - Se reparten las cartas, presionar "Pedir", en este estado el jugador no puede apostar ni volver a presionar ningun boton.
 * waiting_player_action - El jugador decide que hacer, presionar "Pedir" o "Plantarse".
 * end - La ronda termina, se inicia una nueva ronda.
 */
export const PHASE_STATUS = {
    BET: "bet",
    DEAL: "deal",
    WAITING_PLAYER_ACTION: "waiting_player_action",
    END: "end"
}
