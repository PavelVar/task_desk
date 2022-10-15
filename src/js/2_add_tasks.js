import { renderTemplate } from "./3_render_todo";
import { delTask } from "./4_del.js";
import { countTasks } from "./count.js";
import { moveTask } from "./5_next.js";
import { backTask } from "./6_back.js";
import { addToLocalStorage } from "./7_add_to_local_stor.js";

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

  addToLocalStorage();
}
