var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImg = "/dice" + randomNumber1 + ".png";
var randomImgSrc = "./images" + randomDiceImg ;

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImg2 = "/dice" + randomNumber2 + ".png";
var randomImgSrc2 = "./images" + randomDiceImg2 ;

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw !!";
}