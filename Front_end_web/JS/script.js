let title=document.querySelector("#title");
let btn=document.querySelector("#btn");
let bio=document.querySelector("#bio");
let change_color=document.querySelector("#colorbtn");
let container=document.querySelector("#container");
let profile=document.querySelector("#profile");
let content=document.querySelector("#content");
let skillbtn=document.querySelector("#toggleskill");
let skill=document.querySelector("#skill");

skillbtn.addEventListener("click",function(){
    if(skill.style.display=="none"){
        skill.style.display="block";
        skillbtn.innerText="Show Skill";
    }
    else{
        skill.style.display="none";
        skillbtn.innerText="Hide skill";
    }
})
btn.addEventListener("click",function(){
    bio.innerText="I will become Full Stack developer";
});
change_color.addEventListener("click",function(){
    container.style.backgroundColor ="#6CA610";
    content.style.backgroundColor ="#A044ff";
    profile.style.backgroundColor ="#DfDfDf";
});
console.log(title);
title.innerText="Full Stack Journey";
