'use strict';

// Task #2

const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt('Какое количство дройдов вы хотите купить?');
const totalPrice = quantity * pricePerDroid;
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
