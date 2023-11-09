class GameManager {
  constructor(square, L, reverseL, S, reverseS, T, tetrisGodPiece) {
    this.shapeNames = [square, L, reverseL, S, reverseS, T, tetrisGodPiece];
    this.grid = [
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
    this.shapes = []; // this will be a queue of shapes.
  }

  queue(shape){
    this.shapes.push(shape);
  }

  dequeue(){
    let shape = this.shapes[0];
    for (let i = 0; i < this.shapes.length - 1; i++){
        this.shapes[i] = this.shapes[i + 1];
    }
    return shape;
  }

  getRandomShape(){
    let randomNumber = Math.floor(Math.random() * 7);
    return new Shapes(this.shapeNames[randomNumber], createVector(18, 0));
  }

  fillShapes(){
    for (let i = 0; i < 5; i++){
        this.queue(this.getRandomShape());
    }
  }

  fillGrid() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = new Cell(createVector(j + 15, i));

        this.grid[i].push(cell);
      }
    }
  }

  clearCurrentBlock() {
    for (var row of this.grid) {
      for (var cell of row) {
        if (!cell.isPlaced) {
          cell.currentBlock = false;
        }
      }
    }
  }

  updateGrid() {
    this.clearCurrentBlock();
    for (var position of currentShape.getPositions()) {
      for (var row of this.grid) {
        for (var cell of row) {
          if (cell.pos.x == position.x && cell.pos.y == position.y) {
            cell.currentBlock = true;
          }
        }
      }
    }
  }

  mergeBlock(){
    for (var row of this.grid){
        for (var cell of row){
            if (cell.currentBlock){
                cell.isPlaced = true;
                cell.color = currentShape.blocks[0].color; // gets one of the blocks color.
                cell.currentBlock = false;
            }
        }
    }
  }

  printGrid() {
    for (var row of this.grid) {
      let rowString = "";
      for (var cell of row) {
        rowString += cell.toString() + ",";
      }
      console.log(rowString);
    }
  }
}
