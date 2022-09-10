const input = document.querySelector('.first-timer-input')
const button = document.querySelector('.first-timer-button')
const result = document.querySelector('.first-timer-span')
let timer = 0 // делается сравнение с ним и в функции равен input.value
let timerStart = 0 // показывается на сайте
let intervalSex = null

button.addEventListener('click', () => {
    if (input.value === '') {
        result.textContent = 'пдолабеб'
    } else {
        startTimer()
    }
})

function timerFunc () {
    timer = input.value
    timerStart++
    result.innerHTML = `${timerStart}`
    if (timerStart - 1 >= timer) {
        clearInterval(timerFunc)
        result.textContent = 'пошел нахуй'
        console.log('пошел нахуй че не понял???????????')
        clearInterval(intervalSex)
    }
}

function startTimer () {
    if (intervalSex) {
        return
    }
    intervalSex = setInterval(timerFunc, 1000)
}



const validate = (evt) => {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
    }
}