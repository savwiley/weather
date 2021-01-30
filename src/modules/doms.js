import weatherAPI from "../index"

// BABEL
const regeneratorRuntime = require("regenerator-runtime");



// DOMS
const body = document.querySelector("body");

//location display
const location = document.createElement("div");
  body.appendChild(location);
const city = document.createElement("div");
const country = document.createElement("div");
const tmz = document.createElement("div");
  location.appendChild(city);
  location.appendChild(country);
  location.appendChild(tmz);

//temp display
const tempDisplay = document.createElement("div");
  tempDisplay.setAttribute('class', 'temperature')
  body.appendChild(tempDisplay);
const feelsLike = document.createElement("div");
  body.appendChild(feelsLike);




// DISPLAY DATA
async function run(p, t) {
  try {
    const weatherData = await weatherAPI(p, t);

    //location
    city.textContent = weatherData.name;
    country.textContent = weatherData.sys.country;
    tmz.textContent = weatherData.timezone;

    //temp
    tempDisplay.textContent = `${weatherData.main.temp}°`;
    feelsLike.textContent = `${weatherData.main.feels_like}°`;
    

  } catch(e) {
    console.log(e)
  }
}


/*
      + temp: weaData.main.temp, 
      + feels: weaData.main.feels_like,
      humid: weaData.main.humidity,
      press: weaData.main.pressure,
      tMin: weaData.main.temp_min,
      tMax: weaData.main.temp_max,
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