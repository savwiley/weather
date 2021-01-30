import weatherAPI from "../index"

// BABEL
const regeneratorRuntime = require("regenerator-runtime");



// DOMS
const body = document.querySelector("body");
const topLeft = document.createElement("div");
  topLeft.setAttribute("class", "topLeft");
  body.appendChild(topLeft);
const topRight = document.createElement("div");
  topRight.setAttribute("class", "topRight");
  body.appendChild(topRight);

//location display
const location = document.createElement("div");
  location.setAttribute("class", "location");
  topLeft.appendChild(location);

const city = document.createElement("div");
  city.setAttribute("id", "city");
  location.appendChild(city);
const country = document.createElement("img");
  country.setAttribute("id", "country");
  location.appendChild(country);

//temp display
const tempDisplay = document.createElement("div");
  tempDisplay.setAttribute('class', 'temperature');
  topLeft.appendChild(tempDisplay);
const feelsLike = document.createElement("div");
  feelsLike.setAttribute('id', 'feelsLike');
  topLeft.appendChild(feelsLike);
const tMin = document.createElement("div");
  tMin.setAttribute('id', 'tMin');
  topLeft.appendChild(tMin);
const tMax = document.createElement("div");
  tMax.setAttribute('id', 'tMax');
  topLeft.appendChild(tMax);

//weather display
const icon = document.createElement("img");
  topRight.appendChild(icon);
const wMain = document.createElement("div");
  wMain.setAttribute("id", "wMain");
  topRight.appendChild(wMain);
const wDesc = document.createElement("div");
  wDesc.setAttribute("id", "wDesc");
  topRight.appendChild(wDesc);




// DISPLAY DATA
async function run(p, t) {
  try {
    const weatherData = await weatherAPI(p, t);
    let unit;
    if (t == "imperial") {
      unit = "F";
    } else {
      unit = "C";
    };

    //location
    city.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    country.src = `https://www.countryflags.io/${weatherData.sys.country}/shiny/64.png`;
    country.title = weatherData.sys.country;

    //temp
    tempDisplay.textContent = `${weatherData.main.temp}°${unit}`;
    feelsLike.textContent = `Feels Like ${weatherData.main.feels_like}°`;
    tMin.textContent = `Min: ${weatherData.main.temp_min}°`;
    tMax.textContent = `Max: ${weatherData.main.temp_max}°`;

    //weather
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    icon.title = weatherData.weather[0].main;
    wMain.textContent = weatherData.weather[0].main;
    wDesc.textContent = weatherData.weather[0].description;

  } catch(e) {
    console.log(e)
  }
}


/*
      + temp: weaData.main.temp, 
      + feels: weaData.main.feels_like,
      humid: weaData.main.humidity,
      press: weaData.main.pressure,
      + tMin: weaData.main.temp_min,
      + tMax: weaData.main.temp_max,
      + country: weaData.sys.country,
      sunrise: weaData.sys.sunrise,
      sunset: weaData.sys.sunset,
      + mainDesc: weaData.weather[0].main,
      + desc: weaData.weather[0].description,
      + icon: weaData.weather[0].icon,
      id: weaData.weather[0].id,
      windDir: weaData.wind.deg,
      windSp: weaData.wind.speed,
      clouds: weaData.clouds.all,
      visible: weaData.visibility,
      + city: weaData.name,
      + tmz: weaData.timezone
*/





export default run;