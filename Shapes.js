class Shapes {
  constructor(shape, startingPos) {
    this.shape = shape;
    this.currentPos = startingPos;
    this.blocks = [];
    for (var pos of shape.blockPositions) {
      this.blocks.push(new Block(p5.Vector.add(startingPos, pos), shape.color));
    }
  }

  draw() {
    for (var block of this.blocks) {
      block.draw();
    }
  }

  moveLeft(){
    for (var block of this.blocks){
      block.moveLeft();
    }
    this.currentPos.x -= 1;
  }

  moveRight(){
    for (var block of this.blocks){
      block.moveRight();
    }
    this.currentPos.x += 1;
  }

  moveDown() {
    if (this.currentPos.y == grid[19][0].pos.y){
      return; // DOES NOT DROP INTO THE VOID HUGGGEEEEEE!!!! Come back to this you need to figure out collision logic.
    }
    console.log("GRID ROW " + grid[19][0].pos);
    this.currentPos.y += 1;
    console.log("UPDATE " + this.currentPos);
    for (var block of this.blocks) {
      block.moveDown();
    }
  }
  // WHAT THE HELL IS HAPPENNNNNNINNNNGGGGGGG AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH YESSSSSSSSS YESSSSS
  // who knew rotating a damn block would be so hard.
  rotateShape() {
    for (let i = 0; i < this.blocks.length; i++) {
      let startingPos = this.shape.blockPositions[i];
      let rotationPoint = this.shape.rotationPoint;
      let relativePoint = p5.Vector.sub(startingPos, rotationPoint);
      let rotatedPoint = relativePoint.rotate(Math.PI / 2);
      let newPosition = p5.Vector.add(rotationPoint, rotatedPoint);
      this.shape.blockPositions[i] = newPosition;
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
    rotationPoint: createVector(1.5, 0.5),
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
