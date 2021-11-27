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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#container {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-gap: 5px;\n  grid-template-rows:  1fr minmax(80%, auto) 7fr;\n}\n\n#container > :nth-child(odd) {\n  background-color: #A9A9A9;\n}\n#container > :nth-child(even) {\n  background-color: #D3D3D3;\n}\n\n#todaysTasks {\n  color: purple;\n  position: absolute;\n  bottom: 0px;\n}\n\n#projectList {\n  position: relative;\n}\n\nh1 {\n  background-color: silver;\n}\n\nbody {\n  background-color: silver;\n}\n\n.task {\n  padding: 2px;\n  margin: 1px;\n  border: black;\n}\n\n.project {\n  padding: 1px;\n  border: 1px outset white;\n  min-height: 20px;\n  background-color: #9E9E9E;\n}\n\n#taskForm > button, label, input, select {\n  margin: 3px;\n}\n\ndiv > button, input {\n  margin: 3px;\n}\n\n#addProject {\n  background-color: #A9A9A9\n}\n\n.icon {\n  height: 18px;\n  width: 18px;\n  position: relative;\n  float: right;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,8CAA8C;AAChD;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd","sourcesContent":["#container {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-gap: 5px;\n  grid-template-rows:  1fr minmax(80%, auto) 7fr;\n}\n\n#container > :nth-child(odd) {\n  background-color: #A9A9A9;\n}\n#container > :nth-child(even) {\n  background-color: #D3D3D3;\n}\n\n#todaysTasks {\n  color: purple;\n  position: absolute;\n  bottom: 0px;\n}\n\n#projectList {\n  position: relative;\n}\n\nh1 {\n  background-color: silver;\n}\n\nbody {\n  background-color: silver;\n}\n\n.task {\n  padding: 2px;\n  margin: 1px;\n  border: black;\n}\n\n.project {\n  padding: 1px;\n  border: 1px outset white;\n  min-height: 20px;\n  background-color: #9E9E9E;\n}\n\n#taskForm > button, label, input, select {\n  margin: 3px;\n}\n\ndiv > button, input {\n  margin: 3px;\n}\n\n#addProject {\n  background-color: #A9A9A9\n}\n\n.icon {\n  height: 18px;\n  width: 18px;\n  position: relative;\n  float: right;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DOMlogic.js":
/*!*************************!*\
  !*** ./src/DOMlogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectList": () => (/* binding */ renderProjectList),
/* harmony export */   "appendTodaysTasksElement": () => (/* binding */ appendTodaysTasksElement),
/* harmony export */   "appendProjectElement": () => (/* binding */ appendProjectElement),
/* harmony export */   "appendAddTaskButton": () => (/* binding */ appendAddTaskButton),
/* harmony export */   "appendTaskElement": () => (/* binding */ appendTaskElement),
/* harmony export */   "appendAddProjectInput": () => (/* binding */ appendAddProjectInput),
/* harmony export */   "appendAddProjectButton": () => (/* binding */ appendAddProjectButton),
/* harmony export */   "clearTaskList": () => (/* binding */ clearTaskList),
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "setProjectTitle": () => (/* binding */ setProjectTitle),
/* harmony export */   "removeTaskInputForm": () => (/* binding */ removeTaskInputForm),
/* harmony export */   "removeAddTaskButton": () => (/* binding */ removeAddTaskButton),
/* harmony export */   "appendInputForm": () => (/* binding */ appendInputForm),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "editProject": () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
//all dom related things goes in here




const renderProjectList = function() {

  Object.keys(_app_js__WEBPACK_IMPORTED_MODULE_2__.storage).forEach(function(key){
    if(key !== "today's tasks") {
      appendProjectElement(key)
    }
  })
  appendAddProjectButton();
  appendTodaysTasksElement();

  //document.querySelector('#projectList')
}

const appendTodaysTasksElement = function() {
  document.querySelector('#projectList').appendChild((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createTodaysTasksElement)());
}

const appendProjectElement = function(projectName) {
  const projectList = document.querySelector('#projectList');
  projectList.appendChild((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createProjectElementFromInput)(projectName))
}

const appendAddTaskButton = function() {
  document.querySelector('#taskList').appendChild((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createAddTaskButton)())
}

const appendTaskElement = function(taskTitle){
  const taskElement = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createTaskElement)(taskTitle);
  document.querySelector('#taskList').appendChild(taskElement)
}

const appendAddProjectInput = function() {
  const addButton = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  projectList.removeChild(addButton)
  projectList.appendChild((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createAddProjectInput)())
  document.querySelector('#addProjectInput').focus();
}

const appendAddProjectButton = function() {
  const addProjectButton = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  if(!addProjectButton) {
    projectList.appendChild((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createAddProjectButton)())
  }
}

const clearTaskList = function() {
  const parent = document.querySelector('#taskList')
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const renderTaskList = function(projectName) {
  //remove the current task list and bring in all the associated tasks from the storage compartment of our shit
  //projectName is going to be a string that is a key in my storage

  clearTaskList();
  if(_app_js__WEBPACK_IMPORTED_MODULE_2__.storage[projectName]){
    _app_js__WEBPACK_IMPORTED_MODULE_2__.storage[projectName].tasks.forEach(element => {
      appendTaskElement(element.title)
    })
  } else {
    console.log('catch render error')
  }

  appendAddTaskButton()

  /*for (let i = 0; i < storage.tasks.length; i++) {
    appendTaskElement(storage.tasks[i].title)
  }

  */
}

const setProjectTitle = function(title) {
  const h3 = document.createElement('h3')
  h3.innerHTML = title;
  const projectTitle = document.querySelector('#projectTitle')
  const projectName = projectTitle.firstElementChild;

  console.log(h3);
  if(projectName) {
    projectTitle.removeChild(projectName);

  }
  projectTitle.appendChild(h3);
}

const removeTaskInputForm = function() {
  if(document.querySelector('#taskList').lastElementChild.id === 'taskForm') {
    document.querySelector('#taskList').lastElementChild.remove()
    return true;
  };
  return false;

}

const removeAddTaskButton = function() {
  if (document.querySelector('#addTask')) {
    const taskList = document.querySelector('#taskList')
    const addButton = document.querySelector('#addTask')
    taskList.removeChild(addButton)
  }

}



const appendInputForm = function() {
  //remove addTask button and then append Input form, after input form is submitted we will...
  //create a task from that input form, remove the input form, append the task, slap the button back on
  document.querySelector('#taskList').appendChild((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.createInputForm)())


}

const removeProject = function(projectName) {
  projectName.remove();
  const newProject = document.querySelector('.project');
  console.log(newProject)
  setProjectTitle(newProject.innerText)
  renderTaskList(newProject.innerText)
  console.log(newProject.innerText)

}

const editProject = function(projectName) {

}

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "localStorage": () => (/* binding */ localStorage),
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialization.js */ "./src/initialization.js");




