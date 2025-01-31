let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

let ticking = function() {
    let currentDate = new Date();
    let getHour = currentDate.getHours();
    let getMin = currentDate.getMinutes();
    let getSec = currentDate.getSeconds();

    hour.textContent = getHour.toString().padStart(2, '0');
    min.textContent = getMin.toString().padStart(2, '0');
    sec.textContent = getSec.toString().padStart(2, '0');
}

setInterval(ticking, 1000); // Update every second
