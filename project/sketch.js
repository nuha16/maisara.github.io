// Nuha Maisara
// Space Shooter Game

let darkSky, spaceship, rock, littleLego, startBttn, startBttn2;

let state = "start";

let bullets = [];
let obstacles = [];

function preload() {
  // images
  darkSky = loadImage("images/darkSky.PNG");
  spaceship = loadImage("images/spaceship.png");
  rock = loadImage("images/rock1.png");
  startBttn = loadImage("images/start button.png");
  startBttn2 = loadImage("images/start button 2.png");
  
  // fonts
  littleLego = loadFont("fonts/littlelego.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  obstacle();

  // button
  startButton = new Button(width/2, height/1.5, width/4, height/4, startBttn, startBttn2);
}

class Button {
  constructor(x, y, width, height, img, img2) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.img2 = img2;
  }

  display() {
    if (this.isInside(mouseX, mouseY)) {
      image(this.img2, this.x, this.y, this.width, this.height);
    }
    else {
      image(this.img, this.x, this.y, this.width, this.height);
    }
  }
  
  isInside(x, y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide && y > topSide && y < bottomSide;
  }
}


function draw() {
  if (state === "start") {
    startScreen();
  }

  if (state === "game screen") {
    gameScreen();
  }
  if (state === "game over") {
    gameOver();
  }

}

function startScreen() {
  imageMode(CENTER);

  // background
  image(darkSky, width/2, height/2, width*0.9999, height*1.01);

  // start button
  fill("black");
  startButton.display();
  textFont(littleLego);
  textSize(70);
  text("START", width/2.45, height/1.45);
  
  // title
  fill("white");
  textFont(littleLego);
  textSize(100);
  text("SPACE SHOOTER", width/6, height/2.5);
}

function gameScreen() {
  imageMode(CENTER);
  rectMode(CENTER);

  // background
  image(darkSky, width/2, height/2, width*0.9999, height*1.01);
  
  // bullets
  for (let bullet of bullets){
    fill("#FEC600");
    noStroke();
    bullet.y -= 4;
    rect(bullet.x, bullet.y, width/55, height/30);
  }
  
  // obstacles
  for (let rockObstacle of obstacles) {
    rockObstacle.y += 1;
    image(rock, rockObstacle.x, rockObstacle.y, width/18, height/11);
    if (rockObstacle.y > height){
      state = "game over";
    }
  }

  // making bullets and obstacles disappear
  for (let rockObstacle of obstacles) {
    for (let bullet of bullets) {
      if (dist(rockObstacle.x, rockObstacle.y, bullet.x, bullet.y)<10){
        obstacles.splice(obstacles.indexOf(rockObstacle), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
      }
    }
  }

  // player
  image(spaceship, mouseX, height/1.2, width/11, height/5);
}

function obstacle() {
  for (let i = 0; i<100; i++) {
    let rockObstacle = {
      x: random(0, width),
      y: random(-10000, 0)
    };
    obstacles.push(rockObstacle);
  }
}

function gameOver() {
  clear();
  imageMode(CENTER);

  // background
  image(darkSky, width/2, height/2, width*0.9999, height*1.01);

  // game over
  fill("white");
  textFont(littleLego);
  textSize(100);
  text("GAME OVER", width/4, height/2.5);
}

function mousePressed() {
  // changing states
  if (startButton.isInside(mouseX, mouseY)) {
    state = "game screen";
  }

  // bullet
  let bullet = {
    x: mouseX,
    y:height/1.2
  };
  bullets.push(bullet);
}