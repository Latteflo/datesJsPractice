let is24HourFormat = true;

function updateTime() {
    let now = new Date();
    let hours = is24HourFormat ? now.getHours() : now.getHours() % 12 || 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() + 1; // Months are zero-based in JavaScript
    let year = now.getFullYear();

    document.getElementById('clock').textContent = `${pad(day)}/${pad(month)}/${year} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

document.getElementById('clock').addEventListener('click', function() {
    is24HourFormat = !is24HourFormat;
    updateTime();
});

setInterval(updateTime, 1000);
