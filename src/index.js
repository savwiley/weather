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
  delForecast()
  run(place.value, tUnit)
})

cBtn.addEventListener('click', () => {
  fBtn.removeAttribute("class", "btnSelect");
  cBtn.setAttribute("class", "btnSelect");
  tUnit = "metric";
  delForecast()
  run(place.value, tUnit)
})

// removes hourly & daily
function delForecast() {
  const hours = document.querySelectorAll("#hourly");
    hours.forEach((e) => {
      e.remove();
    });
  const dailies = document.querySelectorAll("#daily");
    dailies.forEach((e) => {
      e.remove();
    })
}

// Calls function on start
run("New Orleans", tUnit);
place.value = "New Orleans";

// Event to change location
subBtn.addEventListener('click', runEvent);
place.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    runEvent();
  }
})

function runEvent() {
  run(place.value, tUnit)
}




// FETCH CURRENT WEATHER FUNCTION
export default async function weatherAPI(p, t) {
  delForecast();
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${p}&units=${t}&APPID=a649f8f0f6c898c4fe7ae2dfea5f0800`);
    const weaData = await response.json();
    return weaData;
  } catch(error) {
    console.log(error);
  };
};