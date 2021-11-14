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
___CSS_LOADER_EXPORT___.push([module.id, "#container {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-gap: 5px;\n  grid-template-rows:  1fr minmax(80%, auto) 7fr;\n}\n\n#container > :nth-child(odd) {\n  background-color: #A9A9A9;\n}\n#container > :nth-child(even) {\n  background-color: #D3D3D3;\n}\n\n#todaysTasks {\n  color: purple;\n  position: absolute;\n  bottom: 0px;\n}\n\n#projectList {\n  position: relative;\n}\n\nh1 {\n  background-color: silver;\n}\n\nbody {\n  background-color: silver;\n}\n\n.task {\n  padding: 2px;\n  margin: 1px;\n  border: black;\n}\n\n.project {\n  padding: 1px;\n}\n\n#taskForm > button, label, input, select {\n  margin: 3px;\n}\n\ndiv > button, input {\n  margin: 3px;\n}\n\n#addProject {\n  background-color: #A9A9A9\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,8CAA8C;AAChD;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;AACF","sourcesContent":["#container {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-gap: 5px;\n  grid-template-rows:  1fr minmax(80%, auto) 7fr;\n}\n\n#container > :nth-child(odd) {\n  background-color: #A9A9A9;\n}\n#container > :nth-child(even) {\n  background-color: #D3D3D3;\n}\n\n#todaysTasks {\n  color: purple;\n  position: absolute;\n  bottom: 0px;\n}\n\n#projectList {\n  position: relative;\n}\n\nh1 {\n  background-color: silver;\n}\n\nbody {\n  background-color: silver;\n}\n\n.task {\n  padding: 2px;\n  margin: 1px;\n  border: black;\n}\n\n.project {\n  padding: 1px;\n}\n\n#taskForm > button, label, input, select {\n  margin: 3px;\n}\n\ndiv > button, input {\n  margin: 3px;\n}\n\n#addProject {\n  background-color: #A9A9A9\n}"],"sourceRoot":""}]);
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
/* harmony export */   "appendInputForm": () => (/* binding */ appendInputForm)
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
  console.log(_app_js__WEBPACK_IMPORTED_MODULE_2__.storage)
  _app_js__WEBPACK_IMPORTED_MODULE_2__.storage[projectName].tasks.forEach(element => {
    appendTaskElement(element.title)
  })
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
/* harmony export */   "handleProjectClick": () => (/* binding */ handleProjectClick)
/* harmony export */ });
/* harmony import */ var _DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMlogic.js */ "./src/DOMlogic.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
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

const handleAddTaskSubmitButton = function () {
  //create task from input, save it to storage, render page from storage (using storage/state to append things)
  //remove input form, return addTask button
  const task = createTaskFromInput();
  const projectName = document.querySelector('#projectTitle').firstElementChild.innerHTML
  console.log(task)
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

}

