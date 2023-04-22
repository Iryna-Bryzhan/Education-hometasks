/*Використовуючи класи створити з об'єктів 
https://fakestoreapi.com/products об'єкти 
 {
            name : "string"
            img : "string"
            productPrice : "number"
            productDescription : "stering"
        }
На виході створити карточки товарів з використанням бібліотеки bootstrap

3. 
- Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
- Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].
*/

class Product{
    constructor(title, image, price, description){
        this.title = title
        this.image = image
        this.price = price
        this.description = description
    }
}
        
const products = [];
   for( let i = 0; i<data.length; i++){
           
    const card = new Product(data[i].title, data[i].image, data[i].price, data[i].description);

    products.push(card);
    //console.log(cards)
         
        
// data.map(function(elem, i, cards){
//     return new Product(data[i].title, data[i].image, data[i].price, data[i].description)
// })

const cards = `
    <div id="card" style="width: 25rem;">
    <img class="card-img-top img" src="${card.image}" alt="Card image  cap">
    <div class="card-body">
    <h5 class="card-title">${card.title}</h5>
    <p class="card-text">${card.description}</p>
    <p class="prise">Prise: ${card.price}$</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`
document.getElementById('cards').innerHTML += cards
}   

// const filterPrice = products.filter(function (e) {
//     return e.price > 100;   
//   });
// console.log(filterPrice);


/*3. 
- Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
- Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].
*/

const array = [12, "hello", "Ivan", 25, 48, 6, null, "card"]
function filterBy(arr, type) {
  return arr.filter(item => typeof item !== type)
}

console.log(filterBy(array, 'number'))

   