"use strict";
const hourElement = document.querySelector('.hourElement');
const minuteELement = document.querySelector('.minuteElement');
const secondElement = document.querySelector('.secondElement');
function displayClock() {
    const date = new Date();
    hourElement.innerHTML = date.getHours().toString();
    if (Number(hourElement.innerHTML) < 10) {
        hourElement.innerHTML = '0' + hourElement.innerHTML;
    }
    minuteELement.innerHTML = date.getMinutes().toString();
    if (Number(minuteELement.innerHTML) < 10) {
        minuteELement.innerHTML = '0' + minuteELement.innerHTML;
    }
    secondElement.innerHTML = date.getSeconds().toString();
    if (Number(secondElement.innerHTML) < 10) {
        secondElement.innerHTML = '0' + secondElement.innerHTML;
    }
    setTimeout(displayClock, 1000);
}
// displayClock()
