export function saveTask(tasks){
    localStorage.setItem("task",JSON.stringify(tasks));
}

export function loadTasks(){
    return JSON.parse(localStorage.getItem("tasks"))||[]
}