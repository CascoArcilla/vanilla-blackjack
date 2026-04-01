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

export function disableHitAndStand() {
    const hitButton = document.querySelector(".btn-hit");
    const standButton = document.querySelector(".btn-stand");
    hitButton.disabled = true;
    standButton.disabled = true;
    hitButton.classList.add("opacity-50", "cursor-not-allowed");
    standButton.classList.add("opacity-50", "cursor-not-allowed");
}

export function enableHitAndStand() {
    const hitButton = document.querySelector(".btn-hit");
    const standButton = document.querySelector(".btn-stand");
    hitButton.disabled = false;
    standButton.disabled = false;
    hitButton.classList.remove("opacity-50", "cursor-not-allowed");
    standButton.classList.remove("opacity-50", "cursor-not-allowed");
}
