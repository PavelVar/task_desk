import { addToDo } from "./templates.js";

const BTN_INPUT = document.querySelector(".btn-input");

const TASK_TEXT = document.querySelector("input#text");
const TASK_RESPONSIBLE = document.querySelector("input#responsible");
const TASK_DATE = document.querySelector("input#date");
const TASK_PRIOR = document.querySelector("select#priority");

let toDoTasks = new Map();
// let InProcessTasks = new Map();
// let DoneTasks = new Map();

let num = 1;

function getTask() {
  while (toDoTasks.has(num)) {
    num++;
  }

  let newTask = new Object();
  newTask.text = TASK_TEXT.value;
  newTask.responsible = TASK_RESPONSIBLE.value;
  newTask.date = TASK_DATE.value;
  newTask.priority = TASK_PRIOR.value;

  toDoTasks.set(num, newTask);

  TASK_TEXT.value = "";
  TASK_RESPONSIBLE.value = "";
  TASK_DATE.value = "";
  TASK_PRIOR.value = "";

  addToDo(toDoTasks.get(num), num, "todo");
  return toDoTasks;
}

BTN_INPUT.onclick = getTask;
