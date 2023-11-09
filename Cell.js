class Cell{
    constructor(pos){
        this.pos = pos;
    }

    draw(){
        fill('white');
        stroke(0);
        strokeWeight(1);
        rect(this.pos.x * BLOCK_SIZE, this.pos.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
}