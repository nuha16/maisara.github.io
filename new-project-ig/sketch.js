// Idle Cat-Follow Game
// Nuha Maisara
// 22/9/22

// extra for experts: I used sound

// variables
let Backgroundimg, catImg1, catImg2, greenCat, purpleCat, startImg1, startImg2, someTime, imgWidth, imgHeight, imgx, imgy, selectCatimg, chosenCat, meow, meow2, pressEnter, txt_size, angryMeow, happyMeow, feedCat, fish, catFood, trash, question, back;
let isCat1 = true;
let state = "start screen";
let counter = 0;

// preloading images and sounds
function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
  catImg1 = loadImage("Images/cat 1.png");
  catImg2 = loadImage("Images/cat 2.png");
  greenCat = loadImage("Images/green cat.png");
  purpleCat = loadImage("Images/purple cat.png");
  startImg1 = loadImage("Images/start 1.png");
  startImg2 = loadImage("Images/start 2.png");
  selectCatimg = loadImage("Images/select cat.png");
  meow = loadSound("Sounds/meow.ogg");
  meow2 = loadSound("Sounds/kitten meow.wav");
  pressEnter = loadImage("Images/press enter.png");
  angryMeow = loadSound("Sounds/angry meow.mp3");
  happyMeow = loadSound("Sounds/happy meow.wav");
  feedCat = loadImage("Images/feed cat.png");
  fish = loadImage("Images/fish.png");
  catFood = loadImage("Images/cat food.png");
  trash = loadImage("Images/trash.png");
  question = loadImage("Images/question.png");
  back = loadImage("Images/back.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  someTime = 800;
  imgx = windowWidth/2.7;
  imgy = windowHeight/5;
  imgWidth = windowWidth/5;
  imgHeight = windowHeight/6;
  txt_size = 32;
}

function draw(){
  image(Backgroundimg, 0 , 0, windowWidth, windowHeight);
  if (state === "start screen"){
    drawCat();
    startScreen();
  }
  if (state === "select"){
    select_cat();
  }
  if (state === "main"){
    select_food();
    drawQuestion();
    txtCounter();
    cat_follow();
  }
  if (state === "question"){
    txtQuestion();
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

function select_food(){
  // fish
  noFill();
  stroke("green");
  strokeWeight(4);
  rect(windowWidth/6.3, windowHeight/2.5, windowWidth/8, windowHeight/5.4);
  image(fish, windowWidth/6.2, windowHeight/2.5);

  // cat food
  noFill();
  stroke("green");
  strokeWeight(4);
  rect(windowWidth/1.4, windowHeight/2.5, windowWidth/8.4, windowHeight/5);
  image(catFood, windowWidth/1.4, windowHeight/2.5);
  
  // trash
  noFill();
  stroke("red");
  strokeWeight(4);
  rect(windowWidth/2.35, windowHeight/2.5, windowWidth/10, windowHeight/5);
  image(trash, windowWidth/2.3, windowHeight/2.5);
}

// cat cursor + text on screen
function cat_follow(){
  imageMode(CENTER);
  image(chosenCat, mouseX, mouseY);
  image(pressEnter, windowWidth/2, windowHeight/1.2);
  image(feedCat, windowWidth/2, windowHeight/4);
  imageMode(CORNER);
}

function mousePressed(){
  // state "start screen" to "select"
  if (state === "start screen" && mouseInsideImg(imgx, imgy, imgWidth, imgHeight)){
    meow2.play();
    state = "select";
  }

  // state "select" to "main"
  if (state === "select" && mouseInsideImg(windowWidth/7, windowHeight/2.5, windowWidth/7, windowHeight/4)){
    chosenCat = purpleCat;
    meow2.play();
    state = "main";
  }
  else if (state === "select" && mouseInsideImg(windowWidth/1.435, windowHeight/2.5, windowWidth/7, windowHeight/4)){
    chosenCat = greenCat;
    meow2.play();
    state = "main";
  }
  else if (state === "select" &&  mouseInsideImg(windowWidth/2.43, windowHeight/2.62, windowWidth/7, windowHeight/3)){
    chosenCat = catImg1;
    meow2.play();
    state = "main";
  }

  // selecting food
  else if (state === "main" && mouseInsideImg(windowWidth/6.3, windowHeight/2.5, windowWidth/8, windowHeight/5.4)){
    counter +=1;
    happyMeow.play();
  }
  else if (state === "main" && mouseInsideImg(windowWidth/1.4, windowHeight/2.5, windowWidth/8.4, windowHeight/5)){
    counter +=2;
    happyMeow.play();
  }
  else if (state === "main" && mouseInsideImg(windowWidth/2.35, windowHeight/2.5, windowWidth/10, windowHeight/5)){
    counter -=1;
    angryMeow.play();
  }

  // state "main" to "question"
  else if (state === "main" && mouseInsideImg(windowWidth/15.2, windowHeight/8, windowWidth/23, windowHeight/10)){
    state = "question";
  }

  // state "question" to "main"
  else if (state === "question" && mouseInsideImg(windowWidth/15.2, windowHeight/8, windowWidth/9, windowHeight/12)){
    state = "main";
  }
}

// take a gamble huhuhu
function keyPressed(){
  if (state === "main" && keyCode === ENTER) {
    meow.play();
    counter += 1;
  }
}

function txtCounter(){
  textSize(txt_size);
  fill("white");
  noStroke();
  text(counter, windowWidth/1.3, windowHeight/5.5);
}

function drawQuestion(){
  noFill();
  stroke("white");
  strokeWeight(4);
  rect(windowWidth/15.2, windowHeight/8, windowWidth/23, windowHeight/10);
  image(question, windowWidth/15, windowHeight/8);
}

function txtQuestion(){
  // back
  noFill();
  stroke("white");
  strokeWeight(4);
  rect(windowWidth/15.2, windowHeight/8, windowWidth/9, windowHeight/12);
  image(back, windowWidth/15, windowHeight/8);

  // txt info about "main"
  let a = "Click on the food with green borders to keep the kitty happy.";
  let b = "Fish = + 1, cat food + 2.";
  let c = "But feeding it trash will result in the happiness meter decreasing by 1.";
  textSize(txt_size);
  strokeWeight(2);
  text(a, windowWidth/5, windowHeight/6);
  text(b, windowWidth/5, windowHeight/4);
  text(c, windowWidth/5, windowHeight/3);
}