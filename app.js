let button = document.getElementById("btn");
let button2 = document.getElementById("clear");

button.addEventListener("click", function() {
    let task = document.getElementById("task");
    if(task.value === ""){
        createElement();
    }else{
        addTask();
        document.getElementById("task").value = "";
        if(document.getElementById("not-add")){
            document.getElementById("not-add").remove();
        }
       
    }
});

function createElement(){
    if(document.getElementById("not-add")){
        return;
    }
    let warning = document.createElement("span");
    warning.innerHTML = "<p>Please add a task</p>";
    warning.id = "not-add";
    button2.insertAdjacentElement("afterend", warning);

}
let x = localStorage.getItem(localStorage.key("x"));;
for(let j=0; j<=localStorage.length+1; j++){
    let key = localStorage.key(j);
    let value = localStorage.getItem(key);
    console.log(key+"-"+value);
}

if(!x){
    x = 1;
}
console.log(x);
console.log(typeof x);
console.log(localStorage.length);
document.getElementById("clear").onclick = function(){
    localStorage.clear();
    loadContent();
}

function loadContent(){
    // console.log(x);
    // console.log(localStorage.length);
    document.getElementById("list").innerHTML = "";
    for(let i=0; i<=localStorage.length+1; ++i){
        if(localStorage.key(i) === "x" || !localStorage.key(i)){
            continue;
        }
        let key = localStorage.key(i);
        let news = localStorage.getItem(key);
        let newItem = document.createElement("li");
        newItem.innerHTML = news;
        let btn1 = newItem.querySelector("button:nth-child(2)");
        let btn2 = newItem.querySelector("button:nth-child(1)");
        if(btn1 || btn2){
            btn1.addEventListener("click", ()=>{
                newItem.remove();
                localStorage.removeItem(key);
            });
            btn2.addEventListener("click", ()=>{
                newItem.style.textDecoration = "line-through";
            })
        }
        document.getElementById("list").append(newItem);
    }
}
window.addEventListener("load", loadContent);

function addTask(){
    
    let task = document.getElementById("task").value;
    let element = document.createElement("li");
    element.textContent = task;
    let y= x;
    element.id = y;
    let btn = document.createElement("button");
    let btn2 = document.createElement("button");
    btn.innerText = "remove";
    btn.style.margin = "10px";
    btn.addEventListener("click", ()=>{
        document.getElementById(element.id).remove();
        localStorage.removeItem(element.id);
        // if(!x===0){
        //     x--;
        // }
    });
    btn2.innerText = "Done";
    btn2.style.margin = "10px";
    btn2.addEventListener("click", ()=>{
        element.style.textDecoration = "line-through";
    });
    element.append(btn2);
    element.append(btn);
    document.getElementById("list").append(element);
   
    localStorage.setItem(y, element.innerHTML);
    localStorage.setItem("x", y);
    x++;
    console.log(x);
}