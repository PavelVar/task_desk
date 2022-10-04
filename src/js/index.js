import { addToDo } from "./templates.js";

const BTN_START = document.querySelector(".btn-start");
const ADD_FORM = document.querySelector(".input-form");
const BTN_EXIT = document.querySelector(".exit");

BTN_START.addEventListener("click", () => {
  ADD_FORM.classList.toggle("active");
  BTN_START.classList.toggle("active");
});

BTN_EXIT.addEventListener("click", () => {
  ADD_FORM.classList.toggle("active");
  BTN_START.classList.toggle("active");
});

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

  if (
    TASK_TEXT.value == "" ||
    TASK_RESPONSIBLE.value == "" ||
    TASK_DATE.value == "" ||
    TASK_PRIOR.value == ""
  ) {
    alert("No empty fields allowed. Check.");
  } else {
    newTask.text = TASK_TEXT.value;
    newTask.responsible = TASK_RESPONSIBLE.value;
    newTask.date = TASK_DATE.value;
    newTask.priority = TASK_PRIOR.value;

    toDoTasks.set(num, newTask);

    TASK_TEXT.value = "";
    TASK_RESPONSIBLE.value = "";
    TASK_DATE.value = "";
    TASK_PRIOR.value = "high";

    addToDo(toDoTasks.get(num), num, "todo");
    ADD_FORM.classList.toggle("active");
    BTN_START.classList.toggle("active");
    return toDoTasks;
  }
}

BTN_INPUT.onclick = getTask;
