/** @format */
const url = 'https://jsonplaceholder.typicode.com/users';
const trBody = document.querySelector('tbody');
let data = [];
async function getEmployees() {
  axios.get(`${url}`).then((response) => {
    data = response.data;
    render();
  });
}
function render() {
  const trElement = data.map((data) => {
    return `<tr>
    <td>${data.name}</td>
    <td>${data.username}</td>
    <td>${data.email}</td
    </tr>
    `;
  });
  trBody.innerHTML = trElement.join('');
}
getEmployees();
