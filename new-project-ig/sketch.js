// Image
// Nuha Maisara
// 22/9/22

let Backgroundimg;

function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);
  image(Backgroundimg, windowWidth , windowHeight, windowWidth, windowHeight);
}
