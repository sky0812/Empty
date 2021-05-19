"use strict";

let start = document.getElementById('start');
let cancel = document.getElementById('cancel');

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

const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];

// Чекбокс по id через querySelector
let checkDeposit = document.querySelector('#deposit-check');

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let possibleIncome = document.querySelectorAll('.additional_income-item');

const expMonthValue = document.getElementsByClassName('result-total')[2];
const addIncomeValue = document.getElementsByClassName('result-total')[3];
const addExpValue = document.getElementsByClassName('result-total')[4];
const incomePeriodValue = document.getElementsByClassName('result-total')[5];
const targetMonthValue = document.getElementsByClassName('result-total')[6];


let budgetMoth = document.querySelector('.budget_day-value');

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


const AppData = function() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

};

AppData.prototype.start = function () {

    let allInput = document.querySelectorAll('.data input[type = text]');
    allInput.forEach(function(item) {
        item.setAttribute('disabled', 'true');
    });
    incomePlus.setAttribute('disabled', 'true');
    expensesPlus.setAttribute('disabled', 'true');
    start.style.display = 'none';
    cancel.style.display = 'block';

    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.getInfoDeposit();
    this.getStatusIncome();
    // this.getTargetMonth();
    // this.calcPeriod();

    this.showResult();
};


AppData.prototype.showResult = function () {
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('change', function(){
        incomePeriodValue.value = _this.calcPeriod();
    });
    
};
AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if(expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function () {
    const _this = this;
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses!== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.addIncomeBlock = function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if(incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function () {
    const _this = this;
    incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome!== '' && cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;
        }
    });
    for (let key in this.income) {
        this.incomeMonth += +this.income[key];
    }
};
AppData.prototype.getAddExpenses = function () {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if (item !== ''){
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function () {
    const _this = this;
    additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getExpensesMonth = function () {
    for (const key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
      }
};
AppData.prototype.getBudget = function () {

    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;

    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getStatusIncome = function () {
    if (this.budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (this.budgetDay < 0) {
        return ('Что-то пошло не так');
    }
};
AppData.prototype.getInfoDeposit = function () {
    if (this.deposit) {
        do {
            this.percentDeposit = prompt('Какой годовой процент?', 10);
        }
        while (!isNumber(this.percentDeposit));
        do {
            this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
        while (!isNumber(this.moneyDeposit));            
    }
};
AppData.prototype.calcPeriod = function () {
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.reset = function () {

    let inputTextData = document.querySelectorAll('.data input[type = text'),
    resultInputAll = document.querySelectorAll('.result input[type = text');

    inputTextData.forEach(function (elem) {
        elem.value = '';
        elem.removeAttribute('disabled');
        periodSelect.value = '0';
        PeriodAmount.innerHTML = periodSelect.value;
    });

    resultInputAll.forEach(function (elem) {
        elem.value = '';
    });

    for (let i = 1; i < incomeItems.length; i++) {
        incomeItems[i].parentNode.removeChild(incomeItems[i]);
        incomePlus.style.display = 'block';
    }

    for (let i = 1; i < expensesItems.length; i++) {
        expensesItems[i].parentNode.removeChild(expensesItems[i]);
        expensesPlus.style.display = 'block';
    }
    

    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

    cancel.style.display = 'none';
    start.style.display = 'block';
    incomePlus.removeAttribute('disabled');
    expensesPlus.removeAttribute('disabled');

};

AppData.prototype.eventListeners = function () {

    start.addEventListener('click', this.start.bind(this));
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    cancel.addEventListener('click', this.reset.bind(this));

    periodSelect.addEventListener('input', function(event){
        PeriodAmount.textContent = periodSelect.value;
    });


    start.setAttribute('disabled', 'true');
    salaryAmount.addEventListener('input', function(event){
        if (salaryAmount.value !== '') {
            start.removeAttribute('disabled');
        } else {
            start.setAttribute('disabled', 'true');
        }
    });
};







const appData = new AppData();
appData.eventListeners();


//Вывод возможных расходов в строку
// let expChanger = appData.addExpenses.map(x=>x[0].toUpperCase()+x.slice(1)).join(', ');


