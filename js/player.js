class Player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;    
        this.avancedLeft = 50;
        this.avancedDown = 30 
    }
    moveLeft(){      
        this.x -= 20;
        this.x <=0 ? this.x = 0 :null;
    }
    moveRight(){
        this.x += this.avancedLeft;
        this.x + this.width >=1800 ? this.avancedLeft = 0 :this.avancedLeft=50; 
    }
    moveUp(){
        this.y -= 20;
        this.y  <=0 ? this.y =0  :null;
    }
    moveDown(){      
        this.y += this.avancedDown;
        this.y + this.height >=730 ? this.avancedDown = 0 :this.avancedDown=30;       
    } 
}