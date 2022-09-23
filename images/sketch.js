// Image
// Nuha Maisara
// 22/9/22

let fishImage;
let scalar = 0.5;

function preload(){
  fishImage = loadImage("fish.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);
  image(fishImage, mouseX , mouseY, fishImage.width * scalar, fishImage.height * scalar);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    scalar = scalar * 2;
  }
  if (keyCode === DOWN_ARROW){
    scalar = scalar * 0.5;
  }
}