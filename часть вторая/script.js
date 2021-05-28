`use strict`;

class First {
    constructor(text) {
        this.text = text;
    }
    hello() {
        console.log(this.text);
    }
};
const sayHi1 = new First('Привет я метод родителя!');


class Second extends First { 
    constructor(text) {
        super(text);
    }    
    sayHi() {
        sayHi1.hello();
        console.log('А я наследуемый метод!'); 
    }
};
const sayHiNew = new Second();
sayHiNew.sayHi();







