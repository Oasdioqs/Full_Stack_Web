export function addTask(tasks,text){
    return[
        ...tasks,
        {
            id:Date.now(),
            text:text,
            done:false,
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

        return task;
    });
}
