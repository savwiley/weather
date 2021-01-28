/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const place = document.querySelector("#place");
const subBtn = document.querySelector("#subBtn");

subBtn.addEventListener('click', weatherAPI);


async function weatherAPI() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=imperial&APPID=a649f8f0f6c898c4fe7ae2dfea5f0800`);
  const weaData = await response.json();
  return console.log({ 
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
    });
};




/*
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLG1GQUFtRixZQUFZO0FBQy9GO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2VcIik7XG5jb25zdCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1YkJ0blwiKTtcblxuc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2VhdGhlckFQSSk7XG5cblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlckFQSSgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7cGxhY2UudmFsdWV9JnVuaXRzPWltcGVyaWFsJkFQUElEPWE2NDlmOGYwZjZjODk4YzRmZTdhZTJkZmVhNWYwODAwYCk7XG4gIGNvbnN0IHdlYURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjb25zb2xlLmxvZyh7IFxuICAgIHRlbXA6IHdlYURhdGEubWFpbi50ZW1wLCBcbiAgICBmZWVsczogd2VhRGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgaHVtaWQ6IHdlYURhdGEubWFpbi5odW1pZGl0eSxcbiAgICBwcmVzczogd2VhRGF0YS5tYWluLnByZXNzdXJlLFxuICAgIHRNaW46IHdlYURhdGEubWFpbi50ZW1wX21pbixcbiAgICB0TWF4OiB3ZWFEYXRhLm1haW4udGVtcF9tYXgsXG4gICAgY291bnRyeTogd2VhRGF0YS5zeXMuY291bnRyeSxcbiAgICBzdW5yaXNlOiB3ZWFEYXRhLnN5cy5zdW5yaXNlLFxuICAgIHN1bnNldDogd2VhRGF0YS5zeXMuc3Vuc2V0LFxuICAgIG1haW5EZXNjOiB3ZWFEYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICBkZXNjOiB3ZWFEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgaWNvbjogd2VhRGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgaWQ6IHdlYURhdGEud2VhdGhlclswXS5pZCxcbiAgICB3aW5kRGlyOiB3ZWFEYXRhLndpbmQuZGVnLFxuICAgIHdpbmRTcDogd2VhRGF0YS53aW5kLnNwZWVkLFxuICAgIGNsb3Vkczogd2VhRGF0YS5jbG91ZHMuYWxsLFxuICAgIHZpc2libGU6IHdlYURhdGEudmlzaWJpbGl0eSxcbiAgICBjaXR5OiB3ZWFEYXRhLm5hbWUsXG4gICAgdG16OiB3ZWFEYXRhLnRpbWV6b25lXG4gICAgfSk7XG59O1xuXG5cblxuXG4vKlxuT3BlbldlYXRoZXIgQVBJXG5cbmE2NDlmOGYwZjZjODk4YzRmZTdhZTJkZmVhNWYwODAwXG5uYW1lOiB3ZWF0aGVyLWFwcFxuXG5ET0NTOlxuaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvY3VycmVudFxuXG5cbkRBVEEgSSdEIExJS0UgVE8gSEFWRVxuLSBNQUlOXG4tLSB0ZW1wIChtaW4vbWF4KVxuLS0gZmVlbHMgbGlrZSB0ZW1wXG4tLSBodW1pZGl0eS9wcmVzc3VyZVxuLSBTWVNcbi0tIGNvdW50cnlcbi0tIHN1bnJpc2Vcbi0tIHN1bnNldFxuLSBXRUFUSEVSXG4tLSAwXG4tLS0gbWFpbiAobWFpbiBkZXNjKVxuLS0tIGRlc2NyaXB0aW9uIChjb3VsZCB1c2UgaWQgZGVzYz8pXG4tLS0gaWNvbiAoaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvd2VhdGhlci1jb25kaXRpb25zKVxuLS0tIGlkIChodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy93ZWF0aGVyLWNvbmRpdGlvbnMpXG4tIFdJTkRcbi0tIGRlZyAod2luZCBkaXJlY3Rpb24vbWV0ZW9ybG9naWNhbClcbi0tIHNwZWVkXG4tIENMT1VEU1xuLS0gYWxsICglKVxuLSBOQU1FXG4tIFRJTUVaT05FIChzaGlmdCBpbiBzZWNvbmRzIGZyb20gVVRDKVxuLSBWSVNJQklMSVRZXG5cbiovIl0sInNvdXJjZVJvb3QiOiIifQ==