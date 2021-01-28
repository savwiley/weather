/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Pulls the inputs from html file
const place = document.querySelector("#place");
const subBtn = document.querySelector("#subBtn");

// Uses London as a placeholder value
place.value = "London";

// Calls function
weatherAPI();

// Event to change location (could be 'onclick' in html)
subBtn.addEventListener('click', weatherAPI);


async function weatherAPI() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=imperial&APPID=a649f8f0f6c898c4fe7ae2dfea5f0800`);
  const weaData = await response.json();
  return weather = { 
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
    };
};


/*

Figure out how to export the object from the function


OpenWeather API

a649f8f0f6c898c4fe7ae2dfea5f0800
name: weather-app

DOCS:
https://openweathermap.org/current


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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsbUZBQW1GLFlBQVk7QUFDL0Y7QUFDQSxvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQdWxscyB0aGUgaW5wdXRzIGZyb20gaHRtbCBmaWxlXG5jb25zdCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2VcIik7XG5jb25zdCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1YkJ0blwiKTtcblxuLy8gVXNlcyBMb25kb24gYXMgYSBwbGFjZWhvbGRlciB2YWx1ZVxucGxhY2UudmFsdWUgPSBcIkxvbmRvblwiO1xuXG4vLyBDYWxscyBmdW5jdGlvblxud2VhdGhlckFQSSgpO1xuXG4vLyBFdmVudCB0byBjaGFuZ2UgbG9jYXRpb24gKGNvdWxkIGJlICdvbmNsaWNrJyBpbiBodG1sKVxuc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2VhdGhlckFQSSk7XG5cblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlckFQSSgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7cGxhY2UudmFsdWV9JnVuaXRzPWltcGVyaWFsJkFQUElEPWE2NDlmOGYwZjZjODk4YzRmZTdhZTJkZmVhNWYwODAwYCk7XG4gIGNvbnN0IHdlYURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB3ZWF0aGVyID0geyBcbiAgICB0ZW1wOiB3ZWFEYXRhLm1haW4udGVtcCwgXG4gICAgZmVlbHM6IHdlYURhdGEubWFpbi5mZWVsc19saWtlLFxuICAgIGh1bWlkOiB3ZWFEYXRhLm1haW4uaHVtaWRpdHksXG4gICAgcHJlc3M6IHdlYURhdGEubWFpbi5wcmVzc3VyZSxcbiAgICB0TWluOiB3ZWFEYXRhLm1haW4udGVtcF9taW4sXG4gICAgdE1heDogd2VhRGF0YS5tYWluLnRlbXBfbWF4LFxuICAgIGNvdW50cnk6IHdlYURhdGEuc3lzLmNvdW50cnksXG4gICAgc3VucmlzZTogd2VhRGF0YS5zeXMuc3VucmlzZSxcbiAgICBzdW5zZXQ6IHdlYURhdGEuc3lzLnN1bnNldCxcbiAgICBtYWluRGVzYzogd2VhRGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgZGVzYzogd2VhRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIGljb246IHdlYURhdGEud2VhdGhlclswXS5pY29uLFxuICAgIGlkOiB3ZWFEYXRhLndlYXRoZXJbMF0uaWQsXG4gICAgd2luZERpcjogd2VhRGF0YS53aW5kLmRlZyxcbiAgICB3aW5kU3A6IHdlYURhdGEud2luZC5zcGVlZCxcbiAgICBjbG91ZHM6IHdlYURhdGEuY2xvdWRzLmFsbCxcbiAgICB2aXNpYmxlOiB3ZWFEYXRhLnZpc2liaWxpdHksXG4gICAgY2l0eTogd2VhRGF0YS5uYW1lLFxuICAgIHRtejogd2VhRGF0YS50aW1lem9uZVxuICAgIH07XG59O1xuXG5cbi8qXG5cbkZpZ3VyZSBvdXQgaG93IHRvIGV4cG9ydCB0aGUgb2JqZWN0IGZyb20gdGhlIGZ1bmN0aW9uXG5cblxuT3BlbldlYXRoZXIgQVBJXG5cbmE2NDlmOGYwZjZjODk4YzRmZTdhZTJkZmVhNWYwODAwXG5uYW1lOiB3ZWF0aGVyLWFwcFxuXG5ET0NTOlxuaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvY3VycmVudFxuXG5cbkRBVEEgSSdEIExJS0UgVE8gSEFWRVxuLSBNQUlOXG4tLSB0ZW1wIChtaW4vbWF4KVxuLS0gZmVlbHMgbGlrZSB0ZW1wXG4tLSBodW1pZGl0eS9wcmVzc3VyZVxuLSBTWVNcbi0tIGNvdW50cnlcbi0tIHN1bnJpc2Vcbi0tIHN1bnNldFxuLSBXRUFUSEVSXG4tLSAwXG4tLS0gbWFpbiAobWFpbiBkZXNjKVxuLS0tIGRlc2NyaXB0aW9uIChjb3VsZCB1c2UgaWQgZGVzYz8pXG4tLS0gaWNvbiAoaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvd2VhdGhlci1jb25kaXRpb25zKVxuLS0tIGlkIChodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy93ZWF0aGVyLWNvbmRpdGlvbnMpXG4tIFdJTkRcbi0tIGRlZyAod2luZCBkaXJlY3Rpb24vbWV0ZW9ybG9naWNhbClcbi0tIHNwZWVkXG4tIENMT1VEU1xuLS0gYWxsICglKVxuLSBOQU1FXG4tIFRJTUVaT05FIChzaGlmdCBpbiBzZWNvbmRzIGZyb20gVVRDKVxuLSBWSVNJQklMSVRZXG5cbiovIl0sInNvdXJjZVJvb3QiOiIifQ==