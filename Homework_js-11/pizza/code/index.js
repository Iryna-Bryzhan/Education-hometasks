document.addEventListener('DOMContentLoaded', function() {

const pizza = {
    userName: '',
    phone: '',
    email: '',
    size: 85,
    toppings : [],
    sauce : []
}
const price = {
    size: {
        small: 50,
        mid: 80,
        big: 85
    },
    toping: [
        { price: 20, name: "moc1", title: "Сир звичайний" },
        { price: 45, name: "moc2", title: "Сир фета"  },
        { price: 12, name: "moc3", title: "Моцарелла" },
        { price: 93, name: "telya", title: "Телятина"  },
        { price: 78, name: "vetch1", title: "Помiдори"  },
        { price: 34, name: "vetch2", title: "Гриби"  },
    ],
    sauce: [
        { price: 60, name: "sauceClassic", title: "Кетчуп"  },
        { price: 70, name: "sauceBBQ", title: "BBQ"  },
        { price: 50, name: "sauceRikotta", title: "Рiкотта"  },
    ]
}
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form#pizza")
        .addEventListener("click", (e) => {
            //console.log(e.target.id);
            switch (e.target.id) {
                case "small": pizza.size = price.size.small;
                    break;
                case "mid": pizza.size = price.size.mid;
                    break;
                case "big": pizza.size = price.size.big;
                    break;
            }
            show(pizza)
        })
    show(pizza)
    document.querySelector("#banner")
        .addEventListener("mousemove", (e) => {
            randomPositionBanner(e.target, e.clientX, e.clientY)
        })

    document.querySelector("#banner button")
        .addEventListener("click", () => {
            alert("Ваш промокод : XXXXXX")
        })
})


function randomPositionBanner(banner) {
    const coords = {
        X: Math.floor(Math.random() * document.body.clientWidth),
        Y: Math.floor(Math.random() * document.body.clientHeight)
    }

    const width = (parseInt(getComputedStyle(document.querySelector("#banner"))["width"]) + 100)

    if (coords.X + width > document.body.clientWidth) {
        return
    }

    if (coords.Y + 100 > document.body.clientWidth) {
        return
    }
    console.log(coords)
    //banner.style.transform = `translateX(300px)`;
    //console.log();
    //document.body.clientWidth / clientHeight

    banner.style.left = coords.X + "px"
    banner.style.top = coords.Y + "px"
}


//валідація 
window.addEventListener('DOMContentLoaded', () => {
    const userName = document.querySelector("[name='name']");
    const userPhone = document.querySelector("[name='phone']");
    const userEmail = document.querySelector("[name='email']");
    const validate = (value, pattern) => pattern.test(value);

    userName.addEventListener('input', () => {
        if (validate(userName.value, /^[а-яіїєґ]{2,}$/i)) {
            userName.classList.add('success');
            userName.classList.remove('error');
            pizza.userName = userName.value;
        }
        else {
            userName.classList.remove('success');
            userName.classList.add('error');
        }
    })


    userPhone.addEventListener('input', () => {
        if (validate(userPhone.value, /^\+380[0-9]{9}$/)) {
            userPhone.classList.add('success');
            userPhone.classList.remove('error');
            pizza.phone = userPhone.value;
        }
        else {
            userPhone.classList.remove('success');
            userPhone.classList.add('error');
        }
    })
    userEmail.addEventListener('change', () => {
        if (validate(userEmail.value, /^[a-z0-9._]{3,40}@[a-z0-9-]{1,777}\.[.a-z]{2,10}$/i)) {
            userEmail.classList.add('success');
            userEmail.classList.remove('error');
            pizza.email = userEmail.value;
        }
        else {
            userEmail.classList.remove('success');
            userEmail.classList.add('error');
        }
    })

});

//Відображення складу
function show(pizza) {
    const price = document.querySelector("#price");
    // topping
    getSauce()
    getTopping()
    showTotalPrice()
   
}

