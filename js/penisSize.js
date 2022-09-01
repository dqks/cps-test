const input = document.querySelector('.size-input')
const title = document.querySelector('.title')
const button = document.querySelector('.button-submit')
const mediumValueButton = document.querySelector('.medium-value-button')
var mediumValue = 0;

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

var penises = []

button.addEventListener('click', (evt) => {
    evt.preventDefault()
    if (input.value <= 5 ) {
    input.placeholder = 'Ебать у тебя червяк'
    } else if (input.value > 15 ) {
    input.placeholder = 'кому ты пиздишь'
    } else {
    input.placeholder = 'нормас'
    }
    if (input.value === '' ) {
        input.placeholder = 'введи что-то долабеб'
    }
    penises.push(Number(input.value))
    console.log(penises)
    input.value = ''
})

mediumValueButton.addEventListener('click', (evt) => {
evt.preventDefault()
for (var i = 0; i < penises.length; i++ ) {
mediumValue += penises[i]
}
input.placeholder = Math.round(mediumValue / penises.length)
})
