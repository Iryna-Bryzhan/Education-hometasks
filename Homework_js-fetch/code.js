// Задача знайти api монобанк курс валют, нова пошта віділення та погода. 
//  1 Напишіть JavaScript-функцію, яка виконує GET запит до відкритого API за допомогою Fetch.
//  2 Функція повинна приймати URL API як вхідний параметр.
//  3 Використовуйте Fetch, щоб виконати GET запит за вказаною URL.
//  4 Обробляйте отриману відповідь у форматі JSON та виводьте результати в консоль.
//  5 Обробляйте можливі помилки під час виконання запиту та виводьте відповідне повідомлення про помилку.
// https://api.monobank.ua/bank/currency
// https://api.novaposhta.ua/v2.0/json/ 
// https://openweathermap.org/api

const weather = document.getElementById('weather')
  function  weatherShow(){
        return fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&q=kyiv&appid=c92361d825c3b727352e57ae9cfa2b10')
            .then(response => response.json())
            .then(data => getWeather(data))
            .catch(err => console.log(err))
    }
   
    function getWeather(data){
        console.log(data)
        const location = data.name;
        const temp = Math.round(data.main.temp);
        const feelLike = Math.round(data.main.feels_like);
        const weatherStatus = data.weather[0].main;
        const weatherIcon = data.weather[0].icon;

        const show = `<div class="weather-info">
        <div class="weather-content">
            <div class="weather-city">${location}</div>
            <div class="weather-status">${weatherStatus}</div>
        </div>
        <div class="weather-icon">
            <img src="https://api.openweathermap.org/img/w/${weatherIcon}.png" alt="">
        </div>
        </div>
        <div class="weather-temp" unit="metric">${temp} &#176;C</div>
        <div class="weather-feels_like">Feels like: ${feelLike} &#176;C</div>   `
        
        weather.innerHTML = show;
    }


const currency = document.getElementById('currency')
const currencyNames = {
    840: "USD",
    978: "EUR",
    980: "UAH",
  };
    function  currencyShow(){
        return fetch('https://api.monobank.ua/bank/currency')
            .then(response => response.json())
            .then(arrCurrency => getCurrency(arrCurrency))
            .catch(error => console.log(error))
    }

    function getCurrency(arrCurrency){
       
       Object.values(arrCurrency).map(currencyData => {
          
        const currencyCode = currencyData.currencyCodeA;
        const currencyName = currencyNames[currencyCode];
        const rateBuy = currencyData.rateBuy;
        const rateSell = currencyData.rateSell;
      
        const currencyTable = `
    <tr>
        <td class="currency">${currencyName}</td>
        <td class="rateBuy">${rateBuy}</td>
        <td class="rateSell">${rateSell}</td>
    </tr>`
        if(rateBuy !== 0 || rateSell !== 0){
        currency.innerHTML += currencyTable;
     }
        
    })
}


const warehouse = document.getElementById('warehouse');

function getWarehouse() {
  const url = "https://api.novaposhta.ua/v2.0/json/Address/getWarehouses";
  const apiKey = "3638604e5611e61aa35214fd83bf21a2";
  const modelName = "Address";
  const calledMethod = "getWarehouses";
  const methodProperties = {
    CityName: "київ",
    Limit: 40
  };

  const data = {
    apiKey: apiKey,
    modelName: modelName,
    calledMethod: calledMethod,
    methodProperties: methodProperties
  };
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => warehouseShowData(result))
  .catch(error => console.error(error));
}

function warehouseShowData(result) {
  result.data.forEach(warehouseData => {
    console.log(warehouseData);
    const cityName = warehouseData.CityDescription;
    const description = warehouseData.Description;
    const delivery = warehouseData.Delivery.Friday;
    const delivery2 = warehouseData.Delivery.Saturday;
    
    const warehouseTable = `
      <tr>
        <td class="currency">${cityName}</td>
        <td class="rateBuy">${description}</td>
        <td class="rateSell">Пн-пт: ${delivery} Сб-нд: ${delivery2}</td>
      </tr>`;

    warehouse.innerHTML += warehouseTable;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  weatherShow();
  currencyShow();
  getWarehouse()
});




     