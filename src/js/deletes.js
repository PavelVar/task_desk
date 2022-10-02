import { countTasks } from "./count.js";

export function delTask(event) {
  event.target.closest(".task").remove();
  countTasks();
}
