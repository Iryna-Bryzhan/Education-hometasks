import { showForm } from "./functions.js";

const modal = document.querySelector(".container-modal");
const modalBody = document.querySelector(".modal-body");
const addProduct = document.querySelector("#btn-add-product");
const modalClose = document.getElementById("modal-close");
const productSelect = document.getElementById("product-select");


// Ця функція додає подію на кнопку addProduct -  прибирає клас "hide" з елемента modal, тим самим показуючи модальне вікно.
addProduct.addEventListener("click", () => {
    modal.classList.remove("hide");
})

// Ця функція додає подію на кнопку закриття модального вікна modalClose - додає клас "hide" до елемента modal, тим самим ховаючи модальне вікно.
modalClose.addEventListener("click", () => {
    modal.classList.add("hide")
})


// Ця функція додає подію на випадаючий список. При виборі обробник отримує значення з e.target.value та передає його у функцію showForm() для відображення відповідної форми.
productSelect.addEventListener("change", (e) => {
    //{ id, name, qantity, price, status, date, description} - за допомогою ксласу.
    showForm(e.target.value.toLowerCase())
})