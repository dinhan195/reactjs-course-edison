/** @format */

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(JSON.parse(this.response));
//     }
//   };
//   xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
//   xhttp.send();
// }
// loadDoc();
// function loadDoc() {
//   fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     response.json().then(function (res) {
//       console.log(222, res);
//     });
//   });
// }
// loadDoc();
const back = document.querySelector('#back');
const next = document.querySelector('#next');
let limit = 5;
let page = 1;
back.addEventListener('click', function (e) {
  page = page + 1;
  loadDoc({
    limit: limit,
    page: page,
  });
});
next.addEventListener('click', function (e) {
  if (page == 1) return;
  page = page - 1;
  loadDoc({
    limit: limit,
    page: page,
  });
});
function loadDoc(params) {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/users?_limit=${params.limit}&_page=${params.page}`
    )
    .then((res) => {
      console.log(222, res);
    });
}
loadDoc({
  limit: limit,
  page: page,
});
