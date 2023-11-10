let game;
let currentShape;
var canvasWidth = 800;
var canvasHeight = 800;
var timer;
var prevTimer;
const TOP_ARROW = 38;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  timer = 0;
  prevTimer = timer;
  setShapes();
  game = new GameManager(square, L, reverseL, S, reverseS, T, tetrisGodPiece);
  game.fillGrid();
  game.fillShapes();
  currentShape = game.dequeue();
  game.queue(game.getRandomShape());
  setInterval(elapseTime, 500);
}

function elapseTime() {
  timer++;
}

function keyPressed() {
  if (keyCode == TOP_ARROW) {
    currentShape.rotateShape();
  } else if (keyCode == LEFT_ARROW) {
    currentShape.moveLeft();
  } else if (keyCode == RIGHT_ARROW) {
    currentShape.moveRight();
  } else if (keyCode == DOWN_ARROW) {
    currentShape.moveDown();
  }
  game.updateGrid();
  console.log(keyCode);
}

function draw() {
  game.updateGrid();
  game.printGrid();
  console.log("---------------");
  background(220);
  for (let i = 0; i < game.grid.length; i++) {
    for (let j = 0; j < game.grid[i].length; j++) {
      game.grid[i][j].draw();
    }
  }
  currentShape.draw();
  if (timer != prevTimer) {
    currentShape.moveDown();
    prevTimer = timer;
  }
}
