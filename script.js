let block = document.getElementById("block");
let hole = document.getElementById("hole");
let charcter = document.getElementById("character");
let jumping = 0;
let score = 0;

hole.addEventListener("animationiteration",function(){
    let random = -((Math.random()*300)+150)
    hole.style.top = random+"px";
    score++;
})

setInterval(function(){
    let characterPosition = parseInt(window.getComputedStyle(charcter).getPropertyValue("top"));
    if (jumping == 0){
        charcter.style.top = characterPosition+ 3 + "px";
    }
    let blockPosition = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holePosition = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    if (((characterPosition>490) || (characterPosition<1))||(((blockPosition<45)&&(blockPosition>-5))&&((characterPosition<holePosition+500)||(characterPosition>holePosition+585)))){
        alert("Game over!, Your score is "+score);
        score = 0;
        charcter.style.top = 100+ "px";
    }
},10)

function jump(){
    jumping = 1;
    jumpcount = 0;
    let characterjumping = setInterval(function(){
        let characterPosition = parseInt(window.getComputedStyle(charcter).getPropertyValue("top"));
        charcter.style.top = characterPosition- 5 + "px";
        if (jumpcount>20){
            clearInterval(characterjumping);
            jumpcount=0;
            jumping =0;
        }
        jumpcount++;
    },10);
}