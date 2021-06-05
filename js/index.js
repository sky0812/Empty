"use strict";

const start = document.getElementById(`start`);
const cancel = document.getElementById(`cancel`);

const budgetMonthValue = document.getElementsByClassName(`budget_month-value`)[0];
const budgetDayValue = document.getElementsByClassName(`budget_day-value`)[0];
const expensesMonthValue = document.getElementsByClassName(`expenses_month-value`)[0];
const additionalExpensesItem = document.querySelector(`.additional_expenses-item`);
const additionalExpensesValue = document.getElementsByClassName(`additional_expenses-value`)[0];
const additionalIncomeItem = document.querySelectorAll(`.additional_income-item`);
const additionalIncomeValue = document.getElementsByClassName(`additional_income-value`)[0];
const targetAmount = document.querySelector(`.target-amount`);
const periodSelect = document.querySelector(`.period-select`);
const incomeItem = document.querySelectorAll(`.income-items`);
const PeriodAmount = document.querySelector(`.period-amount`);

const incomePlus = document.getElementsByTagName(`button`)[0];
const expensesPlus = document.getElementsByTagName(`button`)[1];

// Чекбокс по id через querySelector
const depositCheck = document.querySelector(`#deposit-check`);
const depositPercent = document.querySelector(`.deposit-percent`);
const depositAmount = document.querySelector(`.deposit-amount`);
const depositBank = document.querySelector(`.deposit-bank`);

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
const possibleIncome = document.querySelectorAll(`.additional_income-item`);

const expMonthValue = document.getElementsByClassName(`result-total`)[2];
const addIncomeValue = document.getElementsByClassName(`result-total`)[3];
const addExpValue = document.getElementsByClassName(`result-total`)[4];
const incomePeriodValue = document.getElementsByClassName(`result-total`)[5];
const targetMonthValue = document.getElementsByClassName(`result-total`)[6];


const budgetMoth = document.querySelector(`.budget_day-value`);

const salaryAmount = document.querySelector(`.salary-amount`);
const incomeTitle = document.querySelector(`.income-title`);
const trueExpTitle = document.querySelector(`.expenses-title`);
let expensesItems = document.querySelectorAll(`.expenses-items`);
let incomeItems = document.querySelectorAll(`.income-items`);
const addExpItem = document.querySelector(`.additional_expenses-item`);

// функция проверки на правильное значение
const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
const disable = function(){
    if(salaryAmount.value.length >= 1) {
        start.removeAttribute('disabled');
    } else {
            start.setAttribute('disabled', 'true');
    }
};
salaryAmount.addEventListener('keyup', disable);


class AppData {
    constructor(income = {}, incomeMonth = 0, addIncome = [], expenses = {}, addExpenses = [], deposit = false, percentDeposit = 0, moneyDeposit = 0, budget = 0, budgetDay = 0, budgetMonth = 0, expensesMonth = 0) {
        this.income = income;
        this.incomeMonth = incomeMonth;
        this.addIncome = addIncome;
        this.expenses = expenses;
        this.addExpenses = addExpenses;
        this.deposit = deposit;
        this.percentDeposit = percentDeposit;
        this.moneyDeposit = moneyDeposit;
        this.budget = budget;
        this.budgetDay = budgetDay;
        this.budgetMonth = budgetMonth;
        this.expensesMonth = expensesMonth;
    }

    start() {
        const allInput = document.querySelectorAll(`.data input[type = text]`);
        allInput.forEach(function(item) {
            item.setAttribute(`disabled`, `true`);
        });
        incomePlus.setAttribute(`disabled`, `true`);
        expensesPlus.setAttribute(`disabled`, `true`);
        start.style.display = `none`;
        cancel.style.display = `block`;

        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getInfoDeposit();
        this.getBudget();
        this.getStatusIncome();
        // this.getTargetMonth();
        // this.calcPeriod();
        this.showResult();
    }

    showResult() {
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(`, `);
        additionalIncomeValue.value = this.addIncome.join(`, `);
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener(`change`, function(){
            incomePeriodValue.value = _this.calcPeriod();
        });
    
    }

    addExpensesBlock() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll(`.expenses-items`);

