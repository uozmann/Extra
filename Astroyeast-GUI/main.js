"use strict"

let numberTemp = document.getElementById('numberTemp');
let counterTemp = 0;
let temperature = 50;
let temperatureMax = 120;
let offsetValTemp = 472-temperature/temperatureMax*472;

let numberProgress = document.getElementById('numberProgress');
let counterProgress = 0;
let state = 80;
let counterMax = 100;
let offsetValProgress = 472-state/counterMax*472;

setInterval(()=> {
    if (counterTemp == temperature) {
        clearInterval();
    } else {
        counterTemp += 1;
        numberTemp.innerHTML = counterTemp + '°C';
    }
}, 2000/temperature);

setInterval(()=> {
    if (counterProgress == state) {
        clearInterval();
    } else {
        counterProgress += 1;
        numberProgress.innerHTML = counterProgress + '%';
    }
}, 2000/state);

document.documentElement.style
    .setProperty('--temperature-dashoffset', `${offsetValTemp}`);
document.documentElement.style
    .setProperty('--progress-dashoffset', `${offsetValProgress}`);