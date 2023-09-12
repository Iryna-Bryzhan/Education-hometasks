import { showForm } from "./functions.js";

const modal = document.querySelector(".container-modal");
const modalBody = document.querySelector(".modal-body");
const addProduct = document.querySelector("#btn-add-product");
const modalClose = document.getElementById("modal-close");
const productSelect = document.getElementById("product-select");

addProduct.addEventListener("click", () => {
    modal.classList.remove("hide");
})

modalClose.addEventListener("click", () => {
    modal.classList.add("hide")
})

productSelect.addEventListener("change", (e) => {
    //{ id, name, qantity, price, status, date, description} - за допомогою ксласу.
    showForm(e.target.value.toLowerCase())
})