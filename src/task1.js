'use strict';

// Task #1

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
const inputedPass = prompt('Пожалуйста введите пароль:');
console.log(inputedPass);
// Solution #1 =============================================================================

// if (inputedPass !== ADMIN_PASSWORD) {
//   message = 'Доступ запрещен, неверный пароль!';
// }
// if (inputedPass === null) {
//   message = 'Отменено пользователем!';
// }
// if (inputedPass === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// }
// if (inputedPass == '') {
//   message = 'Пожалуйста введите пароль';
// }
// console.log(message);

// Solution #2 =============================================================================

// if (inputedPass === null) {
//   message = 'Отменено пользователем!';
// } else if (inputedPass == '') {
//   message = 'Пожалуйста введите пароль';
// } else if (inputedPass !== ADMIN_PASSWORD) {
//   message = 'Доступ запрещен, неверный пароль!';
// } else if (inputedPass === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// }
// console.log(message);

// Solution #3 =============================================================================

switch (inputedPass) {
  case '':
    message = 'Пожалуйста введите пароль';
    break;
  case null:
    message = 'Отменено пользователем!';
    break;
  case ADMIN_PASSWORD:
    message = 'Добро пожаловать!';
    break;
  default:
    message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);
