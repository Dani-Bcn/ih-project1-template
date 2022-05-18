  window.onload = function () { 
     
      setTimeout(()=>{
          document.getElementById("black_page").style.display="none"
      },1000)
        document.getElementById("black_page").style.opacity="0"
    const ctx=document.getElementById("canvas").getContext("2d")
    document.querySelector("#button_start").addEventListener("click",()=>{
        start()
    })          
    const start =() =>{ 
        document.querySelector("body").style.backdropFilter= "blur(0px)"       
        setTimeout(()=>{
           document.querySelector("#canvas").style.display="grid"  
           document.querySelector(".container").style.display="none"  
        },500)
        setTimeout(()=>{
             document.querySelector("#canvas").style.opacity="1"           
        },500)            
        const game = new Game(ctx,selectShipArray)
        game.start()
    }         
    // show page settings
    let bollear=false
    document.getElementById("button_play").addEventListener("click",()=>{ 
        bollear=!bollear
        document.querySelector("body").style.backdropFilter= "blur(2px)"        
        const elementSettings= document.getElementById("settings")
        const elementSound = document.getElementById("song")
        const elementMain = document.getElementById("main")
        if(bollear){
            document.querySelector("body").style.backdropFilter= "blur(10px)"
            elementSettings.style.opacity = "1"
            elementSettings.style.marginTop = "500px"
            elementSound.style.opacity = "1"
            elementSound.style.marginTop = "800px"
            elementMain.style.marginTop = "0px"
            elementMain.style.opacity = "-800px" 
            document.getElementById("rules").style.opacity="1" 
             document.getElementById("rules").style.marginLeft="0px" 
        }else{  
            document.querySelector("body").style.backdropFilter= "blur(0px)" 
            elementSettings.style.opacity = "0"
            elementSettings.style.marginTop = "100px"
            elementMain.style.marginTop="-1650px"
            elementMain.style.opacity="1"
            elementSound.style.marginTop="1000px"
            elementSound.style.opacity="0"  
            document.getElementById("rules").style.opacity="0"            
        }           
    })         
    //show rules  
         let musicArray=[]
         let count=1     
         const addSongs=()=>{
            if(document.getElementById("audio"+ count )){                  
                musicArray.push(document.getElementById("audio" + count))
               count++
            }       
         }  
         setInterval(()=>{
            addSongs()
        },)
        //canviar de canción
        let countSong=-1   
        document.querySelector(".button_songs").addEventListener("click",(()=>{  
            musicArray[5].pause()
            countSong++
            musicArray[countSong].play()
            musicArray[countSong-1].load()
            if(countSong>=musicArray.length-1){
                countSong = -1
            }          
        }))
           //quitar  / poner sonido
        let state=false
        document.getElementById("button_soundOn").addEventListener("click",(()=>{ 
            state=!state
            if(state){
                musicArray.forEach((song)=>{
                    song.volume=0   
                })                
                document.getElementById("button_soundOn").style.backgroundImage="url('../img/music_on.png')"
            }else{
                musicArray.forEach((song)=>{
                    song.volume=1  
                })  
                document.getElementById("button_soundOn").style.backgroundImage="url('../img/music_off.png')"            }     
        }))
        //Selección de nave
         const imgArray=[]
        const selectShipArray =["../img/nave2.png"]  
          for(i = 1;i< 7;i++){
           const eleImg = document.getElementById("img" + i)
        imgArray.push(eleImg)
        console.log(imgArray)
        }        
       imgArray.forEach((ele, index)=>{
          ele.addEventListener("click", (()=>{
              selectShipArray.unshift(ele.attributes.src.nodeValue)
               console.log(selectShipArray)
              selectShipArray.splice(1,1)
                console.log(selectShipArray)
           }))
           //cambiar imagen con mouse over

            // ele.addEventListener("mouseover",()=>{
            //     console.log(ele.attributes.src.nodeValue)
            //     ele.attributes.src.nodeValue=`../img/nave${index+1}_invert.png`
            // })
            
        })   
        document.querySelector("li").addEventListener(("click",()=>{
            document.querySelector("li").style.boxShadow="10px 20px 30px black";
        }))
        
      
      
    }
