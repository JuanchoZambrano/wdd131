const currentYearElement = document.querySelector('#currentyear');
const today = new Date();
const windChill = document.getElementById('windchill');

document.getElementById("lastModified").textContent = document.lastModified;
currentYearElement.textContent = today.getFullYear();

const temperatureValue = 19;
const conditionString = "Clear";
const windSpeed = 14.5;
if (temperatureValue <= 10 && windSpeed > 4.8) {
  calculateWindChill = 13.12 + (0.6215 * temperatureValue) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperatureValue * (windSpeed ** 0.16));
} else {
  calculateWindChill = "N/A";
}

document.getElementById('temperature').textContent = temperatureValue + " °C";
document.getElementById('condition').textContent = conditionString;
document.getElementById('wind').textContent = windSpeed + " km/h"
document.getElementById('windchill').textContent = calculateWindChill + " °C"