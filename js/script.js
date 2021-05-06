'use strict';

// область видимости
let y = 5;

function one(x) {
    console.log(x + y);
}

function two() {
    let y = 10;
    one(3);
}
two();


// замыкание
function funcMath(a) {
    return function (b) {
        console.log(a * b);
    };
}

const mathPow = funcMath(10);
mathPow(5);
console.dir(mathPow);