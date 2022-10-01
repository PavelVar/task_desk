import { delTask } from "./deletes.js";

export function addToDo(task, key, place) {
  if (place == "todo") {
    place = ".tasks#tasks-todo";
  } else if (place == "in") {
    place = ".tasks#tasks-inprocess";
  } else if (place == "done") {
    place = ".tasks#tasks-done";
  }

  let table = document.querySelector(place);

  let taskBlock = document.createElement("div");
  taskBlock.classList.add("task");

  let taskWrapBlock = document.createElement("div");
  taskWrapBlock.classList.add("task-wrap");

  let numberBlock = document.createElement("div");
  numberBlock.classList.add("number");

  let numSpanBlock = document.createElement("span");

  let taskTextBlock = document.createElement("div");
  taskTextBlock.classList.add("task-text");

  let pBlock = document.createElement("p");
  pBlock.classList.add("data-task_text");

  let taskData = document.createElement("div");
  taskData.classList.add("task-data");

  let spanDataBlock = document.createElement("span");
  let spanPriorityBlock = document.createElement("span");

  let taskResponsible = document.createElement("div");
  taskResponsible.classList.add("task-responsible");

  let spanResponsibleBlock = document.createElement("span");

  let wrapBtnsBlock = document.createElement("div");
  wrapBtnsBlock.classList.add("wrap-btns");

  let btnDelBlock = document.createElement("button");
  btnDelBlock.setAttribute("id", "btn-del");

  let btnUpdtBlock = document.createElement("button");
  btnUpdtBlock.setAttribute("id", "btn-updt");

  let btnNextBlock = document.createElement("button");
  btnNextBlock.setAttribute("id", "btn-next");

  table.append(taskBlock);
  taskBlock.append(taskWrapBlock);
  taskWrapBlock.append(numberBlock);
  numberBlock.append(numSpanBlock);
  taskWrapBlock.append(taskTextBlock, taskData, taskResponsible);
  taskTextBlock.append(pBlock);
  taskWrapBlock.append(wrapBtnsBlock);
  wrapBtnsBlock.append(btnDelBlock, btnUpdtBlock, btnNextBlock);
  taskData.append(spanDataBlock, spanPriorityBlock);
  taskResponsible.append(spanResponsibleBlock);

  btnDelBlock.textContent = "Delete";
  btnUpdtBlock.textContent = "Update";
  btnNextBlock.textContent = "Move next";
  pBlock.textContent = task.text;
  numSpanBlock.textContent = key;
  spanDataBlock.textContent = task.date;
  spanPriorityBlock.textContent = task.priority;
  spanResponsibleBlock.textContent = task.responsible;

  if (task.priority == "high") {
    spanPriorityBlock.style.background = "red";
  } else if (task.priority == "medium") {
    spanPriorityBlock.style.background = "yellow";
  } else if (task.priority == "low") {
    spanPriorityBlock.style.background = "lime";
  }

  let BTN_DEL = document.querySelectorAll("#btn-del");
  BTN_DEL.forEach((item) => {
    item.addEventListener("click", delTask);
  });
}
