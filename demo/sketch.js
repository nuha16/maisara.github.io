// Array demo
// Nuha Maisara
// 18/10/22

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  displayCircles();
}

function mousePressed() {
  spawnCircle();
}

function displayCircles() {
  for (let i = 0; i < theCircles.length; i++) {
    noStroke();
    fill(theCircles[i].theColor);
    circle(theCircles[i].x, theCircles[i].y, theCircles[i].radius*2);
  }
}

function spawnCircle() {
  let thisCircle = {
    x: mouseX,
    y: mouseY,
    radius: random(25, 75),
    theColor: color(random(255), random(255), random(255), random(255)),
  };
  theCircles.push(thisCircle);
}