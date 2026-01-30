const randomNumber = Math.floor(Math.random() * 101);
console.log("Random number:", randomNumber);

const input = document.querySelector("#guessInput");
const button = document.querySelector("#guessBtn");
const feedback = document.querySelector("#feedback");
const celebration = document.querySelector("#celebration");

button.addEventListener("click", function () {
  const userGuess = Number(input.value);

  if (userGuess < randomNumber) {
    feedback.textContent = "For lavt";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "For højt";
  } else {
    feedback.textContent = "Korrekt!";
    celebration.style.display = "block";
  }
});
