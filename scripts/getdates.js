const year = document.querySelector("#currentyear");
const today = new Date();

document.getElementById("lastModified").textContent = document.lastModified;

year.innerHTML = today.getFullYear()