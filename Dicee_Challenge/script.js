document.getElementById("submit").addEventListener("click", function () {
  const form = document.querySelector("form");
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  const player1Score = Math.floor(Math.random() * 6 + 1);
  const player2Score = Math.floor(Math.random() * 6 + 1);

  const randomImage1 = "images/dice" + player1Score + ".png";
  const randomImage2 = "images/dice" + player2Score + ".png";

  const image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomImage1);
  const image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomImage2);

  if (player1Score > player2Score) {
    document.querySelector("h1").innerHTML = "🏆 " + player1 + " Wins!";
  } else if (player2Score > player1Score) {
    document.querySelector("h1").innerHTML = "🏆 " + player2 + " Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Match Drawn!";
  }
});
