/*
Створіть об'єкт криптокошилок. У гаманці має зберігатись ім'я власника, кілька валют Bitcoin, 
Ethereum Stellar і в кожній валюті додатково є ім'я валюти, логотип, кілька монет та курс на 
сьогоднішній день день. Також в об'єкті гаманець є метод при виклику якого він приймає ім'я 
валюти та виводить на сторінку  інформацію."Доброго дня, ... ! На вашому балансі (Назва валюти 
	та логотип) залишилося N монет, якщо ви сьогодні продасте їх те, отримаєте ...грн.
*/


const wallet = {
	userName: 'Dima',
	bitcoin: {
		name: 'Bitcoin',
		logo: '<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png">',
		rate: '28382.11',
		amount: '60'
	},
	ethereum: {
		name: 'Ethereum',
		logo: '<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png">',
		rate: '1820.16',
		amount: '120'
	},
	stellar: {
		name: 'Stellar',
		logo: '<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/512.png">',
		rate: '20.1099',
		amount: '47'
	},
	show: function(){
		document.getElementById("wallet").innerHTML = `Доброго дня, ${wallet.userName} ! На вашому балансі залишилося: <br/>`
	},

//вывод всех сразу	


	show1: function(nameCoin){
		return `<span>${wallet[nameCoin].name} </span>  ${wallet[nameCoin].logo} - <span>${wallet[nameCoin].amount}</span> монет. Якщо ви сьогодні продасте їх те, отримаєте <span>${(wallet[nameCoin].amount*wallet[nameCoin].rate*37).toFixed(2)}грн.</span> `
	},
}
	wallet.show()

	nameCoin = ['bitcoin', 'ethereum', 'stellar'];
	for(let i=0; i<nameCoin.length; i++){
		document.write(`<div>${wallet.show1(nameCoin[i])}</div>`);
	}


//вывод по одному
/*

show1: function(nameCoin){
	document.getElementById("wallet1").innerHTML = `<span>${wallet[nameCoin].name} </span>  ${wallet[nameCoin].logo} - <span>${wallet[nameCoin].amount}</span> монет. Якщо ви сьогодні продасте їх те, отримаєте <span>${(wallet[nameCoin].amount*wallet[nameCoin].rate*37).toFixed(2)}грн.</span> `
},
}
wallet.show()
wallet.show1(prompt("Введіть назву валюти - bitcoin, ethereum або stellar"));
*/
