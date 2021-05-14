'use strict';

let squre = docament.querySelector('.square');
let count = 0;

square.onclick = function () {

    if (count === 3) {
        return;
    }

    count++;

    console.log('вы кликнули');
};

square.onclick = function () {
    console.log('это вторая функция');
};



square.addEventListener ('click', function () {
    console.log('Произошел клик');
})
square.addEventListener ('click', function () {
    console.log('Произошел клик 2');
})
square.addEventListener ('click', function () {
    console.log('Произошел клик 3');
})

let clicked = function () {
    count++;
    if( count === 3) square.removeEventListener ('click', clicked);
    console.log('произошел клик 4');
};

square.addEventListener ('click', clicked);



let eventFunc = function (event) {
    console.log(event.type);
};

square.addEventListener ('click', eventFunc);
square.addEventListener ('mousedown', eventFunc);
square.addEventListener ('mouseup', eventFunc);
square.addEventListener ('mousemove', eventFunc);
square.addEventListener ('mouseenter', eventFunc); // 
square.addEventListener ('mouseleave', eventFunc); // 
square.addEventListener ('mouseover', eventFunc); // работает на child
square.addEventListener ('mouseout', eventFunc); // работает на child


document.querySelector('#text').addEventListener('input', eventFunc); // отрабатывает на ввод с клавиатуры
document.querySelector('#text').addEventListener('change', eventFunc); // отрабатывает когда происходит клик вне
document.querySelector('#text').addEventListener('keyup', eventFunc); // нажатие клавы
document.querySelector('#text').addEventListener('keydown', eventFunc); // нажатие клавы
document.querySelector('#text').addEventListener('blur', eventFunc); // кликаем вне input
document.querySelector('#text').addEventListener('focus', eventFunc); // кликаем в input


//  загрузка страницы
document.addEventListener('DomContentLoaded', function () {
    console.log('Страница загрузилась');
});


// отменить стандартное поведение браузера

document.querySelector('#link').addEventListener('click', function(event) {
    event.preventDefault();
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();// не появляется контекстное меню
});


// захват события

document.addEventListener('DomContentLoaded', function () {
    console.log('Страница загрузилась');
});

document.addEventListener('DomContentLoaded', function () {
    console.log('Страница загрузилась');
});