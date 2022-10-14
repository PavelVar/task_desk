export function renderTemplate(task, place) {
  if (task.priority == "high") {
    color = "red";
  } else if (task.priority == "medium") {
    color = "yellow";
  } else if (task.priority == "low") {
    color = "lime";
  }

  const htmlForAll = `<div class="task">
                        <div class="task-wrap">
                          <div class="task-number" data-elid=${task.id}>
                            <span data-elid=${task.id}>${task.id}</span>
                          </div>
                          <div class="task-text" data-elid=${task.id}>
                            <p class="data-task_text" data-elid=${task.id}>${task.text}</p>
                          </div>
                          <div class="task-data" data-elid=${task.id}>
                            <span class="task-date" data-elid=${task.id}>${task.date}</span>
                            <span class="task-prior" data-elid-prior=${task.id} style="background: ${color};">${task.priority}</span>
                          </div>
                          <div class="task-responsible" data-elid=${task.id}>
                            <span class="responsible" data-elid-resp=${task.id}>${task.responsible}</span>
                          </div>`;

  const htmlForToDo = `
                          <div class="wrap-btns" data-elid=${task.id}>
                            <button id="btn-del" data-elid=${task.id}>Delete</button>
                            <button id="btn-next" data-elid=${task.id}>Move next</button>
                          </div>
                        </div>
                      </div>`;

  if (place == "todo") {
    return htmlForAll + htmlForToDo;
  } else if (place == "in") {
    return htmlForAll + htmlForToDo;
  } else if (place == "done") {
    return htmlForAll + htmlForToDo;
  }
}
