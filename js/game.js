class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ship = new Player(300,225,50,50);
    this.shoot = new Shoot(300,255,20,20)
    this.enemies = []
    this.intervalDraw=setInterval   
    this.posShipX = 0
  }
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {        
          case 'ArrowLeft':      
          
            this.ship.moveLeft();
             this.shoot.moveLeft();
        
          break;
          case 'ArrowRight':
            this.ship.moveRight();
            this.shoot.moveRight();

          break;
          case 'ArrowUp':
            this.ship.moveUp();
          break;
          case 'ArrowDown':
            this.ship.moveDown();
            break;
            case 'Space':
              this.shoot.shootNow(this.posShipX);
          default:       
      } 
    });
  }
  _createEnemies(){
    const newEnemies= new Enemies(1400,100,70,70)
    this.enemies.push(newEnemies)
  }
   _drawShoot(x){
    this.ctx.fillStyle="black"
    this.ctx.fillRect(this.shoot.x,this.shoot.y=this.ship.y,this.shoot.width,this.shoot.height); 
  }
  _drawPlayer(){
    this.ctx.fillStyle="red"    
    this.ctx.fillRect(this.ship.x,this.ship.y,this.ship.width,this.ship.height);
    this.posShipX =this.ship.x   
  }
  _drawEnemies(){
    this.enemies.forEach((enenmy)=>{
      this.ctx.fillStyle="blue"
    this.ctx.fillRect(enenmy.x,enenmy.y,enenmy.width,enenmy.heigth)
  }) 
  }
  _update() {
    this.ctx.clearRect(0,0,1400,600);        
    this._drawPlayer()     
    this._drawEnemies()  
    this._drawShoot() 
    let add = 0
    this.intervalDraw=setInterval(()=>{
      add++     
      if(add < this.enemies.length){
         this.enemies[add]._speed() 
         console.log(add)
      }
  },2000)
    window.requestAnimationFrame(() => this._update());  
  }  
  start() {
    this._assignControls();
    this._update();    
    setInterval(()=>{
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