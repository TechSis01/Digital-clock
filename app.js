let hours = document.querySelector('#hours')
let minutes = document.querySelector('#mins')
let seconds = document.querySelector('#seconds')

//Specify today's date

function digital(){


let today = new Date()
let currentHours = today.getHours()
let currentMin = today.getMinutes()
let currentSec = today.getSeconds()

hours.innerText = currentHours
minutes.innerText = currentMin
seconds.innerText = currentSec

}

setInterval( digital, 1000 )