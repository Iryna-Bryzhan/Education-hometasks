// функція зберігає і відображає дані у вигляді таблиці, перевіряє, чи є дані, якщо так, то виводить таблицю, якщо ні, то повідомлення про відсутність даних. Для кожного продукту викликається функція createTableElement() для створення рядка таблиці з даними про продукт. Викликається функція clearHTMLContent(table), яка очищає вміст таблиці
export function store() {
    const table = document.querySelector("tbody");
    clearHTMLContent(table)

    if (!localStorage.storeProducts || localStorage.storeProducts === "[]") {
        document.getElementById("box-show").insertAdjacentHTML("beforeend", `<div class="box-none">Поки немає даних ❌</div>`)
        return;
    }
    const products = JSON.parse(localStorage.storeProducts);


    products.forEach((product, index) => {
        createTableElement(index + 1, product, "line", editEvent, deleteEvent, table);
    });
    // Перевірка стореджа
}

const readonly = {
    id: "id",
    category: "category"
}


// функція створює новий рядок в таблиці і заповнює його даними про продукт. Додає кнопки для редагування і видалення та додає події на ці кнопки 
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

// Ця функція створює новий елемент <td> для таблиці. Якщо props - кнопка, то вона додається в <td>, інакше додоється текст.
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


// функція знаходить прродукт, видаляє його зі списку у localStorage та зберігає оновлений список. Пошук і видалення об'єкту відбуваються у масиві allProducts
function deleteEvent(product) {
    const { id } = product;
    const allProducts = JSON.parse(localStorage.storeProducts);

    allProducts.splice(allProducts.findIndex(el => id === el.id), 1)
    //allProducts = allProducts.length === 0? undefined : allProducts
    localStorage.storeProducts = JSON.stringify(allProducts);
    store()
}

// функція знаходить в об'єкті прродукт, видаляє його зі списку у localStorage. При клікі на кнопку Редагувати відкриває модальне вікно з даними, також додана подія на закриття вікна. Запускає функцію showPropertyProduct
function editEvent(product) {
    //name, quantity, price, status, description, date, category, url 
    let { id } = product;
    const allProducts = JSON.parse(localStorage.storeProducts);
    const [oldObj] = allProducts.splice(allProducts.findIndex(el => id === el.id), 1);
    const modal = document.querySelector(".container-modal");
    const close = document.querySelector("#modal-close")

    modal.classList.remove("hide");
    close.addEventListener("click", () => {
        modal.classList.add("hide");
    })
    showPropertyProduct(oldObj, allProducts, modal)
}

// ця функція відповідає за збереження змінених даних, при клікі на кнопку Зберегти перебираються всі інпути і зчитується іх value, потім продукт додається у localStorage і закривається модальне вікно. Також змінює статус продукту в залежності від кількости товару. З допомогою createPropertyElement() створюються label і input 
function showPropertyProduct(p, arr, modal) {
    const edit = document.getElementById("edit");
    const props = Object.entries(p);
    const btnSave = document.createElement("button")
    btnSave.type = "button";
    btnSave.innerText = "Зберегти"
    btnSave.addEventListener("click", () => {
        // 1
        const [...inputs] = document.querySelectorAll("#edit input");
        //console.log(inputs);

        const newObjectProduct = {

        }

        inputs.forEach((input) => {
            newObjectProduct[input.key] = input.value
        })

        if(newObjectProduct.quantity > 0){
            newObjectProduct.status = true;
        }else{
            newObjectProduct.status = false;
        }

        arr.push(newObjectProduct);
        localStorage.storeProducts = JSON.stringify(arr);
        modal.classList.add("hide");
        store()
    })

    const formData = props.map(([a1, a2]) => {
        return createPropertyElement(a1, a2)
    })

    clearHTMLContent(edit)
    edit.append(...formData, btnSave)
}

// Ця функція створює елементи форми для редагування. Функція створює <label> з ім'ям властивості і <input> зі значенням. Якщо ім'я "status", то функція повертає порожній рядок, якщо ім'я id або category, то ці рядки тільки для читання, їх не можна змінювати
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

// Ця функція очищає вміст таблиці. Вона перевіряє, чи el є об'єктом, і якщо так, то встановлює innerHTML елемента на пустий рядок, тим самим очищуючи його вміст.
function clearHTMLContent(el) {
    if (typeof el !== "object") return;
    el.innerHTML = "";
}

