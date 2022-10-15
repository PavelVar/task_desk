import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";
import { nums } from "./1_base";

export function addToLocalStorage() {
  let toDoArr = new Array();
  let inProcArr = new Array();
  let doneArr = new Array();

  for (el of toDoTasks) {
    toDoArr.push(el);
  }

  for (el of inProcTasks) {
    inProcArr.push(el);
  }

  for (el of doneTasks) {
    doneArr.push(el);
  }

  localStorage.clear();

  let toDoJSON = JSON.stringify(toDoArr);
  localStorage.setItem("toDo", toDoJSON);

  let inProcJSON = JSON.stringify(inProcArr);
  localStorage.setItem("inProc", inProcJSON);

  let doneJSON = JSON.stringify(doneArr);
  localStorage.setItem("done", doneJSON);
}
