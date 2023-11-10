class Shapes {
  constructor(shape, startingPos) {
    this.shape = shape;
    this.currentPos = startingPos;
    this.blocks = [];
    for (var pos of shape.blockPositions) {
      this.blocks.push(new Block(p5.Vector.add(startingPos, pos), shape.color));
    }
  }

  getPositions() {
    let positions = [];
    for (var block of this.blocks) {
      positions.push(block.currentPos);
    }
    return positions;
  }

  draw() {
    for (var block of this.blocks) {
      block.draw();
    }
  }

  canMoveTo(dirX, dirY) {
    let noCollision = true;
    for (var block of this.blocks) {
      let futurePosition = createVector(
        block.currentPos.x + dirX,
        block.currentPos.y + dirY
      );
      if (block.checkCollision(futurePosition)) {
        if (dirY == 1){
            game.mergeBlock();
            setShapes();
            currentShape = game.dequeue();
            game.queue(game.getRandomShape());
        }
        noCollision = false;
      }
    }
    return noCollision;
  }

  moveLeft() {
    if (this.canMoveTo(-1, 0)) {
      for (var block of this.blocks) {
        block.moveLeft();
      }
      this.currentPos.x -= 1;
    }
  }

  moveRight() {
    if (this.canMoveTo(1, 0)) {
      for (var block of this.blocks) {
        block.moveRight();
      }
      this.currentPos.x += 1;
    }
  }

  moveDown() {
    if (this.canMoveTo(0, 1)) {
      for (var block of this.blocks) {
        block.moveDown();
      }
      this.currentPos.y += 1;
    }
  }
  // WHAT THE HELL IS HAPPENNNNNNINNNNGGGGGGG AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH YESSSSSSSSS YESSSSS
  // who knew rotating a damn block would be so hard.
  rotateShape() {
    let futurePositions = [];
    let newPositions = [];
    let notCollide = true;
    for (let i = 0; i < this.blocks.length; i++) {
      let startingPos = this.shape.blockPositions[i];
      let rotationPoint = this.shape.rotationPoint;
      let relativePoint = p5.Vector.sub(startingPos, rotationPoint);
      let rotatedPoint = relativePoint.rotate(Math.PI / 2);
      let newPosition = p5.Vector.add(rotationPoint, rotatedPoint);
      newPositions.push(newPosition);
      futurePositions.push(p5.Vector.add(this.currentPos, newPosition));
    }

    // checks if the rotation will collide with anything.
    for (let i = 0; i < futurePositions.length; i++) {
      if (this.blocks[i].checkCollision(futurePositions[i])) {
        notCollide = false;
      }
    }

    if (notCollide) {
      for (let i = 0; i < this.blocks.length; i++) {
        this.shape.blockPositions[i] = newPositions[i];
        this.blocks[i].currentPos = futurePositions[i];
      }
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
