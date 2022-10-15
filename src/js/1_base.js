import { addTask } from "./2_add_tasks";
import { getDataFromLocalStorage } from "./8_get_local_storage.js";
import { findNum } from "./9_num.js";

const BTN_START_ADD_TASK = document.querySelector(".btn-start");
const FORM_ADD_TASK = document.querySelector(".input-form");
const BTN_EXIT_TASK_FORM = document.querySelector(".exit");

BTN_START_ADD_TASK.addEventListener("click", () => {
  FORM_ADD_TASK.classList.toggle("active");
  BTN_START_ADD_TASK.classList.toggle("active");
});

BTN_EXIT_TASK_FORM.addEventListener("click", () => {
  FORM_ADD_TASK.classList.toggle("active");
  BTN_START_ADD_TASK.classList.toggle("active");
});

const BTN_ADD_TASK = document.querySelector(".btn-input");

const TASK_TEXT = document.querySelector("input#text");
const TASK_RESPONSIBLE = document.querySelector("input#responsible");
const TASK_DATE = document.querySelector("input#date");
const TASK_PRIOR = document.querySelector("select#priority");

export let toDoTasks = new Map();
export let inProcTasks = new Map();
export let doneTasks = new Map();

let num = 0;

function createTask(id, text, responsible, date, priority) {
  this.id = id;
  this.text = text;
  this.responsible = responsible;
  this.date = date;
  this.priority = priority;
}

function addToDo() {
  res = findNum();
  if (res) {
    num = res;
  } else {
    num++;
  }
  // while (toDoTasks.has(num)) {
  // num++;
  // }

  let taskText = TASK_TEXT.value;
  let taskResponsible = TASK_RESPONSIBLE.value;
  let taskDate = TASK_DATE.value;
  let taskPriority = TASK_PRIOR.value;

  if (
    taskText == "" ||
    taskResponsible == "" ||
    taskDate == "" ||
    taskPriority == ""
  ) {
    alert("No empty fields allowed. Check, please.");
  } else {
    let newTask = new createTask(
      num,
      taskText,
      taskResponsible,
      taskDate,
      taskPriority
    );
    toDoTasks.set(num, newTask);

    // TASK_TEXT.value = "";
    // TASK_RESPONSIBLE.value = "";
    // TASK_DATE.value = "";
    // TASK_PRIOR.value = "high";

    addTask(newTask, "todo");

    FORM_ADD_TASK.classList.toggle("active");
    BTN_START_ADD_TASK.classList.toggle("active");
  }
}

getDataFromLocalStorage();

BTN_ADD_TASK.onclick = addToDo;
