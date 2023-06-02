/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
*/


let firstOperand = null;
let secondOperand = null;
let operator = null;
let memory = null;
let previousResult = null;

const display = document.getElementById('display-input');

function numberClicked(number) {
    if (operator === null) {
        display.value += number;
        firstOperand = parseFloat(display.value);
    } else {
        display.value += number;
        secondOperand = parseFloat(display.value);
    }
} 

function operatorClicked(op) {
    if (previousResult !== null) {
        firstOperand = previousResult;
        previousResult = null;
    }
    console.log(firstOperand, secondOperand)
   if (firstOperand === null) {
      operator = op;
      display.value = '';
    } else if (secondOperand === null) {
      operator = op;
      display.value = '';
    }else {
      firstOperand = calculateResult(firstOperand, secondOperand, operator);
      display.value = firstOperand;
      secondOperand = null;
      operator = op;
    }
}  

function calculateResult(a, b, op) {
    
switch (op) {
    case '+':
        return a + b; 
     case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
        if(b === 0) {
            return "error"
        } else{
            return a / b;
        }
    default:
      return null;
  }
}
  
const equalButton = document.getElementById('eq');
equalButton.addEventListener('click', equalClicked);

function equalClicked() {
    if (firstOperand !== null && operator !== null && secondOperand !== null) {
      result = calculateResult(firstOperand, secondOperand, operator);
      previousResult = result;
      display.value = result;
      firstOperand = result;
      secondOperand = null; 
      operator = null;
    } else {
      firstOperand = null;
      secondOperand = null;
      operator = null;
    } 
}
  
function clearClicked() {
  display.value = '';
  firstOperand = null;
  secondOperand = null;
  operator = null;
}

function mMinusClicked() {
    memory = null;
    document.getElementById('memory').style.display = 'none';
}
  

function mPlusClicked() {
    memory += parseFloat(display.value);
    document.getElementById('memory').style.display = 'block';
}

let mrcClickedBefore = false;
  
function mrcClicked() { 
    display.value = memory;
    mrcClickedBefore = true;
    if (mrcClickedBefore) {
        document.getElementById('memory').style.display = 'none';
        memory = null;
        mrcClickedBefore = false;
    }
}

function buttonClicked(event) {
  const button = event.target;
  const value = button.value;
     
  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/': 
      operatorClicked(value);
      break;
    case '=':
        equalClicked(value);
      break;
    case 'C':
      clearClicked();
      break;
    case 'mrc':
      mrcClicked();
      break;
    case 'm-':
      mMinusClicked();
      break;
    case 'm+':
      mPlusClicked();
      break;
    default:
      numberClicked(value);
  }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', buttonClicked);
});


