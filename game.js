let score = 0;
let tries = 15;
let gameOver = false;
let randNum = 3; // Random number between 1 and 100

const btnCheck2 = document.getElementById('btnCheck3');
btnCheck2.style.display = 'none'; // Hide the restart button initially

const statusMessages = [
  'Congrats, You won!',
  'The number is greater, please choose a smaller number.',
  'The number is smaller, please choose a greater number.',
  'Please enter a valid number'
];

function start() {
  document.getElementById('container3').style.display = 'inline-block';
  document.getElementById('container2').style.display = 'none';
}

function guess() {
  if (gameOver) return; // If game over, prevent further guessing

  let inputNum = parseInt(document.getElementById('inputNum').value);
  let message = '';

  if (isNaN(inputNum) || inputNum <= 0) {
    message = statusMessages[3]; // Invalid input message
  } else {
    tries--; // Decrease number of tries

    if (inputNum === randNum) {
      score++;
      message = statusMessages[0]; // Player won
      music2.play();
      setTimeout(function(){
        music2.pause();
        music2.currentTime = 0;
    },5000);
      btnCheck2.style.display = 'inline-block'; // Show the restart button
      alert('congratulations, You guessed the number. Restart Game!')
      gameOver = true; // End game
    } else if (inputNum > randNum) {
      message = statusMessages[1]; // Guess too high
    } else if (inputNum < randNum) {
      message = statusMessages[2]; // Guess too low
    }
  }

  // End game if no tries are left
  if (tries <= 0 && !gameOver) {
    alert("No more trials left. You lost.");
    tries = 0;
    btnCheck2.style.display = 'inline-block'; // Show the restart button
    gameOver = true; // End game
    music3.play();
    setTimeout(function(){
        music3.pause();
        music3.currentTime = 0;
    },10000);
  }

  // Update UI elements
  document.getElementById('score').textContent = "Score: " + score;
  document.getElementById('tries').innerHTML = "Trials Left: " + tries;
  document.getElementById('status').textContent = message;
}

function restart() {
  // Reset game variables
  score = 0;
  tries = 15;
  gameOver = false;
  randNum =3; // Generate a new random number

  // Reset UI elements
  document.getElementById('score').textContent = "Score: " + score;
  document.getElementById('tries').innerHTML = "Trials Left: " + tries;
  document.getElementById('status').textContent = '';
  document.getElementById('inputNum').value = ''; // Clear input field
  btnCheck2.style.display = 'none'; // Hide the restart button
  document.getElementById('container2').style.display = 'inline-block';
  document.getElementById('container3').style.display = 'none';
}

function music() {
    var audio = document.getElementById('music');
    audio.play();
}
let music2 = document.getElementById('music2');
let music3 = document.getElementById('music3');
