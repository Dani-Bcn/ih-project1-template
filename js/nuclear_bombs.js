class Nuclear{
    constructor(x,y,widht,height){
        this.x = Math.floor(Math.random()*(1360 - 1400 + 1) +1400 );
        this.y = Math.floor(Math.random(0)*470);
        this.width = widht
        this.height = height
        this.intervalSpeed = undefined
    }
    _speedNuclear(){
        let a = 0
        this.intervalSpeed=setInterval(()=>{
            a++           
            if(a > 1400 ){
                clearInterval(this.intervalSpeed)               
            }
            this.x -=1
            },250)
    }
}
