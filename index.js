let theInput = document.querySelector('.add-task input'),
    addBtn = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    deleteAllBtn = document.getElementById("delete-all"),
    finishAllBtn = document.getElementById("finish-all");



function addNewTask() {
    let mainSpan = document.createElement('span');
    let myPara = document.createElement('span');
    let deleteElement = document.createElement("span");
    let text = document.createTextNode(theInput.value);
    let deleteText = document.createTextNode("Delete");
    
    myPara.appendChild(text)
    myPara.className = "para"
    mainSpan.appendChild(myPara);
    mainSpan.className = "task-box";

    deleteElement.appendChild(deleteText);
    deleteElement.className = "delete";

    mainSpan.appendChild(deleteElement);
    tasksContainer.appendChild(mainSpan);
    // console.log(tasksContent);

    theInput.value = "";
    theInput.focus();   
}

addBtn.onclick = function() {
    if(theInput.value === "" || null){
        alert('Please, Enter A Task'); //check if the input is empty
    }else{
        
        noTasksMsg = document.querySelector('.no-tasks-message');
        if (document.body.contains(document.querySelector('.no-tasks-message'))) {
            noTasksMsg.remove();
        }
        addNewTask();
        
    }
}

document.addEventListener("click", function(e){
    if (e.target.className == "delete") {
        e.target.parentNode.remove();
        if(tasksContainer.childElementCount == 0){
            createNoTasks();
        }
    }
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished")
    }
    // checkIsExist();
})

function createNoTasks(){
    let msgSpan = document.createElement('span'),
        msgSpanText = document.createTextNode("No Tasks Added Yet");
        msgSpan.appendChild(msgSpanText);
        msgSpan.className = "no-tasks-message";
        tasksContainer.appendChild(msgSpan);
}


finishAllBtn.onclick = function(){
    let tasksContent = document.querySelectorAll('.task-box .para');
    myArr = [...Array.from(tasksContent)];
    myArr.forEach(ele => {
        ele.classList.toggle("finished");
    });
}
deleteAllBtn.onclick = function(){
    let tasksContent = document.querySelectorAll('.task-box .para');//check if task is exist
    myArr = [...Array.from(tasksContent)];
    myArr.forEach(ele => {
        ele.parentNode.remove();  
    });
    createNoTasks();
}
