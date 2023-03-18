/** @format */
const trBody = document.querySelector('tbody');
let employees = [];
function getEmploy() {
  axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    employees = res.data;

    render();
  });
}
function render() {
  const trElement = employees.map((employee) => {
    return `<tr>
     <td>${employee.name}</td>
     <td>${employee.username}</td>
     <td>${employee.email}</td>
  </tr>`;
  });
  trBody.innerHTML = trElement.join('');
}
getEmploy();
