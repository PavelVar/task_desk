import { countTasks } from "./count.js";
import { toDoTasks } from "./1_base";

export function delTask(event) {
  id = Number(event.target.dataset.elid);

  event.target.closest(".task").remove();

  toDoTasks.delete(id);

  countTasks();
}
