'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('body').style.backgroundColor = '#222';

let score = 15;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    if (highScore <= score && score > 1) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📉 Too high!' : '📈 Too low!');
      --score;

      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');

      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
