'use strict';

function test(a, b, c ...arr) { // rest parameter
    console.log(arr);
    console.log(a, b, c);
};

test('red', 5, 12, 'black', [], true, 9);




// spread parameter
const arr = ['red', 5, 12]
const arr2 = ['black', true]
function test(a, b, c, d, e, f) { 

    console.log(a, b, c);
    console.log(d, e, f);
};

test(...arr, 50, ...arr2);





// собрать несколько массивов в один
const arr = ['red', 5, 12]
const arr2 = ['black', true]

const arr3 = [1, ...arr, 55, ...arr2, 'hi'];





// преобразовать в массив
const allImg = document.querySelectorAll('img');

const newImg = [...allImg];





// деструктуризация объектов
const car = {
    brand: 'mazda',
    model: 3,
    options: {
        color: 'red',
        abs: true
    }
};

const {brand, model, color} = car;
const {options:{color, abs}} = car;

console.log(brand, model, color); // mazda 3 red
console.log(color, abs);

// переименовать переменную
const {options:{color : carColor, abs : carABS}} = car;
console.log(carColor, carABS);

const {options: {color: 'red'} = {}} = car;






const createCar = ({brand: `bmw`, model: `6`, color: `black`, colorInt: `white`} = {}) => {
    console.log(
        `Запущено в производство автомибиля ${brand} ${model}
        цвет кузова ${color}
        цвет салона ${colorInt}`);
};

createCar();
createCar({
    model: `3`
});









const car = {
    brand: 'mazda',
    model: 3,
    options: {
        color: 'red',
        abs: true
    }
};

const {brand, ...options} = car;
console.log(options);







const cars = [`mazda`, `bmw`, `audi`, `mercedes-benz`, `ZIL`];
const [a, , b, c] = cars;
console.log(a);
console.log(b);
console.log(c);


const cars = [[`mazda`, `bmw`], [`audi`, `mercedes-benz`, `opel`], `ZIL`];
const [[a, b], [...c], e] = cars;
console.log(a);
console.log(b);
console.log(c);



// деструктуризация
const carsModel = {
    brans: `Volvo`,
    models: {
        sedan: [`s60`, `s90`],
        cross: [`v60`, `v90`]
    }
};

const {models: {sedan: [s1, s2], cross: [c1, c2]}} = carsModel;
console.log(s1, s2, c1, c2);








const car = `bentley`;
const cycle = `bmx`;
const bike = `honda`;

const transport = {
    car,
    cycle,
    bike,
    ride() {
        console.log(`go ride`);
    }
};

transport.ride();









const transport = {
    car = `bentley`,
    cycle = `bmx`,
    bike = `honda`
};

const newTransport = {
    bike: `suzuki`,
    quadBike: `polaris`
};

Object.assign(transport, newTransport);  // добавление свойств

const currentTransport = Object.assign({}, transport, newTransport);
// создаст новый пустой объект и запшет в него данные

console.log(transport);








// object spread operator
const curTrans = {...transport, ...newTransport};

const ship = `Photinia`;
const curTrans = {...transport, ...newTransport, ship};




//map и set
const map = new Map();

map.set(`car`, {brand: `mazda`, model: 3});
map.set{777, `три топора`};
map.set{null, `даже так`};
map.set{NaN, `Ух ты`};
map.set{undefined, `неожиданно`};
const obj = {
    name: `Макс`,
    age: 30
};

map.set{obj.123};

const func = () => {
    console.log(`hello`);
};

map.set{func, `ухх`};

console.log(map.get(func));
console.log(map.has(func)); // вернет true или false


console.log(map.size); // длина числовая




const collectMap = new Map([
    [`hello`, `world`],
    [`year`, 1812]
]);


collectMap.delete(`year`);
collectMap.clear(); // удаляет все

const arr = Array.from(map);








//set 
const cars = new Set();

cars.add(`mazda`);
cars.add(`volvo`);
cars.add(`bmw`);