export function drag() {
  var taskElements = document.querySelectorAll(".task");

  for (let task of taskElements) {
    task.draggable = true;

    task.addEventListener("dragstart", dragstart);

    task.addEventListener("dragend", dragend);
  }
}

function dragstart(event) {
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragend(event) {
  event.target.classList.remove("hide");
}

export function dragover(event) {
  event.preventDefault();
}

export function dragdrop(event) {
  event.target.append(taskElement);
}

export function dragenter(event) {}

export function dragleave(event) {}
