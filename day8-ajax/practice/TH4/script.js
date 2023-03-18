/** @format */

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const movieList = document.querySelector('#movies');
let movies = [];
async function getListMovie() {
  let res = await axios.get(`${API_URL}`).then((response) => {
    movies = response.data.results;

    render();
  });
  // let listMovie = res.results;
  // console.log(listMovie);
}
function render() {
  let dataMovie = movies.map((movie) => {
    console.log(movie);
    return `
    <img src="${IMG_URL + movie.backdrop_path}">
    `;
  });
  movieList.innerHTML = dataMovie.join('');
}

getListMovie();
