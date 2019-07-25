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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! module.js */ "./src/js/module.js");
// import {baseUrl} from "modul.js";

// const ifIndexPage = function () {
// 	const getAllPostsXhr = new XMLHttpRequest();
// 	getAllPostsXhr.open("GET", baseUrl);

// 	getAllPostsXhr.onreadystatechange = function () {
// 		if (getAllPostsXhr.readyState === 4 && getAllPostsXhr.status === 200) {
// 			let menuItems = JSON.parse(getAllPostsXhr.response);
// 			console.log(JSON.stringify(menuItems));
// 			menuItems.forEach(function (item) {
// 				let menuLi = document.createElement("li");
// 				menuLi.classList.add("nav-item");
// 				let menuA = document.createElement("a");
// 				menuA.classList.add("nav-link");
// 				menuLi.appendChild(menuA);
// 				menuA.innerText = item.title;
// 				menuA.href = "#";
// 				document.getElementsByClassName("navbar-nav")[0].appendChild(menuLi);
// 				// $(".navbar-nav").append(menuLi);
// 				menuA.onclick = function() {
// 					window.open("post"+item.id+".html", "_self")
// 				}
// 			});
// 		}
// 	}

// 	getAllPostsXhr.send();
// }

// const ifPostPage = function () {
// 	console.log(location);
// 	let postId = parseInt(document.body.dataset.post, 10);
// 	const xhr = new XMLHttpRequest();
// 	xhr.open("GET", baseUrl+postId);

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			let colMd = document.createElement("div");
// 			colMd.classList.add("col-md-3");
// 			document.getElementsByClassName("row")[0].appendChild(colMd);

// 			let card = document.createElement("div");
// 			card.classList.add("card");
// 			colMd.appendChild(card);

// 			let cardBody = document.createElement("div");
// 			cardBody.classList.add("card-body");
// 			card.appendChild(cardBody);

// 			let title = document.createElement("h5");
// 			title.classList.add("card-title");
// 			cardBody.appendChild(title);

// 			let par = document.createElement("p");
// 			par.classList.add("card-text");
// 			cardBody.appendChild(par);

// 			let post = JSON.parse(xhr.response);
// 			par.innerText = post.text;
// 			title.innerText = post.title;

// 		}
// 	}

// 	xhr.send();
// }

// window.addEventListener("load", function() {
// 	const isIndex = location.href.includes("index");
// 	isIndex ? ifIndexPage() : ifPostPage();

// })




const ifIndexPage = function () {
	const getAllPostsXhr = $.get(module_js__WEBPACK_IMPORTED_MODULE_0__["baseUrl"], function(menuItems) {
		menuItems.forEach(function (item) {
			let li = $( "<li></li>" ).addClass("nav-item");
			li.appendTo( ".navbar-nav" );

			let a = $( "<a></a>" ).addClass("nav-link")
			.text(item.title)
			.attr("href","#")
			.on({
				click: function( event ) {
					window.open("post"+item.id+".html", "_self")
				}
			})

			a.appendTo(li);

		});
	});
}

	const ifPostPage = function () {
		let postId = parseInt($("body").data("post"));
		const xhr = $.get(module_js__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + postId, function(post) {
			let colMd = $( "<div></div>" ).addClass( "col-md-3" );
			colMd.appendTo( ".row" );

			let card = $( "<div></div>" ).addClass( "card" );
			card.appendTo(colMd);

			let cardBody = $( "<div></div>" ).addClass( "card-body" );
			cardBody.appendTo(card);

			let title = $( "<h5></h5>" ).addClass( "card-title" ).text(post.title);
			title.appendTo(cardBody);

			let par = $( "<p></p>" ).addClass( "card-text" ).text(post.text);

			par.appendTo(cardBody);

		});
	}

	$( window ).on('load', function() {
		const isIndex = $(location).attr('href').includes("index");
		isIndex ? ifIndexPage() : ifPostPage();
	});




























/***/ }),

/***/ "./src/js/module.js":
/*!**************************!*\
  !*** ./src/js/module.js ***!
  \**************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
 const baseUrl = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts/';



/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/index.js ./src/js/module.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Margo/Desktop/HM 21.07/src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! /Users/Margo/Desktop/HM 21.07/src/js/module.js */"./src/js/module.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map