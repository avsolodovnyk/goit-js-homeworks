'use strict';

// Task #2

const credits = 23580;
const pricePerDroid = 3000;
const quantity = Number(prompt('Какое количство дройдов вы хотите купить?'));
const totalPrice = Math.abs(quantity) * pricePerDroid;
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (quantity === null) {
  console.log('Вы оменили покупку');
} else if (quantity === '' || quantity !== quantity) {
  console.log('Пожалуйста введите кол-во');
} else {
  console.log(
    `Вы купили ${Math.abs(quantity)} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
