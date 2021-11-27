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
/* harmony export */   "createProjectElementButtons": () => (/* binding */ createProjectElementButtons),
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



  // const buttons = document.createElement('span')

  // const edit = new Image();
  // edit.src = EditIcon;
  // edit.classList.add('edit')
  // edit.classList.add('icon')
  // edit.addEventListener('click', handleEditProjectClick)

  // buttons.appendChild(edit);

  // const deleteIcon = new Image();
  // deleteIcon.src = DeleteIcon;
  // deleteIcon.classList.add('delete')
  // deleteIcon.classList.add('icon')
  // deleteIcon.addEventListener('click',handleDeleteProjectClick)

  // buttons.appendChild(deleteIcon);

  projectElement.appendChild(createProjectElementButtons());




  return projectElement;
}

const createProjectElementButtons = function() {
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

  return buttons;
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
  console.log(this)
  if(this.firstElementChild && this.firstElementChild.tagName === 'INPUT') {

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
  let projectElement = this.parentNode.parentNode;
  const projectName = projectElement.innerText;
  console.log(projectElement, projectName)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.setProjectTitle)(projectName);
  (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)(projectName)
  const inputForm = document.createElement('input');
  inputForm.setAttribute('autofocus','true')
  inputForm.setAttribute('type','text')
  inputForm.setAttribute('id','editProjectInput')

  projectElement.innerText = ''
  inputForm.value = projectName;

  inputForm.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      const newName = inputForm.value
      handleEditProjectSubmit(projectName, newName);
      projectElement.innerText = newName
      projectElement.appendChild(createProjectElementButtons())
      ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.setProjectTitle)(newName);
      (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)(newName)
    }
  });

  projectElement.appendChild(inputForm);
  document.querySelector('#editProjectInput').focus();









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
/* harmony export */   "saveTaskToTodaysTasks": () => (/* binding */ saveTaskToTodaysTasks),
/* harmony export */   "editProjectName": () => (/* binding */ editProjectName)
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

