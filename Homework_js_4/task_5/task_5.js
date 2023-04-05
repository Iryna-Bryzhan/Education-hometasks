/*Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка
повертає 4. Поверніть результатом функції ggg суму 3 та 4.
*/


const func1 = function(){
	return a=3;
}
console.log(func1())

const func2 = function(){
	return b=4;
}
console.log(func2())

function ggg(){
	return a + b;
}
console.log(ggg())