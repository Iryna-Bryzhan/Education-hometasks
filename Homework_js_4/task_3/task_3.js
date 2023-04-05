/*Перепишіть функцію за допомогою оператора '?' або '||'
Наступна функція повертає true, якщо параметр age більше 18. В іншому випадку вона ставить 
питання confirm і повертає його результат.

function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Батьки дозволили?');
} 
}*/


function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}
function checkAge(age) {
  return age > 18 || confirm('Батьки дозволили?');
}
