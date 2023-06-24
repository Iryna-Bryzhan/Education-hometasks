// https://rickandmortyapi.com/api 

async function getData(url, method = "GET") {
    const data = await fetch(url, { method });
    return data.json();
}


getData("https://rickandmortyapi.com/api")
    .then((info) => {
       
        const arr = Object.entries(info);
        if (!Array.isArray(arr)) return;
        arr.forEach((item) => {
            createCard(item)
        })
    })

function createCard(element) {
    //console.log(element);
    const [key] = element
    const card = document.createElement("div");
    card.innerText = key;
    card.className = "card";
    card.addEventListener("click", () => {
        const wind = window.open( `/page/index.html?${key}`);
    })
    document.querySelector(".cards").append(card);
}

const charactersLink = document.getElementById("characters");
const locationsLink = document.getElementById("locations");
const episodesLink = document.getElementById("episodes");

charactersLink.addEventListener("click", (event) => {
    window.open( `/page/index.html?characters`);
});


locationsLink.addEventListener("click", (event) => {
    window.open( `/page/index.html?locations`);
});

episodesLink.addEventListener("click", (event) => {
    window.open( `/page/index.html?episodes`);
});

let container = document.querySelectorAll(".container");
let ul = document.querySelector(".ul");
let input = document.querySelector('input[type="search"]')
let cards = document.querySelector(".cards")

function applyStyles() {
  let screenWidth = window.innerWidth;
  
  if (screenWidth < 600) {
    ul.classList.add("ul360")
    input.classList.add("input360")
    cards.classList.add("cards360")
  }
}
applyStyles();

window.addEventListener("resize", applyStyles);

