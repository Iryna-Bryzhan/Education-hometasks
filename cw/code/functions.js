const buttonSend = document.querySelector("#submit");

export function showForm(productType = "магазин") {
    sendBtnDisabled()
    const productBody = document.querySelector(".product-body");
    productBody.innerHTML = "";
    // product-body 
    if (productType === "магазин") {
        productBody.append(...createStoreForm());
       
    } else if (productType === "ресторани") {
        productBody.append(...createRestoranForm());
      

    } else if (productType === "відео хостинг") {
        productBody.append(...createVideoForm())
      
    }
    buttonSend.addEventListener("click", () => {
        sendData(productType);
        document.querySelector(".container-modal").classList.add("hide");
    });

}

function createStoreForm() {
    return [
        createElementForm(
            "Введіть назву продукта",
            "text",
            "product-name",
            "текст має бути Українською"),
        createElementForm(
            "Введіть ціну",
            "number",
            "product-price",
            "тут мають бути лише числа"),
        createElementForm(
            "Опис товару",
            undefined,
            "product-description",
            "текст має бути Українською")
    ]
}

function createRestoranForm() {
    return [
        createElementForm(
            "Введіть назву продукта",
            "text",
            "product-name",
            "текст має бути Українською"),
        createElementForm(
            "Введіть ціну",
            "number",
            "product-price",
            "тут мають бути лише числа"),
        createElementForm(
            "Опис товару",
            undefined,
            "product-description",
            "текст має бути Українською")
    ]
}

function createVideoForm() {
    return [
        createElementForm(
            "Назва відео",
            "text",
            "video-name",
            "текст має бути Українською"),
        createElementForm(
            "Посилання на відео",
            "url",
            "video-url",
            "Вкажіть в форматі https://name.org")
    ]
}

function createElementForm(placeholder = "", type = "text", classInput = "", errorText = "Помилка", eventInput = () => { }) {
    const parent = document.createElement("div"),
        label = document.createElement("label"),
        input = document.createElement("input"),
        error = document.createElement("div");

    parent.classList.add("input")
    label.innerText = placeholder;
    input.type = type;
    input.validate = false;
    input.classList.add(classInput);
    error.classList.add("error", "hide");
    error.innerText = errorText;
    input.addEventListener("change", eventInput);
    input.addEventListener("input", (e) => {
        validate(e.target.value, e.target.classList.value, error, input);
    });
    input.addEventListener("focus", () => {
        label.classList.add("none-placeholder")
    })
    input.addEventListener("blur", () => {
        if (!input.value) {
            label.classList.remove("none-placeholder")
        }
    })

    parent.append(label, input, error);

    return parent
}

function createId() {
    let symbols = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    let passLength = 8;

    let string = "";

    for (let i = 0; i < passLength; i++) {
        let n = Math.floor(Math.random() * symbols.length);
        string += symbols[n];
    }
    return string;
}


class StoreProduct {
    constructor(name, price, description, date) {
        this.id = createId();
        this.name = name;
        this.price = price;
        this.status = false;
        this.date = date;
        this.description = description;
        this.category = this.constructor.name;
        this.quantity = "0";
    }
}
class RestProduct {
    constructor(name, price, description, date) {
        this.id = createId();
        this.name = name;
        this.price = price;
        this.status = false;
        this.date = date;
        this.description = description;
        this.category = this.constructor.name;
        this.quantity = "0";
    }
}
class VideoProduct {
    constructor(name, url, date) {
        this.id = createId();
        this.name = name;
        this.url = url;
        this.date = date;
        this.category = this.constructor.name;
    }
}
let storeProducts = [];
let restProducts = [];
let videoProducts = [];

function sendData(type) {
    let date = new Date();
    date = date.toLocaleString().split(",")[0].split(".").reverse().join(".") + date.toLocaleString().split(",")[1];
    if (type === "магазин") {
        const name = document.querySelector(".product-name").value;
        const price = document.querySelector(".product-price").value;
        const desc = document.querySelector(".product-description").value;
        if (localStorage.storeProducts) {
            storeProducts = JSON.parse(localStorage.getItem("storeProducts"));
        }
        storeProducts.push(new StoreProduct(name, price, desc, date));
        localStorage.setItem("storeProducts", JSON.stringify(storeProducts));
        document.querySelector(".product-name").value = ""
        document.querySelector(".product-price").value = ""
        document.querySelector(".product-description").value = ""
        sendBtnDisabled()
    }
    else if (type === "ресторани") {
        const name = document.querySelector(".product-name").value;
        const price = document.querySelector(".product-price").value;
        const desc = document.querySelector(".product-description").value;
        if (localStorage.restProducts) {
            restProducts = JSON.parse(localStorage.getItem("restProducts"));
        }
        restProducts.push(new RestProduct(name, price, desc, date));
        localStorage.setItem("restProducts", JSON.stringify(restProducts));
        sendBtnDisabled()
    }
    else if (type === "відео хостинг") {
        const name = document.querySelector(".video-name").value;
        const url = document.querySelector(".video-url").value;
        if (localStorage.videoProducts) {
            videoProducts = JSON.parse(localStorage.getItem("videoProducts"));
        }
        videoProducts.push(new VideoProduct(name, url, date));
        localStorage.setItem("videoProducts", JSON.stringify(videoProducts));
        sendBtnDisabled()
    }
}

const validate = (value, classList, error, input) => {
    //const [...inputs] = document.querySelectorAll("input");

    if (classList.includes("name")) {
        const patern = /^[а-яіїєґ0-9- ]{3,20}$/i;
        if (patern.test(value)) {
            error.classList.add("hide");
            input.validate = true;
            //buttonShow()
        }
        else {
            input.validate = false
            error.classList.remove("hide");
        };


    }
    if (classList.includes("price")) {
        const patern = /^[0-9.]{1,6}$/i;
        if (patern.test(value)) {
            error.classList.add("hide");
            input.validate = true;
            //buttonShow()
        }
        else {
            error.classList.remove("hide");
            input.validate = false

        }

    }
    if (classList.includes("description")) {
        const patern = /^[а-яіїєґ0-9- ]{5,}$/i;
        if (patern.test(value)) {
            error.classList.add("hide");
            input.validate = true;
            //buttonShow()
        }
        else {
            error.classList.remove("hide");
            input.validate = false

        }
    }
    if (classList.includes("url")) {

        const patern = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
        if (patern.test(value)) {
            error.classList.add("hide");
            input.validate = true;
            //buttonShow()
        }
        else {
            error.classList.remove("hide");
            input.validate = false
        }
    }
    buttonShow()
}


// Активація кнопки 
function buttonShow() {
    const [...inputs] = document.querySelectorAll("input");
    const rez = inputs.every(a => {
        return a.validate === true;
    });

    if(rez){
        buttonSend.disabled = false;
    }else{
        buttonSend.disabled = true;
    }
}

const sendBtnDisabled = () => {
    buttonSend.disabled = true;
}



