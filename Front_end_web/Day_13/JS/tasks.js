export function addTask(tasks,text,priority="medium"){
    if(!text || text.trim()==="") return tasks;
    return[
        ...tasks,
        {
            id:Date.now(),
            text:text,
            done:false,
            priority:priority,
            createAt:new Date().toLocaleString()
        }
    ];
}

export function deleteTask(tasks,id){
    return tasks.filter(task=>task.id!=id);
}

export function toggleTask(tasks,id){
    return tasks.map(task=>{
        if(task.id===id){
            return{
                ...task,
                done:!task.done
            }
        }

        return task;
    });
}

export function editTask(tasks,id,newText){
    return tasks.map(task=>{
        if(task.id===id){
            return{
                ...task,
                text:newText
            };
        }
        console.log("New Tasks:",newText);
        
        return task;
    });
}




