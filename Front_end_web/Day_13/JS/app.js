import { saveTask,loadTasks } from './storage.js';

import{
    addTask,
    deleteTask,
    toggleTask,
    editTask,
} from "./tasks.js";

import { renderTasks } from "./ui.js";

let tasks=loadTasks();
let searchQuery="";
let input=document.querySelector("#taskInput");
let btn=document.querySelector("#addBtn");
let taskList=document.querySelector("#taskList");
let searchInput=document.querySelector("#searchInput");
let priority=document.querySelector("#priority");
let priorityFilter="all";

function debounce(func,delay){
    let timeout;

    return function(...args){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            func.apply(this,args);
        },delay);
    };
}
export function sortTasks(tasks){
    const priorityOrder={
        high:3,
        medium:2,
        low:1
    };

    return[...tasks].sort((a,b)=>{
        if(a.done !== b.done){
            return a.done-b.done;
        }

        return priorityOrder[b.priority]-priorityOrder[a.priority];
    })
}
function updateUI(action,id,text,priority){
    if(action==="add"){
        tasks=addTask(tasks,text,priority);
    }
    else if(action==="delete"){
        tasks=deleteTask(tasks,id);
    } 
    else if(action==="toggle"){
        tasks=toggleTask(tasks,text);
    }
    else if(action==="edit"){
        tasks=editTask(tasks,id,text);
    }
    if(priorityFilter!=="all"){
        filteredTasks=filteredTasks.filter(t=>t.priority===priorityFilter);
    }
    saveTask(tasks);
    renderTasks(tasks,taskList,updateUI,searchQuery);
}

searchInput.addEventListener("input",debounce(function(e){
    searchQuery=e.target.value;
    renderTasks(tasks,taskList,updateUI,searchQuery);
},300)
);

document.querySelector("#filterHigh").onclick=()=>{
    priorityFilter="high";
    renderTasks(tasks,taskList,updateUI,searchQuery);
}
btn.onclick=function(){
    if(input.value==="")return;

    updateUI("add",null,input.value,priority.value);
    input.value="";
};

renderTasks(tasks,taskList,updateUI,searchQuery);


