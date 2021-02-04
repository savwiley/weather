/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ weatherAPI
/* harmony export */ });
/* harmony import */ var _modules_doms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/doms */ "./src/modules/doms.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // BABEL

var regeneratorRuntime = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js"); // Pulls the inputs from html file


var place = document.querySelector("#place");
var subBtn = document.querySelector(".fa-search"); // temp unit (metric = C; imperial = F)

var tUnit = "imperial";
var fBtn = document.querySelector("#fBtn");
var cBtn = document.querySelector("#cBtn");
fBtn.addEventListener('click', function () {
  cBtn.removeAttribute("class", "btnSelect");
  fBtn.setAttribute("class", "btnSelect");
  tUnit = "imperial";
  delForecast();
  (0,_modules_doms__WEBPACK_IMPORTED_MODULE_0__.default)(place.value, tUnit);
});
cBtn.addEventListener('click', function () {
  fBtn.removeAttribute("class", "btnSelect");
  cBtn.setAttribute("class", "btnSelect");
  tUnit = "metric";
  delForecast();
  (0,_modules_doms__WEBPACK_IMPORTED_MODULE_0__.default)(place.value, tUnit);
}); // removes hourly & daily

function delForecast() {
  var hours = document.querySelectorAll("#hourly");
  hours.forEach(function (e) {
    e.remove();
  });
  var dailies = document.querySelectorAll("#daily");
  dailies.forEach(function (e) {
    e.remove();
  });
} // Calls function on start


(0,_modules_doms__WEBPACK_IMPORTED_MODULE_0__.default)("New Orleans", tUnit);
place.value = "New Orleans"; // Event to change location

subBtn.addEventListener('click', runEvent);
place.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    runEvent();
  }
});

function runEvent() {
  (0,_modules_doms__WEBPACK_IMPORTED_MODULE_0__.default)(place.value, tUnit);
} // FETCH CURRENT WEATHER FUNCTION


function weatherAPI(_x, _x2) {
  return _weatherAPI.apply(this, arguments);
}

function _weatherAPI() {
  _weatherAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(p, t) {
    var response, weaData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            delForecast();
            _context.prev = 1;
            _context.next = 4;
            return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(p, "&units=").concat(t, "&APPID=a649f8f0f6c898c4fe7ae2dfea5f0800"));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            weaData = _context.sent;
            return _context.abrupt("return", weaData);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 14:
            ;

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));
  return _weatherAPI.apply(this, arguments);
}

;
/*

The maps are shit, don't worry about them
Put in the forecast (7-day?)
>>> https://openweathermap.org/api/one-call-api
Add credit to github
Make a catch that users can see (not an alert, c'mon)
Consider adding a loading image/animation
Consider adding a coordinates thing to guestimate random places
Look into auto-finished search results


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

/***/ }),

