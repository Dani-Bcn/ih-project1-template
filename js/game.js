class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ship=new Player(100,225,50,50);
   
    this.intervalSpeed= undefined
    this.createInterval=undefined
    this.enemies=[]
  } 
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {        
          case 'ArrowLeft':
       
            this.ship.moveLeft();           
          break;
          case 'ArrowRight':
           this.ship.moveRight();
          break;
          case 'ArrowUp':
          this.ship.moveUp();
          break;
          case 'ArrowDown':
            this.ship.moveDown();            
          default:       
      } 
    });
  } 
  _createEnemies(){
    const newEnemies = new Enemies(70,70)
    this.enemies.push(newEnemies)    
    console.log(this.enemies)
  } 
 _drawEnemies(){ 
      this.enemies.forEach((enemy)=>{
     this.ctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.heigth)    
   })    
  }
  _drawPlayer(){
    this.ctx.fillRect(this.ship.x,this.ship.y,this.ship.width,this.ship.height);    
  }
  _update() {
    this.ctx.clearRect(0,0,1400,1400);        
    this._drawEnemies()   
    this._drawPlayer()
    let add = 0
    this.intervalSpeed=setInterval(()=>{
      if(add < this.enemies.length){
        this.enemies[add]._speed()
        add++
        }
      },1000)
       window.requestAnimationFrame(() => this._update());   
    }  
  start() {
    this._assignControls();
    this._update();
    this.createInterval=setInterval(()=>{
      this._createEnemies()  
    },2000) 
  }
}
let inc =0
setInterval(()=>{
    inc++
   if(inc%2===0){
        document.querySelector(".press").style.color=" rgb(245, 222, 79,0)" 
        document.querySelector(".press").style.textShadow="0px 0px,0px black" 
   }else{
        document.querySelector(".press").style.color=" rgba(245, 222, 79,1)"
        document.querySelector(".press").style.textShadow="0px 0px,10px black" 
   }   
},700)