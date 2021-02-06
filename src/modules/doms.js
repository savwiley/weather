import weatherAPI from "../index";

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

//details bar display
const deets = document.createElement("div");
  deets.setAttribute("class", "deets");
  body.appendChild(deets);

//wind/clouds display
const wind = document.createElement("div");
  deets.appendChild(wind);
const cloudPerc = document.createElement("div");
  deets.appendChild(cloudPerc);

//humidity/pressure
const humid = document.createElement("div");
  deets.appendChild(humid);
const pressure = document.createElement("div");
  deets.appendChild(pressure);

//hourly
const hourlyForecast = document.createElement("div");
  hourlyForecast.setAttribute("class", "hourlyForecast");
  body.appendChild(hourlyForecast);

//daily
const dailyForecast = document.createElement("div");
  dailyForecast.setAttribute("class", "dailyForecast");
  body.appendChild(dailyForecast);




// DISPLAY DATA
async function run(p, t) {
  try {
    const loading = document.createElement("div");
      loading.setAttribute("class", "loading");
    const loadingImg = document.createElement("img");
      loadingImg.src = "https://i.stack.imgur.com/oQ0tF.gif";
      loading.appendChild(loadingImg);
      body.appendChild(loading);

    const weatherData = await weatherAPI(p, t);
    const forecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=current,minutely&units=${t}&appid=a649f8f0f6c898c4fe7ae2dfea5f0800`);
    const foreData = await forecast.json();

    let unit;
    if (t == "imperial") {
      unit = "F";
    } else {
      unit = "C";
    };

    //pieces of a func to find direction from degree angle via github
    //https://gist.github.com/basarat/4670200
    const val = Math.floor((weatherData.wind.deg / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const direction = arr[(val % 16)];

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
    icon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    icon.title = weatherData.weather[0].main;
    wMain.textContent = weatherData.weather[0].main;
    wDesc.textContent = weatherData.weather[0].description;

    //wind, clouds, humidity, pressure
    wind.textContent = `Wind Speed: ${direction} ${weatherData.wind.speed}`;
    cloudPerc.textContent = `Cloudiness: ${weatherData.clouds.all}%`;
    humid.textContent = `Humidity: ${weatherData.main.humidity}%`;
    pressure.textContent = `Pressure: ${weatherData.main.pressure} hPa`;


    //hourly
    foreData.hourly.forEach((e) => {
      //index
      let i = 0;

      const hourly = document.createElement("div");
        hourly.setAttribute("id", "hourly");

        //time
        hourly.textContent = new Date(e.dt * 1000).toLocaleString("en-US", {hour: "numeric"});

        //icon
        const hIcon = document.createElement("img");
          hIcon.src = `https://openweathermap.org/img/wn/${e.weather[i].icon}@2x.png`
          hourly.appendChild(hIcon);

        //description
        const hDesc = document.createElement("span");
          hDesc.textContent = e.weather[i].description;
          hourly.appendChild(hDesc);

        //temp
        const hTemp = document.createElement("div");
          hTemp.textContent = `${e.temp}°${unit}`;
          hourly.appendChild(hTemp);

        i++;
        hourlyForecast.appendChild(hourly);
    })


    //daily
    foreData.daily.forEach((e) => {
      //index
      let i = 0;

      const daily = document.createElement("div");
      daily.setAttribute("id", "daily");

        //time
        daily.textContent = new Date(e.dt * 1000).toLocaleString("en-US", {weekday: "long"});

        //icon
        const dIcon = document.createElement("img");
          dIcon.src = `https://openweathermap.org/img/wn/${e.weather[i].icon}@2x.png`
          daily.appendChild(dIcon);

        //description
        const dDesc = document.createElement("span");
          dDesc.textContent = e.weather[i].description;
          daily.appendChild(dDesc);

        //temp
        const dTemp = document.createElement("div");
          dTemp.textContent = `${e.temp.day}°${unit}`;
          daily.appendChild(dTemp);

        i++;
        dailyForecast.appendChild(daily);

        loading.remove();
    })


  } catch(error) {
    alert("Please enter a major city.");
    console.log(error);
  }
}


export default run;




/*
FORECAST OBJECT OH MY GOD

DAILY
- foreData.daily[i].temp.day
- foreData.daily[i].temp.night
- foreData.daily[i].feels_like.day
- foreData.daily[i].feels_like.night
- foreData.daily[i].rain (?)
- foreData.daily[i].weather.icon
- foreData.daily[i].weather.main
- foreData.daily[i].weather.description
- foreData.daily[i].wind_deg
- foreData.daily[i].wind_speed

HOURLY
- foreData.hourly[i].feels_like
- foreData.hourly[i].temp
- foreData.hourly[i].weather.icon
- foreData.hourly[i].weather.main
- foreData.hourly[i].weather.description
- foreData.hourly[i].wind_deg
- foreData.hourly[i].wind_speed

ALERT
- foreData.alerts.event
- foreData.alerts.description
- foreData.alerts.start
- foreData.alerts.end
- foreData.alerts.sender_name

OTHER
-foreData.timezone (gives an actual name)
*/