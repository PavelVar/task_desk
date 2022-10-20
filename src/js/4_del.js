import { countTasks } from "./count.js";
import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";
import { addToLocalStorage } from "./7_add_to_local_stor.js";

export function delTask(event) {
  id = Number(event.target.dataset.elid);

  table = event.target.closest(".table").id;

  element = event.target.closest(".task");
  console.log(element);
  element.style.animationPlayState = "running";
  element.addEventListener("animationend", () => {
    element.remove();
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

    addToLocalStorage();
  });
  // event.target.closest(".task").remove();

  // if (table == "table-todo") {
  //   toDoTasks.delete(id);
  //   // console.log(toDoTasks);
  // } else if (table == "table-inprocess") {
  //   inProcTasks.delete(id);
  //   // console.log(inProcTasks);
  // } else if (table == "table-done") {
  //   doneTasks.delete(id);
  //   // console.log(doneTasks);
  // }

  // countTasks();

  // addToLocalStorage();
}
