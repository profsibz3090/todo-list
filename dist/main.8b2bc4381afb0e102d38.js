/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src//assets/Roboto/Roboto-Bold.ttf */ "./src/assets/Roboto/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src//assets/Roboto/Roboto-Regular.ttf */ "./src/assets/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
    background-color: azure;
    width: 100%;
    height: 100vh;
    font-family: 'Roboto';
}

body > div.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
}

div.nav-bar {
    background-color: lightgreen;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 5rem;
    padding: .5rem;
}

div.main {
    padding: 0 .5rem;
    flex-grow: 1;
    flex-grow: 5;
}

.nav-item-image ,.project-item-image {
    width: 2rem;
}

.nav-item {
    display: flex;
    gap: .3rem;
    font-size: 1.2rem;
    align-items: center;
    cursor: pointer;
    padding: .1rem;
}

.project-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem;
}

.project-left {
    cursor: pointer;
}

.project-item:hover {
    background-color: azure;
}

.nav-item:hover {
    background-color: azure;
}

.nav-bar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.nav-top, .nav-bottom {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    font-size: 1.2rem;
}

.nav-title {
    font-size: 1.8rem;
    font-weight: bold;
}

.add-icon {
    width: 2rem;
}

.add-project, .add-task {
    display: flex;
    gap: .5rem;
    align-items: center;
    cursor: pointer;
}

.popup-form {
    padding: 1rem;
    background-color: lightgreen;
    width: clamp(7rem, 40%, 100%);
    display: flex;
    flex-direction: column;
    gap: .4rem;
}

.popup-form input {
    padding: .4rem;

}

.popup-add {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3rem;
}

.row-grp {
    display: flex;
    flex-direction: column;
    gap: .4rem;
}

.buttons {
   display: flex;
   gap: .2rem;
}

.add-btn, .cancel-btn {
    flex: 1;
}

.task {
    display: flex;
    width: 100%;
    gap: .5rem;
    padding: .2rem;
    background-color: lightgray;
    align-items: center;
    font-size: 1.2rem;
    justify-content: space-between;
    border-radius: .2rem;
    margin-bottom: .4rem;
}

.task-form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.heading {
    width: 100%;
    padding: 1rem 0;
    background-color: lightgreen;
    text-align: center;
    margin-bottom: .5rem;
}

select {
    padding: .4rem;
    font-size: inherit;
    font-family: inherit;
}

button {
    padding: .4rem;
    font-size: inherit;
    font-family: inherit;
}

textarea {
    padding: .4rem;
}

.task-left {
   display: flex;
   align-items: center;
   gap: .5rem;
}

.task-right {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    gap: 1rem;
}
.delete-icon {
    width: 2rem;
    align-items: center;
    cursor: pointer;
}

.details-btn {
    padding: .1rem .4rem;
}

input[type='checkbox'] {
    width: 1.2rem;
    height: 1.2rem;
}

.details-popup-form {
    background-color: lightgreen;
    width: 40%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    font-size: 1.2rem;
    border-radius: .4rem;
}

.priority-marker {
    width: .3rem;
    height: 2rem;
    
}

.priority-high-color {
  background-color: red;
}

.priority-medium-color {
  background-color: orange;
}

.priority-low-color {
  background-color: green;
}

.delete-project-icon {
    width: 2rem;
}

.project-left {
    display: flex;
    align-items: center;
    gap: .3rem;
}

.edit-icon {
    width: 2rem;
}

.header{
    width: 100%;
    display: flex;
    /* background-color: lightgreen; */
    padding: .4rem;
    justify-content: center;
    align-items: center;
}

.header-logo {
    width: 3rem;
}

.header-title {
    font-size: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,oFAA6F;AACjG;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,cAAc;;AAElB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;GACG,aAAa;GACb,UAAU;AACb;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,WAAW;IACX,UAAU;IACV,cAAc;IACd,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,8BAA8B;IAC9B,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,4BAA4B;IAC5B,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;AAClB;;AAEA;GACG,aAAa;GACb,mBAAmB;GACnB,UAAU;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,YAAY;;AAEhB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,cAAc;IACd,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url(../src//assets/Roboto/Roboto-Bold.ttf),url(../src//assets/Roboto/Roboto-Regular.ttf);\r\n}\r\n\r\nbody {\r\n    background-color: azure;\r\n    width: 100%;\r\n    height: 100vh;\r\n    font-family: 'Roboto';\r\n}\r\n\r\nbody > div.wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\ndiv.nav-bar {\r\n    background-color: lightgreen;\r\n    flex-grow: 1;\r\n    flex-shrink: 0;\r\n    flex-basis: 5rem;\r\n    padding: .5rem;\r\n}\r\n\r\ndiv.main {\r\n    padding: 0 .5rem;\r\n    flex-grow: 1;\r\n    flex-grow: 5;\r\n}\r\n\r\n.nav-item-image ,.project-item-image {\r\n    width: 2rem;\r\n}\r\n\r\n.nav-item {\r\n    display: flex;\r\n    gap: .3rem;\r\n    font-size: 1.2rem;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: .1rem;\r\n}\r\n\r\n.project-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: .1rem;\r\n}\r\n\r\n.project-left {\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover {\r\n    background-color: azure;\r\n}\r\n\r\n.nav-item:hover {\r\n    background-color: azure;\r\n}\r\n\r\n.nav-bar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.nav-top, .nav-bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .2rem;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.nav-title {\r\n    font-size: 1.8rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.add-icon {\r\n    width: 2rem;\r\n}\r\n\r\n.add-project, .add-task {\r\n    display: flex;\r\n    gap: .5rem;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.popup-form {\r\n    padding: 1rem;\r\n    background-color: lightgreen;\r\n    width: clamp(7rem, 40%, 100%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.popup-form input {\r\n    padding: .4rem;\r\n\r\n}\r\n\r\n.popup-add {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: .3rem;\r\n}\r\n\r\n.row-grp {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.buttons {\r\n   display: flex;\r\n   gap: .2rem;\r\n}\r\n\r\n.add-btn, .cancel-btn {\r\n    flex: 1;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    width: 100%;\r\n    gap: .5rem;\r\n    padding: .2rem;\r\n    background-color: lightgray;\r\n    align-items: center;\r\n    font-size: 1.2rem;\r\n    justify-content: space-between;\r\n    border-radius: .2rem;\r\n    margin-bottom: .4rem;\r\n}\r\n\r\n.task-form {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.heading {\r\n    width: 100%;\r\n    padding: 1rem 0;\r\n    background-color: lightgreen;\r\n    text-align: center;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\nselect {\r\n    padding: .4rem;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n}\r\n\r\nbutton {\r\n    padding: .4rem;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n}\r\n\r\ntextarea {\r\n    padding: .4rem;\r\n}\r\n\r\n.task-left {\r\n   display: flex;\r\n   align-items: center;\r\n   gap: .5rem;\r\n}\r\n\r\n.task-right {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 1rem;\r\n    gap: 1rem;\r\n}\r\n.delete-icon {\r\n    width: 2rem;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.details-btn {\r\n    padding: .1rem .4rem;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n}\r\n\r\n.details-popup-form {\r\n    background-color: lightgreen;\r\n    width: 40%;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    font-size: 1.2rem;\r\n    border-radius: .4rem;\r\n}\r\n\r\n.priority-marker {\r\n    width: .3rem;\r\n    height: 2rem;\r\n    \r\n}\r\n\r\n.priority-high-color {\r\n  background-color: red;\r\n}\r\n\r\n.priority-medium-color {\r\n  background-color: orange;\r\n}\r\n\r\n.priority-low-color {\r\n  background-color: green;\r\n}\r\n\r\n.delete-project-icon {\r\n    width: 2rem;\r\n}\r\n\r\n.project-left {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: .3rem;\r\n}\r\n\r\n.edit-icon {\r\n    width: 2rem;\r\n}\r\n\r\n.header{\r\n    width: 100%;\r\n    display: flex;\r\n    /* background-color: lightgreen; */\r\n    padding: .4rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.header-logo {\r\n    width: 3rem;\r\n}\r\n\r\n.header-title {\r\n    font-size: 2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/models/Option.js":
/*!******************************!*\
  !*** ./src/models/Option.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Option)
/* harmony export */ });
class Option{
    constructor(name) {
        this.name = name;
        this.value = name
    }
}

/***/ }),

/***/ "./src/models/features/nav-bar/nav-bar.js":
/*!************************************************!*\
  !*** ./src/models/features/nav-bar/nav-bar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navBarBottom: () => (/* binding */ navBarBottom),
/* harmony export */   navBarTop: () => (/* binding */ navBarTop),
/* harmony export */   run: () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom-elems */ "./src/utils/dom-elems.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Option */ "./src/models/Option.js");
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav-item */ "./src/models/nav-item.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../task */ "./src/models/task.js");






const navItemTopList = [
    new _nav_item__WEBPACK_IMPORTED_MODULE_3__["default"]('All'),
    new _nav_item__WEBPACK_IMPORTED_MODULE_3__["default"]('Today'),
    new _nav_item__WEBPACK_IMPORTED_MODULE_3__["default"]('This-Week')
];

const projectItemsList = [
//    new NavItem('Hello'),
//    new NavItem('Python')
];

const tasksList = [];

let currentTab = 'All';

function layoutSetup() {
    const header = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('header');
    const headerP = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)('Todo-List', 'header-title');
    const logo = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].completedTaskIcon, 'logo', 'header-logo');
    header.append(logo ,headerP);
    const wrapperDiv = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('wrapper');
    const navBar = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('nav-bar');
    const mainDiv = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('main');
    const heading = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(currentTab, 'heading');

    let allTasks = [];
    if(currentTab === 'All') {
          allTasks = tasksList.map(task => {
          const wrapper = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task')
          const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.name);
          const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
          const priorityMarker = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('priority-marker');
          if(task.priority == 'High') {
            priorityMarker.classList.add('priority-high-color');
          } else if(task.priority == 'Medium') {
            priorityMarker.classList.add('priority-medium-color');
          } else if (task.priority == 'Low') {
            priorityMarker.classList.add('priority-low-color');
          }
          const left = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-left');
          left.append(priorityMarker, checkbox, p);
          //details date and delete
           const right = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-right');
          // details
          const details = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Details','details-btn', () => {
            activatePopupForDetails(task)
          });
          //delete
          const deleteBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].deleteIcon2,'delete-icon', 'delete-icon');
          deleteBtn.addEventListener('click', (e) => {
            const target = e.target.id;
            const item = tasksList.filter(task => task.id == target);
            const index = tasksList.indexOf(item[0]);
            tasksList.splice(index, 1);
            resetForTasksForm();
          });
          //edit
          const edit = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].editIcon, 'edit-icon', 'edit-icon');
          edit.addEventListener('click', () => {
            editTask(task)
          });
          //duedate
          const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.duedate);
          right.append(details, deleteBtn,edit ,duedate)
          wrapper.append(left, right);
          return wrapper;
     });
  }
 
    mainDiv.append(heading, ...allTasks) ;
    wrapperDiv.append(navBar, mainDiv);
    document.querySelector('body').append(header,wrapperDiv);
}

