'use strict';

const collections = document.querySelectorAll('.collection'),
    elems = document.querySelectorAll('.elem');

    console.log(collections);
    console.log(elems);

    collections[1].append(elems[3]); // вставляет в конец
    collections[1].prepend(elems[5]); // вставляет в начало

    collections[0].before(collections[1]); // вставляет до
    elems[4].after(elems[0]); // вставляет после

    elems[2].replaceWith(elems[3]); // замена второго элемента на 3
    elems[2].replaceWith('привет'); // замена второго элемента на 3


    const elemClone = elems[3].cloneNode(true); // клонирует полностью с html. Если false - то только оболочку

    collections[1].append(elemClone);

    elemClone.classList.add('newElem'); // добавляет класс

    elemClone.textContent = 'new elem'; // меняет текст


    elems[2].textContent = 'привет'; // меняет текст 

    elems[2].innerHtml = '<span>привет</span>'; // меняет html

    const newElem2 = document.createElement('section'); // создает новый элемент

    newElem2.textContent = 'новый элемент';

    newElem2.classList.add('new_elem'); // добавили ему класс

    collections[1].append(newElem2); // добавляем в верстку




    const secondHead = document.getElementById('second-head');

    secondHead.insertAdjacentText('beforebegin', 'вставка текст до заголовка');
    secondHead.insertAdjacentText('afterend', 'вставка текст после заголовка');
    secondHead.insertAdjacentText('afterbegin', 'вставка текст внутри до заголовка');
    secondHead.insertAdjacentText('beforeend', 'вставка текст внутри после заголовка');




    secondHead.insertAdjacentElement('beforebegin', elems[1]);
    secondHead.insertAdjacentElement('afterend', elems[2]);
    secondHead.insertAdjacentElement('afterbegin', elems[3]);
    secondHead.insertAdjacentElement('beforeend', elems[4]);    


    secondHead.insertAdjacentHTML('beforebegin', '<h3>вставка текст до заголовка</h3>');
    secondHead.insertAdjacentHTML('afterend', '<h3>вставка текст после заголовка</h3>');
    secondHead.insertAdjacentHTML('afterbegin', '<h3>вставка текст внутри до заголовка</h3>');
    secondHead.insertAdjacentHTML('beforeend', '<h3>вставка текст внутри после заголовка</h3>');



     