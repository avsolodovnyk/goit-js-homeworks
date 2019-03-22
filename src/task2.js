'use strict';

// Task #2

const credits = 23580;
const pricePerDroid = 3000;
const quantity = 3;
const totalPrice = quantity * pricePerDroid;
console.log(totalPrice);
if (totalPrice >= credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
