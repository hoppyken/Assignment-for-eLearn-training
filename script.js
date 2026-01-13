let todos = [];

let todoInput = "";

const addTodo = (task) => {
  const todo = {
    id: todos.length + 1,
    task: task,
    completed: false,
  };

  todos.push(todo);
};

const htmlList = document.getElementById("todoList");

const renderTodos = () => {
  htmlList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.task;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      renderTodos();
    });
    li.prepend(checkbox);

    // remove task button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      const newTodos = todos.filter((t) => t.id != todo.id);
      todos = newTodos;
      renderTodos();
    });
    li.appendChild(removeBtn);

    li.className = todo.completed == true ? "completed" : "uncompleted";
    htmlList.appendChild(li);
  });
};

document.getElementById("todoInput").addEventListener("input", (event) => {
  todoInput = event.target.value;
});

document.getElementById("addBtn").addEventListener("click", () => {
  addTodo(todoInput);
  renderTodos();
});

renderTodos();
