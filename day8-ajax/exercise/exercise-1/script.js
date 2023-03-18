/** @format */
const ol = document.querySelector('.list-item');
const imgItem = document.querySelector('.img-item');
const typeItem = document.querySelector('#type');
const nameItem = document.querySelector('#name');
let listPokemons = [];
async function getData() {
  axios.get(`https://pokeapi.co/api/v2/pokemon`).then((response) => {
    let data = response.data;
    listPokemons = data.results;
    render();
    console.log(data);
  });
}

function render() {
  let pokemon = listPokemons.map((pokemon, index) => {
    index = index + 1;

    return `<button
     onclick="getDetailItem(${index})">
    ${index}. ${pokemon.name.toUpperCase()}
    </button>`;
  });
  ol.innerHTML = pokemon.join('');
}
async function getDetail(name) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    let data = response.data;
    let img = data.sprites.back_default;
    let type = data.types[0].type.name;
    imgItem.setAttribute('src', img);
    typeItem.innerText = type.toUpperCase();
    nameItem.innerText = name.toUpperCase();
  });
}
function getDetailItem(index) {
  let name = listPokemons[index].name;

  getDetail(name);
}
getData();
