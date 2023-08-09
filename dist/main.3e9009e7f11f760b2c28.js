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

body.or1.or2 {
  display: flex;
  flex-direction: column;
  background-color: red;
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
    /* margin: 1rem; */
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
    padding: .4rem;
    justify-content: center;
    align-items: center;
}

.header-logo {
    width: 3rem;
}

.header-title {
    font-size: 2rem;
}

.is-done {
    text-decoration: line-through;
}

.popup-add {
    display: flex;
    flex-direction: column;
    background-color: red;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,oFAA6F;AACjG;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,qBAAqB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,cAAc;;AAElB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;GACG,aAAa;GACb,UAAU;AACb;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,WAAW;IACX,UAAU;IACV,cAAc;IACd,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,8BAA8B;IAC9B,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,4BAA4B;IAC5B,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;AAClB;;AAEA;GACG,aAAa;GACb,mBAAmB;GACnB,UAAU;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,YAAY;;AAEhB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;AACzB","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url(../src//assets/Roboto/Roboto-Bold.ttf),url(../src//assets/Roboto/Roboto-Regular.ttf);\r\n}\r\n\r\nbody {\r\n    background-color: azure;\r\n    width: 100%;\r\n    height: 100vh;\r\n    font-family: 'Roboto';\r\n}\r\n\r\nbody.or1.or2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: red;\r\n}\r\n\r\nbody > div.wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\ndiv.nav-bar {\r\n    background-color: lightgreen;\r\n    flex-grow: 1;\r\n    flex-shrink: 0;\r\n    flex-basis: 5rem;\r\n    padding: .5rem;\r\n}\r\n\r\ndiv.main {\r\n    padding: 0 .5rem;\r\n    flex-grow: 1;\r\n    flex-grow: 5;\r\n}\r\n\r\n.nav-item-image ,.project-item-image {\r\n    width: 2rem;\r\n}\r\n\r\n.nav-item {\r\n    display: flex;\r\n    gap: .3rem;\r\n    font-size: 1.2rem;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: .1rem;\r\n}\r\n\r\n.project-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: .1rem;\r\n}\r\n\r\n.project-left {\r\n    cursor: pointer;\r\n}\r\n\r\n.project-item:hover {\r\n    background-color: azure;\r\n}\r\n\r\n.nav-item:hover {\r\n    background-color: azure;\r\n}\r\n\r\n.nav-bar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.nav-top, .nav-bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .2rem;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.nav-title {\r\n    font-size: 1.8rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.add-icon {\r\n    width: 2rem;\r\n}\r\n\r\n.add-project, .add-task {\r\n    display: flex;\r\n    gap: .5rem;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.popup-form {\r\n    /* margin: 1rem; */\r\n    padding: 1rem;\r\n    background-color: lightgreen;\r\n    width: clamp(7rem, 40%, 100%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.popup-form input {\r\n    padding: .4rem;\r\n\r\n}\r\n\r\n.row-grp {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.buttons {\r\n   display: flex;\r\n   gap: .2rem;\r\n}\r\n\r\n.add-btn, .cancel-btn {\r\n    flex: 1;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    width: 100%;\r\n    gap: .5rem;\r\n    padding: .2rem;\r\n    background-color: lightgray;\r\n    align-items: center;\r\n    font-size: 1.2rem;\r\n    justify-content: space-between;\r\n    border-radius: .2rem;\r\n    margin-bottom: .4rem;\r\n}\r\n\r\n.task-form {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.heading {\r\n    width: 100%;\r\n    padding: 1rem 0;\r\n    background-color: lightgreen;\r\n    text-align: center;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\nselect {\r\n    padding: .4rem;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n}\r\n\r\nbutton {\r\n    padding: .4rem;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n}\r\n\r\ntextarea {\r\n    padding: .4rem;\r\n}\r\n\r\n.task-left {\r\n   display: flex;\r\n   align-items: center;\r\n   gap: .5rem;\r\n}\r\n\r\n.task-right {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 1rem;\r\n    gap: 1rem;\r\n}\r\n.delete-icon {\r\n    width: 2rem;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.details-btn {\r\n    padding: .1rem .4rem;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n}\r\n\r\n.details-popup-form {\r\n    background-color: lightgreen;\r\n    width: 40%;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    font-size: 1.2rem;\r\n    border-radius: .4rem;\r\n}\r\n\r\n.priority-marker {\r\n    width: .3rem;\r\n    height: 2rem;\r\n    \r\n}\r\n\r\n.priority-high-color {\r\n  background-color: red;\r\n}\r\n\r\n.priority-medium-color {\r\n  background-color: orange;\r\n}\r\n\r\n.priority-low-color {\r\n  background-color: green;\r\n}\r\n\r\n.delete-project-icon {\r\n    width: 2rem;\r\n}\r\n\r\n.project-left {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: .3rem;\r\n}\r\n\r\n.edit-icon {\r\n    width: 2rem;\r\n}\r\n\r\n.header{\r\n    width: 100%;\r\n    display: flex;\r\n    padding: .4rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.header-logo {\r\n    width: 3rem;\r\n}\r\n\r\n.header-title {\r\n    font-size: 2rem;\r\n}\r\n\r\n.is-done {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.popup-add {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: red;\r\n}"],"sourceRoot":""}]);
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

let projectItemsList = [
//    new NavItem('Hello'),
//    new NavItem('Python')
];

let tasksList = [];

let currentTab = 'All';

function storeItems(isTask = true) {
    if(isTask) {
      const serielizedTasks = JSON.stringify(tasksList);
      localStorage.setItem('tasks', serielizedTasks);
    } else {
      const serielizedProjects = JSON.stringify(projectItemsList);
      localStorage.setItem('projects', serielizedProjects);
    }
}

function getItems(isTask = true) {
    if(isTask) {
        const getTasks = localStorage.getItem('tasks');
        if(getTasks != null) {
            const deserializedTasks = JSON.parse(getTasks);
            tasksList = deserializedTasks;
        }
    } else {
        const getProjects = localStorage.getItem('projects');
        if(getProjects != null) {
            const deserializedProjects = JSON.parse(getProjects);
            projectItemsList = deserializedProjects;
        }
    }
}

function layoutSetup(tab = 'All') {
    getItems(true);
    getItems(false);
    currentTab = tab;
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
          updateUiForCompleted(task, p);
          const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
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
          deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
          //edit
          const edit = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].editIcon, 'edit-icon', 'edit-icon');
          edit.addEventListener('click', () => {
            editTask(task)
          });
          //duedate
          const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.duedate);
          right.append(details, deleteBtn,duedate)
          wrapper.append(left, right);
          return wrapper;
     });
   }


   const addTaskElement = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.addElement)('Add Task', 'add-task', () => {
       activatePopupForTasks();
       const taskName  = document.querySelector('#task-name').value;
       if(taskName === '') {
         return;
       }
       const id = Math.random();
       const task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](id,taskName, _utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].calenderTextIcon, currentTab);
       tasksList.push(task);
       storeItems(true);
   });
    const tabTasks = tasksList.filter(task => task.category == currentTab);
   let tabTasksElems = [];
   if(tabTasks.length !== 0) {
      tabTasksElems = tabTasks.map(task => {
        const wrapper = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task')
          const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.name);
          updateUiForCompleted(task, p);
          const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
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
        deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
        // edit
        const edit = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].editIcon, 'edit-icon', 'edit-icon');
        edit.addEventListener('click', () => {
            editTask(task)
        });
        //due date
        const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.duedate);
        right.append(details, deleteBtn,edit,duedate)
        wrapper.append(left, right);
        return wrapper;
   });
} 
 
  currentTab == 'All'?  mainDiv.append(heading, ...allTasks) 
                     :  mainDiv.append(heading, ...tabTasksElems,addTaskElement) ;
    wrapperDiv.append(navBar, mainDiv);
    document.querySelector('body').append(header,wrapperDiv);
}

