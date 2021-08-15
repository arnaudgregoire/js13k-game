/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/innerself/index.js":
/*!*****************************************!*\
  !*** ./node_modules/innerself/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ html),\n/* harmony export */   \"createStore\": () => (/* binding */ createStore)\n/* harmony export */ });\nfunction html([first, ...strings], ...values) {\n    // Weave the literal strings and the interpolations.\n    // We don't have to explicitly handle array-typed values\n    // because concat will spread them flat for us.\n    return values.reduce(\n        (acc, cur) => acc.concat(cur, strings.shift()),\n        [first]\n    )\n\n    // Filter out interpolations which are null or undefined.  null is\n    // loosely-equal only to undefined and itself.\n    .filter(value => value != null)\n    .join(\"\");\n}\n\nfunction createStore(reducer) {\n    let state = reducer();\n    const roots = new Map();\n    const prevs = new Map();\n\n    function render() {\n        for (const [root, component] of roots) {\n            const output = component();\n\n            // Poor man's Virtual DOM implementation :)  Compare the new output\n            // with the last output for this root.  Don't trust the current\n            // value of root.innerHTML as it may have been changed by other\n            // scripts or extensions.\n            if (output !== prevs.get(root)) {\n                prevs.set(root, output);\n                root.innerHTML = output;\n\n                // Dispatch an event on the root to give developers a chance to\n                // do some housekeeping after the whole DOM is replaced under\n                // the root. You can re-focus elements in the listener to this\n                // event. See example03.\n                const event = new CustomEvent(\"render\", { detail: state });\n                root.dispatchEvent(event);\n            }\n        }\n    };\n\n    return {\n        attach(component, root) {\n            roots.set(root, component);\n            render();\n        },\n        connect(component) {\n            // Return a decorated component function.\n            return (...args) => component(state, ...args);\n        },\n        dispatch(action, ...args) {\n            state = reducer(state, action, args);\n            render();\n        },\n    };\n}\n\n\n//# sourceURL=webpack://js13k/./node_modules/innerself/index.js?");

/***/ }),

/***/ "./node_modules/innerself/logger.js":
/*!******************************************!*\
  !*** ./node_modules/innerself/logger.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logger)\n/* harmony export */ });\nfunction logger(reducer) {\n    return function(prev_state, action, args) {\n        console.group(action);\n        console.log(\"Previous State\", prev_state);\n        console.log(\"Action Arguments\", args);\n        const next_state = reducer(prev_state, action, args);\n        console.log(\"Next State\", next_state);\n        console.groupEnd();\n        return next_state;\n    }\n}\n\n\n//# sourceURL=webpack://js13k/./node_modules/innerself/logger.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n/* harmony import */ var _components_customers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/customers */ \"./src/app/components/customers.js\");\n/* harmony import */ var _components_gold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gold */ \"./src/app/components/gold.js\");\n/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timer */ \"./src/app/components/timer.js\");\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game */ \"./src/app/components/game.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <div style='height:100vh; width:100vw; font-family:Verdana; color:white; background-color:black'>\r\n            <div style='display:flex; justify-content:space-even;'>\r\n                ${(0,_components_timer__WEBPACK_IMPORTED_MODULE_3__.default)()}\r\n                ${(0,_components_gold__WEBPACK_IMPORTED_MODULE_2__.default)()}\r\n            </div>\r\n            <div style='display:flex; justify-content:space-between;'>\r\n                ${(0,_components_customers__WEBPACK_IMPORTED_MODULE_1__.default)()}\r\n                ${(0,_components_game__WEBPACK_IMPORTED_MODULE_4__.default)()}\r\n                <div>\r\n                    <h3>Controls</h3>\r\n                    <p>A: Acanthe</p>\r\n                    <p>B: Baethus</p>\r\n                    <p>C: Copea</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n}\r\n\n\n//# sourceURL=webpack://js13k/./src/app/app.js?");

/***/ }),

