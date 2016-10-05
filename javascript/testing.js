
function getRandomNumber(max = 10){
  return Math.floor((Math.random() * max) + 1);
}

function generateNumbers (){
  var el = document.getElementById("change");
  var msg = "<h2> List of random numbers</h2>";
  var num = 0;
  var numArray = [];
  for (num = 0; num < 10; ++num){
    numArray[num] = getRandomNumber(10);
    msg += "<p>" + numArray[num] + "</p>";
  }
  el.innerHTML = msg;
}

function rollDie(){
  var diceList = document.getElementsByClassName("dice");
  var defaultMsg = "<img src=\"images/0";

  var i;
  var random;
  var msg = defaultMsg;

  for (i = 0; i < 3; ++ i){
    random = getRandomNumber(6);
    msg += random + ".jpg\"></img>";
    diceList[i].innerHTML = msg;
    msg = defaultMsg;
  }
}
