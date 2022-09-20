// Interactive Scene
// Nuha Maisara
// 19/9/22
//
// Extra for Experts:
// make your own shapes


/// What I need to do
// scene interacts with the mouse(shapes follow mouse, change their size according to mouse, change their color according to mouse, etc)
// scene interact with the keyboard

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}

function draw() {
  background(220);
}

let img;
function preload() {
  img = loadImage("assets/Background.jpg");
}