const addTaskButton = document.querySelector('#addTask');
const container = document.querySelector('#container');
const projects = document.querySelectorAll('.project');
const tasks = document.querySelectorAll('.task');
const localStorage = window.localStorage;

let storage = {};

(0,_initialization_js__WEBPACK_IMPORTED_MODULE_1__.initialization)();

/* storage structure will look like:

{project1: {tasks: [{title , date , details , priority}, {title , date , details , priority}]
            description: 'a short description of our project here'                          },
 project2: {tasks: [{array of objects, each object describing a single task}]
            description: 'a short description of our project here'                          }
}


const storage = {}
storage['default project'] =
{'tasks' : [{'title': 'placeholder', 'date': '03/03/03', 'details': 'some deets here', 'priority': 'high'}],
'description': 'a brief description of the project at hand'};
*/

//needs to be organized lmao





































//addTaskButton.addEventListener('click', 'appendInputForm')



//taskInputForm













































/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialization": () => (/* binding */ initialization)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _DOMlogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMlogic.js */ "./src/DOMlogic.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");





const initialization = function() {
  if (window.localStorage.length === 0) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.defaultStorage)();
    (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)();
    const title = Object.keys(_app_js__WEBPACK_IMPORTED_MODULE_2__.storage)[0]
    ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_1__.setProjectTitle)(title)
    ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)(title)
  } else {
    Object.keys(window.localStorage).forEach(function(key){
      _app_js__WEBPACK_IMPORTED_MODULE_2__.storage[key] = JSON.parse(window.localStorage.getItem(key))
    })
    ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)();
    const title = Object.keys(_app_js__WEBPACK_IMPORTED_MODULE_2__.storage)[0]
    ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_1__.setProjectTitle)(title)
    ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)(title)

    // for (const key of localStorage) {
    //   storage[key] = JSON.parse(localStorage[key]);

    // }
  }
}

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddTaskButton": () => (/* binding */ createAddTaskButton),
/* harmony export */   "createProjectElementFromInput": () => (/* binding */ createProjectElementFromInput),
/* harmony export */   "createProjectObject": () => (/* binding */ createProjectObject),
/* harmony export */   "createTaskFromInput": () => (/* binding */ createTaskFromInput),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "createAddProjectInput": () => (/* binding */ createAddProjectInput),
/* harmony export */   "createAddProjectButton": () => (/* binding */ createAddProjectButton),
/* harmony export */   "createInputForm": () => (/* binding */ createInputForm),
/* harmony export */   "createTaskElement": () => (/* binding */ createTaskElement),
/* harmony export */   "createTodaysTasksElement": () => (/* binding */ createTodaysTasksElement),
/* harmony export */   "handleCancelAddProjectButton": () => (/* binding */ handleCancelAddProjectButton),
/* harmony export */   "handleCancelAddTaskButton": () => (/* binding */ handleCancelAddTaskButton),
/* harmony export */   "handleAddTaskSubmitButton": () => (/* binding */ handleAddTaskSubmitButton),
/* harmony export */   "handleAddTaskButton": () => (/* binding */ handleAddTaskButton),
/* harmony export */   "handleAddProjectSubmitButton": () => (/* binding */ handleAddProjectSubmitButton),
/* harmony export */   "handleProjectClick": () => (/* binding */ handleProjectClick),
/* harmony export */   "handleDeleteProjectClick": () => (/* binding */ handleDeleteProjectClick),
/* harmony export */   "handleEditProjectSubmit": () => (/* binding */ handleEditProjectSubmit),
/* harmony export */   "handleEditProjectClick": () => (/* binding */ handleEditProjectClick)
/* harmony export */ });
/* harmony import */ var _DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMlogic.js */ "./src/DOMlogic.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit.png */ "./edit.png");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete.png */ "./delete.png");
//logic for how we handle different events shall go in here






const createAddTaskButton = function() {
  //<button id='addTask' onClick='appendInputForm'>Add Task</button>
  const button = document.createElement('button');
  button.setAttribute('id', 'addTask')
  button.addEventListener('click', handleAddTaskButton)

  button.innerHTML = 'Add Task'

  return button;
}

const createProjectElementFromInput = function(projectName) {
  const projectElement = document.createElement('div');
  projectElement.innerHTML = projectName;
  projectElement.setAttribute('class','project')
  projectElement.addEventListener('click',handleProjectClick)



  const buttons = document.createElement('span')

  const edit = new Image();
  edit.src = _edit_png__WEBPACK_IMPORTED_MODULE_3__;
  edit.classList.add('edit')
  edit.classList.add('icon')
  edit.addEventListener('click', handleEditProjectClick)

  buttons.appendChild(edit);

  const deleteIcon = new Image();
  deleteIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_4__;
  deleteIcon.classList.add('delete')
  deleteIcon.classList.add('icon')
  deleteIcon.addEventListener('click',handleDeleteProjectClick)

  buttons.appendChild(deleteIcon);

  projectElement.appendChild(buttons);




  return projectElement;
}

const createProjectObject = function() {
  return {
    'tasks': [],
    'description':''
  }
}

const createTaskFromInput = function() {
  const task = {}
  task.title = document.querySelector('#title').value  ||'default task'
  task.description = document.querySelector('#description').value || ''
  task.date = document.querySelector('#date').value || ''
  task.priority = document.querySelector('#priority').value || ''
  task.project = document.querySelector('#projectTitle').firstChild.innerText
  return task;
}

