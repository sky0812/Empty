// получение значение месячного дохода
let money = +prompt('Ваш месячный доход?');
console.log(typeof money);

// получения значений доп расходов
let addExpenses = prompt(`Перечислите 
возможные расходы за рассчитываемый период через запятую`);
console.log(typeof addExpenses);

// булевое значение для deposit
let deposit = confirm('Есть ли у вас депозит в банке?');
if (Boolean(deposit)) {
    console.log(typeof deposit);
} else {
    deposit = confirm('Есть ли у вас депозит в банке?');
}



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

// console.log(expenses1, expenses2);
// let myArr = [expenses1, expenses2];
// console.log(myArr);

// получаю бюджета на месяц
let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц: ', budgetMonth);

// за сколько месяцев будет достигнута цель
let goal = mission / budgetMonth;
console.log('Цель будет достигнута за ', Math.ceil(goal), 'месяцев(-а)');

// Получаю значение budgetDay и дневной бюджет
let budgetDay = budgetMonth / 30;

// Вывести в консоль budgetDay
console.log('Бюджет на день = ', Math.floor(budgetDay));

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}





/*
    код со второго урока
*/

// // присвоим значение для дополнительного дохода
// let income = 'Freelance';

// // вывод в консоль типов данных
// let dataType = '\t типы данных';
// let string = dataType.toUpperCase() + '\n' + 'money: тип ' + typeof money + '\n' +
//  'income: тип ' + typeof income + '\n' +
//  'deposit: тип ' +  typeof deposit;

// console.log(string);

//  // переменная разделителя в консоли
//  let splitter = '--------------------------------' + '\n';

// // вывод длины строки addExpenses
// console.log(splitter + 'длина строки addExpenses: ' + addExpenses.length);

// // Вывести в консоль “Период равен (period) месяцев”
// console.log(splitter + 'Период равен ' + period + ' месяцам');

// // Вывести в консоль “Цель заработать (mission) рублей/долларов/гривен/юани”
// console.log(splitter + 'Цель заработать ' + mission + ' рублей');

// /* Привести строку addExpenses к нижнему регистру 
// и разбить строку на массив, вывести массив в консоль
// */
// let addExpensesLower = addExpenses.toLowerCase();
// console.log(splitter, 
//     'Массив addExpenses приведен к нижнему регистру и разбит на массив: \n',
//      addExpensesLower.split(', '));