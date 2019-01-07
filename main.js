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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/components/advantages/advantages.scss":
/*!********************************************************!*\
  !*** ./frontend/components/advantages/advantages.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/advantages/index.js":
/*!*************************************************!*\
  !*** ./frontend/components/advantages/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advantages_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advantages.scss */ "./frontend/components/advantages/advantages.scss");
/* harmony import */ var _advantages_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_advantages_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/components/contacts/contacts.scss":
/*!****************************************************!*\
  !*** ./frontend/components/contacts/contacts.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/contacts/index.js":
/*!***********************************************!*\
  !*** ./frontend/components/contacts/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contacts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.scss */ "./frontend/components/contacts/contacts.scss");
/* harmony import */ var _contacts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_contacts_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/components/default/default.scss":
/*!**************************************************!*\
  !*** ./frontend/components/default/default.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/default/index.js":
/*!**********************************************!*\
  !*** ./frontend/components/default/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.scss */ "./frontend/components/default/variables.scss");
/* harmony import */ var _variables_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_variables_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.scss */ "./frontend/components/default/default.scss");
/* harmony import */ var _default_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_default_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./frontend/components/default/variables.scss":
/*!****************************************************!*\
  !*** ./frontend/components/default/variables.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/footer/footer.scss":
/*!************************************************!*\
  !*** ./frontend/components/footer/footer.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/footer/index.js":
/*!*********************************************!*\
  !*** ./frontend/components/footer/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./frontend/components/footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/components/header/header.scss":
/*!************************************************!*\
  !*** ./frontend/components/header/header.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/header/index.js":
/*!*********************************************!*\
  !*** ./frontend/components/header/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./frontend/components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/components/main/index.js":
/*!*******************************************!*\
  !*** ./frontend/components/main/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./frontend/components/main/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/components/main/main.scss":
/*!********************************************!*\
  !*** ./frontend/components/main/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/process/index.js":
/*!**********************************************!*\
  !*** ./frontend/components/process/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _process_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process.scss */ "./frontend/components/process/process.scss");
/* harmony import */ var _process_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_process_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/components/process/process.scss":
/*!**************************************************!*\
  !*** ./frontend/components/process/process.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/components/services/index.js":
/*!***********************************************!*\
  !*** ./frontend/components/services/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.scss */ "./frontend/components/services/services.scss");
/* harmony import */ var _services_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./frontend/components/services/services.scss":
/*!****************************************************!*\
  !*** ./frontend/components/services/services.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/script.js":
/*!****************************!*\
  !*** ./frontend/script.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/default */ "./frontend/components/default/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./frontend/components/header/index.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main */ "./frontend/components/main/index.js");
/* harmony import */ var _components_advantages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/advantages */ "./frontend/components/advantages/index.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/services */ "./frontend/components/services/index.js");
/* harmony import */ var _components_process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/process */ "./frontend/components/process/index.js");
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contacts */ "./frontend/components/contacts/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer */ "./frontend/components/footer/index.js");

/* components */










/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map