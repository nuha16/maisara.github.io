// Start Screen Demo
// Nuha Maisara
// Oct 3 2022

let state = "start";
let x,y, CatImg, rectwidth, rectheight;

function preload(){
  CatImg = loadImage("pexels cat.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2.5;
  y = windowHeight/2.5;
  rectwidth = 300;
  rectheight = 150;
}

function draw() {
  background(220);
  if (state === "start"){
    startScreen();
  }
  if (state === "main"){
    image(CatImg, 0, 0);
  }
}

function mousePressed(){
  if (state === "start" && mouseInsideRect(x, rectwidth + x, y, rectheight + y)){
    state = "main";
  }
}

function startScreen(){
  if (mouseInsideRect(x,rectwidth + x, y,rectheight + y)){
    fill("gray");
  }
  else{
    fill("black");
  }
  rect(x, y, rectwidth, rectheight);
}

// button clicked
function mouseInsideRect(left, right, top, bottom){
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}