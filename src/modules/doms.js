import weatherAPI from "../index"

// BABEL
const regeneratorRuntime = require("regenerator-runtime");



// DOMS
const body = document.querySelector("body");

//location display
const location = document.createElement("div");
  location.setAttribute("class", "location");
  body.appendChild(location);

const city = document.createElement("div");
  city.setAttribute("id", "city");
  location.appendChild(city);
const country = document.createElement("img");
  country.setAttribute("id", "country");
  location.appendChild(country);
const tmz = document.createElement("div");
  tmz.setAttribute("id", "tmz");
  location.appendChild(tmz);

//temp display
const tempDisplay = document.createElement("div");
  tempDisplay.setAttribute('class', 'temperature');
  body.appendChild(tempDisplay);
const feelsLike = document.createElement("div");
  body.appendChild(feelsLike);
const tMin = document.createElement("div");
  body.appendChild(tMin);
const tMax = document.createElement("div");
  body.appendChild(tMax);




// DISPLAY DATA
async function run(p, t) {
  try {
    const weatherData = await weatherAPI(p, t);

    //location
    city.textContent = weatherData.name;
    country.src = `https://www.countryflags.io/${weatherData.sys.country}/shiny/64.png`;
    tmz.textContent = weatherData.timezone;

    //temp
    tempDisplay.textContent = `${weatherData.main.temp}°`;
    feelsLike.textContent = `${weatherData.main.feels_like}°`;
    tMin.textContent = `${weatherData.main.temp_min}°`;
    tMax.textContent = `${weatherData.main.temp_max}°`;
    

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
      mainDesc: weaData.weather[0].main,
      desc: weaData.weather[0].description,
      icon: weaData.weather[0].icon,
      id: weaData.weather[0].id,
      windDir: weaData.wind.deg,
      windSp: weaData.wind.speed,
      clouds: weaData.clouds.all,
      visible: weaData.visibility,
      + city: weaData.name,
      + tmz: weaData.timezone
*/





export default run;