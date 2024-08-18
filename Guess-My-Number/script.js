'use strict';

console.log((document.querySelector('.message').style.color = 'cyan'));

document.querySelector('.number').textContent = 18;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;

document.querySelector('.check').addEventListener('click', function () {
  console.log('Button was clicked');
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('again was clicked');
});
