

function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNumber);
    let userNumber = Number(prompt(`Попробуйте отгадать число от 1 до 100`));
    while (randomNumber !== userNumber) {
       if (userNumber > randomNumber) {
        userNumber = Number(prompt(`Ваше число ${userNumber} больше`));
        } 
         else if (userNumber < randomNumber) {
        userNumber = Number(prompt(`Ваше число ${userNumber} меньше`));
        }
    }
    alert(`Вы выиграли! Задуманное число ${randomNumber}`);
}