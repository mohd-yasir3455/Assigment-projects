const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

/* GET TASKS FROM LOCAL STORAGE */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* DISPLAY TASKS */

const displayTasks = () => {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        taskList.innerHTML += `

            <li class="todo__item">

                <span>${task}</span>

                <div class="todo__buttons">

                    <button 
                        class="todo__edit-btn"
                        onclick="editTask(${index})"
                    >
                        Edit
                    </button>

                    <button 
                        class="todo__delete-btn"
                        onclick="deleteTask(${index})"
                    >
                        Delete
                    </button>

                </div>

            </li>

        `;

    });

};

/* SAVE TO LOCAL STORAGE */

const saveTasks = () => {

    localStorage.setItem("tasks", JSON.stringify(tasks));

};

/* ADD TASK */

addBtn.addEventListener("click", () => {

    const taskValue = taskInput.value.trim();

    if(taskValue === ""){

        alert("Please enter a task");
        return;

    }

    tasks.push(taskValue);

    saveTasks();

    displayTasks();

    taskInput.value = "";

});

/* DELETE TASK */

const deleteTask = (index) => {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

};

/* EDIT TASK */

const editTask = (index) => {

    const updatedTask = prompt("Edit your task", tasks[index]);

    if(updatedTask !== null && updatedTask.trim() !== ""){

        tasks[index] = updatedTask;

        saveTasks();

        displayTasks();

    }

};


displayTasks();