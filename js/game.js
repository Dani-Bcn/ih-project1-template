class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ship=new Player(100,225,50,50);
  }
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {        
          case 'ArrowLeft':
          console.log(event.code);
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

  _drawPlayer(){
    this.ctx.fillRect(this.ship.x,this.ship.y,this.ship.width,this.ship.height);    
  }

  _update() {
    this.ctx.clearRect(0,0,1000,1300);
    window.requestAnimationFrame(() => this._update());
    this._drawPlayer()    
  }
  start() {
    this._assignControls();
    this._update();

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