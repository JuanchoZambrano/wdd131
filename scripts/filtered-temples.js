const currentYearElement = document.querySelector("#currentyear");
const today = new Date();
const hamButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");
const templesContainer = document.querySelector("#temples-container");
const navLinks = document.querySelectorAll(".navigation a");

document.getElementById("lastModified").textContent = document.lastModified;

currentYearElement.innerHTML = today.getFullYear();

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  hamButton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "./images/aba-nigeria-temple.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "./images/manti-utah-temple.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "./images/payson-utah-temple.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "./images/yigo-guam-temple.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "./images/washington-dc-temple.jpg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "./images/lima-peru-temple.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "./images/mexico-city-temple.jpg",
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl: "./images/barranquilla-colombia-temple.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl: "./images/rome-italy-temple.jpg",
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah",
    dedicated: "1877, April, 8",
    area: 143969,
    imageUrl: "./images/st-george-utah-temple.jpg",
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 29",
    area: 53997,
    imageUrl: "./images/tokyo-japan-temple.jpg",
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: "1993, April, 30",
    area: 58005,
    imageUrl: "./images/san-diego-california-temple.jpg",
  },
];

function setActiveLink(clickedLink) {
  navLinks.forEach((link) => link.classList.remove("active"));
  clickedLink.classList.add("active");
}

function displayTemples(list) {
  templesContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  list.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple Image`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 400;
    image.height = 250;

    card.append(name, location, dedicated, area, image);
    fragment.appendChild(card);
  });

  templesContainer.appendChild(fragment);
}

displayTemples(temples);

const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");
const allTemples = document.querySelector("#home");

allTemples.addEventListener("click", (link) => {
  setActiveLink(link.currentTarget);
  displayTemples(temples);
});

oldTemples.addEventListener("click", (link) => {
  setActiveLink(link.currentTarget);
  displayTemples(
    temples.filter((temple) => {
      const toIntYear = parseInt(temple.dedicated.split(",")[0]);
      return toIntYear < 1900;
    }),
  );
});

newTemples.addEventListener("click", (link) => {
  setActiveLink(link.currentTarget);
  displayTemples(
    temples.filter((temple) => {
      const toIntYear = parseInt(temple.dedicated.split(",")[0]);
      return toIntYear > 2000;
    }),
  );
});

largeTemples.addEventListener("click", (link) => {
  setActiveLink(link.currentTarget);
  displayTemples(temples.filter((temple) => temple.area > 90000));
});

smallTemples.addEventListener("click", (link) => {
  setActiveLink(link.currentTarget);
  displayTemples(temples.filter((temple) => temple.area < 10000));
});
