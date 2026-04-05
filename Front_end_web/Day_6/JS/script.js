let tasks=[];

let btn=document.querySelector("#addBtn");

let input=document.querySelector("#taskInput");

let taskList=document.querySelector("#taskList");

function renderTasks(){

taskList.innerHTML="";

tasks.forEach(function(task,index){

let li=document.createElement("li");

let span=document.createElement("span");

let deleteBtn=document.createElement("button");

span.innerText=task.text;

if(task.done){

span.classList.add("done");

}

span.addEventListener("click",function(){

task.done=!task.done;

renderTasks();

});

deleteBtn.innerText="Delete";

deleteBtn.addEventListener("click",function(){

tasks.splice(index,1);

renderTasks();

});

li.appendChild(span);

li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}

btn.addEventListener("click",function(){

let taskText=input.value;

if(taskText.trim()===""){ alert("Output Kosong!!!");return;} 

tasks.push({

text:taskText,

done:false

});

renderTasks();

input.value="";

});