// 2nd project
// Nuha Maisara
// 28/10/22

// Extra for Experts:
// 

let w = 1300;
let h = 700;
let winWidth = w;
let winHeight = h;


function setup() {
  createCanvas(winWidth, winHeight);
  winTooSmallOrBig();
}

function draw() {
  background(220);
}

function winTooSmallOrBig() {
  if (winHeight < h || winWidth < w){
    background("red");
  }
}

function mousePressed(){}