const run = () => {
    layoutSetup()
    const navBar = document.querySelector('div.wrapper div.nav-bar');
    navBar.append(navBarTop(), navBarBottom())
}

function navBarTop() {
    const navBarTop = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('nav-top');

    const navItems = navItemTopList.map(items => {
         const div = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('nav-item');
         const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(items.name);
         const image = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].calenderTextIcon, 'nav-item-image', 'nav-item-image');
         div.append(image,p);
         div.addEventListener('click', handleNavItemClicked)
         return div;
    });

    navBarTop.append(...navItems);
    return navBarTop;
}

function navBarBottom() {
    const navBottom = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('nav-bottom');
    const title = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)('Projects', 'nav-title');
    
    const projectItems = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('project-items');

    const projects = projectItemsList.map(project => {
        const div = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('project-item');
        const projectLeft = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('project-left');
        const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(project.name);
        const deleteImage = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].deleteIcon2, 'delete-project-icon', 'delete-project-icon');
        deleteImage.addEventListener('click', () => {
           const index = projectItemsList.indexOf(project);
           projectItemsList.splice(index, 1);
           const body = document.querySelector('body');
           body.innerHTML = null;
           currentTab = 'All';
           run();
        });
        const image = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].project2, 'project-item-image', 'project-item-image');
        projectLeft.append(image,p);
        projectLeft.addEventListener('click', handleNavItemClicked)
        div.append(projectLeft, deleteImage);
      
        return div;
    });  

    const addProjectElem = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.addElement)('Add Project', 'add-project', () => {
            activatePopup()
    });

    projectItems.append(...projects);

    navBottom.append(title, projectItems, addProjectElem);
    return navBottom;
}

function handleNavItemClicked() {
   const title = this.querySelector('p').innerText;
   currentTab = title;

   const right = document.querySelector('div.wrapper > div.main');
   right.innerHTML = null;
   const heading = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(title, 'heading');
   const addTaskElement = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.addElement)('Add Task', 'add-task', () => {
       activatePopupForTasks();
       const taskName  = document.querySelector('#task-name').value;
       if(taskName === '') {
         return;
       }
       const id = Math.random();
       const task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](id,taskName, _utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].calenderTextIcon, currentTab);
       tasksList.push(task);
   });

   const tabTasks = tasksList.filter(task => task.category == currentTab);
   let tabTasksElems = [];
   if(tabTasks.length !== 0) {
      tabTasksElems = tabTasks.map(task => {
        const wrapper = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task')
          const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.name);
          const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
          const priorityMarker = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('priority-marker');
          if(task.priority == 'High') {
            priorityMarker.classList.add('priority-high-color');
          } else if(task.priority == 'Medium') {
              priorityMarker.classList.add('priority-medium-color');
          } else if (task.priority == 'Low') {
            priorityMarker.classList.add('priority-low-color');
        }
          const left = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-left');
          left.append(priorityMarker, checkbox, p);
        //details date and delete
         const right = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-right');
        // details
        const details = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Details','details-btn');
        details.addEventListener('click', function(e){
            activatePopupForDetails(task);
        });
        //delete
        const deleteBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].deleteIcon2,'delete-icon', 'delete-icon');
        deleteBtn.addEventListener('click', (e) => {
            resetForTasksForm();
        });
        // edit
        const edit = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].editIcon, 'edit-icon', 'edit-icon');
        edit.addEventListener('click', () => {
            editTask(task)
        });
        //due date
        const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.duedate);
        right.append(details, deleteBtn, edit,duedate)
        wrapper.append(left, right);
        return wrapper;
   });
} 
   if(currentTab === 'All') {
      const allTasks = tasksList.map(task => {
          const wrapper = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task')
          const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.name);
          const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
          const priorityMarker = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('priority-marker');
          if(task.priority == 'High') {
            priorityMarker.classList.add('priority-high-color');
          } else if(task.priority == 'Medium') {
              priorityMarker.classList.add('priority-medium-color');
          } else if (task.priority == 'Low') {
            priorityMarker.classList.add('priority-low-color');
        }
          const left = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-left');
          left.append(priorityMarker, checkbox, p);
        //details, date, edit and delete
         const right = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-right');
        // details
        const details = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Details','details-btn');
        details.addEventListener('click', function(e){
            activatePopupForDetails(task);
        });
        // delete
        const deleteBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].deleteIcon2,'delete-icon', 'delete-icon');
        deleteBtn.addEventListener('click', (e) => {
            resetForTasksForm();
        });
        //edit
        const edit = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].editIcon, 'edit-icon', 'edit-icon');
        edit.addEventListener('click', () => {
            editTask(task)
        });
        // date
        const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.duedate);
        right.append(details, deleteBtn, edit ,duedate)
        wrapper.append(left, right);
        return wrapper;
    });
    right.append(heading,...allTasks)
    return;
   }

   tabTasksElems.length === 0? right.append(heading,addTaskElement)
                             : right.append(heading, ...tabTasksElems ,addTaskElement) ;
}

function activatePopup() {
    const body = document.querySelector('body');
    body.innerHTML = null;
    body.classList.add('popup-add');
    const form = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('popup-form');
    const rowgrp = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
    const label = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('project-name', 'Project Name');
    const textFieldElem1 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.textFieldElem)('project-name', 'enter project name');
    rowgrp.append(label,textFieldElem1);
    const addBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Add', 'add-btn', () => {
        const value = document.getElementById('project-name').value;
        if(value === '') return;
        const project = new _nav_item__WEBPACK_IMPORTED_MODULE_3__["default"](value);
        projectItemsList.push(project);
        body.innerHTML = null;
        run();
    });
    const cancelBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Cancel', 'cancel-btn', () => {
       body.innerHTML = null;
       run();
    });
    
    const buttons = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('buttons');
    buttons.append(addBtn, cancelBtn);
    
    form.append(rowgrp, buttons)
    
    body.append(form)
}

function activatePopupForTasks(task1) {
     if(task1 == undefined) {
         const main = document.querySelector('div.main');
         main.innerHTML = null;
         //title(name)
         const form = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('popup-form');
         const rowgrp = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('task-name', 'Project Name');
         const textFieldElem1 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.textFieldElem)('task-name', 'enter task name');
         //description
         const textarea = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.textAreaElem)('task-textarea');
         textarea.rows = 10;
         textarea.cols = 10;
         const rowgrp2 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label2 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('description', 'Description');
         rowgrp2.append(label2, textarea);
         //priority
         const select = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.selectElem)('priority', 'priority', [
             new _Option__WEBPACK_IMPORTED_MODULE_2__["default"]('Low'),
             new _Option__WEBPACK_IMPORTED_MODULE_2__["default"]('Medium'),
             new _Option__WEBPACK_IMPORTED_MODULE_2__["default"]('High'),
         ]);
         const rowgrp3 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label3 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('priority', 'Priority');
         rowgrp3.append(label3, select);
         // due date
         const rowgrp1 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label1 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('date-picker', 'Due Date');
         const datePicker = document.createElement('input');
         datePicker.type = 'date';
         datePicker.id = 'date-picker';
         rowgrp1.append(label1,datePicker)
         rowgrp.append(label,textFieldElem1,rowgrp2,rowgrp3 ,rowgrp1);
         const addBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Add', 'add-btn', () => {
                 const taskName  = document.querySelector('#task-name').value;
                 const priority = document.getElementById('priority').value;
                 const duedate = document.getElementById('date-picker').value;
                 const description = document.getElementById('task-textarea').value;
                 if(taskName == '', duedate == '') {
                     alert('date and task name are required');
                     return;
                 };
                 const id = Math.random();
                 const task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](id,taskName, _utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].calenderTextIcon, currentTab,duedate,description,priority);
                 tasksList.push(task);
                 resetForTasksForm()
         });
         const cancelBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Cancel', 'cancel-btn', () => {
             resetForTasksForm();
         });
         
         const buttons = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('buttons');
         buttons.append(addBtn, cancelBtn);
         
         form.append(rowgrp, buttons)
         
         main.append(form)
     } else {
         const main = document.querySelector('div.main');
         main.innerHTML = null;
         //title(name)
         const form = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('popup-form');
         const rowgrp = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('task-name', 'Project Name');
         const textFieldElem1 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.textFieldElem)('task-name', 'enter task name');
         textFieldElem1.value = task1.name;
         //description
         const textarea = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.textAreaElem)('task-textarea');
         textarea.innerText = task1.description;
         textarea.rows = 10;
         textarea.cols = 10;
         const rowgrp2 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label2 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('description', 'Description');
         rowgrp2.append(label2, textarea);
         //priority
         const select = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.selectElem)('priority', 'priority', [
             new _Option__WEBPACK_IMPORTED_MODULE_2__["default"]('Low'),
             new _Option__WEBPACK_IMPORTED_MODULE_2__["default"]('Medium'),
             new _Option__WEBPACK_IMPORTED_MODULE_2__["default"]('High'),
         ]);
         const rowgrp3 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label3 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('priority', 'Priority');
         select.value = task1.priority;
         rowgrp3.append(label3, select);
         // due date
         const rowgrp1 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('row-grp');
         const label1 = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.labelElem)('date-picker', 'Due Date');
         const datePicker = document.createElement('input');
         datePicker.type = 'date';
         datePicker.id = 'date-picker';
         datePicker.value = task1.duedate;
         rowgrp1.append(label1,datePicker)
         rowgrp.append(label,textFieldElem1,rowgrp2,rowgrp3 ,rowgrp1);
         const addBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Update', 'add-btn', () => {
                
                //updating
                 const taskName  = document.querySelector('#task-name').value;
                 const priority = document.getElementById('priority').value;
                 const duedate = document.getElementById('date-picker').value;
                 const description = document.getElementById('task-textarea').value;
                
                 if(taskName == '', duedate == '') {
                     alert('date and task name are required');
                     return;
                 };
                  //removing current object from list
                  const index = tasksList.indexOf(task1);
                  const task = tasksList[index];
                 
                 const id = task1.id;
                //  const task = new Task(id,taskName, images.calenderTextIcon, currentTab,duedate,description,priority);
                 task.duedate = duedate;
                 task.description = description;
                 task.priority = priority;
                 task.name = taskName
                //  tasksList.push(task);
                 resetForTasksForm()
         });
         const cancelBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Cancel', 'cancel-btn', () => {
             resetForTasksForm();
         });
         
         const buttons = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('buttons');
         buttons.append(addBtn, cancelBtn);
         
         form.append(rowgrp, buttons)
         
         main.append(form)
     }
}

