// Walker OOP demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colour = "red";
    this.speed = 5;
    this.radius = 5;
  }

  display(){
    stroke(this.colour);
    fill(this.colour);
    circle(this.x, this.y, this.radius*2);
  }

  move(){
    let choice = random(100);

    if (choice < 25) {
      // up
      this.y -= this.speed;
    }
    else if (choice < 50){
      // down
      this.y += this.speed;
    }
    else if (choice < 75){
      // right
      this.x += this.speed;
    }
    else {
      // left
      this.x -= this.speed;
    }
  }
}

let michael;
let katharine;
let object;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
  katharine = new Walker(200, 300);
  katharine.colour = "blue";
  object = new Walker(width - 150, height - 150);
  object.colour = "green";
}

function draw() {
  michael.move();
  katharine.move();
  object.move();

  michael.display();
  katharine.display();
  object.display();
}
