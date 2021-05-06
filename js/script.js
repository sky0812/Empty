'use strict';


function numberCheck() {
    
    // получаю рандомное значение от 1 до 100
    let randInt = Math.floor(Math.random() * 100) + 1;
    console.log('Случайное число: ', randInt);

        function myFunc() {
            // получаю число от пользователя
            let userNumber = prompt('Угадай число от 1 до 100');
            console.log('введенное пользователем число: ', userNumber);

        
            if (userNumber == randInt) {
                alert('Поздравляю, Вы угадали!!!');
                return;
            }
            
            if (userNumber === null) {
                alert('Игра окончена');
                return;
            }

            if (!parseFloat(userNumber)) {
                alert('Введи число!');
                return myFunc();
            } 
        
            if (userNumber < randInt) {
                alert('Загаданное число больше');
                return myFunc();
            }
        
            if (userNumber > randInt) {
                alert('Загаданное число меньше');
                return myFunc();
            }
            
        }
    myFunc(randInt);
}
numberCheck();