function activatePopupForDetails(task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"]()) {
    const main = document.querySelector('div.main');
    main.innerHTML = null;
    //title(name)
    const detailsForm = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('details-popup-form');
    // const detailsGrp = divElem('details-grp');
    const title = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(`Title: ${task.name}`);
    //description
    const description = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(`Description: ${task.description}`);
    //priority
    const priority = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(`Priority: ${task.priority}`);
    // due date
    const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(`DueDate: ${task.duedate}`);
    // category
    const category = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(`Category: ${currentTab}`);

    detailsForm.append(category,title, description, duedate, priority);
    const addBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Add', 'add-btn', () => {
            const taskName  = document.querySelector('#task-name').value;
            const priority = document.getElementById('priority').value;
            const duedate = document.getElementById('date-picker').value;
            const description = document.getElementById('task-textarea').value;
            if(taskName == '', duedate == '') {
                alert('date and task name are required');
                return;
            };
            const id = Math.random();
            const task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](id,taskName, _utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].calenderTextIcon, currentTab,duedate,description,priority);
            tasksList.push(task);
            resetForTasksForm()
    });
    const cancelBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Cancel', 'cancel-btn', () => {
        resetForTasksForm();
    });
    
    const buttons = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('buttons');
    buttons.append(cancelBtn);
    detailsForm.append(description, buttons)
    main.append(detailsForm)
}

function resetForTasksForm() {
    const mainDiv = document.querySelector('div.main');
    mainDiv.innerHTML = null;
    const heading = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(currentTab, 'heading');
    const addTaskElement = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.addElement)('Add Task', 'add-task', () => {
        activatePopupForTasks();
    });
 
    const tabTasks = tasksList.filter(task => task.category === currentTab);
    let tabTasksElems = [];
    if(tabTasks.length !== 0) {
        tabTasksElems = tabTasks.map(task => {
            const wrapper = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task')
            const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.name);
            const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
            const priorityMarker = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('priority-marker');
            if(task.priority == 'High') {
                priorityMarker.classList.add('priority-high-color');
            } else if(task.priority == 'Medium') {
                priorityMarker.classList.add('priority-medium-color');
            } else if (task.priority == 'Low') {
                priorityMarker.classList.add('priority-low-color');
            }
            const left = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-left');
            left.append(priorityMarker, checkbox, p);
          //details date and delete
           const right = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task-right');
          // details
          const details = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Details',`details-btn#${task.id}`, (e) => {
            activatePopupForDetails(task)
          });
          details.id = `details-btn#${task.id}`;
          //delete
          const deleteBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].deleteIcon2,'delete-icon', 'delete-icon');
          deleteBtn.id = task.id;
          deleteBtn.addEventListener('click', (e) => {
             const target = e.target.id;
             const item = tasksList.filter(task => task.id == target);
             const index = tasksList.indexOf(item[0]);
             tasksList.splice(index, 1);
             resetForTasksForm();
          });
          //edit
          const edit = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].editIcon, 'edit-icon', 'edit-icon');
          edit.addEventListener('click', () => {
              editTask(task)
          });
          //duedate
          const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.duedate);
          right.append(duedate ,details,edit ,deleteBtn)
          wrapper.append(left, right);
          return wrapper;
     });
  }
    tabTasksElems.length === 0? mainDiv.append(heading,addTaskElement)
                              : mainDiv.append(heading, ...tabTasksElems ,addTaskElement) ;
}

function editTask(task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"]()) {
    activatePopupForTasks(task)
}
   

/***/ }),

/***/ "./src/models/nav-item.js":
/*!********************************!*\
  !*** ./src/models/nav-item.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var _todo_list_src_utils_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../todo-list/src/utils/images */ "./src/utils/images.js");


class NavItem {
   constructor(name, icon = _todo_list_src_utils_images__WEBPACK_IMPORTED_MODULE_0__["default"].calenderTextIcon) {
      this.name = name;
      this.icon = icon;
   }
} 

/***/ }),

/***/ "./src/models/task.js":
/*!****************************!*\
  !*** ./src/models/task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _todo_list_src_utils_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../todo-list/src/utils/images */ "./src/utils/images.js");


class Task {
    constructor(id,name, icon = _todo_list_src_utils_images__WEBPACK_IMPORTED_MODULE_0__["default"].calenderTextIcon, category, duedate, description,priority) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.category = category;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }

}

/***/ }),

/***/ "./src/utils/dom-elems.js":
/*!********************************!*\
  !*** ./src/utils/dom-elems.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addElement: () => (/* binding */ addElement),
/* harmony export */   buttonElem: () => (/* binding */ buttonElem),
/* harmony export */   divElem: () => (/* binding */ divElem),
/* harmony export */   imageElem: () => (/* binding */ imageElem),
/* harmony export */   labelElem: () => (/* binding */ labelElem),
/* harmony export */   pElem: () => (/* binding */ pElem),
/* harmony export */   radioElem: () => (/* binding */ radioElem),
/* harmony export */   selectElem: () => (/* binding */ selectElem),
/* harmony export */   textAreaElem: () => (/* binding */ textAreaElem),
/* harmony export */   textFieldElem: () => (/* binding */ textFieldElem)
/* harmony export */ });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./src/utils/images.js");


function pElem(text,className) {
   const p = document.createElement('p');
   p.innerText = text;
   className !== undefined && p.classList.add(className);
   return p;
}

function divElem(className) {
    const div = document.createElement('div');
    className !== undefined && div.classList.add(className);
    return div;
}

function labelElem(id,text) {
   const label = document.createElement('label');
   label.for = id;
   label.innerText = text;
   return label;
}

function textFieldElem(id, placeholder) {
   const input = document.createElement('input');
   input.placeholder = placeholder;
   input.style.cssText = 'font-size: inherit;';
   input.id = id;
   return input;
}

function imageElem(src, alt,className) {
   const image = document.createElement('img');
   image.src = src;
   image.alt = alt;
   className !== undefined && image.classList.add(className);
   return image;
}

function addElement(text, className, onclicked) {
   // const wrapper = className === undefined? divElem() : divElem(className);
   const wrapper1 = divElem(className);
   const image = imageElem(_images__WEBPACK_IMPORTED_MODULE_0__["default"].plusIcon, 'add-icon', 'add-icon');
   wrapper1.append(image, text);
   wrapper1.addEventListener('click', onclicked);
   // wrapper.append(wrapper1);
   return wrapper1;
}

function buttonElem(text, className, callback) {
   const button = document.createElement('button');
   button.classList.add(className);
   button.innerText = text;
   button.style.cssText = 'font-size: inherit';
   callback !== null && button.addEventListener('click', callback);
   return button;
}

function radioElem(id, name, onclicked) {
   const checkbox= document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.id = id;
   checkbox.name = name;
   onclicked === undefined? null : checkbox.addEventListener('click', onclicked);
   return checkbox;
}

function textAreaElem(id,placeholder,className) {
   const textarea = document.createElement('textarea');
   if(placeholder !== undefined) textarea.innerText = placeholder;
   textarea.id = id;
   className !== undefined && textarea.classList.add(className);
   return textarea;
}

function selectElem(id,name, options = []) {
   const select = document.createElement('select');
   select.name = name;
   select.id = id;
   const items = options.map(item => {
       const option = document.createElement('option');
       option.value = item.value;
       option.innerText = item.name;
       return option;
   });
   select.append(...items);
   return select;
}

function dialogElem() {
   const dialog = document.createElement('dialog');
   const p = pElem('hello world');
   dialog.append(p);
   return dialog;
}

/***/ }),

/***/ "./src/utils/images.js":
/*!*****************************!*\
  !*** ./src/utils/images.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/plus.svg */ "./src/assets/plus.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_calendar_text_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/calendar-text.svg */ "./src/assets/calendar-text.svg");
/* harmony import */ var _assets_completed_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/completed-task.svg */ "./src/assets/completed-task.svg");
/* harmony import */ var _assets_calendar_search_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/calendar-search.svg */ "./src/assets/calendar-search.svg");
/* harmony import */ var _assets_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/calendar-edit.svg */ "./src/assets/calendar-edit.svg");
/* harmony import */ var _assets_project_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/project.png */ "./src/assets/project.png");
/* harmony import */ var _assets_project1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/project1.png */ "./src/assets/project1.png");
/* harmony import */ var _assets_delete_forever_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/delete-forever.svg */ "./src/assets/delete-forever.svg");
/* harmony import */ var _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/pencil.svg */ "./src/assets/pencil.svg");
/* harmony import */ var _assets_folder_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/folder.svg */ "./src/assets/folder.svg");













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    plusIcon: _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__,
    deleteIcon: _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__,
    calenderEditIcon: _assets_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_5__,
    calenderSearchIcon: _assets_calendar_search_svg__WEBPACK_IMPORTED_MODULE_4__,
    calenderTextIcon: _assets_calendar_text_svg__WEBPACK_IMPORTED_MODULE_2__,
    completedTaskIcon: _assets_completed_task_svg__WEBPACK_IMPORTED_MODULE_3__,
    project: _assets_project_png__WEBPACK_IMPORTED_MODULE_6__,
    project1: _assets_project1_png__WEBPACK_IMPORTED_MODULE_7__,
    deleteIcon2: _assets_delete_forever_svg__WEBPACK_IMPORTED_MODULE_8__,
    editIcon: _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_9__,
    project2: _assets_folder_svg__WEBPACK_IMPORTED_MODULE_10__,
});

