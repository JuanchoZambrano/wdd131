const currentYearElement = document.querySelector('#currentyear');
const today = new Date();
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

document.getElementById("lastModified").textContent = document.lastModified;

currentYearElement.innerHTML = today.getFullYear();

hamButton.addEventListener('click', () => {
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
})