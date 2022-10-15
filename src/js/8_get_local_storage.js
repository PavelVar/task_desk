import { addTask } from "./2_add_tasks";
import { addToDo } from "./1_base";
import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";
import { addToLocalStorage } from "./7_add_to_local_stor.js";
import { nums } from "./1_base";

export function getDataFromLocalStorage() {
  let toDo = localStorage.getItem("toDo");
  toDo = JSON.parse(toDo);

  let inProc = localStorage.getItem("inProc");
  inProc = JSON.parse(inProc);

  let done = localStorage.getItem("done");
  done = JSON.parse(done);

  if (toDo && toDo.length > 0) {
    for (elem of toDo) {
      addTask(elem[1], "todo");
      toDoTasks.set(elem[1].id, elem[1]);
    }
  }

  if (inProc && inProc.length > 0) {
    for (elem of inProc) {
      addTask(elem[1], "in");
      inProcTasks.set(elem[1].id, elem[1]);
    }
  }

  if (done && done.length > 0) {
    for (elem of done) {
      addTask(elem[1], "done");
      doneTasks.set(elem[1].id, elem[1]);
    }
  }

  addToLocalStorage();

  let BTN_ADD = document.querySelector(".btn-input");
  BTN_ADD.onclick = addToDo;
}
