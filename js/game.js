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