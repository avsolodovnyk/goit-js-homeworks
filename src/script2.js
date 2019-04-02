'use strict';
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
while (attemptsLeft > 0) {
  const inputedPass = prompt('Пожалуйста введите пароль');
  if (inputedPass === null) {
    alert('Ввод пароля отменен ');
    attemptsLeft = 0;
  } else if (passwords.includes(inputedPass)) {
    alert('Добро пожаловать!');
    break;
  } else {
    attemptsLeft -= 1;
    if (attemptsLeft === 0) {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    } else {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток(и)'`);
    }
  }
}
