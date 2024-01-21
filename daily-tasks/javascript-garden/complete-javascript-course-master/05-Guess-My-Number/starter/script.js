"use strict";

// secret number ranging from 0 to 20
const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

// upon putting any number in the input field, if we click Check! button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number!";
  }
});
