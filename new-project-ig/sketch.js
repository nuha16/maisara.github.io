// Image
// Nuha Maisara
// 22/9/22

let Backgroundimg, catImg1, catImg2, greenCat, purpleCat, startImg1, startImg2, someTime, imgWidth, imgHeight, imgx, imgy, selectCatimg;
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
  selectCatimg = loadImage("Images/select cat.png");
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

<<<<<<< HEAD
// cat on pointer how? hehe
=======
function mouseInsideCat(left, right, top, bottom){}

function mouseInsideGreenCat(left, right, top, bottom){}

function mouseInsidePurpleCat(left, right, top, bottom){}

function select_cat(){
  image(catImg1, windowWidth/2.7, windowHeight/3);
  image(greenCat, windowWidth/1.4, windowHeight/3);
  image(purpleCat, windowWidth/6.2, windowHeight/3);

  // the words that say select your cat
  image(selectCatimg, windowWidth/3, windowHeight/6);
}

>>>>>>> 193889045ea83f3556a04d7f8f852028519580e7
function cat_stamp(){
  imageMode(CENTER);
  image (catImg1, mouseX, mouseY, 120, 100);
  imageMode(CORNER);
}

function mousePressed(){
  console.log(mouseX, mouseY);
  if (state === "start screen" && mouseInsideStart1(imgx, imgy, imgWidth, imgHeight)){
    state = "select";
  }
  if (state === "select" && mouseInsideCat(windowWidth/2.7, windowHeight/3)){
    state = "main";
  }
}