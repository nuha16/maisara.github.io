// Image
// Nuha Maisara
// 22/9/22

// ASK!!!
// let Backgroundimg;

// function preload(){
//   Backgroundimg = loadImage("Images/Background.jpg");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   imageMode(CENTER);
// }

// function draw() {
//   background(255);
//   image(Backgroundimg, windowWidth , windowHeight, windowWidth, windowHeight);
// }


let catImg;

function preload(){
  catImg = loadImage("Images/cat 1.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}
function mousePressed(){
  draw();
}
function draw(){
  image (catImg, mouseX, mouseY, 120, 100);
}