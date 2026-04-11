let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
let btn=document.querySelector("#addBtn");
let input=document.querySelector("#taskInput");
let taskList=document.querySelector("#taskList");
let taskCounter=document.querySelector("#taskCounter");
let filter="all";


function renderTasks(){

    taskList.innerHTML="";
    let filteredTasks=tasks;

    if(filter==="done"){
        filteredTasks=tasks.filter(t=>t.done);
    }

    if(filter==="pending"){
        filteredTasks=tasks.filter(t=>!t.done);
    }

    if(filteredTasks.length===0){
        taskList.innerHTML=`
        <li class="empty">No task yet</li>
        `;
        return;
    }

    filteredTasks.forEach(function(task,index){
        let li=document.createElement("li");
        let span=document.createElement("span");
        let deleteBtn=document.createElement("button");
        let editBtn=document.createElement("button");
        let date=document.createElement("small");
        span.innerText=task.text;

        if(task.done){
            span.classList.add("done");
        }

        span.addEventListener("click",function(){
            task.done=!task.done;
            updateUI();
        });

        deleteBtn.innerText="Delete";
        deleteBtn.addEventListener("click",function(){
            tasks=tasks.filter(t=>t.id!==task.id);
            updateUI();
        });

        editBtn.innerText="Edit";
        editBtn.addEventListener("click",function(){

        let inputEdit=document.createElement("input");
            inputEdit.value=task.text;
            li.replaceChild(inputEdit,span);
            inputEdit.focus();
            inputEdit.addEventListener("blur",function(){
                task.text=inputEdit.value;
                updateUI();
            });

        });

        date.innerText=task.createAt;

        li.appendChild(span);
        li.appendChild(date);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

    });

    taskCounter.innerText=
    `Total: ${tasks.length} | Done: ${tasks.filter(t=>t.done).length}`;

}

function generateId(){
    return Date.now();
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function updateUI(){
    saveTasks();
    renderTasks();
}

function addTask(){
    let taskText=input.value;
    if(taskText.trim()===""){
        input.classList.add("error");
        setTimeout(function(){
            input.classList.remove("error");
        },1000);
        return;
    }

    let newTask={
        id:generateId(),
        text:taskText,
        done:false,
        createAt:new Date().toLocaleString()
    };

    tasks.push(newTask);
    input.value="";
    updateUI();

}

btn.addEventListener("click",addTask());

input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        addTask();
    }

});

document.querySelector("#all").onclick=function(){
    filter="all";
    renderTasks();
};

document.querySelector("#done").onclick=function(){
    filter="done"
    renderTasks();
};

document.querySelector("#pending").onclick=function(){
    filter="pending";
    renderTasks();
};

renderTasks();