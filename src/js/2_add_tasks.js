import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";
import { renderTemplate } from "./3_render_todo";
import { delTask } from "./4_del.js";
import { countTasks } from "./count.js";
import { moveTask } from "./5_next.js";
import { backTask } from "./6_back.js";

tableName = "";

export function addTask(task, place) {
  if (place == "todo") {
    tableName = ".tasks#tasks-todo";
  } else if (place == "in") {
    tableName = ".tasks#tasks-inprocess";
  } else if (place == "done") {
    tableName = ".tasks#tasks-done";
  }

  let table = document.querySelector(tableName);
  table.innerHTML += renderTemplate(task, place);

  // console.log(toDoTasks);

  let BTN_DEL = document.querySelectorAll("#btn-del");
  BTN_DEL.forEach((item) => {
    item.addEventListener("click", delTask);
  });
  let BTN_NEXT = document.querySelectorAll("#btn-next");
  BTN_NEXT.forEach((item) => {
    item.addEventListener("click", moveTask);
  });

  let BTN_BACK = document.querySelectorAll("#btn-back");
  BTN_BACK.forEach((item) => {
    item.addEventListener("click", backTask);
  });

  countTasks();

  console.log(toDoTasks);
  let toDoJSON = JSON.stringify(toDoTasks);
  let inProcJSON = JSON.stringify(inProcTasks);
  let doneJSON = JSON.stringify(doneTasks);
  console.log(toDoJSON);
  localStorage.setItem("tasksToDo", toDoJSON);
  localStorage.setItem("tasksInProc", inProcJSON);
  localStorage.setItem("tasksDone", doneJSON);
}