const createTask = function(title, description, date, priority) {
  const task = {}
  task.title = title
  task.description = description
  task.date = date
  task.priority = priority

  return task;
}

const createAddProjectInput = function() {
  const main = document.createElement('div')
  main.setAttribute('id', 'addProject')

  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('id','addProjectInput')

  const div = document.createElement('div')


  const add = document.createElement('button')
  const cancel = document.createElement('button')
  add.innerHTML = 'Add'
  cancel.innerHTML = 'Cancel'
  cancel.addEventListener('click', handleCancelAddProjectButton)
  add.addEventListener('click', handleAddProjectSubmitButton)
  div.appendChild(add)
  div.appendChild(cancel)
  main.appendChild(input);
  main.appendChild(div);

  input.setAttribute('autofocus','true')

  input.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddProjectSubmitButton();
    }
  });

  return main;


}

const createAddProjectButton = function () {
  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('id', 'addProject')
  addProjectButton.innerHTML = 'Add Project'
  addProjectButton.addEventListener('click', _DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.appendAddProjectInput)
  return addProjectButton;
}

const createInputForm = function() {
  const main = document.createElement('div')
  main.id = 'taskForm'

  const titleLabel = document.createElement('label')
  titleLabel.setAttribute('for','title')
  titleLabel.innerHTML = 'Task Name'

  const titleInput = document.createElement('input')
  titleInput.setAttribute('type','text')
  titleInput.setAttribute('id','title')

  main.appendChild(titleLabel);
  main.appendChild(titleInput);

  const dateInput = document.createElement('input')
  dateInput.setAttribute('type','date')
  dateInput.setAttribute('id','date')
  main.appendChild(dateInput);

  const priorityLabel = document.createElement('label')
  priorityLabel.setAttribute('for','priority')
  priorityLabel.innerHTML = 'Priority'
  const prioritySelect = document.createElement('select')
  prioritySelect.setAttribute('id','priority')
  prioritySelect.setAttribute('name', 'priority')

  const highOption = document.createElement('option');
  highOption.setAttribute('value','high')
  highOption.innerHTML = 'High'

  const mediumOption = document.createElement('option')
  mediumOption.setAttribute('value', 'medium')
  mediumOption.innerHTML = 'Medium'

  const lowOption = document.createElement('option')
  lowOption.setAttribute('value','low')
  lowOption.innerHTML = 'Low';

  prioritySelect.appendChild(highOption)
  prioritySelect.appendChild(mediumOption)
  prioritySelect.appendChild(lowOption)
  main.appendChild(priorityLabel)
  main.appendChild(prioritySelect)

  const descriptionLabel = document.createElement('label')
  descriptionLabel.setAttribute('for','description')
  descriptionLabel.innerHTML = 'Task Description'
  const descriptionInput = document.createElement('input')
  descriptionInput.setAttribute('type','text')
  descriptionInput.setAttribute('id', 'description')

  main.appendChild(descriptionLabel)
  main.appendChild(descriptionInput)

  const div = document.createElement('div');

  const submit = document.createElement('button')
  const cancel = document.createElement('button')
  submit.innerHTML = 'Submit'
  cancel.innerHTML = 'Cancel'
  cancel.addEventListener('click', handleCancelAddTaskButton)
  submit.addEventListener('click', handleAddTaskSubmitButton)
  div.appendChild(submit)
  div.appendChild(cancel)

  main.appendChild(div);
  //submit.setAttribute('onsubmit', 'createTaskFromInput')


  descriptionInput.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddTaskSubmitButton();
    }
  });

  titleInput.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddTaskSubmitButton();
    }
  });

  dateInput.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddTaskSubmitButton();
    }
  });



  return main;
}

const createTaskElement = function (taskTitle) {
  const div = document.createElement('div');
  div.setAttribute('class','tasks')
  div.innerHTML = taskTitle;

  return div;
}

const createTodaysTasksElement = function() {
  const div = document.createElement('div');
  div.setAttribute('id', 'todaysTasks')

  const todaysTask = document.createElement('div')
  todaysTask.setAttribute('class', 'project')
  todaysTask.innerHTML = "today's tasks"

  div.appendChild(todaysTask);
  todaysTask.addEventListener('click',handleProjectClick)

  return div;
}

const handleCancelAddProjectButton = function() {
  const projectInputForm = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  projectList.removeChild(projectInputForm)
  projectList.appendChild(createAddProjectButton())
}

const handleCancelAddTaskButton = function() {
  console.log(this)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.removeTaskInputForm)();
  (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.appendAddTaskButton)();
}

const todaysDate = function() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

return today;
}

const handleAddTaskSubmitButton = function () {
  //create task from input, save it to storage, render page from storage (using storage/state to append things)
  //remove input form, return addTask button
  const task = createTaskFromInput();
  const projectName = document.querySelector('#projectTitle').firstElementChild.innerHTML
  console.log(task)

  if(task.date === todaysDate()) {
    _app_js__WEBPACK_IMPORTED_MODULE_2__.storage["today's tasks"].tasks.push(task)
    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskToTodaysTasks)()

  }

  const currentProject = _app_js__WEBPACK_IMPORTED_MODULE_2__.storage[projectName]; //{tasks: [], description: ''}
  currentProject.tasks.push(task)
  const taskElement = createTaskElement(task.title)

  ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskToStorage)(projectName)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.removeTaskInputForm)();
  (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.appendTaskElement)(task.title)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.appendAddTaskButton)();
}

const handleAddTaskButton = function() {
  if(!document.querySelector('#taskForm')) {
    (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.removeAddTaskButton)();
    (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.appendInputForm)();
  }
  document.querySelector('#title').focus();

}

const handleAddProjectSubmitButton = function() {
  const projectName = document.querySelector('#addProjectInput').value
  if (projectName === '') {
    alert('please name your project!')
    return;
  }
  const projectList = document.querySelector('#projectList');
  const projectInputForm = document.querySelector('#addProject')
  if(!_app_js__WEBPACK_IMPORTED_MODULE_2__.storage[projectName]) {

  projectList.removeChild(projectInputForm)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.appendProjectElement)(projectName);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToStorage)(projectName)
  projectList.appendChild(createAddProjectButton())
  } else {
    alert('projects must be a different name!')
  }
}





