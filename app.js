let started = false;
let level=0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "green", "purple"];
let gameSeq = [];
let userSeq = [];
let bg = document.querySelector("html");
document.addEventListener("keypress", function(){
    if(started==false){
    started=true;
    levelUp();
}
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 150);
}
function levelUp(){
    level++;
    userSeq = [];
    h2.innerText = `Level - ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randomClr = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    btnFlash(randomBtn);
    gameSeq.push(randomClr);
    console.log("Game sequence:", gameSeq);
}
// continue from button event listeners
function pressBtn(){
        let currentBtn = this;
        userFlash(currentBtn);
        userClr = currentBtn.getAttribute("id");
        userSeq.push(userClr);
        console.log("User Sequence: ",userSeq);
        checkAns(userSeq.length-1);
    }
let btn = document.querySelectorAll(".btn");
for(btn1 of btn){
    btn1.addEventListener("click", pressBtn);
}
function checkAns(index){
    if(userSeq[index] == gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        bg.classList.add("gameOver");
        setTimeout(function(){
            bg.classList.remove("gameOver");
        }, 200)
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br> Press any key to play again`;
        reset();
    }
}
function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}

