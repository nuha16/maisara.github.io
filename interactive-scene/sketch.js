// Interactive Scene
// Nuha Maisara
// 19/9/22
//
// Extra for Experts:
// make your own shapes


/// What I need to do
// scene interacts with the mouse(shapes follow mouse, change their size according to mouse, change their color according to mouse, etc)
// scene interact with the keyboard

let img;
function setup() {
  // createCanvas(windowWidth, windowHeight);
  preload();
  image(img, 0, 0);
}

// function draw() {
//   background(220);
// }

function preload() {
  img = loadImage("Background.png");
}
