const currentYearElement = document.querySelector('#currentyear');
const today = new Date();

document.getElementById("lastModified").textContent = document.lastModified;

currentYearElement.innerHTML = today.getFullYear();