"use strict";

// получение значение месячного дохода
let money = +prompt('Ваш месячный доход?');

// получения значений доп расходов
const addExpenses = prompt(`Перечислите 
возможные расходы за рассчитываемый период через запятую`);

// булевое значение для deposit
let deposit = confirm('Есть ли у вас депозит в банке?');



// период
let period = 5;
console.log('Период равен ', period ,' месяцев');

// сумма для накопления
let mission = 100000;
console.log('Цель заработать ', mission, ' рублей');

// Получаю значения статей расходов и трат
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');





// lesson04

// 1.
function getExpensesMonth() {
    return amount1 + amount2;
}
console.log('Сумма всех обязательных расходов за месяц ', + getExpensesMonth());

// 2.
function getAccumulatedMonth() {
    return money - getExpensesMonth();
}
console.log('Накопления за месяц ', + getAccumulatedMonth());

// 3.
let accumulatedMonth = getAccumulatedMonth();
console.log('Результат вызова функции getAccumulatedMonth ' + accumulatedMonth);

// 4.
function getTargetMonth() {
    return mission / accumulatedMonth;
}
console.log('Новая цель будет достигнута за ', Math.ceil(getTargetMonth()), 'месяцев(-а)');

// 5.
// удалил значение budgetMonth

// 6.
let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день = ', Math.floor(budgetDay));

// 7. 

// функция typeof
function showTypeOf(data) {
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);

// Вывод возможных расходов в виде массива
let myArr = addExpenses.split(',');
console.log(myArr);

// вызов функции getStatusIncome
function getStatusIncome() {
    if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}
}
getStatusIncome();