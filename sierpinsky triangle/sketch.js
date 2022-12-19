// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleVertices = [
  {x: 500, y:100},
  {x: 100, y:600},
  {x: 900, y:600}
];

let theDepth = 0;
let theColours = ["blue", "red", "green", "white", "yellow", "pink", "purple", "orange", "brown"];

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(220);
  sierpinsky(triangleVertices, theDepth);
}

function mousePressed() {
  if (theDepth < 8){
    theDepth ++;
  }
}

function sierpinsky(points, depth) {
  fill(theColours[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  
  if (depth > 0) {
    sierpinsky([points[0], getMidpoint(points[0], points[1]), getMidpoint(points[0], points[2])], depth - 1);
    sierpinsky([points[1], getMidpoint(points[0], points[1]), getMidpoint(points[1], points[2])], depth - 1);
    sierpinsky([points[2], getMidpoint(points[0], points[2]), getMidpoint(points[1], points[2])], depth - 1);
  }
}

function getMidpoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidpoint = {x: xDiff/2, y: yDiff/2};
  return theMidpoint;
}