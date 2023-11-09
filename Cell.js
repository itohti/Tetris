class Cell {
  constructor(pos) {
    this.pos = pos;
    this.currentBlock = false;
    this.isPlaced = false;
    this.color = 'white';
  }

  draw() {
    fill(this.color);
    stroke(0);
    strokeWeight(1);
    rect(
      this.pos.x * BLOCK_SIZE,
      this.pos.y * BLOCK_SIZE,
      BLOCK_SIZE,
      BLOCK_SIZE
    );
  }

  toString() {
    if (this.currentBlock) {
      return "#";
    }
    else if (this.isPlaced){
        return "@";
    }
    else{
        return " ";
    }
  }
}
