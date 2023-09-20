var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src", "./images/"+ randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", "./images/"+ randomDiceImage2);
if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>=randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else {
    document.querySelector("h1").textContent="Player 2 Wins!"
}
