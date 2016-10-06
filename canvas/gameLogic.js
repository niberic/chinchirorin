/*
  Suikoden's Chinchirorin dice game!
  Link to Wiki: http://suikoden.wikia.com/wiki/Chinchirorin

  Finished:
    1.) Functions to roll dice.
      a.) Draws dice image on the canvas.
    2.) Keep track of dice values.
    3.) Updates player scores accordingly.
  TODO:
    1.) Computer player.
    2.) Potch betting system.
    3.) Title screen?

*/

// Array holding all the locations for each die image.
var dieImagePaths = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg"
];

// Dictionary to hold mapping for playerScore.
var scores = {
  0: "None! Roll again!",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  10: "Win 1x!",
  11: "Win 2x!",
  12: "STORM! Win 3x!",
  21: "Lose 1x!",
  22: "Lose 2x!",
  23: "STORM! Win 3x!"
};

var totalDieValue = 0;
var playerScore = 0;

function getRandomNumber(max = 10){
  return Math.floor((Math.random() * max) + 1);
}

function updatePlayerScore(){
  var player = document.getElementById("playerScore");
  player.innerText = "Player Score: " + getPlayerScore();
}

function getPlayerScore(){
  return scores[playerScore];
}

function setPlayerScore(num){
  playerScore = num;
  updatePlayerScore();
}

function updateTotalScore(){
  var total = document.getElementById("totalScore");
  total.innerText = "Total Dice Value:" + getTotalDieValue();
}

function getTotalDieValue(){
  return totalDieValue;
}
function setTotalDieValue(num){
  totalDieValue = num;
  updateTotalScore();
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

/*
  Hand Rules:
    Basic: If a pair of dice match, then playerScore is the remaining dice.
    Special Hands:
      1.) Three of a kind that's not three ones.
        Player instantly wins, and wins 3x bet!
      2.) Three ones (1,1,1).
        Player instantly loses and pays 1x bet!
      3.) Straight (E.g. 2,3,4)
        Playing instantly wins, and wins 2x bet!
      4.) Straight with 1,2,3
        Playing instantly loses, and pay 3x bet!
*/

function checkHand(diceArray){
  diceArray.sort();
  var score;

  var d1 = diceArray[0];
  var d2 = diceArray[1];
  var d3 = diceArray[2];

  if (d1 == d2){      //Pair
    score = d3;
  }
  else if (d2 == d3){ //Pair
    score = d1;
  }
  else if((d1 == d2) && (d1 == d3)){ //3 of a kind
    if (d1 == 1){   //STORM! Lose!
      score = 23;
    }
    else{
      score = 13;   //STORM! Win!
    }
  }
  else if((d2 == (d1+1)) && (d3 == (d1+2))){
    if (d1 == 1){   //Straight (1,2,3) LOSE!
      score = 22;
    }
    else{
      score = 12;   //Straight, Win!
    }
  }
  else{             //No valid hand.
    score = 0;
  }
  return score;
}
