console.log('script running...');

// fetching elements [1]
let latitude = document.querySelector('.latitude');
let longitude = document.querySelector('.longitude');
let contentBox = document.querySelector('.content-box');
let form = document.querySelector('form');

// fetching elements [2]
let cityName = contentBox.children[0].childNodes[3];
let temprature = contentBox.children[1].childNodes[3];
let humidityBox = contentBox.children[2].childNodes[3];
let atmosphereBox = contentBox.children[3].childNodes[3];

// important API key..
const APIKEY = '1cb5fbb878423f70e009dee0fbfb62d9';

// firing event listner on form submission..
form.addEventListener('submit', (event) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=${APIKEY}`;

  // fetching data from API
  fetch(url)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      console.log(data);
      displayContent(data); // this function is displaying data on web..
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  // doing changes in HTMl element's styling
  contentBox.style.display = 'flex';
  event.preventDefault();
});

const displayContent = (data) => {
  // fetched_values from JSON
  let city = data.name;
  let celcius = Math.floor(data.main.temp - 273.15);
  let humidity = data.main.humidity;
  let atmosphere = data.weather[0].main;

  // inserting data into elements
  cityName.textContent = city;
  temprature.textContent = `${celcius}°C`;
  humidityBox.textContent = `${humidity} hpa humidity`;
  atmosphere.textContent = `${atmosphere}`;
};
