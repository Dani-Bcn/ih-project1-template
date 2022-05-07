class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.nave=new Player(100,100,50,50);
  }
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        
          case 'ArrowLeft':
            console.log(event.code);
           this.nave.moveLeft();
          break;
          case 'ArrowRight':
           this.nave.moveRight();
          break;
          case 'ArrowUp':
          this.nave.moveUp();
          break;
          case 'ArrowDown':
            this.nave.moveDown();
          default:       
      } 
    });
  }

  _drawPlayer(){
    this.ctx.fillRect(this.nave.x,this.nave.y,this.nave.width,this.nave.height);    
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