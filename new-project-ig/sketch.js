// Image
// Nuha Maisara
// 22/9/22

let Backgroundimg, catImg1, catImg2, greenCat, purpleCat, startImg1, startImg2, someTime, imgWidth, imgHeight, imgx, imgy;
let isCat1 = true;
let state = "start screen";

// preloading images
function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
  catImg1 = loadImage("Images/cat 1.png");
  catImg2 = loadImage("Images/cat 2.png");
  greenCat = loadImage("Images/green cat.png");
  purpleCat = loadImage("Images/purple cat.png");
  startImg1 = loadImage("Images/start 1.png");
  startImg2 = loadImage("Images/start 2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  someTime = 800;
  imgx = windowWidth/2.7;
  imgy = windowHeight/5;
  imgWidth = windowWidth/5;
  imgHeight = windowHeight/6;
}

function draw() {
  image(Backgroundimg, 0 , 0, windowWidth, windowHeight);
  if (state === "start screen"){
    drawCat();
    startScreen();
  }
  if (state === "select"){
    select_cat();
  }
  if (state === "main"){
    cat_stamp();
  }
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

// start button
function startScreen(){
  if (mouseInsideStart1(imgx, imgy, imgWidth, imgHeight)){
    image(startImg2, imgx, imgy, imgWidth, imgHeight);
  }
  else{
    image(startImg1, imgx, imgy, imgWidth, imgHeight);
  }
  
}

// hovering over start button
function mouseInsideStart1(imgx, imgy, imgWidth, imgHeight){
  return mouseX >= imgx && mouseX <= imgx + imgWidth && mouseY >= imgy && mouseY <= imgy + imgHeight;
}

function mouseInsideCat(){}

function select_cat(){
  image(catImg1, windowWidth/2.7, windowHeight/4);
  image(greenCat, windowWidth/1.5, windowHeight/4);
  image(purpleCat, windowWidth/5, windowHeight/4);
}

function cat_stamp(){
  imageMode(CENTER);
  image (catImg1, mouseX, mouseY, 120, 100);
  imageMode(CORNER);
}

function mousePressed(){
  if (state === "start screen" && mouseInsideStart1(imgx, imgy, imgWidth, imgHeight)){
    state = "select";
  }
}