function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskTime = document.getElementById("taskTime");
    let taskList = document.getElementById("taskList");

    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskValue + "<br> ⏰ " + taskTime.value;

    li.onclick = function () {
        this.style.textDecoration = "line-through";
    };

    taskList.appendChild(li);

    taskInput.value = "";
    taskTime.value = "";
}