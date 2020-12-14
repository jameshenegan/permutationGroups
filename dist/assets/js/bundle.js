/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PermutationGroup.js":
/*!*********************************!*\
  !*** ./src/PermutationGroup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PermutationGroup = /*#__PURE__*/function () {\n  function PermutationGroup(numElements) {\n    _classCallCheck(this, PermutationGroup);\n\n    this.numElements = numElements;\n    this.setOfElements = [];\n    this.permutations = [];\n    this.JSONpermutations = [];\n  }\n\n  _createClass(PermutationGroup, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.makeSet();\n      this.permutations = this.makePermutations(this.setOfElements);\n      this.makeJSONpermutations();\n    }\n  }, {\n    key: \"getSign\",\n    value: function getSign(permArray) {\n      var numEvenLengthCycles = this.getNumberOfEvenLengthCycles(permArray);\n      var toReturn;\n      numEvenLengthCycles % 2 === 0 ? toReturn = 1 : toReturn = -1;\n      return toReturn;\n    }\n  }, {\n    key: \"getNumberOfEvenLengthCycles\",\n    value: function getNumberOfEvenLengthCycles(permArray) {\n      var elementsToConsider = this.getElementsToConsider(permArray); //console.log(\"Which elements moved?\");\n      //console.log(elementsToConsider);\n\n      var numOfEvenLengthCycles = 0;\n\n      while (elementsToConsider.length > 0) {\n        var elementWentHere = -1; // begin by forming a chain with  the first item on our list of items to consider.]\n        // keep track of where we start (this is where we end)\n\n        var whereWeStarted = elementsToConsider[0]; // keep track of the number of elements considered\n\n        var numConsidered = 0;\n        var currentElementToConsider = elementsToConsider[0];\n\n        while (elementWentHere !== whereWeStarted) {\n          //console.log(\"Current elment to consider: \");\n          //console.log(currentElementToConsider);\n          // whenever we consider a new item, remove that item from the list.\n          elementWentHere = this.whereDidElementGo(currentElementToConsider, permArray); //console.log(\"Element went here:\");\n          //console.log(elementWentHere);\n\n          elementsToConsider = this.removeElement(elementsToConsider, elementWentHere);\n          numConsidered++; //console.log(\"Elements left to consider:\");\n          //console.log(elementsToConsider);\n\n          currentElementToConsider = elementWentHere;\n        }\n\n        if (numConsidered % 2 == 0) {\n          numOfEvenLengthCycles++;\n        }\n      }\n\n      return numOfEvenLengthCycles;\n    }\n  }, {\n    key: \"whereDidElementGo\",\n    value: function whereDidElementGo(element, permArray) {\n      return permArray[element];\n    }\n  }, {\n    key: \"removeElement\",\n    value: function removeElement(elementsToConsider, valueToRemove) {\n      return elementsToConsider.filter(function (element) {\n        return element !== valueToRemove;\n      });\n    }\n  }, {\n    key: \"getElementsToConsider\",\n    value: function getElementsToConsider(permArray) {\n      var elementsToConsider = [];\n\n      for (var j = 0; j < permArray.length; j++) {\n        if (permArray[j] !== j) {\n          elementsToConsider.push(j);\n        }\n      }\n\n      return elementsToConsider;\n    }\n  }, {\n    key: \"performBinaryOperationFromIndices\",\n    value: function performBinaryOperationFromIndices(index1, index2) {\n      var perm1 = this.getPermutationArrayFromIndex(index1);\n      var perm2 = this.getPermutationArrayFromIndex(index2);\n      var product = this.performBinaryOperation(perm1, perm2);\n      return this.getIndexFromPermutationArray(product);\n    }\n  }, {\n    key: \"performBinaryOperation\",\n    value: function performBinaryOperation(perm1, perm2) {\n      var toReturn = [];\n\n      for (var j = 0; j < this.numElements; j++) {\n        toReturn.push(perm2[perm1[j]]);\n      }\n\n      return toReturn;\n    }\n  }, {\n    key: \"getPermutationArrayFromIndex\",\n    value: function getPermutationArrayFromIndex(index) {\n      return this.permutations[index];\n    }\n  }, {\n    key: \"getIndexFromPermutationArray\",\n    value: function getIndexFromPermutationArray(array) {\n      return this.JSONpermutations.indexOf(JSON.stringify(array));\n    }\n  }, {\n    key: \"makeJSONpermutations\",\n    value: function makeJSONpermutations() {\n      var JSONpermutations = [];\n      this.permutations.forEach(function (permutation) {\n        return JSONpermutations.push(JSON.stringify(permutation));\n      });\n      this.JSONpermutations = JSONpermutations;\n    } // https://www.30secondsofcode.org/js/s/permutations\n\n  }, {\n    key: \"makePermutations\",\n    value: function makePermutations(arr) {\n      var _this = this;\n\n      if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;\n      return arr.reduce(function (acc, item, i) {\n        return acc.concat(_this.makePermutations([].concat(_toConsumableArray(arr.slice(0, i)), _toConsumableArray(arr.slice(i + 1)))).map(function (val) {\n          return [item].concat(_toConsumableArray(val));\n        }));\n      }, []);\n    }\n  }, {\n    key: \"makeSet\",\n    value: function makeSet() {\n      var setOfElements = [];\n\n      for (var j = 0; j < this.numElements; j++) {\n        setOfElements.push(j);\n      }\n\n      this.setOfElements = setOfElements;\n    }\n  }]);\n\n  return PermutationGroup;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PermutationGroup);\n\n//# sourceURL=webpack://permutationgroups/./src/PermutationGroup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PermutationGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermutationGroup */ \"./src/PermutationGroup.js\");\n\nvar s5 = new _PermutationGroup__WEBPACK_IMPORTED_MODULE_0__.default(5);\ns5.initialize();\nconsole.log(s5.getSign([2, 3, 4, 1, 0]));\n\n//# sourceURL=webpack://permutationgroups/./src/index.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;