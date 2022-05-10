class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ship = new Player(300,225,50,50);
    this.shot = new Shoot(320,255,20,20)
    this.enemies = []
    this.intervalDraw = setInterval   
    this.intervalCreate = setInterval
    this.intervalCrash = setInterval
    this.posShipX = 0
    this.addd=0
    this.add =0
    this.count=0
  }
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {        
          case 'ArrowLeft':               
            this.ship.moveLeft();
            this.shot.moveLeft();        
          break;
          case 'ArrowRight':
            this.ship.moveRight();
            this.shot.moveRight();
          break;
          case 'ArrowUp':
            this.ship.moveUp();
          break;
          case 'ArrowDown':
            this.ship.moveDown();
          break;
          case 'Space':
            this.shot._clearInter()
            this.shot.shotNow(this.posShipX);
          default:       
      } 
    });
  } 
  _createEnemies(){    
    const newEnemies= new Enemies(1400,100,70,70)
    this.enemies.push(newEnemies)
    this.enemies.forEach((ele)=>{
    })
  } 
   _drawShot(x){
    this.ctx.fillStyle="yellow"
    this.ctx.fillRect(this.shot.x,this.shot.y=this.ship.y+15,this.shot.width,this.shot.height); 
  }  
  _drawEnemies(){
    this.enemies.forEach((enenmy)=>{
      this.ctx.fillStyle="blue"
    this.ctx.fillRect(enenmy.x,enenmy.y,enenmy.width,enenmy.height)
  }) 
    }
   _drawPlayer(){     
    this.ctx.fillStyle="red"    
    this.ctx.fillRect(this.ship.x,this.ship.y,this.ship.width,this.ship.height);
    this.posShipX =this.ship.x   
  }   
  _colosions(){
     this.enemies.forEach((ene)=>{
         if(this.shot.x >= ene.x 
          && this.shot.x + this.shot.width < ene.x + ene.width &&
          this.shot.y +20 >= ene.y && this.shot.y -20 + this.shot.height < ene.y + ene.height
          ){            
           let index =this.enemies.indexOf(ene)
            this.enemies.splice(index,1)
            this.count++ 
          }
         }) 
  }
  _scores(){
    this.ctx.strokeStyle="red"
    this.ctx.font = "20px Courier New";
    this.ctx.strokeText(`Destroyed ships : ` +this.count ,20, 50);
  }
  _update() {
    this.ctx.clearRect(0,0,1400,600);   
    this._drawShot()     
    this._drawPlayer()     
    this._drawEnemies() 
    this._colosions()   
    this._scores() 
    this.add=0
    this.intervalDraw=setInterval(()=>{
      this.add++     
      if(this.add < this.enemies.length){
         this.enemies[this.add]._speed()          
      }
    },2000)     
    window.requestAnimationFrame(() => this._update());  
  }    
  start() {   
    this._assignControls();
    this._update();    
    this.intervalCreate=setInterval(()=>{
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