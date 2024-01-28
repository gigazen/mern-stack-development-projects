// Guess My Number Game
"use strict";

// secret number ranging from 0 to 20
// make data always available in code and not just available in DOM, so must store data as variables in code. Here instead of modifying DOM like, document.querySelector(".score").textContent--, better to create a state variable named score as part of application state
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// message to display for each input
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// putting a number in input field and clicking Check! button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // guess has no number input
  if (!guess) {
    displayMessage("🚫 No Number!");

    // guess matches and player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Answer");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // if found correct answer and score is higher than previous High Score then assign score as High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }

    // guess is either too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥶 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// clicking Again! button resets everything except High Score
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
