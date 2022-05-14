'use strict';

let x = Math.trunc(Math.random() * 30 + 1);
let score = 5;

document.querySelector('.check').addEventListener('click', function () {
  let s = document.querySelector('.guess').value;

  //Correct Number
  if (s == x) {
    document.querySelector('.message').textContent = '🍸 Correct Number 🍸';
    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#0AA1DD';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = x;
  }

  // Lose the game
  else if (score <= 1) {
    document.querySelector('.message').textContent = '😔 Game Over 😔';
    document.querySelector('.number').textContent = x;
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }

  //NO number
  else if (!s) {
    document.querySelector('.message').textContent = '⛔ NO number';
  }

  // Number too high than x
  else if (s > x) {
    document.querySelector('.message').textContent = '👆 Too high 👆';
    score--;
    document.querySelector('.score').textContent = score;
  }

  //Number too low than x
  else if (s < x) {
    document.querySelector('.message').textContent = '👇 Too low 👇';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

//Play again
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = ' ';
  score = 5;
  x = Math.trunc(Math.random() * 30 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 5;
  document.querySelector('.message').trxtContent = 'Start guessing...';
});