const editProjectName = function(currentName, newName) {
  const currentProject = _app_js__WEBPACK_IMPORTED_MODULE_1__.storage[currentName];
  _app_js__WEBPACK_IMPORTED_MODULE_1__.storage[newName] = currentProject
  localStorage.removeItem(currentName);
  localStorage.setItem(newName, JSON.stringify(currentProject))
  delete _app_js__WEBPACK_IMPORTED_MODULE_1__.storage[currentName]

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0I7QUFDOUM7QUFDQTtBQUNBOztBQUVPO0FBQ1AseUJBQXlCLDRDQUFPO0FBQ2hDLEVBQUUsNENBQU87QUFDVDtBQUNBO0FBQ0EsU0FBUyw0Q0FBTzs7QUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9ET01sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbml0aWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIG1pbm1heCg4MCUsIGF1dG8pIDdmcjtcXG59XFxuXFxuI2NvbnRhaW5lciA+IDpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5O1xcbn1cXG4jY29udGFpbmVyID4gOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xcbn1cXG5cXG4jdG9kYXlzVGFza3Mge1xcbiAgY29sb3I6IHB1cnBsZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4jcHJvamVjdExpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbn1cXG5cXG4udGFzayB7XFxuICBwYWRkaW5nOiAycHg7XFxuICBtYXJnaW46IDFweDtcXG4gIGJvcmRlcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGJvcmRlcjogMXB4IG91dHNldCB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUU5RTlFO1xcbn1cXG5cXG4jdGFza0Zvcm0gPiBidXR0b24sIGxhYmVsLCBpbnB1dCwgc2VsZWN0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5kaXYgPiBidXR0b24sIGlucHV0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIG1pbm1heCg4MCUsIGF1dG8pIDdmcjtcXG59XFxuXFxuI2NvbnRhaW5lciA+IDpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5O1xcbn1cXG4jY29udGFpbmVyID4gOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xcbn1cXG5cXG4jdG9kYXlzVGFza3Mge1xcbiAgY29sb3I6IHB1cnBsZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbn1cXG5cXG4jcHJvamVjdExpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbn1cXG5cXG4udGFzayB7XFxuICBwYWRkaW5nOiAycHg7XFxuICBtYXJnaW46IDFweDtcXG4gIGJvcmRlcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGJvcmRlcjogMXB4IG91dHNldCB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUU5RTlFO1xcbn1cXG5cXG4jdGFza0Zvcm0gPiBidXR0b24sIGxhYmVsLCBpbnB1dCwgc2VsZWN0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5kaXYgPiBidXR0b24sIGlucHV0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vYWxsIGRvbSByZWxhdGVkIHRoaW5ncyBnb2VzIGluIGhlcmVcbmltcG9ydCB7ZGVmYXVsdFN0b3JhZ2UsIHNhdmVQcm9qZWN0VG9TdG9yYWdlLCBzYXZlVGFza1RvU3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IHtjcmVhdGVQcm9qZWN0RWxlbWVudCwgY3JlYXRlUHJvamVjdEVsZW1lbnRGcm9tSW5wdXQsIGNyZWF0ZUFkZFByb2plY3RCdXR0b24sIGNyZWF0ZUFkZFRhc2tCdXR0b24sIGNyZWF0ZVRhc2tFbGVtZW50LCBjcmVhdGVJbnB1dEZvcm0sIGNyZWF0ZUFkZFByb2plY3RJbnB1dCwgY3JlYXRlVG9kYXlzVGFza3NFbGVtZW50fSBmcm9tICcuL2xvZ2ljLmpzJ1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tICcuL2FwcC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2plY3RMaXN0ID0gZnVuY3Rpb24oKSB7XG5cbiAgT2JqZWN0LmtleXMoc3RvcmFnZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgIGlmKGtleSAhPT0gXCJ0b2RheSdzIHRhc2tzXCIpIHtcbiAgICAgIGFwcGVuZFByb2plY3RFbGVtZW50KGtleSlcbiAgICB9XG4gIH0pXG4gIGFwcGVuZEFkZFByb2plY3RCdXR0b24oKTtcbiAgYXBwZW5kVG9kYXlzVGFza3NFbGVtZW50KCk7XG5cbiAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKVxufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kVG9kYXlzVGFza3NFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpLmFwcGVuZENoaWxkKGNyZWF0ZVRvZGF5c1Rhc2tzRWxlbWVudCgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZFByb2plY3RFbGVtZW50ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEVsZW1lbnRGcm9tSW5wdXQocHJvamVjdE5hbWUpKVxufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kQWRkVGFza0J1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKS5hcHBlbmRDaGlsZChjcmVhdGVBZGRUYXNrQnV0dG9uKCkpXG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRUYXNrRWxlbWVudCA9IGZ1bmN0aW9uKHRhc2tUaXRsZSl7XG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQodGFza1RpdGxlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0JykuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpXG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRBZGRQcm9qZWN0SW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKVxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpXG4gIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGFkZEJ1dHRvbilcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvamVjdElucHV0KCkpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0SW5wdXQnKS5mb2N1cygpO1xufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kQWRkUHJvamVjdEJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKVxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpXG4gIGlmKCFhZGRQcm9qZWN0QnV0dG9uKSB7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvamVjdEJ1dHRvbigpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjbGVhclRhc2tMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpXG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza0xpc3QgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAvL3JlbW92ZSB0aGUgY3VycmVudCB0YXNrIGxpc3QgYW5kIGJyaW5nIGluIGFsbCB0aGUgYXNzb2NpYXRlZCB0YXNrcyBmcm9tIHRoZSBzdG9yYWdlIGNvbXBhcnRtZW50IG9mIG91ciBzaGl0XG4gIC8vcHJvamVjdE5hbWUgaXMgZ29pbmcgdG8gYmUgYSBzdHJpbmcgdGhhdCBpcyBhIGtleSBpbiBteSBzdG9yYWdlXG5cbiAgY2xlYXJUYXNrTGlzdCgpO1xuICBpZihzdG9yYWdlW3Byb2plY3ROYW1lXSl7XG4gICAgc3RvcmFnZVtwcm9qZWN0TmFtZV0udGFza3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGFwcGVuZFRhc2tFbGVtZW50KGVsZW1lbnQudGl0bGUpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnY2F0Y2ggcmVuZGVyIGVycm9yJylcbiAgfVxuXG4gIGFwcGVuZEFkZFRhc2tCdXR0b24oKVxuXG4gIC8qZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yYWdlLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXBwZW5kVGFza0VsZW1lbnQoc3RvcmFnZS50YXNrc1tpXS50aXRsZSlcbiAgfVxuXG4gICovXG59XG5cbmV4cG9ydCBjb25zdCBzZXRQcm9qZWN0VGl0bGUgPSBmdW5jdGlvbih0aXRsZSkge1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgaDMuaW5uZXJIVE1MID0gdGl0bGU7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKVxuICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RUaXRsZS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICBjb25zb2xlLmxvZyhoMyk7XG4gIGlmKHByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdFRpdGxlLnJlbW92ZUNoaWxkKHByb2plY3ROYW1lKTtcblxuICB9XG4gIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChoMyk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrSW5wdXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQuaWQgPT09ICd0YXNrRm9ybScpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKS5sYXN0RWxlbWVudENoaWxkLnJlbW92ZSgpXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiBmYWxzZTtcblxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlQWRkVGFza0J1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKSkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0JylcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFzaycpXG4gICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQoYWRkQnV0dG9uKVxuICB9XG5cbn1cblxuXG5cbmV4cG9ydCBjb25zdCBhcHBlbmRJbnB1dEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgLy9yZW1vdmUgYWRkVGFzayBidXR0b24gYW5kIHRoZW4gYXBwZW5kIElucHV0IGZvcm0sIGFmdGVyIGlucHV0IGZvcm0gaXMgc3VibWl0dGVkIHdlIHdpbGwuLi5cbiAgLy9jcmVhdGUgYSB0YXNrIGZyb20gdGhhdCBpbnB1dCBmb3JtLCByZW1vdmUgdGhlIGlucHV0IGZvcm0sIGFwcGVuZCB0aGUgdGFzaywgc2xhcCB0aGUgYnV0dG9uIGJhY2sgb25cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0JykuYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXRGb3JtKCkpXG5cblxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gIHByb2plY3ROYW1lLnJlbW92ZSgpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgY29uc29sZS5sb2cobmV3UHJvamVjdClcbiAgc2V0UHJvamVjdFRpdGxlKG5ld1Byb2plY3QuaW5uZXJUZXh0KVxuICByZW5kZXJUYXNrTGlzdChuZXdQcm9qZWN0LmlubmVyVGV4dClcbiAgY29uc29sZS5sb2cobmV3UHJvamVjdC5pbm5lclRleHQpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcblxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtpbml0aWFsaXphdGlvbn0gZnJvbSAnLi9pbml0aWFsaXphdGlvbi5qcydcblxuXG5leHBvcnQgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrJyk7XG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbmV4cG9ydCBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG5leHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuZXhwb3J0IGxldCBzdG9yYWdlID0ge307XG5cbmluaXRpYWxpemF0aW9uKCk7XG5cbi8qIHN0b3JhZ2Ugc3RydWN0dXJlIHdpbGwgbG9vayBsaWtlOlxuXG57cHJvamVjdDE6IHt0YXNrczogW3t0aXRsZSAsIGRhdGUgLCBkZXRhaWxzICwgcHJpb3JpdHl9LCB7dGl0bGUgLCBkYXRlICwgZGV0YWlscyAsIHByaW9yaXR5fV1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiBvdXIgcHJvamVjdCBoZXJlJyAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiBwcm9qZWN0Mjoge3Rhc2tzOiBbe2FycmF5IG9mIG9iamVjdHMsIGVhY2ggb2JqZWN0IGRlc2NyaWJpbmcgYSBzaW5nbGUgdGFza31dXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Egc2hvcnQgZGVzY3JpcHRpb24gb2Ygb3VyIHByb2plY3QgaGVyZScgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbn1cblxuXG5jb25zdCBzdG9yYWdlID0ge31cbnN0b3JhZ2VbJ2RlZmF1bHQgcHJvamVjdCddID1cbnsndGFza3MnIDogW3sndGl0bGUnOiAncGxhY2Vob2xkZXInLCAnZGF0ZSc6ICcwMy8wMy8wMycsICdkZXRhaWxzJzogJ3NvbWUgZGVldHMgaGVyZScsICdwcmlvcml0eSc6ICdoaWdoJ31dLFxuJ2Rlc2NyaXB0aW9uJzogJ2EgYnJpZWYgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QgYXQgaGFuZCd9O1xuKi9cblxuLy9uZWVkcyB0byBiZSBvcmdhbml6ZWQgbG1hb1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL2FkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnYXBwZW5kSW5wdXRGb3JtJylcblxuXG5cbi8vdGFza0lucHV0Rm9ybVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBkZWZhdWx0U3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5qcydcbmltcG9ydCB7cmVuZGVyUHJvamVjdExpc3QsIHNldFByb2plY3RUaXRsZSwgcmVuZGVyVGFza0xpc3R9IGZyb20gJy4vRE9NbG9naWMuanMnXG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vYXBwLmpzJ1xuXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXphdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICBkZWZhdWx0U3RvcmFnZSgpO1xuICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBPYmplY3Qua2V5cyhzdG9yYWdlKVswXVxuICAgIHNldFByb2plY3RUaXRsZSh0aXRsZSlcbiAgICByZW5kZXJUYXNrTGlzdCh0aXRsZSlcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyh3aW5kb3cubG9jYWxTdG9yYWdlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICBzdG9yYWdlW2tleV0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgIH0pXG4gICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICBjb25zdCB0aXRsZSA9IE9iamVjdC5rZXlzKHN0b3JhZ2UpWzBdXG4gICAgc2V0UHJvamVjdFRpdGxlKHRpdGxlKVxuICAgIHJlbmRlclRhc2tMaXN0KHRpdGxlKVxuXG4gICAgLy8gZm9yIChjb25zdCBrZXkgb2YgbG9jYWxTdG9yYWdlKSB7XG4gICAgLy8gICBzdG9yYWdlW2tleV0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKTtcblxuICAgIC8vIH1cbiAgfVxufSIsIi8vbG9naWMgZm9yIGhvdyB3ZSBoYW5kbGUgZGlmZmVyZW50IGV2ZW50cyBzaGFsbCBnbyBpbiBoZXJlXG5pbXBvcnQge2FwcGVuZEFkZFByb2plY3RJbnB1dCwgcmVtb3ZlUHJvamVjdCwgc2V0UHJvamVjdFRpdGxlLCByZW5kZXJUYXNrTGlzdCwgcmVtb3ZlQWRkVGFza0J1dHRvbiwgcmVtb3ZlVGFza0lucHV0Rm9ybSwgYXBwZW5kSW5wdXRGb3JtLCBhcHBlbmRUYXNrRWxlbWVudCwgYXBwZW5kUHJvamVjdEVsZW1lbnQsIGFwcGVuZEFkZFRhc2tCdXR0b259IGZyb20gJy4vRE9NbG9naWMuanMnXG5pbXBvcnQgeyBzYXZlVGFza1RvVG9kYXlzVGFza3MsIGRlZmF1bHRTdG9yYWdlLCBzYXZlUHJvamVjdFRvU3RvcmFnZSwgc2F2ZVRhc2tUb1N0b3JhZ2UsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0TmFtZX0gZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tICcuL2FwcC5qcydcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuLi9lZGl0LnBuZydcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uL2RlbGV0ZS5wbmcnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIC8vPGJ1dHRvbiBpZD0nYWRkVGFzaycgb25DbGljaz0nYXBwZW5kSW5wdXRGb3JtJz5BZGQgVGFzazwvYnV0dG9uPlxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFzaycpXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFRhc2tCdXR0b24pXG5cbiAgYnV0dG9uLmlubmVySFRNTCA9ICdBZGQgVGFzaydcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnRGcm9tSW5wdXQgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTtcbiAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Byb2plY3QnKVxuICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlUHJvamVjdENsaWNrKVxuXG5cblxuICAvLyBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cbiAgLy8gY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAvLyBlZGl0LnNyYyA9IEVkaXRJY29uO1xuICAvLyBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxuICAvLyBlZGl0LmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxuICAvLyBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRWRpdFByb2plY3RDbGljaylcblxuICAvLyBidXR0b25zLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gIC8vIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgLy8gZGVsZXRlSWNvbi5zcmMgPSBEZWxldGVJY29uO1xuICAvLyBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG4gIC8vIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpXG4gIC8vIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZURlbGV0ZVByb2plY3RDbGljaylcblxuICAvLyBidXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RFbGVtZW50QnV0dG9ucygpKTtcblxuXG5cblxuICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0RWxlbWVudEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG4gIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdC5zcmMgPSBFZGl0SWNvbjtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0JylcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVkaXRQcm9qZWN0Q2xpY2spXG5cbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0KTtcblxuICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gIGRlbGV0ZUljb24uc3JjID0gRGVsZXRlSWNvbjtcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxuICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxuICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVEZWxldGVQcm9qZWN0Q2xpY2spXG5cbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICByZXR1cm4gYnV0dG9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3RPYmplY3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICAndGFza3MnOiBbXSxcbiAgICAnZGVzY3JpcHRpb24nOicnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tGcm9tSW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdGFzayA9IHt9XG4gIHRhc2sudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSAgfHwnZGVmYXVsdCB0YXNrJ1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUgfHwgJydcbiAgdGFzay5kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZSB8fCAnJ1xuICB0YXNrLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWUgfHwgJydcbiAgdGFzay5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLmZpcnN0Q2hpbGQuaW5uZXJUZXh0XG4gIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFzayA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgdGFzayA9IHt9XG4gIHRhc2sudGl0bGUgPSB0aXRsZVxuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgdGFzay5kYXRlID0gZGF0ZVxuICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHlcblxuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFkZFByb2plY3RJbnB1dCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3QnKVxuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdhZGRQcm9qZWN0SW5wdXQnKVxuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cblxuICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBhZGQuaW5uZXJIVE1MID0gJ0FkZCdcbiAgY2FuY2VsLmlubmVySFRNTCA9ICdDYW5jZWwnXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbEFkZFByb2plY3RCdXR0b24pXG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFByb2plY3RTdWJtaXRCdXR0b24pXG4gIGRpdi5hcHBlbmRDaGlsZChhZGQpXG4gIGRpdi5hcHBlbmRDaGlsZChjYW5jZWwpXG4gIG1haW4uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCd0cnVlJylcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0xMykge1xuICAgICAgaGFuZGxlQWRkUHJvamVjdFN1Ym1pdEJ1dHRvbigpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1haW47XG5cblxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdCcpXG4gIGFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCBQcm9qZWN0J1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kQWRkUHJvamVjdElucHV0KVxuICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbi5pZCA9ICd0YXNrRm9ybSdcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKVxuICB0aXRsZUxhYmVsLmlubmVySFRNTCA9ICdUYXNrIE5hbWUnXG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZGF0ZScpXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJpb3JpdHknKVxuICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdQcmlvcml0eSdcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHknKVxuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuXG4gIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnaGlnaCcpXG4gIGhpZ2hPcHRpb24uaW5uZXJIVE1MID0gJ0hpZ2gnXG5cbiAgY29uc3QgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJylcbiAgbWVkaXVtT3B0aW9uLmlubmVySFRNTCA9ICdNZWRpdW0nXG5cbiAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsb3cnKVxuICBsb3dPcHRpb24uaW5uZXJIVE1MID0gJ0xvdyc7XG5cbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbilcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKVxuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChsb3dPcHRpb24pXG4gIG1haW4uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcbiAgbWFpbi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZGVzY3JpcHRpb24nKVxuICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9ICdUYXNrIERlc2NyaXB0aW9uJ1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbClcbiAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KVxuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHN1Ym1pdC5pbm5lckhUTUwgPSAnU3VibWl0J1xuICBjYW5jZWwuaW5uZXJIVE1MID0gJ0NhbmNlbCdcbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsQWRkVGFza0J1dHRvbilcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkVGFza1N1Ym1pdEJ1dHRvbilcbiAgZGl2LmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgZGl2LmFwcGVuZENoaWxkKGNhbmNlbClcblxuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG4gIC8vc3VibWl0LnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAnY3JlYXRlVGFza0Zyb21JbnB1dCcpXG5cblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PTEzKSB7XG4gICAgICBoYW5kbGVBZGRUYXNrU3VibWl0QnV0dG9uKCk7XG4gICAgfVxuICB9KTtcblxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PTEzKSB7XG4gICAgICBoYW5kbGVBZGRUYXNrU3VibWl0QnV0dG9uKCk7XG4gICAgfVxuICB9KTtcblxuICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09MTMpIHtcbiAgICAgIGhhbmRsZUFkZFRhc2tTdWJtaXRCdXR0b24oKTtcbiAgICB9XG4gIH0pO1xuXG5cblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gZnVuY3Rpb24gKHRhc2tUaXRsZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0YXNrcycpXG4gIGRpdi5pbm5lckhUTUwgPSB0YXNrVGl0bGU7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvZGF5c1Rhc2tzRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXlzVGFza3MnKVxuXG4gIGNvbnN0IHRvZGF5c1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b2RheXNUYXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpXG4gIHRvZGF5c1Rhc2suaW5uZXJIVE1MID0gXCJ0b2RheSdzIHRhc2tzXCJcblxuICBkaXYuYXBwZW5kQ2hpbGQodG9kYXlzVGFzayk7XG4gIHRvZGF5c1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZVByb2plY3RDbGljaylcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2FuY2VsQWRkUHJvamVjdEJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBwcm9qZWN0SW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKVxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpXG4gIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RJbnB1dEZvcm0pXG4gIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3RCdXR0b24oKSlcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNhbmNlbEFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2codGhpcylcbiAgcmVtb3ZlVGFza0lucHV0Rm9ybSgpO1xuICBhcHBlbmRBZGRUYXNrQnV0dG9uKCk7XG59XG5cbmNvbnN0IHRvZGF5c0RhdGUgPSBmdW5jdGlvbigpIHtcbnZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG52YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xudmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcbnZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxudG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcblxucmV0dXJuIHRvZGF5O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkVGFza1N1Ym1pdEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy9jcmVhdGUgdGFzayBmcm9tIGlucHV0LCBzYXZlIGl0IHRvIHN0b3JhZ2UsIHJlbmRlciBwYWdlIGZyb20gc3RvcmFnZSAodXNpbmcgc3RvcmFnZS9zdGF0ZSB0byBhcHBlbmQgdGhpbmdzKVxuICAvL3JlbW92ZSBpbnB1dCBmb3JtLCByZXR1cm4gYWRkVGFzayBidXR0b25cbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tGcm9tSW5wdXQoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MXG4gIGNvbnNvbGUubG9nKHRhc2spXG5cbiAgaWYodGFzay5kYXRlID09PSB0b2RheXNEYXRlKCkpIHtcbiAgICBzdG9yYWdlW1widG9kYXkncyB0YXNrc1wiXS50YXNrcy5wdXNoKHRhc2spXG4gICAgc2F2ZVRhc2tUb1RvZGF5c1Rhc2tzKClcblxuICB9XG5cbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdG9yYWdlW3Byb2plY3ROYW1lXTsgLy97dGFza3M6IFtdLCBkZXNjcmlwdGlvbjogJyd9XG4gIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2godGFzaylcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrLnRpdGxlKVxuXG4gIHNhdmVUYXNrVG9TdG9yYWdlKHByb2plY3ROYW1lKVxuICByZW1vdmVUYXNrSW5wdXRGb3JtKCk7XG4gIGFwcGVuZFRhc2tFbGVtZW50KHRhc2sudGl0bGUpXG4gIGFwcGVuZEFkZFRhc2tCdXR0b24oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybScpKSB7XG4gICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgIGFwcGVuZElucHV0Rm9ybSgpO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLmZvY3VzKCk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZFByb2plY3RTdWJtaXRCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdElucHV0JykudmFsdWVcbiAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xuICAgIGFsZXJ0KCdwbGVhc2UgbmFtZSB5b3VyIHByb2plY3QhJylcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgY29uc3QgcHJvamVjdElucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0JylcbiAgaWYoIXN0b3JhZ2VbcHJvamVjdE5hbWVdKSB7XG5cbiAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdElucHV0Rm9ybSlcbiAgYXBwZW5kUHJvamVjdEVsZW1lbnQocHJvamVjdE5hbWUpO1xuICBzYXZlUHJvamVjdFRvU3RvcmFnZShwcm9qZWN0TmFtZSlcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvamVjdEJ1dHRvbigpKVxuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdwcm9qZWN0cyBtdXN0IGJlIGEgZGlmZmVyZW50IG5hbWUhJylcbiAgfVxufVxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVQcm9qZWN0Q2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2codGhpcylcbiAgaWYodGhpcy5maXJzdEVsZW1lbnRDaGlsZCAmJiB0aGlzLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcblxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0aXRsZSA9IHRoaXMuaW5uZXJUZXh0O1xuICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIHNldFByb2plY3RUaXRsZSh0aXRsZSlcbiAgcmVuZGVyVGFza0xpc3QodGl0bGUpXG4gIC8vcmVuZGVyVGFza0xpc3QoKVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnNvbGUubG9nKHByb2plY3RFbGVtZW50KVxuICBkZWxldGVQcm9qZWN0KHByb2plY3RFbGVtZW50LmlubmVyVGV4dClcbiAgcmVtb3ZlUHJvamVjdChwcm9qZWN0RWxlbWVudClcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUVkaXRQcm9qZWN0U3VibWl0ID0gZnVuY3Rpb24oY3VycmVudE5hbWUsIG5ld05hbWUpIHtcbiAgZWRpdFByb2plY3ROYW1lKGN1cnJlbnROYW1lLCBuZXdOYW1lKVxuXG5cblxuXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVFZGl0UHJvamVjdENsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgbGV0IHByb2plY3RFbGVtZW50ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0O1xuICBjb25zb2xlLmxvZyhwcm9qZWN0RWxlbWVudCwgcHJvamVjdE5hbWUpXG4gIHNldFByb2plY3RUaXRsZShwcm9qZWN0TmFtZSk7XG4gIHJlbmRlclRhc2tMaXN0KHByb2plY3ROYW1lKVxuICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dEZvcm0uc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCd0cnVlJylcbiAgaW5wdXRGb3JtLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICBpbnB1dEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ2VkaXRQcm9qZWN0SW5wdXQnKVxuXG4gIHByb2plY3RFbGVtZW50LmlubmVyVGV4dCA9ICcnXG4gIGlucHV0Rm9ybS52YWx1ZSA9IHByb2plY3ROYW1lO1xuXG4gIGlucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0xMykge1xuICAgICAgY29uc3QgbmV3TmFtZSA9IGlucHV0Rm9ybS52YWx1ZVxuICAgICAgaGFuZGxlRWRpdFByb2plY3RTdWJtaXQocHJvamVjdE5hbWUsIG5ld05hbWUpO1xuICAgICAgcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0ID0gbmV3TmFtZVxuICAgICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEVsZW1lbnRCdXR0b25zKCkpXG4gICAgICBzZXRQcm9qZWN0VGl0bGUobmV3TmFtZSk7XG4gICAgICByZW5kZXJUYXNrTGlzdChuZXdOYW1lKVxuICAgIH1cbiAgfSk7XG5cbiAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRGb3JtKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRQcm9qZWN0SW5wdXQnKS5mb2N1cygpO1xuXG5cblxuXG5cblxuXG5cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxufVxuXG5cbiIsIi8vYWxsIGxvZ2ljIHJlbGF0aW5nIHRvIHN0b3JhZ2UgZ29lcyBoZXJlXG5pbXBvcnQge2NyZWF0ZVByb2plY3RPYmplY3QsIGNyZWF0ZVRhc2t9IGZyb20gJy4vbG9naWMuanMnXG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vYXBwLmpzJ1xuXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHN0b3JhZ2VbJ2RlZmF1bHQgcHJvamVjdCddID0ge1xuICAgICd0YXNrcyc6IFtdLFxuICAgICdkZXNjcmlwdGlvbic6ICcnXG4gIH07XG4gIHN0b3JhZ2VbXCJ0b2RheSdzIHRhc2tzXCJdID0ge1xuICAgICd0YXNrcyc6IFtdLFxuICAgICdkZXNjcmlwdGlvbic6ICcnXG4gIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kYXkncyB0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlW1widG9kYXkncyB0YXNrc1wiXSkpXG4gIHN0b3JhZ2VbJ2RlZmF1bHQgcHJvamVjdCddLnRhc2tzLnB1c2goY3JlYXRlVGFzaygnZGVmYXVsdCB0YXNrJywgJycsICcnLCAnTG93JywgJ2RlZmF1bHQgcHJvamVjdCcpKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdCBwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVsnZGVmYXVsdCBwcm9qZWN0J10pKVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVByb2plY3RUb1N0b3JhZ2UgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICBzdG9yYWdlW3Byb2plY3ROYW1lXSA9IGNyZWF0ZVByb2plY3RPYmplY3QoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZVByb2plY3RPYmplY3QoKSkpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVGFza1RvU3RvcmFnZSA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHByb2plY3QgPSBzdG9yYWdlW3Byb2plY3ROYW1lXVxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0TmFtZSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2VbcHJvamVjdE5hbWVdXG5cbiAgc3RvcmFnZVtcInRvZGF5J3MgdGFza3NcIl0udGFza3MuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgsIG9iamVjdCkgPT4ge1xuICAgIGlmKGVsZW1lbnQucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsMSlcbiAgICB9XG4gIH0pXG4gIHNhdmVUYXNrVG9Ub2RheXNUYXNrcygpO1xuXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3ROYW1lKVxuICBkZWxldGUgc3RvcmFnZVtwcm9qZWN0TmFtZV07XG5cblxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVRhc2tUb1RvZGF5c1Rhc2tzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRvZGF5c1Rhc2tzID0gc3RvcmFnZVtcInRvZGF5J3MgdGFza3NcIl07XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRvZGF5c1Rhc2tzKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZGF5J3MgdGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kYXlzVGFza3MpKVxufVxuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3ROYW1lID0gZnVuY3Rpb24oY3VycmVudE5hbWUsIG5ld05hbWUpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdG9yYWdlW2N1cnJlbnROYW1lXTtcbiAgc3RvcmFnZVtuZXdOYW1lXSA9IGN1cnJlbnRQcm9qZWN0XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGN1cnJlbnROYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TmFtZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3QpKVxuICBkZWxldGUgc3RvcmFnZVtjdXJyZW50TmFtZV1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9