let header = document.write("<header>Header</header>");
let nav = document.write("<nav>Nav</nav>");
let section = document.write("<section>Section</section>");
let footer = document.write("<footer>Footer</footer>");

let headerStyle = document.querySelector("header");
headerStyle.style.height="200px";
headerStyle.style.textAlign="center";
headerStyle.style.border="5px solid red";
headerStyle.style.paddingTop="4%";


//Задача 1
var userName = prompt("Як Вас звати?", "Введіть своє ім'я");
var userAge = prompt("Скільки Вам років?", "Введіть Ваш вік");
var city = prompt("В якому місті Ви проживаєтe?", "Введіть назву міста");

document.write("<div>Дані користувача:</div>");

document.write("Ім'я: " + userName + ";" + "<br/>");
document.write("Вік: " + userAge + ";" + "<br/>");
document.write("Місто проживання: " + city + ";" + "<br/>");

console.log("Ім'я: " + userName);
console.log("Вік: " + userAge);
console.log("Місто проживання: " + city);

//вивід інформації разом
var user = {"Ім'я": userName, 
    "Вік": userAge, 
    "Місто проживання": city};

console.log(user)


//Задача 2
var x = 6;
var y = 14;
var z = 4;

console.log(x += y - x++ * z); //-4
/*
1) 6*4=24; 
2) 14-24=-10; 
3) 6-10=-4;
*/

console.log(z = --x - y * 5); //-65
/*
1) --x=5; 
2) 14*5=70; 
3) 5-70=-65; 
4) z=-65;
*/

console.log(y /= x + 5%z); //2
/*
1) 5%z=1; 
2) 6+1=7; 
3) 14/7=2;
*/

console.log(z - x++ + y * 5); //68
/*
1) 14*5=70; 
2) 4-6+70=68;
*/

console.log(x = y - x++ * z); //-10
/*
1) 6*4=24; 
2) 14-24=-10; 
3) x=-10
*/

/*
//Задача 3
let userName = prompt("Як Вас звати?", "");
let userAge = prompt("Скільки Вам років?", "");

if(userAge < 18){
    alert("Ви не можете відвідати цей сайт")
} else if(userAge <=22){
    let ok = confirm("Are you sure you want to continue?")
    if(ok){
        alert("Welcome " + userName)
    } else {
        alert("You are not allowed to visit this website")
    }
} else{
    alert("Welcome " + userName)
};
*/





