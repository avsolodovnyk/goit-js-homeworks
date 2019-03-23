'use strict';

// Task #1

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
const inputedPass = prompt('Пожалуйста введите пароль:');
if (inputedPass === null) {
  message = 'Отменено пользователем!';
} else if (inputedPass !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else if (inputedPass === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
}
console.log(message);
