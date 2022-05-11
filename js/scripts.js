window.onload = function () {
const ctx=document.getElementById("canvas").getContext("2d")
document.querySelector("#button").addEventListener("click", ()=>{
    document.querySelector(".show").style.display="none"
    document.querySelector("#canvas").style.display="grid"
    const game = new Game(ctx)
    game.start()
}) 
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
}