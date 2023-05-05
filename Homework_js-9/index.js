//task 1

let sec = 0;
let min = 0;
let hour = 0;
let flag = false;
let containerStopwatch = document.getElementById("container-stopwatch")
const get = id => document.getElementById(id);

const startButton = document.getElementById("startButton");

  const seconds = () => {
    if(sec<10){
        get("seconds").innerHTML = '0' + sec;
    } else {
        get("seconds").innerHTML = sec;
    }
    if(min<10){
        get("minutes").innerHTML = '0' + min;
    } else {
        get("minutes").innerHTML = min;
    }
    if(hour<10){
        get("hour").innerHTML = '0' + hour;
    } else {
         get("hour").innerHTML = hour;
    }
   
    sec++;

    if(sec>=60){
        min++;
        sec = sec-60;
    }
    if(min>=60){
        hour++;
        min = min-60;
    }
} 
const start = () =>{
    get("startButton").onclick = () => {
        if(!flag){
            intervalSeconds = setInterval(seconds, 1000);  
            flag = true;
            containerStopwatch.classList.remove("silver");
            containerStopwatch.classList.add("green");
        }
    }  
}
start()

const stop = () =>{
    get("stopButton").onclick = () => {
         containerStopwatch.classList.add("red");
         containerStopwatch.classList.remove("green");
        clearInterval(intervalSeconds);
        flag = false;
    }
}
stop()

const reset = () => {
    get("resetButton").onclick = () => {
    get("seconds").innerHTML = "00";
    get("minutes").innerHTML = "00";
    get("hour").innerHTML = "00";
    sec = 0;
    min = 0;
    hour = 0;
    containerStopwatch.classList.remove("green");
    containerStopwatch.classList.remove("red")
    containerStopwatch.classList.add("silver");
    clearInterval(intervalSeconds);
    } 
 }
 reset()


//task 2
const check = document.querySelector(".check")
const tel = document.querySelector(".tel");

const inputTel = document.createElement("input");
inputTel.className = "phone"

const errorTel = document.createElement("div");
errorTel.className = "errorTel"

const button = document.createElement("button");
button.id = "saveTel"
button.innerText = "Зберегти"

inputTel.setAttribute("type", "tel");
inputTel.setAttribute("name", "phone");
inputTel.setAttribute("placeholder", "0ХХ-ХХХ-ХХ-ХХ");


tel.appendChild(inputTel)
tel.appendChild(errorTel)
tel.appendChild(button)
document.body.appendChild(tel);


patternTel = /0\d{2}-\d{3}-\d{2}-\d{2}/;

button.onclick = function(){ 
    if(patternTel.test(inputTel.value)){
        inputTel.style.border = "1px solid green";
        inputTel.style.backgroundColor = "rgb(148, 243, 148)"
        errorTel.innerText = "";
        setTimeout(function(){
            document.location.href = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
        }, 3000)
    } else{
        errorTel.innerText = "Не вірно введений номер";
        inputTel.style.border = "1px solid red";
    }
}

