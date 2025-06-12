function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImgSrc1 = "./images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImgSrc2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

  var resultText = "";

  if (randomNumber1 > randomNumber2) {
    resultText = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    resultText = "Player 2 Wins";
  } else {
    resultText = "Draw!";
  }

  document.getElementById("main-heading").textContent = resultText;
}
