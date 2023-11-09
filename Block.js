var BLOCK_SIZE = 20;
class Block {
  constructor(startingPos, color) {
    this.startingPos = startingPos;
    this.currentPos = startingPos;
    this.color = color;
  }

  draw() {
    let position = this.currentPos;
    fill(this.color);
    stroke(0);
    strokeWeight(3);
    rect(position.x * BLOCK_SIZE, position.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  }

  moveDown() {
    this.currentPos.y += BLOCK_SIZE;
  }
}
