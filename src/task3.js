'use strict';

// Task #3

const country = prompt(
  'Введите регион доставки - Китай,Южная Америка, Австралия, Индия, Ямайка',
);
let costOfDelivery;
switch (country.toLowerCase()) {
  case 'китай':
    costOfDelivery = 100;
    console.log(
      `Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`,
    );
    break;
  case 'южная америка':
    costOfDelivery = 250;
    console.log(
      `Доставка в ${country.toUpperCase()}. будет стоить ${costOfDelivery}`,
    );
    break;
  case 'австралия':
    costOfDelivery = 170;
    console.log(
      `Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`,
    );
    break;
  case 'индия':
    costOfDelivery = 80;
    console.log(
      `Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`,
    );
    break;
  case 'ямайка':
    costOfDelivery = 120;
    console.log(
      `Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`,
    );
    break;
  default:
    console.log('В вашей стране доставка не доступна');
}
