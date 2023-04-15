/*Створити конструктор Animal та розширюючі його конструктори Dog, Cat, Horse.
Конструктор Animal містить змінні food, location і методи makeNoise, eat, sleep. 
Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до конструкторів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть конструктор Ветеринар, у якому визначте метод який виводить в консоль treatAnimal(Animal animal). 
Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
У циклі надсилайте їх на прийом до ветеринара.*/

function Animal (food, location) {
    this.food = food;
    this.location = location;
}

Animal.prototype.makeNoise = function makeNoise(){
    console.log("Така тварина спить")
}
Animal.prototype.eat = function eat(){
    console.log("Така тварина їсть")
}
Animal.prototype.sleep = function sleep(){
    console.log("Тварина спить")
};


function Dog (food, location, name, fur) {
    Animal.call(this, food, location);
    this.name = name;
    this.fur = fur;
};

Dog.prototype = new Animal();

Dog.prototype.makeNoise = function makeNoise(){
    console.log("Вимовляє 'Гав'")
}
Dog.prototype.eat = function eat(){
    console.log("Собака їсть м'ясо")
};


function Cat (food, location, name, breed) {
    Animal.call(this, food, location);
    this.name = name;
    this.breed = breed;
}

Cat.prototype = new Animal();

Cat.prototype.makeNoise = function makeNoise(){
    console.log("Вимовляє 'Мяу'")
}
Cat.prototype.eat = function eat(){
    console.log("Собака їсть рибу")
};


function Horse (food, location, name, color) {
    Animal.call(this, food, location);
    this.name = name;
    this.color = color;
};

Horse.prototype = new Animal();

Horse.prototype.makeNoise = function makeNoise(){
    console.log("Вимовляє 'Іго-го'")
}
Horse.prototype.eat = function eat(){
    console.log("Кінь їсть траву")
}


const cat1 = new Cat("Риба", "приватний дім", "Мурзік", "Сіамский");
const cat2 = new Cat("Сир", "квартира", "Люся", "Шотланська");
const dog1 = new Dog("м'ясо", "дім", "Рекс", "коротка");
const dog2 = new Dog("Кісточки", "двір", "Патрон", "коротка");
const horse1 = new Horse("зелень", "загін", "Ворон", "Чорний");

 

console.log(dog1)
dog1.sleep()
dog1.makeNoise()
dog1.eat()

console.log(cat1)
cat1.sleep()
cat1.makeNoise()
cat1.eat()

console.log(horse1)
horse1.sleep()
horse1.makeNoise()
horse1.eat()


/*
Створіть конструктор Ветеринар, у якому визначте метод який виводить в консоль treatAnimal(Animal animal). 
Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
У циклі надсилайте їх на прийом до ветеринара.*/

function Vet (nameVet) {
   this.nameVet = nameVet;
}

const vet1 = new Vet("Іван");

Vet.prototype.treatAnimal = function treatAnimal(animal){
    return `Раціон тварини: ${animal.food}; місце проживання: ${animal.location};`
};

function main (){
    let animals = [];
    animals.push(cat1, cat2, dog1, dog2, horse1);

    for (let i = 0; i < animals.length; i++) {
    document.write(`Пацієнт ${animals[i].name} йде на прийом до ветеринара ${vet1.nameVet};<br>`);
    document.write(vet1.treatAnimal(animals[i]) + "<br/>");
    document.write(`------------------ <br/>`);
    }
}
main()
