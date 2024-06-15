let gameSql = [];
let userSql = [];

let colors = ["yellow", "pink", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}




function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250)
}


function levelUp() {
    userSql=[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSql.push(randColor);
    console.log(gameSql);
    gameFlash(randBtn);
}

function check(idx){
    if(userSql[idx]===gameSql[idx]){
       if(userSql.length==gameSql.length){
          setTimeout(levelUp,1000) 
       }
    }else{
        h2.innerHTML = `GAME OVER! Your score was<b> ${level}</b> <br> Press any key to restart the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200)
        reset();
    }
}

function btnPress() {
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSql.push(userColor);
    check(userSql.length-1);
}



let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSql=[];
    userSql=[];
    level=0;
}