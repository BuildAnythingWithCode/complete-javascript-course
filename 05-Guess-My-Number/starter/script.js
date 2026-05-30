'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let check = document.querySelector('.check');
let again = document.querySelector('.again');
let body = document.querySelector('body');
let score = 20;
let scoreDisplay = document.querySelector('.score');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let inputField = document.querySelector('input');
let highScoreDisplay = document.querySelector('.highscore');
let highScore = 0;

console.log(`Secret number is ${secretNum}.`);

const win = function () {
  body.style.backgroundColor = 'green';
  check.style.display = 'none';
  number.textContent = secretNum;
  number.style.width = '30rem';
};

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess >= 21 || guess <= 0) {
    message.textContent = 'Gotta be between 1 and 20.';
  } else {
    if (score > 1) {
      if (guess > secretNum) {
        message.textContent = 'Too high!';
        score--;
        scoreDisplay.textContent = score;
      } else if (guess < secretNum) {
        message.textContent = 'Too low!';
        score--;
        scoreDisplay.textContent = score;
      } else if (guess === secretNum) {
        if (score > highScore) {
          win();
          highScoreDisplay.textContent = score;
          highScore = score;
          message.textContent = 'You win - New High Score!';
        } else {
          win();
          message.textContent = 'You win!';
        }
      }
    } else {
      body.style.backgroundColor = 'red';
      message.textContent =
        'You lost?! How is that even possible? Wow, you suck!';
      scoreDisplay.textContent = 0;
      check.style.display = 'none';
    }
  }
});

again.addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  score = 20;
  scoreDisplay.textContent = score;
  number.style.width = '15rem';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  check.style.display = '';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(`Secret number is ${secretNum}.`);
  inputField.value = '';
});
