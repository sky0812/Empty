// создаю переменную num
let num = 266219;

/* 
.toString - перевод числового типа в строку
.split - разделяю отдельные символы в строке в массив
*/
let numSplit = num.toString().split('');

// перевожу значения массива в числовые
let numArr = numSplit.map(Number);

// перемножаю числовые значения в массиве
let multi = numArr.reduce(function(times, current) {
    'use strict';
    console.log('Результат перемножения значений:');
    return times * current;
});

// вывожу результат в консоль
console.log(multi);

// возвожу результат в степень
let extent = multi ** 3;

// вывожу возведенный результат в 3й степени
console.log('Число ', multi, 'в третье степени = ', extent);

// перевожу полученный результат в строчное значение и вывожу первые два символа 
let extentStr = extent.toString();

console.log('Первые две цифры числа ',extent ,
 ' -\n', extentStr.substring(0, 2));

