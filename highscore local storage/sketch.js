// Local Storage Demo

let clicks = 0;
let highest = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("high score") !== null){
    highest = getItem("high score");
  }
  else {
    storeItem("high score", 0);
  }
}

function draw() {
  background(220);

  textSize(100);
  text(clicks, width/2, height/2);

  text(highest, width/4, height/4);
}

function mousePressed() {
  clicks++;

  if (clicks > getItem("high score")){
    storeItem();
  }
}