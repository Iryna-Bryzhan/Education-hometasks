function openImport() {
    const Import = document.querySelector("#import");
    const close = document.getElementById("modal-close");
    const getAPI = document.getElementById("getAPI")

    close.addEventListener("click", () => {
        const el = document.querySelector(".container-modal");
        el.classList.add("hide");
    })

    Import.addEventListener("click", () => {
        const el = document.querySelector(".container-modal");
        el.classList.remove("hide");

        const textarea = document.createElement("textarea");
        textarea.className = "API"
        el.querySelector("form").append(textarea);

        textarea.addEventListener("change", (e) => {
            localStorage.newData = e.target.value;
        })
    })

    getAPI.addEventListener("click", () => {
        const el = document.querySelector(".container-modal");
        el.classList.remove("hide");

        const textarea = document.createElement("textarea");
        textarea.className = "API"
        el.querySelector("form").append(textarea);

        textarea.addEventListener("change", (e) => {
            // AJAX 
            /*
            const objXRH = new XMLHttpRequest();

            objXRH.open("GET", e.target.value.trim());
            objXRH.addEventListener("readystatechange", () => {
                if(objXRH.status === 200 && objXRH.readyState === 4){
                    localStorage.ajaxData = objXRH.responseText;
                }
            })

            objXRH.send()
            //localStorage.newData = e.target.value;
            */

            fetch(e.target.value.trim())
            .then((fullInformation)=>{
               return fullInformation.json()
            })
            .then(data => {
                localStorage.fetchData = JSON.stringify(data);
            })
            .catch(()=>{})
        })
    })


}


const a = () => {

}

(a) => {
    a
}



export default openImport;

