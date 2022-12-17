const minutesContainer = document.querySelector("min-container");
const startTimer = document.querySelector(".start-btn");
const minutesInput = document.querySelector("min");

let minutes = 45;

startTimer.addEventListener("click", () => {
        minInterval();
        console.log(minutes);
});

function minInterval() {
    if (!minutes) {
        minutes = setInterval(minCountdown, 1000);
    }
}

function minCountdown() {
    for (let i = 1; i < 45; i++)
        minutes = minutes - i;
}