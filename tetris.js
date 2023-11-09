let testShape;
var canvasWidth = 800;
var canvasHeight = 800;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  setShapes();
  testShape = new Shapes(S, createVector(20, 1));
}
// testing
function draw() {
  background(220);
  testShape.draw();
  frameRate(1);
  testShape.rotateShape();
}
