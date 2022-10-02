export function countTasks() {
  let tasksToDo = document.querySelector("#tasks-todo");
  let toDoChildren = tasksToDo.children;
  let toDoAmount = document.querySelector("#to-do-amount");
  toDoAmount.textContent = `${toDoChildren.length} tasks`;

  tasksToDo = document.querySelector("#tasks-inprocess");
  toDoChildren = tasksToDo.children;
  toDoAmount = document.querySelector("#in-process-amount");
  toDoAmount.textContent = `${toDoChildren.length} tasks`;

  tasksToDo = document.querySelector("#tasks-done");
  toDoChildren = tasksToDo.children;
  toDoAmount = document.querySelector("#done-amount");
  toDoAmount.textContent = `${toDoChildren.length} tasks`;
}
