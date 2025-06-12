function rollDiceAndDisplayResult() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const randomImgSrc1 = "./images/dice" + randomNumber1 + ".png";
  const randomImgSrc2 = "./images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", randomImgSrc1);
  document.querySelector(".img2").setAttribute("src", randomImgSrc2);

  const heading = document.getElementById("main-heading");

  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins";
  } else {
    heading.innerHTML = "Draw!";
  }
}

window.onload = function () {
  if (localStorage.getItem("hasVisitedBefore")) {
    rollDiceAndDisplayResult();
  } else {
    document.getElementById("main-heading").innerHTML = "Refresh Me";
    localStorage.setItem("hasVisitedBefore", "true");
  }
};
