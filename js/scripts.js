window.onload = function () {
const ctx=document.getElementById("canvas").getContext("2d")
document.querySelector("#button").addEventListener("click", ()=>{
    document.querySelector(".show").style.display="none"
    document.querySelector("#canvas").style.display="grid"
    const game = new Game(ctx)
    game.start()
})
}