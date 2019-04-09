'use strict';
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  } else if (!Number.isNaN(+input)) {
    numbers.push(+input);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}
if (!numbers.length) {
  alert('Массив пустой');
} else {
  for (let variable of numbers) {
    total = total + variable;
  }
  console.log(`сумма введенных чисел равна  ${total}`);
}
