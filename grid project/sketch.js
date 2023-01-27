// Nuha Maisara
// Space Shooter Game

class Button {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  isInside(x, y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide && y > topSide && y < bottomSide;
  }
}

let darkSky, spaceship, rock, littleLego;

let state = "start";

function preload() {
  // images
  darkSky = loadImage("images/darkSky.PNG");
  spaceship = loadImage("images/spaceship.png");
  rock = loadImage("images/rock1.png");

  // fonts
  littleLego = loadImage("fonts/littlelego");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function startScreen() {

}