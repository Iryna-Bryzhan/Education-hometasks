/*Напишіть функцію map(fn, array), яка приймає на вхід функцію та масив, та обробляє кожен 
елемент масиву цією функцією, повертаючи новий масив.*/

function map(fn, array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(fn(array[i]));
    }
    return result;
  }
  
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = map(x => x * 2, arr);
console.log(newArr); 



function squared(x){
    return x * x;
}
const newArr2 = map(squared, arr);
console.log(newArr2); 



const userNames = ['Ivan', 'Kateryna', 'Devid', 'Tetiana'];
function uppercaseName(name) {
  return name.toUpperCase();
}
const newArr3 = map(uppercaseName, userNames);
console.log(newArr3); 


/*const uppercaseName = map(name => name.toUpperCase(), userNames);
console.log(uppercaseName); */

