const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");
const todosElement = document.querySelector(".todo-list");
const messageElement = document.querySelector(".message");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const createTodoElement = (todo) => {
  console.log(todosElement);
  const listItem = document.createElement("li");

  const check = todo.checked ? "done" : "";

  listItem.innerHTML = `
    <input id="${todo.id}" type="checkbox" name="checkbox"/> 
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.todo}</span>
    <button class="edit-todo"><i class="fas fa-edit"></i></button>
    <button class="delete-todo"><i class="fa fa-trash"></i></button>
  `;

  listItem.setAttribute("class", `todo-item ${check}`);
  listItem.setAttribute("data-key", todo.id);

  todosElement.append(listItem);
};

todosElement.addEventListener("click", (event) => {
  console.log(event.target.parentElement.dataset.key);
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    console.log(itemKey);
  }
});

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
