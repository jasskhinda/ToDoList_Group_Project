document.getElementById("task-list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});

document.getElementById("clear-completed-btn").addEventListener("click", function () {
    const completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach((task) => task.remove());
});
