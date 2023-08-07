function isAuth() {
    if (localStorage.isAuth) {
        return
    } else if (!location.pathname.includes("authorization")) {
        location = "/authorization"
    }
}

try {
    console.log((new Date().toLocaleDateString("en", { weekday: "long" }) + new Date().getHours()).toLocaleLowerCase());
    console.log(new Date().toLocaleDateString("uk", { weekday: "long" }).toLocaleLowerCase() + new Date().getMinutes());


    function Auth() {
        const loginData = (new Date().toLocaleDateString("en", { weekday: "long" }) + new Date().getHours()).toLocaleLowerCase();
        const passwordData = new Date().toLocaleDateString("uk", { weekday: "long" }).toLocaleLowerCase() + new Date().getMinutes();

        if (inputLogin.value === loginData && inputPassword.value === passwordData) {
            localStorage.isAuth = true;
            inputLogin.classList.remove("error");
            inputPassword.classList.remove("error");
            location = "/"
        } else {
            inputLogin.classList.add("error")
            inputPassword.classList.add("error")
        }
    }

    const btn = document.querySelector("#btn");
    const inputLogin = document.querySelector("[data-type='login']");
    const inputPassword = document.querySelector("[data-type='password']");

    inputLogin.addEventListener("change", () => {
        btnShow();
    })

    inputPassword.addEventListener("change", () => {
        btnShow();
    })

    btn.addEventListener("click", () => {
        Auth()
    })

    function btnShow() {
        if (inputLogin.value !== "" && inputPassword.value !== "") {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }

} catch (e) {
  
}


export { isAuth }