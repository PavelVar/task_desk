import { addTask } from "./2_add_tasks";
import { getDataFromLocalStorage } from "./8_get_local_storage.js";
import { findNum } from "./9_num.js";
import { drag, dragover, dragleave, dragdrop, dragenter } from "./10_drag.js";

// Getting button to open task-add-form, task-add-form, button to exit task-add-form and table-desk
const BTN_START_ADD_TASK = document.querySelector(".btn-start");
const FORM_ADD_TASK = document.querySelector(".input-form");
const BTN_EXIT_TASK_FORM = document.querySelector(".exit");
const TABLES = document.querySelector(".tables");

BTN_START_ADD_TASK.addEventListener("click", () => {
  FORM_ADD_TASK.classList.toggle("active");
  BTN_START_ADD_TASK.classList.toggle("active");
  TABLES.classList.toggle("nonactive");
});

BTN_EXIT_TASK_FORM.addEventListener("click", () => {
  FORM_ADD_TASK.classList.toggle("active");
  BTN_START_ADD_TASK.classList.toggle("active");
  TABLES.classList.toggle("nonactive");
});

const BTN_ADD_TASK = document.querySelector(".btn-input");

const TASK_TEXT = document.querySelector("textarea#text");
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
    let today = new Date();
    let inputedDate = new Date(
      `${taskDate.substr(5, 2)}-${taskDate.substr(8, 2)}-${taskDate.substr(
        0,
        4
      )}`
    );

    if (today.getTime() > inputedDate.getTime()) {
      alert("False date: supposed date is too early. Check.");
    } else {
      let newTask = new createTask(
        num,
        taskText,
        taskResponsible,
        taskDate,
        taskPriority
      );
      toDoTasks.set(num, newTask);

      TABLES.classList.toggle("nonactive");

      TASK_TEXT.value = "";
      TASK_RESPONSIBLE.value = "";
      TASK_DATE.value = "";
      TASK_PRIOR.value = "high";

      addTask(newTask, "todo");

      FORM_ADD_TASK.classList.toggle("active");
      BTN_START_ADD_TASK.classList.toggle("active");

      drag();
    }
  }
}

getDataFromLocalStorage();

BTN_ADD_TASK.onclick = addToDo;

export const TasksLists = document.querySelectorAll(".tasks");

for (let table of TasksLists) {
  table.addEventListener("dragover", dragover);

  table.addEventListener("drop", dragdrop);

  table.addEventListener("dragenter", dragenter);

  table.addEventListener("dragleave", dragleave);
}

drag();
