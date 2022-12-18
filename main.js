const minutesContainer = document.querySelector("min-container");
const startTimer = document.querySelector(".start-btn");
const minutesInput = document.querySelector("min");

let minutes = 45;

startTimer.addEventListener("click", () => {
        minCountdown();
        console.count(minutes);
});

function minInterval () {
    setInterval(() =>{
        minCountdown();
        if (minutes < 0) {
            clearInterval(minCountdown);
        };
    }, 1000);

}

// function minInterval() {
//     if (!minutes) {
//         minutes = setInterval(minCountdown, 1000);
//     }
// }

function minCountdown() {
    for (let minutesT = 1; minutesT > 0; minutesT--) {
        minutes = minutes - minutesT;
        minInterval();
        // if (minutes === 0)
        // clearInterval();
    }
        // minutes -= i;
        // return minutes;
}