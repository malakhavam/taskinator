var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {  
    
  event.preventDefault();  
  // creates a new task item  
  var listItemEl = document.createElement("li");
  // styles the task item
  listItemEl.className = "task-item";
  // adds a text
  listItemEl.textContent = "This is a new task.";
  // append this element to the task list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);