/** @format */
const todos = ['Item 1', 'Item 2', 'Item 3'];
let btnIndex = null;

const todoList = document.querySelector('ul');
const form = document.querySelector('form');
const btn = document.querySelector('button[type="submit"]');
const input = document.querySelector('input[type="text"]');
btn.addEventListener('click', addTodo);
function addTodo(event) {
  event.preventDefault();
  const input = document.querySelector('input[type="text"]');

  if (btnIndex === null) {
    todos.push(input.value);
  } else {
    todos[btnIndex] = input.value;
    btn.innerText = 'Add';
    btnIndex = null;
  }

  input.value = '';
  render();
}
function deleteTodo(index) {
  todos.splice(index, 1);

  render();
}
function editTodo(index) {
  btn.innerText = 'Edit';
  input.value = todos[index];
  btnIndex = index;
}
function render() {
  let newTodo = todos.map((todo) => {
    return `<li>${todo}
     <button id="edit">Edit</button>
     <button id="delete">Delete</button>
     </li>
     `;
  });

  todoList.innerHTML = newTodo.join('');
  const deleteButton = document.querySelectorAll('#delete');
  deleteButton.forEach((todo, index) => {
    let btnDelete = deleteButton[index];
    btnDelete.addEventListener('click', () => {
      deleteTodo(index);
    });
  });
  const btnEdit = document.querySelectorAll('#edit');
  btnEdit.forEach((todo, index) => {
    const editButton = btnEdit[index];
    editButton.addEventListener('click', () => {
      editTodo(index);
    });
  });
}
function intializeApp() {
  render();
}
intializeApp();
