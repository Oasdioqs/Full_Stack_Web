import { saveTask,loadTasks } from './storage.js';

import{
    addTask,
    deleteTask,
    toggleTask,
    editTask
} from "./tasks.js";

import { renderTasks } from "./ui.js";

let tasks=loadTasks();

let input=document.querySelector("#taskInput");
let btn=document.querySelector("#addBtn");
let taskList=document.querySelector("#taskList");

function updateUI(action,id,text){
    if(action==="add"){
        tasks=addTask(tasks,text);
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
    saveTask(tasks);
    renderTasks(tasks,taskList,updateUI);
}

btn.onclick=function(){
    if(input.value==="")return;

    updateUI("add",null,input.value);
    input.value="";
};

renderTasks(tasks,taskList,updateUI);