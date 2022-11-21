// Button OOP challenge

class Button {
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = "black";
    this.hoverColour = "white";
  }

  display() {
    if (this.isInside(mouseX, mouseY)){
      fill(this.hoverColour);
    }
    else {
      fill(this.colour);
    }
    rect(this.x, this.y, this.width, this.height);
  }
  isInside(x, y){
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let top = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide && y > top && y < bottomSide;

  }
}
let backgroundColour = 220;
let buttonOne = new Button(200, 300, 200, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundColour);
  buttonOne.display();
}

function mousePressed() {
  if (buttonOne.isInside(mouseX, mouseY)){
    backgroundColour = "purple";
  }
}