//Перетягування.
window.addEventListener("DOMContentLoaded", () => {
    const ingridients = document.querySelector(".ingridients"),
        table = document.querySelector(".table");

    ingridients.addEventListener("dragstart", (e) => {
        //e.target.classList.add("transfer")
        e.dataTransfer.setData("text", e.target.id);
    });

    table.addEventListener("dragenter", () => {
        table.classList.add("transfer")
    })

    table.addEventListener("dragleave", () => {
        table.classList.remove("transfer")
    })

    table.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.stopPropagation();
    })

    table.addEventListener("drop", (e) => {
        e.preventDefault();

        const id = e.dataTransfer.getData("text")

        const img = document.createElement("img");
        img.src = document.getElementById(id).src;
        table.append(img)
        table.classList.remove("transfer")

        getTopping(id)
        getSauce(id)
        
    })
    
});


const resultToping = document.getElementById('topping')
const resultSauce = document.getElementById('sauce')
const arrTopping = [];
const arrSauce = [];
const selectedProducts = [];


let topingPrice = 0;
let saucePrice = 0; 

function getTopping(name) {
    const topping = price.toping.find(t => t.name === name);
    if (topping !== undefined) {
      if (selectedProducts[name]) {
        selectedProducts[name] += 1;
      } else {
        selectedProducts[name] = 1; 
        pizza.toppings.push(name); 
      }
      topingPrice += topping.price; 
      showTotalPrice(); 
    }
    showTopingList()
  }
 
  function showList(list, prices, target){
    target.innerHTML = "";
    list.map((name) => {
        const sauce = prices.find(s => s.name === name);
        const newItem = document.createElement("li");
        newItem.setAttribute("data-name", name);
        newItem.innerText = `${sauce.title} x ${selectedProducts[name]}`;
        target.appendChild(newItem); 

        const minus = document.createElement("span");
        minus.className = "minus";
        minus.textContent = "-";
        newItem.appendChild(minus);
        minus.addEventListener("click", () => {
            removeSauce(name)
            removeToping(name)
        })
    })
}

function showSauceList(){
    showList(pizza.sauce, price.sauce, resultSauce)
}
function showTopingList(){
    showList(pizza.toppings, price.toping, resultToping)
}
 function getSauce(name) {
    const sauce = price.sauce.find(s => s.name === name);
    if (sauce !== undefined) {
      if (selectedProducts[name]) {
        selectedProducts[name] += 1; 
      } else {
        selectedProducts[name] = 1; 
        pizza.sauce.push(name); 
      }
      saucePrice += sauce.price;
      showTotalPrice(); 
    }
    showSauceList()  
  }

//   function removeSouce(name){
//     const sauce = price.sauce.find(s => s.name === name);
//     if (sauce !== undefined) {
//       if (selectedProducts[name]>1) {
//         selectedProducts[name] -= 1;  
//       } else {
//         pizza.sauce = pizza.sauce.filter(el => el !== name); 
//        delete selectedProducts[name];
//       }
//       saucePrice -= sauce.price; // Додавання ціни топінгу до загальної суми
//       showTotalPrice(); // Оновлення відображення загальної суми
//     } 
//     showSauceList()  
//   }
//   function removeTopin(name){
//     const topping = price.toping.find(t => t.name === name);
//     if (topping !== undefined) {
//       if (selectedProducts[name]>1) {
//         selectedProducts[name] -= 1;  
//       } else {
//         pizza.toppings = pizza.toppings.filter(el => el !== name); 
//        delete selectedProducts[name];
//       }
//       topingPrice -= topping.price; 
//       showTotalPrice();
//     } 
//     showTopingList()  
//   }

function removeFromList(list, prices, name){
    const item = prices.find(s => s.name === name);
    if (item !== undefined) {
      if (selectedProducts[name]>1) {
        selectedProducts[name] -= 1;  
      } else {
        list = list.filter(el => el !== name); 
       delete selectedProducts[name];
      }
      saucePrice -= item.price; 
      showTotalPrice();
    } 
   return list
  }

function removeSauce(name){
    pizza.sauce = removeFromList(pizza.sauce, price.sauce, name);
      showSauceList() 
  }
  function removeToping(name){
    pizza.toppings = removeFromList(pizza.toppings, price.toping, name);
    showTopingList() 
}


function showTotalPrice() {
    const priceElement = document.querySelector("#price");
   
    priceElement.innerText = topingPrice + saucePrice + pizza.size; // Додавання загальної суми ціни топінгів і соусів

}


console.log(selectedProducts)
console.log(arrTopping)
console.log(arrSauce) 
console.log(pizza) 

});


