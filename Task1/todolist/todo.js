console.log("khushi");
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const button= document.querySelector(".add");
button.addEventListener("click", addTask);
function addTask(){
if(inputbox.value == ''){
    alert ("you must write something");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\ud007";
   li.appendChild(span);
}
inputbox.value = "";
saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
     e.target.parentElement.remove();
 }
},false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
} 
 function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();