/***/ "./src/app/components/component.js":
/*!*****************************************!*\
  !*** ./src/app/components/component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n\r\n\r\nfunction Component(component, index) {\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <li>\r\n            <p>name:${component}</p>\r\n            <p>index:${index}</p>\r\n        </li>\r\n    `;\r\n}\n\n//# sourceURL=webpack://js13k/./src/app/components/component.js?");

/***/ }),

/***/ "./src/app/components/customer.js":
/*!****************************************!*\
  !*** ./src/app/components/customer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Customer)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n\r\n\r\nfunction Customer(customer, index) {\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <li>\r\n            <p>name:${customer.name}</p>\r\n            <p>type:${customer.type}</p>\r\n            <p>index:${index}</p>\r\n        </li>\r\n    `;\r\n}\n\n//# sourceURL=webpack://js13k/./src/app/components/customer.js?");

/***/ }),

/***/ "./src/app/components/customers.js":
/*!*****************************************!*\
  !*** ./src/app/components/customers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/app/store.js\");\n/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer */ \"./src/app/components/customer.js\");\n\r\n\r\n\r\n\r\nfunction Customers(state) {\r\n    const { customers } = state;\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <div>\r\n            <h2>Customers</h2>\r\n            <ul>\r\n                ${customers.map(_customer__WEBPACK_IMPORTED_MODULE_2__.default)}\r\n            </ul>\r\n        </div>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_store__WEBPACK_IMPORTED_MODULE_1__.connect)(Customers));\n\n//# sourceURL=webpack://js13k/./src/app/components/customers.js?");

/***/ }),

/***/ "./src/app/components/game.js":
/*!************************************!*\
  !*** ./src/app/components/game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/app/store.js\");\n/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe */ \"./src/app/components/recipe.js\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ \"./src/app/components/component.js\");\n\r\n\r\n\r\n\r\n\r\nfunction Game(state) {\r\n    const { recipe, sentence, composition } = state;\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <div>\r\n            <h3>${sentence}</h3>\r\n            <ul>\r\n                ${composition.map(_component__WEBPACK_IMPORTED_MODULE_3__.default)}\r\n            </ul>\r\n            ${(0,_recipe__WEBPACK_IMPORTED_MODULE_2__.default)(recipe)}\r\n        </div>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_store__WEBPACK_IMPORTED_MODULE_1__.connect)(Game));\n\n//# sourceURL=webpack://js13k/./src/app/components/game.js?");

/***/ }),

/***/ "./src/app/components/gold.js":
/*!************************************!*\
  !*** ./src/app/components/gold.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/app/store.js\");\n\r\n\r\n\r\nfunction Gold(state) {\r\n    const { gold } = state;\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <p>Gold :${gold}</p>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_store__WEBPACK_IMPORTED_MODULE_1__.connect)(Gold));\n\n//# sourceURL=webpack://js13k/./src/app/components/gold.js?");

/***/ }),

/***/ "./src/app/components/recipe.js":
/*!**************************************!*\
  !*** ./src/app/components/recipe.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/app/store.js\");\n\r\n\r\n\r\nfunction Recipe(state) {\r\n    const { recipe } = state;\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <div>\r\n            <p>title:${recipe.title}</p>\r\n            <p>content:${recipe.content}</p>\r\n        </div>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_store__WEBPACK_IMPORTED_MODULE_1__.connect)(Recipe));\n\n//# sourceURL=webpack://js13k/./src/app/components/recipe.js?");

/***/ }),

/***/ "./src/app/components/timer.js":
/*!*************************************!*\
  !*** ./src/app/components/timer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var innerself_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself/index */ \"./node_modules/innerself/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/app/store.js\");\n\r\n\r\n\r\nfunction Timer(state) {\r\n    const { timer } = state;\r\n    return innerself_index__WEBPACK_IMPORTED_MODULE_0__.default`\r\n        <p>Time :${timer}</p>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_store__WEBPACK_IMPORTED_MODULE_1__.connect)(Timer));\n\n//# sourceURL=webpack://js13k/./src/app/components/timer.js?");

