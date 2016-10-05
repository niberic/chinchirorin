// Array holding all the locations for each die image.
var sources = [
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

function rollDieCanvas(){
  var defaultLocation = "images/0";
  var imgLocation = defaultLocation;
  var random = getRandomNumber(6);
  imgLocation += random + ".jpg";

  var c = document.getElementById("dieOne");
  var ctx = c.getContext("2d");
  var imageObj = new Image();
  imageObj.onload = function(){
    ctx.drawImage(imageObj,0,0);
  };
  imageObj.src = imgLocation;
}

// function loadImages(sources, callback) {
//   var images = {};
//   var loadedImages = 0;
//   var numImages = Object.keys(sources).length;
//
//   for(var src in sources) {
//     images[src] = new Image();
//     images[src].onload = function() {
//       if(++loadedImages >= numImages) {
//         callback(images);
//       }
//     };
//     images[src].src = sources[src];
//   }
// }

// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
//
// loadImages(sources, function(images) {
//   context.drawImage(images.darthVader, 100, 30, 200, 137);
//   context.drawImage(images.yoda, 350, 55, 93, 104);
// });
