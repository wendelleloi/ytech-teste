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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_hightligths_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hightligths.js */ \"./src/modules/hightligths.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_backToTop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/backToTop.js */ \"./src/modules/backToTop.js\");\n\n\n\n\n\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_1__.sliderController)();\n(0,_modules_hightligths_js__WEBPACK_IMPORTED_MODULE_2__.hightLightsController)();\n(0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactController)();\n(0,_modules_backToTop_js__WEBPACK_IMPORTED_MODULE_4__.backToTopController)();\n\n//# sourceURL=webpack://teste_front/./src/index.js?");

/***/ }),

/***/ "./src/modules/backToTop.js":
/*!**********************************!*\
  !*** ./src/modules/backToTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backToTopController: () => (/* binding */ backToTopController)\n/* harmony export */ });\nconst isScrolled = el => {\n  const rect = el.getBoundingClientRect();\n  const elemTop = rect.top;\n  const elemBottom = rect.bottom;\n  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;\n  return isVisible;\n};\n\n// window.onscroll = function () {\n//   scrollFunction(slider);\n// };\n\nconst backToTopController = () => {\n  const slider = document.querySelector(\"#slider\");\n  const backToTopButton = document.querySelector(\".back-to-top-button\");\n  function scrollFunction(slider) {\n    if (document.body.scrollTop > slider.scrollTop || document.documentElement.scrollTop > slider.scrollTop) {\n      backToTopButton.classList.add(\"show\");\n    } else {\n      backToTopButton.classList.remove(\"show\");\n    }\n  }\n  window.onscroll = function () {\n    scrollFunction(slider);\n  };\n  backToTopButton.addEventListener(\"click\", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n};\n\n//# sourceURL=webpack://teste_front/./src/modules/backToTop.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactController: () => (/* binding */ contactController)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\nconst adressController = () => {\n  let address = document.querySelector(\".contact-address\");\n  const addressClass = _variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.address.icon.split(\" \");\n  const addressIcon = document.createElement(\"i\");\n  addressIcon.classList.add(addressClass[0]);\n  addressIcon.classList.add(addressClass[1]);\n  address.appendChild(addressIcon);\n  let addressLocation = document.createElement(\"p\");\n  addressLocation.innerText = _variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.address.location;\n  address.appendChild(addressLocation);\n};\nconst phoneController = () => {\n  let phone = document.querySelector(\".contact-phone\");\n  const phoneClass = _variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.phone.icon.split(\" \");\n  const phoneIcon = document.createElement(\"i\");\n  phoneIcon.classList.add(phoneClass[0]);\n  phoneIcon.classList.add(phoneClass[1]);\n  phone.appendChild(phoneIcon);\n  const phoneNumbersLength = _variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.phone.numbers.length;\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.phone.numbers.forEach((number, index) => {\n    const phoneLink = document.createElement(\"a\");\n    phoneLink.setAttribute(\"href\", `tel:${number}`);\n    const phoneNumber = phoneNumbersLength > 1 && index + 1 !== phoneNumbersLength ? `${number}, ` : number;\n    phoneLink.innerText = phoneNumber;\n    phone.appendChild(phoneLink);\n  });\n};\nconst emailController = () => {\n  let email = document.querySelector(\".contact-email\");\n  const emailClass = _variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.email.icon.split(\" \");\n  const emailIcon = document.createElement(\"i\");\n  emailIcon.classList.add(emailClass[0]);\n  emailIcon.classList.add(emailClass[1]);\n  email.appendChild(emailIcon);\n  let emailAddress = document.createElement(\"a\");\n  emailAddress.setAttribute(\"href\", `mailto:${_variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.email.address}`);\n  emailAddress.innerText = _variables_js__WEBPACK_IMPORTED_MODULE_0__.contact.email.address;\n  email.appendChild(emailAddress);\n};\nconst formController = () => {\n  const form = document.querySelector(\"form\");\n  const successMessage = document.querySelector(\".success-form\");\n  form.addEventListener(\"submit\", event => {\n    event.preventDefault();\n    if (event.isTrusted) successMessage.classList.add(\"show\");\n  });\n};\nconst contactController = () => {\n  adressController();\n  phoneController();\n  emailController();\n  formController();\n};\n\n//# sourceURL=webpack://teste_front/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/hightligths.js":
