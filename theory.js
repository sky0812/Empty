'use strict';

const inputText = document.getElementById('myText'),
     myBtn = document.getElementById('myBtn'),
     text = document.getElementById('text');

     const showText = function() {
         text.textContent = localStorage.mytext; // выводит из local storage
     }
     myBtn.addEventListener('click', function() {
        localStorage.mytext = inputText.value; // записывает в локал строрейдж
        showText();
     });


     const showText = function() {
        text.textContent = sessionStorage.mytext; // выводит из session storage
    }
    myBtn.addEventListener('click', function() {
        sessionStorage,mytext = inputText.value; // записывает сохраняет только на время сессии
        showText();
     });




     const showText = function() {
        text.textContent = localStorage.getItem('memory'); // выводит из local storage
    }
    myBtn.addEventListener('click', function() {
       localStorage.setItem('memory', inputText.value); // записывает в локал строрейдж
       showText();
    });

     


   localStorage.removeItem('myText');






   // COOKIES
   document.cookie = 'имя=значение';
   document.cookie = 'имя2=значение2';

    document.cookie = 'hope=live; expires=Tue, 7 May 2024 00:00:00 GMT';


    function setCookie(key, value, year, month, day, path, domain, secure) {
        let cookieStr = encodeURI(key) + '=' + encodeURI(value); // encodeURI переводит в utf-8
        if(year) {
            const expires = new Date (year, month-1, day);
            cookieStr += '; expires=' + expires.toGMTString();
        }

        cookieStr += path ? '; path=' + encodeURI(path) : '';
        cookieStr += domain ? '; domain=' + encodeURI(domain) : '';
        cookieStr += secure ? '; secure' : '';

        document.cookie = cookieStr;

    }

    setCookie('Привет', 'мир');  // запишется куки с key= привет и значением Мир

    setCookie('Привет', 'мир', 2020, 1, 1); // запишется с датой

    // русские символы нужно перевести в utf-8
    console.log(decodeURI(document.cookie));











    // toDo list

    