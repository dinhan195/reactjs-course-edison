/** @format */

const todos = [];

const todoList = document.querySelector('ul');

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.querySelector('input');

  const value = input.value;
  todos.push(value);

  input.value = '';

  render();
});

function handleDelete(index) {
  todos.splice(index, 1);

  render();
}

function render() {
  const todoElements = todos.map(function (todo) {
    return `
          <li>
            <span>${todo}</span>
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
          </li>
        `;
  });

  todoList.innerHTML = todoElements.join('');

  const deleteButtons = document.querySelectorAll('#delete');

  for (let index = 0; index < deleteButtons.length; index++) {
    const deleteButton = deleteButtons[index];
    deleteButton.addEventListener('click', function () {
      handleDelete(index);
    });
  }
}

function initialApp() {
  render();
}

initialApp();
