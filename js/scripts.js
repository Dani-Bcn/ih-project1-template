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


        }
       