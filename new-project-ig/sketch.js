// Image
// Nuha Maisara
// 22/9/22

let Backgroundimg, catImg1, catImg2, startImg1, startImg2, someTime;
let isCat1 = true;
let state = "start screen";

function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
  catImg1 = loadImage("Images/cat 1.png");
  catImg2 = loadImage("Images/cat 2.png");
  startImg1 = loadImage("Images/start 1.png");
  startImg2 = loadImage("Images/start 2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  someTime = 800;

}

function draw() {
  image(Backgroundimg, 0 , 0, windowWidth, windowHeight);

  if (state === "start screen"){
    drawCat();
    startScreen();
  }
}

// start button
function startScreen(){
  image(startImg1, windowWidth/2.7, windowHeight/5, windowWidth/5, windowHeight/6);
  if (mouseInsideStart1(startImg1)){
    image(startImg2, windowWidth/2.7, windowHeight/5, windowWidth/5, windowHeight/6);
  }

}

function mouseInsideStart1(left, right, top, bottom){
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

// the blinking cat on the start screen
function drawCat(){
  if (millis() > someTime) {
    isCat1 = !isCat1;
    someTime = millis() + 800;
  }
    
  if (isCat1) {
    image(catImg1, windowWidth/2.7, windowHeight/2);
  }
  else {
    image(catImg2, windowWidth/2.7, windowHeight/2);
  }
}

