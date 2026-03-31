export function disableBet() {
    const betOptions = document.querySelectorAll(".bet-option");
    betOptions.forEach((betOption) => {
        betOption.disabled = true;
        betOption.classList.add("opacity-50", "cursor-not-allowed");
    });
}

export function enableBet() {
    const betOptions = document.querySelectorAll(".bet-option");
    betOptions.forEach((betOption) => {
        betOption.disabled = false;
        betOption.classList.remove("opacity-50", "cursor-not-allowed");
    });
}