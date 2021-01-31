import run from "./modules/doms";

// BABEL
const regeneratorRuntime = require("regenerator-runtime");

// Pulls the inputs from html file
const place = document.querySelector("#place");
const subBtn = document.querySelector(".fa-search");


// temp unit (metric = C; imperial = F)
let tUnit = "imperial";
const fBtn = document.querySelector("#fBtn");
const cBtn = document.querySelector("#cBtn");

fBtn.addEventListener('click', () => {
  cBtn.removeAttribute("class", "btnSelect");
  fBtn.setAttribute("class", "btnSelect");
  tUnit = "imperial";
  run(place.value, tUnit)
})

cBtn.addEventListener('click', () => {
  fBtn.removeAttribute("class", "btnSelect");
  cBtn.setAttribute("class", "btnSelect");
  tUnit = "metric";
  run(place.value, tUnit)
})


// Calls function on start
run("London", tUnit);
place.value = "London";


// Event to change location
subBtn.addEventListener('click', () => {
  run(place.value, tUnit)
});


// FETCH CURRENT WEATHER FUNCTION
export default async function weatherAPI(p, t) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${p}&units=${t}&APPID=a649f8f0f6c898c4fe7ae2dfea5f0800`);
    const weaData = await response.json();
    return weaData;
  } catch(error) {
    console.log(error)
  };
};




/*

FAVICON doesn't want to work
The maps are shit, don't worry about them
Put in the forecast (7-day?)
>>> https://openweathermap.org/api/one-call-api
Add credit to github
Key bind `enter` to search
Consider adding a loading image/animation


OpenWeather API

a649f8f0f6c898c4fe7ae2dfea5f0800
name: weather-app

DOCS:
https://openweathermap.org/current


      temp: weaData.main.temp, 
      feels: weaData.main.feels_like,
      humid: weaData.main.humidity,
      press: weaData.main.pressure,
      tMin: weaData.main.temp_min,
      tMax: weaData.main.temp_max,
      country: weaData.sys.country,
      sunrise: weaData.sys.sunrise,
      sunset: weaData.sys.sunset,
      mainDesc: weaData.weather[0].main,
      desc: weaData.weather[0].description,
      icon: weaData.weather[0].icon,
      id: weaData.weather[0].id,
      windDir: weaData.wind.deg,
      windSp: weaData.wind.speed,
      clouds: weaData.clouds.all,
      visible: weaData.visibility,
      city: weaData.name,
      tmz: weaData.timezone




DATA I'D LIKE TO HAVE
- MAIN
-- temp (min/max)
-- feels like temp
-- humidity/pressure
- SYS
-- country
-- sunrise
-- sunset
- WEATHER
-- 0
--- main (main desc)
--- description (could use id desc?)
--- icon (https://openweathermap.org/weather-conditions)
--- id (https://openweathermap.org/weather-conditions)
- WIND
-- deg (wind direction/meteorlogical)
-- speed
- CLOUDS
-- all (%)
- NAME
- TIMEZONE (shift in seconds from UTC)
- VISIBILITY

*/