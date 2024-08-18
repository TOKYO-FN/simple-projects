'use strict';
// let answer = Math.floor(Math.random() * 5) + 1;

// console.log(answer);
// let check = function () {
//   if (document.querySelector('.guess').value == answer) {
//     document.querySelector('.message').textContent = 'Correct!';
//     console.log('Correct');
//     console.log(typeof document.querySelector('.guess').value);
//   } else console.log('Not correct');
// };

// // console.log((document.querySelector('.message').style.color = 'cyan'));

// document.querySelector('.check').addEventListener('click', check);

// // document.querySelector('.again').addEventListener('click', function () {
// //   console.log('again was clicked');
// // });

// TODO 📉 Too low!
// TODO 📈 Too high!
// TODO 🎉 Correct number!
// TODO score by2l b wa7d f kol mara
// TODO awl ma bgyb el rakam s7 byb2a da el highscore
let answer = Math.round(Math.random() * 20) + 1;
let checkButton = document.querySelector('.check');
let valueInBox = document.querySelector('.guess');
let score = document.querySelector('.score');
let highscore = 0;
let message = document.querySelector('.message');

let clickFunc = function () {
  let value = valueInBox.value;
  // TODO el awl a4of el raqam lw hwa s7 🎉 Correct number!
  if (answer == value) {
    console.log('🎉 Correct number!');
    message.textContent = '🎉 Correct number!';
    return;
  } else if (value > answer) {
    message.textContent = '📉 Too high!';
    console.log('📉 Too high!');
  } else {
    message.textContent = '📈 Too low!';
    console.log('📈 Too low!');
  }
  score.textContent = Number(score.textContent) - 1;
};
console.log(answer);
checkButton.addEventListener('click', clickFunc);
