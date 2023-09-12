
export function store() {
    const table = document.querySelector("tbody");
    let products;
    clearHTMLContent(table);

    if (location.pathname.includes('store')) {
        if (!localStorage.storeProducts || localStorage.storeProducts === "[]") {
            document.getElementById("box-show").insertAdjacentHTML("beforeend", `<div class="box-none">Поки немає даних ❌</div>`)
            return;
        }
        products = JSON.parse(localStorage.storeProducts);
    }

    if (location.pathname.includes('restoran')) {
        if (!localStorage.restProducts || localStorage.restProducts === "[]") {
            document.getElementById("box-show").insertAdjacentHTML("beforeend", `<div class="box-none">Поки немає даних ❌</div>`)
            return;
        }
        products = JSON.parse(localStorage.restProducts);
    }

    if (location.pathname.includes('video')) {
        if (!localStorage.videoProducts || localStorage.videoProducts === "[]") {
            document.getElementById("box-show").insertAdjacentHTML("beforeend", `<div class="box-none">Поки немає даних ❌</div>`)
            return;
        }
        products = JSON.parse(localStorage.videoProducts);
    }


    products.forEach((product, index) => {
        createTableElement(index + 1, product, "line", editEvent, deleteEvent, table);
    });
    // Перевірка стореджа
}

const readonly = {
    id: "id",
    category: "category"
}


function createTableElement(number, product, className, editEvent, deleteEvent, table) {
    const { name, quantity, price, status, description, date, category, url } = product;
    const tr = document.createElement("tr");
    const editButton = document.createElement("button");

    editButton.innerText = "Редагувати";
    editButton.style.cursor = "pointer";
    editButton.addEventListener("click", () => {
        editEvent(product);
    });

    const delButton = document.createElement("button");
    delButton.innerText = "Видалити";
    delButton.style.cursor = "pointer";
    delButton.addEventListener("click", () => {
        deleteEvent(product);
    });

    if (window.location.pathname.includes("store")) {
        const elements = [
            newTd(number),
            newTd(name),
            newTd(quantity),
            newTd(price),
            newTd(editButton),
            newTd(status ? "✅" : "❌"),
            newTd(date),
            newTd(delButton)
        ]
        tr.append(...elements);
    }
    else if (window.location.pathname.includes("restoran")) {
        const elements = [
            newTd(number),
            newTd(name),
            newTd(quantity),
            newTd(price),
            newTd(editButton),
            newTd(status ? "✅" : "❌"),
            newTd(date),
            newTd(delButton)
        ]
        tr.append(...elements);
    }
    else if (window.location.pathname.includes("video")) {
        const elements = [
            newTd(number),
            newTd(name),
            newTd(date),
            newTd(url),
            newTd(editButton),
            newTd(delButton)
        ]
        tr.append(...elements);
    }
    table.append(tr);
}

function newTd(props) {

    if (!props) return;
    const td = document.createElement("td");
    if (props.localName === "button") {
        td.append(props);
    }
    else {
        td.innerText = props;
    }
    return td;
}

function deleteEvent(product) {
    const { id } = product;
    const allProducts = JSON.parse(localStorage.storeProducts);

    allProducts.splice(allProducts.findIndex(el => id === el.id), 1)
    //allProducts = allProducts.length === 0? undefined : allProducts
    localStorage.storeProducts = JSON.stringify(allProducts);
    store()
}


function editEvent(product) {
    //name, quantity, price, status, description, date, category, url 
    let { id } = product;
    let allProducts; 

    if (location.pathname.includes('store')) {
 allProducts = JSON.parse(localStorage.storeProducts);
    } else if(location.pathname.includes('restoran')){
       allProducts = JSON.parse(localStorage.restProducts);
    } else if(location.pathname.includes('video')){
        allProducts = JSON.parse(localStorage.videoProducts);
    }

    const [oldObj] = allProducts.splice(allProducts.findIndex(el => id === el.id), 1);
    const modal = document.querySelector(".container-modal");
    const close = document.querySelector("#modal-close")

    modal.classList.remove("hide");
    close.addEventListener("click", () => {
        modal.classList.add("hide");
    })
    showPropertyProduct(oldObj, allProducts, modal)
}

function showPropertyProduct(p, arr, modal) {
    const edit = document.getElementById("edit");
    const props = Object.entries(p);
    const btnSave = document.createElement("button")
    btnSave.type = "button";
    btnSave.innerText = "Зберегти"
    btnSave.addEventListener("click", () => {
        const [...inputs] = document.querySelectorAll("#edit input");
       

        const newObjectProduct = {

        }

        inputs.forEach((input) => {
            newObjectProduct[input.key] = input.value
        })

        if (newObjectProduct.quantity > 0) {
            newObjectProduct.status = true;
        } else {
            newObjectProduct.status = false;
        }

        arr.push(newObjectProduct);
        if (location.pathname.includes('store')) {
            localStorage.storeProducts = JSON.stringify(arr);
               } else if(location.pathname.includes('restoran')){
                localStorage.restProducts = JSON.stringify(arr);
               } else if(location.pathname.includes('video')){
                localStorage.videoProducts = JSON.stringify(arr);
               }

        
        modal.classList.add("hide");
        store()
    })

    const formData = props.map(([a1, a2]) => {
        return createPropertyElement(a1, a2)
    })

    clearHTMLContent(edit)
    edit.append(...formData, btnSave)
}


function createPropertyElement(name, value, fnEvent) {
    const id = Math.floor(Math.random() * 1000000);
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.key = name;
    label.setAttribute("for", id);
    input.id = id;
    input.value = value;
    label.innerText = name;

    input.addEventListener("click", () => {
        //fnEvent()
    })

    if (name === readonly.id || name === readonly.category) {
        input.readOnly = true;
        //input.disabled = true
    }

    if (name === "status") {
        return ""
    }

    div.append(label, input);
    return div
}


function clearHTMLContent(el) {
    if (typeof el !== "object") return;
    el.innerHTML = "";
}

