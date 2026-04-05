let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

let btn=document.querySelector("#addBtn");

let input=document.querySelector("#taskInput");

let taskList=document.querySelector("#taskList");

function renderTasks(){

if(tasks.length===0){
    console.log("No Task Yet");
    
}

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

saveTasks();
renderTasks();

});

deleteBtn.innerText="Delete";

deleteBtn.addEventListener("click",function(){

tasks.splice(index,1);

saveTasks();
renderTasks();

});

li.appendChild(span);

li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){

let taskText=input.value;

if(taskText.trim()===""){
    input.classList.add("error");
    setTimeout(function(){
        input.classList.remove("error");
    },3000);
    return;  
} 

input.value="";  

tasks.push({
text:taskText,
done:false
});

updateUI();

}

function updateUI(){
    saveTasks();
    renderTasks();
}


input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        addTask();
    }
})



renderTasks();