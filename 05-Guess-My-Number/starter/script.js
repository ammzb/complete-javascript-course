'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber && score > 0) {
    document.querySelector('.message').textContent = '🏆 You Win!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📈 Too high!';
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('message').textContent = '😒You Lost the Game!';
      document.querySelector('.score').textContent = score;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📉 Too low!';
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.message').textContent = '😒You Lost the Game!';
      document.querySelector('.score').textContent = score;
    }
  }
});
