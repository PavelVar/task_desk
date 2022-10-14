// import { toDoTasks } from "./1_base";
import { renderTemplate } from "./3_render_todo";
import { delTask } from "./deletes.js";
import { countTasks } from "./count.js";

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

  let BTN_DEL = document.querySelectorAll("#btn-del");
  BTN_DEL.forEach((item) => {
    item.addEventListener("click", (item) => {
      delTask(item, task.id);
    });
  });

  countTasks();
}
