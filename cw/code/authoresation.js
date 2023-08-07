// Ця функція перевіряє, чи користувач авторизований. Вона перевіряє наявність ключа "isAuth" у localStorage. Якщо ключ існує, то функція нічого не робить, якщо ключа немає, то користувач перенаправляється на сторінку авторизації за допомогою location = "/authorization".
function isAuth() {
    if (localStorage.isAuth) {
        return
    } else if (!location.pathname.includes("authorization")) {
        location = "/authorization"
    }
}

try {
// виводить в консоль день тижня (англійською) та годину в нижньому регістрі.
    console.log((new Date().toLocaleDateString("en", { weekday: "long" }) + new Date().getHours()).toLocaleLowerCase());
// виводить в консоль день тижня (українською ) та хвилини в нижньому регістрі.
    console.log(new Date().toLocaleDateString("uk", { weekday: "long" }).toLocaleLowerCase() + new Date().getMinutes());


// Ця функція виконує авторизацію користувача. Вона порівнює введені значення логіну та пароля з даними, отриманими з new Date(). Якщо дані співпадають, то встановлює флаг "isAuth" у localStorage на true, видаляє класи "error" з полів вводу та перенаправляє користувача на головну сторінку (location = "/"). У противному випадку додає класи "error" до полів вводу.
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


// Ці функції додають обробники подій "change" до полів вводу. Кожен раз, коли вміст поля вводу змінюється, викликається btnShow().
    inputLogin.addEventListener("change", () => {
        btnShow();
    })

    inputPassword.addEventListener("change", () => {
        btnShow();
    })


// Ця функція додає обробник події "click" до кнопки btn. При кліку на кнопку викликається функція Auth().
    btn.addEventListener("click", () => {
        Auth()
    })

// Ця функція перевіряє, чи обидва поля вводу (логін та пароль) не порожні.Якщо не порожні, то активує кнопку, якщо порожні, то блокує 
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