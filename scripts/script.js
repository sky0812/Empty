'use strict';

const todoControl = document.querySelector('.todo-control'),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'),
todoCompleted = document.querySelector('.todo-completed');

const todoData = [];

const render = function() {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
        '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' + 
            '<button class="todo-complete"></button>' + 
        '</div>';

        if(item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoComplete = li.querySelector('.todo-complete');        
        btnTodoComplete.addEventListener('click', function() {
            item.completed = !item.completed;
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function() {
            li.remove();
        })
    })
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if(headerInput.value !== '') {
        const newTodo = {
            value: headerInput.value,
            completed: false
        }
        todoData.push(newTodo);

        render();
        headerInput.value = '';
    } else {
        alert('Введите задание');
    }
});


        
        const showText = function() {
            // const headerInputValue = headerInput.value;
            const myArr = [headerInput.value];
            // localStorage.mytext += encodeURI(headerInput.value); // выводит из local storage
            console.log(myArr);
        };
        showText();





// Что необходимо реализовать (первые 2 пункта по видео):

// 6) Сохранять данные о делах в localStorage (советую в виде массива)

// внимание чтобы сохранить массив в localStorage необходимо его конвертировать в json формат
// 7) Дела из localStorage подгружаться должны автоматически при загрузки странице

// внимание из localStorage мы всегда получаем json строку и её необходимо конвертировать обратно в формат javascript