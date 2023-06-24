const category = document.location.search.substring(1);
document.querySelector("title").innerHTML = category;

async function req(url) {
    const data = await fetch(url)
    return data.json()
}

if (category === "characters") {
    req("https://rickandmortyapi.com/api/character")
        .then((data) => {
            showInfo(data)
        }).catch((e) => { console.error(e) })
} else if (category === "locations") {
    req("https://rickandmortyapi.com/api/location").then((data) => {
        showInfo(data)
    }).catch((e) => { console.error(e) });
} else if (category === "episodes") {
    req("https://rickandmortyapi.com/api/episode").then((data) => {
        showInfo(data)
    }).catch((e) => { console.error(e) });
} else {
    console.error("")
}



function showInfo(e) {
    const divs = e.results.map((el) => {
        const div = document.createElement("div");
        div.className = "card"
        const pattern = `<div class="img-card">
        ${
            el.image ? `<img src="${el.image}" alt="${el.name}">`  : el.type ? el.type : el.air_date
        }
        </div>
        <h3>${el.name}</h3>
        ${el.species ? `<p>${el.species}</p>` : el.episode ? `<p>${el.episode}</p>`: ""}
        `
        div.insertAdjacentHTML("beforeend", pattern);
        div.addEventListener("click", (e) => {
            openInfo(el, e)
        })
        return div;
       
    });

    document.querySelector(".cards").append(...divs)
}

function openInfo(card, event) {
    const modal = document.querySelector(".box-modal");
    modal.classList.add("active");
    document.querySelector("#modal-closed").addEventListener("click", () => {
        modal.classList.remove("active")
    })

    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = '';


    
    Object.entries(card).forEach(([key, value]) => {
        const entry = document.createElement("div");
        entry.innerHTML = `<strong>${key}:</strong> ${formatValue(value)}`;

        modalBody.appendChild(entry);
    });
    
    if (card.image) {
        const image = document.createElement("img");
        image.src = card.image;
        image.alt = card.name;
        modalBody.appendChild(image);
    } else{
        modalBody.removeChild(image);
    }

}

function formatValue(value) {
    if (Array.isArray(value)) {
        return value.map((item) => `<a href="${item}" target="_blank">${item}</a>`).join(', <br>');
    } else if (typeof value === 'object' && value !== null) {
        const url = `<a href="${value.url}" target="_blank">${value.name}</a>`;
        return url;
    }
    return value;
}

let ul = document.querySelector(".ul");
let modalMain = document.querySelector(".modal")



function applyStyles() {
  let screenWidth = window.innerWidth;
  
  if (screenWidth < 600) {
    ul.classList.add("ul360");
    modalMain.classList.add("modal360")
  } 
}
applyStyles();

window.addEventListener("resize", applyStyles);

