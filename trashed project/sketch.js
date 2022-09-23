// Interactive Scene
// Nuha Maisara
// 19/9/22
//
// Extra for Experts:
// make your own shapes


/// What I need to do
// scene interacts with the mouse(shapes follow mouse, change their size according to mouse, change their color according to mouse, etc)
// scene interact with the keyboard

let BackgroundImg;

function preload(){
  BackgroundImg = loadImage("Images/Background.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // imageMode(CENTER);
}
function draw() {
  background(255);
  image(BackgroundImg, windowWidth , windowHeight, windowWidth, windowHeight);
}