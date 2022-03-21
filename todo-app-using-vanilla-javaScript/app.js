const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");
const todoList = document.querySelector(".todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const createTodoElement = (todo) => {
  console.log(todoList);

  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <input id="${todo.id}" type="checkbox" name="checkbox"/> 
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.todo}</span>
    <button class="edit-todo"><i class="fas fa-edit"></i></button>
    <button class="delete-todo"><i class="fa fa-trash"></i></button>
  `;

  const isChecked = todo.checked ? "done" : "";

  listItem.setAttribute("class", `todo-item ${isChecked} ${todo.id}`);
  listItem.setAttribute("data-key", todo.id);

  todoList.append(listItem);

  todoItem = document.querySelector(`[data-key='${todo.id}']`);
  console.log(todos);

  // delete todo..
  const deleteTodoBtn = listItem.querySelector(".delete-todo");
  deleteTodoBtn.addEventListener("click", () => {
    const deletedItem = todos.indexOf(listItem);
    todos.splice(deletedItem);
    listItem.remove();

    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
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
