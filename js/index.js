"use strict";

// функция проверки на правильное значение
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function () {
        do {
        money = prompt('Ваш месячный доход?', 100000);
        }
        while (!isNumber(money));

    };
start();


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposut: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {

        if (confirm('Есть ли у Вас дополнительный источник заработка?')) {
            let itemIncome;
            do {
                itemIncome = prompt('Какой у Вас есть дополнительный заработок?', 'Таксую');
            }
            while (isNumber(itemIncome));
            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
            }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }
        // объявление переменных
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'kino');
            appData.addExpenses = addExpenses.toLowerCase().split (',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let i;
        let sum = 0;   
        let newObj = new Object ();
        for (i = 0; i <2; i++) { 
            let expName;
            do {
                expName = prompt('Введите обязательную статью расходов?');
            }
            while (isNumber(expName));       
            do {
                sum = +prompt('Во сколько Вам это обойдется?', 5000);
            }
            while (!isNumber(sum));
            newObj[expName] = sum;
        appData.expenses = newObj;
    }
    },
    getExpensesMonth: function () {
        for (const key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
          }
    },
    getBudget: function () {

        appData.budgetMonth = appData.budget - appData.expensesMonth;

        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        let missionFunc = Math.ceil(appData.mission / appData.budgetMonth);
        // проверка getTargetMonth на отрицательное значение
        if (appData.budgetMonth < 0) {
            appData.period = 'Цель не будет достигнута';
        } else {
            appData.period = Math.ceil(appData.mission / appData.budgetMonth);
        }
    },
    // getStatusIncome: function () {
    //     if (appData.budgetDay >= 1200) {
    //         appData.income = 'У вас высокий уровень дохода';
    //     } else if (appData.budgetDay >= 600) {
    //         appData.income = 'У вас средний уровень дохода';
    //     } else if (appData.budgetDay >= 0) {
    //         appData.income = 'К сожалению у вас уровень дохода ниже среднего';
    //     } else if (appData.budgetDay < 0) {
    //         appData.income = 'Что то пошло не так';
    //     }
    // }
    getInfoDeposit: function() {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            }
            while (!isNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while (!isNumber(appData.moneyDeposit));            
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.calcSavedMoney();
appData.getInfoDeposit();

// appData.getStatusIncome();
console.log(appData);
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Цель будет достигнута за (месяцев):', appData.period);
// console.log('Уровень дохода', appData.income);



function newNewHi() {
    console.log('Наша программа включает в себя данные: ');
    for (let key in appData) {
        console.log(key, ' : ', appData[key]);
    }
};
newNewHi();

//Вывод возможных расходов в строку
let expChanger = appData.addExpenses.map(x=>x[0].toUpperCase()+x.slice(1)).join(', ');
console.log('Вывод возможных расходов в строку', expChanger);