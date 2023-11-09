let testShape;
let grid;
var canvasWidth = 800;
var canvasHeight = 800;
var timer;
var prevTimer;
const TOP_ARROW = 38;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  timer = 0;
  prevTimer = timer;
  grid = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = new Cell(createVector(j + 15, i));

      grid[i].push(cell);
    }
  }
  setShapes();
  testShape = new Shapes(T, createVector(18, 0));
  setInterval(elapseTime, 1000);
}

function elapseTime() {
  timer++;
}

function keyPressed() {
  if (keyCode == TOP_ARROW) {
    testShape.rotateShape();
  } else if (keyCode == LEFT_ARROW) {
    testShape.moveLeft();
  } else if (keyCode == RIGHT_ARROW) {
    testShape.moveRight();
  }

  console.log(keyCode);
}

function draw() {
  background(220);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].draw();
    }
  }
  testShape.draw();
  if (timer != prevTimer) {
    testShape.moveDown();
    prevTimer = timer;
  }
}
