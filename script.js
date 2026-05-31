function addTask() {
  const taskText = prompt("Digite a atividade:");
  if (taskText) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", moveTask);

    const span = document.createElement("span");
    span.textContent = taskText;

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(span);

    document.getElementById("todoTasks").appendChild(taskDiv);
  }
}

function moveTask(event) {
  const taskDiv = event.target.parentElement;
  if (event.target.checked) {
    document.getElementById("doneTasks").appendChild(taskDiv);
  } else {
    document.getElementById("todoTasks").appendChild(taskDiv);
  }
}

// Faz os checkboxes existentes também funcionarem
document.querySelectorAll("#todoTasks input[type='checkbox']").forEach(cb => {
  cb.addEventListener("change", moveTask);
});
