'use strict';
let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите число');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else if (input !== null) {
    numbers.push(input);
  }
} while (input !== null);
if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total = Number(total) + Number(numbers[i]);
  }
  console.log(total);
} else {
  alert('Массив пустой');
}
