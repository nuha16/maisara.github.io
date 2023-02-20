// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let i = 0; i < width; i++) {
  if (i % 15 === 0) {
    line(0, 0, width, i);
  }
}
}
