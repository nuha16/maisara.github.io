// Nuha Maisara
// Space Shooter Game

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