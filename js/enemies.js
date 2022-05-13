class Enemies{
    constructor(x,y,width,height){
        this.x = Math.floor(Math.random()*(1360 - 1400 + 1) +1400 );
        this.y = Math.floor(Math.random(0)*470);
        this.width = width;
        this.height = height;
        this.intervalSpeed=undefined;         
    }    
    _speed(){ 
        let a =0
        this.intervalSpeed=setInterval(()=>{
            a++           
            if(a > 1400 ){
                clearInterval(this.intervalSpeed)               
            }
            this.x -=1
            },250)
    }   
}