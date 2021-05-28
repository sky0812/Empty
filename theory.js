const createHome = function (wall = 4, doors = 1, window = 2) {
    console.log(`Дом имеет:
    стен: ${wall},
    двери: ${doors},
    окна: ${window}`);
};

createHome(4, 2); // значения по умолчанию 4, 1, 2, но их можно переопределять


// стрелочная функция

const sum = (a, b) => {
    return a + b;
};

sum(2, 3);

const sum (a, b) => a + b;

const sum a => a + 5;

const sum (a) => a + 5;



const sum = (a, b) => ({
    a: a,
    b: b,
    sum: a + b
});



const img = document.querySelector(`img`);

img.addEventListener('click', () => {
    console.log('hi');
});

const img = document.querySelector(`img`);

img.addEventListener('click', (e) => {
    console.log(e.target);
});  // будем получать картинку



const img = document.querySelectorAll(`img`);

img.forEach((e) => {
    console.log(e);
}); // получим все картинки





// define property

const mazda = {
    model: 3,
    year: 2006, 
};

mazda.color = 'blue';
mazda['color'] = 'blue';
// то же самое
Object.defineProperty(mazda, 'color', {
    value: 'blue',
    writable: true, // разрешать присваивать или изменять свойство
    configurable: true, // запрещает удаление
    enumerable: true // разрещает видимсоть при переборе
});

mazda.color = 'red';

delete mazda.color; // удаляет свойство


for (let key in mazda) {
    console.log(key, mazda[key]);
};


// запретить работать со свойсвтом
Object.defineProperty(mazda, 'color', {
    writable: false
};


const car = {
    brand: 'mazda',
    model: 3,
    year: 2006, 
    get fullTitle () {
        return this.brand + ` ` + this.model;
    },
    set fullTitle(value) {
        this.brand = value;
    }
};
// getter
// setter

car.fullTitle = 'BMW';

console.log(car.fullTitle);





// class - функция конструктор

class Car {
    constructor() {
        this.brand = 'mazda';
    }
}




class CarWash {
    constructor(brand, model = noCarBaseModel(), services = []) {
        this.brand = brand;
        this.model = model;
        this.washed = false;
        this._services = services
    }

    static noCarBaseModel() {
        return 'none';
    }

    washReady() {
        this.washed = true;
        CarWash.counter++;
        this.report();
    }

    report() {
        console.log(this.brand, this.model, this.washed);
    }

    get services() {
        console.log(this._services);
        return this.services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
    }

    set services(addServices) {
        return this._services.push(addServices);
    }
};

CarWash.counter = 0;

car1.report();
const car1 = new CarWash('mazda', 3, ['black tyres', 'wax']);
const car2 = new PassCar('BMW', 'x5');
const car3 = new CarWash('Volvo', 's60');
car1.washReady();
car2.washReady();
car3.washReady();

car1.services = 'Протирка стекол';

car1.services
console.log(car1);



// инкапсуляция - _  . Чтобы не перезаписывать значения. А например, добавить





class PassCar extends CarWash {
 constructor(brand, model, services, pass = 5) {
     super(brand, model, services); // унаследование только этих функций
     this.pass = pass;
 }

 washReady() {
     super.washReady();
     this.reportOffice();
 }

 reportOffice() {
     console.log('На мойке для легковых была помыта машина');
 }
}; // наследдование свойств и методов из класса