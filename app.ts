const hourElement = document.querySelector('.hourElement') as HTMLSpanElement;
const minuteELement = document.querySelector('.minuteElement') as HTMLSpanElement;
const secondElement = document.querySelector('.secondElement') as HTMLSpanElement;


function displayClock() {
    const date:Date = new Date();
    hourElement.innerHTML = date.getHours().toString();

    if (Number(hourElement.innerHTML) < 10) {
        hourElement.innerHTML = '0' + hourElement.innerHTML
    }

    minuteELement.innerHTML = date.getMinutes().toString();

    if (Number(minuteELement.innerHTML) < 10) {
        minuteELement.innerHTML = '0' + minuteELement.innerHTML
    }

    secondElement.innerHTML = date.getSeconds().toString();

    if (Number(secondElement.innerHTML) < 10) {
        secondElement.innerHTML = '0' + secondElement.innerHTML
    }

    setTimeout(displayClock, 1000);
}

// displayClock()
