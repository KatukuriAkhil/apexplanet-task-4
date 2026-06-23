const taskInput =
document.getElementById("taskInput");

const taskList =
document.getElementById("taskList");

const taskCount =
document.getElementById("taskCount");

let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

displayTasks();

function addTask(){

    const task =
    taskInput.value.trim();

    if(task === ""){

        alert("Please enter a task");

        return;
    }

    tasks.push({

        text:task,
        completed:false

    });

    saveTasks();

    taskInput.value="";

    displayTasks();
}

function displayTasks(){

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        const li =
        document.createElement("li");

        li.innerHTML=`

        <span
        class="task-text
        ${task.completed ? 'completed' : ''}"
        onclick="toggleTask(${index})">

        ${task.text}

        </span>

        <button
        class="delete-btn"
        onclick="deleteTask(${index})">

        Delete

        </button>

        `;

        taskList.appendChild(li);
    });

    taskCount.textContent =
    tasks.length;
}

function toggleTask(index){

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();

    displayTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}