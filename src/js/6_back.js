import { addTask } from "./2_add_tasks";
import { delTask } from "./4_del.js";
import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";

export function backTask(event) {
  let elID = Number(event.target.dataset.elid);

  table = event.target.closest(".table").id;

  if (table == "table-done") {
    place = "in";
    task = doneTasks.get(elID);
    inProcTasks.set(elID, task);
  } else if (table == "table-inprocess") {
    place = "todo";
    task = inProcTasks.get(elID);
    toDoTasks.set(elID, task);
  }

  addTask(task, place);
  delTask(event);

  //   console.log(toDoTasks);
  //   console.log(inProcTasks);
  //   console.log(doneTasks);
}
