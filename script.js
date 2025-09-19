
let todos = [];

function addTodo() {
    /// Get input values
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    if (validateInput(todoInput.value, todoDate.value)) {

        /// Add to todos array
        const formTodo = { task: todoInput.value, date: todoDate.value, };
        todos.push(formTodo);

        /// Display updated todos
        displayTodos();

        /// Clear input fields
        todoInput.value = "";
        todoDate.value = "";
    }
}

function displayTodos() {
    /// Clear existing list
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    /// Display all todos
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
            <li class="border-b border-gray-300 py-2">${todo.task} - <span
                        class="text-sm text-gray-500">${todo.date}</span>
                        <button type="button" class="text-red-500" onclick="deleteTodo(${_})">Delete</button>
                    <filter-component></filter-component>
                </li>

        `;
    });
}

/// Mandate functions for future development
function deleteTodo(index) { 
    // Placeholder for delete functionality in future
    todos.splice(index, 1);
    displayTodos();
}

/// Mandate functions for future development
function filterTodos() {
    const filterValue = document.getElementById("filter").value;

    const filteredTodos = todos.filter(todo => {
        if (filterValue === "completed") {
            return todo.completed === true;
        } else if (filterValue === "pending") {
            return todo.completed === false;
        }
        return true;
    });

    displayFilteredTodos(filteredTodos);
}

function validateInput(todo, date) {
    /// Simple validation
    if (todo === "" || date === "") {
        alert("Please fill in both fields.");
        return false;
    }
    return true;
}
