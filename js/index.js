"use strict";


// Кнопку "Рассчитать" через id

let start = document.getElementById('start');

// let calcBtn = document.getElementById('start');

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let incomeItem = document.querySelectorAll('.income-items');
let PeriodAmount = document.querySelector('.period-amount');

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];

// Чекбокс по id через querySelector
let checkDeposit = document.querySelector('#deposit-check');

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let possibleIncome = document.querySelectorAll('.additional_income-item');

// Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">

// const budgetDayValue = document.getElementsByClassName('result-total')[1];
const expMonthValue = document.getElementsByClassName('result-total')[2];
const addIncomeValue = document.getElementsByClassName('result-total')[3];
const addExpValue = document.getElementsByClassName('result-total')[4];
const incomePeriodValue = document.getElementsByClassName('result-total')[5];
const targetMonthValue = document.getElementsByClassName('result-total')[6];
// Оставшиеся поля через querySelector каждый в отдельную переменную:
let budgetMoth = document.querySelector('.budget_day-value');
// поля ввода (input) с левой стороны и не забудьте про range
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let trueExpTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
let addExpItem = document.querySelector('.additional_expenses-item');

// функция проверки на правильное значение
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposut: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function () {

        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.getTargetMonth();
        appData.calcPeriod();
        appData.getInfoDeposit();

        appData.showResult();

    },
    showResult: function() {
        budgetMonthValue.value = +appData.budgetMonth;
        budgetDayValue.value = +appData.budgetDay;
        expensesMonthValue.value = +appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', function(event){
            incomePeriodValue.value = appData.calcPeriod();
        });
        
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses!== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getIncome: function() {
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome!== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });


        // if (confirm('Есть ли у Вас дополнительный источник заработка?')) {
        //     let itemIncome;
        //     do {
        //         itemIncome = prompt('Какой у Вас есть дополнительный заработок?', 'Таксую');
        //     }
        //     while (isNumber(itemIncome));
        //     let cashIncome;
        //     do {
        //         cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
        //     }
        //     while (!isNumber(cashIncome));
        //     appData.income[itemIncome] = cashIncome;
        // }

        // for(let key in appData.income){
        //     appData.incomeMonth += +appData.income[key];
        // }
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    // asking: function () {       
    //     // объявление переменных
    //     let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'kino');
    //         appData.addExpenses = addExpenses.toLowerCase().split (',');
    //         appData.deposit = confirm('Есть ли у вас депозит в банке?');

    //     let i;
    //     let sum = 0;   
    // },
    getExpensesMonth: function () {
        for (const key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
          }
    },
    getBudget: function () {

        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;

        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        // let missionFunc = Math.ceil(targetAmount.value / appData.budgetMonth);
        return Math.ceil(targetAmount.value / appData.budgetMonth);
        // проверка getTargetMonth на отрицательное значение
        // if (appData.budgetMonth < 0) {
        //     appData.period = 'Цель не будет достигнута';
        // } else {
        //     appData.period = Math.ceil(targetAmount.value / appData.budgetMonth);
        // }
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
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    }
};
        
// start.setAttribute('disabled', 'true');
// salaryAmount.addEventListener('input', function(event){
//     if (salaryAmount.value !== '') {
//         start.setAttribute('disabled', 'false');
//     } else {
//         start.setAttribute('disabled', 'true');
//     }
// });

start.setAttribute('disabled', 'true');
salaryAmount.addEventListener('input', function(event){
    if (salaryAmount.value !== '') {
        start.removeAttribute('disabled');
    } else {
        start.setAttribute('disabled', 'true');
    }
});


start.addEventListener('click', appData.start);

periodSelect.addEventListener('input', function(event){
    PeriodAmount.textContent = periodSelect.value;
});

// incomePeriodValue.value = appData.calcPeriod();
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

// let start2 = document.querySelector('#start');
// start2.setAttribute('disabled', 'true');
// salaryAmount.addEventListener('input', function(event){
//     if (salaryAmount.value !== '') {
//         start2.setAttribute('disabled', 'false');
//     } else {
//         start2.setAttribute('disabled', 'true');
//     }
// });

// appData.getStatusIncome();
// console.log(appData);
// console.log('Расходы за месяц: ', appData.expensesMonth);
// console.log('Цель будет достигнута за (месяцев):', appData.period);
// console.log('Уровень дохода', appData.income);



// function newNewHi() {
//     // console.log('Наша программа включает в себя данные: ');
//     for (let key in appData) {
//         // console.log(key, ' : ', appData[key]);
//     }
// }
// newNewHi();

//Вывод возможных расходов в строку
let expChanger = appData.addExpenses.map(x=>x[0].toUpperCase()+x.slice(1)).join(', ');
// console.log('Вывод возможных расходов в строку', expChanger);

