// Array holding all the locations for each die image.
var dieImagePaths = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg"
];

var totalDieValue = 0;
var playerScore = 0;

function getRandomNumber(max = 10){
  return Math.floor((Math.random() * max) + 1);
}

function updatePlayerScore(){
  var player = document.getElementById("playerScore");
  player.innerText = getPlayerScore();
}

function getPlayerScore(){
  return playerScore;
}

function setPlayerScore(num){
  playerScore = num;
  updatePlayerScore();
}

function updateTotalScore(){
  var total = document.getElementById("totalScore");
  total.innerText = getTotalDieValue();
}

function setTotalDieValue(num){
  totalDieValue = num;
  updateTotalScore();
}

function getTotalDieValue(){
  return totalDieValue;
}


function updateAllDie(){
  var dieList = document.getElementsByClassName("die");
  var random, i, total = 0, dieValue;
  var rolledDice = [];

  for (i = 0; i < dieList.length; ++i){
    dieValue = updateDie(dieList[i]);
    total += dieValue;
    rolledDice[i] = dieValue;
  }
  //Check dice to see if we having a scoring hand.
  setPlayerScore(checkHand(rolledDice));
  setTotalDieValue(total);
}

function clearAllDie(){
  var dieList = document.getElementsByClassName("die");
  var i;
  for (i = 0; i < dieList.length; ++i){
    clearDie(dieList[i]);
  }
  setTotalDieValue(0);
  setPlayerScore(0);
}

function clearDie(elem){
  var ctx = elem.getContext("2d");
  ctx.clearRect(0,0, 100,100);
}

function updateDie(elem){
  var ctx = elem.getContext("2d");
  var randomDie = getRandomNumber(6);

  var imageObj = new Image();
  imageObj.onload = function(){
    ctx.drawImage(imageObj,0,0);
  };
  imageObj.src = dieImagePaths[randomDie-1];
  return randomDie;
}

// Only going to check for a matching pair for now. Will implement special hands
// later.
function checkHand(diceArray){
  diceArray.sort();
  var score;

  var d1 = diceArray[0];
  var d2 = diceArray[1];
  var d3 = diceArray[2];

  if (d1 == d2){
    score = d3;
  }
  else if (d2 == d3){
    score = d1;
  }
  else{
    score = 0;
  }
  return score;
}
