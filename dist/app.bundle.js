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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/bg_todo01.jpg":
/*!*************************************!*\
  !*** ./assets/images/bg_todo01.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8a5c953c49c1ff3c16fcaf4278ec665.jpg";

/***/ }),

/***/ "./assets/images/bg_todo02.jpg":
/*!*************************************!*\
  !*** ./assets/images/bg_todo02.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b3f6d41efb7ff1658ac69e011e39e4a8.jpg";

/***/ }),

/***/ "./assets/images/bg_todo03.jpg":
/*!*************************************!*\
  !*** ./assets/images/bg_todo03.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "301a6a81427dfd7d9802962786754de1.jpg";

/***/ }),

/***/ "./assets/images/bg_todo04.jpg":
/*!*************************************!*\
  !*** ./assets/images/bg_todo04.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "880a16fa1e58344723efc9035db30114.jpg";

/***/ }),

/***/ "./assets/images/bg_todo05.jpg":
/*!*************************************!*\
  !*** ./assets/images/bg_todo05.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c867e10108edf5c3320b36ee1a6a9be0.jpg";

/***/ }),

/***/ "./src/LazyObserver.js":
/*!*****************************!*\
  !*** ./src/LazyObserver.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Using Intersection Observer API to trigger image loads

/**
 * . API가 isIntersecting속성을 사용하여 요소가 뷰포트에 들어간 것을 감지하면 속성에서 URL을 선택하고 이를 브라우저 의 속성으로 이동
 *  하여 이미지로드를 트리거합니다. 이 작업이 완료되면 이미지에서 게으른 클래스를 제거하고 해당 이미지에서 관찰자를 제거합니다.
 *
 * 1. 숫자 계산 안해도 된다
 *
 * 단점 :
 *  브라우저를 탄다
 *
 * 개념 : IntersectionObserver
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * The Intersection Observer API lets code register a callback function that is executed whenever an
 *  element they wish to monitor enters or exits another element (or the viewport), or when the amount
 * by which the two intersect changes by a requested amount. This way, sites no longer need to do anything on
 * the main thread to watch for this kind of element intersection, and the browser is free to optimize
 * the management of intersections as it sees fit.
 */
function LazyObserver(hasIntersectionObserver) {
  var lazyImages = null;
  console.log('실행');
  hasIntersectionObserver; // if ('IntersectionObserver' in window) {

  lazyImages = document.querySelectorAll('img.lazy');
  var imgObserber = new IntersectionObserver(observerHandler);
  Array.from(lazyImages).map(function (item) {
    return imgObserber.observe(item);
  }); // }
}

