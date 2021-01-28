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