const handleProjectClick = function() {
  if(this.firstElementChild.tagName === 'INPUT') {

    return;
  }
  const title = this.innerText;
  console.log(title);
  (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.setProjectTitle)(title)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)(title)
  //renderTaskList()
}

const handleDeleteProjectClick = function (event) {
  const projectElement = this.parentNode.parentNode;
  console.log(projectElement)
  ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectElement.innerText)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectElement)
  event.stopPropagation();
}


const handleEditProjectSubmit = function(currentName, newName) {
  ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.editProjectName)(currentName, newName)

}

const handleEditProjectClick = function(event) {
  const projectElement = this.parentNode.parentNode;
  const projectName = projectElement.innerText;
  console.log(projectElement, projectName)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.setProjectTitle)(projectName);
  (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)(projectName)
  const inputForm = document.createElement('input');
  inputForm.setAttribute('autofocus','true')
  inputForm.setAttribute('type','text')

  projectElement.innerText = ''
  inputForm.value = projectName;
  inputForm.focus();

  /*inputForm.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      const newName = inputForm.value
      handleEditProjectSubmit(projectName, newName);
    }
  });*/

  projectElement.appendChild(inputForm);









  event.stopPropagation();

}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultStorage": () => (/* binding */ defaultStorage),
/* harmony export */   "saveProjectToStorage": () => (/* binding */ saveProjectToStorage),
/* harmony export */   "saveTaskToStorage": () => (/* binding */ saveTaskToStorage),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "saveTaskToTodaysTasks": () => (/* binding */ saveTaskToTodaysTasks)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
//all logic relating to storage goes here



const localStorage = window.localStorage;

const defaultStorage = function () {
  _app_js__WEBPACK_IMPORTED_MODULE_1__.storage["default project"] = {
    'tasks': [],
    'description': ''
  };
  _app_js__WEBPACK_IMPORTED_MODULE_1__.storage["today's tasks"] = {
    'tasks': [],
    'description': ''
  };
  localStorage.setItem("today's tasks", JSON.stringify(_app_js__WEBPACK_IMPORTED_MODULE_1__.storage["today's tasks"]))
  _app_js__WEBPACK_IMPORTED_MODULE_1__.storage["default project"].tasks.push((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.createTask)('default task', '', '', 'Low', 'default project'))
  localStorage.setItem('default project', JSON.stringify(_app_js__WEBPACK_IMPORTED_MODULE_1__.storage["default project"]))
}

const saveProjectToStorage = function(projectName) {
  _app_js__WEBPACK_IMPORTED_MODULE_1__.storage[projectName] = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.createProjectObject)();
  localStorage.setItem(projectName, JSON.stringify((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.createProjectObject)()));

}

const saveTaskToStorage = function(projectName) {
  const project = _app_js__WEBPACK_IMPORTED_MODULE_1__.storage[projectName]
  localStorage.removeItem(projectName)
  localStorage.setItem(projectName, JSON.stringify(project))

}

const deleteProject = function(projectName) {
  const project = _app_js__WEBPACK_IMPORTED_MODULE_1__.storage[projectName]

  _app_js__WEBPACK_IMPORTED_MODULE_1__.storage["today's tasks"].tasks.forEach((element, index, object) => {
    if(element.project === projectName) {
      object.splice(index,1)
    }
  })
  saveTaskToTodaysTasks();

  localStorage.removeItem(projectName)
  delete _app_js__WEBPACK_IMPORTED_MODULE_1__.storage[projectName];


}

const saveTaskToTodaysTasks = function() {
  const todaysTasks = _app_js__WEBPACK_IMPORTED_MODULE_1__.storage["today's tasks"];
  localStorage.removeItem(todaysTasks)
  localStorage.setItem("today's tasks", JSON.stringify(todaysTasks))
}

/*export const editProjectName = function(currentName, newName) {
  const currentProject = storage[currentName];
  storage[newName] = currentProject
  localStorage.removeItem(currentName);
  localStorage.setItem(newName, JSON.stringify(currentProject))
  delete storage[currentName]

}*/

/***/ }),

/***/ "./delete.png":
/*!********************!*\
  !*** ./delete.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97405d90a9e9a397d1fd.png";

/***/ }),

