const secondButton = document.querySelector('.second-timer-button') // button
let secondResult = document.querySelector('.second-timer-span') // span
const firstInput = document.querySelector('.one-second-timer-input')
const secondInput = document.querySelector('.two-second-timer-input')
let secondInterval = null


// let secondsFrom = firstInput.value - 1 
firstInput.value = null
secondInput.value = null
let secondsFrom = null
let secondsTo = secondInput.value
// let secondsFrom = 0
// let secondsTo = 0

secondButton.addEventListener('click', () => {
    secondsFrom = firstInput.value - 1
    if (firstInput.value === '' || secondInput.value === '') {
        secondResult.textContent = 'пиздец ты долбаеб'
    } else {
        startSecondTimer()
    }
})

const secondTimer = () => {
    secondsFrom++
    secondResult.innerHTML = `${secondsFrom}`
if (secondResult.textContent - 1 >= secondInput.value) {
    clearInterval(secondTimer)
    secondResult.textContent = 'все'
    clearInterval(secondInterval)
}
}




function startSecondTimer () {

if (secondInterval) {
    return
}
secondInterval = setInterval(secondTimer, 1000)
}



