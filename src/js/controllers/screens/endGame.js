import { ChangeSreen as ChangeScreenWinner } from "../../screens/ScreenWinner.js";

export function checkEndGame(game) {
    if (game.getPlayer().getMoney() <= 0) {
        setTimeout(() => {
            ChangeScreenWinner({
                finalAmount: game.getPlayer().getMoney(),
                playerWin: false,
                titles: {
                    title: "¡Has perdido!",
                    subtitle: "Te has quedado sin Saldo"
                }
            });
        }, 6000);
    } else if (game.getPlayer().getMoney() >= game.getWinAmount()) {
        setTimeout(() => {
            ChangeScreenWinner({
                finalAmount: game.getPlayer().getMoney(),
                playerWin: true,
                titles: {
                    title: "¡Felicidades!",
                    subtitle: "Has ganado la partida"
                }
            });
        }, 2000);
    }
}
