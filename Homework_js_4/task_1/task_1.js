/* Завдання 1
Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами.
Технічні вимоги:
- Вважати за допомогою модального вікна браузера два числа.
- Вважати за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди може бути введено `+`, `-`, `*`, `/`.
- Створити функцію, в яку передати два значення та операцію.
- Вивести у консоль результат виконання функції.

Необов'язкове завдання просунутої складності:
- Після введення даних додати перевірку їхньої коректності. Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново (при цьому значенням за умовчанням для кожної зі змінних повинна бути введена раніше інформація).
*/

let number1 = parseFloat(prompt("Введіть перше число"));
let number2 = parseFloat(prompt("Введіть друге число"));
let operation = prompt("Введіть математичну операцію - `+`, `-`, `*`, `/`");


const add = (a, b) =>{
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    if(b === 0){  
        return "На нуль ділити не можна";
    }
    return a / b;
}

switch(operation){
    case "+": calculate(number1, number2, add, show)
    break;
    case "-": calculate(number1, number2, sub, show)
    break;
    case "*": calculate(number1, number2, mul, show)
    break;
    case "/": calculate(number1, number2, div, show)
}
function show (date){
    document.getElementById("calc").innerHTML = `${number1} ${operation} ${number2} = ${date}`;
}
function calculate (number1, number2, callback, show){
   show(callback(number1, number2));
   console.log(callback(number1, number2));
}

