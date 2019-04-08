'use strict';
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
while (attemptsLeft) {
  const inputedPass = prompt('Пожалуйста введите пароль');
  if (inputedPass === null) {
    alert('Ввод пароля отменен ');
    break;
  } else if (passwords.includes(inputedPass)) {
    alert('Добро пожаловать!');
    break;
  }
  attemptsLeft -= 1;
  if (!attemptsLeft) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  } else {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток(и)'`);
  }
}
