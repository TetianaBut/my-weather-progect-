let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  sanfrancisco: {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here
// let city = prompt("Enter a city(example: Paris)").trim();

let city = "Sydney";
let cityName = city.replace(" ", "").toLowerCase();
// console.log(cityName);
if (weather[cityName] !== undefined) {
  // if (cityName in weather) {
  let temperature = Math.floor(weather[cityName].temp);
  let temperatureF = Math.floor((temperature * 9) / 5 + 32);
  alert(
    `It is currently ${temperature}°C (${temperatureF}°F) in ${city} with a humidity of ${weather[cityName].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for ${city}, try going to https://www.google.com/search?q=weather+${cityName}`
  );
}
// type-temperatyre
// let temperature = document.querySelector("a.type-temperatyre");
// console.log(temperature);
// temperature = Math.round(weather[cityName].temp);
// let temperatureF = Math.round((temperature * 9) / 5 + 32);
// alert(
//   `It is currently ${temperature}°C (${temperatureF}°F) in ${city} with a humidity of ${weather[cityName].humidity}%`
// );
// var str = "20°C";
// var temperature = 22;

// if (str.includes("F")) {
//   temperature = Math.round(((temperature - 32) * 5) / 9);
//   console.log(`${temperature}°C`);
// } else {
//   temperature = Math.round((temperature * 9) / 5 + 32);
//   console.log(`${temperature}°F`);
// }
