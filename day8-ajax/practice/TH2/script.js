/** @format */
const todoList = document.querySelector('ul');
const btnBack = document.querySelector('#back');
const btnNext = document.querySelector('#next');
const form = document.querySelector('form');

btnBack.addEventListener('click', backPage);
btnNext.addEventListener('click', nextPage);
form.addEventListener('submit', addTodo);
// todoList.addEventListener('click', handleClickedTodo);
let todos = [];
let limit = 10;
let page = 1;
async function getListTodo(params) {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${params.limit}&_page=${params.page}`
    )
    .then((response) => {
      todos = response.data;
      console.log(todos);
      renderTodo();
    });
}
async function addTodoList(params) {
  axios.post(`https://jsonplaceholder.typicode.com/todos`, params);
}

function addTodo(event) {
  event.preventDefault();
  const input = document.querySelector('input');
  let title = input.value.trim();
  const li = document.createElement('li');
  li.innerHTML = title;
  todoList.appendChild(li);

  let params = {
    userId: 2,
    title: title,
    completed: false,
  };

  addTodoList(params);
  input.value = '';
}

function renderTodo() {
  const todo = todos.map((todo, index) => {
    return `<li>${todo.title}
    <button id="edit" >Edit</button>
    <button id="delete" onclick="removeTodo(${todo.id})">Delete</button>
    </li>
    `;
  });

  // let editTask = (e) => {
  //   let selectedTask = e.parentElement.parentElement;

  //   textInput.value = input.value.innerHTML;
  // };
  todoList.innerHTML = todo.join('');
  let btnRemove = document.querySelectorAll('#delete');
  btnRemove.forEach((todo, index) => {
    let btnRemoves = btnRemove[index];
    btnRemoves.addEventListener('click', () => {
      removeTodoView(index);
    });
  });
}
function removeTodoView(index) {
  todos.splice(index, 1);
  renderTodo();
}

async function removeTodo(id) {
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      console.log(`Delte todo: ${id}`);
      return response.data;
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function backPage() {
  if (page == 1) return;
  page = page - 1;

  getListTodo({
    limit,
    page,
  });
}

function nextPage() {
  if (todos < 10) return;
  page = page + 1;

  getListTodo({
    limit,
    page,
  });
}
getListTodo({
  limit,
  page,
});
