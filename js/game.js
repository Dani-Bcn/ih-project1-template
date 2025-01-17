class Game{
  constructor(ctx,selectship) {
    console.log(selectship)
    this.ctx = ctx;
    this.ship = new Player(300,225,160,120);
    this.shot = new Bullet(325,250,70,50)
    this.nave = new Image()
    this.bullet =new Image()
    this.nuclearScore =new Image()
    this.enemies = []
    this.life = []
    this.shipLife = []
    this.heart = [1,2,3,4]
    this.intervalDrawEnemies = undefined   
    this.intervalCreatenemies = undefined
    this.intervalCrash = undefined
    this.intervalFondo =  undefined
    this.intervalDrawLife = undefined
    this.intervalCreateLife = undefined
    this.intervalCreatenuclear = undefined 
    this.intervalBooms = undefined
    this.posShipX = 0
    this.addd = 0
    this.countEnemies = 0
    this.countShipsDown = 0     
    this.i = 0
    this.countLife= 0    
    this.explo = undefined
    this.positionEnemiesX = 0
    this.positionEnemiesY = 0 
    this.selectship = selectship
  }
  _assignControls() {
    // Controles del teclado

    
    document.addEventListener('keydown', (event) => { 
      switch (event.code) {         
          case 'ArrowLeft':               
            this.ship.moveLeft();
            this.shot.moveLeft();  
            console.log(this.selectship)      
          break;
          case 'ArrowRight':
            this.ship.moveRight();
            this.shot.moveRight();
          break;
          case 'ArrowUp':
            this.ship.moveUp();
          break;
          case 'ArrowDown' || 'ArrowDown':
            this.ship.moveDown();
          break;          
          case 'Space':
            this.shot._clearInter()
            this.shot.shotNow(this.posShipX);
          default:       
      } 
    });
  }      
  _createEnemies(){    //Creamos enemigos y los almacenanos en una array
      const newEnemies= new Enemies(1400,100,170,130)
      this.enemies.push(newEnemies)
  } 
  _createLife(){     //Creamos los corazones y los alamacenamos un un array
      const newLife =new ExtraLife(1400,100,80,50)
      this.life.push(newLife)
  }
    _drawLife(){  //pintamos los corazones 
       this.life.forEach((lifes)=>{
       const heart =new Image()
       heart.src="../img/life.png"   
       this.ctx.drawImage(heart,lifes.x,lifes.y,lifes.width,lifes.height); 
    })
  } 
   _drawShot(x){ //pintamos las balas
        if(this.heart.length < 1 ){
         this.bullet.src="../img/transparencia.png" 
        }else{
           this.bullet.src="../img/bala.png"   
        this.ctx.drawImage(this.bullet,this.shot.x,this.shot.y=this.ship.y+30,this.shot.width,this.shot.height); 
        }     
  }  
    _drawEnemies(){
        this.enemies.forEach((enenmy)=>{
        const enemy =new Image()
        enemy.src="../img/enemy.png"
        this.ctx.drawImage(enemy,enenmy.x,enenmy.y,enenmy.width,enenmy.height)
    }) 
  }  
  //pintar la explosion en pantalla
  _Booms(){  
      let c=0
      this.intervalBooms=setInterval(()=>{
      if( c <= boomsArray.length){
        this.explo=boomsArray[c]
        c++
      }
      },50)
      if(c == boomsArray.length){
        this.explo=undefined
        clearInterval(this.intervalBooms)
        c=0
      }     
    }  
      _drawBooms(){
     if(this.explo){
      if(this.heart.length < 1 ){ //pinta la explosion en la posicion de la nave
         this.ctx.drawImage(this.explo,this.positionShipX,this.positionShipY,200,200)
      }
      //pinta la explosion en la posicion de los enemigos
      this.ctx.drawImage(this.explo,this.positionEnemiesX,this.positionEnemiesY,200,200) 
    }     
  }    
     _colisionsShot(){
      this.enemies.forEach((ene)=>{
          if(this.shot.x >= ene.x 
          && this.shot.x + this.shot.width < ene.x + ene.width 
          && this.shot.y +10 >= ene.y
          && this.shot.y -10 + this.shot.height < ene.y + ene.height
          ){               
          this.positionEnemiesX = ene.x
          this.positionEnemiesY = ene.y         
          this._Booms()      
          document.getElementById("ship_destruct").play()
          let index =this.enemies.indexOf(ene)
          this.enemies.splice(index,1)
          this.countShipsDown++           
        }        
     }) 
  }
   _drawPlayer(){  
      if(this.heart.length < 1 ){
          this.bullet.src="../img/transparencia.png" 
          this.nave.src="../img//transparencia.png"
          this.ctx.drawImage(this.nave, this.ship.x, this.ship.y,this.ship.width,this.ship.height);    
          this.posShipX =this.ship.x 
       }else{
       
          this.nave.src=this.selectship
          this.ctx.drawImage(this.nave, this.ship.x, this.ship.y,this.ship.width,this.ship.height);    
          this.posShipX =this.ship.x   
       }      
  } 
  _scores(){   // pintamos dentro del canvas
    const fondo =new Image()
      fondo.src="../img/cielo.png"  
      this.intervalFondo=setInterval(()=>{
      this.i-=0.1    
      if(this.i <= -3000){       
        this.i=0        
    }     
    },1000)    
      this.ctx.drawImage(fondo,this.i,-200,4400,1000)
      //barra puntos
      this.ctx.strokeStyle="blue"
      this.ctx.strokeText(`Score : ` + this.countShipsDown , 50, 75);  
      this.ctx.font = "30px 'Coiny'";    
      //barra de vida
      let b = 0
      const hearts= new Image()
      hearts.src="../img/life.png"
      this.heart.forEach(()=>{
        b+=50
        this.ctx.drawImage(hearts,500+ b,50,50,25)
      })      
      this.heart.length<=2?this.ctx.strokeStyle="#ff0000":this.ctx.strokeStyle="blue"            
      this.ctx.strokeText("Life : ",400,75)        
  }     
  _savedEnemies(){ //si el enemigo llega al otro lado de la pantalla al player le resta una vida
      this.enemies.forEach((ene)=>{ 
      if(ene.x < 0  && ene.x >-20){
        document.getElementById("ship_saved").play()
        this.heart.pop()
        this.heart.length===0?
        setTimeout(()=>{
          this._gameOver()
        },500)
        :
        null          
        ene.x=-50
      }       
    })
  }
  _colisionsShip(){ // Si el enemigo choca con nosotros resta todas la vida y finaliza en juego
    this.enemies.forEach((ene)=>{
        if(this.ship.x +this.ship.width -50>= ene.x 
        && this.ship.x< ene.x + ene.width 
        && this.ship.y  >= ene.y  - 100 
        && this.ship.y < ene.y +100){      
          document.getElementById("ship_destruct").play()
          this.positionShipX = this.ship.x
          this.positionShipY = this.ship.y - 10// - 10 para que la nave explote en el lugar exacto donde se encuentra        
          this.positionEnemiesX = ene.x
          this.positionEnemiesY = ene.y 
          this._Booms() 
          let index =this.enemies.indexOf(ene)
          this.enemies.splice(index,1)
          this.heart=[]
          if(this.heart.length===0){
            setTimeout(()=>{
            this._gameOver() 
          },500)          
          }
      }  
    })
  } 
  _colisionsLife(){// cuando colisionamos con un corazon nos suma una vida
      this.life.forEach((lifes)=>{
      if(lifes.x <= this.ship.x + this.ship.width 
      &&  this.ship.x< lifes.x + lifes.width 
      &&  lifes.y > this.ship.y - 30    
      &&  lifes.y + lifes.height  < this.ship.y + this.ship.height + 30 ){ 
        this.heart.unshift(this.hearts)    
        document.getElementById("getheart").play()
        let indexLife = this.life.indexOf(lifes)
        this.life.splice(indexLife,1)
      }    
    })}
  _update() {    // fracción de código que se referesca 60 veces por segundo
    this.ctx.clearRect(0,0,1400,600); 
    this._scores() 
    this._drawShot()     
    this._drawPlayer()    
    this._drawLife() 
    this._drawEnemies() 
    this._colisionsShip()
    this._colisionsLife()
    this._colisionsShot() 
    this._savedEnemies() 
    this._drawBooms() 
    //creamos los enemigos 
    this.countEnemies = 0
    this.intervalDrawEnemies=setInterval(()=>{
    this.countEnemies++     
    if(this.countEnemies < this.enemies.length){
         this.enemies[this.countEnemies]._speed()          
    }
    },1500) 
    //creamos los corazones
    this.countLife = 0  
    this.intervalDrawLife=setInterval(()=>{
    this.countLife++     
    if(this.countLife < this.life.length){
        this.life[this.countLife]._speedLife()          
    }
    },3000)     
    window.requestAnimationFrame(() => this._update());  
  }    
  //empieza el juego
  start() {  
      document.getElementById("black_page").style.display="grid"
      document.getElementById("black_page").style.opacity="1"
      setTimeout(()=>{
        document.getElementById("black_page").style.opacity="0"
      },600)
      this._assignControls();
      this._update();    
      this.intervalCreatenemies=setInterval(()=>{
        this._createEnemies()
      },1500)  
      this.intervalCreateLife=setInterval(()=>{
        this._createLife()
      },9000) 
  }
  _gameOver(){     
      const [...musicArray]=document.getElementsByClassName("audio")    
      musicArray.forEach((song)=>{
        song.pause()
     })
    document.getElementById("sound_gameOver").play()     
    document.querySelector("body").style.backgroundImage="url('../img/page_gameOver.png')"
    document.querySelector("body").style.backgroundColor="black"  
    document.querySelector("#canvas").style.opacity="0"
    this.ctx.clearRect(0,0,400,100)        
    setTimeout(()=>{    
      location.reload()   
    } ,3500   )
  }
   

}
