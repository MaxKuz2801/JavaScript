// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users = [
  new User(1, 'max', 'kuz', 'max@gmail.com', 380632523114),
  new User(2, 'yana', 'zahakailo', 'yana@gmail.com', 34634634),
  new User(3, 'bodia', 'papizh', 'bodia@gmail.com', 380632444),
  new User(4, 'bodia', 'struk', 'struk@gmail.com', 3806366673114),
  new User(5, 'vika', 'sakovska', 'vika@gmail.com', 38054373114),
  new User(6, 'diana', 'voloshyn', 'vika@gmail.com', 3806320737884),
  new User(7, 'anna', 'kuz', 'anna@gmail.com', 380632072454),
  new User(8, 'denys', 'komarnystkiy', 'denys@gmail.com', 3806377776),
  new User(9, 'pavlo', 'onatsko', 'pavlo@gmail.com', 3806323563434),
  new User(10, 'ostap', 'prokip', 'ostap@gmail.com', 38063635333)
];
console.log(users)


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteruser = users.filter ((users) => !(users.id % 2));
console.log(filteruser)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortuser = users.sort((a, b) => a.id - b.id);
console.log(sortuser)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get email() {
        return this._email;
    }

    get phone() {
        return this._phone;
    }

    get order() {
        return this._order;
    }
    constructor(id, name, surname, email, phone, order) {

        this._id = id;
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._phone = phone;
        this._order = order;
    }

}
//
const client = [
    new Client( 1, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan', 'aplle']),
    new Client( 2, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan', 'banan','banan']),
    new Client( 3, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan']),
    new Client( 4, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan', 'aplle']),
    new Client( 5, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan']),
    new Client( 6, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan']),
    new Client( 7, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan', 'aplle']),
    new Client( 8, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan']),
    new Client( 9, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan', 'aplle']),
    new Client( 10, 'Max', 'Kuz', 'kuz@gmail.com', '+380632073114', ['aplle', 'banan'])
];
 //
//


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortArr = client.sort((a, b) => a.order.length - b.order.length)
console.log(sortuser)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car (model, vurobnuk, year, maxspeed, dvugun) {
    this.model = model;
    this.vurobnuk = vurobnuk;
    this.year = year;
    this.maxSpeed = maxspeed;
    this.dvugun = dvugun;
    this.driver = null;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function (){
        for (const key in this) {
            if (typeof this[key] === 'function')
                continue
            console.log(key.toUpperCase(), this[key]);
        }
    }

    this.increaseMaxSpeed = function (addSpeed) {
        this.maxSpeed = this.maxSpeed + addSpeed;
    }
    this.changeYear = function (NewYear) {
        this.year = NewYear;
    }
    this.Driver = function (Driver) {
        this.driver = Driver;
    }

}


const car = new Car('BMW', 'Germany', '2020', '230', '3.0')
car.drive();
car.info();
car.increaseMaxSpeed(30)
car.changeYear(2022)

function Dr(name, year, exp) {
    this.name;
    this.year;
    this.exp;
}

const driver = new Dr('Max', '2000', '5')
car.Driver(driver)
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class Car2 {
    constructor(model, vurobnuk, year, maxspeed, dvugun)  {
    this.model = model;
    this.vurobnuk = vurobnuk;
    this.year = year;
    this.maxSpeed = maxspeed;
    this.dvugun = dvugun;
    this.driver = null;
}
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info(){
        for (const key in this) {
            if (typeof this[key] === 'function')
                continue
            console.log(key.toUpperCase(), this[key]);
        }
    }

   increaseMaxSpeed(addSpeed){
        this.maxSpeed = this.maxSpeed + addSpeed;
    }
    changeYear (NewYear) {
        this.year = NewYear;
    }
    Driver(Driver) {
        this.driver = Driver;
    }

}



