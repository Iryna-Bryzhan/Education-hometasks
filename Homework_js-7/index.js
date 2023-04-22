/*Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
https://storage.googleapis.com/www.examclouds.com/oop/car-ierarchy.png*/

class Engine{
    constructor(power, company){
        this.power = power
        this.company = company
    }
}

class Driver{
    constructor(fullName, experience){
        this.fullName = fullName
        this.experience = experience
    }
}

class Car{
    constructor(marka, carClass, weight, driver, engine){
        this.marka = marka
        this.carClass = carClass
        this.weight = weight
        this.driver = driver
        this.engine = engine
    }
        start(){
            console.log("Поїхали")
        }
        stop(){
            console.log("Зупиняємося")
        }
        turnRight(){
            console.log("Поворот праворуч")
        }
        turnLeft(){
            console.log("Поворот ліворуч")
        }
        toString(){
            return `Марка автомобіля: ${this.marka}<br/>Клас автомобіля: ${this.carClass}<br/>Вага: ${this.weight} кг<br/>Водій: ${this.driver.fullName}\<br/>Cтаж водіння: ${this.driver.experience} років<br/>Двигун: Потужність - ${this.engine.power}, Виробник - ${this.engine.company} <br/><br/>`;
        }
}

class Lorry extends Car{
    constructor(marka, carClass, weight, driver, engine, carrying){
        super(marka, carClass, weight, driver, engine)
        this.carrying = carrying
    }
    toString(){
        return  `Марка автомобіля: ${this.marka}<br/>Клас автомобіля: ${this.carClass}<br/>Вага: ${this.weight} кг<br/>Водій: ${this.driver.fullName}\<br/>Cтаж водіння: ${this.driver.experience} років<br/>Двигун: Потужність - ${this.engine.power}, Виробник - ${this.engine.company},<br/>  Вантажопідйомністю кузова: ${this.carrying} т <br/><br/>`;
    }
}

class SportCar extends Car{
    constructor(marka, carClass, weight, driver, engine, maxSpeed){
        super(marka, carClass, weight, driver, engine)
        this.maxSpeed = maxSpeed
    }
    toString(){
        return  `Марка автомобіля: ${this.marka}<br/>Клас автомобіля: ${this.carClass}<br/>Вага: ${this.weight} кг<br/>Водій: ${this.driver.fullName}\<br/>Cтаж водіння: ${this.driver.experience} років<br/>Двигун: Потужність - ${this.engine.power}, Виробник - ${this.engine.company},<br/> Максимальна швидкість: ${this.maxSpeed} км/год <br/><br/>`;
    }
}

const driver1 = new Driver("Іванов Петро Васильович", 15);
const driver2 = new Driver("Бойко Микола Іванович", 18);

const engine1 = new Engine(390, "Audi");
const engine2 = new Engine(350, "Mercedes");
const engine3 = new Engine(1500, "Bugatti");

const car1 = new Car("Audi A6", "Class E", 2200, driver1, engine1);

const lorry1 = new Lorry("Mercedes", "Вантажівка", 5000, driver1, engine2, 20000);

const sportCar1 = new SportCar("Bugatti Chiron", "Sport Car", 2000, driver2, engine3, 420)

car1.stop()
lorry1.turnLeft()
sportCar1.turnRight()

document.write(car1)
document.write(lorry1)
document.write(sportCar1)