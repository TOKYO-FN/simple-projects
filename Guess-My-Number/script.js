'use strict';
let answer = Math.floor(Math.random() * 5) + 1;

console.log(answer);
let check = function () {
  if (document.querySelector('.guess').value == answer) {
    document.querySelector('.message').textContent = 'Correct!';
    console.log('Correct');
    console.log(typeof document.querySelector('.guess').value);
  } else console.log('Not correct');
};

// console.log((document.querySelector('.message').style.color = 'cyan'));

document.querySelector('.check').addEventListener('click', check);

// document.querySelector('.again').addEventListener('click', function () {
//   console.log('again was clicked');
// });
