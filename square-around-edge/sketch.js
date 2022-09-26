// Square Around Edge
// Nuha Maisara
// 26/9/22

let squareX, squareY, squareSize, speed, state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareX = 0;
  squareY = 0;
  squareSize = 50;
  speed = 3;
  state = "right";
}

function draw() {
  background(220);
  drawSquare();
  moveSquare();
}

function drawSquare() {
  square(squareX, squareY, squareSize);
}

function moveSquare(){
  if (state === "right"){
    squareX += speed;
    if (squareX + squareSize >= width){
      squareX = width - squareSize;
      state = "down";
    }
  }
}