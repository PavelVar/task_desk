import { addTask } from "./2_add_tasks";
import { delTask } from "./deletes.js";
import { toDoTasks } from "./1_base";

export function moveTask(event) {
  let elID = event.target.dataset.elid;
  task = toDoTasks[elID - 1];

  table = event.target.closest(".table").id;
  if (table == "table-todo") {
    place = "in";
  } else if (table == "table-inprocess") {
    place = "done";
  }
  console.log(task);
  addTask(task, place);
  delTask(event, task.id);
}
