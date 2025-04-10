function guessNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  // console.log(randomNumber);
  let userNumber = prompt(`Попробуйте отгадать число от 1 до 100`);
  let attempt = 0;
  while (true) {
    attempt ++;
    if (isNaN(userNumber) || !Boolean(userNumber)) {
      alert(`Вы ввели не правильное значение. Попробуйте снова`);
      break;
    } else if (userNumber > randomNumber) {
      userNumber = prompt(`Ваше число ${userNumber} - больше`);
    } else if (userNumber < randomNumber) {
      userNumber = prompt(`Ваше число ${userNumber} - меньше`);
    } else {
      alert(`Вы угадали задуманное число ${randomNumber} за ${attempt} попыток`);
      break;
    }
  }
}
