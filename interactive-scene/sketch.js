// Interactive Scene
// Nuha Maisara
// 19/9/22
//
// Extra for Experts:
// make your own shapes


/// What I need to do
// scene interacts with the mouse(shapes follow mouse, change their size according to mouse, change their color according to mouse, etc)
// scene interact with the keyboard

let backgroundImg;
let scalar = 0.5;

function preload(){
  backgroundImg = loadImage("fish.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);
  image(fishImage, mouseX , mouseY, fishImage.width * scalar, fishImage.height * scalar);
}