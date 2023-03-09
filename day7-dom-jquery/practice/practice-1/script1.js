/** @format */

const todos = [];
const todoList = document.querySelector('ul');
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.querySelector('input');

  todos.push(input.value);
  if (input.value.length > 0) {
    input.value = '';
    render();
  } else {
    alert('Chưa nhập gì cả');
  }
});
function editTodo(index) {
  if (todos[index].length > 0) {
    const input = document.querySelector('input');
    input.value = todos[index];
  } else {
    alert('không có gì để edit');
  }
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
  for (let index = 0; index < editTodos.length; index++) {
    const buttonEdit = editTodos[index];
    buttonEdit.addEventListener('click', function () {
      editTodo(index);
    });
  }
}
render();
