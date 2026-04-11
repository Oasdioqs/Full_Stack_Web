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

    let editBtn=document.createElement("button");

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

    editBtn.innerText="Edit";

    editBtn.addEventListener("click",function(){
        editTask(task.id);
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

});

}
function editTask(id){
    let newText=prompt("Edit task:");

    if(newText===null||newText==="")return;

    tasks=tasks.map(function(task){
        if(task.id===id){
            return{
                id:task.id,
                text:newText
            };
        }
        return task;
    });
    
    localStorage.setItem("tasks",JSON.stringify(tasks));
    updateUI();
}

function generateId(){
    return Date.now();
}

function updateUI(){
    saveTasks();
    renderTasks();
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

//function add task
function addTask(){

    let taskText=input.value;

    if(taskText.trim()===""){
        input.classList.add("error");
        setTimeout(function(){
            input.classList.remove("error");
        },3000);
        return;  
    }
    let newTask={
        id:generateId(),
        text:taskText
    };

    tasks.push(newTask);

    localStorage.setItem("tasks",JSON.stringify(tasks));

    input.value="";  
    updateUI();
    }

btn.addEventListener("click",function(){
    addTask();
})

//Ketika user mengirim data dengan menekan enter
input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        addTask();
    }
})

renderTasks();


