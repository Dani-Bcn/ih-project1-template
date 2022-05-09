class Player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;    
        this.avancedLeft = 10;
        this.avancedDown =10
    }
    moveLeft(){     
        this.x -= 10;
        this.x <=0 ? this.x = 0 :null;
    }
    moveRight(){
        this.x += this.avancedLeft;
         this.x + this.width >=1300 ? this.avancedLeft = 0 :this.avancedLeft=10;
    }
    moveUp(){
        this.y -= 10;
        this.y  <=0 ? this.y =0  :null;
    }
    moveDown(){      
         this.y += this.avancedDown;
        this.y + this.height >=600 ? this.avancedDown = 0 :this.avancedDown=10;       
    }
}