/*!************************************!*\
  !*** ./src/modules/hightligths.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hightLightsController: () => (/* binding */ hightLightsController)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\nconst hightLightsController = () => {\n  const hightlightContainer = document.querySelector(\".hightlight-container\");\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__.cards.forEach(item => {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"card\");\n    card.style.backgroundImage = `url(${item.background})`;\n    const content = document.createElement(\"div\");\n    content.classList.add(\"content\");\n    const title = document.createElement(\"h2\");\n    title.classList.add(\"title\");\n    title.innerText = item.title;\n    const copy = document.createElement(\"p\");\n    copy.classList.add(\"copy\");\n    copy.innerText = item.details;\n    const cta = document.createElement(\"button\");\n    cta.classList.add(\"btn\");\n    cta.innerText = item.button;\n    content.appendChild(title);\n    content.appendChild(copy);\n    content.appendChild(cta);\n    card.appendChild(content);\n    hightlightContainer.appendChild(card);\n  });\n};\n\n//# sourceURL=webpack://teste_front/./src/modules/hightligths.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderController: () => (/* binding */ sliderController)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\nconst sliderController = () => {\n  let slider = document.querySelector(\".slider\");\n  let cardTitle = document.querySelector(\".card-infos-title\");\n  let cardContent = document.querySelector(\".card-infos-content\");\n  let next = document.querySelector(\".fa-angle-double-right\");\n  let back = document.querySelector(\".fa-angle-double-left\");\n\n  //load\n  const load = items => {\n    cardContent.innerText = items.content;\n    cardTitle.innerText = items.title;\n    slider.style.backgroundImage = `url(${items.background})`;\n  };\n\n  //next and pre song load\n  let index = 0;\n  const nextItem = () => {\n    index = (index + 1) % _variables_js__WEBPACK_IMPORTED_MODULE_0__.sliders.length;\n    load(_variables_js__WEBPACK_IMPORTED_MODULE_0__.sliders[index]);\n  };\n  const prevItem = () => {\n    index = (index - 1 + _variables_js__WEBPACK_IMPORTED_MODULE_0__.sliders.length) % _variables_js__WEBPACK_IMPORTED_MODULE_0__.sliders.length;\n    load(_variables_js__WEBPACK_IMPORTED_MODULE_0__.sliders[index]);\n  };\n  next.addEventListener(\"click\", nextItem);\n  back.addEventListener(\"click\", prevItem);\n  load(_variables_js__WEBPACK_IMPORTED_MODULE_0__.sliders[0]);\n  let timer = setInterval(() => {\n    nextItem();\n  }, _variables_js__WEBPACK_IMPORTED_MODULE_0__.globalValues.timer);\n};\n\n//# sourceURL=webpack://teste_front/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cards: () => (/* binding */ cards),\n/* harmony export */   contact: () => (/* binding */ contact),\n/* harmony export */   globalValues: () => (/* binding */ globalValues),\n/* harmony export */   sliders: () => (/* binding */ sliders)\n/* harmony export */ });\nconst globalValues = {\n  timer: 5000\n};\nconst sliders = [{\n  title: \"Jhon Doe 1\",\n  content: \"Lorem Ipsum\",\n  background: \"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80?width=1200&height=1200&fit=crop\"\n}, {\n  title: \"Jhon Doe 2\",\n  content: \"Lorem Ipsum\",\n  background: \"https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80?width=1200&height=1200&fit=crop\"\n}, {\n  title: \"Jhon Doe 3\",\n  content: \"Lorem Ipsum\",\n  background: \"https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80?width=1200&height=1200&fit=crop\"\n}];\nconst cards = [{\n  background: \"https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ\",\n  title: \"Jhon Doe 1\",\n  details: \"Lorem ipsum 1\",\n  button: \"view\"\n}, {\n  background: \"https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ\",\n  title: \"Jhon Doe 2\",\n  details: \"Lorem ipsum 2\",\n  button: \"view\"\n}, {\n  background: \"https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ\",\n  title: \"Jhon Doe 3\",\n  details: \"Lorem ipsum 3\",\n  button: \"view\"\n}];\nconst contact = {\n  address: {\n    icon: \"fa fa-location-dot\",\n    location: \"lorem ipsum, ipsum\"\n  },\n  phone: {\n    icon: \"fa fa-phone\",\n    numbers: [\"99999999999999\", \"9999999999\"]\n  },\n  email: {\n    icon: \"fa-solid fa-envelope\",\n    address: \"JhonDoe@doe.com\"\n  }\n};\n\n\n//# sourceURL=webpack://teste_front/./src/modules/variables.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://teste_front/./src/style.scss?");

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