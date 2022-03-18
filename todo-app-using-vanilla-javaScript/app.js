const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");
const todosElement = document.querySelector(".todos");
const messageElement = document.querySelector(".message");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const createTodoElement = (todo) => {
  const check = todo.checked ? "done" : "";

  const todoList = document.createElement("ul");
  const listItem = document.createElement("li");

  listItem.innerHTML = `<input id="${todo.id}" type="checkbox"> 
  <label for="${todo.id} class="mark"></label>
  <span>${todo.todo}</span>
  <button class="edit-todo">Edit</button>
  <button class="delete-todo">Delete</button>`;

  todoList.appendChild(listItem);
  todosElement.appendChild(todoList);

  listItem.setAttribute("class", `todo-item ${check}`);
  listItem.setAttribute("data-key", todo.id);

  todoInput.addEventListener("click", (e) => {
    if (e.target.classList.contains("mark")) {
      console.log("mark done");
    }
  });
};


const addTodoElement = (id, todo) => {
  todos.push({
    id: id,
    todo: todo,
    Completed: false,
  });

  localStorage.setItem("todos", JSON.stringify(todos));

  return { id, todo };
};

todos.forEach(createTodoElement);

todoForm.onsubmit = (e) => {
  e.preventDefault();
  const newTodo = addTodoElement(Date.now().toString(), todoInput.value);
  createTodoElement(newTodo);
  todoInput.value = "";
};
