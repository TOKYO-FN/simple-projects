'use strict';

// TODO 📉 Too low!
// TODO 📈 Too high!
// TODO 🎉 Correct number!
// TODO score by2l b wa7d f kol mara
// TODO awl ma bgyb el rakam s7 byb2a da el highscore
// let sercretNumber = Math.round(Math.random() * 20) + 1;
// let checkButton = document.querySelector('.check');
// let againButton = document.querySelector('.again');
// let valueInBox = document.querySelector('.guess');
// let score = document.querySelector('.score');
// let highscore = document.querySelector('.highscore');
// let message = document.querySelector('.message');
// let bodyElement = document.getElementsByTagName('BODY')[0];

// let clickFunc = function () {
//   let value = Number(valueInBox.value);
//   if (!value) {
//     message.textContent = '⛔ No Number';
//   } else if (sercretNumber == value) {
//     console.log('🎉 Correct number!');
//     message.textContent = '🎉 Correct number!';
//     if (Number(highscore.textContent) < Number(score.textContent))
//       highscore.textContent = score.textContent;
//     bodyElement.style.backgroundColor = 'green';
//     return;
//   } else if (value > sercretNumber) {
//     message.textContent = '📉 Too high!';
//     console.log('📉 Too high!');
//   } else {
//     message.textContent = '📈 Too low!';
//     console.log('📈 Too low!');
//   }
//   score.textContent = Number(score.textContent) - 1;
// };
// let againFunc = function () {
//   sercretNumber = Math.floor(Math.random() * 20) + 1;
//   message.textContent = 'Start guessing...';
//   score.textContent = 20;
//   valueInBox.value = '';
//   bodyElement.style.backgroundColor = '#222';
//   console.log(sercretNumber);
// };

// console.log(sercretNumber);
// document.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') clickFunc();
// });

// document.addEventListener('keydown', function (event) {
//   if (event.key === 'CapsLock') againFunc();
// });
// checkButton.addEventListener('click', clickFunc);

// againButton.addEventListener('click', againFunc);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
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
  } else {
    if (score <= 1) {
      document.querySelector('.message').textContent = '💥 Game Over!';
      document.getElementsByTagName('body')[0].style.backgroundColor =
        '#a94545';
      score = 0;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!';
      } else {
        document.querySelector('.message').textContent = '📉 Too low!';
      }
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
