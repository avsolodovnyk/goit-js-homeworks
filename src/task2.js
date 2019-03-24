'use strict';

// Task #2

const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt('Какое количство дройдов вы хотите купить?');
const totalPrice = quantity * pricePerDroid;
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (quantity === null) {
  console.log('Вы оменили покупку');
} else if (quantity === '') {
  console.log('Пожалуйста введите кол-во');
} else if(quantity.){
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
