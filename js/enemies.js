class Enemies{
    constructor(x,y,width,heigth){
        this.x = Math.floor(Math.random()*(1450 - 1400 + 1) +1400 );
        this.y = Math.floor(Math.random(0)*550);
        this.width = width;
        this.heigth = heigth;
        this.intervalSpeed=undefined;        
    }    
    _speed(){
        let a =0
        this.intervalSpeed=setInterval(()=>{
            a++           
            if(a > 1400 ){
                clearInterval(this.intervalSpeed)               
            }
            this.x -=0.5
            },5000)
    }   

}