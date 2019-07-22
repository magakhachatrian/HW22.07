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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import {testFunc} from 'function/testFunc';

const ifIndexPage = function () {
	let postId;
	postId = parseInt(document.body.dataset.post, 10);
	console.log(postId);
	const xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let menuItems = JSON.parse(xhr.response);
			console.log(JSON.stringify(menuItems));
			menuItems.forEach(function (item) {
				let menuLi = document.createElement("li");
				menuLi.classList.add("nav-item");
				let menuA = document.createElement("a");
				menuA.classList.add("nav-link");
				menuLi.appendChild(menuA);
				menuA.innerText = item.title;
				document.getElementsByClassName("navbar-nav")[0].appendChild(menuLi);
				menuA.onclick = function() {
					window.open("post"+item.id+".html", "_self")
				}
			});
		}
	}

	xhr.send();
}

const ifPostPage = function () {
	console.log(location);
	let postId = parseInt(document.body.dataset.post, 10);
	//console.log(postId);
	const xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts/'+postId);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let colMd = document.createElement("div");
			colMd.classList.add("col-md-3");
			document.getElementsByClassName("row")[0].appendChild(colMd);

			let card = document.createElement("div");
			card.classList.add("card");
			colMd.appendChild(card);

			let cardBody = document.createElement("div");
			cardBody.classList.add("card-body");
			card.appendChild(cardBody);

			let title = document.createElement("h5");
			title.classList.add("card-title");
			cardBody.appendChild(title);

			let par = document.createElement("p");
			par.classList.add("card-text");
			cardBody.appendChild(par);


			if (xhr.readyState === 4 && xhr.status === 200) {
				let post = JSON.parse(xhr.response);
				par.innerText = post.text;
				title.innerText = post.title;
			}
		}
	}

	xhr.send();
}

window.addEventListener("load", function() {
	const isIndex = location.href.includes("index");
	isIndex ? ifIndexPage() : ifPostPage();

})

/***/ })

/******/ });
//# sourceMappingURL=index.js.map