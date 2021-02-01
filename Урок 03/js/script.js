// присвоим значение месячного дохода
let money = 60000;

// присвоим значение для дополнительного дохода
let income = 'Freelance';

// массив с доп расходами
let addExpenses = 'Интернет, Такси, Коммуналка';

// булевое значение для deposit
let deposit = true;

// сумма для накопления
let mission = 100000;

// период
let period = 3;

// вывод в консоль типов данных
let dataType = '\t типы данных';
let string = dataType.toUpperCase() + '\n' + 'money: тип ' + typeof money + '\n' +
 'income: тип ' + typeof income + '\n' +
 'deposit: тип ' +  typeof deposit;

console.log(string);

 // переменная разделителя в консоли
 let splitter = '--------------------------------' + '\n';

// вывод длины строки addExpenses
console.log(splitter + 'длина строки addExpenses: ' + addExpenses.length);

// Вывести в консоль “Период равен (period) месяцев”
console.log(splitter + 'Период равен ' + period + ' месяцам');

// Вывести в консоль “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log(splitter + 'Цель заработать ' + mission + ' рублей');

/* Привести строку addExpenses к нижнему регистру 
и разбить строку на массив, вывести массив в консоль
*/
let addExpensesLower = addExpenses.toLowerCase();
console.log(splitter, 
    'Массив addExpenses приведен к нижнему регистру и разбит на массив: \n',
     addExpensesLower.split(', '));

// Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = money / 30;

// Вывести в консоль budgetDay
console.log(splitter, 'Дневной бюджет = ', budgetDay);