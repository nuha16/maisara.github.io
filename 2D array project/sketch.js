// 2nd project
// Nuha Maisara
// 28/10/22

// Extra for Experts:
// 

let state = "start";
let ROWS = 15;
let COLS = 15;
let grid, cellWidth, cellHeight, shovel, treasure, treasures, dirt, holeInGround;
let fallingCircleY = [];


// 503px width, 181px height (three treasure chests from the beginning)

function preload(){
  shovel = loadImage("images/shovel.png");
  treasure = loadImage("images/treasure.png");
  dirt = loadImage("images/dirt.png");
  holeInGround = loadImage("images/hole.png");
  treasures = loadImage("images/treasures.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // how many columns and rows there are
  cellWidth = width/COLS;
  cellHeight = height/ROWS;

  // randomizing grid
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  startScreen();

  // draw grid
  // displayGrid(grid);
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  // digging ish
  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function startScreen() {
  if (state === "start"){
    background("#37640a");
    image(treasures, width/2, height/3);
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      // light grass
      if (grid[y][x] === 0) {
        fill("#79d220");
      }

      // dark grass
      else if (grid[y][x] === 1) {
        fill("#37640a");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

// falling circle

// goes in setup function
function settingWhereCircleFallsFrom() {
  for (let i = 0; i < 25; i++) {
    fallingCircleY[i] = random(height);
  }
}

// goes in draw function
function fall() {
  for (let i = 0; i < fallingCircleY.length; i++) {
    let fallingCircleX = width * i / fallingCircleY.length;
    circle(fallingCircleX, fallingCircleY[i], 25);

    fallingCircleY[i]++;
    
    if (fallingCircleY[i] > height) {
      fallingCircleY[i] = 0;
    }
  }
}