        if(expensesItems.length === 3) {
            expensesPlus.style.display = `none`;
        }
    }

    getExpenses() {
        const _this = this;
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector(`.expenses-title`).value;
            let cashExpenses = item.querySelector(`.expenses-amount`).value;
            if (itemExpenses!== `` && cashExpenses !== ``) {
                _this.expenses[itemExpenses] = cashExpenses;
            }
        });
    }

    addIncomeBlock() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll(`.income-items`);

        if(incomeItems.length === 3) {
            incomePlus.style.display = `none`;
        }
    }

    getIncome() {
        const _this = this;
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector(`.income-title`).value;
            let cashIncome = item.querySelector(`.income-amount`).value;
            if (itemIncome!== `` && cashIncome !== ``) {
                _this.income[itemIncome] = cashIncome;
            }
        });
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    }

    getAddExpenses() {
        const _this = this;
        let addExpenses = additionalExpensesItem.value.split(`,`);
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ``){
                _this.addExpenses.push(item);
            }
        });
    }

    getAddIncome() {
        const _this = this;
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if(itemValue !== ``){
                _this.addIncome.push(itemValue);
            }
        });
    }

    getExpensesMonth() {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    }

    getBudget() {
        const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }

    getTargetMonth() {
        return targetAmount.value / this.budgetMonth;
    }

    getStatusIncome() {
        if (this.budgetDay >= 800) {
            return (`Высокий уровень дохода`);
        } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
            return (`Средний уровень дохода`);
        } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
            return (`Низкий уровень дохода`);
        } else if (this.budgetDay < 0) {
            return (`Что-то пошло не так`);
        }
    }

    getInfoDeposit() {
        if (this.deposit) {
            do {
                this.percentDeposit = depositPercent.value;
            }
            while (!isNumber(this.percentDeposit));
            do {
                this.moneyDeposit = depositAmount.value;
            }
            while (!isNumber(this.moneyDeposit));            
        }
    }

    calcPeriod() {
        return this.budgetMonth * periodSelect.value;
    }

    reset() {
        let inputTextData = document.querySelectorAll(`.data input[type = text`),
        resultInputAll = document.querySelectorAll(`.result input[type = text`);

        inputTextData.forEach(function (elem) {
            elem.value = ``;
            elem.removeAttribute(`disabled`);
            periodSelect.value = `0`;
            PeriodAmount.innerHTML = periodSelect.value;
        });

        resultInputAll.forEach(function (elem) {
            elem.value = ``;
        });

        for (let i = 1; i < incomeItems.length; i++) {
            incomeItems[i].parentNode.removeChild(incomeItems[i]);
            incomePlus.style.display = `block`;
        }

        for (let i = 1; i < expensesItems.length; i++) {
            expensesItems[i].parentNode.removeChild(expensesItems[i]);
            expensesPlus.style.display = `block`;
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

        cancel.style.display = `none`;
        start.style.display = `block`;
        incomePlus.removeAttribute(`disabled`);
        expensesPlus.removeAttribute(`disabled`);

        start.setAttribute(`disabled`, `true`);
        salaryAmount.addEventListener(`input`, function(event){
            if (salaryAmount.value !== ``) {
                start.removeAttribute(`disabled`);
            } else {
                start.setAttribute(`disabled`, `true`);
            }
        });
    }

    changePercent() {
        const valueSelect = this.value;
        if (valueSelect === 'other') {
            depositPercent.value = '';
            depositPercent.style.display = 'inline-block';
        } else {
            depositPercent.style.display = 'none';
            depositPercent.value = valueSelect;
        }
    }

    correctPercent() {
        if (depositPercent.value <= 0 || depositPercent.value >= 101 || !isNumber(depositPercent.value)) {
            depositPercent.focus();
            alert('Введите корректное значение в поле проценты');
            start.setAttribute('disabled', 'true');
        } else {
            this.percentDeposit = depositPercent.value;
            disable();
        }
    }

    depositHandler() {
        if (depositCheck.checked) {
            depositBank.style.display = `inline-block`;
            depositAmount.style.display = `inline-block`;
            this.deposit = true;
            depositBank.addEventListener(`change`, this.changePercent);
        } else {
            depositBank.style.display = `none`;
            depositAmount.style.display = `none`;
            depositBank.value = ``;
            depositAmount.value = ``;
            this.deposit = false;
            depositBank.removeEventListener(`change`, this.changePercent);
        }
    }

    eventListeners() {
        start.addEventListener(`click`, this.start.bind(this));
        expensesPlus.addEventListener(`click`, this.addExpensesBlock);
        incomePlus.addEventListener(`click`, this.addIncomeBlock);
        cancel.addEventListener(`click`, this.reset.bind(this));

        periodSelect.addEventListener(`input`, function(event){
            PeriodAmount.textContent = periodSelect.value;
        });

        start.setAttribute(`disabled`, `true`);
        salaryAmount.addEventListener(`input`, function(event){
            if (salaryAmount.value !== ``) {
                start.removeAttribute(`disabled`);
            } else {
                start.setAttribute(`disabled`, `true`);
            }
        });

        depositCheck.addEventListener('change', this.depositHandler.bind(this));
        depositPercent.addEventListener('change', this.correctPercent.bind(this));
    }
}

class appData extends AppData {
    eventListeners() {
        super.eventListeners();
    }
};
const appDataNew = new appData();
appDataNew.eventListeners();