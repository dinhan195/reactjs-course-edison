/** @format */

const todos = ['Item 1', 'Item 2', 'Item 3'];
let todoIndex = null;
const todoList = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.querySelector('input');
  if (todoIndex === null) {
    todos.push(input.value);
  } else {
    todos[todoIndex] = input.value;
    button.innerText = 'Add';
    todoIndex = null;
  }

  input.value = '';
  render();
});
function editTodo(index) {
  button.innerText = 'Edit';
  const input = document.querySelector('input');
  input.value = todos[index];
  todoIndex = index;

  render();
}
function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}
function render() {
  const newTodo = todos.map(function (todo, index) {
    return `<li>
    <span>${todo}</span>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </li>`;
  });
  todoList.innerHTML = newTodo.join('');
  const deleteButtons = document.querySelectorAll('#delete');

  for (let index = 0; index < deleteButtons.length; index++) {
    const deleteButton = deleteButtons[index];
    deleteButton.addEventListener('click', function () {
      deleteTodo(index);
    });
  }
  const editTodos = document.querySelectorAll('#edit');

  editTodos.forEach((todo, index) => {
    let buttonEdit = editTodos[index];
    buttonEdit.addEventListener('click', function () {
      editTodo(index);
    });
  });
}

render();
