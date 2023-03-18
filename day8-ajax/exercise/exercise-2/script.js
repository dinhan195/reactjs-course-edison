/** @format */
let items = [];
async function getData() {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    .then((response) => {
      let data = response.data;
      items = data.meals;
      console.log(data);
      console.log(items);
      renderItem();
    });
}
const listItems = document.querySelector('.list-item');
function renderItem() {
  let item = items.map((item) => {
    let name = item.strMeal;
    let img = item.strMealThumb;
    console.log(11, name, img);

    return `<div class="item-details">
    <img
      class="img-item"
      src="${img}"
      alt="" />
    <span class="name-item">${name}</span>
  </div>`;
  });
  listItems.innerHTML = item.join('');
}
getData();
