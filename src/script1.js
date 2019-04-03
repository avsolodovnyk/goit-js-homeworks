'use strict';
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt('Введите число');
  if (!Number.isNaN(Number(input))) {
    numbers.push(Number(input));
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}
if (numbers.length === 0) {
  alert('Массив пустой');
} else {
  for (let variable of numbers) {
    total = total + variable;
  }
  console.log('сумма введенных чисел=', total);
}
