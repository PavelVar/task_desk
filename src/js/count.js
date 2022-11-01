import { toDoTasks } from "./1_base";
import { inProcTasks } from "./1_base";
import { doneTasks } from "./1_base";

export function countTasks() {
  //   let tasksToDo = document.querySelector("#tasks-todo");
  //   let toDoChildren = tasksToDo.children;
  let toDoAmount = document.querySelector("#to-do-amount");
  // toDoAmount.textContent = `${toDoChildren.length} tasks`;
  toDoAmount.textContent = `${toDoTasks.size} tasks`;

  //   tasksToDo = document.querySelector("#tasks-inprocess");
  //   toDoChildren = tasksToDo.children;
  toDoAmount = document.querySelector("#in-process-amount");
  //   toDoAmount.textContent = `${toDoChildren.length} tasks`;
  toDoAmount.textContent = `${inProcTasks.size} tasks`;

  //   tasksToDo = document.querySelector("#tasks-done");
  //   toDoChildren = tasksToDo.children;
  toDoAmount = document.querySelector("#done-amount");
  //   toDoAmount.textContent = `${toDoChildren.length} tasks`;
  toDoAmount.textContent = `${doneTasks.size} tasks`;
}
