// input now  Date
function displaytDate() {
  let nowDate = new Date();
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let day = nowDate.getDay();
  let date = nowDate.getDate();
  let month = nowDate.getMonth();
  let year = nowDate.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  document.querySelector(
    "#input-time"
  ).innerHTML = `${days[day]}  ${hours}:${minutes}`;
  console.log(`${months[month]} ${date}, ${year}`);
}

// units
function setTypeTemperature(event) {
  event.preventDefault();
  let unitWind = "";
  if (metric) {
    currentTemp = (currentTemp * 9) / 5 + 32;
    document.querySelector("#units").innerHTML = "°F";
    currentWind = currentWind * 2.23694;
    unitWind = "miles/h";
    metric = false;
  } else {
    currentTemp = ((currentTemp - 32) * 5) / 9;
    document.querySelector("#units").innerHTML = `°C`;
    currentWind = currentWind * 0.44704;
    unitWind = "m/sec";
    metric = true;
  }

  document.querySelector("#setTempValue").innerHTML = `${Math.round(
    currentTemp
  )}`;
  document.querySelector("#wind").innerHTML = `Wind : ${Math.round(
    currentWind
  )}${unitWind}`;
}
function displayWeatherCondition(response) {
  // console.log(axios);
  console.log(response.data);
  document.querySelector(
    "h1"
  ).innerHTML = `${response.data.name} ${response.data.sys.country}`;
  // console.log(response.data.weather[0].description);
  document.querySelector(
    "#description"
  ).innerHTML = `${response.data.weather[0].main}`;
  currentTemp = response.data.main.temp;
  document.querySelector("#setTempValue").innerHTML = `${Math.round(
    currentTemp
  )}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = ` ${response.data.main.humidity}`;
  document.querySelector("#clouds").innerHTML = ` ${response.data.clouds.all}`;
  currentWind = response.data.wind.speed;
  document.querySelector("#wind").innerHTML = `Wind : ${Math.round(
    currentWind
  )}m/sec`;
}
function retrieveDataWeather(cityName) {
  metric = true;
  let apiKey = "36eeef5b0cb8b4f4de85392d5b87261c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  displaytDate();
}

// search  City  Name
function searchCityName(event) {
  event.preventDefault();
  let inputCityName = document.querySelector("#city-input").value;
  inputCityName = inputCityName.trim();
  retrieveDataWeather(`q=${inputCityName}`);
}
// current City Name
function currentLocation(event) {
  function retrievePosition(position) {
    let positionCityName = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    retrieveDataWeather(positionCityName);
  }
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
// favorite navigator
let favoriteCity = ["Kyiv", "Paris", "Sydney", "New York"];
function nameCityKyiv() {
  retrieveDataWeather(`q=${favoriteCity[0]}`);
}
function nameCityParis() {
  retrieveDataWeather(`q=${favoriteCity[1]}`);
}
function nameCitySydney() {
  retrieveDataWeather(`q=${favoriteCity[2]}`);
}
function nameCityNewYork() {
  retrieveDataWeather(`q=${favoriteCity[3]}`);
}
document.querySelector("#kyiv").addEventListener("click", nameCityKyiv);
document.querySelector("#paris").addEventListener("click", nameCityParis);
document.querySelector("#sydney").addEventListener("click", nameCitySydney);
document.querySelector("#newYork").addEventListener("click", nameCityNewYork);
// start
let currentTemp = 22;
let currentWind = 0;
let metric = true;
let city = "kyiv";
retrieveDataWeather(`q=${city}`);
// unit = metric/iperial
let setTempValue = document.querySelector("#units");
setTempValue.addEventListener("click", setTypeTemperature);

// searchCityName
let cityInput = document.querySelector(".form-input");
cityInput.addEventListener("submit", searchCityName);
// currentCityName
let currentCity = document.querySelector("#current-location-button");
currentCity.addEventListener("click", currentLocation);
