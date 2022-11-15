// fireworks oop

class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.colour = "red";
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  display(){
    fill(this.colour);
    stroke(this.colour);
    circle(this.x, this.y. this.diameter);
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i=0; 1<theFireworks.length; i++){
    theFireworks[i].move();
    theFireworks[i].display();
  }
}

function mousePressed() {
  for (let i=0; i < 100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}