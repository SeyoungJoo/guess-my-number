'use strict';

const secretNumber = Math.trunc(Math.random()*20)+1; //decimal number between 1 to 20
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) { //if there is no guess
    document.querySelector('.message').textContent = "❌ No Number!";
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "🎉 Corret Number!";
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = "Too high!";
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = "Too Low!";
    score--;
    document.querySelector('.score').textContent = score;
  };
});