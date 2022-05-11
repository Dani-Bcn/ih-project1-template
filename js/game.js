class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.ship = new Player(300,225,160,120);
    this.shot = new Shoot(325,250,70,50)
    this.enemies = []
    this.life = []
    this.intervalDraw = undefined   
    this.intervalCreate = undefined
    this.intervalCrash = undefined
    this.intervalFondo =  undefined
    this.intervalDrawLife = undefined
    this.intervalCreateLife = undefined
    this.posShipX = 0
    this.addd = 0
    this.add = 0
    this.countShipsDown = 0 
    this.shipLife = 5
    this.i=0
    this.countLife= 0
  }
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {         
          case 'KeyA':               
            this.ship.moveLeft();
            this.shot.moveLeft();        
          break;
          case 'KeyD':
            this.ship.moveRight();
            this.shot.moveRight();
          break;
          case 'KeyW':
            this.ship.moveUp();
          break;
          case 'KeyS' || 'ArrowDown':
            this.ship.moveDown();
          break;          
          case 'Space':
            this.shot._clearInter()
            this.shot.shotNow(this.posShipX);
          default:       
      } 
    });
  } 
  _scores(){   
    const fondo =new Image()
    fondo.src="../img/cielo.png"  
    this.intervalFondo=setInterval(()=>{
      this.i-=0.1    
      if(this.i <= -3000){
       
        this.i=0        
      }     
    },1000)    
    this.ctx.drawImage(fondo,this.i,0,4600,600);
    this.ctx.strokeStyle="yellow"
    this.ctx.font = "20px Courier New";
    this.ctx.strokeText("Life : " + this.shipLife ,500,50)
    this.ctx.strokeText(`Destroyed ships : ` +this.countShipsDown ,20, 50);    
  }
  _createEnemies(){    
    const newEnemies= new Enemies(1400,100,170,130)
    this.enemies.push(newEnemies)
  } 
  _createLife(){
    const newlife =new ExtraLife(1400,100,80,50)
    this.life.push(newlife)
  }
    _drawLife(){
    this.life.forEach((lifes)=>{
    const heart =new Image()
     heart.src="../img/life.png"   
    this.ctx.drawImage(heart,lifes.x,lifes.y,lifes.width,lifes.height); 
    })
  } 
   _drawShot(x){
    const bullet =new Image()
     bullet.src="../img/bala.png"   
    this.ctx.drawImage(bullet,this.shot.x,this.shot.y=this.ship.y+30,this.shot.width,this.shot.height); 
  }  
  _drawEnemies(){
    this.enemies.forEach((enenmy)=>{
     const enemy =new Image()
     enemy.src="../img/nave3.png"
    this.ctx.drawImage(enemy,enenmy.x,enenmy.y,enenmy.width,enenmy.height)
  }) 
    }
   _drawPlayer(){     
     const nave =new Image()
     nave.src="../img/nave2.png"
    this.ctx.drawImage(nave, this.ship.x, this.ship.y,this.ship.width,this.ship.height);    
    this.posShipX =this.ship.x   
  }     
  _colisionsShot(){
     this.enemies.forEach((ene)=>{
         if(this.shot.x >= ene.x 
          && this.shot.x + this.shot.width < ene.x + ene.width &&
          this.shot.y +10 >= ene.y && this.shot.y -10 + this.shot.height < ene.y + ene.height
          ){            
           let index =this.enemies.indexOf(ene)
            this.enemies.splice(index,1)
            this.countShipsDown++           
          }        
    }) 
  }
  _savedEnemies(){
      this.enemies.forEach((ene)=>{
          console.log(ene.x)
                if(ene.x < 0  && ene.x >-20){
                    this.shipLife--
                    this.shipLife===0?this._gameOver():null
                    ene.x=-50
                }       
      })
  }
  _colisionsShip(){
    this.enemies.forEach((ene)=>{
         if(this.ship.x +this.ship.width -50>= ene.x 
          && this.ship.x< ene.x + ene.width &&
          this.ship.y  >= ene.y  - 100 &&  this.ship.y < ene.y +100
          ){
            let index =this.enemies.indexOf(ene)
            this.enemies.splice(index,1)
            this.countShipsDown++ 
            this.shipLife=0
            if(this.shipLife===0){
              this._gameOver()
            }
          }  
  })
} 
  _update() {    
    this.ctx.clearRect(0,0,1400,600);   
    this._scores() 
    this._drawShot()     
    this._drawPlayer()    
    this._drawLife() 
    this._drawEnemies() 
    this._colisionsShip()
    this._colisionsShot()  
    this._savedEnemies()   
    this.add = 0
    this.intervalDraw=setInterval(()=>{
      this.add++     
      if(this.add < this.enemies.length){
         this.enemies[this.add]._speed()          
      }
    },100)   
    this.countLife = 0  
     this.intervalDrawLife=setInterval(()=>{
      this.countLife++     
      if(this.countLife < this.life.length){
         this.life[this.countLife]._speedLife()          
      }
    },100)     
    window.requestAnimationFrame(() => this._update());  
  }    
  start() {   
    this._assignControls();
    this._update();    
    this.intervalCreate=setInterval(()=>{
      this._createEnemies()
    },1500)  
    this.intervalCreateLife=setInterval(()=>{
      this._createLife()
      console.log(this.life)
    },20000) 
  }
  _gameOver(){
    document.querySelector("#canvas").style.display="none"
    this.ctx.clearRect(0,0,1400,1000)
    document.querySelector(".show").style.display="grid"
    location.reload()
  }    
}