/***/ }),

/***/ "./src/app/reducer.js":
/*!****************************!*\
  !*** ./src/app/reducer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reducer)\n/* harmony export */ });\nconst init = {\r\n    timer:\"00:00\",\r\n    gold:0,\r\n    customers: [],\r\n    sentence: \"'a green Zoltan please, im thirsty'\",\r\n    composition:[],\r\n    recipe:{\r\n        title:\"'The Green Zoltan'\",\r\n        content:\"2x Acanthe, 2x Qarus, 1x Fireweed\"\r\n    }\r\n};\r\n\r\nconst controls = {\r\n    65: 'Acanthe',\r\n    66: 'Baethus',\r\n    67: 'Copea'\r\n}\r\n\r\nfunction reducer(state = init, action, args) {\r\n    switch (action) {\r\n        case \"CHANGE_TIMER\":\r\n            const [timer] = args;\r\n            return Object.assign({}, state, {\r\n                timer: timer\r\n            });\r\n\r\n        case \"CHANGE_GOLD\": {\r\n            const [gold] = args;\r\n            return Object.assign({}, state, {\r\n                gold: gold\r\n            });\r\n        }\r\n        case \"ADD_CUSTOMER\": {\r\n            const {customers} = state;\r\n            const [customer] = args;\r\n            return Object.assign({}, state, {\r\n                customers: [...customers, customer]\r\n            });\r\n        }\r\n        case \"REMOVE_CUSTOMER\": {\r\n            const {customers} = state;\r\n            const [index] = args;\r\n            return Object.assign({}, state, {\r\n                customers: [\r\n                    ...customers.slice(0, index),\r\n                    ...customers.slice(index + 1)\r\n                ]\r\n            });\r\n        }\r\n        case \"KEY_PRESSED\":{\r\n            const {composition} = state;\r\n            const [keyCode] = args;\r\n            const componentToAdd = controls[keyCode];\r\n            if(componentToAdd){\r\n                return Object.assign({}, state, {\r\n                    composition: composition.concat(componentToAdd)\r\n                });\r\n            }\r\n        }\r\n\r\n        default:\r\n            return state;\r\n    }\r\n}\n\n//# sourceURL=webpack://js13k/./src/app/reducer.js?");

/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attach\": () => (/* binding */ attach),\n/* harmony export */   \"connect\": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var innerself__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! innerself */ \"./node_modules/innerself/index.js\");\n/* harmony import */ var innerself_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! innerself/logger */ \"./node_modules/innerself/logger.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/app/reducer.js\");\n\r\n\r\n\r\n\r\n\r\nconst { attach, connect, dispatch } =\r\n    (0,innerself__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,innerself_logger__WEBPACK_IMPORTED_MODULE_1__.default)(_reducer__WEBPACK_IMPORTED_MODULE_2__.default));\r\n\r\nwindow.dispatch = dispatch;\r\n\r\n\n\n//# sourceURL=webpack://js13k/./src/app/store.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/store */ \"./src/app/store.js\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n\r\n\r\n\r\n(0,_app_store__WEBPACK_IMPORTED_MODULE_0__.attach)(_app_app__WEBPACK_IMPORTED_MODULE_1__.default, document.querySelector(\"#root\"));\r\n\r\nsetInterval(()=>{dispatch('CHANGE_TIMER', (Math.random()*100).toFixed(2))}, 1000);\r\nsetInterval(()=>{dispatch('CHANGE_GOLD', parseInt(Math.random()*100))}, 1500);\r\nsetInterval(()=>{dispatch('ADD_CUSTOMER', {type:`TYPE_${parseInt(Math.random()*10)}`, name:Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)})}, 5000);\r\nsetInterval(()=>{dispatch('REMOVE_CUSTOMER', 0)}, 12500);\r\n\r\nwindow.addEventListener(\"keydown\", event => {\r\n    console.log(event);\r\n    dispatch('KEY_PRESSED', event.keyCode);\r\n});\n\n//# sourceURL=webpack://js13k/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;