class Shoot{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.intervalShoot = setInterval;
        this.add = 0;
        this.avancedLeft=10git status
        
    }    
      moveLeft(){     
        this.x -= 10;
        this.x <=0 ? this.x = 0 :null;
    }
    moveRight(){
        this.x += this.avancedLeft;
        this.x + this.width >=1300 ? this.avancedLeft = 0 :this.avancedLeft=10;
    }


    shootNow(x){
    this.add=0
         this.intervalShoot=setInterval(()=>{
        console.log(x)
        this.add++
        if(this.add > 200){
            clearInterval(this.intervalShoot)
            this.x=x
        }            
            this.x +=10
        },1)
    }

}



