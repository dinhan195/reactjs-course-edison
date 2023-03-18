/** @format */

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const todoList = document.querySelector('ul');
const btnBack = document.querySelector('#back');
const btnNext = document.querySelector('#next');
const btnAddTodo = document.querySelector('form');
let todos = [];
let limit = 10;
let page = 1;
async function getTodos(params) {
  axios
    .get(`${BASE_URL}/todos?_limit=${params.limit}&_page=${params.page}`)
    .then((response) => {
      todos = response.data;
      renderTodos();
    });
}

// Add todo
btnAddTodo.addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelector('input');
  let title = input.value;
  addTodo({
    userId: 2,
    title: title,
    completed: false,
  });
  async function addTodo(params) {
    axios.post(`${BASE_URL}/todos?`, params);
  }
});
function renderTodos() {
  let todosList = todos.map((todo) => {
    todos = `
      <li class="todo-item-${todo.id}">${todo.title}<div><button id="edit" onclick="handleUpdate(${todo.id})">Edit</button>
      <button id="delete" onclick="handleDelete(${todo.id})">Delete</button></div></li>
      `;
    return todos;
  });
  todoList.innerHTML = todosList.join('');
  //   const buttonDelete = document.querySelectorAll('#delete');
  //   buttonDelete.forEach((value, index) => {
  //     let buttonDeletes = buttonDelete[index];
  //     buttonDeletes.addEventListener('click', () => {
  //       handleDelete(index);
  //     });
  //   });
}
function handleUpdate(title) {
  console.log(title);
}
function handleDelete(id) {
  async function deleteTodo(id) {
    console.log(id);
    axios.delete(`${BASE_URL}/todos/${id}`).then(() => {
      let delteItem = document.querySelector(`.todo-item-${id}`);
      if (delteItem) {
        delteItem.remove();
      }
    });
  }

  deleteTodo(id);
}
// Back page
btnBack.addEventListener('click', () => {
  if (page == 0) return;
  page = page - 1;
  getTodos({
    limit: limit,
    page: page,
  });
});
// Next page
btnNext.addEventListener('click', () => {
  if (todos < 10) return;
  page = page + 1;
  getTodos({
    limit: limit,
    page: page,
  });
});

function initialApp() {
  getTodos({
    page: page,
    limit: limit,
  });
}
initialApp();
