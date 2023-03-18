/** @format */

const form = document.querySelector('form');
const input = document.querySelector('.input-search');
const message = document.querySelector('.message');
const cityTemp = document.querySelector('.main-app');
const url = 'https://api.openweathermap.org/data/2.5/';

form.addEventListener('submit', searchCity);
function searchCity(event) {
  event.preventDefault();
  let inputValue = input.value.trim();
  console.log(inputValue);
  search(inputValue);
}
async function search(input) {
  axios
    .get(`${url}weather?q=${input}&appid=72811c3ac85d47b7dcc870611087a1a7`)
    .then((response) => {
      let weather = response.data;
      console.log(weather);
      const icon = `https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`;
      console.log(icon);
      const weatherCity = document.createElement('div');
      weatherCity.className = 'weather-city';
      const weatherDetail = `
      <h2 class="city-name"><span>${weather.name}</span><sup class="country">${
        weather.sys.country
      }</sup></h2>
        <span class="city-temp">${
          Math.round(weather.main.temp) / 10
        }<sup>°C</sup></span>
        <div class="city-clouds">
          <img src="${icon}" alt="" />
          <h2>${weather.weather[0].description.toUpperCase()}</h2>
        </div>
      `;

      weatherCity.innerHTML = weatherDetail;
      cityTemp.appendChild(weatherCity);
    })
    .catch(() => {
      message.textContent = 'Please search for a valid city!';
    });
  form.reset();
}
