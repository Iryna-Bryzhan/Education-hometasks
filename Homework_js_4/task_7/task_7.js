/*Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), 
surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.
*/

class Worker{
	constructor(name, surname, rate, days ) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
		this.getSalary = function getSalary(){
			return this.rate * this.days;
	}
}
};
	

const worker1 = new Worker('Dima', 'Ivanov', 680, 23);

document.write(`<div>${worker1.name} ${worker1.surname} <br/> Salary: ${worker1.getSalary()} </div>`);
console.log(worker1, worker1.getSalary())


const worker2 = new Worker('Ivan', 'Petrov', 800, 23);

document.write(`<div>${worker2.name} ${worker2.surname} <br/> Salary: ${worker2.getSalary()} </div>`);
console.log(worker2, worker2.getSalary())
