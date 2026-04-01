let input=document.querySelector("#taskInput");

let btn=document.querySelector("#addBtn");

let taskList=document.querySelector("#taskList");

btn.addEventListener("click",function(){

let taskText=input.value;

if(taskText.trim()===""){

alert("Input Kosong!!!");

return;

}

let li=document.createElement("li");

let span=document.createElement("span");

let removeBtn=document.createElement("button");

span.innerText=taskText;

removeBtn.innerText="Delete";

removeBtn.addEventListener("click",function(){

li.remove();

});

span.addEventListener("click",function(){

span.classList.toggle("done");

});

li.appendChild(span);

li.appendChild(removeBtn);

taskList.appendChild(li);

input.value="";

});