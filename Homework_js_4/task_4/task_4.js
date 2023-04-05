/*Даний рядок типу 'var_text_hello'. Зробіть із нього текст 
'VarTextHello'.*/

let string = 'var_text_hello';
let re = /_/g;
let arr = string.replace(re, " ").split(' ');
for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
};
let result = arr.join('');
console.log(result);

