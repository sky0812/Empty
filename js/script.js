'use strict';

// Восстановить порядок книг.
const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
book[0].before(book[1]); 
books[0].append(book[2]); 
book[3].before(book[4]); 

// Заменить картинку заднего фона на другую из папки image
const bodyImg = document.querySelector('body');
bodyImg.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
const bookTitleCont = book[4];
const bookTitle = book[4].querySelector('h2>a');
bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
const advert = document.querySelector('.adv');
advert.remove();

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const secondBook = book[0].querySelectorAll('ul li');
secondBook[3].after(secondBook[6]);
secondBook[6].after(secondBook[8]);
secondBook[9].after(secondBook[2]);

const fifthBook = book[5].querySelectorAll('ul li');
fifthBook[3].before(fifthBook[9]);
fifthBook[7].before(fifthBook[6]);
fifthBook[4].after(fifthBook[2]);
fifthBook[7].after(fifthBook[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const sixthBook = book[2].querySelectorAll('ul li');
const newElem = document.createElement('li');
const sixthBookList = book[2].querySelector('ul');
sixthBookList.append(newElem);
newElem.textContent = 'Глава 8: За пределами ES6';
sixthBook[8].after(newElem);
