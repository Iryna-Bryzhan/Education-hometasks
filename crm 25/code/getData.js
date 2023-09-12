function openExport() {
    const EXPORT = document.querySelector("#export");
    const close = document.getElementById("modal-close");

    close.addEventListener("click", () => {
        const el = document.querySelector(".container-modal");
        el.classList.add("hide");
    })

    EXPORT.addEventListener("click", () => {
        const data = getAPIProduct();
        if(!data) return;

        const el = document.querySelector(".container-modal");
        el.classList.remove("hide");

        const textarea = document.createElement("textarea");
        textarea.innerText = data;
        textarea.className = "API"

        el.querySelector("form").append(textarea)
    })
}

export default openExport;


export function getAPIProduct() {
    if (location.pathname.includes("restoran")) {
        return localStorage.restProducts;
    } else if (location.pathname.includes("store")) {
        return localStorage.storeProducts;
    } else if (location.pathname.includes("video")) {
        return localStorage.videoProducts
    }else{
        return null
    }
}
