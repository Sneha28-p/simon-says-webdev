let gameseq=[];
let userseq=[];
let btns=["green","yellow","red","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game has started");
        started=true;
        levelup();
    }
});
function GameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let rancolor=btns[ranIdx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    //console.log(ranIdx,rancolor,ranbtn);
    gameseq.push(rancolor);
    console.log(gameseq);
    GameFlash(ranbtn);
}
function match(idx){
    //console.log("current level:",level);
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout((levelup), 1000);
        }
    }else{
        h2.innerHTML=`Game Over..! Your score was <b>${level*10}</b> <br>Press any key to start again`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    //console.log(this);
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    //console.log(usercolor);
    userseq.push(usercolor);
    match(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}