function observerHandler(entries, obserber) {
  entries.map(function (entry) {
    var target = entry.target;

    if (entry.isIntersecting) {
      target.classList.remove('lazy');
      target.src = target.dataset.src;
    } else {
      target.classList.add('lazy');
      target.src = '';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (LazyObserver);

/***/ }),

/***/ "./src/LazyloadNormal.js":
/*!*******************************!*\
  !*** ./src/LazyloadNormal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 1. javascript를 통한 방법

/**
 * env condition
 *  - 동적 이미지 태그 생성
 *  - 웹팩내 번들링 이미지 여서 cdn 이미지 테스트가 필요함
 *
 * 사용 개념
 *
 *  1. Events: DOMContentLoaded, scroll, resize, orientationChange
 *  2. throttle <--- scroll resize 등 리소스를 많이 잡아 먹으며 수없이 많이 발생할 여지가 있는 이벤트들의
 *  발생을 제한하는 시간을 제공하자
 * ex) 10ms 마다 일어 나던것을 1000ms 에 캐치 할 수 있도록 하는 것
 *
 *  1. 사용시 맨 위에서 부터 읽어 내려 갈때 부드럽게 적용됨
 *  2. 다만 맨 아래 시작일 경우 전부 적용되어 다 불러와짐..
 *  3. img의 너비 높이를 세팅해 주어야 될듯 하다
 */

/*
if (
  offsetTop - window.innerHeight > scrollTop + clientHeight / 5 ||
  offsetTop + window.innerHeight < scrollTop - clientHeight / 5
) {
  item.src = ''
  item.classList.add('lazy')
} else if (
  offsetTop > window.innerHeight + scrollTop ||
  offsetTop < window.innerHeight + scrollTop
) {
  console.log(id, offsetTop + window.innerHeight, scrollTop, 'complete')
  item.src = item.dataset.src
  item.classList.remove('lazy')
}*/
function isCurrentViewPortImageSrc(offsetTop, clientHeight, windowInnerHeight, scrollTop) {
  return offsetTop + clientHeight < scrollTop || offsetTop - windowInnerHeight > scrollTop;
}

function addLazyClass(isLazy, el) {
  if (isLazy) {
    el.src = '';
    el.classList.add('lazy');
  } else {
    el.classList.remove('lazy');
    el.src = el.dataset.src;
  }
}

function LazyloadingNormal(e) {
  console.log('DOMContentLoaded');
  var lazyImages = Array.from(document.querySelectorAll('img.lazy'));

  var lazyloader = function lazyloader() {
    var scrollTop = window.pageYOffset;
    lazyImages.map(function (item) {
      //here
      var id = item.id,
          offsetTop = item.offsetTop,
          clientHeight = item.clientHeight; // if (
      // ) {
      //   item.classList.add('lazy')
      //   item.src = ''
      // } else {
      //   item.classList.remove('lazy')
      //   item.src = item.dataset.src
      // }

      addLazyClass(isCurrentViewPortImageSrc(offsetTop, clientHeight, window.innerHeight, scrollTop), item);
    }); // end

    if (lazyImages.length === 0) {
      document.removeEventListener('scroll', lazyThrottle);
      window.removeEventListener('resize', lazyThrottle);
      window.removeEventListener('orientationChange', lazyThrottle);
    }
  };

  var lazyThrottle = throttle(lazyloader); // throttle(() => console.log('작동중'))()

  lazyThrottle(); // 시작시 화면에 따른 로딩을 위함

  document.addEventListener('scroll', lazyThrottle);
  window.addEventListener('resize', lazyThrottle);
  window.addEventListener('orientationChange', lazyThrottle);
}
/*
 if (offsetTop - window.innerHeight > scrollTop - clientHeight / 2) {
        console.log(
          '위',
          id,
          offsetTop - window.innerHeight,
          scrollTop - clientHeight,
        )
        item.src = ''
        item.classList.add('lazy')
      }
      if (offsetTop + window.innerHeight < scrollTop + clientHeight / 2) {
        console.log(
          '아래',
          id,
          offsetTop + window.innerHeight,
          scrollTop + clientHeight,
        )
        item.src = ''
        item.classList.add('lazy')
      }
*/

/**
 *
 * throttling methods
 * @param { Function } func
 *
 */


function throttle(func) {
  var throttleTimeout; // console.log('클로져냐?')

  return function () {
    if (throttleTimeout) {
      clearTimeout(throttleTimeout);
    }

    throttleTimeout = setTimeout(func, 10);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (LazyloadingNormal);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_bg_todo01_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/bg_todo01.jpg */ "./assets/images/bg_todo01.jpg");
/* harmony import */ var _assets_images_bg_todo01_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_bg_todo01_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_bg_todo02_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/bg_todo02.jpg */ "./assets/images/bg_todo02.jpg");
/* harmony import */ var _assets_images_bg_todo02_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_bg_todo02_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_bg_todo03_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/bg_todo03.jpg */ "./assets/images/bg_todo03.jpg");
/* harmony import */ var _assets_images_bg_todo03_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_bg_todo03_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_bg_todo04_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/bg_todo04.jpg */ "./assets/images/bg_todo04.jpg");
/* harmony import */ var _assets_images_bg_todo04_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_bg_todo04_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_bg_todo05_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/bg_todo05.jpg */ "./assets/images/bg_todo05.jpg");
/* harmony import */ var _assets_images_bg_todo05_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_bg_todo05_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LazyloadNormal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyloadNormal */ "./src/LazyloadNormal.js");
/* harmony import */ var _LazyObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LazyObserver */ "./src/LazyObserver.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);








