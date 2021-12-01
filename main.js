// adding today's date to the nav
let time = document.getElementById("nav__currDate");
let year = document.getElementById("currentYear");
const date = new Date();
time.textContent = ` ${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`;
year.textContent = `, ${date.getFullYear()}`;

// declaring variables from html using their ID
let todoInProgress = document.getElementById("inProgress__listItems__lists__ul");
let todoCompleted = document.getElementById("inProgress__listItems__lists__ul--completed");
let lastTask = document.getElementById("lastTask__span");
let inputEl = document.getElementById("inputEl")
const primaryBtn = document.getElementById("listTodo__inputFields--active");

// for creating todo
const createTodo = (task) => {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let spanElement = document.createElement("span");
  spanElement.textContent = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(spanElement);
  if (!inputEl.value) {
    return
  }
  return listItem;
};

// for adding the todo to Todo in progress ul
const addTask = () => {
  let listItem = createTodo(inputEl.value);
  todoInProgress.appendChild(listItem);
  inputEl.value = "";
  bindIncompleteItems(listItem, completeTask);
};

// on Selection of primary btn
primaryBtn.addEventListener("click", addTask);

// functionality while todo is completed 
const completeTask = (event) => {
  let listItem = event.target.parentElement;
  let deleteSpan = document.createElement("span");
  deleteSpan.innerHTML = "&cross;";
  deleteSpan.classList.add("inProgress__listItems__lists__ul__li--active");
  listItem.appendChild(deleteSpan);
  let checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();

  // adding checked task to todo completed container
  todoCompleted.appendChild(listItem);

  // adding last task to last task container
  lastTask.innerHTML = `Completed ${listItem.textContent}` ;

  bindCompleteItems(listItem, removeTask);
};

// deleting item from completed todo
const removeTask = (event) => {
  let listItem = event.target.parentElement;
  let ulElement = listItem.parentElement;
  ulElement.removeChild(listItem);
};

// binding actions to checkbox
const bindIncompleteItems = (todoItem, checkBoxClicked) => {
  let checkBox = todoItem.querySelector("input[type=checkbox]");
  checkBox.onclick = checkBoxClicked;
};

// binding actions to delete button
const bindCompleteItems = (todoItem, deleteClicked) => {
  let deleteButton = todoItem.querySelector(".inProgress__listItems__lists__ul__li--active");
  deleteButton.onclick = deleteClicked;
};


