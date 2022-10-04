// Image
// Nuha Maisara
// 22/9/22

let Backgroundimg, catImg1, catImg2, someTime;
let isCat1 = true;
let state = "start screen";

function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
  catImg1 = loadImage("Images/cat 1.png");
  catImg2 = loadImage("Images/cat 2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  someTime = 800;
}

function draw() {
  image(Backgroundimg, 0 , 0, windowWidth, windowHeight);
  if (state === "start screen"){
    drawCat();
  }
}

function drawCat(){
  if (millis() > someTime) {
    isCat1 = !isCat1;
    someTime = millis() + 800;
  }
    
  if (isCat1) {
    image(catImg1, windowWidth/2.8, windowHeight/2);
  }
  else {
    image(catImg2, windowWidth/2.8, windowHeight/2);
  }
}