var IS_TEST = true;
var lOAD_DATA_LENGTH = 100;
var imgSrcArr = [_assets_images_bg_todo01_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _assets_images_bg_todo02_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_bg_todo03_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_bg_todo04_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_bg_todo05_jpg__WEBPACK_IMPORTED_MODULE_4___default.a];
var imgWidthHeightClass = ['img_500x200', 'img_400X150', 'img_120X60', 'img_1000X500', 'img_2000X1000'];

function componentH1() {
  var h1 = document.createElement('H1');
  h1.innerHTML = 'web pack setting and lazy load에 대하여';
  return h1;
}

function img() {
  var image = new Image();
  image.classList.add('lazy');
  return image;
}

function imgElMaker(el, index, imgSrcArr, imgWidthHeightClass) {
  if (!index || !imgSrcArr || !imgWidthHeightClass) {
    index = 0;
    imgSrcArr = [_assets_images_bg_todo02_jpg__WEBPACK_IMPORTED_MODULE_1___default.a];
    imgWidthHeightClass = ['img_500x200'];
  }

  el.setAttribute('data-src', imgSrcArr[index]);
  el.classList.add(imgWidthHeightClass[index]);
  el.id = index;
  return el;
}
/*
  <img> 태그에서 이미지를 지연 로딩하는 일반적인 개념

  브라우저에서 img의 src에 값이 들어 오는 순간 개수에 상관없이 
  img 로드를 시행한다 그러므로 

  1. src 속성 값 비워두기 
  ㄴ 대체제로 data-src 로 대체한다
  2. 이미지에게 뷰포트에 들어가자 마자 로드 될 수 있도록 트리거 하려는 요소가 필요합니다 
*/


function init() {
  document.body.appendChild(componentH1());

  for (var i = 0; i < lOAD_DATA_LENGTH; i++) {
    if (!IS_TEST) {
      document.body.appendChild(imgElMaker(img(), i % 5, imgSrcArr, imgWidthHeightClass));
    } else {
      document.body.appendChild(imgElMaker(img()));
    }
  }

  document.addEventListener('DOMContentLoaded', lazyLoader);
  /**
   *
   * 모던 브라우저의 IntersectionObserver 가 있을 경우 IntersectionObserver을 사용
   * 그밖에는 스크롤 및 다른 이벤트 적용
   */
}

init(); // LazyloadingNormal()
// document.addEventListener('DOMContentLoaded', LazyloadingNormal)

