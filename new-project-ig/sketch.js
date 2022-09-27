// Image
// Nuha Maisara
// 22/9/22

// ASK!!!
let Backgroundimg;

function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(Backgroundimg, 0 , 0, windowWidth, windowHeight);
}
