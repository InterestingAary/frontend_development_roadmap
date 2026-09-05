/**
 * Title: DOM + Events + Validation + localStorage
 * Learning objective: Build a browser-based interactive list with persistence.
 */

const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const formError = document.getElementById("formError");
const taskList = document.getElementById("taskList");

const STORAGE_KEY = "learning_todo_tasks";
let tasks = loadTasks();
renderTasks();

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (!taskText) {
    formError.textContent = "Task cannot be empty.";
    return;
  }

  formError.textContent = "";
  tasks.push({ id: Date.now(), text: taskText, done: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
});

// Event delegation: one listener handles click events for all task buttons.
taskList.addEventListener("click", (event) => {
  const taskItem = event.target.closest("li[data-id]");
  if (!taskItem) return;

  const taskId = Number(taskItem.dataset.id);

  if (event.target.matches("button[data-action='toggle']")) {
    tasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
  }

  if (event.target.matches("button[data-action='remove']")) {
    tasks = tasks.filter((task) => task.id !== taskId);
  }

  saveTasks();
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = ""; // Clear old DOM nodes before re-render.

  if (tasks.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "No tasks yet. Add your first one!";
    taskList.appendChild(emptyItem);
    return;
  }

  for (const task of tasks) {
    const listItem = document.createElement("li"); // Creating elements dynamically.
    listItem.dataset.id = String(task.id);

    listItem.innerHTML = `
      <span class="${task.done ? "done" : ""}">${task.text}</span>
      <button data-action="toggle">${task.done ? "Undo" : "Done"}</button>
      <button data-action="remove">Delete</button>
    `;

    taskList.appendChild(listItem);
  }
}

function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
