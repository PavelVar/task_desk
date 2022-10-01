import { addToDo } from "./templates.js";
import { toDoTasks } from "./index.js";

export function delTask(event) {
  event.target.closest(".task").remove();
}

export function moveTask(event) {
  let task = new Object();
  let elID =
    event.target.closest(".task-wrap").firstChild.firstChild.textContent;
  for (i of document.querySelectorAll(".data-task_text")) {
    if ((i.dataset.elid = elID)) {
      task.text = i.textContent;
    }
  }
  for (i of document.querySelectorAll(".task-date")) {
    if ((i.dataset.elidDate = elID)) {
      task.date = i.textContent;
    }
  }
  for (i of document.querySelectorAll(".task-prior")) {
    if ((i.dataset.elidPrior = elID)) {
      task.priority = i.textContent;
    }
  }
  for (i of document.querySelectorAll(".responsible")) {
    if ((i.dataset.elidResp = elID)) {
      task.responsible = i.textContent;
    }
  }
  console.log(task);

  addToDo(task, elID, "done");
  delTask(event);
}