/***/ "./src/modules/doms.js":
/*!*****************************!*\
  !*** ./src/modules/doms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // BABEL

var regeneratorRuntime = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js"); // DOMS


var body = document.querySelector("body");
var topLeft = document.createElement("div");
topLeft.setAttribute("class", "topLeft");
body.appendChild(topLeft);
var topRight = document.createElement("div");
topRight.setAttribute("class", "topRight");
body.appendChild(topRight); //location display

var location = document.createElement("div");
location.setAttribute("class", "location");
topLeft.appendChild(location);
var city = document.createElement("div");
city.setAttribute("id", "city");
location.appendChild(city);
var country = document.createElement("img");
country.setAttribute("id", "country");
location.appendChild(country); //temp display

var tempDisplay = document.createElement("div");
tempDisplay.setAttribute('class', 'temperature');
topLeft.appendChild(tempDisplay);
var feelsLike = document.createElement("div");
feelsLike.setAttribute('id', 'feelsLike');
topLeft.appendChild(feelsLike);
var tMin = document.createElement("div");
tMin.setAttribute('id', 'tMin');
topLeft.appendChild(tMin);
var tMax = document.createElement("div");
tMax.setAttribute('id', 'tMax');
topLeft.appendChild(tMax); //weather display

var icon = document.createElement("img");
topRight.appendChild(icon);
var wMain = document.createElement("div");
wMain.setAttribute("id", "wMain");
topRight.appendChild(wMain);
var wDesc = document.createElement("div");
wDesc.setAttribute("id", "wDesc");
topRight.appendChild(wDesc); //details bar display

var deets = document.createElement("div");
deets.setAttribute("class", "deets");
body.appendChild(deets); //wind/clouds display

var wind = document.createElement("div");
deets.appendChild(wind);
var cloudPerc = document.createElement("div");
deets.appendChild(cloudPerc); //humidity/pressure

var humid = document.createElement("div");
deets.appendChild(humid);
var pressure = document.createElement("div");
deets.appendChild(pressure); //hourly

var hourlyForecast = document.createElement("div");
hourlyForecast.setAttribute("class", "hourlyForecast");
body.appendChild(hourlyForecast); //daily

var dailyForecast = document.createElement("div");
dailyForecast.setAttribute("class", "dailyForecast");
body.appendChild(dailyForecast); // DISPLAY DATA

function run(_x, _x2) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(p, t) {
    var weatherData, forecast, foreData, unit, val, arr, direction;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,_index__WEBPACK_IMPORTED_MODULE_0__.default)(p, t);

          case 3:
            weatherData = _context.sent;
            _context.next = 6;
            return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(weatherData.coord.lat, "&lon=").concat(weatherData.coord.lon, "&exclude=current,minutely&units=").concat(t, "&appid=a649f8f0f6c898c4fe7ae2dfea5f0800"));

          case 6:
            forecast = _context.sent;
            _context.next = 9;
            return forecast.json();

          case 9:
            foreData = _context.sent;

            if (t == "imperial") {
              unit = "F";
            } else {
              unit = "C";
            }

            ; //pieces of a func to find direction from degree angle via github
            //https://gist.github.com/basarat/4670200

            val = Math.floor(weatherData.wind.deg / 22.5 + 0.5);
            arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            direction = arr[val % 16]; //location

            city.textContent = "".concat(weatherData.name, ", ").concat(weatherData.sys.country);
            country.src = "https://www.countryflags.io/".concat(weatherData.sys.country, "/shiny/64.png");
            country.title = weatherData.sys.country; //temp

            tempDisplay.textContent = "".concat(weatherData.main.temp, "\xB0").concat(unit);
            feelsLike.textContent = "Feels Like ".concat(weatherData.main.feels_like, "\xB0");
            tMin.textContent = "Min: ".concat(weatherData.main.temp_min, "\xB0");
            tMax.textContent = "Max: ".concat(weatherData.main.temp_max, "\xB0"); //weather

            icon.src = "https://openweathermap.org/img/wn/".concat(weatherData.weather[0].icon, "@4x.png");
            icon.title = weatherData.weather[0].main;
            wMain.textContent = weatherData.weather[0].main;
            wDesc.textContent = weatherData.weather[0].description; //wind, clouds, humidity, pressure

            wind.textContent = "Wind Speed: ".concat(direction, " ").concat(weatherData.wind.speed);
            cloudPerc.textContent = "Cloudiness: ".concat(weatherData.clouds.all, "%");
            humid.textContent = "Humidity: ".concat(weatherData.main.humidity, "%");
            pressure.textContent = "Pressure: ".concat(weatherData.main.pressure, " hPa"); //hourly

            foreData.hourly.forEach(function (e) {
              //index
              var i = 0;
              var hourly = document.createElement("div");
              hourly.setAttribute("id", "hourly"); //time

              hourly.textContent = new Date(e.dt * 1000).toLocaleString("en-US", {
                hour: "numeric"
              }); //icon

              var hIcon = document.createElement("img");
              hIcon.src = "https://openweathermap.org/img/wn/".concat(e.weather[i].icon, "@2x.png");
              hourly.appendChild(hIcon); //description

              var hDesc = document.createElement("span");
              hDesc.textContent = e.weather[i].description;
              hourly.appendChild(hDesc); //temp

              var hTemp = document.createElement("div");
              hTemp.textContent = "".concat(e.temp, "\xB0").concat(unit);
              hourly.appendChild(hTemp);
              i++;
              hourlyForecast.appendChild(hourly);
            }); //daily

            foreData.daily.forEach(function (e) {
              //index
              var i = 0;
              var daily = document.createElement("div");
              daily.setAttribute("id", "daily"); //time

              daily.textContent = new Date(e.dt * 1000).toLocaleString("en-US", {
                weekday: "long"
              }); //icon

              var dIcon = document.createElement("img");
              dIcon.src = "https://openweathermap.org/img/wn/".concat(e.weather[i].icon, "@2x.png");
              daily.appendChild(dIcon); //description

              var dDesc = document.createElement("span");
              dDesc.textContent = e.weather[i].description;
              daily.appendChild(dDesc); //temp

              var dTemp = document.createElement("div");
              dTemp.textContent = "".concat(e.temp.day, "\xB0").concat(unit);
              daily.appendChild(dTemp);
              i++;
              dailyForecast.appendChild(daily);
            });
            _context.next = 37;
            break;

          case 34:
            _context.prev = 34;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 34]]);
  }));
  return _run.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (run);
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

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbW9kdWxlcy9kb21zLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJyZWdlbmVyYXRvclJ1bnRpbWUiLCJyZXF1aXJlIiwicGxhY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdWJCdG4iLCJ0VW5pdCIsImZCdG4iLCJjQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlbEZvcmVjYXN0IiwicnVuIiwidmFsdWUiLCJob3VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZSIsInJlbW92ZSIsImRhaWxpZXMiLCJydW5FdmVudCIsImtleUNvZGUiLCJ3ZWF0aGVyQVBJIiwicCIsInQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsIndlYURhdGEiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInRvcExlZnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0b3BSaWdodCIsImxvY2F0aW9uIiwiY2l0eSIsImNvdW50cnkiLCJ0ZW1wRGlzcGxheSIsImZlZWxzTGlrZSIsInRNaW4iLCJ0TWF4IiwiaWNvbiIsIndNYWluIiwid0Rlc2MiLCJkZWV0cyIsIndpbmQiLCJjbG91ZFBlcmMiLCJodW1pZCIsInByZXNzdXJlIiwiaG91cmx5Rm9yZWNhc3QiLCJkYWlseUZvcmVjYXN0Iiwid2VhdGhlckRhdGEiLCJjb29yZCIsImxhdCIsImxvbiIsImZvcmVjYXN0IiwiZm9yZURhdGEiLCJ1bml0IiwidmFsIiwiTWF0aCIsImZsb29yIiwiZGVnIiwiYXJyIiwiZGlyZWN0aW9uIiwidGV4dENvbnRlbnQiLCJuYW1lIiwic3lzIiwic3JjIiwidGl0bGUiLCJtYWluIiwidGVtcCIsImZlZWxzX2xpa2UiLCJ0ZW1wX21pbiIsInRlbXBfbWF4Iiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwic3BlZWQiLCJjbG91ZHMiLCJhbGwiLCJodW1pZGl0eSIsImhvdXJseSIsImkiLCJEYXRlIiwiZHQiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJoSWNvbiIsImhEZXNjIiwiaFRlbXAiLCJkYWlseSIsIndlZWtkYXkiLCJkSWNvbiIsImREZXNjIiwiZFRlbXAiLCJkYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBR0MsbUJBQU8sQ0FBQywwRUFBRCxDQUFsQyxDLENBRUE7OztBQUNBLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFmLEMsQ0FHQTs7QUFDQSxJQUFJRSxLQUFLLEdBQUcsVUFBWjtBQUNBLElBQU1DLElBQUksR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNSSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBRUFHLElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ0QsTUFBSSxDQUFDRSxlQUFMLENBQXFCLE9BQXJCLEVBQThC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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzdUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJ1biBmcm9tIFwiLi9tb2R1bGVzL2RvbXNcIjtcblxuLy8gQkFCRUxcbmNvbnN0IHJlZ2VuZXJhdG9yUnVudGltZSA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG4vLyBQdWxscyB0aGUgaW5wdXRzIGZyb20gaHRtbCBmaWxlXG5jb25zdCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2VcIik7XG5jb25zdCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXNlYXJjaFwiKTtcblxuXG4vLyB0ZW1wIHVuaXQgKG1ldHJpYyA9IEM7IGltcGVyaWFsID0gRilcbmxldCB0VW5pdCA9IFwiaW1wZXJpYWxcIjtcbmNvbnN0IGZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZCdG5cIik7XG5jb25zdCBjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjQnRuXCIpO1xuXG5mQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjQnRuLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuU2VsZWN0XCIpO1xuICBmQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuU2VsZWN0XCIpO1xuICB0VW5pdCA9IFwiaW1wZXJpYWxcIjtcbiAgZGVsRm9yZWNhc3QoKVxuICBydW4ocGxhY2UudmFsdWUsIHRVbml0KVxufSlcblxuY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZkJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blNlbGVjdFwiKTtcbiAgY0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blNlbGVjdFwiKTtcbiAgdFVuaXQgPSBcIm1ldHJpY1wiO1xuICBkZWxGb3JlY2FzdCgpXG4gIHJ1bihwbGFjZS52YWx1ZSwgdFVuaXQpXG59KVxuXG4vLyByZW1vdmVzIGhvdXJseSAmIGRhaWx5XG5mdW5jdGlvbiBkZWxGb3JlY2FzdCgpIHtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2hvdXJseVwiKTtcbiAgICBob3Vycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLnJlbW92ZSgpO1xuICAgIH0pO1xuICBjb25zdCBkYWlsaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkYWlseVwiKTtcbiAgICBkYWlsaWVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuXG4vLyBDYWxscyBmdW5jdGlvbiBvbiBzdGFydFxucnVuKFwiTmV3IE9ybGVhbnNcIiwgdFVuaXQpO1xucGxhY2UudmFsdWUgPSBcIk5ldyBPcmxlYW5zXCI7XG5cblxuLy8gRXZlbnQgdG8gY2hhbmdlIGxvY2F0aW9uXG5zdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5FdmVudCk7XG5wbGFjZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBydW5FdmVudCgpO1xuICB9XG59KVxuXG5mdW5jdGlvbiBydW5FdmVudCgpIHtcbiAgcnVuKHBsYWNlLnZhbHVlLCB0VW5pdClcbn1cblxuXG4vLyBGRVRDSCBDVVJSRU5UIFdFQVRIRVIgRlVOQ1RJT05cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJBUEkocCwgdCkge1xuICBkZWxGb3JlY2FzdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtwfSZ1bml0cz0ke3R9JkFQUElEPWE2NDlmOGYwZjZjODk4YzRmZTdhZTJkZmVhNWYwODAwYCk7XG4gICAgY29uc3Qgd2VhRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhRGF0YTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9O1xufTtcblxuXG5cblxuLypcblxuVGhlIG1hcHMgYXJlIHNoaXQsIGRvbid0IHdvcnJ5IGFib3V0IHRoZW1cblB1dCBpbiB0aGUgZm9yZWNhc3QgKDctZGF5Pylcbj4+PiBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9hcGkvb25lLWNhbGwtYXBpXG5BZGQgY3JlZGl0IHRvIGdpdGh1YlxuTWFrZSBhIGNhdGNoIHRoYXQgdXNlcnMgY2FuIHNlZSAobm90IGFuIGFsZXJ0LCBjJ21vbilcbkNvbnNpZGVyIGFkZGluZyBhIGxvYWRpbmcgaW1hZ2UvYW5pbWF0aW9uXG5Db25zaWRlciBhZGRpbmcgYSBjb29yZGluYXRlcyB0aGluZyB0byBndWVzdGltYXRlIHJhbmRvbSBwbGFjZXNcbkxvb2sgaW50byBhdXRvLWZpbmlzaGVkIHNlYXJjaCByZXN1bHRzXG5cblxuT3BlbldlYXRoZXIgQVBJXG5cbmE2NDlmOGYwZjZjODk4YzRmZTdhZTJkZmVhNWYwODAwXG5uYW1lOiB3ZWF0aGVyLWFwcFxuXG5ET0NTOlxuaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvY3VycmVudFxuXG5cbiAgICAgIHRlbXA6IHdlYURhdGEubWFpbi50ZW1wLCBcbiAgICAgIGZlZWxzOiB3ZWFEYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgIGh1bWlkOiB3ZWFEYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICBwcmVzczogd2VhRGF0YS5tYWluLnByZXNzdXJlLFxuICAgICAgdE1pbjogd2VhRGF0YS5tYWluLnRlbXBfbWluLFxuICAgICAgdE1heDogd2VhRGF0YS5tYWluLnRlbXBfbWF4LFxuICAgICAgY291bnRyeTogd2VhRGF0YS5zeXMuY291bnRyeSxcbiAgICAgIHN1bnJpc2U6IHdlYURhdGEuc3lzLnN1bnJpc2UsXG4gICAgICBzdW5zZXQ6IHdlYURhdGEuc3lzLnN1bnNldCxcbiAgICAgIG1haW5EZXNjOiB3ZWFEYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIGRlc2M6IHdlYURhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgIGljb246IHdlYURhdGEud2VhdGhlclswXS5pY29uLFxuICAgICAgaWQ6IHdlYURhdGEud2VhdGhlclswXS5pZCxcbiAgICAgIHdpbmREaXI6IHdlYURhdGEud2luZC5kZWcsXG4gICAgICB3aW5kU3A6IHdlYURhdGEud2luZC5zcGVlZCxcbiAgICAgIGNsb3Vkczogd2VhRGF0YS5jbG91ZHMuYWxsLFxuICAgICAgdmlzaWJsZTogd2VhRGF0YS52aXNpYmlsaXR5LFxuICAgICAgY2l0eTogd2VhRGF0YS5uYW1lLFxuICAgICAgdG16OiB3ZWFEYXRhLnRpbWV6b25lXG5cblxuXG5cbkRBVEEgSSdEIExJS0UgVE8gSEFWRVxuLSBNQUlOXG4tLSB0ZW1wIChtaW4vbWF4KVxuLS0gZmVlbHMgbGlrZSB0ZW1wXG4tLSBodW1pZGl0eS9wcmVzc3VyZVxuLSBTWVNcbi0tIGNvdW50cnlcbi0tIHN1bnJpc2Vcbi0tIHN1bnNldFxuLSBXRUFUSEVSXG4tLSAwXG4tLS0gbWFpbiAobWFpbiBkZXNjKVxuLS0tIGRlc2NyaXB0aW9uIChjb3VsZCB1c2UgaWQgZGVzYz8pXG4tLS0gaWNvbiAoaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvd2VhdGhlci1jb25kaXRpb25zKVxuLS0tIGlkIChodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy93ZWF0aGVyLWNvbmRpdGlvbnMpXG4tIFdJTkRcbi0tIGRlZyAod2luZCBkaXJlY3Rpb24vbWV0ZW9ybG9naWNhbClcbi0tIHNwZWVkXG4tIENMT1VEU1xuLS0gYWxsICglKVxuLSBOQU1FXG4tIFRJTUVaT05FIChzaGlmdCBpbiBzZWNvbmRzIGZyb20gVVRDKVxuLSBWSVNJQklMSVRZXG5cbiovIiwiaW1wb3J0IHdlYXRoZXJBUEkgZnJvbSBcIi4uL2luZGV4XCI7XG5cbi8vIEJBQkVMXG5jb25zdCByZWdlbmVyYXRvclJ1bnRpbWUgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG4vLyBET01TXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCB0b3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9wTGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcExlZnRcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wTGVmdCk7XG5jb25zdCB0b3BSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvcFJpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wUmlnaHRcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wUmlnaHQpO1xuXG4vL2xvY2F0aW9uIGRpc3BsYXlcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2NhdGlvblwiKTtcbiAgdG9wTGVmdC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eVwiKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoY2l0eSk7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY291bnRyeS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvdW50cnlcIik7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGNvdW50cnkpO1xuXG4vL3RlbXAgZGlzcGxheVxuY29uc3QgdGVtcERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXBlcmF0dXJlJyk7XG4gIHRvcExlZnQuYXBwZW5kQ2hpbGQodGVtcERpc3BsYXkpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNMaWtlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmVlbHNMaWtlJyk7XG4gIHRvcExlZnQuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcbmNvbnN0IHRNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0TWluLnNldEF0dHJpYnV0ZSgnaWQnLCAndE1pbicpO1xuICB0b3BMZWZ0LmFwcGVuZENoaWxkKHRNaW4pO1xuY29uc3QgdE1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRNYXguc2V0QXR0cmlidXRlKCdpZCcsICd0TWF4Jyk7XG4gIHRvcExlZnQuYXBwZW5kQ2hpbGQodE1heCk7XG5cbi8vd2VhdGhlciBkaXNwbGF5XG5jb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdG9wUmlnaHQuYXBwZW5kQ2hpbGQoaWNvbik7XG5jb25zdCB3TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdNYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid01haW5cIik7XG4gIHRvcFJpZ2h0LmFwcGVuZENoaWxkKHdNYWluKTtcbmNvbnN0IHdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3RGVzY1wiKTtcbiAgdG9wUmlnaHQuYXBwZW5kQ2hpbGQod0Rlc2MpO1xuXG4vL2RldGFpbHMgYmFyIGRpc3BsYXlcbmNvbnN0IGRlZXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVldHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWV0c1wiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkZWV0cyk7XG5cbi8vd2luZC9jbG91ZHMgZGlzcGxheVxuY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlZXRzLmFwcGVuZENoaWxkKHdpbmQpO1xuY29uc3QgY2xvdWRQZXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVldHMuYXBwZW5kQ2hpbGQoY2xvdWRQZXJjKTtcblxuLy9odW1pZGl0eS9wcmVzc3VyZVxuY29uc3QgaHVtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWV0cy5hcHBlbmRDaGlsZChodW1pZCk7XG5jb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlZXRzLmFwcGVuZENoaWxkKHByZXNzdXJlKTtcblxuLy9ob3VybHlcbmNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cmx5Rm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob3VybHlGb3JlY2FzdFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdCk7XG5cbi8vZGFpbHlcbmNvbnN0IGRhaWx5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYWlseUZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGFpbHlGb3JlY2FzdFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0KTtcblxuXG5cblxuLy8gRElTUExBWSBEQVRBXG5hc3luYyBmdW5jdGlvbiBydW4ocCwgdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckFQSShwLCB0KTtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHt3ZWF0aGVyRGF0YS5jb29yZC5sYXR9Jmxvbj0ke3dlYXRoZXJEYXRhLmNvb3JkLmxvbn0mZXhjbHVkZT1jdXJyZW50LG1pbnV0ZWx5JnVuaXRzPSR7dH0mYXBwaWQ9YTY0OWY4ZjBmNmM4OThjNGZlN2FlMmRmZWE1ZjA4MDBgKTtcbiAgICBjb25zdCBmb3JlRGF0YSA9IGF3YWl0IGZvcmVjYXN0Lmpzb24oKTtcblxuICAgIGxldCB1bml0O1xuICAgIGlmICh0ID09IFwiaW1wZXJpYWxcIikge1xuICAgICAgdW5pdCA9IFwiRlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gXCJDXCI7XG4gICAgfTtcblxuICAgIC8vcGllY2VzIG9mIGEgZnVuYyB0byBmaW5kIGRpcmVjdGlvbiBmcm9tIGRlZ3JlZSBhbmdsZSB2aWEgZ2l0aHViXG4gICAgLy9odHRwczovL2dpc3QuZ2l0aHViLmNvbS9iYXNhcmF0LzQ2NzAyMDBcbiAgICBjb25zdCB2YWwgPSBNYXRoLmZsb29yKCh3ZWF0aGVyRGF0YS53aW5kLmRlZyAvIDIyLjUpICsgMC41KTtcbiAgICBjb25zdCBhcnIgPSBbXCJOXCIsIFwiTk5FXCIsIFwiTkVcIiwgXCJFTkVcIiwgXCJFXCIsIFwiRVNFXCIsIFwiU0VcIiwgXCJTU0VcIiwgXCJTXCIsIFwiU1NXXCIsIFwiU1dcIiwgXCJXU1dcIiwgXCJXXCIsIFwiV05XXCIsIFwiTldcIiwgXCJOTldcIl07XG4gICAgY29uc3QgZGlyZWN0aW9uID0gYXJyWyh2YWwgJSAxNildO1xuXG4gICAgLy9sb2NhdGlvblxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5zeXMuY291bnRyeX1gO1xuICAgIGNvdW50cnkuc3JjID0gYGh0dHBzOi8vd3d3LmNvdW50cnlmbGFncy5pby8ke3dlYXRoZXJEYXRhLnN5cy5jb3VudHJ5fS9zaGlueS82NC5wbmdgO1xuICAgIGNvdW50cnkudGl0bGUgPSB3ZWF0aGVyRGF0YS5zeXMuY291bnRyeTtcblxuICAgIC8vdGVtcFxuICAgIHRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubWFpbi50ZW1wfcKwJHt1bml0fWA7XG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2UgJHt3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2V9wrBgO1xuICAgIHRNaW4udGV4dENvbnRlbnQgPSBgTWluOiAke3dlYXRoZXJEYXRhLm1haW4udGVtcF9taW59wrBgO1xuICAgIHRNYXgudGV4dENvbnRlbnQgPSBgTWF4OiAke3dlYXRoZXJEYXRhLm1haW4udGVtcF9tYXh9wrBgO1xuXG4gICAgLy93ZWF0aGVyXG4gICAgaWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUA0eC5wbmdgO1xuICAgIGljb24udGl0bGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgd01haW4udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgd0Rlc2MudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgLy93aW5kLCBjbG91ZHMsIGh1bWlkaXR5LCBwcmVzc3VyZVxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkaXJlY3Rpb259ICR7d2VhdGhlckRhdGEud2luZC5zcGVlZH1gO1xuICAgIGNsb3VkUGVyYy50ZXh0Q29udGVudCA9IGBDbG91ZGluZXNzOiAke3dlYXRoZXJEYXRhLmNsb3Vkcy5hbGx9JWA7XG4gICAgaHVtaWQudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEubWFpbi5odW1pZGl0eX0lYDtcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHt3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlfSBoUGFgO1xuXG5cbiAgICAvL2hvdXJseVxuICAgIGZvcmVEYXRhLmhvdXJseS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAvL2luZGV4XG4gICAgICBsZXQgaSA9IDA7XG5cbiAgICAgIGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJseVwiKTtcblxuICAgICAgICAvL3RpbWVcbiAgICAgICAgaG91cmx5LnRleHRDb250ZW50ID0gbmV3IERhdGUoZS5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge2hvdXI6IFwibnVtZXJpY1wifSk7XG5cbiAgICAgICAgLy9pY29uXG4gICAgICAgIGNvbnN0IGhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICBoSWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZS53ZWF0aGVyW2ldLmljb259QDJ4LnBuZ2BcbiAgICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoaEljb24pO1xuXG4gICAgICAgIC8vZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgaERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBoRGVzYy50ZXh0Q29udGVudCA9IGUud2VhdGhlcltpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoaERlc2MpO1xuXG4gICAgICAgIC8vdGVtcFxuICAgICAgICBjb25zdCBoVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgaFRlbXAudGV4dENvbnRlbnQgPSBgJHtlLnRlbXB9wrAke3VuaXR9YDtcbiAgICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoaFRlbXApO1xuXG4gICAgICAgIGkrKztcbiAgICAgICAgaG91cmx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5KTtcbiAgICB9KVxuXG5cbiAgICAvL2RhaWx5XG4gICAgZm9yZURhdGEuZGFpbHkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgLy9pbmRleFxuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBjb25zdCBkYWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYWlseS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhaWx5XCIpO1xuXG4gICAgICAgIC8vdGltZVxuICAgICAgICBkYWlseS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGUuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHt3ZWVrZGF5OiBcImxvbmdcIn0pO1xuXG4gICAgICAgIC8vaWNvblxuICAgICAgICBjb25zdCBkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgZEljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2Uud2VhdGhlcltpXS5pY29ufUAyeC5wbmdgXG4gICAgICAgICAgZGFpbHkuYXBwZW5kQ2hpbGQoZEljb24pO1xuXG4gICAgICAgIC8vZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBkRGVzYy50ZXh0Q29udGVudCA9IGUud2VhdGhlcltpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBkYWlseS5hcHBlbmRDaGlsZChkRGVzYyk7XG5cbiAgICAgICAgLy90ZW1wXG4gICAgICAgIGNvbnN0IGRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBkVGVtcC50ZXh0Q29udGVudCA9IGAke2UudGVtcC5kYXl9wrAke3VuaXR9YDtcbiAgICAgICAgICBkYWlseS5hcHBlbmRDaGlsZChkVGVtcCk7XG5cbiAgICAgICAgaSsrO1xuICAgICAgICBkYWlseUZvcmVjYXN0LmFwcGVuZENoaWxkKGRhaWx5KTtcbiAgICB9KVxuXG5cbiAgfSBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJ1bjtcblxuXG5cblxuLypcbkZPUkVDQVNUIE9CSkVDVCBPSCBNWSBHT0RcblxuREFJTFlcbi0gZm9yZURhdGEuZGFpbHlbaV0udGVtcC5kYXlcbi0gZm9yZURhdGEuZGFpbHlbaV0udGVtcC5uaWdodFxuLSBmb3JlRGF0YS5kYWlseVtpXS5mZWVsc19saWtlLmRheVxuLSBmb3JlRGF0YS5kYWlseVtpXS5mZWVsc19saWtlLm5pZ2h0XG4tIGZvcmVEYXRhLmRhaWx5W2ldLnJhaW4gKD8pXG4tIGZvcmVEYXRhLmRhaWx5W2ldLndlYXRoZXIuaWNvblxuLSBmb3JlRGF0YS5kYWlseVtpXS53ZWF0aGVyLm1haW5cbi0gZm9yZURhdGEuZGFpbHlbaV0ud2VhdGhlci5kZXNjcmlwdGlvblxuLSBmb3JlRGF0YS5kYWlseVtpXS53aW5kX2RlZ1xuLSBmb3JlRGF0YS5kYWlseVtpXS53aW5kX3NwZWVkXG5cbkhPVVJMWVxuLSBmb3JlRGF0YS5ob3VybHlbaV0uZmVlbHNfbGlrZVxuLSBmb3JlRGF0YS5ob3VybHlbaV0udGVtcFxuLSBmb3JlRGF0YS5ob3VybHlbaV0ud2VhdGhlci5pY29uXG4tIGZvcmVEYXRhLmhvdXJseVtpXS53ZWF0aGVyLm1haW5cbi0gZm9yZURhdGEuaG91cmx5W2ldLndlYXRoZXIuZGVzY3JpcHRpb25cbi0gZm9yZURhdGEuaG91cmx5W2ldLndpbmRfZGVnXG4tIGZvcmVEYXRhLmhvdXJseVtpXS53aW5kX3NwZWVkXG5cbkFMRVJUXG4tIGZvcmVEYXRhLmFsZXJ0cy5ldmVudFxuLSBmb3JlRGF0YS5hbGVydHMuZGVzY3JpcHRpb25cbi0gZm9yZURhdGEuYWxlcnRzLnN0YXJ0XG4tIGZvcmVEYXRhLmFsZXJ0cy5lbmRcbi0gZm9yZURhdGEuYWxlcnRzLnNlbmRlcl9uYW1lXG5cbk9USEVSXG4tZm9yZURhdGEudGltZXpvbmUgKGdpdmVzIGFuIGFjdHVhbCBuYW1lKVxuKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=