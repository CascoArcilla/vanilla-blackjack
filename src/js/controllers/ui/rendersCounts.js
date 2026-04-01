export function renderMoneyPlayer(money) {
    const moneyPlayer = document.querySelectorAll(".money-player");
    moneyPlayer.forEach(element => element.textContent = money);
}

export function renderBetPlayer(bet) {
    const betPlayer = document.querySelectorAll(".bet");
    betPlayer.forEach(element => element.textContent = bet);
}

export function renderWinAmount(winAmount) {
    const winAmountPlayer = document.querySelectorAll(".win-amount");
    winAmountPlayer.forEach(element => element.textContent = winAmount);
}

export function renderScorePlayer(score) {
    const scorePlayer = document.querySelectorAll(".score-player");
    scorePlayer.forEach(element => element.textContent = score);
}

export function renderScoreDealer(score) {
    const scoreDealer = document.querySelectorAll(".score-dealer");
    scoreDealer.forEach(element => element.textContent = score);
}

export function updateCounts(game) {
    renderMoneyPlayer(game.getPlayer().getMoney());
    renderBetPlayer(game.getPlayer().getBet());
    renderWinAmount(game.getWinAmount());
    renderScorePlayer(game.getPlayer().getScore());
    renderScoreDealer(game.getDealer().getScore());
}