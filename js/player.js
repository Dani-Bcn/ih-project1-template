class Player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;        
    }
    moveLeft(){
        this.x -= 10;
    }
    moveRight(){
        this.x += 10;
    }
    moveUp(){
        this.y -= 10;
    }
    moveDown(){
        this.y += 10;
    }
}