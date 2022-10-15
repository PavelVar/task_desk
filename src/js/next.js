import { addTask } from "./2_add_tasks";
import { delTask } from "./deletes.js";
import { toDoTasks } from "./1_base";

export function moveTask(event) {
  let elID = event.target.dataset.elid;
  task = toDoTasks[elID - 1];
  // let task = new Object();
  // let elID =
  //   event.target.closest(".task-wrap").firstChild.firstChild.textContent;

  // let items = document.querySelectorAll(".data-task_text");
  // for (let i = 0; i < items.length; i++) {
  //   if (items[i].dataset.elid == elID) {
  //     task.text = items[i].textContent;
  //   }
  // }

  // for (i of document.querySelectorAll(".task-date")) {
  //   if (i.dataset.elidDate == elID) {
  //     task.date = i.textContent;
  //   }
  // }

  // for (i of document.querySelectorAll(".task-prior")) {
  //   if (i.dataset.elidPrior == elID) {
  //     task.priority = i.textContent;
  //   }
  // }

  // for (i of document.querySelectorAll(".responsible")) {
  //   if (i.dataset.elidResp == elID) {
  //     task.responsible = i.textContent;
  //   }
  // }

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
