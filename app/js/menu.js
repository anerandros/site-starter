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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundles/menu.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundles/menu.ts":
/*!*************************!*\
  !*** ./bundles/menu.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ../src/menu-manager/menu.manager.ts */ \"./src/menu-manager/menu.manager.ts\");\r\nvar menu_manager_1 = __webpack_require__(/*! ../src/menu-manager/menu.manager */ \"./src/menu-manager/menu.manager.ts\");\r\nvar menuManager = new menu_manager_1.MenuManager();\r\n\n\n//# sourceURL=webpack:///./bundles/menu.ts?");

/***/ }),

/***/ "./src/menu-manager/menu.manager.ts":
/*!******************************************!*\
  !*** ./src/menu-manager/menu.manager.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MenuManager = /** @class */ (function () {\r\n    function MenuManager(menuObj, ref) {\r\n        this._menu = {};\r\n        if (menuObj) {\r\n            this._externalMenu = menuObj;\r\n            this.unwrapMenu();\r\n        }\r\n        ref && (this._ref = ref);\r\n        return this;\r\n    }\r\n    Object.defineProperty(MenuManager.prototype, \"externalMenu\", {\r\n        get: function () { return this._externalMenu; },\r\n        set: function (menu) { this._externalMenu = menu; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(MenuManager.prototype, \"menu\", {\r\n        get: function () { return this._menu; },\r\n        set: function (menu) { this._menu = menu; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(MenuManager.prototype, \"ref\", {\r\n        get: function () { return this._ref; },\r\n        set: function (ref) { this._ref = ref; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    MenuManager.prototype.unwrapMenu = function () {\r\n        this.menu = this.externalMenu.menu;\r\n        return this.menu;\r\n    };\r\n    MenuManager.prototype.attachMenuToDocument = function () {\r\n        var _this = this;\r\n        this.menu.forEach(function (item) {\r\n            var liElement = document.createElement(\"li\");\r\n            var aElement = document.createElement(\"a\");\r\n            aElement.href = \"#\";\r\n            var imgElement = document.createElement(\"img\");\r\n            imgElement.src = item.icon_link;\r\n            imgElement.alt = item.name;\r\n            imgElement.style.width = \"30px\";\r\n            imgElement.style.height = \"30px\";\r\n            aElement.appendChild(imgElement);\r\n            liElement.appendChild(aElement);\r\n            _this.ref.appendChild(liElement);\r\n        });\r\n    };\r\n    return MenuManager;\r\n}());\r\nexports.MenuManager = MenuManager;\r\n\n\n//# sourceURL=webpack:///./src/menu-manager/menu.manager.ts?");

/***/ })

/******/ });