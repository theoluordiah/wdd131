document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const temperatureC = 25;
const windSpeedKmh = 12;

function calculateWindChill(tempC, kmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(kmh, 0.16) + 0.3965 * tempC * Math.pow(kmh, 0.16);
}

const windchill = document.getElementById("windchill");

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    windchill.textContent = calculateWindChill(temperatureC, windSpeedKmh).toFixed(1) + "°C";
} else {
    windchill.textContent = "N/A";
}