function lazyLoader() {
  // if ('IntersectionObserver' in window) {
  //   LazyObserver()
  // } else {
  //   LazyloadingNormal()
  // }
  Object(_LazyloadNormal__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9iZ190b2RvMDEuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmdfdG9kbzAyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2JnX3RvZG8wMy5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9iZ190b2RvMDQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmdfdG9kbzA1LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF6eU9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXp5bG9hZE5vcm1hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz9lMzIwIl0sIm5hbWVzIjpbIkxhenlPYnNlcnZlciIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eUltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWdPYnNlcmJlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXJIYW5kbGVyIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiaXRlbSIsIm9ic2VydmUiLCJlbnRyaWVzIiwib2JzZXJiZXIiLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3JjIiwiZGF0YXNldCIsImFkZCIsImlzQ3VycmVudFZpZXdQb3J0SW1hZ2VTcmMiLCJvZmZzZXRUb3AiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3dJbm5lckhlaWdodCIsInNjcm9sbFRvcCIsImFkZExhenlDbGFzcyIsImlzTGF6eSIsImVsIiwiTGF6eWxvYWRpbmdOb3JtYWwiLCJlIiwibGF6eWxvYWRlciIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaWQiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsYXp5VGhyb3R0bGUiLCJ0aHJvdHRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmdW5jIiwidGhyb3R0bGVUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIklTX1RFU1QiLCJsT0FEX0RBVEFfTEVOR1RIIiwiaW1nU3JjQXJyIiwiaW1nU3JjMSIsImltZ1NyYzIiLCJpbWdTcmMzIiwiaW1nU3JjNCIsImltZ1NyYzUiLCJpbWdXaWR0aEhlaWdodENsYXNzIiwiY29tcG9uZW50SDEiLCJoMSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJpbWciLCJpbWFnZSIsIkltYWdlIiwiaW1nRWxNYWtlciIsImluZGV4Iiwic2V0QXR0cmlidXRlIiwiaW5pdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImkiLCJsYXp5TG9hZGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEs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O0FBQ0R6QixJQUFFLENBQUNtQyxZQUFILENBQWdCLFVBQWhCLEVBQTRCaEIsU0FBUyxDQUFDZSxLQUFELENBQXJDO0FBQ0FsQyxJQUFFLENBQUNaLFNBQUgsQ0FBYUksR0FBYixDQUFpQmlDLG1CQUFtQixDQUFDUyxLQUFELENBQXBDO0FBQ0FsQyxJQUFFLENBQUNNLEVBQUgsR0FBUTRCLEtBQVI7QUFDQSxTQUFPbEMsRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVdBLFNBQVNvQyxJQUFULEdBQWdCO0FBQ2QvRCxVQUFRLENBQUNnRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJaLFdBQVcsRUFBckM7O0FBQ0EsT0FBSyxJQUFJYSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHckIsZ0JBQXBCLEVBQXNDcUIsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxRQUFJLENBQUN0QixPQUFMLEVBQWM7QUFDWjVDLGNBQVEsQ0FBQ2dFLElBQVQsQ0FBY0MsV0FBZCxDQUNFTCxVQUFVLENBQUNILEdBQUcsRUFBSixFQUFRUyxDQUFDLEdBQUcsQ0FBWixFQUFlcEIsU0FBZixFQUEwQk0sbUJBQTFCLENBRFo7QUFHRCxLQUpELE1BSU87QUFDTHBELGNBQVEsQ0FBQ2dFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsVUFBVSxDQUFDSCxHQUFHLEVBQUosQ0FBcEM7QUFDRDtBQUNGOztBQUNEekQsVUFBUSxDQUFDdUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDNEIsVUFBOUM7QUFFQTs7Ozs7QUFLRDs7QUFDREosSUFBSSxHLENBRUo7QUFDQTs7QUFDQSxTQUFTSSxVQUFULEdBQXNCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXZDLGlFQUFpQjtBQUNsQixDOzs7Ozs7Ozs7OztBQ3RGRCx1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOGE1Yzk1M2M0OWMxZmYzYzE2ZmNhZjQyNzhlYzY2NS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiM2Y2ZDQxZWZiN2ZmMTY1OGFjNjllMDExZTM5ZTRhOC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMDFhNmE4MTQyN2RmZDdkOTgwMjk2Mjc4Njc1NGRlMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ODBhMTZmYTFlNTgzNDQ3MjNlZmM5MDM1ZGIzMDExNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjODY3ZTEwMTA4ZWRmNWMzMzIwYjM2ZWUxYTZhOWJlMC5qcGdcIjsiLCIvL1VzaW5nIEludGVyc2VjdGlvbiBPYnNlcnZlciBBUEkgdG8gdHJpZ2dlciBpbWFnZSBsb2Fkc1xuXG4vKipcbiAqIC4gQVBJ6rCAIGlzSW50ZXJzZWN0aW5n7IaN7ISx7J2EIOyCrOyaqe2VmOyXrCDsmpTshozqsIAg67ew7Y+s7Yq47JeQIOuTpOyWtOqwhCDqsoPsnYQg6rCQ7KeA7ZWY66m0IOyGjeyEseyXkOyEnCBVUkzsnYQg7ISg7YOd7ZWY6rOgIOydtOulvCDruIzrnbzsmrDsoIAg7J2YIOyGjeyEseycvOuhnCDsnbTrj5lcbiAqICDtlZjsl6wg7J2066+47KeA66Gc65Oc66W8IO2KuOumrOqxsO2VqeuLiOuLpC4g7J20IOyekeyXheydtCDsmYTro4zrkJjrqbQg7J2066+47KeA7JeQ7IScIOqyjOycvOuluCDtgbTrnpjsiqTrpbwg7KCc6rGw7ZWY6rOgIO2VtOuLuSDsnbTrr7jsp4Dsl5DshJwg6rSA7LCw7J6Q66W8IOygnOqxsO2VqeuLiOuLpC5cbiAqXG4gKiAxLiDsiKvsnpAg6rOE7IKwIOyViO2VtOuPhCDrkJzri6RcbiAqXG4gKiDri6jsoJAgOlxuICogIOu4jOudvOyasOyggOulvCDtg4Tri6RcbiAqXG4gKiDqsJzrhZAgOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbl9PYnNlcnZlcl9BUElcbiAqIFRoZSBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXIgQVBJIGxldHMgY29kZSByZWdpc3RlciBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbmV2ZXIgYW5cbiAqICBlbGVtZW50IHRoZXkgd2lzaCB0byBtb25pdG9yIGVudGVycyBvciBleGl0cyBhbm90aGVyIGVsZW1lbnQgKG9yIHRoZSB2aWV3cG9ydCksIG9yIHdoZW4gdGhlIGFtb3VudFxuICogYnkgd2hpY2ggdGhlIHR3byBpbnRlcnNlY3QgY2hhbmdlcyBieSBhIHJlcXVlc3RlZCBhbW91bnQuIFRoaXMgd2F5LCBzaXRlcyBubyBsb25nZXIgbmVlZCB0byBkbyBhbnl0aGluZyBvblxuICogdGhlIG1haW4gdGhyZWFkIHRvIHdhdGNoIGZvciB0aGlzIGtpbmQgb2YgZWxlbWVudCBpbnRlcnNlY3Rpb24sIGFuZCB0aGUgYnJvd3NlciBpcyBmcmVlIHRvIG9wdGltaXplXG4gKiB0aGUgbWFuYWdlbWVudCBvZiBpbnRlcnNlY3Rpb25zIGFzIGl0IHNlZXMgZml0LlxuICovXG5cbmZ1bmN0aW9uIExhenlPYnNlcnZlcihoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICBsZXQgbGF6eUltYWdlcyA9IG51bGxcbiAgY29uc29sZS5sb2coJ+yLpO2WiScpXG4gIGhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG4gIC8vIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICBsYXp5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxhenknKVxuICBjb25zdCBpbWdPYnNlcmJlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvYnNlcnZlckhhbmRsZXIpXG4gIEFycmF5LmZyb20obGF6eUltYWdlcykubWFwKGl0ZW0gPT4gaW1nT2JzZXJiZXIub2JzZXJ2ZShpdGVtKSlcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlckhhbmRsZXIoZW50cmllcywgb2JzZXJiZXIpIHtcbiAgZW50cmllcy5tYXAoZW50cnkgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBlbnRyeS50YXJnZXRcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5JylcbiAgICAgIHRhcmdldC5zcmMgPSB0YXJnZXQuZGF0YXNldC5zcmNcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2xhenknKVxuICAgICAgdGFyZ2V0LnNyYyA9ICcnXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5T2JzZXJ2ZXJcbiIsIi8vIDEuIGphdmFzY3JpcHTrpbwg7Ya17ZWcIOuwqeuylVxuLyoqXG4gKiBlbnYgY29uZGl0aW9uXG4gKiAgLSDrj5nsoIEg7J2066+47KeAIO2DnOq3uCDsg53shLFcbiAqICAtIOybue2MqeuCtCDrsojrk6Trp4Eg7J2066+47KeAIOyXrOyEnCBjZG4g7J2066+47KeAIO2FjOyKpO2KuOqwgCDtlYTsmpTtlahcbiAqXG4gKiDsgqzsmqkg6rCc64WQXG4gKlxuICogIDEuIEV2ZW50czogRE9NQ29udGVudExvYWRlZCwgc2Nyb2xsLCByZXNpemUsIG9yaWVudGF0aW9uQ2hhbmdlXG4gKiAgMi4gdGhyb3R0bGUgPC0tLSBzY3JvbGwgcmVzaXplIOuTsSDrpqzshozsiqTrpbwg66eO7J20IOyeoeyVhCDrqLnsnLzrqbAg7IiY7JeG7J20IOunjuydtCDrsJzsg53tlaAg7Jes7KeA6rCAIOyeiOuKlCDsnbTrsqTtirjrk6TsnZhcbiAqICDrsJzsg53snYQg7KCc7ZWc7ZWY64qUIOyLnOqwhOydhCDsoJzqs7XtlZjsnpBcbiAqIGV4KSAxMG1zIOuniOuLpCDsnbzslrQg64KY642Y6rKD7J2EIDEwMDBtcyDsl5Ag7LqQ7LmYIO2VoCDsiJgg7J6I64+E66GdIO2VmOuKlCDqsoNcbiAqXG4gKiAgMS4g7IKs7Jqp7IucIOunqCDsnITsl5DshJwg67aA7YSwIOydveyWtCDrgrTroKQg6rCI65WMIOu2gOuTnOufveqyjCDsoIHsmqnrkKhcbiAqICAyLiDri6Trp4wg66eoIOyVhOuemCDsi5zsnpHsnbwg6rK97JqwIOyghOu2gCDsoIHsmqnrkJjslrQg64ukIOu2iOufrOyZgOynkC4uXG4gKiAgMy4gaW1n7J2YIOuEiOu5hCDrhpLsnbTrpbwg7IS47YyF7ZW0IOyjvOyWtOyVvCDrkKDrk68g7ZWY64ukXG4gKi9cblxuLypcbmlmIChcbiAgb2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0ID4gc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0IC8gNSB8fFxuICBvZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPCBzY3JvbGxUb3AgLSBjbGllbnRIZWlnaHQgLyA1XG4pIHtcbiAgaXRlbS5zcmMgPSAnJ1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xhenknKVxufSBlbHNlIGlmIChcbiAgb2Zmc2V0VG9wID4gd2luZG93LmlubmVySGVpZ2h0ICsgc2Nyb2xsVG9wIHx8XG4gIG9mZnNldFRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCArIHNjcm9sbFRvcFxuKSB7XG4gIGNvbnNvbGUubG9nKGlkLCBvZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQsIHNjcm9sbFRvcCwgJ2NvbXBsZXRlJylcbiAgaXRlbS5zcmMgPSBpdGVtLmRhdGFzZXQuc3JjXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGF6eScpXG59Ki9cblxuZnVuY3Rpb24gaXNDdXJyZW50Vmlld1BvcnRJbWFnZVNyYyhcbiAgb2Zmc2V0VG9wLFxuICBjbGllbnRIZWlnaHQsXG4gIHdpbmRvd0lubmVySGVpZ2h0LFxuICBzY3JvbGxUb3AsXG4pIHtcbiAgcmV0dXJuIChcbiAgICBvZmZzZXRUb3AgKyBjbGllbnRIZWlnaHQgPCBzY3JvbGxUb3AgfHxcbiAgICBvZmZzZXRUb3AgLSB3aW5kb3dJbm5lckhlaWdodCA+IHNjcm9sbFRvcFxuICApXG59XG5cbmZ1bmN0aW9uIGFkZExhenlDbGFzcyhpc0xhenksIGVsKSB7XG4gIGlmIChpc0xhenkpIHtcbiAgICBlbC5zcmMgPSAnJ1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xhenknKVxuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenknKVxuICAgIGVsLnNyYyA9IGVsLmRhdGFzZXQuc3JjXG4gIH1cbn1cblxuZnVuY3Rpb24gTGF6eWxvYWRpbmdOb3JtYWwoZSkge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpXG4gIGxldCBsYXp5SW1hZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubGF6eScpKVxuICBjb25zdCBsYXp5bG9hZGVyID0gKCkgPT4ge1xuICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICBsYXp5SW1hZ2VzLm1hcChpdGVtID0+IHtcbiAgICAgIC8vaGVyZVxuICAgICAgbGV0IHsgaWQsIG9mZnNldFRvcCwgY2xpZW50SGVpZ2h0IH0gPSBpdGVtXG4gICAgICAvLyBpZiAoXG5cbiAgICAgIC8vICkge1xuICAgICAgLy8gICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xhenknKVxuICAgICAgLy8gICBpdGVtLnNyYyA9ICcnXG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenknKVxuICAgICAgLy8gICBpdGVtLnNyYyA9IGl0ZW0uZGF0YXNldC5zcmNcbiAgICAgIC8vIH1cbiAgICAgIGFkZExhenlDbGFzcyhcbiAgICAgICAgaXNDdXJyZW50Vmlld1BvcnRJbWFnZVNyYyhcbiAgICAgICAgICBvZmZzZXRUb3AsXG4gICAgICAgICAgY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICBzY3JvbGxUb3AsXG4gICAgICAgICksXG4gICAgICAgIGl0ZW0sXG4gICAgICApXG4gICAgfSkgLy8gZW5kXG4gICAgaWYgKGxhenlJbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsYXp5VGhyb3R0bGUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGF6eVRocm90dGxlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgbGF6eVRocm90dGxlKVxuICAgIH1cbiAgfVxuICBjb25zdCBsYXp5VGhyb3R0bGUgPSB0aHJvdHRsZShsYXp5bG9hZGVyKVxuICAvLyB0aHJvdHRsZSgoKSA9PiBjb25zb2xlLmxvZygn7J6R64+Z7KSRJykpKClcbiAgbGF6eVRocm90dGxlKCkgLy8g7Iuc7J6R7IucIO2ZlOuptOyXkCDrlLDrpbgg66Gc65Sp7J2EIOychO2VqFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsYXp5VGhyb3R0bGUpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsYXp5VGhyb3R0bGUpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIGxhenlUaHJvdHRsZSlcbn1cblxuLypcbiBpZiAob2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0ID4gc2Nyb2xsVG9wIC0gY2xpZW50SGVpZ2h0IC8gMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAn7JyEJyxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsVG9wIC0gY2xpZW50SGVpZ2h0LFxuICAgICAgICApXG4gICAgICAgIGl0ZW0uc3JjID0gJydcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdsYXp5JylcbiAgICAgIH1cbiAgICAgIGlmIChvZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPCBzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgLyAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICfslYTrnpgnLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIG9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICBzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQsXG4gICAgICAgIClcbiAgICAgICAgaXRlbS5zcmMgPSAnJ1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xhenknKVxuICAgICAgfVxuKi9cbi8qKlxuICpcbiAqIHRocm90dGxpbmcgbWV0aG9kc1xuICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jXG4gKlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jKSB7XG4gIGxldCB0aHJvdHRsZVRpbWVvdXRcbiAgLy8gY29uc29sZS5sb2coJ+2BtOuhnOyguOuDkD8nKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICh0aHJvdHRsZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aHJvdHRsZVRpbWVvdXQpXG4gICAgfVxuICAgIHRocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuYywgMTApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF6eWxvYWRpbmdOb3JtYWxcbiIsImltcG9ydCBpbWdTcmMxIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmdfdG9kbzAxLmpwZydcbmltcG9ydCBpbWdTcmMyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmdfdG9kbzAyLmpwZydcbmltcG9ydCBpbWdTcmMzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmdfdG9kbzAzLmpwZydcbmltcG9ydCBpbWdTcmM0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmdfdG9kbzA0LmpwZydcbmltcG9ydCBpbWdTcmM1IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmdfdG9kbzA1LmpwZydcbmltcG9ydCBMYXp5bG9hZGluZ05vcm1hbCBmcm9tICcuL0xhenlsb2FkTm9ybWFsJ1xuaW1wb3J0IExhenlPYnNlcnZlciBmcm9tICcuL0xhenlPYnNlcnZlcidcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IElTX1RFU1QgPSB0cnVlXG5jb25zdCBsT0FEX0RBVEFfTEVOR1RIID0gMTAwXG5jb25zdCBpbWdTcmNBcnIgPSBbaW1nU3JjMSwgaW1nU3JjMiwgaW1nU3JjMywgaW1nU3JjNCwgaW1nU3JjNV1cbmNvbnN0IGltZ1dpZHRoSGVpZ2h0Q2xhc3MgPSBbXG4gICdpbWdfNTAweDIwMCcsXG4gICdpbWdfNDAwWDE1MCcsXG4gICdpbWdfMTIwWDYwJyxcbiAgJ2ltZ18xMDAwWDUwMCcsXG4gICdpbWdfMjAwMFgxMDAwJyxcbl1cblxuZnVuY3Rpb24gY29tcG9uZW50SDEoKSB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSDEnKVxuICBoMS5pbm5lckhUTUwgPSAnd2ViIHBhY2sgc2V0dGluZyBhbmQgbGF6eSBsb2Fk7JeQIOuMgO2VmOyXrCdcbiAgcmV0dXJuIGgxXG59XG5cbmZ1bmN0aW9uIGltZygpIHtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdsYXp5JylcbiAgcmV0dXJuIGltYWdlXG59XG5cbmZ1bmN0aW9uIGltZ0VsTWFrZXIoZWwsIGluZGV4LCBpbWdTcmNBcnIsIGltZ1dpZHRoSGVpZ2h0Q2xhc3MpIHtcbiAgaWYgKCFpbmRleCB8fCAhaW1nU3JjQXJyIHx8ICFpbWdXaWR0aEhlaWdodENsYXNzKSB7XG4gICAgaW5kZXggPSAwXG4gICAgaW1nU3JjQXJyID0gW2ltZ1NyYzJdXG4gICAgaW1nV2lkdGhIZWlnaHRDbGFzcyA9IFsnaW1nXzUwMHgyMDAnXVxuICB9XG4gIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMnLCBpbWdTcmNBcnJbaW5kZXhdKVxuICBlbC5jbGFzc0xpc3QuYWRkKGltZ1dpZHRoSGVpZ2h0Q2xhc3NbaW5kZXhdKVxuICBlbC5pZCA9IGluZGV4XG4gIHJldHVybiBlbFxufVxuXG4vKlxuICA8aW1nPiDtg5zqt7jsl5DshJwg7J2066+47KeA66W8IOyngOyXsCDroZzrlKntlZjripQg7J2867CY7KCB7J24IOqwnOuFkFxuXG4gIOu4jOudvOyasOyggOyXkOyEnCBpbWfsnZggc3Jj7JeQIOqwkuydtCDrk6TslrQg7Jik64qUIOyInOqwhCDqsJzsiJjsl5Ag7IOB6rSA7JeG7J20IFxuICBpbWcg66Gc65Oc66W8IOyLnO2Wie2VnOuLpCDqt7jrn6zrr4DroZwgXG5cbiAgMS4gc3JjIOyGjeyEsSDqsJIg67mE7JuM65GQ6riwIFxuICDjhLQg64yA7LK07KCc66GcIGRhdGEtc3JjIOuhnCDrjIDssrTtlZzri6RcbiAgMi4g7J2066+47KeA7JeQ6rKMIOu3sO2PrO2KuOyXkCDrk6TslrTqsIDsnpAg66eI7J6QIOuhnOuTnCDrkKAg7IiYIOyeiOuPhOuhnSDtirjrpqzqsbAg7ZWY66Ck64qUIOyalOyGjOqwgCDtlYTsmpTtlanri4jri6QgXG4qL1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudEgxKCkpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbE9BRF9EQVRBX0xFTkdUSDsgaSsrKSB7XG4gICAgaWYgKCFJU19URVNUKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuICAgICAgICBpbWdFbE1ha2VyKGltZygpLCBpICUgNSwgaW1nU3JjQXJyLCBpbWdXaWR0aEhlaWdodENsYXNzKSxcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdFbE1ha2VyKGltZygpKSlcbiAgICB9XG4gIH1cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxhenlMb2FkZXIpXG5cbiAgLyoqXG4gICAqXG4gICAqIOuqqOuNmCDruIzrnbzsmrDsoIDsnZggSW50ZXJzZWN0aW9uT2JzZXJ2ZXIg6rCAIOyeiOydhCDqsr3smrAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXLsnYQg7IKs7JqpXG4gICAqIOq3uOuwluyXkOuKlCDsiqTtgazroaQg67CPIOuLpOuluCDsnbTrsqTtirgg7KCB7JqpXG4gICAqL1xufVxuaW5pdCgpXG5cbi8vIExhenlsb2FkaW5nTm9ybWFsKClcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBMYXp5bG9hZGluZ05vcm1hbClcbmZ1bmN0aW9uIGxhenlMb2FkZXIoKSB7XG4gIC8vIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAvLyAgIExhenlPYnNlcnZlcigpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgTGF6eWxvYWRpbmdOb3JtYWwoKVxuICAvLyB9XG5cbiAgTGF6eWxvYWRpbmdOb3JtYWwoKVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==