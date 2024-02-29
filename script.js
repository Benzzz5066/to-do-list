const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskDone.addEventListener("click", );

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);

        const taskDoneButton = document.createElement("button");
        taskDoneButton.textContent = "Task Complete";
        taskDoneButton.classList.add("taskDoneBtn");

        taskDoneButton.addEventListener("click", function() {
            taskItem.remove();
        })

        taskItem.appendChild(taskDoneButton);

        taskInput.value = "";
    } else {
        alert("Invalid Task");
    }
}




