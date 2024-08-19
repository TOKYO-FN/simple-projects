'use strict';

// TODO 📉 Too low!
// TODO 📈 Too high!
// TODO 🎉 Correct number!
// TODO score by2l b wa7d f kol mara
// TODO awl ma bgyb el rakam s7 byb2a da el highscore
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) document.querySelector('.message').textContent = '⛔ No Number!';
  // when the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent =
      document.querySelector('.guess').value;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score <= 1) {
      document.querySelector('.message').textContent = '💥 Game Over!';
      document.getElementsByTagName('body')[0].style.backgroundColor =
        '#a94545';
      score = 0;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
