let userscore=0;
let compscore=0;
let msg=document.querySelector("#msg");
let userscroenum=document.querySelector("#userscore");
let compscroenum=document.querySelector("#compscore");
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
choice. addEventListener("click",() =>{
    const userchoised=choice.getAttribute("id");
    
    playgame(userchoised);
});
});
const getcomputerchoice=()=>{
    const option=["rock","scissor","paper"];
    const mathidx=Math.floor(Math.random()*3);
    return option[mathidx];
};
const gamedraw=()=>{
    console.log("the game is draw")
    msg.innerHTML="Game was Draw ! Try again.";
    msg.style.backgroundColor="white"
};
const winershow=(userwin,userchoised,compchoice)=>{
    if(userwin){
        userscore++;
        userscroenum.innerText=userscore;
    msg.innerText=`You Win! your ${userchoised} beats ${compchoice}`
    msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscroenum.innerText=compscore;
        msg.innerText=`You Loss! ${compchoice} beats ${userchoised}`
        msg.style.backgroundColor="red";

    }
};
const playgame=(userchoised)=>{
    console.log("choice was clicked = ",userchoised);
    const compchoice=getcomputerchoice();
    console.log("computer choice is = ",compchoice)
    if(userchoised===compchoice){
gamedraw();
    }else{
        let userwin=true;
        if(userchoised==="rock"){
            userwin=compchoice==="paper"?false:true;
        } else if(userchoised==="paper"){
            userwin = compchoice === "scissor" ? false : true;
        } else{
            userwin=compchoice==="rock"?false:true;
        }
    winershow(userwin,userchoised,compchoice);}
};
