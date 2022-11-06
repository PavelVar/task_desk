import { countTasks } from "./count";
import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";
import { addToLocalStorage } from "./7_add_to_local_stor.js";

var currentTask = "";

export function drag() {
  var taskElements = document.querySelectorAll(".task");

  for (let task of taskElements) {
    task.draggable = true;

    task.addEventListener("dragstart", dragstart);

    task.addEventListener("dragend", dragend);
  }
}

function dragstart(event) {
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
  currentTask = event.target;
  //   console.log(currentTask);
}

function dragend(event) {
  event.target.classList.remove("hide");
}

export function dragover(event) {
  event.preventDefault();
}

export function dragdrop(event) {
  console.log(currentTask);
  let currentTaskId = currentTask.dataset.id;
  let parentEl = currentTask.parentElement.id;
  console.log(parentEl);

  if (parentEl == "table-todo") {
    toDoTasks.delete(id);
    inProcTasks.push(currentTask);
    console.log(toDoTasks);
  } else if (parentEl == "table-inprocess") {
    inProcTasks.delete(id);
    doneTasks.push(currentTask);
  } else if (parentEl == "table-done") {
    doneTasks.delete(id);
  }

  event.target.append(currentTask);

  countTasks();
  addToLocalStorage();
}

export function dragenter(event) {}

export function dragleave(event) {}
