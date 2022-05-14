  window.onload = function () {           
    const ctx=document.getElementById("canvas").getContext("2d")
    document.querySelector("#button_start").addEventListener("click",()=>{
        start()
    })          
    const start =() =>{ 
        document.querySelector("#canvas").style.display="grid"
        document.querySelector(".container").style.display="none"       
        const game = new Game(ctx)
        game.start()
    }         
        let bollear=true// Play music / Stop
        document.getElementById("button_play").addEventListener("click",()=>{
        bollear=!bollear
            if(bollear){
                document.getElementById("audio1").pause()
                document.getElementById("button_play").innerHTML="Audio on" 
            }else{                
                 document.getElementById("audio1").play() 
                 document.getElementById("button_play").innerHTML="Audio off"  
            }           
        })
            document.getElementById("button_settings").addEventListener("mouseover",()=>{
            document.getElementById("rules").style.opacity="0.8"
        
         })
            document.getElementById("button_settings").addEventListener("mouseout",()=>{
           document.getElementById("rules").style.opacity="0"
         })
         let musicArray=[]
         let a=1     
         const addSongs=()=>{
            if(document.getElementById("audio"+a)){                  
                musicArray.push(document.getElementById("audio"+a))
               a++
            }       
         }  
         setInterval(()=>{
                addSongs()
        },)
        setTimeout(()=>{      
            musicArray.forEach((song,index)=>{
                var song = document.createElement("BUTTON");
                song.id="button_songs"+ index   
                song.classList.add("button_songs")          
                document.getElementById("song").appendChild(song);
            }) 
            musicArray.forEach((song,index)=>{
                    document.getElementById("button_songs" + index).addEventListener("click", ()=>{
                   console.log(song,index)  
                   document.getElementById("audio" + index).play()
            })        
        })
        },1000)         
    }