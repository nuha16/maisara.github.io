// Image
// Nuha Maisara
// 22/9/22

// ASK!!!
let Backgroundimg, catImg1, catImg2, someTime;
let isCat = true;

function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
  catImg1 = loadImage("Images/cat 1.png");
  catImg2 = loadImage("Images/cat 2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(Backgroundimg, 0 , 0, windowWidth, windowHeight);
  drawCat();
}

function drawCat(){
  image(catImg1, windowWidth/2.8, windowHeight/2);
}

// function setup() {
//   createCanvas(400, 400);
//   someTime = 2000;
// }

// function draw() {
//   if (millis() > someTime) {
//     isCat = !isCat;
//     someTime = millis() + 2000;
//   }
  
//   if (isCat) {
//     background("red");
//   }
//   else {
//     background("black");
//   }
// }