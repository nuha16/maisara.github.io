// Ball oop
// Nuha Maisara
// 1/27/23

let ballOne; 
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // balls
  ballOne = new Ball(random(200), random(200), random(20, 40));
}

class Ball {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  display(){
    fill("white");
    circle(this.x, this.y, this.size);
  }
  update(){
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x < windowWidth;
    this.y < windowHeight;
  }
}

function draw() {
  background(220);

  balls.push(ballOne);
  balls.display();
}

function mousePressed() {
  balls.push(ballOne);
}