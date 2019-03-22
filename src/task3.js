'use strict';

// Task #3

const country = 'Индия';
// const country = prompt(
//   'Введите регион доставки - Китай,Южная Америка, Австралия, Индия, Ямайка',
// );

let costOfDelivery;
switch (country.toLowerCase()) {
  case 'Китай'.toLowerCase():
    costOfDelivery = 100;
    alert(`Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`);
    break;
  case 'Южная Америка'.toLowerCase():
    costOfDelivery = 250;
    alert(
      `Доставка в ${country.toUpperCase()}. будет стоить ${costOfDelivery}`,
    );
    break;
  case 'Австралия':
    costOfDelivery = 170;
    alert(`Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`);
    break;
  case 'Индия'.toLowerCase():
    costOfDelivery = 80;
    alert(`Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`);
    break;
  case 'Ямайка'.toLowerCase():
    costOfDelivery = 120;
    alert(`Доставка в ${country.toUpperCase()} будет стоить ${costOfDelivery}`);
    break;
  default:
    console.log('В вашей стране доставка не доступна');
}
