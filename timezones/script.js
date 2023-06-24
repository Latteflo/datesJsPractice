let cities = {
    "Brussels": "Europe/Brussels",
    "Anchorage": "America/Anchorage",
    "Reykjavik": "Atlantic/Reykjavik",
    "Saint-Petersburg": "Europe/Moscow"
}

let now = new Date();
let timezonesDiv = document.getElementById('timezones');

for (let city in cities) {
    let timezoneDiv = document.createElement('div');
    timezoneDiv.className = 'timezone';
    timezoneDiv.textContent = "Time in " + city + ": " + now.toLocaleString("en-US", {timeZone: cities[city]});
    timezonesDiv.appendChild(timezoneDiv);
}
