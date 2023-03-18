/** @format */
const todosList = document.querySelector('ul');
const btnBack = document.querySelector('#back');
const btnNext = document.querySelector('#next');
const btnAdd = document.querySelector('form');

let todos = [];
let limit = 10;
let page = 1;

// function deleteTodobtn(todo) {
//   todo.remove();
//   deleteTodo(todo);
// }

btnAdd.addEventListener('click', function (e) {
  e.preventDefault();
  const input = document.querySelector('input');
  let title = input.value.trim();

  addTodo({
    userId: 2,
    title: title,
    completed: false,
  });
  renderTodos();
});

btnBack.addEventListener('click', function (e) {
  if (page === 0) return;
  page = page - 1;

  getTodos({
    limit: limit,
    page: page,
  });
});
btnNext.addEventListener('click', function (e) {
  if (todos < 10) return;
  page = page + 1;
  getTodos({
    limit: limit,
    page: page,
  });
});

function renderTodos() {
  let todoList = todos.map((todo) => {
    return `<ul>
      <li>${todo.title} <div id="btn-group"><button id="edit">Edit</button>
      <button id="delete">Delete</button></div></li>
      </ul>`;
  });
  todosList.innerHTML = todoList.join('');

  const btnDeletes = document.querySelectorAll('#delete');
  btnDeletes.forEach(function (value, index) {
    let deleteButton = btnDeletes[index];
    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
    });
  });
}
async function deleteTodo(index) {
  todos.splice(index, 1);
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${index}`);
}
function addTodo(params) {
  console.log(params);
  axios.post(`https://jsonplaceholder.typicode.com/todos`, params);
}
function getTodos(params) {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${params.limit}&_page=${params.page}`
    )
    .then((res) => {
      todos = res.data;
      console.log(todos);
      renderTodos();
    });
}

getTodos({
  limit: limit,
  page: page,
});
