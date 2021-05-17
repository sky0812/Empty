// 'use strict';


function one() {
    console.log('one');
    two();
}

function two() {
    console.log('two');
    three();
}

function three() {
    console.log('three');
}

one();

a = 10;

function test() {
    console.log('Hello', this.a);
}

window.test();



// 1. Привязка по умолчанияю foo();
// 2. Не явная привязка obj.foo();
// 3. Явная привязка apply, call, bind
// 4. Привязка new

let Obj = {
    x: 10,
    y: 15
}

function hardBind (hard) {
    newTest.call(hard);
}

hardBind(obj);
setTimeout(hardBind, 500, obj);


newTest.apply(obj); // принимает массив аргументов
newTest.call(obj);


let Obj = {
    x: 10,
    y: 15,
    test: newTest
}

let obj2 = {
    x: 20,
    y: 25,
    testObj: obj
}

function newTest() {
    console.log('this', this.x);
}

Obj.test();
obj2.testObj.test();




function foo (callback) {
    callback();
}

setTimeout( obj.test, 100);




let Obj = {
    x: 10,
    y: 15
}

function newTest () {
    console.log('this', this);
}


let foo = newTest.bind(obj);

foo(); // в консоли получим объект obj