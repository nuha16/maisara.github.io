// Walker OOP array

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colour = "red";
    this.speed = 5;
    this.radius = 3;
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

let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnWalker();
}

function draw() {
  for (let i=0; i < walkerArray.length; i++){
    walkerArray[i].move();
    walkerArray[i].display();
  }
}

function keyPressed(){
  spawnWalker();
}

function spawnWalker(){
  let michael = new Walker(random(width), random(height));
  let someColour = color(random(255), random(255), random(255));
  michael.colour = someColour;
  walkerArray.push(michael);
}