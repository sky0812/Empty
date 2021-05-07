'use strict';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ОБЪЕКТЫ
// Объявление объекта с ключами и значениями
let car = {
    model: 'mazda',
    year: 2006,
    turbocharging: true,
    specification: [],
    style: {
        color: 'blue'
    }
};


// Создаем новый ключ и присваиваем ему значение через функцию
car.ride = function (speed) {
    console.log('Машина едет со скоростью ' + 
    speed + ' км/ч');
};

car.ride(60);

car.stop = stop;

car.stop();
stop();

console.log(car);

function stop () {
    console.log('Машина стоит, скорость 0 км/ч');
};

console.log(car.model);
console.log(car['model']);


// Добавить новый ключ и присвоить значение
car['place'] = 'city';
console.log(car);

// Новый ключ и значение
car['best place'] = 'city';


// Значение из переменной
let titleTrans = 'Коробка передач';
let bodyTrans = 'Автоматическая коробка передач';

car[titleTrans] = bodyTrans;

console.log(car);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!МАССИВЫ
let arr = [1, 2, 3, 4];

//обращаемся к первому элементу массива
arr[0] = 'cat';

console.log(arr);

// кол-во элементов
console.log(arr.length);


//добавить элемент в конец массива
arr[arr.length] = 'dog';

//добавить элемент с любым индексом
arr[10] = 'human';
console.log(arr);


// задать длину массиву. Лишние элементы будут удалены
arr.length = 30;

// методы массивов
let arr2 = ['Apple', 'Orange', 'Banana'];
// добавим элемент в массив
arr2.push ('Kiwi'); // в конец массива
arr2.unshift ('Papaya', 'Mango'); // в начало массива

arr2.pop(); // удаляет последний элемент

console.log(arr2.pop()); // извлекает последний элемент массива
console.log(arr2.shift); // извлекает первый

console.log(arr2.sort()); // сортирует по алфавиту
console.log(arr2.slice(2)); // срезает и возвращает значения начиная со второго
console.log(arr2.slice(1, 3)); // срезает и возвращает значения
console.log(arr2.slice(-2)); // возвращает два элемента с конца

console.log(arr2.splice(1, 2, 'Avocado', 'Papaya')); // начиная с индекса 1 вырезаем 2 элемента и на их место вставляем новые


console.log(arr2.join (' - ')); //превращает в строку и вставляет разделитель
console.log(arr2.reverse()); // переворачивает порядок
console.log(arr2.concat(['avocado', 'papaya', 'banana'], 'mango')); // складывает или добавляет в массив



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!FOR IN

// перебираем свойства массива
let car = {
    model: 'mazda',
    year: 2006,
    turbocharging: true,
    specification: [],
    style: {
        color: 'blue'
    }
};

for (let key in car) {
    console.log(' Ключ:' + key + ' значение: ' + car[key]);
}

// кол-во значение в объекте
console.log(Object.keys(car).length);


// Перебрать кол-во элементов массива
let arr3 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // в консоли будет  1,2.3,4,5
}


let arr4 = [1, 2, 3, 4, 5];
arr.forEach (function (item, i, array) {
    console.log(item, i, array); // выведутся значения, рядом индекс и массив
})



let arr5 = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item); // выводит значения. А for in - индексы
}

// Удалить элементы из массива
delete arr5[3]; // удалить 3 элемент
delete arr5['arr: ', arr[3]];  // при выводе - undefined

// удаление элементов из объекта
let obj = {
    a: 33,
    b: true,
    c: 'js'
};

delete obj.b;



// !!!!!!!!!!!!!!!!!! ПСЕВДОМАССИВЫ
function test() {
    console.log(arguments());
}

test(1, 2, 3, 4);