const run = (tab = 'All') => {
    layoutSetup(tab)
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
           storeItems(false);
           const body = document.querySelector('body');
           body.innerHTML = null;
           currentTab = 'All';
           run();
        });
        const image = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].project2, 'project-item-image', 'project-item-image');
        projectLeft.append(image,p);
        div.addEventListener('click', handleNavItemClicked)
        // div.append(projectLeft, deleteImage);
        div.append(projectLeft);
      
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
       storeItems(true);
   });

   const tabTasks = tasksList.filter(task => task.category == currentTab);
   let tabTasksElems = [];
   if(tabTasks.length !== 0) {
      tabTasksElems = tabTasks.map(task => {
        const wrapper = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.divElem)('task')
          const p = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.name);
          updateUiForCompleted(task, p);
          const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
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
        deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
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
          updateUiForCompleted(task, p);
          const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
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
        deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
        //edit
        const edit = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.imageElem)(_utils_images__WEBPACK_IMPORTED_MODULE_1__["default"].editIcon, 'edit-icon', 'edit-icon');
        edit.addEventListener('click', () => {
            editTask(task)
        });
        // date
        const duedate = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.pElem)(task.duedate);
        right.append(details, deleteBtn,duedate)
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
        storeItems(false);
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
                 storeItems(true);
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
                 task.duedate = duedate;
                 task.description = description;
                 task.priority = priority;
                 task.name = taskName
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
            storeItems(true);
            resetForTasksForm()
    });
    const cancelBtn = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.buttonElem)('Cancel', 'cancel-btn', () => {
        handleDetailsCardCancel();
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
            updateUiForCompleted(task, p);
            const checkbox = (0,_utils_dom_elems__WEBPACK_IMPORTED_MODULE_0__.radioElem)(task.id, task.name);
            checkbox.checked = task.isDone;
            checkbox.addEventListener('click', () => isDone(task));
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
          deleteBtn.addEventListener('click', () => handleDeleteBtn(task));
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
   
function handleDeleteBtn(task) {
    const item = tasksList.filter(task1 => task1.id == task.id);
    const index = tasksList.indexOf(item[0]);
    tasksList.splice(index, 1);
    storeItems(true);
    const body = document.querySelector('body');
    body.innerHTML = null;
    run();
  }

function handleDetailsCardCancel() {
    const body = document.querySelector('body');
    body.innerHTML = null;
    run(currentTab);
}

function isDone(task) {
   const index = tasksList.indexOf(task);
   tasksList[index].isDone = ! tasksList[index].isDone;
   storeItems(true);
}

function updateUiForCompleted(task, p) {
    // if(task.isDone == true) {
    //     p.classList.add('is-done');         
    // }
    // p.classList.remove('is-done');
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
    constructor(id,name, icon = _todo_list_src_utils_images__WEBPACK_IMPORTED_MODULE_0__["default"].calenderTextIcon, category, duedate, description,priority, isDone = false) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.category = category;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.isDone = isDone;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZTkwMDllN2YxMWY3NjBiMmMyOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUF3RDtBQUNwRyw0Q0FBNEMsdUpBQTJEO0FBQ3ZHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DLFFBQVEsbUNBQW1DO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVB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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBd0Q7QUFDbkM7QUFDckI7QUFDQSxxRUFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvT3B0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZmVhdHVyZXMvbmF2LWJhci9uYXYtYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvbmF2LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlscy9kb20tZWxlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjLy9hc3NldHMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy8vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pLHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxufVxyXG5cclxuYm9keS5vcjEub3IyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5ib2R5ID4gZGl2LndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5kaXYubmF2LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBmbGV4LWJhc2lzOiA1cmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuXHJcbmRpdi5tYWluIHtcclxuICAgIHBhZGRpbmc6IDAgLjVyZW07XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbS1pbWFnZSAsLnByb2plY3QtaXRlbS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IC4zcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogLjFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAuMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGVmdCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxufVxyXG5cclxuLm5hdi1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5uYXYtdG9wLCAubmF2LWJvdHRvbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogLjJyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLm5hdi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWRkLWljb24ge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdCwgLmFkZC10YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvcHVwLWZvcm0ge1xyXG4gICAgLyogbWFyZ2luOiAxcmVtOyAqL1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICB3aWR0aDogY2xhbXAoN3JlbSwgNDAlLCAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAuNHJlbTtcclxufVxyXG5cclxuLnBvcHVwLWZvcm0gaW5wdXQge1xyXG4gICAgcGFkZGluZzogLjRyZW07XHJcblxyXG59XHJcblxyXG4ucm93LWdycCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogLjRyZW07XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZ2FwOiAuMnJlbTtcclxufVxyXG5cclxuLmFkZC1idG4sIC5jYW5jZWwtYnRuIHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogLjVyZW07XHJcbiAgICBwYWRkaW5nOiAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjRyZW07XHJcbn1cclxuXHJcbi50YXNrLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgcGFkZGluZzogLjRyZW07XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogLjRyZW07XHJcbn1cclxuXHJcbi50YXNrLWxlZnQge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBnYXA6IC41cmVtO1xyXG59XHJcblxyXG4udGFzay1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG4uZGVsZXRlLWljb24ge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGV0YWlscy1idG4ge1xyXG4gICAgcGFkZGluZzogLjFyZW0gLjRyZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xyXG4gICAgd2lkdGg6IDEuMnJlbTtcclxuICAgIGhlaWdodDogMS4ycmVtO1xyXG59XHJcblxyXG4uZGV0YWlscy1wb3B1cC1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tYXJrZXIge1xyXG4gICAgd2lkdGg6IC4zcmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5wcmlvcml0eS1oaWdoLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWRpdW0tY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLnByaW9yaXR5LWxvdy1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5kZWxldGUtcHJvamVjdC1pY29uIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAuM3JlbTtcclxufVxyXG5cclxuLmVkaXQtaWNvbiB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWxvZ28ge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uaXMtZG9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLnBvcHVwLWFkZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9GQUE2RjtBQUNqRzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0dBQ0csYUFBYTtHQUNiLFVBQVU7QUFDYjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0dBQ0csYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixVQUFVO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZOztBQUVoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBzcmM6IHVybCguLi9zcmMvL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmKSx1cmwoLi4vc3JjLy9hc3NldHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5vcjEub3IyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gZGl2LndyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubmF2LWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgLjVyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZmxleC1ncm93OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0taW1hZ2UgLC5wcm9qZWN0LWl0ZW0taW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAuM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1sZWZ0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b3AsIC5uYXYtYm90dG9tIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QsIC5hZGQtdGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWZvcm0ge1xcclxcbiAgICAvKiBtYXJnaW46IDFyZW07ICovXFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg3cmVtLCA0MCUsIDEwMCUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZm9ybSBpbnB1dCB7XFxyXFxuICAgIHBhZGRpbmc6IC40cmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucm93LWdycCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGdhcDogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuLCAuY2FuY2VsLWJ0biB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC40cmVtO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGVmdCB7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IC4xcmVtIC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gICAgd2lkdGg6IDEuMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLXBvcHVwLWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tYXJrZXIge1xcclxcbiAgICB3aWR0aDogLjNyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1oaWdoLWNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW1lZGl1bS1jb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sb3ctY29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAuNHJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaXMtZG9uZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYWRkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbntcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBuYW1lXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBhZGRFbGVtZW50LCBidXR0b25FbGVtLCBkaXZFbGVtLCBpbWFnZUVsZW0sIGxhYmVsRWxlbSwgcEVsZW0sIHJhZGlvRWxlbSwgc2VsZWN0RWxlbSwgdGV4dEFyZWFFbGVtLCB0ZXh0RmllbGRFbGVtIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RvbS1lbGVtc1wiO1xyXG5pbXBvcnQgaW1hZ2VzIGZyb20gXCIuLi8uLi8uLi91dGlscy9pbWFnZXNcIjtcclxuaW1wb3J0IE9wdGlvbiBmcm9tIFwiLi4vLi4vT3B0aW9uXCI7XHJcbmltcG9ydCBOYXZJdGVtIGZyb20gXCIuLi8uLi9uYXYtaXRlbVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vLi4vdGFza1wiO1xyXG5cclxuY29uc3QgbmF2SXRlbVRvcExpc3QgPSBbXHJcbiAgICBuZXcgTmF2SXRlbSgnQWxsJyksXHJcbiAgICBuZXcgTmF2SXRlbSgnVG9kYXknKSxcclxuICAgIG5ldyBOYXZJdGVtKCdUaGlzLVdlZWsnKVxyXG5dO1xyXG5cclxubGV0IHByb2plY3RJdGVtc0xpc3QgPSBbXHJcbi8vICAgIG5ldyBOYXZJdGVtKCdIZWxsbycpLFxyXG4vLyAgICBuZXcgTmF2SXRlbSgnUHl0aG9uJylcclxuXTtcclxuXHJcbmxldCB0YXNrc0xpc3QgPSBbXTtcclxuXHJcbmxldCBjdXJyZW50VGFiID0gJ0FsbCc7XHJcblxyXG5mdW5jdGlvbiBzdG9yZUl0ZW1zKGlzVGFzayA9IHRydWUpIHtcclxuICAgIGlmKGlzVGFzaykge1xyXG4gICAgICBjb25zdCBzZXJpZWxpemVkVGFza3MgPSBKU09OLnN0cmluZ2lmeSh0YXNrc0xpc3QpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBzZXJpZWxpemVkVGFza3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc2VyaWVsaXplZFByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdEl0ZW1zTGlzdCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHNlcmllbGl6ZWRQcm9qZWN0cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zKGlzVGFzayA9IHRydWUpIHtcclxuICAgIGlmKGlzVGFzaykge1xyXG4gICAgICAgIGNvbnN0IGdldFRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XHJcbiAgICAgICAgaWYoZ2V0VGFza3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWRUYXNrcyA9IEpTT04ucGFyc2UoZ2V0VGFza3MpO1xyXG4gICAgICAgICAgICB0YXNrc0xpc3QgPSBkZXNlcmlhbGl6ZWRUYXNrcztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGdldFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgICAgICAgaWYoZ2V0UHJvamVjdHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoZ2V0UHJvamVjdHMpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SXRlbXNMaXN0ID0gZGVzZXJpYWxpemVkUHJvamVjdHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsYXlvdXRTZXR1cCh0YWIgPSAnQWxsJykge1xyXG4gICAgZ2V0SXRlbXModHJ1ZSk7XHJcbiAgICBnZXRJdGVtcyhmYWxzZSk7XHJcbiAgICBjdXJyZW50VGFiID0gdGFiO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZGl2RWxlbSgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJQID0gcEVsZW0oJ1RvZG8tTGlzdCcsICdoZWFkZXItdGl0bGUnKTtcclxuICAgIGNvbnN0IGxvZ28gPSBpbWFnZUVsZW0oaW1hZ2VzLmNvbXBsZXRlZFRhc2tJY29uLCAnbG9nbycsICdoZWFkZXItbG9nbycpO1xyXG4gICAgaGVhZGVyLmFwcGVuZChsb2dvICxoZWFkZXJQKTtcclxuICAgIGNvbnN0IHdyYXBwZXJEaXYgPSBkaXZFbGVtKCd3cmFwcGVyJyk7XHJcbiAgICBjb25zdCBuYXZCYXIgPSBkaXZFbGVtKCduYXYtYmFyJyk7XHJcbiAgICBjb25zdCBtYWluRGl2ID0gZGl2RWxlbSgnbWFpbicpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IHBFbGVtKGN1cnJlbnRUYWIsICdoZWFkaW5nJyk7XHJcblxyXG4gICAgbGV0IGFsbFRhc2tzID0gW107XHJcbiAgICBpZihjdXJyZW50VGFiID09PSAnQWxsJykge1xyXG4gICAgICAgICAgYWxsVGFza3MgPSB0YXNrc0xpc3QubWFwKHRhc2sgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRpdkVsZW0oJ3Rhc2snKVxyXG4gICAgICAgICAgY29uc3QgcCA9IHBFbGVtKHRhc2submFtZSk7XHJcbiAgICAgICAgICB1cGRhdGVVaUZvckNvbXBsZXRlZCh0YXNrLCBwKTtcclxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gcmFkaW9FbGVtKHRhc2suaWQsIHRhc2submFtZSk7XHJcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0RvbmU7XHJcbiAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGlzRG9uZSh0YXNrKSk7XHJcbiAgICAgICAgICBjb25zdCBwcmlvcml0eU1hcmtlciA9IGRpdkVsZW0oJ3ByaW9yaXR5LW1hcmtlcicpO1xyXG4gICAgICAgICAgaWYodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaGlnaC1jb2xvcicpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWVkaXVtLWNvbG9yJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93LWNvbG9yJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBsZWZ0ID0gZGl2RWxlbSgndGFzay1sZWZ0Jyk7XHJcbiAgICAgICAgICBsZWZ0LmFwcGVuZChwcmlvcml0eU1hcmtlciwgY2hlY2tib3gsIHApO1xyXG4gICAgICAgICAgLy9kZXRhaWxzIGRhdGUgYW5kIGRlbGV0ZVxyXG4gICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gZGl2RWxlbSgndGFzay1yaWdodCcpO1xyXG4gICAgICAgICAgLy8gZGV0YWlsc1xyXG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGJ1dHRvbkVsZW0oJ0RldGFpbHMnLCdkZXRhaWxzLWJ0bicsICgpID0+IHtcclxuICAgICAgICAgICAgYWN0aXZhdGVQb3B1cEZvckRldGFpbHModGFzaylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy9kZWxldGVcclxuICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGltYWdlRWxlbShpbWFnZXMuZGVsZXRlSWNvbjIsJ2RlbGV0ZS1pY29uJywgJ2RlbGV0ZS1pY29uJyk7XHJcbiAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlRGVsZXRlQnRuKHRhc2spKTtcclxuICAgICAgICAgIC8vZWRpdFxyXG4gICAgICAgICAgY29uc3QgZWRpdCA9IGltYWdlRWxlbShpbWFnZXMuZWRpdEljb24sICdlZGl0LWljb24nLCAnZWRpdC1pY29uJyk7XHJcbiAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBlZGl0VGFzayh0YXNrKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL2R1ZWRhdGVcclxuICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBwRWxlbSh0YXNrLmR1ZWRhdGUpO1xyXG4gICAgICAgICAgcmlnaHQuYXBwZW5kKGRldGFpbHMsIGRlbGV0ZUJ0bixkdWVkYXRlKVxyXG4gICAgICAgICAgd3JhcHBlci5hcHBlbmQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICAgfSk7XHJcbiAgIH1cclxuXHJcblxyXG4gICBjb25zdCBhZGRUYXNrRWxlbWVudCA9IGFkZEVsZW1lbnQoJ0FkZCBUYXNrJywgJ2FkZC10YXNrJywgKCkgPT4ge1xyXG4gICAgICAgYWN0aXZhdGVQb3B1cEZvclRhc2tzKCk7XHJcbiAgICAgICBjb25zdCB0YXNrTmFtZSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XHJcbiAgICAgICBpZih0YXNrTmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgfVxyXG4gICAgICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGlkLHRhc2tOYW1lLCBpbWFnZXMuY2FsZW5kZXJUZXh0SWNvbiwgY3VycmVudFRhYik7XHJcbiAgICAgICB0YXNrc0xpc3QucHVzaCh0YXNrKTtcclxuICAgICAgIHN0b3JlSXRlbXModHJ1ZSk7XHJcbiAgIH0pO1xyXG4gICAgY29uc3QgdGFiVGFza3MgPSB0YXNrc0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5jYXRlZ29yeSA9PSBjdXJyZW50VGFiKTtcclxuICAgbGV0IHRhYlRhc2tzRWxlbXMgPSBbXTtcclxuICAgaWYodGFiVGFza3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHRhYlRhc2tzRWxlbXMgPSB0YWJUYXNrcy5tYXAodGFzayA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRpdkVsZW0oJ3Rhc2snKVxyXG4gICAgICAgICAgY29uc3QgcCA9IHBFbGVtKHRhc2submFtZSk7XHJcbiAgICAgICAgICB1cGRhdGVVaUZvckNvbXBsZXRlZCh0YXNrLCBwKTtcclxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gcmFkaW9FbGVtKHRhc2suaWQsIHRhc2submFtZSk7XHJcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0RvbmU7XHJcbiAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGlzRG9uZSh0YXNrKSk7XHJcbiAgICAgICAgICBjb25zdCBwcmlvcml0eU1hcmtlciA9IGRpdkVsZW0oJ3ByaW9yaXR5LW1hcmtlcicpO1xyXG4gICAgICAgICAgaWYodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaGlnaC1jb2xvcicpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHtcclxuICAgICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWRpdW0tY29sb3InKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93Jykge1xyXG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sb3ctY29sb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBsZWZ0ID0gZGl2RWxlbSgndGFzay1sZWZ0Jyk7XHJcbiAgICAgICAgICBsZWZ0LmFwcGVuZChwcmlvcml0eU1hcmtlciwgY2hlY2tib3gsIHApO1xyXG4gICAgICAgIC8vZGV0YWlscyBkYXRlIGFuZCBkZWxldGVcclxuICAgICAgICAgY29uc3QgcmlnaHQgPSBkaXZFbGVtKCd0YXNrLXJpZ2h0Jyk7XHJcbiAgICAgICAgLy8gZGV0YWlsc1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBidXR0b25FbGVtKCdEZXRhaWxzJywnZGV0YWlscy1idG4nKTtcclxuICAgICAgICBkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlUG9wdXBGb3JEZXRhaWxzKHRhc2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vZGVsZXRlXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gaW1hZ2VFbGVtKGltYWdlcy5kZWxldGVJY29uMiwnZGVsZXRlLWljb24nLCAnZGVsZXRlLWljb24nKTtcclxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlRGVsZXRlQnRuKHRhc2spKTtcclxuICAgICAgICAvLyBlZGl0XHJcbiAgICAgICAgY29uc3QgZWRpdCA9IGltYWdlRWxlbShpbWFnZXMuZWRpdEljb24sICdlZGl0LWljb24nLCAnZWRpdC1pY29uJyk7XHJcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZWRpdFRhc2sodGFzaylcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2R1ZSBkYXRlXHJcbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IHBFbGVtKHRhc2suZHVlZGF0ZSk7XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kKGRldGFpbHMsIGRlbGV0ZUJ0bixlZGl0LGR1ZWRhdGUpXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICB9KTtcclxufSBcclxuIFxyXG4gIGN1cnJlbnRUYWIgPT0gJ0FsbCc/ICBtYWluRGl2LmFwcGVuZChoZWFkaW5nLCAuLi5hbGxUYXNrcykgXHJcbiAgICAgICAgICAgICAgICAgICAgIDogIG1haW5EaXYuYXBwZW5kKGhlYWRpbmcsIC4uLnRhYlRhc2tzRWxlbXMsYWRkVGFza0VsZW1lbnQpIDtcclxuICAgIHdyYXBwZXJEaXYuYXBwZW5kKG5hdkJhciwgbWFpbkRpdik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKGhlYWRlcix3cmFwcGVyRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJ1biA9ICh0YWIgPSAnQWxsJykgPT4ge1xyXG4gICAgbGF5b3V0U2V0dXAodGFiKVxyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LndyYXBwZXIgZGl2Lm5hdi1iYXInKTtcclxuICAgIG5hdkJhci5hcHBlbmQobmF2QmFyVG9wKCksIG5hdkJhckJvdHRvbSgpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2QmFyVG9wKCkge1xyXG4gICAgY29uc3QgbmF2QmFyVG9wID0gZGl2RWxlbSgnbmF2LXRvcCcpO1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW1zID0gbmF2SXRlbVRvcExpc3QubWFwKGl0ZW1zID0+IHtcclxuICAgICAgICAgY29uc3QgZGl2ID0gZGl2RWxlbSgnbmF2LWl0ZW0nKTtcclxuICAgICAgICAgY29uc3QgcCA9IHBFbGVtKGl0ZW1zLm5hbWUpO1xyXG4gICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlRWxlbShpbWFnZXMuY2FsZW5kZXJUZXh0SWNvbiwgJ25hdi1pdGVtLWltYWdlJywgJ25hdi1pdGVtLWltYWdlJyk7XHJcbiAgICAgICAgIGRpdi5hcHBlbmQoaW1hZ2UscCk7XHJcbiAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdkl0ZW1DbGlja2VkKVxyXG4gICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmF2QmFyVG9wLmFwcGVuZCguLi5uYXZJdGVtcyk7XHJcbiAgICByZXR1cm4gbmF2QmFyVG9wO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2QmFyQm90dG9tKCkge1xyXG4gICAgY29uc3QgbmF2Qm90dG9tID0gZGl2RWxlbSgnbmF2LWJvdHRvbScpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBwRWxlbSgnUHJvamVjdHMnLCAnbmF2LXRpdGxlJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RJdGVtcyA9IGRpdkVsZW0oJ3Byb2plY3QtaXRlbXMnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RJdGVtc0xpc3QubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRpdkVsZW0oJ3Byb2plY3QtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RMZWZ0ID0gZGl2RWxlbSgncHJvamVjdC1sZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcCA9IHBFbGVtKHByb2plY3QubmFtZSk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlSW1hZ2UgPSBpbWFnZUVsZW0oaW1hZ2VzLmRlbGV0ZUljb24yLCAnZGVsZXRlLXByb2plY3QtaWNvbicsICdkZWxldGUtcHJvamVjdC1pY29uJyk7XHJcbiAgICAgICAgZGVsZXRlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0SXRlbXNMaXN0LmluZGV4T2YocHJvamVjdCk7XHJcbiAgICAgICAgICAgcHJvamVjdEl0ZW1zTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgIHN0b3JlSXRlbXMoZmFsc2UpO1xyXG4gICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgYm9keS5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgICAgIGN1cnJlbnRUYWIgPSAnQWxsJztcclxuICAgICAgICAgICBydW4oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlRWxlbShpbWFnZXMucHJvamVjdDIsICdwcm9qZWN0LWl0ZW0taW1hZ2UnLCAncHJvamVjdC1pdGVtLWltYWdlJyk7XHJcbiAgICAgICAgcHJvamVjdExlZnQuYXBwZW5kKGltYWdlLHApO1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdkl0ZW1DbGlja2VkKVxyXG4gICAgICAgIC8vIGRpdi5hcHBlbmQocHJvamVjdExlZnQsIGRlbGV0ZUltYWdlKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHByb2plY3RMZWZ0KTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH0pOyAgXHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEVsZW0gPSBhZGRFbGVtZW50KCdBZGQgUHJvamVjdCcsICdhZGQtcHJvamVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgYWN0aXZhdGVQb3B1cCgpXHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0SXRlbXMuYXBwZW5kKC4uLnByb2plY3RzKTtcclxuXHJcbiAgICBuYXZCb3R0b20uYXBwZW5kKHRpdGxlLCBwcm9qZWN0SXRlbXMsIGFkZFByb2plY3RFbGVtKTtcclxuICAgIHJldHVybiBuYXZCb3R0b207XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5hdkl0ZW1DbGlja2VkKCkge1xyXG4gICBjb25zdCB0aXRsZSA9IHRoaXMucXVlcnlTZWxlY3RvcigncCcpLmlubmVyVGV4dDtcclxuICAgY3VycmVudFRhYiA9IHRpdGxlO1xyXG5cclxuICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYud3JhcHBlciA+IGRpdi5tYWluJyk7XHJcbiAgIHJpZ2h0LmlubmVySFRNTCA9IG51bGw7XHJcbiAgIGNvbnN0IGhlYWRpbmcgPSBwRWxlbSh0aXRsZSwgJ2hlYWRpbmcnKTtcclxuICAgY29uc3QgYWRkVGFza0VsZW1lbnQgPSBhZGRFbGVtZW50KCdBZGQgVGFzaycsICdhZGQtdGFzaycsICgpID0+IHtcclxuICAgICAgIGFjdGl2YXRlUG9wdXBGb3JUYXNrcygpO1xyXG4gICAgICAgY29uc3QgdGFza05hbWUgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xyXG4gICAgICAgaWYodGFza05hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgIH1cclxuICAgICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhpZCx0YXNrTmFtZSwgaW1hZ2VzLmNhbGVuZGVyVGV4dEljb24sIGN1cnJlbnRUYWIpO1xyXG4gICAgICAgdGFza3NMaXN0LnB1c2godGFzayk7XHJcbiAgICAgICBzdG9yZUl0ZW1zKHRydWUpO1xyXG4gICB9KTtcclxuXHJcbiAgIGNvbnN0IHRhYlRhc2tzID0gdGFza3NMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suY2F0ZWdvcnkgPT0gY3VycmVudFRhYik7XHJcbiAgIGxldCB0YWJUYXNrc0VsZW1zID0gW107XHJcbiAgIGlmKHRhYlRhc2tzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICB0YWJUYXNrc0VsZW1zID0gdGFiVGFza3MubWFwKHRhc2sgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkaXZFbGVtKCd0YXNrJylcclxuICAgICAgICAgIGNvbnN0IHAgPSBwRWxlbSh0YXNrLm5hbWUpO1xyXG4gICAgICAgICAgdXBkYXRlVWlGb3JDb21wbGV0ZWQodGFzaywgcCk7XHJcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IHJhZGlvRWxlbSh0YXNrLmlkLCB0YXNrLm5hbWUpO1xyXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNEb25lO1xyXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBpc0RvbmUodGFzaykpO1xyXG4gICAgICAgICAgY29uc3QgcHJpb3JpdHlNYXJrZXIgPSBkaXZFbGVtKCdwcmlvcml0eS1tYXJrZXInKTtcclxuICAgICAgICAgIGlmKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gtY29sb3InKTtcclxuICAgICAgICAgIH0gZWxzZSBpZih0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSB7XHJcbiAgICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWVkaXVtLWNvbG9yJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93LWNvbG9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbGVmdCA9IGRpdkVsZW0oJ3Rhc2stbGVmdCcpO1xyXG4gICAgICAgICAgbGVmdC5hcHBlbmQocHJpb3JpdHlNYXJrZXIsIGNoZWNrYm94LCBwKTtcclxuICAgICAgICAvL2RldGFpbHMgZGF0ZSBhbmQgZGVsZXRlXHJcbiAgICAgICAgIGNvbnN0IHJpZ2h0ID0gZGl2RWxlbSgndGFzay1yaWdodCcpO1xyXG4gICAgICAgIC8vIGRldGFpbHNcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0gYnV0dG9uRWxlbSgnRGV0YWlscycsJ2RldGFpbHMtYnRuJyk7XHJcbiAgICAgICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBhY3RpdmF0ZVBvcHVwRm9yRGV0YWlscyh0YXNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2RlbGV0ZVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGltYWdlRWxlbShpbWFnZXMuZGVsZXRlSWNvbjIsJ2RlbGV0ZS1pY29uJywgJ2RlbGV0ZS1pY29uJyk7XHJcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhhbmRsZURlbGV0ZUJ0bih0YXNrKSk7XHJcbiAgICAgICAgLy8gZWRpdFxyXG4gICAgICAgIGNvbnN0IGVkaXQgPSBpbWFnZUVsZW0oaW1hZ2VzLmVkaXRJY29uLCAnZWRpdC1pY29uJywgJ2VkaXQtaWNvbicpO1xyXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrKHRhc2spXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9kdWUgZGF0ZVxyXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBwRWxlbSh0YXNrLmR1ZWRhdGUpO1xyXG4gICAgICAgIHJpZ2h0LmFwcGVuZChkZXRhaWxzLCBkZWxldGVCdG4sIGVkaXQsZHVlZGF0ZSlcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZChsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgIH0pO1xyXG59IFxyXG4gICBpZihjdXJyZW50VGFiID09PSAnQWxsJykge1xyXG4gICAgICBjb25zdCBhbGxUYXNrcyA9IHRhc2tzTGlzdC5tYXAodGFzayA9PiB7XHJcbiAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZGl2RWxlbSgndGFzaycpXHJcbiAgICAgICAgICBjb25zdCBwID0gcEVsZW0odGFzay5uYW1lKTtcclxuICAgICAgICAgIHVwZGF0ZVVpRm9yQ29tcGxldGVkKHRhc2ssIHApO1xyXG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSByYWRpb0VsZW0odGFzay5pZCwgdGFzay5uYW1lKTtcclxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzRG9uZTtcclxuICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaXNEb25lKHRhc2spKTtcclxuICAgICAgICAgIGNvbnN0IHByaW9yaXR5TWFya2VyID0gZGl2RWxlbSgncHJpb3JpdHktbWFya2VyJyk7XHJcbiAgICAgICAgICBpZih0YXNrLnByaW9yaXR5ID09ICdIaWdoJykge1xyXG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoLWNvbG9yJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykge1xyXG4gICAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1lZGl1bS1jb2xvcicpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdMb3cnKSB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdy1jb2xvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZFbGVtKCd0YXNrLWxlZnQnKTtcclxuICAgICAgICAgIGxlZnQuYXBwZW5kKHByaW9yaXR5TWFya2VyLCBjaGVja2JveCwgcCk7XHJcbiAgICAgICAgLy9kZXRhaWxzLCBkYXRlLCBlZGl0IGFuZCBkZWxldGVcclxuICAgICAgICAgY29uc3QgcmlnaHQgPSBkaXZFbGVtKCd0YXNrLXJpZ2h0Jyk7XHJcbiAgICAgICAgLy8gZGV0YWlsc1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBidXR0b25FbGVtKCdEZXRhaWxzJywnZGV0YWlscy1idG4nKTtcclxuICAgICAgICBkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlUG9wdXBGb3JEZXRhaWxzKHRhc2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGRlbGV0ZVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGltYWdlRWxlbShpbWFnZXMuZGVsZXRlSWNvbjIsJ2RlbGV0ZS1pY29uJywgJ2RlbGV0ZS1pY29uJyk7XHJcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhhbmRsZURlbGV0ZUJ0bih0YXNrKSk7XHJcbiAgICAgICAgLy9lZGl0XHJcbiAgICAgICAgY29uc3QgZWRpdCA9IGltYWdlRWxlbShpbWFnZXMuZWRpdEljb24sICdlZGl0LWljb24nLCAnZWRpdC1pY29uJyk7XHJcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZWRpdFRhc2sodGFzaylcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBkYXRlXHJcbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IHBFbGVtKHRhc2suZHVlZGF0ZSk7XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kKGRldGFpbHMsIGRlbGV0ZUJ0bixkdWVkYXRlKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH0pO1xyXG4gICAgcmlnaHQuYXBwZW5kKGhlYWRpbmcsLi4uYWxsVGFza3MpXHJcbiAgICByZXR1cm47XHJcbiAgIH1cclxuICAgdGFiVGFza3NFbGVtcy5sZW5ndGggPT09IDA/IHJpZ2h0LmFwcGVuZChoZWFkaW5nLGFkZFRhc2tFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmlnaHQuYXBwZW5kKGhlYWRpbmcsIC4uLnRhYlRhc2tzRWxlbXMgLGFkZFRhc2tFbGVtZW50KSA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlUG9wdXAoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keS5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgY29uc3QgZm9ybSA9IGRpdkVsZW0oJ3BvcHVwLWZvcm0nKTtcclxuICAgIGNvbnN0IHJvd2dycCA9IGRpdkVsZW0oJ3Jvdy1ncnAnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxFbGVtKCdwcm9qZWN0LW5hbWUnLCAnUHJvamVjdCBOYW1lJyk7XHJcbiAgICBjb25zdCB0ZXh0RmllbGRFbGVtMSA9IHRleHRGaWVsZEVsZW0oJ3Byb2plY3QtbmFtZScsICdlbnRlciBwcm9qZWN0IG5hbWUnKTtcclxuICAgIHJvd2dycC5hcHBlbmQobGFiZWwsdGV4dEZpZWxkRWxlbTEpO1xyXG4gICAgY29uc3QgYWRkQnRuID0gYnV0dG9uRWxlbSgnQWRkJywgJ2FkZC1idG4nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgaWYodmFsdWUgPT09ICcnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBOYXZJdGVtKHZhbHVlKTtcclxuICAgICAgICBwcm9qZWN0SXRlbXNMaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgc3RvcmVJdGVtcyhmYWxzZSk7XHJcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgIHJ1bigpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBidXR0b25FbGVtKCdDYW5jZWwnLCAnY2FuY2VsLWJ0bicsICgpID0+IHtcclxuICAgICAgIGJvZHkuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgICAgIHJ1bigpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkaXZFbGVtKCdidXR0b25zJyk7XHJcbiAgICBidXR0b25zLmFwcGVuZChhZGRCdG4sIGNhbmNlbEJ0bik7XHJcbiAgICBcclxuICAgIGZvcm0uYXBwZW5kKHJvd2dycCwgYnV0dG9ucylcclxuICAgIFxyXG4gICAgYm9keS5hcHBlbmQoZm9ybSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVQb3B1cEZvclRhc2tzKHRhc2sxKSB7XHJcbiAgICAgaWYodGFzazEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubWFpbicpO1xyXG4gICAgICAgICBtYWluLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgIC8vdGl0bGUobmFtZSlcclxuICAgICAgICAgY29uc3QgZm9ybSA9IGRpdkVsZW0oJ3BvcHVwLWZvcm0nKTtcclxuICAgICAgICAgY29uc3Qgcm93Z3JwID0gZGl2RWxlbSgncm93LWdycCcpO1xyXG4gICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsRWxlbSgndGFzay1uYW1lJywgJ1Byb2plY3QgTmFtZScpO1xyXG4gICAgICAgICBjb25zdCB0ZXh0RmllbGRFbGVtMSA9IHRleHRGaWVsZEVsZW0oJ3Rhc2stbmFtZScsICdlbnRlciB0YXNrIG5hbWUnKTtcclxuICAgICAgICAgLy9kZXNjcmlwdGlvblxyXG4gICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IHRleHRBcmVhRWxlbSgndGFzay10ZXh0YXJlYScpO1xyXG4gICAgICAgICB0ZXh0YXJlYS5yb3dzID0gMTA7XHJcbiAgICAgICAgIHRleHRhcmVhLmNvbHMgPSAxMDtcclxuICAgICAgICAgY29uc3Qgcm93Z3JwMiA9IGRpdkVsZW0oJ3Jvdy1ncnAnKTtcclxuICAgICAgICAgY29uc3QgbGFiZWwyID0gbGFiZWxFbGVtKCdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICByb3dncnAyLmFwcGVuZChsYWJlbDIsIHRleHRhcmVhKTtcclxuICAgICAgICAgLy9wcmlvcml0eVxyXG4gICAgICAgICBjb25zdCBzZWxlY3QgPSBzZWxlY3RFbGVtKCdwcmlvcml0eScsICdwcmlvcml0eScsIFtcclxuICAgICAgICAgICAgIG5ldyBPcHRpb24oJ0xvdycpLFxyXG4gICAgICAgICAgICAgbmV3IE9wdGlvbignTWVkaXVtJyksXHJcbiAgICAgICAgICAgICBuZXcgT3B0aW9uKCdIaWdoJyksXHJcbiAgICAgICAgIF0pO1xyXG4gICAgICAgICBjb25zdCByb3dncnAzID0gZGl2RWxlbSgncm93LWdycCcpO1xyXG4gICAgICAgICBjb25zdCBsYWJlbDMgPSBsYWJlbEVsZW0oJ3ByaW9yaXR5JywgJ1ByaW9yaXR5Jyk7XHJcbiAgICAgICAgIHJvd2dycDMuYXBwZW5kKGxhYmVsMywgc2VsZWN0KTtcclxuICAgICAgICAgLy8gZHVlIGRhdGVcclxuICAgICAgICAgY29uc3Qgcm93Z3JwMSA9IGRpdkVsZW0oJ3Jvdy1ncnAnKTtcclxuICAgICAgICAgY29uc3QgbGFiZWwxID0gbGFiZWxFbGVtKCdkYXRlLXBpY2tlcicsICdEdWUgRGF0ZScpO1xyXG4gICAgICAgICBjb25zdCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgZGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgICBkYXRlUGlja2VyLmlkID0gJ2RhdGUtcGlja2VyJztcclxuICAgICAgICAgcm93Z3JwMS5hcHBlbmQobGFiZWwxLGRhdGVQaWNrZXIpXHJcbiAgICAgICAgIHJvd2dycC5hcHBlbmQobGFiZWwsdGV4dEZpZWxkRWxlbTEscm93Z3JwMixyb3dncnAzICxyb3dncnAxKTtcclxuICAgICAgICAgY29uc3QgYWRkQnRuID0gYnV0dG9uRWxlbSgnQWRkJywgJ2FkZC1idG4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXBpY2tlcicpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGV4dGFyZWEnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICBpZih0YXNrTmFtZSA9PSAnJywgZHVlZGF0ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICBhbGVydCgnZGF0ZSBhbmQgdGFzayBuYW1lIGFyZSByZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGlkLHRhc2tOYW1lLCBpbWFnZXMuY2FsZW5kZXJUZXh0SWNvbiwgY3VycmVudFRhYixkdWVkYXRlLGRlc2NyaXB0aW9uLHByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgICB0YXNrc0xpc3QucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgICAgICBzdG9yZUl0ZW1zKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgIHJlc2V0Rm9yVGFza3NGb3JtKClcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGJ1dHRvbkVsZW0oJ0NhbmNlbCcsICdjYW5jZWwtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgcmVzZXRGb3JUYXNrc0Zvcm0oKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjb25zdCBidXR0b25zID0gZGl2RWxlbSgnYnV0dG9ucycpO1xyXG4gICAgICAgICBidXR0b25zLmFwcGVuZChhZGRCdG4sIGNhbmNlbEJ0bik7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBmb3JtLmFwcGVuZChyb3dncnAsIGJ1dHRvbnMpXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBtYWluLmFwcGVuZChmb3JtKVxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubWFpbicpO1xyXG4gICAgICAgICBtYWluLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgIC8vdGl0bGUobmFtZSlcclxuICAgICAgICAgY29uc3QgZm9ybSA9IGRpdkVsZW0oJ3BvcHVwLWZvcm0nKTtcclxuICAgICAgICAgY29uc3Qgcm93Z3JwID0gZGl2RWxlbSgncm93LWdycCcpO1xyXG4gICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsRWxlbSgndGFzay1uYW1lJywgJ1Byb2plY3QgTmFtZScpO1xyXG4gICAgICAgICBjb25zdCB0ZXh0RmllbGRFbGVtMSA9IHRleHRGaWVsZEVsZW0oJ3Rhc2stbmFtZScsICdlbnRlciB0YXNrIG5hbWUnKTtcclxuICAgICAgICAgdGV4dEZpZWxkRWxlbTEudmFsdWUgPSB0YXNrMS5uYW1lO1xyXG4gICAgICAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gdGV4dEFyZWFFbGVtKCd0YXNrLXRleHRhcmVhJyk7XHJcbiAgICAgICAgIHRleHRhcmVhLmlubmVyVGV4dCA9IHRhc2sxLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICB0ZXh0YXJlYS5yb3dzID0gMTA7XHJcbiAgICAgICAgIHRleHRhcmVhLmNvbHMgPSAxMDtcclxuICAgICAgICAgY29uc3Qgcm93Z3JwMiA9IGRpdkVsZW0oJ3Jvdy1ncnAnKTtcclxuICAgICAgICAgY29uc3QgbGFiZWwyID0gbGFiZWxFbGVtKCdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICByb3dncnAyLmFwcGVuZChsYWJlbDIsIHRleHRhcmVhKTtcclxuICAgICAgICAgLy9wcmlvcml0eVxyXG4gICAgICAgICBjb25zdCBzZWxlY3QgPSBzZWxlY3RFbGVtKCdwcmlvcml0eScsICdwcmlvcml0eScsIFtcclxuICAgICAgICAgICAgIG5ldyBPcHRpb24oJ0xvdycpLFxyXG4gICAgICAgICAgICAgbmV3IE9wdGlvbignTWVkaXVtJyksXHJcbiAgICAgICAgICAgICBuZXcgT3B0aW9uKCdIaWdoJyksXHJcbiAgICAgICAgIF0pO1xyXG4gICAgICAgICBjb25zdCByb3dncnAzID0gZGl2RWxlbSgncm93LWdycCcpO1xyXG4gICAgICAgICBjb25zdCBsYWJlbDMgPSBsYWJlbEVsZW0oJ3ByaW9yaXR5JywgJ1ByaW9yaXR5Jyk7XHJcbiAgICAgICAgIHNlbGVjdC52YWx1ZSA9IHRhc2sxLnByaW9yaXR5O1xyXG4gICAgICAgICByb3dncnAzLmFwcGVuZChsYWJlbDMsIHNlbGVjdCk7XHJcbiAgICAgICAgIC8vIGR1ZSBkYXRlXHJcbiAgICAgICAgIGNvbnN0IHJvd2dycDEgPSBkaXZFbGVtKCdyb3ctZ3JwJyk7XHJcbiAgICAgICAgIGNvbnN0IGxhYmVsMSA9IGxhYmVsRWxlbSgnZGF0ZS1waWNrZXInLCAnRHVlIERhdGUnKTtcclxuICAgICAgICAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgIGRhdGVQaWNrZXIudHlwZSA9ICdkYXRlJztcclxuICAgICAgICAgZGF0ZVBpY2tlci5pZCA9ICdkYXRlLXBpY2tlcic7XHJcbiAgICAgICAgIGRhdGVQaWNrZXIudmFsdWUgPSB0YXNrMS5kdWVkYXRlO1xyXG4gICAgICAgICByb3dncnAxLmFwcGVuZChsYWJlbDEsZGF0ZVBpY2tlcilcclxuICAgICAgICAgcm93Z3JwLmFwcGVuZChsYWJlbCx0ZXh0RmllbGRFbGVtMSxyb3dncnAyLHJvd2dycDMgLHJvd2dycDEpO1xyXG4gICAgICAgICBjb25zdCBhZGRCdG4gPSBidXR0b25FbGVtKCdVcGRhdGUnLCAnYWRkLWJ0bicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy91cGRhdGluZ1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1waWNrZXInKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRleHRhcmVhJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBpZih0YXNrTmFtZSA9PSAnJywgZHVlZGF0ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICBhbGVydCgnZGF0ZSBhbmQgdGFzayBuYW1lIGFyZSByZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgLy9yZW1vdmluZyBjdXJyZW50IG9iamVjdCBmcm9tIGxpc3RcclxuICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrc0xpc3QuaW5kZXhPZih0YXNrMSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrc0xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFzazEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgdGFzay5kdWVkYXRlID0gZHVlZGF0ZTtcclxuICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgIHRhc2submFtZSA9IHRhc2tOYW1lXHJcbiAgICAgICAgICAgICAgICAgcmVzZXRGb3JUYXNrc0Zvcm0oKVxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gYnV0dG9uRWxlbSgnQ2FuY2VsJywgJ2NhbmNlbC1idG4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICByZXNldEZvclRhc2tzRm9ybSgpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkaXZFbGVtKCdidXR0b25zJyk7XHJcbiAgICAgICAgIGJ1dHRvbnMuYXBwZW5kKGFkZEJ0biwgY2FuY2VsQnRuKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGZvcm0uYXBwZW5kKHJvd2dycCwgYnV0dG9ucylcclxuICAgICAgICAgXHJcbiAgICAgICAgIG1haW4uYXBwZW5kKGZvcm0pXHJcbiAgICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZVBvcHVwRm9yRGV0YWlscyh0YXNrID0gbmV3IFRhc2soKSkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5tYWluJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAvL3RpdGxlKG5hbWUpXHJcbiAgICBjb25zdCBkZXRhaWxzRm9ybSA9IGRpdkVsZW0oJ2RldGFpbHMtcG9wdXAtZm9ybScpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBwRWxlbShgVGl0bGU6ICR7dGFzay5uYW1lfWApO1xyXG4gICAgLy9kZXNjcmlwdGlvblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwRWxlbShgRGVzY3JpcHRpb246ICR7dGFzay5kZXNjcmlwdGlvbn1gKTtcclxuICAgIC8vcHJpb3JpdHlcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gcEVsZW0oYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YCk7XHJcbiAgICAvLyBkdWUgZGF0ZVxyXG4gICAgY29uc3QgZHVlZGF0ZSA9IHBFbGVtKGBEdWVEYXRlOiAke3Rhc2suZHVlZGF0ZX1gKTtcclxuICAgIC8vIGNhdGVnb3J5XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHBFbGVtKGBDYXRlZ29yeTogJHtjdXJyZW50VGFifWApO1xyXG5cclxuICAgIGRldGFpbHNGb3JtLmFwcGVuZChjYXRlZ29yeSx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcclxuICAgIGNvbnN0IGFkZEJ0biA9IGJ1dHRvbkVsZW0oJ0FkZCcsICdhZGQtYnRuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1waWNrZXInKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10ZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZih0YXNrTmFtZSA9PSAnJywgZHVlZGF0ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ2RhdGUgYW5kIHRhc2sgbmFtZSBhcmUgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soaWQsdGFza05hbWUsIGltYWdlcy5jYWxlbmRlclRleHRJY29uLCBjdXJyZW50VGFiLGR1ZWRhdGUsZGVzY3JpcHRpb24scHJpb3JpdHkpO1xyXG4gICAgICAgICAgICB0YXNrc0xpc3QucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgc3RvcmVJdGVtcyh0cnVlKTtcclxuICAgICAgICAgICAgcmVzZXRGb3JUYXNrc0Zvcm0oKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBidXR0b25FbGVtKCdDYW5jZWwnLCAnY2FuY2VsLWJ0bicsICgpID0+IHtcclxuICAgICAgICBoYW5kbGVEZXRhaWxzQ2FyZENhbmNlbCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkaXZFbGVtKCdidXR0b25zJyk7XHJcbiAgICBidXR0b25zLmFwcGVuZChjYW5jZWxCdG4pO1xyXG4gICAgZGV0YWlsc0Zvcm0uYXBwZW5kKGRlc2NyaXB0aW9uLCBidXR0b25zKVxyXG4gICAgbWFpbi5hcHBlbmQoZGV0YWlsc0Zvcm0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9yVGFza3NGb3JtKCkge1xyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5tYWluJyk7XHJcbiAgICBtYWluRGl2LmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gcEVsZW0oY3VycmVudFRhYiwgJ2hlYWRpbmcnKTtcclxuICAgIGNvbnN0IGFkZFRhc2tFbGVtZW50ID0gYWRkRWxlbWVudCgnQWRkIFRhc2snLCAnYWRkLXRhc2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWN0aXZhdGVQb3B1cEZvclRhc2tzKCk7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgY29uc3QgdGFiVGFza3MgPSB0YXNrc0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5jYXRlZ29yeSA9PT0gY3VycmVudFRhYik7XHJcbiAgICBsZXQgdGFiVGFza3NFbGVtcyA9IFtdO1xyXG4gICAgaWYodGFiVGFza3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgdGFiVGFza3NFbGVtcyA9IHRhYlRhc2tzLm1hcCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRpdkVsZW0oJ3Rhc2snKVxyXG4gICAgICAgICAgICBjb25zdCBwID0gcEVsZW0odGFzay5uYW1lKTtcclxuICAgICAgICAgICAgdXBkYXRlVWlGb3JDb21wbGV0ZWQodGFzaywgcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gcmFkaW9FbGVtKHRhc2suaWQsIHRhc2submFtZSk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzRG9uZTtcclxuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBpc0RvbmUodGFzaykpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU1hcmtlciA9IGRpdkVsZW0oJ3ByaW9yaXR5LW1hcmtlcicpO1xyXG4gICAgICAgICAgICBpZih0YXNrLnByaW9yaXR5ID09ICdIaWdoJykge1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaGlnaC1jb2xvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykge1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWVkaXVtLWNvbG9yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93Jykge1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93LWNvbG9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGRpdkVsZW0oJ3Rhc2stbGVmdCcpO1xyXG4gICAgICAgICAgICBsZWZ0LmFwcGVuZChwcmlvcml0eU1hcmtlciwgY2hlY2tib3gsIHApO1xyXG4gICAgICAgICAgLy9kZXRhaWxzIGRhdGUgYW5kIGRlbGV0ZVxyXG4gICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gZGl2RWxlbSgndGFzay1yaWdodCcpO1xyXG4gICAgICAgICAgLy8gZGV0YWlsc1xyXG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGJ1dHRvbkVsZW0oJ0RldGFpbHMnLGBkZXRhaWxzLWJ0biMke3Rhc2suaWR9YCwgKGUpID0+IHtcclxuICAgICAgICAgICAgYWN0aXZhdGVQb3B1cEZvckRldGFpbHModGFzaylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGV0YWlscy5pZCA9IGBkZXRhaWxzLWJ0biMke3Rhc2suaWR9YDtcclxuICAgICAgICAgIC8vZGVsZXRlXHJcbiAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBpbWFnZUVsZW0oaW1hZ2VzLmRlbGV0ZUljb24yLCdkZWxldGUtaWNvbicsICdkZWxldGUtaWNvbicpO1xyXG4gICAgICAgICAgZGVsZXRlQnRuLmlkID0gdGFzay5pZDtcclxuICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZURlbGV0ZUJ0bih0YXNrKSk7XHJcbiAgICAgICAgICAvL2VkaXRcclxuICAgICAgICAgIGNvbnN0IGVkaXQgPSBpbWFnZUVsZW0oaW1hZ2VzLmVkaXRJY29uLCAnZWRpdC1pY29uJywgJ2VkaXQtaWNvbicpO1xyXG4gICAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBlZGl0VGFzayh0YXNrKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL2R1ZWRhdGVcclxuICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBwRWxlbSh0YXNrLmR1ZWRhdGUpO1xyXG4gICAgICAgICAgcmlnaHQuYXBwZW5kKGR1ZWRhdGUgLGRldGFpbHMsZWRpdCAsZGVsZXRlQnRuKVxyXG4gICAgICAgICAgd3JhcHBlci5hcHBlbmQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICAgfSk7XHJcbiAgfVxyXG4gICAgdGFiVGFza3NFbGVtcy5sZW5ndGggPT09IDA/IG1haW5EaXYuYXBwZW5kKGhlYWRpbmcsYWRkVGFza0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWFpbkRpdi5hcHBlbmQoaGVhZGluZywgLi4udGFiVGFza3NFbGVtcyAsYWRkVGFza0VsZW1lbnQpIDtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2sodGFzayA9IG5ldyBUYXNrKCkpIHtcclxuICAgIGFjdGl2YXRlUG9wdXBGb3JUYXNrcyh0YXNrKVxyXG59XHJcbiAgIFxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVCdG4odGFzaykge1xyXG4gICAgY29uc3QgaXRlbSA9IHRhc2tzTGlzdC5maWx0ZXIodGFzazEgPT4gdGFzazEuaWQgPT0gdGFzay5pZCk7XHJcbiAgICBjb25zdCBpbmRleCA9IHRhc2tzTGlzdC5pbmRleE9mKGl0ZW1bMF0pO1xyXG4gICAgdGFza3NMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzdG9yZUl0ZW1zKHRydWUpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGJvZHkuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgIHJ1bigpO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURldGFpbHNDYXJkQ2FuY2VsKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGJvZHkuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgIHJ1bihjdXJyZW50VGFiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEb25lKHRhc2spIHtcclxuICAgY29uc3QgaW5kZXggPSB0YXNrc0xpc3QuaW5kZXhPZih0YXNrKTtcclxuICAgdGFza3NMaXN0W2luZGV4XS5pc0RvbmUgPSAhIHRhc2tzTGlzdFtpbmRleF0uaXNEb25lO1xyXG4gICBzdG9yZUl0ZW1zKHRydWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVVaUZvckNvbXBsZXRlZCh0YXNrLCBwKSB7XHJcbiAgICAvLyBpZih0YXNrLmlzRG9uZSA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgcC5jbGFzc0xpc3QuYWRkKCdpcy1kb25lJyk7ICAgICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAvLyBwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRvbmUnKTtcclxufSIsImltcG9ydCBpbWFnZXMgZnJvbSBcIi4uLy4uLy4uL3RvZG8tbGlzdC9zcmMvdXRpbHMvaW1hZ2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZJdGVtIHtcclxuICAgY29uc3RydWN0b3IobmFtZSwgaWNvbiA9IGltYWdlcy5jYWxlbmRlclRleHRJY29uKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuaWNvbiA9IGljb247XHJcbiAgIH1cclxufSAiLCJpbXBvcnQgaW1hZ2VzIGZyb20gXCIuLi8uLi8uLi90b2RvLWxpc3Qvc3JjL3V0aWxzL2ltYWdlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCxuYW1lLCBpY29uID0gaW1hZ2VzLmNhbGVuZGVyVGV4dEljb24sIGNhdGVnb3J5LCBkdWVkYXRlLCBkZXNjcmlwdGlvbixwcmlvcml0eSwgaXNEb25lID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IGltYWdlcyBmcm9tIFwiLi9pbWFnZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwRWxlbSh0ZXh0LGNsYXNzTmFtZSkge1xyXG4gICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICBwLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICByZXR1cm4gcDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdkVsZW0oY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxFbGVtKGlkLHRleHQpIHtcclxuICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICBsYWJlbC5mb3IgPSBpZDtcclxuICAgbGFiZWwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgcmV0dXJuIGxhYmVsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGV4dEZpZWxkRWxlbShpZCwgcGxhY2Vob2xkZXIpIHtcclxuICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xyXG4gICBpbnB1dC5zdHlsZS5jc3NUZXh0ID0gJ2ZvbnQtc2l6ZTogaW5oZXJpdDsnO1xyXG4gICBpbnB1dC5pZCA9IGlkO1xyXG4gICByZXR1cm4gaW5wdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUVsZW0oc3JjLCBhbHQsY2xhc3NOYW1lKSB7XHJcbiAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgaW1hZ2UuYWx0ID0gYWx0O1xyXG4gICBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBpbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgIHJldHVybiBpbWFnZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVsZW1lbnQodGV4dCwgY2xhc3NOYW1lLCBvbmNsaWNrZWQpIHtcclxuICAgLy8gY29uc3Qgd3JhcHBlciA9IGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkPyBkaXZFbGVtKCkgOiBkaXZFbGVtKGNsYXNzTmFtZSk7XHJcbiAgIGNvbnN0IHdyYXBwZXIxID0gZGl2RWxlbShjbGFzc05hbWUpO1xyXG4gICBjb25zdCBpbWFnZSA9IGltYWdlRWxlbShpbWFnZXMucGx1c0ljb24sICdhZGQtaWNvbicsICdhZGQtaWNvbicpO1xyXG4gICB3cmFwcGVyMS5hcHBlbmQoaW1hZ2UsIHRleHQpO1xyXG4gICB3cmFwcGVyMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2tlZCk7XHJcbiAgIC8vIHdyYXBwZXIuYXBwZW5kKHdyYXBwZXIxKTtcclxuICAgcmV0dXJuIHdyYXBwZXIxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uRWxlbSh0ZXh0LCBjbGFzc05hbWUsIGNhbGxiYWNrKSB7XHJcbiAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgYnV0dG9uLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiBpbmhlcml0JztcclxuICAgY2FsbGJhY2sgIT09IG51bGwgJiYgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xyXG4gICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFkaW9FbGVtKGlkLCBuYW1lLCBvbmNsaWNrZWQpIHtcclxuICAgY29uc3QgY2hlY2tib3g9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICBjaGVja2JveC5pZCA9IGlkO1xyXG4gICBjaGVja2JveC5uYW1lID0gbmFtZTtcclxuICAgb25jbGlja2VkID09PSB1bmRlZmluZWQ/IG51bGwgOiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2tlZCk7XHJcbiAgIHJldHVybiBjaGVja2JveDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRleHRBcmVhRWxlbShpZCxwbGFjZWhvbGRlcixjbGFzc05hbWUpIHtcclxuICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICBpZihwbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkKSB0ZXh0YXJlYS5pbm5lclRleHQgPSBwbGFjZWhvbGRlcjtcclxuICAgdGV4dGFyZWEuaWQgPSBpZDtcclxuICAgY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICByZXR1cm4gdGV4dGFyZWE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RFbGVtKGlkLG5hbWUsIG9wdGlvbnMgPSBbXSkge1xyXG4gICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xyXG4gICBzZWxlY3QuaWQgPSBpZDtcclxuICAgY29uc3QgaXRlbXMgPSBvcHRpb25zLm1hcChpdGVtID0+IHtcclxuICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICB9KTtcclxuICAgc2VsZWN0LmFwcGVuZCguLi5pdGVtcyk7XHJcbiAgIHJldHVybiBzZWxlY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpYWxvZ0VsZW0oKSB7XHJcbiAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICBjb25zdCBwID0gcEVsZW0oJ2hlbGxvIHdvcmxkJyk7XHJcbiAgIGRpYWxvZy5hcHBlbmQocCk7XHJcbiAgIHJldHVybiBkaWFsb2c7XHJcbn0iLCJpbXBvcnQgcGx1c0ljb24gZnJvbSAnLi4vYXNzZXRzL3BsdXMuc3ZnJztcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xyXG5pbXBvcnQgY2FsZW5kZXJUZXh0SWNvbiBmcm9tICcuLi9hc3NldHMvY2FsZW5kYXItdGV4dC5zdmcnO1xyXG5pbXBvcnQgY29tcGxldGVkVGFza0ljb24gZnJvbSAnLi4vYXNzZXRzL2NvbXBsZXRlZC10YXNrLnN2Zyc7XHJcbmltcG9ydCBjYWxlbmRlclNlYXJjaEljb24gZnJvbSAnLi4vYXNzZXRzL2NhbGVuZGFyLXNlYXJjaC5zdmcnO1xyXG5pbXBvcnQgY2FsZW5kZXJFZGl0SWNvbiBmcm9tICcuLi9hc3NldHMvY2FsZW5kYXItZWRpdC5zdmcnO1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuLi9hc3NldHMvcHJvamVjdC5wbmcnO1xyXG5pbXBvcnQgcHJvamVjdDEgZnJvbSAnLi4vYXNzZXRzL3Byb2plY3QxLnBuZyc7XHJcbmltcG9ydCBkZWxldGVJY29uMiBmcm9tICcuLi9hc3NldHMvZGVsZXRlLWZvcmV2ZXIuc3ZnJztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4uL2Fzc2V0cy9wZW5jaWwuc3ZnJztcclxuaW1wb3J0IHByb2plY3QyIGZyb20gJy4uL2Fzc2V0cy9mb2xkZXIuc3ZnJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwbHVzSWNvbixcclxuICAgIGRlbGV0ZUljb24sXHJcbiAgICBjYWxlbmRlckVkaXRJY29uLFxyXG4gICAgY2FsZW5kZXJTZWFyY2hJY29uLFxyXG4gICAgY2FsZW5kZXJUZXh0SWNvbixcclxuICAgIGNvbXBsZXRlZFRhc2tJY29uLFxyXG4gICAgcHJvamVjdCxcclxuICAgIHByb2plY3QxLFxyXG4gICAgZGVsZXRlSWNvbjIsXHJcbiAgICBlZGl0SWNvbixcclxuICAgIHByb2plY3QyLFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcnVuIH0gZnJvbSAnLi9tb2RlbHMvZmVhdHVyZXMvbmF2LWJhci9uYXYtYmFyJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5ydW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9