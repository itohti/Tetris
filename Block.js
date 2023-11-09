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
    rect(
      position.x * BLOCK_SIZE,
      position.y * BLOCK_SIZE,
      BLOCK_SIZE,
      BLOCK_SIZE
    );
  }

  moveLeft() {
    this.currentPos.x -= 1;
  }

  moveRight() {
    this.currentPos.x += 1;
  }

  moveDown() {
    this.currentPos.y += 1;
  }

  checkCollision(position) {
    for (var row of game.grid) {
      for (var cell of row) {
        if (cell.isPlaced) {
          if (position.x == cell.pos.x && position.y == cell.pos.y) {
            console.log("hit other piece!");
            return true;
          }
        }
      }
    }
    if (position.y > game.grid[19][0].pos.y) {
        console.log("hit bottom!");
      return true;
    }
    if (position.x < game.grid[0][0].pos.x){
      console.log("hit edge");
      return true;
    }
    else if (position.x > game.grid[0][9].pos.x){
      console.log("hit edge");
      return true;
    }
    return false;
  }
}
