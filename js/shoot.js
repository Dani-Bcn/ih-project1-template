class Shoot{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.intervalShot = setInterval;
        this.add = 0;
        this.avancedLeft=1      
    }    
      moveLeft(){     
        this.x -= 20;
        this.x <=0 ? this.x = 0 :null; 
    }
    moveRight(){
        this.x += this.avancedLeft;
        this.x + this.width >=1300 ? this.avancedLeft = 0 :this.avancedLeft=20;
    }
    _clearInter(){
        clearInterval(this.intervalShot)
    }
    shotNow(x){ 
        document.getElementById("audiocrash").play()  
        this.add=0
        this.intervalShot=setInterval(()=>{
            this.add++
            this.x +=10
            if(this.add > 150){
                this.x=x+40
                clearInterval(this.intervalShot)            
            }                       
        })
    }
}



