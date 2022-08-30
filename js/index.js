const button = document.querySelector(".cps-button");
const result = document.querySelector(".result");
const timerSec = document.querySelector(".timer");
let time = 11; //seconds
let clicks = 0;
let interval = null;
let milSec = 00

button.addEventListener('click', () => { 
    start()
    if (time > 0 && time < 11) {
        clicks++
    }
    
})


const start = () => {
    if (interval) {
        return
    }
    interval = setInterval(updateCountdown, 1000)
}


const updateCountdown = () => {
time--
timerSec.innerHTML = `${time}`
if (time < 0) {
        result.style.visibility = "initial";
        result.textContent = "Ваш результат: " + clicks / 10 ;
        timerSec.style.visibility = "hidden";
    }
}










// button.addEventListener('click', () => {
// clicks++
// start()
// })


// const updateCountdown = () => {
//     if (time < 00) {
//         result.style.visibility = "initial";
//         result.textContent = "Ваш результат: " + clicks;
//         timerSec.style.visibility = "hidden";
//     }
//     let minutes = 00;
//     time = time < 10 ? "0" + time : time;
//     timerSec.innerHTML = `${minutes}:${time}`;
//     time--
// }

// function start () {
//     if (interval) {
//         return
//     }
//     interval = setInterval(updateCountdown, 1000)

// }
