// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let button = document.querySelector("button");
// let box = document.querySelector(".box");

// button.addEventListener("click", function () {
//   //   console.log(input.value);
//   box.style.top = input1.value + "px";
//   box.style.left = input2.value + "px";
// });

let input_search_address = document.getElementById("search_weather");
let search_button = document.querySelector("button");
let temperature = document.getElementById("temperature");
let img = document.querySelector(".image_temperature img");

search_button.addEventListener("click", function () {
  fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${input_search_address.value}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      // console.log(data.results[0].latitude);
      // console.log(data.results[0].longitude);

      let latitude = data.results[0].latitude;
      let longitude = data.results[0].longitude;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data_weather) {
          console.log(data_weather);
          let weather_code = data_weather.current_weather.weathercode;
          let time = data_weather.current_weather.time;
          let data_date = time.split("T");
          console.log(data_date);
          // console.log(weather_code);
          if (weather_code >= 0 && weather_code <= 3) {
            img.src = "./sun.png";
          } else if (weather_code >= 45 && weather_code < 77) {
            img.src = "./rain.png";
          } else if (weather_code >= 77 && weather_code < 99) {
            img.src = "./thunder.png";
          }

          temperature.innerText = data_weather.current_weather.temperature;
          console.log(data_weather.current_weather.temperature);
        });
    });
});

let t = "Phuong Doanh";
let v = t.substring(t.length - 5, t.length);
console.log(v);
