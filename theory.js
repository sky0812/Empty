// ПРОТОТИПЫ

let car = {
    doors: 4,
    turbocharging: false,
    ride: function() {
        console.log('Машина едет');
    }

}

let newCar = Object.create(car);
newCar.model = 'mazda 3';

console.log(newCar.doors);

console.log(newCar.hasOwnProperty('model')); // вернет булевое значение
console.log(newCar.__proto__.hasOwnProperty('doors')); // вернет булевое значение

console.log(car.isPrototypeOf(newCar)); // булевое значение





function Car() {
    this.model = 'Mazda';
};

 Car.prototype.ride = function() {
     console.log('Go');
 };

 let car1 = new Car();

 car1.ride();

 let carTest = {
     model: 'Mazda';
 }





function Car(model, color) {
    this.model = model;
    this.color = color;
};

 Car.prototype.ride = function() {
     console.log('Go');
 };

 let car1 = new Car('Mazda', 'Red');
 let car2 = new Car('VAZ', 'Black');

 console.log(car1.ride === car2.ride); // true

 car1.ride();

 let carTest = {
     model: 'Mazda';
 }




 function Car(brand, model, options) {
    this.brand = brand;
    this.model = model;
    options = options || {}
    this.color = options.color;
    this.transmission = options.transmission;
};

 Car.prototype.ride = function() {
     console.log(this.brand + '' + this.model + ' goes');
 };

 let car1 = new Car('Mazda', '3', {color: 'blue'});
 let car2 = new Car('VAZ', 'X3', {ABS: true});

 car1.ride(); // mazda 3 goes
 car2.ride(); // vaz x3 goes






 function Car(brand, model, options) {
    this.brand = brand;
    this.model = model;
    options = options || {}
    this.color = options.color;
    this.transmission = options.transmission;
};

 Car.prototype.ride = function() {
    console.log(this.brand + '' + this.model + ' goes');
};

function Audi(countryBuild, options, model, type) {
    this.brand = 'Audi';
    Car.apply(this, arguments)
    this.model = model;
    this.type = type;
};

Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;
let car_q7 = new Audi('germany', {color: 'red'}, 'Q7', 'S');

car_q7.ride(); // Audi Q7 goes