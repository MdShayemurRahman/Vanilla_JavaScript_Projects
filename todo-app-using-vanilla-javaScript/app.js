const container = document.querySelector(".container");
const textBox = document.getElementById("textBox");
const todoList = document.getElementById("TodoList");

const Alarm = () => {
  const noTaskAlarm = document.createElement("p");
  noTaskAlarm.textContent = "No task given!";
  noTaskAlarm.classList.add("no-task");

  setTimeout(() => {
    noTaskAlarm.classList.remove("no-task");
    noTaskAlarm.textContent = "No task Added!";
  }, 500);
  container.appendChild(noTaskAlarm);
};

document.getElementById("addTask").addEventListener("click", () => {
  const listElement = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");

  checkBox.type = "checkbox";
  checkBox.id = textBox.value;
  checkBox.value = false;

  label.id = textBox.value;
  label.appendChild(document.createTextNode(" " + textBox.value));

  listElement.appendChild(checkBox);
  listElement.appendChild(label);

  textBox.value != "" ? todoList.appendChild(listElement) : Alarm();

  checkBox.addEventListener("click", () => {
    checkBox.checked
      ? label.classList.add("mark-done")
      : label.classList.remove("mark-done");
  });

  textBox.value = ""; // clear input field after adding a task
});
