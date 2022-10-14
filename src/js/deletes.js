import { countTasks } from "./count.js";
import { toDoTasks } from "./1_base";

export function delTask(event, id) {
  event.target.closest(".task").remove();
  toDoTasks.splice(id - 1, 1);
  countTasks();
}
