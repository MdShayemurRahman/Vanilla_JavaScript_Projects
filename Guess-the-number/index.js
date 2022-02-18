const guessInput = document.querySelector("#guess");
const checkButton = document.querySelector("#check");
const result = document.querySelector("#result");
let countButton = 0;

const play = checkButton.addEventListener("click", () => {
  const randomNum = getRandomNumber(5);
  checkResult(randomNum);
  countButton++;

  buttonPressLimit(countButton);
});

const getRandomNumber = (limit) => {
  return (randomNum = Math.floor(Math.random() * limit) + 1);
};

const checkResult = (randomNum) => {
  if (randomNum == guessInput.value) {
    result.textContent = "You Won";
    result.style.color = "green";
  } else {
    result.textContent = "The random number was " + randomNum + " You Lost";
    result.style.color = "red";
  }
};

const buttonPressLimit = (countButton) => {
  if (countButton === 5) {
    checkButton.disabled = true;
  } else {
    checkButton.disabled = false;
  }
};
