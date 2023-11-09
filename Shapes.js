class Shapes {
  constructor(shape, startingPos) {
    this.shape = shape;
    this.currentPos = startingPos;
    this.blocks = [];
    for (var pos of shape.blockPositions) {
      this.blocks.push(new Block(pos.add(startingPos), shape.color));
    }
  }

  draw() {
    for (var block of this.blocks) {
      block.draw();
    }
  }

  moveDown() {
    for (var block of this.blocks) {
      block.moveDown();
    }
  }

  rotateShape(){
    for (let i = 0; i < this.blocks.length; i++){
        let startingPos = this.shape.blockPositions[i];
        let rotationPoint = this.shape.rotationPoint;
        let relativePoint = p5.Vector.sub(startingPos, rotationPoint);
        let rotatedPoint = relativePoint.rotate(Math.PI / 2);
        let newPosition = p5.Vector.add(rotationPoint, rotatedPoint);
        this.blocks[i].currentPos = p5.Vector.add(this.currentPos, newPosition);
    }
  }
}

let square;
let L;
let reverseL;
let S;
let reverseS;
let T;
let tetrisGodPiece;

function setShapes() {
  square = {
    blockPositions: [
      createVector(0, 0),
      createVector(0, 1),
      createVector(1, 0),
      createVector(1, 1),
    ],
    rotationPoint: createVector(0.5, 0.5),
    color: "yellow",
  };

  L = {
    blockPositions: [
      createVector(0, 0),
      createVector(1, 0),
      createVector(2, 0),
      createVector(2, -1),
    ],
    rotationPoint: createVector(1, 0),
    color: "orange",
  };

  reverseL = {
    blockPositions: [
      createVector(0, 0),
      createVector(-1, 0),
      createVector(-2, 0),
      createVector(-2, -1),
    ],
    rotationPoint: createVector(-1, 0),
    color: "blue",
  };

  T = {
    blockPositions: [
      createVector(0, 0),
      createVector(1, 0),
      createVector(1, -1),
      createVector(2, 0),
    ],
    rotationPoint: createVector(1, 0),
    color: "purple",
  };

  tetrisGodPiece = {
    blockPositions: [
      createVector(0, 0),
      createVector(1, 0),
      createVector(2, 0),
      createVector(3, 0),
    ],
    rotationPoint: createVector(1.5, 0),
    color: "lightblue",
  };

  S = {
    blockPositions: [
      createVector(0, 0),
      createVector(1, 0),
      createVector(1, -1),
      createVector(2, -1),
    ],
    rotationPoint: createVector(1, 0),
    color: "green",
  };

  reverseS = {
    blockPositions: [
      createVector(0, 0),
      createVector(-1, 0),
      createVector(-1, -1),
      createVector(-2, -1),
    ],
    rotationPoint: createVector(-1, 0),
    color: "red",
  };
}
