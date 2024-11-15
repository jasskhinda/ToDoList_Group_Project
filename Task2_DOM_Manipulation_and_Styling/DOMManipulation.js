document.getElementById("add-task-btn").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.onclick = () => li.remove();
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input field
    } else {
        alert("Please enter a task!");
    }
});
