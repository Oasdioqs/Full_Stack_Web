import {sortTasks} from "./app.js";

export function renderTasks(tasks,taskList,updateUI,searchQuery){
    taskList.innerHTML="";
    let filteredTasks = tasks.filter(task => 
        (task.text || "").toLowerCase().includes((searchQuery || "").toLowerCase())
    );
    let sortedTasks=sortTasks(filteredTasks);

    if(tasks.length===0){
        taskList.innerHTML = `<li>No Task</li>`;
        return;
    }

    if(filteredTasks.length===0){
        taskList.innerHTML=`
        <li class="empty">
        No result found 🔍
        </li>
        `;
        return;
    }

    sortedTasks.forEach(task=>{
        let li=document.createElement("li");
        let span=document.createElement("span");
        let deleteBtn=document.createElement("button");
        let text=task.text || "";
        let badge=document.createElement("span");

    if(searchQuery){
        let regex = new RegExp(`(${searchQuery})`,"gi");
        text = text.replace(regex,"<mark>$1</mark>");   
    }

    span.innerHTML=text;

    if(task.done){
        span.classList.add("done");
    }

    span.onclick=function(){
        updateUI("toggle",task.id);
    };
    badge.innerText=task.priority;
    badge.classList.add("badge",task.priority);
    deleteBtn.innerText="Delete";
    
    deleteBtn.onclick=function(){
        updateUI("delete",task.id);
    };
    li.appendChild(badge);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    });

}