const handleAddProjectSubmitButton = function() {
  const projectName = document.querySelector('#addProjectInput').value
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
  const currentProject = document.querySelector
  const title = this.innerHTML;
  (0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.setProjectTitle)(title)
  ;(0,_DOMlogic_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)(title)
  //renderTaskList()
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
/* harmony export */   "saveTaskToStorage": () => (/* binding */ saveTaskToStorage)
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
  _app_js__WEBPACK_IMPORTED_MODULE_1__.storage["default project"].tasks.push((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.createTask)('default task', '', '', 'Low'))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9ET01sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbml0aWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICAxZnIgbWlubWF4KDgwJSwgYXV0bykgN2ZyO1xcbn1cXG5cXG4jY29udGFpbmVyID4gOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBOUE5QTk7XFxufVxcbiNjb250YWluZXIgPiA6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XFxufVxcblxcbiN0b2RheXNUYXNrcyB7XFxuICBjb2xvcjogcHVycGxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMXB4O1xcbiAgYm9yZGVyOiBibGFjaztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4jdGFza0Zvcm0gPiBidXR0b24sIGxhYmVsLCBpbnB1dCwgc2VsZWN0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5kaXYgPiBidXR0b24sIGlucHV0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICAxZnIgbWlubWF4KDgwJSwgYXV0bykgN2ZyO1xcbn1cXG5cXG4jY29udGFpbmVyID4gOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBOUE5QTk7XFxufVxcbiNjb250YWluZXIgPiA6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XFxufVxcblxcbiN0b2RheXNUYXNrcyB7XFxuICBjb2xvcjogcHVycGxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMXB4O1xcbiAgYm9yZGVyOiBibGFjaztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4jdGFza0Zvcm0gPiBidXR0b24sIGxhYmVsLCBpbnB1dCwgc2VsZWN0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5kaXYgPiBidXR0b24sIGlucHV0IHtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9hbGwgZG9tIHJlbGF0ZWQgdGhpbmdzIGdvZXMgaW4gaGVyZVxuaW1wb3J0IHtkZWZhdWx0U3RvcmFnZSwgc2F2ZVByb2plY3RUb1N0b3JhZ2UsIHNhdmVUYXNrVG9TdG9yYWdlfSBmcm9tICcuL3N0b3JhZ2UuanMnXG5pbXBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50LCBjcmVhdGVQcm9qZWN0RWxlbWVudEZyb21JbnB1dCwgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiwgY3JlYXRlQWRkVGFza0J1dHRvbiwgY3JlYXRlVGFza0VsZW1lbnQsIGNyZWF0ZUlucHV0Rm9ybSwgY3JlYXRlQWRkUHJvamVjdElucHV0LCBjcmVhdGVUb2RheXNUYXNrc0VsZW1lbnR9IGZyb20gJy4vbG9naWMuanMnXG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vYXBwLmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvamVjdExpc3QgPSBmdW5jdGlvbigpIHtcblxuICBPYmplY3Qua2V5cyhzdG9yYWdlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgaWYoa2V5ICE9PSBcInRvZGF5J3MgdGFza3NcIikge1xuICAgICAgYXBwZW5kUHJvamVjdEVsZW1lbnQoa2V5KVxuICAgIH1cbiAgfSlcbiAgYXBwZW5kQWRkUHJvamVjdEJ1dHRvbigpO1xuICBhcHBlbmRUb2RheXNUYXNrc0VsZW1lbnQoKTtcblxuICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpXG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRUb2RheXNUYXNrc0VsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0JykuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kYXlzVGFza3NFbGVtZW50KCkpO1xufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kUHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RWxlbWVudEZyb21JbnB1dChwcm9qZWN0TmFtZSkpXG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tCdXR0b24oKSlcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZFRhc2tFbGVtZW50ID0gZnVuY3Rpb24odGFza1RpdGxlKXtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrVGl0bGUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKS5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudClcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZEFkZFByb2plY3RJbnB1dCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0JylcbiAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoYWRkQnV0dG9uKVxuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qZWN0SW5wdXQoKSlcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZEFkZFByb2plY3RCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0JylcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKVxuICBpZighYWRkUHJvamVjdEJ1dHRvbikge1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3RCdXR0b24oKSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJUYXNrTGlzdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKVxuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tMaXN0ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgLy9yZW1vdmUgdGhlIGN1cnJlbnQgdGFzayBsaXN0IGFuZCBicmluZyBpbiBhbGwgdGhlIGFzc29jaWF0ZWQgdGFza3MgZnJvbSB0aGUgc3RvcmFnZSBjb21wYXJ0bWVudCBvZiBvdXIgc2hpdFxuICAvL3Byb2plY3ROYW1lIGlzIGdvaW5nIHRvIGJlIGEgc3RyaW5nIHRoYXQgaXMgYSBrZXkgaW4gbXkgc3RvcmFnZVxuICBjbGVhclRhc2tMaXN0KCk7XG4gIGNvbnNvbGUubG9nKHN0b3JhZ2UpXG4gIHN0b3JhZ2VbcHJvamVjdE5hbWVdLnRhc2tzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgYXBwZW5kVGFza0VsZW1lbnQoZWxlbWVudC50aXRsZSlcbiAgfSlcbiAgYXBwZW5kQWRkVGFza0J1dHRvbigpXG5cbiAgLypmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBhcHBlbmRUYXNrRWxlbWVudChzdG9yYWdlLnRhc2tzW2ldLnRpdGxlKVxuICB9XG5cbiAgKi9cbn1cblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBoMy5pbm5lckhUTUwgPSB0aXRsZTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpXG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdFRpdGxlLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIGNvbnNvbGUubG9nKGgzKTtcbiAgaWYocHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0VGl0bGUucmVtb3ZlQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIH1cbiAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGgzKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2tJbnB1dEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0JykubGFzdEVsZW1lbnRDaGlsZC5pZCA9PT0gJ3Rhc2tGb3JtJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIGZhbHNlO1xuXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFzaycpKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKVxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrJylcbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZChhZGRCdXR0b24pXG4gIH1cblxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGFwcGVuZElucHV0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAvL3JlbW92ZSBhZGRUYXNrIGJ1dHRvbiBhbmQgdGhlbiBhcHBlbmQgSW5wdXQgZm9ybSwgYWZ0ZXIgaW5wdXQgZm9ybSBpcyBzdWJtaXR0ZWQgd2Ugd2lsbC4uLlxuICAvL2NyZWF0ZSBhIHRhc2sgZnJvbSB0aGF0IGlucHV0IGZvcm0sIHJlbW92ZSB0aGUgaW5wdXQgZm9ybSwgYXBwZW5kIHRoZSB0YXNrLCBzbGFwIHRoZSBidXR0b24gYmFjayBvblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKS5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dEZvcm0oKSlcblxuXG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aW5pdGlhbGl6YXRpb259IGZyb20gJy4vaW5pdGlhbGl6YXRpb24uanMnXG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKTtcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbmV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXG5leHBvcnQgbGV0IHN0b3JhZ2UgPSB7fTtcblxuXG5pbml0aWFsaXphdGlvbigpO1xuXG4vKiBzdG9yYWdlIHN0cnVjdHVyZSB3aWxsIGxvb2sgbGlrZTpcblxue3Byb2plY3QxOiB7dGFza3M6IFt7dGl0bGUgLCBkYXRlICwgZGV0YWlscyAsIHByaW9yaXR5fSwge3RpdGxlICwgZGF0ZSAsIGRldGFpbHMgLCBwcmlvcml0eX1dXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Egc2hvcnQgZGVzY3JpcHRpb24gb2Ygb3VyIHByb2plY3QgaGVyZScgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gcHJvamVjdDI6IHt0YXNrczogW3thcnJheSBvZiBvYmplY3RzLCBlYWNoIG9iamVjdCBkZXNjcmliaW5nIGEgc2luZ2xlIHRhc2t9XVxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdhIHNob3J0IGRlc2NyaXB0aW9uIG9mIG91ciBwcm9qZWN0IGhlcmUnICAgICAgICAgICAgICAgICAgICAgICAgICB9XG59XG5cblxuY29uc3Qgc3RvcmFnZSA9IHt9XG5zdG9yYWdlWydkZWZhdWx0IHByb2plY3QnXSA9XG57J3Rhc2tzJyA6IFt7J3RpdGxlJzogJ3BsYWNlaG9sZGVyJywgJ2RhdGUnOiAnMDMvMDMvMDMnLCAnZGV0YWlscyc6ICdzb21lIGRlZXRzIGhlcmUnLCAncHJpb3JpdHknOiAnaGlnaCd9XSxcbidkZXNjcmlwdGlvbic6ICdhIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0IGF0IGhhbmQnfTtcbiovXG5cbi8vbmVlZHMgdG8gYmUgb3JnYW5pemVkIGxtYW9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJ2FwcGVuZElucHV0Rm9ybScpXG5cblxuXG4vL3Rhc2tJbnB1dEZvcm1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgZGVmYXVsdFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UuanMnXG5pbXBvcnQge3JlbmRlclByb2plY3RMaXN0LCBzZXRQcm9qZWN0VGl0bGUsIHJlbmRlclRhc2tMaXN0fSBmcm9tICcuL0RPTWxvZ2ljLmpzJ1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tICcuL2FwcC5qcydcblxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgZGVmYXVsdFN0b3JhZ2UoKTtcbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gT2JqZWN0LmtleXMoc3RvcmFnZSlbMF1cbiAgICBzZXRQcm9qZWN0VGl0bGUodGl0bGUpXG4gICAgcmVuZGVyVGFza0xpc3QodGl0bGUpXG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMod2luZG93LmxvY2FsU3RvcmFnZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgc3RvcmFnZVtrZXldID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICB9KVxuICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBPYmplY3Qua2V5cyhzdG9yYWdlKVswXVxuICAgIHNldFByb2plY3RUaXRsZSh0aXRsZSlcbiAgICByZW5kZXJUYXNrTGlzdCh0aXRsZSlcblxuICAgIC8vIGZvciAoY29uc3Qga2V5IG9mIGxvY2FsU3RvcmFnZSkge1xuICAgIC8vICAgc3RvcmFnZVtrZXldID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSk7XG5cbiAgICAvLyB9XG4gIH1cbn0iLCIvL2xvZ2ljIGZvciBob3cgd2UgaGFuZGxlIGRpZmZlcmVudCBldmVudHMgc2hhbGwgZ28gaW4gaGVyZVxuaW1wb3J0IHthcHBlbmRBZGRQcm9qZWN0SW5wdXQsIHNldFByb2plY3RUaXRsZSwgcmVuZGVyVGFza0xpc3QsIHJlbW92ZUFkZFRhc2tCdXR0b24sIHJlbW92ZVRhc2tJbnB1dEZvcm0sIGFwcGVuZElucHV0Rm9ybSwgYXBwZW5kVGFza0VsZW1lbnQsIGFwcGVuZFByb2plY3RFbGVtZW50LCBhcHBlbmRBZGRUYXNrQnV0dG9ufSBmcm9tICcuL0RPTWxvZ2ljLmpzJ1xuaW1wb3J0IHsgZGVmYXVsdFN0b3JhZ2UsIHNhdmVQcm9qZWN0VG9TdG9yYWdlLCBzYXZlVGFza1RvU3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tICcuL2FwcC5qcydcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWRkVGFza0J1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICAvLzxidXR0b24gaWQ9J2FkZFRhc2snIG9uQ2xpY2s9J2FwcGVuZElucHV0Rm9ybSc+QWRkIFRhc2s8L2J1dHRvbj5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2snKVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRUYXNrQnV0dG9uKVxuXG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIFRhc2snXG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3RFbGVtZW50RnJvbUlucHV0ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0JylcbiAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZVByb2plY3RDbGljaylcblxuICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0T2JqZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgJ3Rhc2tzJzogW10sXG4gICAgJ2Rlc2NyaXB0aW9uJzonJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrRnJvbUlucHV0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRhc2sgPSB7fVxuICB0YXNrLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUgIHx8J2RlZmF1bHQgdGFzaydcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlIHx8ICcnXG4gIHRhc2suZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWUgfHwgJydcbiAgdGFzay5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlIHx8ICcnXG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCB0YXNrID0ge31cbiAgdGFzay50aXRsZSA9IHRpdGxlXG4gIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICB0YXNrLmRhdGUgPSBkYXRlXG4gIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eVxuXG4gIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWRkUHJvamVjdElucHV0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdCcpXG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZFByb2plY3RJbnB1dCcpXG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGFkZC5pbm5lckhUTUwgPSAnQWRkJ1xuICBjYW5jZWwuaW5uZXJIVE1MID0gJ0NhbmNlbCdcbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsQWRkUHJvamVjdEJ1dHRvbilcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkUHJvamVjdFN1Ym1pdEJ1dHRvbilcbiAgZGl2LmFwcGVuZENoaWxkKGFkZClcbiAgZGl2LmFwcGVuZENoaWxkKGNhbmNlbClcbiAgbWFpbi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgcmV0dXJuIG1haW47XG5cblxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdCcpXG4gIGFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCBQcm9qZWN0J1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kQWRkUHJvamVjdElucHV0KVxuICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbi5pZCA9ICd0YXNrRm9ybSdcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKVxuICB0aXRsZUxhYmVsLmlubmVySFRNTCA9ICdUYXNrIE5hbWUnXG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZGF0ZScpXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJpb3JpdHknKVxuICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdQcmlvcml0eSdcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHknKVxuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuXG4gIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnaGlnaCcpXG4gIGhpZ2hPcHRpb24uaW5uZXJIVE1MID0gJ0hpZ2gnXG5cbiAgY29uc3QgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJylcbiAgbWVkaXVtT3B0aW9uLmlubmVySFRNTCA9ICdNZWRpdW0nXG5cbiAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsb3cnKVxuICBsb3dPcHRpb24uaW5uZXJIVE1MID0gJ0xvdyc7XG5cbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbilcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKVxuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChsb3dPcHRpb24pXG4gIG1haW4uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcbiAgbWFpbi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZGVzY3JpcHRpb24nKVxuICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9ICdUYXNrIERlc2NyaXB0aW9uJ1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbClcbiAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KVxuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHN1Ym1pdC5pbm5lckhUTUwgPSAnU3VibWl0J1xuICBjYW5jZWwuaW5uZXJIVE1MID0gJ0NhbmNlbCdcbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsQWRkVGFza0J1dHRvbilcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkVGFza1N1Ym1pdEJ1dHRvbilcbiAgZGl2LmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgZGl2LmFwcGVuZENoaWxkKGNhbmNlbClcblxuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG4gIC8vc3VibWl0LnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAnY3JlYXRlVGFza0Zyb21JbnB1dCcpXG5cblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gZnVuY3Rpb24gKHRhc2tUaXRsZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0YXNrcycpXG4gIGRpdi5pbm5lckhUTUwgPSB0YXNrVGl0bGU7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvZGF5c1Rhc2tzRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXlzVGFza3MnKVxuXG4gIGNvbnN0IHRvZGF5c1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b2RheXNUYXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpXG4gIHRvZGF5c1Rhc2suaW5uZXJIVE1MID0gXCJ0b2RheSdzIHRhc2tzXCJcblxuICBkaXYuYXBwZW5kQ2hpbGQodG9kYXlzVGFzayk7XG4gIHRvZGF5c1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZVByb2plY3RDbGljaylcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2FuY2VsQWRkUHJvamVjdEJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBwcm9qZWN0SW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKVxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpXG4gIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RJbnB1dEZvcm0pXG4gIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3RCdXR0b24oKSlcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNhbmNlbEFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2codGhpcylcbiAgcmVtb3ZlVGFza0lucHV0Rm9ybSgpO1xuICBhcHBlbmRBZGRUYXNrQnV0dG9uKCk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRUYXNrU3VibWl0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAvL2NyZWF0ZSB0YXNrIGZyb20gaW5wdXQsIHNhdmUgaXQgdG8gc3RvcmFnZSwgcmVuZGVyIHBhZ2UgZnJvbSBzdG9yYWdlICh1c2luZyBzdG9yYWdlL3N0YXRlIHRvIGFwcGVuZCB0aGluZ3MpXG4gIC8vcmVtb3ZlIGlucHV0IGZvcm0sIHJldHVybiBhZGRUYXNrIGJ1dHRvblxuICBjb25zdCB0YXNrID0gY3JlYXRlVGFza0Zyb21JbnB1dCgpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUxcbiAgY29uc29sZS5sb2codGFzaylcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdG9yYWdlW3Byb2plY3ROYW1lXTsgLy97dGFza3M6IFtdLCBkZXNjcmlwdGlvbjogJyd9XG4gIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2godGFzaylcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrLnRpdGxlKVxuICBzYXZlVGFza1RvU3RvcmFnZShwcm9qZWN0TmFtZSlcbiAgcmVtb3ZlVGFza0lucHV0Rm9ybSgpO1xuICBhcHBlbmRUYXNrRWxlbWVudCh0YXNrLnRpdGxlKVxuICBhcHBlbmRBZGRUYXNrQnV0dG9uKCk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGlmKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Zvcm0nKSkge1xuICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICBhcHBlbmRJbnB1dEZvcm0oKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRQcm9qZWN0U3VibWl0QnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3RJbnB1dCcpLnZhbHVlXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Jyk7XG4gIGNvbnN0IHByb2plY3RJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpXG4gIGlmKCFzdG9yYWdlW3Byb2plY3ROYW1lXSkge1xuXG4gIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RJbnB1dEZvcm0pXG4gIGFwcGVuZFByb2plY3RFbGVtZW50KHByb2plY3ROYW1lKTtcbiAgc2F2ZVByb2plY3RUb1N0b3JhZ2UocHJvamVjdE5hbWUpXG4gIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3RCdXR0b24oKSlcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgncHJvamVjdHMgbXVzdCBiZSBhIGRpZmZlcmVudCBuYW1lIScpXG4gIH1cbn1cblxuXG5cblxuXG5leHBvcnQgY29uc3QgaGFuZGxlUHJvamVjdENsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvclxuICBjb25zdCB0aXRsZSA9IHRoaXMuaW5uZXJIVE1MO1xuICBzZXRQcm9qZWN0VGl0bGUodGl0bGUpXG4gIHJlbmRlclRhc2tMaXN0KHRpdGxlKVxuICAvL3JlbmRlclRhc2tMaXN0KClcbn1cblxuIiwiLy9hbGwgbG9naWMgcmVsYXRpbmcgdG8gc3RvcmFnZSBnb2VzIGhlcmVcbmltcG9ydCB7Y3JlYXRlUHJvamVjdE9iamVjdCwgY3JlYXRlVGFza30gZnJvbSAnLi9sb2dpYy5qcydcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi9hcHAuanMnXG5cbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgc3RvcmFnZVsnZGVmYXVsdCBwcm9qZWN0J10gPSB7XG4gICAgJ3Rhc2tzJzogW10sXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcbiAgfTtcbiAgc3RvcmFnZVtcInRvZGF5J3MgdGFza3NcIl0gPSB7XG4gICAgJ3Rhc2tzJzogW10sXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcbiAgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RheSdzIHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VbXCJ0b2RheSdzIHRhc2tzXCJdKSlcbiAgc3RvcmFnZVsnZGVmYXVsdCBwcm9qZWN0J10udGFza3MucHVzaChjcmVhdGVUYXNrKCdkZWZhdWx0IHRhc2snLCAnJywgJycsICdMb3cnKSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHQgcHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VbJ2RlZmF1bHQgcHJvamVjdCddKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVQcm9qZWN0VG9TdG9yYWdlID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgc3RvcmFnZVtwcm9qZWN0TmFtZV0gPSBjcmVhdGVQcm9qZWN0T2JqZWN0KCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShjcmVhdGVQcm9qZWN0T2JqZWN0KCkpKTtcblxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVRhc2tUb1N0b3JhZ2UgPSBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0ID0gc3RvcmFnZVtwcm9qZWN0TmFtZV1cbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE5hbWUpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9