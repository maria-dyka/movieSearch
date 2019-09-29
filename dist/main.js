/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/movie/index.js":
/*!***************************************!*\
  !*** ./src/components/movie/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Movie; });\n/* harmony import */ var _js_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/config */ \"./src/js/config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Movie =\n/*#__PURE__*/\nfunction () {\n  function Movie(data) {\n    _classCallCheck(this, Movie);\n\n    this.data = data;\n  }\n\n  _createClass(Movie, [{\n    key: \"generateHTML\",\n    value: function generateHTML() {\n      var readyData = this.mapData();\n      return \"\\n            <div class=\\\"row data\\\">\\n            <div class=\\\"col-md-4\\\"><div class=\\\"poster\\\"><img alt='\".concat(readyData.title, \"' src='\").concat(_js_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imgSRC + readyData.poster, \"'></div></div>\\n            <div class=\\\"col-md-8\\\"><h2>\").concat(readyData.title, \"</h2>\\n            <div class=\\\"row additional-info\\\">\\n            <div class=\\\"col-md-3\\\">Released in \").concat(readyData.date, \"</div>\\n            <div class=\\\"col-md-3\\\">Origin: \").concat(readyData.country, \"</div>\\n            <div class=\\\"col-md-3\\\">Language: \").concat(readyData.language, \"</div>\\n            <div class=\\\"col-md-3\\\">Rating: \").concat(readyData.vote, \"</div></div>\\n            <div class=\\\"overview\\\">\").concat(readyData.description, \"</div></div></div>\\n            \");\n    }\n  }, {\n    key: \"mapData\",\n    value: function mapData() {\n      return {\n        title: this.data.title || this.data.name || this.data.original_title || this.data.original_name,\n        poster: this.data.poster_path || this.data.backdrop_path,\n        date: this.data.date || this.data.release_date || this.data.first_air_date,\n        country: this.data.original_language || this.data.language,\n        vote: this.data.vote_average,\n        description: this.data.overview,\n        id: this.data.id,\n        type: this.data.contentType\n      };\n    }\n  }, {\n    key: \"getStars\",\n    value: function getStars() {\n      var rating = this.data.vote_average;\n      var canvas = document.createElement(\"canvas\");\n      canvas.style.marginLeft = '5px';\n      canvas.height = '14';\n      canvas.width = '140';\n      var ctx = canvas.getContext(\"2d\");\n      ctx.save();\n      ctx.lineJoin = 'miter';\n      ctx.strokeStyle = 'rgb(0, 0, 0)';\n      ctx.lineCap = 'butt';\n      ctx.lineWidth = 0.5;\n\n      for (var i = 0; i < 10; i++) {\n        drawStar(i);\n      }\n\n      function drawStar(i) {\n        ctx.save();\n        ctx.translate(ctx.canvas.height * i, 0);\n        ctx.beginPath();\n        ctx.moveTo(ctx.canvas.height / 2, 0);\n        ctx.lineTo(ctx.canvas.height / 4 + ctx.canvas.height / 11, ctx.canvas.height / 4 + ctx.canvas.height / 11);\n        ctx.lineTo(0, ctx.canvas.height / 2 - ctx.canvas.height / 11);\n        ctx.lineTo(ctx.canvas.height / 8 + ctx.canvas.height / 11, 3 * ctx.canvas.height / 4 - ctx.canvas.height / 11);\n        ctx.lineTo(ctx.canvas.height / 4, ctx.canvas.height);\n        ctx.lineTo(ctx.canvas.height / 2, ctx.canvas.height - 2 * ctx.canvas.height / 11);\n        ctx.lineTo(3 * ctx.canvas.height / 4, ctx.canvas.height);\n        ctx.lineTo(7 * ctx.canvas.height / 8 - ctx.canvas.height / 11, 3 * ctx.canvas.height / 4 - ctx.canvas.height / 11);\n        ctx.lineTo(ctx.canvas.height, ctx.canvas.height / 2 - ctx.canvas.height / 11);\n        ctx.lineTo(3 * ctx.canvas.height / 4 - ctx.canvas.height / 11, ctx.canvas.height / 4 + ctx.canvas.height / 11);\n        ctx.lineTo(ctx.canvas.height / 2, 0);\n        ctx.closePath();\n\n        if (i + 1 <= rating) {\n          ctx.fillStyle = 'yellow';\n          ctx.fill();\n        } else if (i + 1 > rating && i < rating) {\n          fillGradient(i);\n        }\n\n        ctx.stroke();\n        ctx.restore();\n      }\n\n      function fillGradient(i) {\n        var gr = rating - i;\n        ctx.fillStyle = 'yellow';\n        ctx.fill();\n        ctx.clearRect(ctx.canvas.height * gr, 0, ctx.canvas.height - ctx.canvas.height * gr, ctx.canvas.height);\n      }\n\n      return canvas;\n    }\n  }]);\n\n  return Movie;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/movie/index.js?");

/***/ }),

/***/ "./src/components/movieList/index.js":
/*!*******************************************!*\
  !*** ./src/components/movieList/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieList; });\n/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie */ \"./src/components/movie/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar MovieList =\n/*#__PURE__*/\nfunction () {\n  function MovieList(data) {\n    _classCallCheck(this, MovieList);\n\n    this.data = data;\n  }\n\n  _createClass(MovieList, [{\n    key: \"drawToDOM\",\n    value: function drawToDOM(selector) {\n      this.clearList(selector);\n      selector.appendChild(this.fragment);\n    }\n  }, {\n    key: \"renderMovies\",\n    value: function renderMovies() {\n      var _this = this;\n\n      this.fragment = document.createDocumentFragment();\n      this.data.results.forEach(function (film) {\n        var article = document.createElement(\"article\");\n        var movie = new _movie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](film);\n        article.innerHTML = movie.generateHTML();\n\n        _this.fragment.appendChild(article);\n\n        var stars = document.createElement(\"div\");\n        stars.appendChild(movie.getStars());\n        article.appendChild(stars);\n      });\n    }\n  }, {\n    key: \"clearList\",\n    value: function clearList(selector) {\n      selector.innerHTML = \"\";\n    }\n  }]);\n\n  return MovieList;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/movieList/index.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar API_KEY = \"549d6f2e138f2c2f6bfe233319a965a4\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  searchMovieUrl: \"https://api.themoviedb.org/3/search/movie?api_key=\".concat(API_KEY, \"&query=\"),\n  imgSRC: \"http://image.tmdb.org/t/p/w500\"\n});\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_movieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/movieList */ \"./src/components/movieList/index.js\");\n/* harmony import */ var _movies_servies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-servies */ \"./src/js/movies-servies.js\");\n\n\nvar input = document.querySelector(\".search-input\");\nvar movieList = document.querySelector(\".movies\");\ninput.addEventListener(\"input\", function (e) {\n  var searchText = e.target.value;\n\n  if (!searchText) {\n    movieList.innerHTML = \"\";\n    return;\n  }\n\n  _movies_servies__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getVideoByText(searchText).then(function (result) {\n    console.log(result);\n    var list = new _components_movieList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](result);\n    list.renderMovies();\n    list.drawToDOM(movieList);\n  });\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/movies-servies.js":
/*!**********************************!*\
  !*** ./src/js/movies-servies.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\n\nfunction getVideoByText(text) {\n  if (!text) {\n    return;\n  }\n\n  return fetch(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchMovieUrl + text).then(function (r) {\n    return r.json();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getVideoByText: getVideoByText\n});\n\n//# sourceURL=webpack:///./src/js/movies-servies.js?");

/***/ })

/******/ });