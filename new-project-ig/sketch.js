// Image
// Nuha Maisara
// 22/9/22

// extra for experts: I used sound

// variables
let Backgroundimg, catImg1, catImg2, greenCat, purpleCat, startImg1, startImg2, someTime, imgWidth, imgHeight, imgx, imgy, selectCatimg, chosenCat;
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

// setup and setting variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  someTime = 800;
  imgx = windowWidth/2.7;
  imgy = windowHeight/5;
  imgWidth = windowWidth/5;
  imgHeight = windowHeight/6;
}

// using all the functions in one place
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
    cat_follow();
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
  if (mouseInsideImg(imgx, imgy, imgWidth, imgHeight)){
    image(startImg2, imgx, imgy, imgWidth, imgHeight);
  }
  else{
    image(startImg1, imgx, imgy, imgWidth, imgHeight);
  }
}

// domain of button
function mouseInsideImg(x, y, width, height){
  return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
}

// domain of cat
function mouseInsideCat(x, y, width, height){
  return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
}

// selecting the cat
function select_cat(){
  // white cat
  noFill();
  stroke(171, 170, 182);
  strokeWeight(4);
  rect(windowWidth/2.43, windowHeight/2.62, windowWidth/7, windowHeight/3);
  image(catImg1, windowWidth/2.4, windowHeight/2.5, windowWidth/8, windowHeight/3.5);

  // green eye cat
  noFill();
  stroke("green");
  strokeWeight(4);
  rect(windowWidth/1.435, windowHeight/2.5, windowWidth/7, windowHeight/4);
  image(greenCat, windowWidth/1.4, windowHeight/2.5);

  // purple eye cat
  noFill();
  stroke(143, 131, 249);
  strokeWeight(4);
  rect(windowWidth/7, windowHeight/2.5, windowWidth/7, windowHeight/4);
  image(purpleCat, windowWidth/6.2, windowHeight/2.5);

  // the words that say select your cat
  image(selectCatimg, windowWidth/3.3, windowHeight/6);
}

function cat_follow(){
  imageMode(CENTER);
  image(chosenCat, mouseX, windowHeight/1.4);
  imageMode(CORNER);
}

// pressing the mouse
function mousePressed(){
  console.log(mouseX, mouseY);
  // state "start screen" to "select"
  if (state === "start screen" && mouseInsideImg(imgx, imgy, imgWidth, imgHeight)){
    state = "select";
  }

  // state "select" to "main"
  if (state === "select" && mouseInsideCat(windowWidth/7, windowHeight/2.5, windowWidth/7, windowHeight/4)){
    chosenCat = purpleCat;
    state = "main";
  }
  else if (state === "select" && mouseInsideCat(windowWidth/1.435, windowHeight/2.5, windowWidth/7, windowHeight/4)){
    chosenCat = greenCat;
    state = "main";
  }
  else if (state === "select" &&  mouseInsideCat(windowWidth/2.43, windowHeight/2.62, windowWidth/7, windowHeight/3)){
    chosenCat = catImg1;
    state = "main";
  }

  if (state === "main"){
    image(chosenCat);
  }

}