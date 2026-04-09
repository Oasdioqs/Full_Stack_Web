export function renderTasks(tasks,taskList,updateUI){
    taskList.innerHTML="";
    
    if(tasks.length===0){
        `<li>No Task</li>`;

        return;
    }

    tasks.forEach(task=>{
        let li=document.createElement("li");
        let span=document.createElement("span");
        let deleteBtn=document.createElement("button");

        span.innerText=task.Text;

        if(task.done){
            span.classList.add("done");
        }

        span.onclick=function(){
            updateUI("toggle",task.id);
        };

        deleteBtn.innerText="Delete";

        deleteBtn.onclick=function(){
            updateUI("delete",task.id);
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}