/***/ }),

/***/ "./src/assets/Roboto/Roboto-Bold.ttf":
/*!*******************************************!*\
  !*** ./src/assets/Roboto/Roboto-Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/assets/Roboto/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/Roboto/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/calendar-edit.svg":
/*!**************************************!*\
  !*** ./src/assets/calendar-edit.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f229469ca42ac5b2259.svg";

/***/ }),

/***/ "./src/assets/calendar-search.svg":
/*!****************************************!*\
  !*** ./src/assets/calendar-search.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f9d92541353a16dc8fd.svg";

/***/ }),

/***/ "./src/assets/calendar-text.svg":
/*!**************************************!*\
  !*** ./src/assets/calendar-text.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "219cb3f5774dc4da59ea.svg";

/***/ }),

/***/ "./src/assets/completed-task.svg":
/*!***************************************!*\
  !*** ./src/assets/completed-task.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27f86a220d34b576b3f3.svg";

/***/ }),

/***/ "./src/assets/delete-forever.svg":
/*!***************************************!*\
  !*** ./src/assets/delete-forever.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3672ce28d245c8f7bbef.svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/assets/folder.svg":
/*!*******************************!*\
  !*** ./src/assets/folder.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f7502b516619bd506d6.svg";

/***/ }),

/***/ "./src/assets/pencil.svg":
/*!*******************************!*\
  !*** ./src/assets/pencil.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/assets/project.png":
/*!********************************!*\
  !*** ./src/assets/project.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9926afda780608f91457.png";

/***/ }),

