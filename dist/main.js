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
            return fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(p, "&units=").concat(t, "&APPID=a649f8f0f6c898c4fe7ae2dfea5f0800"));

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

            icon.src = "http://openweathermap.org/img/wn/".concat(weatherData.weather[0].icon, "@4x.png");
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
              hIcon.src = "http://openweathermap.org/img/wn/".concat(e.weather[i].icon, "@2x.png");
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
              dIcon.src = "http://openweathermap.org/img/wn/".concat(e.weather[i].icon, "@2x.png");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbW9kdWxlcy9kb21zLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJyZWdlbmVyYXRvclJ1bnRpbWUiLCJyZXF1aXJlIiwicGxhY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdWJCdG4iLCJ0VW5pdCIsImZCdG4iLCJjQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlbEZvcmVjYXN0IiwicnVuIiwidmFsdWUiLCJob3VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZSIsInJlbW92ZSIsImRhaWxpZXMiLCJydW5FdmVudCIsImtleUNvZGUiLCJ3ZWF0aGVyQVBJIiwicCIsInQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsIndlYURhdGEiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInRvcExlZnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0b3BSaWdodCIsImxvY2F0aW9uIiwiY2l0eSIsImNvdW50cnkiLCJ0ZW1wRGlzcGxheSIsImZlZWxzTGlrZSIsInRNaW4iLCJ0TWF4IiwiaWNvbiIsIndNYWluIiwid0Rlc2MiLCJkZWV0cyIsIndpbmQiLCJjbG91ZFBlcmMiLCJodW1pZCIsInByZXNzdXJlIiwiaG91cmx5Rm9yZWNhc3QiLCJkYWlseUZvcmVjYXN0Iiwid2VhdGhlckRhdGEiLCJjb29yZCIsImxhdCIsImxvbiIsImZvcmVjYXN0IiwiZm9yZURhdGEiLCJ1bml0IiwidmFsIiwiTWF0aCIsImZsb29yIiwiZGVnIiwiYXJyIiwiZGlyZWN0aW9uIiwidGV4dENvbnRlbnQiLCJuYW1lIiwic3lzIiwic3JjIiwidGl0bGUiLCJtYWluIiwidGVtcCIsImZlZWxzX2xpa2UiLCJ0ZW1wX21pbiIsInRlbXBfbWF4Iiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwic3BlZWQiLCJjbG91ZHMiLCJhbGwiLCJodW1pZGl0eSIsImhvdXJseSIsImkiLCJEYXRlIiwiZHQiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJoSWNvbiIsImhEZXNjIiwiaFRlbXAiLCJkYWlseSIsIndlZWtkYXkiLCJkSWNvbiIsImREZXNjIiwiZFRlbXAiLCJkYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBR0MsbUJBQU8sQ0FBQywwRUFBRCxDQUFsQyxDLENBRUE7OztBQUNBLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFmLEMsQ0FHQTs7QUFDQSxJQUFJRSxLQUFLLEdBQUcsVUFBWjtBQUNBLElBQU1DLElBQUksR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNSSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBRUFHLElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ0QsTUFBSSxDQUFDRSxlQUFMLENBQXFCLE9BQXJCLEVBQThC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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzdUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJ1biBmcm9tIFwiLi9tb2R1bGVzL2RvbXNcIjtcblxuLy8gQkFCRUxcbmNvbnN0IHJlZ2VuZXJhdG9yUnVudGltZSA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG4vLyBQdWxscyB0aGUgaW5wdXRzIGZyb20gaHRtbCBmaWxlXG5jb25zdCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2VcIik7XG5jb25zdCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXNlYXJjaFwiKTtcblxuXG4vLyB0ZW1wIHVuaXQgKG1ldHJpYyA9IEM7IGltcGVyaWFsID0gRilcbmxldCB0VW5pdCA9IFwiaW1wZXJpYWxcIjtcbmNvbnN0IGZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZCdG5cIik7XG5jb25zdCBjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjQnRuXCIpO1xuXG5mQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjQnRuLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuU2VsZWN0XCIpO1xuICBmQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuU2VsZWN0XCIpO1xuICB0VW5pdCA9IFwiaW1wZXJpYWxcIjtcbiAgZGVsRm9yZWNhc3QoKVxuICBydW4ocGxhY2UudmFsdWUsIHRVbml0KVxufSlcblxuY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZkJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blNlbGVjdFwiKTtcbiAgY0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blNlbGVjdFwiKTtcbiAgdFVuaXQgPSBcIm1ldHJpY1wiO1xuICBkZWxGb3JlY2FzdCgpXG4gIHJ1bihwbGFjZS52YWx1ZSwgdFVuaXQpXG59KVxuXG4vLyByZW1vdmVzIGhvdXJseSAmIGRhaWx5XG5mdW5jdGlvbiBkZWxGb3JlY2FzdCgpIHtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2hvdXJseVwiKTtcbiAgICBob3Vycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLnJlbW92ZSgpO1xuICAgIH0pO1xuICBjb25zdCBkYWlsaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkYWlseVwiKTtcbiAgICBkYWlsaWVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuXG4vLyBDYWxscyBmdW5jdGlvbiBvbiBzdGFydFxucnVuKFwiTmV3IE9ybGVhbnNcIiwgdFVuaXQpO1xucGxhY2UudmFsdWUgPSBcIk5ldyBPcmxlYW5zXCI7XG5cblxuLy8gRXZlbnQgdG8gY2hhbmdlIGxvY2F0aW9uXG5zdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5FdmVudCk7XG5wbGFjZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBydW5FdmVudCgpO1xuICB9XG59KVxuXG5mdW5jdGlvbiBydW5FdmVudCgpIHtcbiAgcnVuKHBsYWNlLnZhbHVlLCB0VW5pdClcbn1cblxuXG4vLyBGRVRDSCBDVVJSRU5UIFdFQVRIRVIgRlVOQ1RJT05cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJBUEkocCwgdCkge1xuICBkZWxGb3JlY2FzdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3B9JnVuaXRzPSR7dH0mQVBQSUQ9YTY0OWY4ZjBmNmM4OThjNGZlN2FlMmRmZWE1ZjA4MDBgKTtcbiAgICBjb25zdCB3ZWFEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWFEYXRhO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH07XG59O1xuXG5cblxuXG4vKlxuXG5UaGUgbWFwcyBhcmUgc2hpdCwgZG9uJ3Qgd29ycnkgYWJvdXQgdGhlbVxuUHV0IGluIHRoZSBmb3JlY2FzdCAoNy1kYXk/KVxuPj4+IGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2FwaS9vbmUtY2FsbC1hcGlcbkFkZCBjcmVkaXQgdG8gZ2l0aHViXG5NYWtlIGEgY2F0Y2ggdGhhdCB1c2VycyBjYW4gc2VlIChub3QgYW4gYWxlcnQsIGMnbW9uKVxuQ29uc2lkZXIgYWRkaW5nIGEgbG9hZGluZyBpbWFnZS9hbmltYXRpb25cbkNvbnNpZGVyIGFkZGluZyBhIGNvb3JkaW5hdGVzIHRoaW5nIHRvIGd1ZXN0aW1hdGUgcmFuZG9tIHBsYWNlc1xuTG9vayBpbnRvIGF1dG8tZmluaXNoZWQgc2VhcmNoIHJlc3VsdHNcblxuXG5PcGVuV2VhdGhlciBBUElcblxuYTY0OWY4ZjBmNmM4OThjNGZlN2FlMmRmZWE1ZjA4MDBcbm5hbWU6IHdlYXRoZXItYXBwXG5cbkRPQ1M6XG5odHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9jdXJyZW50XG5cblxuICAgICAgdGVtcDogd2VhRGF0YS5tYWluLnRlbXAsIFxuICAgICAgZmVlbHM6IHdlYURhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgaHVtaWQ6IHdlYURhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHByZXNzOiB3ZWFEYXRhLm1haW4ucHJlc3N1cmUsXG4gICAgICB0TWluOiB3ZWFEYXRhLm1haW4udGVtcF9taW4sXG4gICAgICB0TWF4OiB3ZWFEYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICBjb3VudHJ5OiB3ZWFEYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgc3VucmlzZTogd2VhRGF0YS5zeXMuc3VucmlzZSxcbiAgICAgIHN1bnNldDogd2VhRGF0YS5zeXMuc3Vuc2V0LFxuICAgICAgbWFpbkRlc2M6IHdlYURhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgZGVzYzogd2VhRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgaWNvbjogd2VhRGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgICBpZDogd2VhRGF0YS53ZWF0aGVyWzBdLmlkLFxuICAgICAgd2luZERpcjogd2VhRGF0YS53aW5kLmRlZyxcbiAgICAgIHdpbmRTcDogd2VhRGF0YS53aW5kLnNwZWVkLFxuICAgICAgY2xvdWRzOiB3ZWFEYXRhLmNsb3Vkcy5hbGwsXG4gICAgICB2aXNpYmxlOiB3ZWFEYXRhLnZpc2liaWxpdHksXG4gICAgICBjaXR5OiB3ZWFEYXRhLm5hbWUsXG4gICAgICB0bXo6IHdlYURhdGEudGltZXpvbmVcblxuXG5cblxuREFUQSBJJ0QgTElLRSBUTyBIQVZFXG4tIE1BSU5cbi0tIHRlbXAgKG1pbi9tYXgpXG4tLSBmZWVscyBsaWtlIHRlbXBcbi0tIGh1bWlkaXR5L3ByZXNzdXJlXG4tIFNZU1xuLS0gY291bnRyeVxuLS0gc3VucmlzZVxuLS0gc3Vuc2V0XG4tIFdFQVRIRVJcbi0tIDBcbi0tLSBtYWluIChtYWluIGRlc2MpXG4tLS0gZGVzY3JpcHRpb24gKGNvdWxkIHVzZSBpZCBkZXNjPylcbi0tLSBpY29uIChodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy93ZWF0aGVyLWNvbmRpdGlvbnMpXG4tLS0gaWQgKGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL3dlYXRoZXItY29uZGl0aW9ucylcbi0gV0lORFxuLS0gZGVnICh3aW5kIGRpcmVjdGlvbi9tZXRlb3Jsb2dpY2FsKVxuLS0gc3BlZWRcbi0gQ0xPVURTXG4tLSBhbGwgKCUpXG4tIE5BTUVcbi0gVElNRVpPTkUgKHNoaWZ0IGluIHNlY29uZHMgZnJvbSBVVEMpXG4tIFZJU0lCSUxJVFlcblxuKi8iLCJpbXBvcnQgd2VhdGhlckFQSSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuLy8gQkFCRUxcbmNvbnN0IHJlZ2VuZXJhdG9yUnVudGltZSA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cbi8vIERPTVNcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b3BMZWZ0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wTGVmdFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZCh0b3BMZWZ0KTtcbmNvbnN0IHRvcFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9wUmlnaHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b3BSaWdodFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZCh0b3BSaWdodCk7XG5cbi8vbG9jYXRpb24gZGlzcGxheVxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NhdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvY2F0aW9uXCIpO1xuICB0b3BMZWZ0LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaXR5XCIpO1xuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChjaXR5KTtcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb3VudHJ5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY291bnRyeVwiKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoY291bnRyeSk7XG5cbi8vdGVtcCBkaXNwbGF5XG5jb25zdCB0ZW1wRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBEaXNwbGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcGVyYXR1cmUnKTtcbiAgdG9wTGVmdC5hcHBlbmRDaGlsZCh0ZW1wRGlzcGxheSk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmZWVsc0xpa2Uuc2V0QXR0cmlidXRlKCdpZCcsICdmZWVsc0xpa2UnKTtcbiAgdG9wTGVmdC5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuY29uc3QgdE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRNaW4uc2V0QXR0cmlidXRlKCdpZCcsICd0TWluJyk7XG4gIHRvcExlZnQuYXBwZW5kQ2hpbGQodE1pbik7XG5jb25zdCB0TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdE1heC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RNYXgnKTtcbiAgdG9wTGVmdC5hcHBlbmRDaGlsZCh0TWF4KTtcblxuLy93ZWF0aGVyIGRpc3BsYXlcbmNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0b3BSaWdodC5hcHBlbmRDaGlsZChpY29uKTtcbmNvbnN0IHdNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd01haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3TWFpblwiKTtcbiAgdG9wUmlnaHQuYXBwZW5kQ2hpbGQod01haW4pO1xuY29uc3Qgd0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3RGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndEZXNjXCIpO1xuICB0b3BSaWdodC5hcHBlbmRDaGlsZCh3RGVzYyk7XG5cbi8vZGV0YWlscyBiYXIgZGlzcGxheVxuY29uc3QgZGVldHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWV0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlZXRzXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGRlZXRzKTtcblxuLy93aW5kL2Nsb3VkcyBkaXNwbGF5XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVldHMuYXBwZW5kQ2hpbGQod2luZCk7XG5jb25zdCBjbG91ZFBlcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWV0cy5hcHBlbmRDaGlsZChjbG91ZFBlcmMpO1xuXG4vL2h1bWlkaXR5L3ByZXNzdXJlXG5jb25zdCBodW1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlZXRzLmFwcGVuZENoaWxkKGh1bWlkKTtcbmNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVldHMuYXBwZW5kQ2hpbGQocHJlc3N1cmUpO1xuXG4vL2hvdXJseVxuY29uc3QgaG91cmx5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3VybHlGb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvdXJseUZvcmVjYXN0XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0KTtcblxuLy9kYWlseVxuY29uc3QgZGFpbHlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhaWx5Rm9yZWNhc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkYWlseUZvcmVjYXN0XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3QpO1xuXG5cblxuXG4vLyBESVNQTEFZIERBVEFcbmFzeW5jIGZ1bmN0aW9uIHJ1bihwLCB0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyQVBJKHAsIHQpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke3dlYXRoZXJEYXRhLmNvb3JkLmxhdH0mbG9uPSR7d2VhdGhlckRhdGEuY29vcmQubG9ufSZleGNsdWRlPWN1cnJlbnQsbWludXRlbHkmdW5pdHM9JHt0fSZhcHBpZD1hNjQ5ZjhmMGY2Yzg5OGM0ZmU3YWUyZGZlYTVmMDgwMGApO1xuICAgIGNvbnN0IGZvcmVEYXRhID0gYXdhaXQgZm9yZWNhc3QuanNvbigpO1xuXG4gICAgbGV0IHVuaXQ7XG4gICAgaWYgKHQgPT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgICB1bml0ID0gXCJGXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSBcIkNcIjtcbiAgICB9O1xuXG4gICAgLy9waWVjZXMgb2YgYSBmdW5jIHRvIGZpbmQgZGlyZWN0aW9uIGZyb20gZGVncmVlIGFuZ2xlIHZpYSBnaXRodWJcbiAgICAvL2h0dHBzOi8vZ2lzdC5naXRodWIuY29tL2Jhc2FyYXQvNDY3MDIwMFxuICAgIGNvbnN0IHZhbCA9IE1hdGguZmxvb3IoKHdlYXRoZXJEYXRhLndpbmQuZGVnIC8gMjIuNSkgKyAwLjUpO1xuICAgIGNvbnN0IGFyciA9IFtcIk5cIiwgXCJOTkVcIiwgXCJORVwiLCBcIkVORVwiLCBcIkVcIiwgXCJFU0VcIiwgXCJTRVwiLCBcIlNTRVwiLCBcIlNcIiwgXCJTU1dcIiwgXCJTV1wiLCBcIldTV1wiLCBcIldcIiwgXCJXTldcIiwgXCJOV1wiLCBcIk5OV1wiXTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhcnJbKHZhbCAlIDE2KV07XG5cbiAgICAvL2xvY2F0aW9uXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLm5hbWV9LCAke3dlYXRoZXJEYXRhLnN5cy5jb3VudHJ5fWA7XG4gICAgY291bnRyeS5zcmMgPSBgaHR0cHM6Ly93d3cuY291bnRyeWZsYWdzLmlvLyR7d2VhdGhlckRhdGEuc3lzLmNvdW50cnl9L3NoaW55LzY0LnBuZ2A7XG4gICAgY291bnRyeS50aXRsZSA9IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5O1xuXG4gICAgLy90ZW1wXG4gICAgdGVtcERpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5tYWluLnRlbXB9wrAke3VuaXR9YDtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZSAke3dlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZX3CsGA7XG4gICAgdE1pbi50ZXh0Q29udGVudCA9IGBNaW46ICR7d2VhdGhlckRhdGEubWFpbi50ZW1wX21pbn3CsGA7XG4gICAgdE1heC50ZXh0Q29udGVudCA9IGBNYXg6ICR7d2VhdGhlckRhdGEubWFpbi50ZW1wX21heH3CsGA7XG5cbiAgICAvL3dlYXRoZXJcbiAgICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn1ANHgucG5nYDtcbiAgICBpY29uLnRpdGxlID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIHdNYWluLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIHdEZXNjLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIC8vd2luZCwgY2xvdWRzLCBodW1pZGl0eSwgcHJlc3N1cmVcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7ZGlyZWN0aW9ufSAke3dlYXRoZXJEYXRhLndpbmQuc3BlZWR9YDtcbiAgICBjbG91ZFBlcmMudGV4dENvbnRlbnQgPSBgQ2xvdWRpbmVzczogJHt3ZWF0aGVyRGF0YS5jbG91ZHMuYWxsfSVgO1xuICAgIGh1bWlkLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmU6ICR7d2VhdGhlckRhdGEubWFpbi5wcmVzc3VyZX0gaFBhYDtcblxuXG4gICAgLy9ob3VybHlcbiAgICBmb3JlRGF0YS5ob3VybHkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgLy9pbmRleFxuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBjb25zdCBob3VybHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob3VybHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3VybHlcIik7XG5cbiAgICAgICAgLy90aW1lXG4gICAgICAgIGhvdXJseS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGUuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtob3VyOiBcIm51bWVyaWNcIn0pO1xuXG4gICAgICAgIC8vaWNvblxuICAgICAgICBjb25zdCBoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgaEljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZS53ZWF0aGVyW2ldLmljb259QDJ4LnBuZ2BcbiAgICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoaEljb24pO1xuXG4gICAgICAgIC8vZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgaERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBoRGVzYy50ZXh0Q29udGVudCA9IGUud2VhdGhlcltpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoaERlc2MpO1xuXG4gICAgICAgIC8vdGVtcFxuICAgICAgICBjb25zdCBoVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgaFRlbXAudGV4dENvbnRlbnQgPSBgJHtlLnRlbXB9wrAke3VuaXR9YDtcbiAgICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoaFRlbXApO1xuXG4gICAgICAgIGkrKztcbiAgICAgICAgaG91cmx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5KTtcbiAgICB9KVxuXG5cbiAgICAvL2RhaWx5XG4gICAgZm9yZURhdGEuZGFpbHkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgLy9pbmRleFxuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBjb25zdCBkYWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYWlseS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhaWx5XCIpO1xuXG4gICAgICAgIC8vdGltZVxuICAgICAgICBkYWlseS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGUuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHt3ZWVrZGF5OiBcImxvbmdcIn0pO1xuXG4gICAgICAgIC8vaWNvblxuICAgICAgICBjb25zdCBkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgZEljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZS53ZWF0aGVyW2ldLmljb259QDJ4LnBuZ2BcbiAgICAgICAgICBkYWlseS5hcHBlbmRDaGlsZChkSWNvbik7XG5cbiAgICAgICAgLy9kZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGREZXNjLnRleHRDb250ZW50ID0gZS53ZWF0aGVyW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIGRhaWx5LmFwcGVuZENoaWxkKGREZXNjKTtcblxuICAgICAgICAvL3RlbXBcbiAgICAgICAgY29uc3QgZFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGRUZW1wLnRleHRDb250ZW50ID0gYCR7ZS50ZW1wLmRheX3CsCR7dW5pdH1gO1xuICAgICAgICAgIGRhaWx5LmFwcGVuZENoaWxkKGRUZW1wKTtcblxuICAgICAgICBpKys7XG4gICAgICAgIGRhaWx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGFpbHkpO1xuICAgIH0pXG5cblxuICB9IGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcnVuO1xuXG5cblxuXG4vKlxuRk9SRUNBU1QgT0JKRUNUIE9IIE1ZIEdPRFxuXG5EQUlMWVxuLSBmb3JlRGF0YS5kYWlseVtpXS50ZW1wLmRheVxuLSBmb3JlRGF0YS5kYWlseVtpXS50ZW1wLm5pZ2h0XG4tIGZvcmVEYXRhLmRhaWx5W2ldLmZlZWxzX2xpa2UuZGF5XG4tIGZvcmVEYXRhLmRhaWx5W2ldLmZlZWxzX2xpa2UubmlnaHRcbi0gZm9yZURhdGEuZGFpbHlbaV0ucmFpbiAoPylcbi0gZm9yZURhdGEuZGFpbHlbaV0ud2VhdGhlci5pY29uXG4tIGZvcmVEYXRhLmRhaWx5W2ldLndlYXRoZXIubWFpblxuLSBmb3JlRGF0YS5kYWlseVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9uXG4tIGZvcmVEYXRhLmRhaWx5W2ldLndpbmRfZGVnXG4tIGZvcmVEYXRhLmRhaWx5W2ldLndpbmRfc3BlZWRcblxuSE9VUkxZXG4tIGZvcmVEYXRhLmhvdXJseVtpXS5mZWVsc19saWtlXG4tIGZvcmVEYXRhLmhvdXJseVtpXS50ZW1wXG4tIGZvcmVEYXRhLmhvdXJseVtpXS53ZWF0aGVyLmljb25cbi0gZm9yZURhdGEuaG91cmx5W2ldLndlYXRoZXIubWFpblxuLSBmb3JlRGF0YS5ob3VybHlbaV0ud2VhdGhlci5kZXNjcmlwdGlvblxuLSBmb3JlRGF0YS5ob3VybHlbaV0ud2luZF9kZWdcbi0gZm9yZURhdGEuaG91cmx5W2ldLndpbmRfc3BlZWRcblxuQUxFUlRcbi0gZm9yZURhdGEuYWxlcnRzLmV2ZW50XG4tIGZvcmVEYXRhLmFsZXJ0cy5kZXNjcmlwdGlvblxuLSBmb3JlRGF0YS5hbGVydHMuc3RhcnRcbi0gZm9yZURhdGEuYWxlcnRzLmVuZFxuLSBmb3JlRGF0YS5hbGVydHMuc2VuZGVyX25hbWVcblxuT1RIRVJcbi1mb3JlRGF0YS50aW1lem9uZSAoZ2l2ZXMgYW4gYWN0dWFsIG5hbWUpXG4qLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==