// Array holding all the locations for each die image.
var dieImagePaths = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg"
];

function getRandomNumber(max = 10){
  return Math.floor((Math.random() * max) + 1);
}

function updateAllDie(){
  var dieList = document.getElementsByClassName("die");
  var random, i;
  for (i = 0; i < dieList.length; ++i){
    updateDie(dieList[i]);
  }
}

function clearAllDie(){
  var dieList = document.getElementsByClassName("die");
  var i;
  for (i = 0; i < dieList.length; ++i){
    clearDie(dieList[i]);
  }
}

function clearDie(elem){
  var ctx = elem.getContext("2d");
  ctx.clearRect(0,0, 100,100);
}

function updateDie(elem){
  var ctx = elem.getContext("2d");
  var randomDie = getRandomNumber(6)-1;

  var imageObj = new Image();
  imageObj.onload = function(){
    ctx.drawImage(imageObj,0,0);
  };
  imageObj.src = dieImagePaths[randomDie];
}

function rollDieCanvas(){
  var randomDie = getRandomNumber(6)-1;
  var c = document.getElementById("dieOne");
  var ctx = c.getContext("2d");
  var imageObj = new Image();
  imageObj.onload = function(){
    ctx.drawImage(imageObj,0,0);
  };
  imageObj.src = dieImagePaths[randomDie];
}