/***/ "./src/assets/project1.png":
/*!*********************************!*\
  !*** ./src/assets/project1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0f72fca798dbf142504.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_features_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/features/nav-bar/nav-bar */ "./src/models/features/nav-bar/nav-bar.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_models_features_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__.run)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YjJiYzQzODFhZmIwZTEwMmQzOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUF3RDtBQUNwRyw0Q0FBNEMsdUpBQTJEO0FBQ3ZHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DLFFBQVEsbUNBQW1DO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSw2QkFBNkIsbUJBQW1CLGtCQUFrQiwr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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXdEO0FBQ25DO0FBQ3JCO0FBQ0EscUVBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL09wdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2ZlYXR1cmVzL25hdi1iYXIvbmF2LWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL25hdi1pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXRpbHMvZG9tLWVsZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlscy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy8vYXNzZXRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSx1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbn1cclxuXHJcbmJvZHkgPiBkaXYud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmRpdi5uYXYtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZsZXgtYmFzaXM6IDVyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxufVxyXG5cclxuZGl2Lm1haW4ge1xyXG4gICAgcGFkZGluZzogMCAuNXJlbTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZ3JvdzogNTtcclxufVxyXG5cclxuLm5hdi1pdGVtLWltYWdlICwucHJvamVjdC1pdGVtLWltYWdlIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogLjNyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1sZWZ0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxufVxyXG5cclxuLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG59XHJcblxyXG4ubmF2LWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm5hdi10b3AsIC5uYXYtYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAuMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4ubmF2LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hZGQtaWNvbiB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LCAuYWRkLXRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9wdXAtZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIHdpZHRoOiBjbGFtcCg3cmVtLCA0MCUsIDEwMCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IC40cmVtO1xyXG59XHJcblxyXG4ucG9wdXAtZm9ybSBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxuXHJcbn1cclxuXHJcbi5wb3B1cC1hZGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogLjNyZW07XHJcbn1cclxuXHJcbi5yb3ctZ3JwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAuNHJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBnYXA6IC4ycmVtO1xyXG59XHJcblxyXG4uYWRkLWJ0biwgLmNhbmNlbC1idG4ge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiAuNXJlbTtcclxuICAgIHBhZGRpbmc6IC4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNHJlbTtcclxufVxyXG5cclxuLnRhc2stZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxufVxyXG5cclxuLnRhc2stbGVmdCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGdhcDogLjVyZW07XHJcbn1cclxuXHJcbi50YXNrLXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcbi5kZWxldGUtaWNvbiB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZXRhaWxzLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAuMXJlbSAuNHJlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XHJcbiAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbn1cclxuXHJcbi5kZXRhaWxzLXBvcHVwLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcclxufVxyXG5cclxuLnByaW9yaXR5LW1hcmtlciB7XHJcbiAgICB3aWR0aDogLjNyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBcclxufVxyXG5cclxuLnByaW9yaXR5LWhpZ2gtY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnByaW9yaXR5LW1lZGl1bS1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbG93LWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmRlbGV0ZS1wcm9qZWN0LWljb24ge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IC4zcmVtO1xyXG59XHJcblxyXG4uZWRpdC1pY29uIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjsgKi9cclxuICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWxvZ28ge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0ZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsVUFBVTtBQUNiOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLFVBQVU7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7O0FBRWhCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgc3JjOiB1cmwoLi4vc3JjLy9hc3NldHMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZiksdXJsKC4uL3NyYy8vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBkaXYud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmRpdi5uYXYtYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgZmxleC1iYXNpczogNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbmRpdi5tYWluIHtcXHJcXG4gICAgcGFkZGluZzogMCAuNXJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBmbGV4LWdyb3c6IDU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbS1pbWFnZSAsLnByb2plY3QtaXRlbS1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IC4zcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxlZnQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvcCwgLm5hdi1ib3R0b20ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCwgLmFkZC10YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg3cmVtLCA0MCUsIDEwMCUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZm9ybSBpbnB1dCB7XFxyXFxuICAgIHBhZGRpbmc6IC40cmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYWRkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yb3ctZ3JwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZ2FwOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG4sIC5jYW5jZWwtYnRuIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IC40cmVtO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmc6IC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1sZWZ0IHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtYnRuIHtcXHJcXG4gICAgcGFkZGluZzogLjFyZW0gLjRyZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgICB3aWR0aDogMS4ycmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtcG9wdXAtZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW1hcmtlciB7XFxyXFxuICAgIHdpZHRoOiAuM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWhpZ2gtY29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbWVkaXVtLWNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWxvdy1jb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWljb24ge1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWljb24ge1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47ICovXFxyXFxuICAgIHBhZGRpbmc6IC40cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ue1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5hbWVcclxuICAgIH1cclxufSIsImltcG9ydCB7IGFkZEVsZW1lbnQsIGJ1dHRvbkVsZW0sIGRpdkVsZW0sIGltYWdlRWxlbSwgbGFiZWxFbGVtLCBwRWxlbSwgcmFkaW9FbGVtLCBzZWxlY3RFbGVtLCB0ZXh0QXJlYUVsZW0sIHRleHRGaWVsZEVsZW0gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZG9tLWVsZW1zXCI7XHJcbmltcG9ydCBpbWFnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2ltYWdlc1wiO1xyXG5pbXBvcnQgT3B0aW9uIGZyb20gXCIuLi8uLi9PcHRpb25cIjtcclxuaW1wb3J0IE5hdkl0ZW0gZnJvbSBcIi4uLy4uL25hdi1pdGVtXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuLi8uLi90YXNrXCI7XHJcblxyXG5jb25zdCBuYXZJdGVtVG9wTGlzdCA9IFtcclxuICAgIG5ldyBOYXZJdGVtKCdBbGwnKSxcclxuICAgIG5ldyBOYXZJdGVtKCdUb2RheScpLFxyXG4gICAgbmV3IE5hdkl0ZW0oJ1RoaXMtV2VlaycpXHJcbl07XHJcblxyXG5jb25zdCBwcm9qZWN0SXRlbXNMaXN0ID0gW1xyXG4vLyAgICBuZXcgTmF2SXRlbSgnSGVsbG8nKSxcclxuLy8gICAgbmV3IE5hdkl0ZW0oJ1B5dGhvbicpXHJcbl07XHJcblxyXG5jb25zdCB0YXNrc0xpc3QgPSBbXTtcclxuXHJcbmxldCBjdXJyZW50VGFiID0gJ0FsbCc7XHJcblxyXG5mdW5jdGlvbiBsYXlvdXRTZXR1cCgpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRpdkVsZW0oJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyUCA9IHBFbGVtKCdUb2RvLUxpc3QnLCAnaGVhZGVyLXRpdGxlJyk7XHJcbiAgICBjb25zdCBsb2dvID0gaW1hZ2VFbGVtKGltYWdlcy5jb21wbGV0ZWRUYXNrSWNvbiwgJ2xvZ28nLCAnaGVhZGVyLWxvZ28nKTtcclxuICAgIGhlYWRlci5hcHBlbmQobG9nbyAsaGVhZGVyUCk7XHJcbiAgICBjb25zdCB3cmFwcGVyRGl2ID0gZGl2RWxlbSgnd3JhcHBlcicpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZGl2RWxlbSgnbmF2LWJhcicpO1xyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRpdkVsZW0oJ21haW4nKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBwRWxlbShjdXJyZW50VGFiLCAnaGVhZGluZycpO1xyXG5cclxuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xyXG4gICAgaWYoY3VycmVudFRhYiA9PT0gJ0FsbCcpIHtcclxuICAgICAgICAgIGFsbFRhc2tzID0gdGFza3NMaXN0Lm1hcCh0YXNrID0+IHtcclxuICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkaXZFbGVtKCd0YXNrJylcclxuICAgICAgICAgIGNvbnN0IHAgPSBwRWxlbSh0YXNrLm5hbWUpO1xyXG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSByYWRpb0VsZW0odGFzay5pZCwgdGFzay5uYW1lKTtcclxuICAgICAgICAgIGNvbnN0IHByaW9yaXR5TWFya2VyID0gZGl2RWxlbSgncHJpb3JpdHktbWFya2VyJyk7XHJcbiAgICAgICAgICBpZih0YXNrLnByaW9yaXR5ID09ICdIaWdoJykge1xyXG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoLWNvbG9yJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykge1xyXG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWRpdW0tY29sb3InKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93Jykge1xyXG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sb3ctY29sb3InKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZFbGVtKCd0YXNrLWxlZnQnKTtcclxuICAgICAgICAgIGxlZnQuYXBwZW5kKHByaW9yaXR5TWFya2VyLCBjaGVja2JveCwgcCk7XHJcbiAgICAgICAgICAvL2RldGFpbHMgZGF0ZSBhbmQgZGVsZXRlXHJcbiAgICAgICAgICAgY29uc3QgcmlnaHQgPSBkaXZFbGVtKCd0YXNrLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAvLyBkZXRhaWxzXHJcbiAgICAgICAgICBjb25zdCBkZXRhaWxzID0gYnV0dG9uRWxlbSgnRGV0YWlscycsJ2RldGFpbHMtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZVBvcHVwRm9yRGV0YWlscyh0YXNrKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL2RlbGV0ZVxyXG4gICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gaW1hZ2VFbGVtKGltYWdlcy5kZWxldGVJY29uMiwnZGVsZXRlLWljb24nLCAnZGVsZXRlLWljb24nKTtcclxuICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGFza3NMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaWQgPT0gdGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrc0xpc3QuaW5kZXhPZihpdGVtWzBdKTtcclxuICAgICAgICAgICAgdGFza3NMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHJlc2V0Rm9yVGFza3NGb3JtKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vZWRpdFxyXG4gICAgICAgICAgY29uc3QgZWRpdCA9IGltYWdlRWxlbShpbWFnZXMuZWRpdEljb24sICdlZGl0LWljb24nLCAnZWRpdC1pY29uJyk7XHJcbiAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBlZGl0VGFzayh0YXNrKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL2R1ZWRhdGVcclxuICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBwRWxlbSh0YXNrLmR1ZWRhdGUpO1xyXG4gICAgICAgICAgcmlnaHQuYXBwZW5kKGRldGFpbHMsIGRlbGV0ZUJ0bixlZGl0ICxkdWVkYXRlKVxyXG4gICAgICAgICAgd3JhcHBlci5hcHBlbmQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICAgfSk7XHJcbiAgfVxyXG4gXHJcbiAgICBtYWluRGl2LmFwcGVuZChoZWFkaW5nLCAuLi5hbGxUYXNrcykgO1xyXG4gICAgd3JhcHBlckRpdi5hcHBlbmQobmF2QmFyLCBtYWluRGl2KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoaGVhZGVyLHdyYXBwZXJEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcnVuID0gKCkgPT4ge1xyXG4gICAgbGF5b3V0U2V0dXAoKVxyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LndyYXBwZXIgZGl2Lm5hdi1iYXInKTtcclxuICAgIG5hdkJhci5hcHBlbmQobmF2QmFyVG9wKCksIG5hdkJhckJvdHRvbSgpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2QmFyVG9wKCkge1xyXG4gICAgY29uc3QgbmF2QmFyVG9wID0gZGl2RWxlbSgnbmF2LXRvcCcpO1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW1zID0gbmF2SXRlbVRvcExpc3QubWFwKGl0ZW1zID0+IHtcclxuICAgICAgICAgY29uc3QgZGl2ID0gZGl2RWxlbSgnbmF2LWl0ZW0nKTtcclxuICAgICAgICAgY29uc3QgcCA9IHBFbGVtKGl0ZW1zLm5hbWUpO1xyXG4gICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlRWxlbShpbWFnZXMuY2FsZW5kZXJUZXh0SWNvbiwgJ25hdi1pdGVtLWltYWdlJywgJ25hdi1pdGVtLWltYWdlJyk7XHJcbiAgICAgICAgIGRpdi5hcHBlbmQoaW1hZ2UscCk7XHJcbiAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdkl0ZW1DbGlja2VkKVxyXG4gICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmF2QmFyVG9wLmFwcGVuZCguLi5uYXZJdGVtcyk7XHJcbiAgICByZXR1cm4gbmF2QmFyVG9wO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2QmFyQm90dG9tKCkge1xyXG4gICAgY29uc3QgbmF2Qm90dG9tID0gZGl2RWxlbSgnbmF2LWJvdHRvbScpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBwRWxlbSgnUHJvamVjdHMnLCAnbmF2LXRpdGxlJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RJdGVtcyA9IGRpdkVsZW0oJ3Byb2plY3QtaXRlbXMnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RJdGVtc0xpc3QubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRpdkVsZW0oJ3Byb2plY3QtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RMZWZ0ID0gZGl2RWxlbSgncHJvamVjdC1sZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcCA9IHBFbGVtKHByb2plY3QubmFtZSk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlSW1hZ2UgPSBpbWFnZUVsZW0oaW1hZ2VzLmRlbGV0ZUljb24yLCAnZGVsZXRlLXByb2plY3QtaWNvbicsICdkZWxldGUtcHJvamVjdC1pY29uJyk7XHJcbiAgICAgICAgZGVsZXRlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0SXRlbXNMaXN0LmluZGV4T2YocHJvamVjdCk7XHJcbiAgICAgICAgICAgcHJvamVjdEl0ZW1zTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgYm9keS5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgICAgIGN1cnJlbnRUYWIgPSAnQWxsJztcclxuICAgICAgICAgICBydW4oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlRWxlbShpbWFnZXMucHJvamVjdDIsICdwcm9qZWN0LWl0ZW0taW1hZ2UnLCAncHJvamVjdC1pdGVtLWltYWdlJyk7XHJcbiAgICAgICAgcHJvamVjdExlZnQuYXBwZW5kKGltYWdlLHApO1xyXG4gICAgICAgIHByb2plY3RMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2SXRlbUNsaWNrZWQpXHJcbiAgICAgICAgZGl2LmFwcGVuZChwcm9qZWN0TGVmdCwgZGVsZXRlSW1hZ2UpO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfSk7ICBcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0RWxlbSA9IGFkZEVsZW1lbnQoJ0FkZCBQcm9qZWN0JywgJ2FkZC1wcm9qZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZVBvcHVwKClcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3RJdGVtcy5hcHBlbmQoLi4ucHJvamVjdHMpO1xyXG5cclxuICAgIG5hdkJvdHRvbS5hcHBlbmQodGl0bGUsIHByb2plY3RJdGVtcywgYWRkUHJvamVjdEVsZW0pO1xyXG4gICAgcmV0dXJuIG5hdkJvdHRvbTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmF2SXRlbUNsaWNrZWQoKSB7XHJcbiAgIGNvbnN0IHRpdGxlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdwJykuaW5uZXJUZXh0O1xyXG4gICBjdXJyZW50VGFiID0gdGl0bGU7XHJcblxyXG4gICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi53cmFwcGVyID4gZGl2Lm1haW4nKTtcclxuICAgcmlnaHQuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgY29uc3QgaGVhZGluZyA9IHBFbGVtKHRpdGxlLCAnaGVhZGluZycpO1xyXG4gICBjb25zdCBhZGRUYXNrRWxlbWVudCA9IGFkZEVsZW1lbnQoJ0FkZCBUYXNrJywgJ2FkZC10YXNrJywgKCkgPT4ge1xyXG4gICAgICAgYWN0aXZhdGVQb3B1cEZvclRhc2tzKCk7XHJcbiAgICAgICBjb25zdCB0YXNrTmFtZSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XHJcbiAgICAgICBpZih0YXNrTmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgfVxyXG4gICAgICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGlkLHRhc2tOYW1lLCBpbWFnZXMuY2FsZW5kZXJUZXh0SWNvbiwgY3VycmVudFRhYik7XHJcbiAgICAgICB0YXNrc0xpc3QucHVzaCh0YXNrKTtcclxuICAgfSk7XHJcblxyXG4gICBjb25zdCB0YWJUYXNrcyA9IHRhc2tzTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmNhdGVnb3J5ID09IGN1cnJlbnRUYWIpO1xyXG4gICBsZXQgdGFiVGFza3NFbGVtcyA9IFtdO1xyXG4gICBpZih0YWJUYXNrcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgdGFiVGFza3NFbGVtcyA9IHRhYlRhc2tzLm1hcCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZGl2RWxlbSgndGFzaycpXHJcbiAgICAgICAgICBjb25zdCBwID0gcEVsZW0odGFzay5uYW1lKTtcclxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gcmFkaW9FbGVtKHRhc2suaWQsIHRhc2submFtZSk7XHJcbiAgICAgICAgICBjb25zdCBwcmlvcml0eU1hcmtlciA9IGRpdkVsZW0oJ3ByaW9yaXR5LW1hcmtlcicpO1xyXG4gICAgICAgICAgaWYodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaGlnaC1jb2xvcicpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHtcclxuICAgICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWRpdW0tY29sb3InKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93Jykge1xyXG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sb3ctY29sb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBsZWZ0ID0gZGl2RWxlbSgndGFzay1sZWZ0Jyk7XHJcbiAgICAgICAgICBsZWZ0LmFwcGVuZChwcmlvcml0eU1hcmtlciwgY2hlY2tib3gsIHApO1xyXG4gICAgICAgIC8vZGV0YWlscyBkYXRlIGFuZCBkZWxldGVcclxuICAgICAgICAgY29uc3QgcmlnaHQgPSBkaXZFbGVtKCd0YXNrLXJpZ2h0Jyk7XHJcbiAgICAgICAgLy8gZGV0YWlsc1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBidXR0b25FbGVtKCdEZXRhaWxzJywnZGV0YWlscy1idG4nKTtcclxuICAgICAgICBkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlUG9wdXBGb3JEZXRhaWxzKHRhc2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vZGVsZXRlXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gaW1hZ2VFbGVtKGltYWdlcy5kZWxldGVJY29uMiwnZGVsZXRlLWljb24nLCAnZGVsZXRlLWljb24nKTtcclxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNldEZvclRhc2tzRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGVkaXRcclxuICAgICAgICBjb25zdCBlZGl0ID0gaW1hZ2VFbGVtKGltYWdlcy5lZGl0SWNvbiwgJ2VkaXQtaWNvbicsICdlZGl0LWljb24nKTtcclxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBlZGl0VGFzayh0YXNrKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vZHVlIGRhdGVcclxuICAgICAgICBjb25zdCBkdWVkYXRlID0gcEVsZW0odGFzay5kdWVkYXRlKTtcclxuICAgICAgICByaWdodC5hcHBlbmQoZGV0YWlscywgZGVsZXRlQnRuLCBlZGl0LGR1ZWRhdGUpXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICB9KTtcclxufSBcclxuICAgaWYoY3VycmVudFRhYiA9PT0gJ0FsbCcpIHtcclxuICAgICAgY29uc3QgYWxsVGFza3MgPSB0YXNrc0xpc3QubWFwKHRhc2sgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRpdkVsZW0oJ3Rhc2snKVxyXG4gICAgICAgICAgY29uc3QgcCA9IHBFbGVtKHRhc2submFtZSk7XHJcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IHJhZGlvRWxlbSh0YXNrLmlkLCB0YXNrLm5hbWUpO1xyXG4gICAgICAgICAgY29uc3QgcHJpb3JpdHlNYXJrZXIgPSBkaXZFbGVtKCdwcmlvcml0eS1tYXJrZXInKTtcclxuICAgICAgICAgIGlmKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gtY29sb3InKTtcclxuICAgICAgICAgIH0gZWxzZSBpZih0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSB7XHJcbiAgICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWVkaXVtLWNvbG9yJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93LWNvbG9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbGVmdCA9IGRpdkVsZW0oJ3Rhc2stbGVmdCcpO1xyXG4gICAgICAgICAgbGVmdC5hcHBlbmQocHJpb3JpdHlNYXJrZXIsIGNoZWNrYm94LCBwKTtcclxuICAgICAgICAvL2RldGFpbHMsIGRhdGUsIGVkaXQgYW5kIGRlbGV0ZVxyXG4gICAgICAgICBjb25zdCByaWdodCA9IGRpdkVsZW0oJ3Rhc2stcmlnaHQnKTtcclxuICAgICAgICAvLyBkZXRhaWxzXHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGJ1dHRvbkVsZW0oJ0RldGFpbHMnLCdkZXRhaWxzLWJ0bicpO1xyXG4gICAgICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgYWN0aXZhdGVQb3B1cEZvckRldGFpbHModGFzayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGVsZXRlXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gaW1hZ2VFbGVtKGltYWdlcy5kZWxldGVJY29uMiwnZGVsZXRlLWljb24nLCAnZGVsZXRlLWljb24nKTtcclxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNldEZvclRhc2tzRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vZWRpdFxyXG4gICAgICAgIGNvbnN0IGVkaXQgPSBpbWFnZUVsZW0oaW1hZ2VzLmVkaXRJY29uLCAnZWRpdC1pY29uJywgJ2VkaXQtaWNvbicpO1xyXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrKHRhc2spXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGF0ZVxyXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBwRWxlbSh0YXNrLmR1ZWRhdGUpO1xyXG4gICAgICAgIHJpZ2h0LmFwcGVuZChkZXRhaWxzLCBkZWxldGVCdG4sIGVkaXQgLGR1ZWRhdGUpXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfSk7XHJcbiAgICByaWdodC5hcHBlbmQoaGVhZGluZywuLi5hbGxUYXNrcylcclxuICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgdGFiVGFza3NFbGVtcy5sZW5ndGggPT09IDA/IHJpZ2h0LmFwcGVuZChoZWFkaW5nLGFkZFRhc2tFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmlnaHQuYXBwZW5kKGhlYWRpbmcsIC4uLnRhYlRhc2tzRWxlbXMgLGFkZFRhc2tFbGVtZW50KSA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlUG9wdXAoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keS5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1hZGQnKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkaXZFbGVtKCdwb3B1cC1mb3JtJyk7XHJcbiAgICBjb25zdCByb3dncnAgPSBkaXZFbGVtKCdyb3ctZ3JwJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRWxlbSgncHJvamVjdC1uYW1lJywgJ1Byb2plY3QgTmFtZScpO1xyXG4gICAgY29uc3QgdGV4dEZpZWxkRWxlbTEgPSB0ZXh0RmllbGRFbGVtKCdwcm9qZWN0LW5hbWUnLCAnZW50ZXIgcHJvamVjdCBuYW1lJyk7XHJcbiAgICByb3dncnAuYXBwZW5kKGxhYmVsLHRleHRGaWVsZEVsZW0xKTtcclxuICAgIGNvbnN0IGFkZEJ0biA9IGJ1dHRvbkVsZW0oJ0FkZCcsICdhZGQtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpLnZhbHVlO1xyXG4gICAgICAgIGlmKHZhbHVlID09PSAnJykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgTmF2SXRlbSh2YWx1ZSk7XHJcbiAgICAgICAgcHJvamVjdEl0ZW1zTGlzdC5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgICAgICBydW4oKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gYnV0dG9uRWxlbSgnQ2FuY2VsJywgJ2NhbmNlbC1idG4nLCAoKSA9PiB7XHJcbiAgICAgICBib2R5LmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICBydW4oKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBidXR0b25zID0gZGl2RWxlbSgnYnV0dG9ucycpO1xyXG4gICAgYnV0dG9ucy5hcHBlbmQoYWRkQnRuLCBjYW5jZWxCdG4pO1xyXG4gICAgXHJcbiAgICBmb3JtLmFwcGVuZChyb3dncnAsIGJ1dHRvbnMpXHJcbiAgICBcclxuICAgIGJvZHkuYXBwZW5kKGZvcm0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlUG9wdXBGb3JUYXNrcyh0YXNrMSkge1xyXG4gICAgIGlmKHRhc2sxID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1haW4nKTtcclxuICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgICAvL3RpdGxlKG5hbWUpXHJcbiAgICAgICAgIGNvbnN0IGZvcm0gPSBkaXZFbGVtKCdwb3B1cC1mb3JtJyk7XHJcbiAgICAgICAgIGNvbnN0IHJvd2dycCA9IGRpdkVsZW0oJ3Jvdy1ncnAnKTtcclxuICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbEVsZW0oJ3Rhc2stbmFtZScsICdQcm9qZWN0IE5hbWUnKTtcclxuICAgICAgICAgY29uc3QgdGV4dEZpZWxkRWxlbTEgPSB0ZXh0RmllbGRFbGVtKCd0YXNrLW5hbWUnLCAnZW50ZXIgdGFzayBuYW1lJyk7XHJcbiAgICAgICAgIC8vZGVzY3JpcHRpb25cclxuICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSB0ZXh0QXJlYUVsZW0oJ3Rhc2stdGV4dGFyZWEnKTtcclxuICAgICAgICAgdGV4dGFyZWEucm93cyA9IDEwO1xyXG4gICAgICAgICB0ZXh0YXJlYS5jb2xzID0gMTA7XHJcbiAgICAgICAgIGNvbnN0IHJvd2dycDIgPSBkaXZFbGVtKCdyb3ctZ3JwJyk7XHJcbiAgICAgICAgIGNvbnN0IGxhYmVsMiA9IGxhYmVsRWxlbSgnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgcm93Z3JwMi5hcHBlbmQobGFiZWwyLCB0ZXh0YXJlYSk7XHJcbiAgICAgICAgIC8vcHJpb3JpdHlcclxuICAgICAgICAgY29uc3Qgc2VsZWN0ID0gc2VsZWN0RWxlbSgncHJpb3JpdHknLCAncHJpb3JpdHknLCBbXHJcbiAgICAgICAgICAgICBuZXcgT3B0aW9uKCdMb3cnKSxcclxuICAgICAgICAgICAgIG5ldyBPcHRpb24oJ01lZGl1bScpLFxyXG4gICAgICAgICAgICAgbmV3IE9wdGlvbignSGlnaCcpLFxyXG4gICAgICAgICBdKTtcclxuICAgICAgICAgY29uc3Qgcm93Z3JwMyA9IGRpdkVsZW0oJ3Jvdy1ncnAnKTtcclxuICAgICAgICAgY29uc3QgbGFiZWwzID0gbGFiZWxFbGVtKCdwcmlvcml0eScsICdQcmlvcml0eScpO1xyXG4gICAgICAgICByb3dncnAzLmFwcGVuZChsYWJlbDMsIHNlbGVjdCk7XHJcbiAgICAgICAgIC8vIGR1ZSBkYXRlXHJcbiAgICAgICAgIGNvbnN0IHJvd2dycDEgPSBkaXZFbGVtKCdyb3ctZ3JwJyk7XHJcbiAgICAgICAgIGNvbnN0IGxhYmVsMSA9IGxhYmVsRWxlbSgnZGF0ZS1waWNrZXInLCAnRHVlIERhdGUnKTtcclxuICAgICAgICAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgIGRhdGVQaWNrZXIudHlwZSA9ICdkYXRlJztcclxuICAgICAgICAgZGF0ZVBpY2tlci5pZCA9ICdkYXRlLXBpY2tlcic7XHJcbiAgICAgICAgIHJvd2dycDEuYXBwZW5kKGxhYmVsMSxkYXRlUGlja2VyKVxyXG4gICAgICAgICByb3dncnAuYXBwZW5kKGxhYmVsLHRleHRGaWVsZEVsZW0xLHJvd2dycDIscm93Z3JwMyAscm93Z3JwMSk7XHJcbiAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGJ1dHRvbkVsZW0oJ0FkZCcsICdhZGQtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1waWNrZXInKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRleHRhcmVhJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgaWYodGFza05hbWUgPT0gJycsIGR1ZWRhdGUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2RhdGUgYW5kIHRhc2sgbmFtZSBhcmUgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhpZCx0YXNrTmFtZSwgaW1hZ2VzLmNhbGVuZGVyVGV4dEljb24sIGN1cnJlbnRUYWIsZHVlZGF0ZSxkZXNjcmlwdGlvbixwcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICAgdGFza3NMaXN0LnB1c2godGFzayk7XHJcbiAgICAgICAgICAgICAgICAgcmVzZXRGb3JUYXNrc0Zvcm0oKVxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gYnV0dG9uRWxlbSgnQ2FuY2VsJywgJ2NhbmNlbC1idG4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICByZXNldEZvclRhc2tzRm9ybSgpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkaXZFbGVtKCdidXR0b25zJyk7XHJcbiAgICAgICAgIGJ1dHRvbnMuYXBwZW5kKGFkZEJ0biwgY2FuY2VsQnRuKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGZvcm0uYXBwZW5kKHJvd2dycCwgYnV0dG9ucylcclxuICAgICAgICAgXHJcbiAgICAgICAgIG1haW4uYXBwZW5kKGZvcm0pXHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5tYWluJyk7XHJcbiAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gbnVsbDtcclxuICAgICAgICAgLy90aXRsZShuYW1lKVxyXG4gICAgICAgICBjb25zdCBmb3JtID0gZGl2RWxlbSgncG9wdXAtZm9ybScpO1xyXG4gICAgICAgICBjb25zdCByb3dncnAgPSBkaXZFbGVtKCdyb3ctZ3JwJyk7XHJcbiAgICAgICAgIGNvbnN0IGxhYmVsID0gbGFiZWxFbGVtKCd0YXNrLW5hbWUnLCAnUHJvamVjdCBOYW1lJyk7XHJcbiAgICAgICAgIGNvbnN0IHRleHRGaWVsZEVsZW0xID0gdGV4dEZpZWxkRWxlbSgndGFzay1uYW1lJywgJ2VudGVyIHRhc2sgbmFtZScpO1xyXG4gICAgICAgICB0ZXh0RmllbGRFbGVtMS52YWx1ZSA9IHRhc2sxLm5hbWU7XHJcbiAgICAgICAgIC8vZGVzY3JpcHRpb25cclxuICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSB0ZXh0QXJlYUVsZW0oJ3Rhc2stdGV4dGFyZWEnKTtcclxuICAgICAgICAgdGV4dGFyZWEuaW5uZXJUZXh0ID0gdGFzazEuZGVzY3JpcHRpb247XHJcbiAgICAgICAgIHRleHRhcmVhLnJvd3MgPSAxMDtcclxuICAgICAgICAgdGV4dGFyZWEuY29scyA9IDEwO1xyXG4gICAgICAgICBjb25zdCByb3dncnAyID0gZGl2RWxlbSgncm93LWdycCcpO1xyXG4gICAgICAgICBjb25zdCBsYWJlbDIgPSBsYWJlbEVsZW0oJ2Rlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgIHJvd2dycDIuYXBwZW5kKGxhYmVsMiwgdGV4dGFyZWEpO1xyXG4gICAgICAgICAvL3ByaW9yaXR5XHJcbiAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHNlbGVjdEVsZW0oJ3ByaW9yaXR5JywgJ3ByaW9yaXR5JywgW1xyXG4gICAgICAgICAgICAgbmV3IE9wdGlvbignTG93JyksXHJcbiAgICAgICAgICAgICBuZXcgT3B0aW9uKCdNZWRpdW0nKSxcclxuICAgICAgICAgICAgIG5ldyBPcHRpb24oJ0hpZ2gnKSxcclxuICAgICAgICAgXSk7XHJcbiAgICAgICAgIGNvbnN0IHJvd2dycDMgPSBkaXZFbGVtKCdyb3ctZ3JwJyk7XHJcbiAgICAgICAgIGNvbnN0IGxhYmVsMyA9IGxhYmVsRWxlbSgncHJpb3JpdHknLCAnUHJpb3JpdHknKTtcclxuICAgICAgICAgc2VsZWN0LnZhbHVlID0gdGFzazEucHJpb3JpdHk7XHJcbiAgICAgICAgIHJvd2dycDMuYXBwZW5kKGxhYmVsMywgc2VsZWN0KTtcclxuICAgICAgICAgLy8gZHVlIGRhdGVcclxuICAgICAgICAgY29uc3Qgcm93Z3JwMSA9IGRpdkVsZW0oJ3Jvdy1ncnAnKTtcclxuICAgICAgICAgY29uc3QgbGFiZWwxID0gbGFiZWxFbGVtKCdkYXRlLXBpY2tlcicsICdEdWUgRGF0ZScpO1xyXG4gICAgICAgICBjb25zdCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgZGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgICBkYXRlUGlja2VyLmlkID0gJ2RhdGUtcGlja2VyJztcclxuICAgICAgICAgZGF0ZVBpY2tlci52YWx1ZSA9IHRhc2sxLmR1ZWRhdGU7XHJcbiAgICAgICAgIHJvd2dycDEuYXBwZW5kKGxhYmVsMSxkYXRlUGlja2VyKVxyXG4gICAgICAgICByb3dncnAuYXBwZW5kKGxhYmVsLHRleHRGaWVsZEVsZW0xLHJvd2dycDIscm93Z3JwMyAscm93Z3JwMSk7XHJcbiAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGJ1dHRvbkVsZW0oJ1VwZGF0ZScsICdhZGQtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL3VwZGF0aW5nXHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXBpY2tlcicpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGV4dGFyZWEnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlmKHRhc2tOYW1lID09ICcnLCBkdWVkYXRlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdkYXRlIGFuZCB0YXNrIG5hbWUgYXJlIHJlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAvL3JlbW92aW5nIGN1cnJlbnQgb2JqZWN0IGZyb20gbGlzdFxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tzTGlzdC5pbmRleE9mKHRhc2sxKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0YXNrMS5pZDtcclxuICAgICAgICAgICAgICAgIC8vICBjb25zdCB0YXNrID0gbmV3IFRhc2soaWQsdGFza05hbWUsIGltYWdlcy5jYWxlbmRlclRleHRJY29uLCBjdXJyZW50VGFiLGR1ZWRhdGUsZGVzY3JpcHRpb24scHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgIHRhc2suZHVlZGF0ZSA9IGR1ZWRhdGU7XHJcbiAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICB0YXNrLm5hbWUgPSB0YXNrTmFtZVxyXG4gICAgICAgICAgICAgICAgLy8gIHRhc2tzTGlzdC5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgIHJlc2V0Rm9yVGFza3NGb3JtKClcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGJ1dHRvbkVsZW0oJ0NhbmNlbCcsICdjYW5jZWwtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgcmVzZXRGb3JUYXNrc0Zvcm0oKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjb25zdCBidXR0b25zID0gZGl2RWxlbSgnYnV0dG9ucycpO1xyXG4gICAgICAgICBidXR0b25zLmFwcGVuZChhZGRCdG4sIGNhbmNlbEJ0bik7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBmb3JtLmFwcGVuZChyb3dncnAsIGJ1dHRvbnMpXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBtYWluLmFwcGVuZChmb3JtKVxyXG4gICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVQb3B1cEZvckRldGFpbHModGFzayA9IG5ldyBUYXNrKCkpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgLy90aXRsZShuYW1lKVxyXG4gICAgY29uc3QgZGV0YWlsc0Zvcm0gPSBkaXZFbGVtKCdkZXRhaWxzLXBvcHVwLWZvcm0nKTtcclxuICAgIC8vIGNvbnN0IGRldGFpbHNHcnAgPSBkaXZFbGVtKCdkZXRhaWxzLWdycCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBwRWxlbShgVGl0bGU6ICR7dGFzay5uYW1lfWApO1xyXG4gICAgLy9kZXNjcmlwdGlvblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwRWxlbShgRGVzY3JpcHRpb246ICR7dGFzay5kZXNjcmlwdGlvbn1gKTtcclxuICAgIC8vcHJpb3JpdHlcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gcEVsZW0oYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YCk7XHJcbiAgICAvLyBkdWUgZGF0ZVxyXG4gICAgY29uc3QgZHVlZGF0ZSA9IHBFbGVtKGBEdWVEYXRlOiAke3Rhc2suZHVlZGF0ZX1gKTtcclxuICAgIC8vIGNhdGVnb3J5XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHBFbGVtKGBDYXRlZ29yeTogJHtjdXJyZW50VGFifWApO1xyXG5cclxuICAgIGRldGFpbHNGb3JtLmFwcGVuZChjYXRlZ29yeSx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcclxuICAgIGNvbnN0IGFkZEJ0biA9IGJ1dHRvbkVsZW0oJ0FkZCcsICdhZGQtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1waWNrZXInKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10ZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZih0YXNrTmFtZSA9PSAnJywgZHVlZGF0ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ2RhdGUgYW5kIHRhc2sgbmFtZSBhcmUgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soaWQsdGFza05hbWUsIGltYWdlcy5jYWxlbmRlclRleHRJY29uLCBjdXJyZW50VGFiLGR1ZWRhdGUsZGVzY3JpcHRpb24scHJpb3JpdHkpO1xyXG4gICAgICAgICAgICB0YXNrc0xpc3QucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgcmVzZXRGb3JUYXNrc0Zvcm0oKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBidXR0b25FbGVtKCdDYW5jZWwnLCAnY2FuY2VsLWJ0bicsICgpID0+IHtcclxuICAgICAgICByZXNldEZvclRhc2tzRm9ybSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkaXZFbGVtKCdidXR0b25zJyk7XHJcbiAgICBidXR0b25zLmFwcGVuZChjYW5jZWxCdG4pO1xyXG4gICAgZGV0YWlsc0Zvcm0uYXBwZW5kKGRlc2NyaXB0aW9uLCBidXR0b25zKVxyXG4gICAgbWFpbi5hcHBlbmQoZGV0YWlsc0Zvcm0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9yVGFza3NGb3JtKCkge1xyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5tYWluJyk7XHJcbiAgICBtYWluRGl2LmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gcEVsZW0oY3VycmVudFRhYiwgJ2hlYWRpbmcnKTtcclxuICAgIGNvbnN0IGFkZFRhc2tFbGVtZW50ID0gYWRkRWxlbWVudCgnQWRkIFRhc2snLCAnYWRkLXRhc2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWN0aXZhdGVQb3B1cEZvclRhc2tzKCk7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgY29uc3QgdGFiVGFza3MgPSB0YXNrc0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5jYXRlZ29yeSA9PT0gY3VycmVudFRhYik7XHJcbiAgICBsZXQgdGFiVGFza3NFbGVtcyA9IFtdO1xyXG4gICAgaWYodGFiVGFza3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgdGFiVGFza3NFbGVtcyA9IHRhYlRhc2tzLm1hcCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRpdkVsZW0oJ3Rhc2snKVxyXG4gICAgICAgICAgICBjb25zdCBwID0gcEVsZW0odGFzay5uYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSByYWRpb0VsZW0odGFzay5pZCwgdGFzay5uYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlNYXJrZXIgPSBkaXZFbGVtKCdwcmlvcml0eS1tYXJrZXInKTtcclxuICAgICAgICAgICAgaWYodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gtY29sb3InKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1lZGl1bS1jb2xvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdy1jb2xvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZFbGVtKCd0YXNrLWxlZnQnKTtcclxuICAgICAgICAgICAgbGVmdC5hcHBlbmQocHJpb3JpdHlNYXJrZXIsIGNoZWNrYm94LCBwKTtcclxuICAgICAgICAgIC8vZGV0YWlscyBkYXRlIGFuZCBkZWxldGVcclxuICAgICAgICAgICBjb25zdCByaWdodCA9IGRpdkVsZW0oJ3Rhc2stcmlnaHQnKTtcclxuICAgICAgICAgIC8vIGRldGFpbHNcclxuICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBidXR0b25FbGVtKCdEZXRhaWxzJyxgZGV0YWlscy1idG4jJHt0YXNrLmlkfWAsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlUG9wdXBGb3JEZXRhaWxzKHRhc2spXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRldGFpbHMuaWQgPSBgZGV0YWlscy1idG4jJHt0YXNrLmlkfWA7XHJcbiAgICAgICAgICAvL2RlbGV0ZVxyXG4gICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gaW1hZ2VFbGVtKGltYWdlcy5kZWxldGVJY29uMiwnZGVsZXRlLWljb24nLCAnZGVsZXRlLWljb24nKTtcclxuICAgICAgICAgIGRlbGV0ZUJ0bi5pZCA9IHRhc2suaWQ7XHJcbiAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGFza3NMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaWQgPT0gdGFyZ2V0KTtcclxuICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGFza3NMaXN0LmluZGV4T2YoaXRlbVswXSk7XHJcbiAgICAgICAgICAgICB0YXNrc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgIHJlc2V0Rm9yVGFza3NGb3JtKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vZWRpdFxyXG4gICAgICAgICAgY29uc3QgZWRpdCA9IGltYWdlRWxlbShpbWFnZXMuZWRpdEljb24sICdlZGl0LWljb24nLCAnZWRpdC1pY29uJyk7XHJcbiAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGVkaXRUYXNrKHRhc2spXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vZHVlZGF0ZVxyXG4gICAgICAgICAgY29uc3QgZHVlZGF0ZSA9IHBFbGVtKHRhc2suZHVlZGF0ZSk7XHJcbiAgICAgICAgICByaWdodC5hcHBlbmQoZHVlZGF0ZSAsZGV0YWlscyxlZGl0ICxkZWxldGVCdG4pXHJcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZChsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgICB9KTtcclxuICB9XHJcbiAgICB0YWJUYXNrc0VsZW1zLmxlbmd0aCA9PT0gMD8gbWFpbkRpdi5hcHBlbmQoaGVhZGluZyxhZGRUYXNrRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYWluRGl2LmFwcGVuZChoZWFkaW5nLCAuLi50YWJUYXNrc0VsZW1zICxhZGRUYXNrRWxlbWVudCkgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrID0gbmV3IFRhc2soKSkge1xyXG4gICAgYWN0aXZhdGVQb3B1cEZvclRhc2tzKHRhc2spXHJcbn1cclxuICAgIiwiaW1wb3J0IGltYWdlcyBmcm9tIFwiLi4vLi4vLi4vdG9kby1saXN0L3NyYy91dGlscy9pbWFnZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkl0ZW0ge1xyXG4gICBjb25zdHJ1Y3RvcihuYW1lLCBpY29uID0gaW1hZ2VzLmNhbGVuZGVyVGV4dEljb24pIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5pY29uID0gaWNvbjtcclxuICAgfVxyXG59ICIsImltcG9ydCBpbWFnZXMgZnJvbSBcIi4uLy4uLy4uL3RvZG8tbGlzdC9zcmMvdXRpbHMvaW1hZ2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLG5hbWUsIGljb24gPSBpbWFnZXMuY2FsZW5kZXJUZXh0SWNvbiwgY2F0ZWdvcnksIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBpbWFnZXMgZnJvbSBcIi4vaW1hZ2VzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcEVsZW0odGV4dCxjbGFzc05hbWUpIHtcclxuICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgcC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBwLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgcmV0dXJuIHA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXZFbGVtKGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRWxlbShpZCx0ZXh0KSB7XHJcbiAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgbGFiZWwuZm9yID0gaWQ7XHJcbiAgIGxhYmVsLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRleHRGaWVsZEVsZW0oaWQsIHBsYWNlaG9sZGVyKSB7XHJcbiAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcclxuICAgaW5wdXQuc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IGluaGVyaXQ7JztcclxuICAgaW5wdXQuaWQgPSBpZDtcclxuICAgcmV0dXJuIGlucHV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VFbGVtKHNyYywgYWx0LGNsYXNzTmFtZSkge1xyXG4gICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgIGltYWdlLmFsdCA9IGFsdDtcclxuICAgY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgaW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICByZXR1cm4gaW1hZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFbGVtZW50KHRleHQsIGNsYXNzTmFtZSwgb25jbGlja2VkKSB7XHJcbiAgIC8vIGNvbnN0IHdyYXBwZXIgPSBjbGFzc05hbWUgPT09IHVuZGVmaW5lZD8gZGl2RWxlbSgpIDogZGl2RWxlbShjbGFzc05hbWUpO1xyXG4gICBjb25zdCB3cmFwcGVyMSA9IGRpdkVsZW0oY2xhc3NOYW1lKTtcclxuICAgY29uc3QgaW1hZ2UgPSBpbWFnZUVsZW0oaW1hZ2VzLnBsdXNJY29uLCAnYWRkLWljb24nLCAnYWRkLWljb24nKTtcclxuICAgd3JhcHBlcjEuYXBwZW5kKGltYWdlLCB0ZXh0KTtcclxuICAgd3JhcHBlcjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrZWQpO1xyXG4gICAvLyB3cmFwcGVyLmFwcGVuZCh3cmFwcGVyMSk7XHJcbiAgIHJldHVybiB3cmFwcGVyMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbkVsZW0odGV4dCwgY2xhc3NOYW1lLCBjYWxsYmFjaykge1xyXG4gICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgIGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gJ2ZvbnQtc2l6ZTogaW5oZXJpdCc7XHJcbiAgIGNhbGxiYWNrICE9PSBudWxsICYmIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcclxuICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlvRWxlbShpZCwgbmFtZSwgb25jbGlja2VkKSB7XHJcbiAgIGNvbnN0IGNoZWNrYm94PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgY2hlY2tib3guaWQgPSBpZDtcclxuICAgY2hlY2tib3gubmFtZSA9IG5hbWU7XHJcbiAgIG9uY2xpY2tlZCA9PT0gdW5kZWZpbmVkPyBudWxsIDogY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrZWQpO1xyXG4gICByZXR1cm4gY2hlY2tib3g7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0QXJlYUVsZW0oaWQscGxhY2Vob2xkZXIsY2xhc3NOYW1lKSB7XHJcbiAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgaWYocGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCkgdGV4dGFyZWEuaW5uZXJUZXh0ID0gcGxhY2Vob2xkZXI7XHJcbiAgIHRleHRhcmVhLmlkID0gaWQ7XHJcbiAgIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgcmV0dXJuIHRleHRhcmVhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RWxlbShpZCxuYW1lLCBvcHRpb25zID0gW10pIHtcclxuICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgIHNlbGVjdC5uYW1lID0gbmFtZTtcclxuICAgc2VsZWN0LmlkID0gaWQ7XHJcbiAgIGNvbnN0IGl0ZW1zID0gb3B0aW9ucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xyXG4gICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgfSk7XHJcbiAgIHNlbGVjdC5hcHBlbmQoLi4uaXRlbXMpO1xyXG4gICByZXR1cm4gc2VsZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaWFsb2dFbGVtKCkge1xyXG4gICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuICAgY29uc3QgcCA9IHBFbGVtKCdoZWxsbyB3b3JsZCcpO1xyXG4gICBkaWFsb2cuYXBwZW5kKHApO1xyXG4gICByZXR1cm4gZGlhbG9nO1xyXG59IiwiaW1wb3J0IHBsdXNJY29uIGZyb20gJy4uL2Fzc2V0cy9wbHVzLnN2Zyc7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4uL2Fzc2V0cy9kZWxldGUuc3ZnJztcclxuaW1wb3J0IGNhbGVuZGVyVGV4dEljb24gZnJvbSAnLi4vYXNzZXRzL2NhbGVuZGFyLXRleHQuc3ZnJztcclxuaW1wb3J0IGNvbXBsZXRlZFRhc2tJY29uIGZyb20gJy4uL2Fzc2V0cy9jb21wbGV0ZWQtdGFzay5zdmcnO1xyXG5pbXBvcnQgY2FsZW5kZXJTZWFyY2hJY29uIGZyb20gJy4uL2Fzc2V0cy9jYWxlbmRhci1zZWFyY2guc3ZnJztcclxuaW1wb3J0IGNhbGVuZGVyRWRpdEljb24gZnJvbSAnLi4vYXNzZXRzL2NhbGVuZGFyLWVkaXQuc3ZnJztcclxuaW1wb3J0IHByb2plY3QgZnJvbSAnLi4vYXNzZXRzL3Byb2plY3QucG5nJztcclxuaW1wb3J0IHByb2plY3QxIGZyb20gJy4uL2Fzc2V0cy9wcm9qZWN0MS5wbmcnO1xyXG5pbXBvcnQgZGVsZXRlSWNvbjIgZnJvbSAnLi4vYXNzZXRzL2RlbGV0ZS1mb3JldmVyLnN2Zyc7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuLi9hc3NldHMvcGVuY2lsLnN2Zyc7XHJcbmltcG9ydCBwcm9qZWN0MiBmcm9tICcuLi9hc3NldHMvZm9sZGVyLnN2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcGx1c0ljb24sXHJcbiAgICBkZWxldGVJY29uLFxyXG4gICAgY2FsZW5kZXJFZGl0SWNvbixcclxuICAgIGNhbGVuZGVyU2VhcmNoSWNvbixcclxuICAgIGNhbGVuZGVyVGV4dEljb24sXHJcbiAgICBjb21wbGV0ZWRUYXNrSWNvbixcclxuICAgIHByb2plY3QsXHJcbiAgICBwcm9qZWN0MSxcclxuICAgIGRlbGV0ZUljb24yLFxyXG4gICAgZWRpdEljb24sXHJcbiAgICBwcm9qZWN0MixcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJ1biB9IGZyb20gJy4vbW9kZWxzL2ZlYXR1cmVzL25hdi1iYXIvbmF2LWJhcic7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxucnVuKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==