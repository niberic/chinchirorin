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

function getRandomNumber(max = 10){
  return Math.floor((Math.random() * max) + 1);
}

function updateTotalScore(){
  var total = document.getElementById("totalScore");
  total.innerText = getTotalDieValue();
}

function setTotalDieValue(num){
  totalDieValue = num;
  updateTotalScore();
}

function getTotalDieValue(num){
  return totalDieValue;
}

function updateAllDie(){
  var dieList = document.getElementsByClassName("die");
  var random, i, total = 0, dieValue;
  for (i = 0; i < dieList.length; ++i){
    dieValue = updateDie(dieList[i]);
    total += dieValue;
  }
  setTotalDieValue(total);
}

function clearAllDie(){
  var dieList = document.getElementsByClassName("die");
  var i;
  for (i = 0; i < dieList.length; ++i){
    clearDie(dieList[i]);
  }
  setTotalDieValue(0);
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
