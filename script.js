"use strict";
let city;
let lat;
let lon;
let units;
// city = "Denver";
units = "metric";
let weather = {
  apiKey: "",
  fetchGeo() {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => console.log((lat = data[0].lat), (lon = data[0].lon)));
  },
  fetchCity() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${units}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};

document.querySelector(".search-button").addEventListener("click", () => {
  city = document.querySelector(".search-bar").value;
  console.log(city);
  weather.fetchGeo();
  weather.fetchCity();
});
