//Getting all required elements 
const inputField = document.querySelector(".input-field textarea"),
  todoList = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

//we will call this function while adding, and checking-unchecking the task
function allTasks(){
  let tasks = document.querySelectorAll(".pending");
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
  let allLists = document.querySelectorAll(".list");
  if(allLists.length > 0){
    todoList.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoList.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

//add task while we put value in text area and press  enter
inputField.addEventListener("keyup",(e) => {
 let inputVal = inputField.value.trim();
 //if enter buttom is cliked and inputed value length is greated than 0.
 if(e.key === "Enter" && inputVal.length > 0){
let Tag =` <li class="list pending" onclick="handleStatus(this)"> <input type="checkbox"/> <span class="task">${inputVal}</span> <i class="uli ull-trash" onclick="deleteTask(this)"></i> </li>`;
  todoList.insertAdjacentHTML("beforeend",Tag);//inserting li tag inside the todolist div
  inputField.value = "";
  allTasks();
  }
});



//cheking and uncheking the chekbox we click on the task
function handleStatus(e){
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks()
}

//deleting task while we click on the delete icon.
function deleteTask(e){
  e.parentElement.remove();
  allTasks();
}

clearButton.addEventListener("click",() => {
  todoList.innerHTML = "";
  allTasks();
});

