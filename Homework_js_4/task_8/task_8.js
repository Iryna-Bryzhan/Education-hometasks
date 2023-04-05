/*Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/

class MyString {
	constructor(str) {
		this.str = str;
}


reverse() {
    let reversedStr = "";
    for (let i = this.str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + this.str[i];
    }
    return reversedStr;
}

ucFirst() {
	let firstLetter = this.str.charAt(0);
	let restString = this.str.slice(1);
	return firstLetter.toUpperCase() + restString;
} 

ucWords() {
	let word = this.str.split(' ');
	let words = [];
	for (let i = 0; i < word.length; i++) {
		let a = word[i];
		let newStr = a[0].toUpperCase() + a.slice(1);
		words.push(newStr);
	}
	return words.join(' ');
}
}

let myString = new MyString('word1 word2 word3 word4 word5');
console.log(myString.reverse())
console.log(myString.ucFirst())
console.log(myString.ucWords())