/***/ "./edit.png":
/*!******************!*\
  !*** ./edit.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f69390cbd68d6a92fc3.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL0RPTWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luaXRpYWxpemF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICAxZnIgbWlubWF4KDgwJSwgYXV0bykgN2ZyO1xcbn1cXG5cXG4jY29udGFpbmVyID4gOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBOUE5QTk7XFxufVxcbiNjb250YWluZXIgPiA6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XFxufVxcblxcbiN0b2RheXNUYXNrcyB7XFxuICBjb2xvcjogcHVycGxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMXB4O1xcbiAgYm9yZGVyOiBibGFjaztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgYm9yZGVyOiAxcHggb3V0c2V0IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5RTlFOUU7XFxufVxcblxcbiN0YXNrRm9ybSA+IGJ1dHRvbiwgbGFiZWwsIGlucHV0LCBzZWxlY3Qge1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcblxcbmRpdiA+IGJ1dHRvbiwgaW5wdXQge1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBOUE5QTlcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogcmlnaHQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICAxZnIgbWlubWF4KDgwJSwgYXV0bykgN2ZyO1xcbn1cXG5cXG4jY29udGFpbmVyID4gOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBOUE5QTk7XFxufVxcbiNjb250YWluZXIgPiA6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XFxufVxcblxcbiN0b2RheXNUYXNrcyB7XFxuICBjb2xvcjogcHVycGxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMXB4O1xcbiAgYm9yZGVyOiBibGFjaztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgYm9yZGVyOiAxcHggb3V0c2V0IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5RTlFOUU7XFxufVxcblxcbiN0YXNrRm9ybSA+IGJ1dHRvbiwgbGFiZWwsIGlucHV0LCBzZWxlY3Qge1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcblxcbmRpdiA+IGJ1dHRvbiwgaW5wdXQge1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBOUE5QTlcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogcmlnaHQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9hbGwgZG9tIHJlbGF0ZWQgdGhpbmdzIGdvZXMgaW4gaGVyZVxuaW1wb3J0IHtkZWZhdWx0U3RvcmFnZSwgc2F2ZVByb2plY3RUb1N0b3JhZ2UsIHNhdmVUYXNrVG9TdG9yYWdlfSBmcm9tICcuL3N0b3JhZ2UuanMnXG5pbXBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50LCBjcmVhdGVQcm9qZWN0RWxlbWVudEZyb21JbnB1dCwgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiwgY3JlYXRlQWRkVGFza0J1dHRvbiwgY3JlYXRlVGFza0VsZW1lbnQsIGNyZWF0ZUlucHV0Rm9ybSwgY3JlYXRlQWRkUHJvamVjdElucHV0LCBjcmVhdGVUb2RheXNUYXNrc0VsZW1lbnR9IGZyb20gJy4vbG9naWMuanMnXG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vYXBwLmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvamVjdExpc3QgPSBmdW5jdGlvbigpIHtcblxuICBPYmplY3Qua2V5cyhzdG9yYWdlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgaWYoa2V5ICE9PSBcInRvZGF5J3MgdGFza3NcIikge1xuICAgICAgYXBwZW5kUHJvamVjdEVsZW1lbnQoa2V5KVxuICAgIH1cbiAgfSlcbiAgYXBwZW5kQWRkUHJvamVjdEJ1dHRvbigpO1xuICBhcHBlbmRUb2RheXNUYXNrc0VsZW1lbnQoKTtcblxuICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpXG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRUb2RheXNUYXNrc0VsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0JykuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kYXlzVGFza3NFbGVtZW50KCkpO1xufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kUHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RWxlbWVudEZyb21JbnB1dChwcm9qZWN0TmFtZSkpXG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tCdXR0b24oKSlcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZFRhc2tFbGVtZW50ID0gZnVuY3Rpb24odGFza1RpdGxlKXtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrVGl0bGUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKS5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudClcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZEFkZFByb2plY3RJbnB1dCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0JylcbiAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoYWRkQnV0dG9uKVxuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qZWN0SW5wdXQoKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3RJbnB1dCcpLmZvY3VzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRBZGRQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0JylcbiAgaWYoIWFkZFByb2plY3RCdXR0b24pIHtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyVGFza0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0JylcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUYXNrTGlzdCA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gIC8vcmVtb3ZlIHRoZSBjdXJyZW50IHRhc2sgbGlzdCBhbmQgYnJpbmcgaW4gYWxsIHRoZSBhc3NvY2lhdGVkIHRhc2tzIGZyb20gdGhlIHN0b3JhZ2UgY29tcGFydG1lbnQgb2Ygb3VyIHNoaXRcbiAgLy9wcm9qZWN0TmFtZSBpcyBnb2luZyB0byBiZSBhIHN0cmluZyB0aGF0IGlzIGEga2V5IGluIG15IHN0b3JhZ2VcblxuICBjbGVhclRhc2tMaXN0KCk7XG4gIGlmKHN0b3JhZ2VbcHJvamVjdE5hbWVdKXtcbiAgICBzdG9yYWdlW3Byb2plY3ROYW1lXS50YXNrcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgYXBwZW5kVGFza0VsZW1lbnQoZWxlbWVudC50aXRsZSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdjYXRjaCByZW5kZXIgZXJyb3InKVxuICB9XG5cbiAgYXBwZW5kQWRkVGFza0J1dHRvbigpXG5cbiAgLypmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBhcHBlbmRUYXNrRWxlbWVudChzdG9yYWdlLnRhc2tzW2ldLnRpdGxlKVxuICB9XG5cbiAgKi9cbn1cblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBoMy5pbm5lckhUTUwgPSB0aXRsZTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpXG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdFRpdGxlLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIGNvbnNvbGUubG9nKGgzKTtcbiAgaWYocHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0VGl0bGUucmVtb3ZlQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIH1cbiAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGgzKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2tJbnB1dEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0JykubGFzdEVsZW1lbnRDaGlsZC5pZCA9PT0gJ3Rhc2tGb3JtJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIGZhbHNlO1xuXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFzaycpKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKVxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrJylcbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZChhZGRCdXR0b24pXG4gIH1cblxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGFwcGVuZElucHV0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAvL3JlbW92ZSBhZGRUYXNrIGJ1dHRvbiBhbmQgdGhlbiBhcHBlbmQgSW5wdXQgZm9ybSwgYWZ0ZXIgaW5wdXQgZm9ybSBpcyBzdWJtaXR0ZWQgd2Ugd2lsbC4uLlxuICAvL2NyZWF0ZSBhIHRhc2sgZnJvbSB0aGF0IGlucHV0IGZvcm0sIHJlbW92ZSB0aGUgaW5wdXQgZm9ybSwgYXBwZW5kIHRoZSB0YXNrLCBzbGFwIHRoZSBidXR0b24gYmFjayBvblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKS5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dEZvcm0oKSlcblxuXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgcHJvamVjdE5hbWUucmVtb3ZlKCk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KVxuICBzZXRQcm9qZWN0VGl0bGUobmV3UHJvamVjdC5pbm5lclRleHQpXG4gIHJlbmRlclRhc2tMaXN0KG5ld1Byb2plY3QuaW5uZXJUZXh0KVxuICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LmlubmVyVGV4dClcblxufVxuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2luaXRpYWxpemF0aW9ufSBmcm9tICcuL2luaXRpYWxpemF0aW9uLmpzJ1xuXG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKTtcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbmV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXG5leHBvcnQgbGV0IHN0b3JhZ2UgPSB7fTtcblxuaW5pdGlhbGl6YXRpb24oKTtcblxuLyogc3RvcmFnZSBzdHJ1Y3R1cmUgd2lsbCBsb29rIGxpa2U6XG5cbntwcm9qZWN0MToge3Rhc2tzOiBbe3RpdGxlICwgZGF0ZSAsIGRldGFpbHMgLCBwcmlvcml0eX0sIHt0aXRsZSAsIGRhdGUgLCBkZXRhaWxzICwgcHJpb3JpdHl9XVxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdhIHNob3J0IGRlc2NyaXB0aW9uIG9mIG91ciBwcm9qZWN0IGhlcmUnICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuIHByb2plY3QyOiB7dGFza3M6IFt7YXJyYXkgb2Ygb2JqZWN0cywgZWFjaCBvYmplY3QgZGVzY3JpYmluZyBhIHNpbmdsZSB0YXNrfV1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiBvdXIgcHJvamVjdCBoZXJlJyAgICAgICAgICAgICAgICAgICAgICAgICAgfVxufVxuXG5cbmNvbnN0IHN0b3JhZ2UgPSB7fVxuc3RvcmFnZVsnZGVmYXVsdCBwcm9qZWN0J10gPVxueyd0YXNrcycgOiBbeyd0aXRsZSc6ICdwbGFjZWhvbGRlcicsICdkYXRlJzogJzAzLzAzLzAzJywgJ2RldGFpbHMnOiAnc29tZSBkZWV0cyBoZXJlJywgJ3ByaW9yaXR5JzogJ2hpZ2gnfV0sXG4nZGVzY3JpcHRpb24nOiAnYSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdCBhdCBoYW5kJ307XG4qL1xuXG4vL25lZWRzIHRvIGJlIG9yZ2FuaXplZCBsbWFvXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICdhcHBlbmRJbnB1dEZvcm0nKVxuXG5cblxuLy90YXNrSW5wdXRGb3JtXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IGRlZmF1bHRTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IHtyZW5kZXJQcm9qZWN0TGlzdCwgc2V0UHJvamVjdFRpdGxlLCByZW5kZXJUYXNrTGlzdH0gZnJvbSAnLi9ET01sb2dpYy5qcydcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi9hcHAuanMnXG5cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemF0aW9uID0gZnVuY3Rpb24oKSB7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlZmF1bHRTdG9yYWdlKCk7XG4gICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICBjb25zdCB0aXRsZSA9IE9iamVjdC5rZXlzKHN0b3JhZ2UpWzBdXG4gICAgc2V0UHJvamVjdFRpdGxlKHRpdGxlKVxuICAgIHJlbmRlclRhc2tMaXN0KHRpdGxlKVxuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgIHN0b3JhZ2Vba2V5XSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgfSlcbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gT2JqZWN0LmtleXMoc3RvcmFnZSlbMF1cbiAgICBzZXRQcm9qZWN0VGl0bGUodGl0bGUpXG4gICAgcmVuZGVyVGFza0xpc3QodGl0bGUpXG5cbiAgICAvLyBmb3IgKGNvbnN0IGtleSBvZiBsb2NhbFN0b3JhZ2UpIHtcbiAgICAvLyAgIHN0b3JhZ2Vba2V5XSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleV0pO1xuXG4gICAgLy8gfVxuICB9XG59IiwiLy9sb2dpYyBmb3IgaG93IHdlIGhhbmRsZSBkaWZmZXJlbnQgZXZlbnRzIHNoYWxsIGdvIGluIGhlcmVcbmltcG9ydCB7YXBwZW5kQWRkUHJvamVjdElucHV0LCByZW1vdmVQcm9qZWN0LCBzZXRQcm9qZWN0VGl0bGUsIHJlbmRlclRhc2tMaXN0LCByZW1vdmVBZGRUYXNrQnV0dG9uLCByZW1vdmVUYXNrSW5wdXRGb3JtLCBhcHBlbmRJbnB1dEZvcm0sIGFwcGVuZFRhc2tFbGVtZW50LCBhcHBlbmRQcm9qZWN0RWxlbWVudCwgYXBwZW5kQWRkVGFza0J1dHRvbn0gZnJvbSAnLi9ET01sb2dpYy5qcydcbmltcG9ydCB7IHNhdmVUYXNrVG9Ub2RheXNUYXNrcywgZGVmYXVsdFN0b3JhZ2UsIHNhdmVQcm9qZWN0VG9TdG9yYWdlLCBzYXZlVGFza1RvU3RvcmFnZSwgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3ROYW1lfSBmcm9tICcuL3N0b3JhZ2UuanMnXG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vYXBwLmpzJ1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4uL2VkaXQucG5nJ1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vZGVsZXRlLnBuZydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgLy88YnV0dG9uIGlkPSdhZGRUYXNrJyBvbkNsaWNrPSdhcHBlbmRJbnB1dEZvcm0nPkFkZCBUYXNrPC9idXR0b24+XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrJylcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkVGFza0J1dHRvbilcblxuICBidXR0b24uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJ1xuXG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0RWxlbWVudEZyb21JbnB1dCA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xuICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdCcpXG4gIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVQcm9qZWN0Q2xpY2spXG5cblxuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICBjb25zdCBlZGl0ID0gbmV3IEltYWdlKCk7XG4gIGVkaXQuc3JjID0gRWRpdEljb247XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpXG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnaWNvbicpXG4gIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0UHJvamVjdENsaWNrKVxuXG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBkZWxldGVJY29uLnNyYyA9IERlbGV0ZUljb247XG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlRGVsZXRlUHJvamVjdENsaWNrKVxuXG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cblxuXG5cbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdE9iamVjdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgICd0YXNrcyc6IFtdLFxuICAgICdkZXNjcmlwdGlvbic6JydcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFza0Zyb21JbnB1dCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0YXNrID0ge31cbiAgdGFzay50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlICB8fCdkZWZhdWx0IHRhc2snXG4gIHRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSB8fCAnJ1xuICB0YXNrLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlIHx8ICcnXG4gIHRhc2sucHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSB8fCAnJ1xuICB0YXNrLnByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykuZmlyc3RDaGlsZC5pbm5lclRleHRcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCB0YXNrID0ge31cbiAgdGFzay50aXRsZSA9IHRpdGxlXG4gIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICB0YXNrLmRhdGUgPSBkYXRlXG4gIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eVxuXG4gIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWRkUHJvamVjdElucHV0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdCcpXG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZFByb2plY3RJbnB1dCcpXG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGFkZC5pbm5lckhUTUwgPSAnQWRkJ1xuICBjYW5jZWwuaW5uZXJIVE1MID0gJ0NhbmNlbCdcbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsQWRkUHJvamVjdEJ1dHRvbilcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkUHJvamVjdFN1Ym1pdEJ1dHRvbilcbiAgZGl2LmFwcGVuZENoaWxkKGFkZClcbiAgZGl2LmFwcGVuZENoaWxkKGNhbmNlbClcbiAgbWFpbi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsJ3RydWUnKVxuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PTEzKSB7XG4gICAgICBoYW5kbGVBZGRQcm9qZWN0U3VibWl0QnV0dG9uKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWFpbjtcblxuXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0JylcbiAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIFByb2plY3QnXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRBZGRQcm9qZWN0SW5wdXQpXG4gIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5wdXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluLmlkID0gJ3Rhc2tGb3JtJ1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0aXRsZScpXG4gIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ1Rhc2sgTmFtZSdcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZScpXG5cbiAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJylcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlJylcbiAgbWFpbi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcmlvcml0eScpXG4gIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gJ1ByaW9yaXR5J1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eScpXG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG5cbiAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdoaWdoJylcbiAgaGlnaE9wdGlvbi5pbm5lckhUTUwgPSAnSGlnaCdcblxuICBjb25zdCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKVxuICBtZWRpdW1PcHRpb24uaW5uZXJIVE1MID0gJ01lZGl1bSdcblxuICBjb25zdCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICBsb3dPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xvdycpXG4gIGxvd09wdGlvbi5pbm5lckhUTUwgPSAnTG93JztcblxuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKVxuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pXG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd09wdGlvbilcbiAgbWFpbi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxuICBtYWluLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpXG4gIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ1Rhc2sgRGVzY3JpcHRpb24nXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpXG5cbiAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuICBtYWluLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpXG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgc3VibWl0LmlubmVySFRNTCA9ICdTdWJtaXQnXG4gIGNhbmNlbC5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWxBZGRUYXNrQnV0dG9uKVxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRUYXNrU3VibWl0QnV0dG9uKVxuICBkaXYuYXBwZW5kQ2hpbGQoc3VibWl0KVxuICBkaXYuYXBwZW5kQ2hpbGQoY2FuY2VsKVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgLy9zdWJtaXQuc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdjcmVhdGVUYXNrRnJvbUlucHV0JylcblxuXG4gIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09MTMpIHtcbiAgICAgIGhhbmRsZUFkZFRhc2tTdWJtaXRCdXR0b24oKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09MTMpIHtcbiAgICAgIGhhbmRsZUFkZFRhc2tTdWJtaXRCdXR0b24oKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0xMykge1xuICAgICAgaGFuZGxlQWRkVGFza1N1Ym1pdEJ1dHRvbigpO1xuICAgIH1cbiAgfSk7XG5cblxuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFza0VsZW1lbnQgPSBmdW5jdGlvbiAodGFza1RpdGxlKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Rhc2tzJylcbiAgZGl2LmlubmVySFRNTCA9IHRhc2tUaXRsZTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kYXlzVGFza3NFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheXNUYXNrcycpXG5cbiAgY29uc3QgdG9kYXlzVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRvZGF5c1Rhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0JylcbiAgdG9kYXlzVGFzay5pbm5lckhUTUwgPSBcInRvZGF5J3MgdGFza3NcIlxuXG4gIGRpdi5hcHBlbmRDaGlsZCh0b2RheXNUYXNrKTtcbiAgdG9kYXlzVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlUHJvamVjdENsaWNrKVxuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDYW5jZWxBZGRQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0JylcbiAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdElucHV0Rm9ybSlcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvamVjdEJ1dHRvbigpKVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2FuY2VsQWRkVGFza0J1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyh0aGlzKVxuICByZW1vdmVUYXNrSW5wdXRGb3JtKCk7XG4gIGFwcGVuZEFkZFRhc2tCdXR0b24oKTtcbn1cblxuY29uc3QgdG9kYXlzRGF0ZSA9IGZ1bmN0aW9uKCkge1xudmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbnZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG52YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxudmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG50b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuXG5yZXR1cm4gdG9kYXk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRUYXNrU3VibWl0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAvL2NyZWF0ZSB0YXNrIGZyb20gaW5wdXQsIHNhdmUgaXQgdG8gc3RvcmFnZSwgcmVuZGVyIHBhZ2UgZnJvbSBzdG9yYWdlICh1c2luZyBzdG9yYWdlL3N0YXRlIHRvIGFwcGVuZCB0aGluZ3MpXG4gIC8vcmVtb3ZlIGlucHV0IGZvcm0sIHJldHVybiBhZGRUYXNrIGJ1dHRvblxuICBjb25zdCB0YXNrID0gY3JlYXRlVGFza0Zyb21JbnB1dCgpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUxcbiAgY29uc29sZS5sb2codGFzaylcblxuICBpZih0YXNrLmRhdGUgPT09IHRvZGF5c0RhdGUoKSkge1xuICAgIHN0b3JhZ2VbXCJ0b2RheSdzIHRhc2tzXCJdLnRhc2tzLnB1c2godGFzaylcbiAgICBzYXZlVGFza1RvVG9kYXlzVGFza3MoKVxuXG4gIH1cblxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0b3JhZ2VbcHJvamVjdE5hbWVdOyAvL3t0YXNrczogW10sIGRlc2NyaXB0aW9uOiAnJ31cbiAgY3VycmVudFByb2plY3QudGFza3MucHVzaCh0YXNrKVxuICBjb25zdCB0YXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2sudGl0bGUpXG5cbiAgc2F2ZVRhc2tUb1N0b3JhZ2UocHJvamVjdE5hbWUpXG4gIHJlbW92ZVRhc2tJbnB1dEZvcm0oKTtcbiAgYXBwZW5kVGFza0VsZW1lbnQodGFzay50aXRsZSlcbiAgYXBwZW5kQWRkVGFza0J1dHRvbigpO1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkVGFza0J1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tGb3JtJykpIHtcbiAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgYXBwZW5kSW5wdXRGb3JtKCk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTtcblxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkUHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0SW5wdXQnKS52YWx1ZVxuICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XG4gICAgYWxlcnQoJ3BsZWFzZSBuYW1lIHlvdXIgcHJvamVjdCEnKVxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICBjb25zdCBwcm9qZWN0SW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKVxuICBpZighc3RvcmFnZVtwcm9qZWN0TmFtZV0pIHtcblxuICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0SW5wdXRGb3JtKVxuICBhcHBlbmRQcm9qZWN0RWxlbWVudChwcm9qZWN0TmFtZSk7XG4gIHNhdmVQcm9qZWN0VG9TdG9yYWdlKHByb2plY3ROYW1lKVxuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKCkpXG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ3Byb2plY3RzIG11c3QgYmUgYSBkaWZmZXJlbnQgbmFtZSEnKVxuICB9XG59XG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IGhhbmRsZVByb2plY3RDbGljayA9IGZ1bmN0aW9uKCkge1xuICBpZih0aGlzLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcblxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0aXRsZSA9IHRoaXMuaW5uZXJUZXh0O1xuICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIHNldFByb2plY3RUaXRsZSh0aXRsZSlcbiAgcmVuZGVyVGFza0xpc3QodGl0bGUpXG4gIC8vcmVuZGVyVGFza0xpc3QoKVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnNvbGUubG9nKHByb2plY3RFbGVtZW50KVxuICBkZWxldGVQcm9qZWN0KHByb2plY3RFbGVtZW50LmlubmVyVGV4dClcbiAgcmVtb3ZlUHJvamVjdChwcm9qZWN0RWxlbWVudClcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUVkaXRQcm9qZWN0U3VibWl0ID0gZnVuY3Rpb24oY3VycmVudE5hbWUsIG5ld05hbWUpIHtcbiAgZWRpdFByb2plY3ROYW1lKGN1cnJlbnROYW1lLCBuZXdOYW1lKVxuXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVFZGl0UHJvamVjdENsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0RWxlbWVudC5pbm5lclRleHQ7XG4gIGNvbnNvbGUubG9nKHByb2plY3RFbGVtZW50LCBwcm9qZWN0TmFtZSlcbiAgc2V0UHJvamVjdFRpdGxlKHByb2plY3ROYW1lKTtcbiAgcmVuZGVyVGFza0xpc3QocHJvamVjdE5hbWUpXG4gIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsJ3RydWUnKVxuICBpbnB1dEZvcm0uc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG5cbiAgcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0ID0gJydcbiAgaW5wdXRGb3JtLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gIGlucHV0Rm9ybS5mb2N1cygpO1xuXG4gIC8qaW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PTEzKSB7XG4gICAgICBjb25zdCBuZXdOYW1lID0gaW5wdXRGb3JtLnZhbHVlXG4gICAgICBoYW5kbGVFZGl0UHJvamVjdFN1Ym1pdChwcm9qZWN0TmFtZSwgbmV3TmFtZSk7XG4gICAgfVxuICB9KTsqL1xuXG4gIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0Rm9ybSk7XG5cblxuXG5cblxuXG5cblxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG59XG5cblxuIiwiLy9hbGwgbG9naWMgcmVsYXRpbmcgdG8gc3RvcmFnZSBnb2VzIGhlcmVcbmltcG9ydCB7Y3JlYXRlUHJvamVjdE9iamVjdCwgY3JlYXRlVGFza30gZnJvbSAnLi9sb2dpYy5qcydcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi9hcHAuanMnXG5cbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgc3RvcmFnZVsnZGVmYXVsdCBwcm9qZWN0J10gPSB7XG4gICAgJ3Rhc2tzJzogW10sXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcbiAgfTtcbiAgc3RvcmFnZVtcInRvZGF5J3MgdGFza3NcIl0gPSB7XG4gICAgJ3Rhc2tzJzogW10sXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcbiAgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RheSdzIHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VbXCJ0b2RheSdzIHRhc2tzXCJdKSlcbiAgc3RvcmFnZVsnZGVmYXVsdCBwcm9qZWN0J10udGFza3MucHVzaChjcmVhdGVUYXNrKCdkZWZhdWx0IHRhc2snLCAnJywgJycsICdMb3cnLCAnZGVmYXVsdCBwcm9qZWN0JykpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0IHByb2plY3QnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlWydkZWZhdWx0IHByb2plY3QnXSkpXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlUHJvamVjdFRvU3RvcmFnZSA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gIHN0b3JhZ2VbcHJvamVjdE5hbWVdID0gY3JlYXRlUHJvamVjdE9iamVjdCgpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlUHJvamVjdE9iamVjdCgpKSk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVUYXNrVG9TdG9yYWdlID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2VbcHJvamVjdE5hbWVdXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3ROYW1lKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0ID0gc3RvcmFnZVtwcm9qZWN0TmFtZV1cblxuICBzdG9yYWdlW1widG9kYXkncyB0YXNrc1wiXS50YXNrcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgb2JqZWN0KSA9PiB7XG4gICAgaWYoZWxlbWVudC5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwxKVxuICAgIH1cbiAgfSlcbiAgc2F2ZVRhc2tUb1RvZGF5c1Rhc2tzKCk7XG5cbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE5hbWUpXG4gIGRlbGV0ZSBzdG9yYWdlW3Byb2plY3ROYW1lXTtcblxuXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVGFza1RvVG9kYXlzVGFza3MgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdG9kYXlzVGFza3MgPSBzdG9yYWdlW1widG9kYXkncyB0YXNrc1wiXTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odG9kYXlzVGFza3MpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kYXkncyB0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RheXNUYXNrcykpXG59XG5cbi8qZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IGZ1bmN0aW9uKGN1cnJlbnROYW1lLCBuZXdOYW1lKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gc3RvcmFnZVtjdXJyZW50TmFtZV07XG4gIHN0b3JhZ2VbbmV3TmFtZV0gPSBjdXJyZW50UHJvamVjdFxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjdXJyZW50TmFtZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld05hbWUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0KSlcbiAgZGVsZXRlIHN0b3JhZ2VbY3VycmVudE5hbWVdXG5cbn0qLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9