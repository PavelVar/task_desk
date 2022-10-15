import { countTasks } from "./count.js";
import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";

export function delTask(event) {
  id = Number(event.target.dataset.elid);

  event.target.closest(".task").remove();

  if (table == "table-todo") {
    toDoTasks.delete(id);
    // console.log(toDoTasks);
  } else if (table == "table-inprocess") {
    inProcTasks.delete(id);
    // console.log(inProcTasks);
  } else if (table == "table-done") {
    doneTasks.delete(id);
    // console.log(doneTasks);
  }

  countTasks();

  let toDoJSON = JSON.stringify(toDoTasks);
  let inProcJSON = JSON.stringify(inProcTasks);
  let doneJSON = JSON.stringify(doneTasks);

  localStorage.setItem("tasksToDo", toDoJSON);
  localStorage.setItem("tasksInProc", inProcJSON);
  localStorage.setItem("tasksDone", doneJSON);
}
