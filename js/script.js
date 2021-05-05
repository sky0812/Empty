"use strict";

// функция проверки на правильное значение
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// объявление переменных
let money,
    addExpenses = prompt(`Перечислите 
    возможные расходы за рассчитываемый период через запятую`),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    period = 5,
    mission = 100000;


// lesson05
let start = function () {
    do {
    money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));

};
start();

let expenses = [];
let i;

function getExpensesMonth() {
    let sum = 0;

    for (i = 0; i <2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            sum += +prompt('Во сколько Вам это обойдется?');
        }
        while (!isNumber(sum));
    }

    console.log('Обязательные статьи расходов: ',expenses);
    return sum;
}

let expensesAmount = getExpensesMonth();

console.log('Сумма всех обязательных расходов за месяц ', +expensesAmount);

function getAccumulatedMonth() {
    return money - expensesAmount;
}
console.log('Накопления за месяц ', + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();
console.log('Результат вызова функции getAccumulatedMonth ' + accumulatedMonth);

function getTargetMonth() {
    return mission / accumulatedMonth;
}

// проверка getTargetMonth на отрицательное значение
let minusCheck = getTargetMonth();

function checkGetTargetMonth() {
    if (minusCheck < 0) {
        console.log('Цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута за ', Math.ceil(getTargetMonth()), 'месяцев(-а)');
    }
}
checkGetTargetMonth();

let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день = ', Math.floor(budgetDay));

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