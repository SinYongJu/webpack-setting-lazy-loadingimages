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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dynamic/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
// function LazyObserver() {
//   let count = 0
//   console
//   return (() => {
//     const lazyImages = document.querySelectorAll('img.lazy')
//     const imgObserber = new IntersectionObserver(observerHandler)
//     Array.from(lazyImages).map(item => imgObserber.observe(item))
//     count = ++count
//     console.log(count)
//   })()
// }
var LazyObserver = function () {
  var count = 0;
  return function () {
    var lazyImages = document.querySelectorAll('img.lazy');
    var imgObserber = new IntersectionObserver(observerHandler);
    Array.from(lazyImages).map(function (item) {
      return imgObserber.observe(item);
    });
    count = ++count;
    console.log(count);
  };
}();

function observerHandler(entries, obserber) {
  entries.map(function (entry) {
    var target = entry.target;

    if (entry.isIntersecting) {
      target.classList.remove('lazy');
      target.src = target.dataset.src;
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

var DURATION_TIME = 10;

function isViewportUpSide(offsetTop, clientHeight, scrollTop) {
  return offsetTop + clientHeight < scrollTop;
}

function isViewportDownSide(offsetTop, windowInnerHeight, scrollTop) {
  return offsetTop - windowInnerHeight > scrollTop;
}

function updateLoadedImage(el, offsetTop, clientHeight, windowInnerHeight, scrollTop) {
  var UPSIDE = isViewportUpSide(offsetTop, clientHeight, scrollTop);
  var DOWNSIDE = isViewportDownSide(offsetTop, windowInnerHeight, scrollTop);

  if (!(UPSIDE || DOWNSIDE)) {
    //   el.src = ''
    //   el.classList.add('lazy')
    // } else {
    el.src = el.dataset.src;
    el.classList.remove('lazy');
  }
}

var LazyloadingNormal = function () {
  var lazyImages = null;
  var count = 0;

  var lazyloader = function lazyloader() {
    lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
    var scrollTop = window.pageYOffset;
    lazyImages.map(function (item) {
      //here
      var offsetTop = item.offsetTop,
          clientHeight = item.clientHeight;
      var windowInnerHeight = window.innerHeight;
      updateLoadedImage(item, offsetTop, clientHeight, windowInnerHeight, scrollTop);
    }); // end

    if (lazyImages.length === 0) {
      document.removeEventListener('scroll', lazyThrottleLoader);
      window.removeEventListener('resize', lazyThrottleLoader);
      window.removeEventListener('orientationChange', lazyThrottleLoader);
      return;
    }
  };

  var lazyThrottleLoader = null; // throttle(() => console.log('작동중'))()

  return function () {
    lazyloader();
    lazyThrottleLoader = throttle(lazyloader);
    ++count;
    document.addEventListener('scroll', lazyThrottleLoader);
    window.addEventListener('resize', lazyThrottleLoader);
    window.addEventListener('orientationChange', lazyThrottleLoader);
  };
}();
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
  var throttleTimeout = null;
  return function () {
    if (throttleTimeout || throttleTimeout !== null) {
      clearTimeout(throttleTimeout);
    }

    throttleTimeout = setTimeout(func, DURATION_TIME);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (LazyloadingNormal);

/***/ }),

/***/ "./src/dynamic/images.js":
/*!*******************************!*\
  !*** ./src/dynamic/images.js ***!
  \*******************************/
/*! exports provided: fetchImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchImages", function() { return fetchImages; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// fetch random imgaes
var API_KEY = '13292200-78995748d6acf50d8872c2f3d';
var URL = 'https://pixabay.com/api/';
var PER_PAGE = 50;
var REQ_IMAGES_DEFAULT_URL = "".concat(URL, "?key=").concat(API_KEY);
var fetchImages =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var keywords,
        res,
        resData,
        data,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            keywords = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'fashion+music';
            _context.next = 3;
            return fetch("".concat(REQ_IMAGES_DEFAULT_URL, "&q=").concat(keywords, "&per_page=").concat(PER_PAGE)).then(function (res) {
              return res.json();
            });

          case 3:
            res = _context.sent;
            resData = res.hits;
            data = resData.map(function (image) {
              var webformatWidth = image.webformatWidth,
                  webformatHeight = image.webformatHeight,
                  previewURL = image.previewURL,
                  largeImageURL = image.largeImageURL,
                  user = image.user;
              return {
                width: webformatWidth,
                height: webformatHeight,
                'data-prev': previewURL,
                'data-src': largeImageURL,
                alt: "by pixabay user : ".concat(user)
              };
            });
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchImages() {
    return _ref.apply(this, arguments);
  };
}();
/*
            "largeImageURL": "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367d1736dce753516c4870287ad69e4dc15aba_1280.jpg",
            "webformatHeight": 426,
            "webformatWidth": 640,
            "likes": 1020,
            "imageWidth": 6000,
            "id": 3063284,
            "user_id": 1564471,
            "views": 658115,
            "comments": 228,
            "pageURL": "https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/",
            "imageHeight": 4000,
            "webformatURL": "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367d1736dce753516c4870287ad69e4dc15aba_640.jpg",
            "type": "photo",
            "previewHeight": 99,
            "tags": "rose, flower, petal",
            "downloads": 419004,
            "user": "annca",
            "favorites": 885,
            "imageSize": 3574625,
            "previewWidth": 150,
            "userImageURL": "https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg",
            "previewURL": "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg"
        },
*/

/***/ }),

/***/ "./src/dynamic/index.js":
/*!******************************!*\
  !*** ./src/dynamic/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LazyloadNormal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LazyloadNormal */ "./src/LazyloadNormal.js");
/* harmony import */ var _LazyObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LazyObserver */ "./src/LazyObserver.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./src/dynamic/images.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





/**
 *
 *
 *
 */

var isTest = !true;
var CLASS_LAZY = 'lazy';

var h1 = function h1(title) {
  var h1 = document.createElement('h1');
  h1.innerHTML = title;
  return h1;
};

var pixabaylogo = function pixabaylogo() {
  var logoAttr = {
    src: 'https://pixabay.com/static/img/public/medium_rectangle_a.png',
    alt: 'Pixabay',
    style: 'width:100px;height:auto'
  };
  var logo = img();
  logo.src = logoAttr.src;
  logo.alt = logoAttr.alt;
  logo.style = logoAttr.style;
  return logo;
}; // logo라 일단


var draw = function draw(target) {
  var drawTarget = document.body;

  if (target.length) {
    drawTarget = document.querySelector(target);
  }

  for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elements[_key - 1] = arguments[_key];
  }

  Array.from(elements).map(function (el) {
    drawTarget.appendChild(el);
  });
};

var img = function img(className) {
  var imgEl = new Image();
  imgEl.alt = '';
  if (className) imgEl.classList.add(className);
  return imgEl;
};

var setLazyImg = function setLazyImg(attrs) {
  var imgEl = img();
  var width = attrs.width,
      height = attrs.height,
      alt = attrs.alt;
  imgEl['width'] = width;
  imgEl['height'] = height;
  imgEl['alt'] = alt;

  if (!isTest) {
    imgEl.dataset.src = attrs['data-src'];
    imgEl.dataset.prev = attrs['data-prev'];
    imgEl.classList.add(CLASS_LAZY);
  } else {
    imgEl.src = attrs['data-src'];
    imgEl.prev = attrs['data-prev'];
  }

  return imgEl;
};
/*
  여기서 부터 미디어 블러 처리 
*/

/**
 *
 * @param {string} className : class name
 */


var div = function div(className) {
  var div = document.createElement('div');
  if (className) div.classList.add(className);
  return div;
};

var setMediumLazyImgContainer = function setMediumLazyImgContainer(attrs) {
  var width = attrs.width,
      height = attrs.height,
      alt = attrs.alt;
  var container = div('container');
  var placeholder = img('placeholder');
  var picture = img('picture');
  placeholder.src = attrs['data-prev'];
  placeholder['width'] = width;
  placeholder['height'] = height;
  picture.src = attrs['data-src'];
  picture.alt = alt;

  picture.onload = function () {
    picture.classList.add('loaded');
  };

  container.appendChild(picture);
  container.appendChild(placeholder);
  return container; // return container
};

var setTestMediumLazyImgContainer = function setTestMediumLazyImgContainer(attrs) {
  var width = attrs.width,
      height = attrs.height,
      alt = attrs.alt;
  var container = div('container');
  var picture = img('');
  picture.src = attrs['data-src'];
  picture['width'] = width;
  picture['height'] = height;
  picture.alt = alt;
  container.appendChild(picture);
  return container;
};
/**
 *
 * @param {function} func : 생성하려는 컴포넌트 함수를 넣는다
 * @param {string} keywords : 불러올 이미지 검색 키워드
 *
 */


var drawImages = function drawImages(func, keywords) {
  Object(_images__WEBPACK_IMPORTED_MODULE_3__["fetchImages"])(keywords).then(function (data) {
    return data;
  }).then(function (data) {
    return data.map(function (item) {
      return func(item);
    });
  }).then(function (images) {
    return draw.apply(void 0, ['#gallery'].concat(_toConsumableArray(images)));
  }).then(function () {
    return !isTest && lazyLoader();
  }).then(function () {
    return console.log('drawimages');
  });
};

var lazyLoader = function lazyLoader() {
  // 브라우저 로드에 대한 설정이 필요 할듯 하다
  if ('IntersectionObserver' in window) {
    Object(_LazyObserver__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else {
    Object(_LazyloadNormal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
};

var init = function init() {
  var title = h1('Lazy loading Test');
  var logo = pixabaylogo(); // const div = setMediumLazyImgContainer()

  draw('#header', title, logo); // draw('#gallery', div)
  // drawImages(setLazyImg)

  drawImages(setLazyImg); // if (isTest) {
  //   drawImages(setTestMediumLazyImgContainer, '')
  // } else {
  //   drawImages(setMediumLazyImgContainer, '')
  // }

  /**
   *
   * ui event에 대하여 공부 필요
   *
   * document.addEventListener('DOMContentLoaded', () => {
   * console.log('실행')
   * })
   *
   */
  // window.addEventListener('DOMContentLoaded', () => {
  //   console.log('실행 돔')
  // })
  // window.addEventListener('load', () => {
  //   console.log('실행')
  //   lazyLoader()
  // })
};

init();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xhenlPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF6eWxvYWROb3JtYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bmFtaWMvaW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9keW5hbWljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/ZTMyMCJdLCJuYW1lcyI6WyJMYXp5T2JzZXJ2ZXIiLCJjb3VudCIsImxhenlJbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWdPYnNlcmJlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXJIYW5kbGVyIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiaXRlbSIsIm9ic2VydmUiLCJjb25zb2xlIiwibG9nIiwiZW50cmllcyIsIm9ic2VyYmVyIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNyYyIsImRhdGFzZXQiLCJEVVJBVElPTl9USU1FIiwiaXNWaWV3cG9ydFVwU2lkZSIsIm9mZnNldFRvcCIsImNsaWVudEhlaWdodCIsInNjcm9sbFRvcCIsImlzVmlld3BvcnREb3duU2lkZSIsIndpbmRvd0lubmVySGVpZ2h0IiwidXBkYXRlTG9hZGVkSW1hZ2UiLCJlbCIsIlVQU0lERSIsIkRPV05TSURFIiwiTGF6eWxvYWRpbmdOb3JtYWwiLCJsYXp5bG9hZGVyIiwic2xpY2UiLCJjYWxsIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsYXp5VGhyb3R0bGVMb2FkZXIiLCJ0aHJvdHRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmdW5jIiwidGhyb3R0bGVUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIkFQSV9LRVkiLCJVUkwiLCJQRVJfUEFHRSIsIlJFUV9JTUFHRVNfREVGQVVMVF9VUkwiLCJmZXRjaEltYWdlcyIsImtleXdvcmRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc0RhdGEiLCJoaXRzIiwiZGF0YSIsImltYWdlIiwid2ViZm9ybWF0V2lkdGgiLCJ3ZWJmb3JtYXRIZWlnaHQiLCJwcmV2aWV3VVJMIiwibGFyZ2VJbWFnZVVSTCIsInVzZXIiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImlzVGVzdCIsIkNMQVNTX0xBWlkiLCJoMSIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInBpeGFiYXlsb2dvIiwibG9nb0F0dHIiLCJzdHlsZSIsImxvZ28iLCJpbWciLCJkcmF3IiwiZHJhd1RhcmdldCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImltZ0VsIiwiSW1hZ2UiLCJhZGQiLCJzZXRMYXp5SW1nIiwiYXR0cnMiLCJwcmV2IiwiZGl2Iiwic2V0TWVkaXVtTGF6eUltZ0NvbnRhaW5lciIsImNvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwicGljdHVyZSIsIm9ubG9hZCIsInNldFRlc3RNZWRpdW1MYXp5SW1nQ29udGFpbmVyIiwiZHJhd0ltYWdlcyIsImltYWdlcyIsImxhenlMb2FkZXIiLCJpbml0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUssR0FBR0QsRUFBRSxDQUFDLG1CQUFELENBQWhCO0FBQ0EsTUFBTU8sSUFBSSxHQUFHSCxXQUFXLEVBQXhCLENBRmlCLENBR2pCOztBQUVBSyxNQUFJLENBQUMsU0FBRCxFQUFZUixLQUFaLEVBQW1CTSxJQUFuQixDQUFKLENBTGlCLENBTWpCO0FBQ0E7O0FBQ0FzQixZQUFVLENBQUNWLFVBQUQsQ0FBVixDQVJpQixDQVNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBaENEOztBQWtDQWEsSUFBSSxHOzs7Ozs7Ozs7OztBQ3ZLSix1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZHluYW1pYy9pbmRleC5qc1wiKTtcbiIsIi8vVXNpbmcgSW50ZXJzZWN0aW9uIE9ic2VydmVyIEFQSSB0byB0cmlnZ2VyIGltYWdlIGxvYWRzXG5cbi8qKlxuICogLiBBUEnqsIAgaXNJbnRlcnNlY3Rpbmfsho3shLHsnYQg7IKs7Jqp7ZWY7JesIOyalOyGjOqwgCDrt7Dtj6ztirjsl5Ag65Ok7Ja06rCEIOqyg+ydhCDqsJDsp4DtlZjrqbQg7IaN7ISx7JeQ7IScIFVSTOydhCDshKDtg53tlZjqs6Ag7J2066W8IOu4jOudvOyasOyggCDsnZgg7IaN7ISx7Jy866GcIOydtOuPmVxuICogIO2VmOyXrCDsnbTrr7jsp4DroZzrk5zrpbwg7Yq466as6rGw7ZWp64uI64ukLiDsnbQg7J6R7JeF7J20IOyZhOujjOuQmOuptCDsnbTrr7jsp4Dsl5DshJwg6rKM7Jy866W4IO2BtOuemOyKpOulvCDsoJzqsbDtlZjqs6Ag7ZW064u5IOydtOuvuOyngOyXkOyEnCDqtIDssLDsnpDrpbwg7KCc6rGw7ZWp64uI64ukLlxuICpcbiAqIDEuIOyIq+yekCDqs4TsgrAg7JWI7ZW064+EIOuQnOuLpFxuICpcbiAqIOuLqOygkCA6XG4gKiAg67iM65287Jqw7KCA66W8IO2DhOuLpFxuICpcbiAqIOqwnOuFkCA6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uX09ic2VydmVyX0FQSVxuICogVGhlIEludGVyc2VjdGlvbiBPYnNlcnZlciBBUEkgbGV0cyBjb2RlIHJlZ2lzdGVyIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuZXZlciBhblxuICogIGVsZW1lbnQgdGhleSB3aXNoIHRvIG1vbml0b3IgZW50ZXJzIG9yIGV4aXRzIGFub3RoZXIgZWxlbWVudCAob3IgdGhlIHZpZXdwb3J0KSwgb3Igd2hlbiB0aGUgYW1vdW50XG4gKiBieSB3aGljaCB0aGUgdHdvIGludGVyc2VjdCBjaGFuZ2VzIGJ5IGEgcmVxdWVzdGVkIGFtb3VudC4gVGhpcyB3YXksIHNpdGVzIG5vIGxvbmdlciBuZWVkIHRvIGRvIGFueXRoaW5nIG9uXG4gKiB0aGUgbWFpbiB0aHJlYWQgdG8gd2F0Y2ggZm9yIHRoaXMga2luZCBvZiBlbGVtZW50IGludGVyc2VjdGlvbiwgYW5kIHRoZSBicm93c2VyIGlzIGZyZWUgdG8gb3B0aW1pemVcbiAqIHRoZSBtYW5hZ2VtZW50IG9mIGludGVyc2VjdGlvbnMgYXMgaXQgc2VlcyBmaXQuXG4gKi9cblxuLy8gZnVuY3Rpb24gTGF6eU9ic2VydmVyKCkge1xuLy8gICBsZXQgY291bnQgPSAwXG4vLyAgIGNvbnNvbGVcbi8vICAgcmV0dXJuICgoKSA9PiB7XG4vLyAgICAgY29uc3QgbGF6eUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sYXp5Jylcbi8vICAgICBjb25zdCBpbWdPYnNlcmJlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvYnNlcnZlckhhbmRsZXIpXG4vLyAgICAgQXJyYXkuZnJvbShsYXp5SW1hZ2VzKS5tYXAoaXRlbSA9PiBpbWdPYnNlcmJlci5vYnNlcnZlKGl0ZW0pKVxuLy8gICAgIGNvdW50ID0gKytjb3VudFxuLy8gICAgIGNvbnNvbGUubG9nKGNvdW50KVxuLy8gICB9KSgpXG4vLyB9XG5jb25zdCBMYXp5T2JzZXJ2ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBjb3VudCA9IDBcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBsYXp5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxhenknKVxuICAgIGNvbnN0IGltZ09ic2VyYmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9ic2VydmVySGFuZGxlcilcbiAgICBBcnJheS5mcm9tKGxhenlJbWFnZXMpLm1hcChpdGVtID0+IGltZ09ic2VyYmVyLm9ic2VydmUoaXRlbSkpXG4gICAgY291bnQgPSArK2NvdW50XG4gICAgY29uc29sZS5sb2coY291bnQpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gb2JzZXJ2ZXJIYW5kbGVyKGVudHJpZXMsIG9ic2VyYmVyKSB7XG4gIGVudHJpZXMubWFwKGVudHJ5ID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gZW50cnkudGFyZ2V0XG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eScpXG4gICAgICB0YXJnZXQuc3JjID0gdGFyZ2V0LmRhdGFzZXQuc3JjXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5T2JzZXJ2ZXJcbiIsIid1c2Ugc3RyaWN0J1xuLy8gMS4gamF2YXNjcmlwdOulvCDthrXtlZwg67Cp67KVXG4vKipcbiAqIGVudiBjb25kaXRpb25cbiAqICAtIOuPmeyggSDsnbTrr7jsp4Ag7YOc6re4IOyDneyEsVxuICogIC0g7Ju57Yyp64K0IOuyiOuTpOungSDsnbTrr7jsp4Ag7Jes7IScIGNkbiDsnbTrr7jsp4Ag7YWM7Iqk7Yq46rCAIO2VhOyalO2VqFxuICpcbiAqIOyCrOyaqSDqsJzrhZBcbiAqXG4gKiAgMS4gRXZlbnRzOiBET01Db250ZW50TG9hZGVkLCBzY3JvbGwsIHJlc2l6ZSwgb3JpZW50YXRpb25DaGFuZ2VcbiAqICAyLiB0aHJvdHRsZSA8LS0tIHNjcm9sbCByZXNpemUg65OxIOumrOyGjOyKpOulvCDrp47snbQg7J6h7JWEIOuoueycvOupsCDsiJjsl4bsnbQg66eO7J20IOuwnOyDne2VoCDsl6zsp4DqsIAg7J6I64qUIOydtOuypO2KuOuTpOydmFxuICogIOuwnOyDneydhCDsoJztlZztlZjripQg7Iuc6rCE7J2EIOygnOqzte2VmOyekFxuICogZXgpIDEwbXMg66eI64ukIOydvOyWtCDrgpjrjZjqsoPsnYQgMTAwMG1zIOyXkCDsupDsuZgg7ZWgIOyImCDsnojrj4TroZ0g7ZWY64qUIOqyg1xuICpcbiAqICAxLiDsgqzsmqnsi5wg66eoIOychOyXkOyEnCDrtoDthLAg7J297Ja0IOuCtOugpCDqsIjrlYwg67aA65Oc65+96rKMIOyggeyaqeuQqFxuICogIDIuIOuLpOunjCDrp6gg7JWE656YIOyLnOyekeydvCDqsr3smrAg7KCE67aAIOyggeyaqeuQmOyWtCDri6Qg67aI65+s7JmA7KeQLi5cbiAqICAzLiBpbWfsnZgg64SI67mEIOuGkuydtOulvCDshLjtjIXtlbQg7KO87Ja07JW8IOuQoOuTryDtlZjri6RcbiAqL1xuXG4vKlxuaWYgKFxuICBvZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPiBzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgLyA1IHx8XG4gIG9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCA8IHNjcm9sbFRvcCAtIGNsaWVudEhlaWdodCAvIDVcbikge1xuICBpdGVtLnNyYyA9ICcnXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbGF6eScpXG59IGVsc2UgaWYgKFxuICBvZmZzZXRUb3AgPiB3aW5kb3cuaW5uZXJIZWlnaHQgKyBzY3JvbGxUb3AgfHxcbiAgb2Zmc2V0VG9wIDwgd2luZG93LmlubmVySGVpZ2h0ICsgc2Nyb2xsVG9wXG4pIHtcbiAgY29uc29sZS5sb2coaWQsIG9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCwgc2Nyb2xsVG9wLCAnY29tcGxldGUnKVxuICBpdGVtLnNyYyA9IGl0ZW0uZGF0YXNldC5zcmNcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5Jylcbn0qL1xuY29uc3QgRFVSQVRJT05fVElNRSA9IDEwXG5cbmZ1bmN0aW9uIGlzVmlld3BvcnRVcFNpZGUob2Zmc2V0VG9wLCBjbGllbnRIZWlnaHQsIHNjcm9sbFRvcCkge1xuICByZXR1cm4gb2Zmc2V0VG9wICsgY2xpZW50SGVpZ2h0IDwgc2Nyb2xsVG9wXG59XG5mdW5jdGlvbiBpc1ZpZXdwb3J0RG93blNpZGUob2Zmc2V0VG9wLCB3aW5kb3dJbm5lckhlaWdodCwgc2Nyb2xsVG9wKSB7XG4gIHJldHVybiBvZmZzZXRUb3AgLSB3aW5kb3dJbm5lckhlaWdodCA+IHNjcm9sbFRvcFxufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2FkZWRJbWFnZShcbiAgZWwsXG4gIG9mZnNldFRvcCxcbiAgY2xpZW50SGVpZ2h0LFxuICB3aW5kb3dJbm5lckhlaWdodCxcbiAgc2Nyb2xsVG9wLFxuKSB7XG4gIGNvbnN0IFVQU0lERSA9IGlzVmlld3BvcnRVcFNpZGUob2Zmc2V0VG9wLCBjbGllbnRIZWlnaHQsIHNjcm9sbFRvcClcbiAgY29uc3QgRE9XTlNJREUgPSBpc1ZpZXdwb3J0RG93blNpZGUob2Zmc2V0VG9wLCB3aW5kb3dJbm5lckhlaWdodCwgc2Nyb2xsVG9wKVxuXG4gIGlmICghKFVQU0lERSB8fCBET1dOU0lERSkpIHtcbiAgICAvLyAgIGVsLnNyYyA9ICcnXG4gICAgLy8gICBlbC5jbGFzc0xpc3QuYWRkKCdsYXp5JylcbiAgICAvLyB9IGVsc2Uge1xuICAgIGVsLnNyYyA9IGVsLmRhdGFzZXQuc3JjXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eScpXG4gIH1cbn1cblxuY29uc3QgTGF6eWxvYWRpbmdOb3JtYWwgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBsYXp5SW1hZ2VzID0gbnVsbFxuICBsZXQgY291bnQgPSAwXG5cbiAgY29uc3QgbGF6eWxvYWRlciA9ICgpID0+IHtcbiAgICBsYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubGF6eScpKVxuICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXRcblxuICAgIGxhenlJbWFnZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgLy9oZXJlXG4gICAgICBsZXQgeyBvZmZzZXRUb3AsIGNsaWVudEhlaWdodCB9ID0gaXRlbVxuICAgICAgbGV0IHdpbmRvd0lubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB1cGRhdGVMb2FkZWRJbWFnZShcbiAgICAgICAgaXRlbSxcbiAgICAgICAgb2Zmc2V0VG9wLFxuICAgICAgICBjbGllbnRIZWlnaHQsXG4gICAgICAgIHdpbmRvd0lubmVySGVpZ2h0LFxuICAgICAgICBzY3JvbGxUb3AsXG4gICAgICApXG4gICAgfSkgLy8gZW5kXG4gICAgaWYgKGxhenlJbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsYXp5VGhyb3R0bGVMb2FkZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGF6eVRocm90dGxlTG9hZGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgbGF6eVRocm90dGxlTG9hZGVyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGxldCBsYXp5VGhyb3R0bGVMb2FkZXIgPSBudWxsXG4gIC8vIHRocm90dGxlKCgpID0+IGNvbnNvbGUubG9nKCfsnpHrj5nspJEnKSkoKVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGF6eWxvYWRlcigpXG4gICAgbGF6eVRocm90dGxlTG9hZGVyID0gdGhyb3R0bGUobGF6eWxvYWRlcilcbiAgICArK2NvdW50XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGF6eVRocm90dGxlTG9hZGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsYXp5VGhyb3R0bGVMb2FkZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgbGF6eVRocm90dGxlTG9hZGVyKVxuICB9XG59KSgpXG5cbi8qXG4gaWYgKG9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCA+IHNjcm9sbFRvcCAtIGNsaWVudEhlaWdodCAvIDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJ+ychCcsXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgb2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbFRvcCAtIGNsaWVudEhlaWdodCxcbiAgICAgICAgKVxuICAgICAgICBpdGVtLnNyYyA9ICcnXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbGF6eScpXG4gICAgICB9XG4gICAgICBpZiAob2Zmc2V0VG9wICsgd2luZG93LmlubmVySGVpZ2h0IDwgc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0IC8gMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAn7JWE656YJyxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0LFxuICAgICAgICApXG4gICAgICAgIGl0ZW0uc3JjID0gJydcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdsYXp5JylcbiAgICAgIH1cbiovXG4vKipcbiAqXG4gKiB0aHJvdHRsaW5nIG1ldGhvZHNcbiAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuY1xuICpcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYykge1xuICBsZXQgdGhyb3R0bGVUaW1lb3V0ID0gbnVsbFxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICh0aHJvdHRsZVRpbWVvdXQgfHwgdGhyb3R0bGVUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhyb3R0bGVUaW1lb3V0KVxuICAgIH1cbiAgICB0aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmMsIERVUkFUSU9OX1RJTUUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF6eWxvYWRpbmdOb3JtYWxcbiIsIi8vIGZldGNoIHJhbmRvbSBpbWdhZXNcblxuY29uc3QgQVBJX0tFWSA9ICcxMzI5MjIwMC03ODk5NTc0OGQ2YWNmNTBkODg3MmMyZjNkJ1xuY29uc3QgVVJMID0gJ2h0dHBzOi8vcGl4YWJheS5jb20vYXBpLydcbmNvbnN0IFBFUl9QQUdFID0gNTBcbmNvbnN0IFJFUV9JTUFHRVNfREVGQVVMVF9VUkwgPSBgJHtVUkx9P2tleT0ke0FQSV9LRVl9YFxuXG5leHBvcnQgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoa2V5d29yZHMgPSAnZmFzaGlvbittdXNpYycpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7UkVRX0lNQUdFU19ERUZBVUxUX1VSTH0mcT0ke2tleXdvcmRzfSZwZXJfcGFnZT0ke1BFUl9QQUdFfWAsXG4gICkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgY29uc3QgcmVzRGF0YSA9IHJlcy5oaXRzXG4gIGNvbnN0IGRhdGEgPSByZXNEYXRhLm1hcChpbWFnZSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHdlYmZvcm1hdFdpZHRoLFxuICAgICAgd2ViZm9ybWF0SGVpZ2h0LFxuICAgICAgcHJldmlld1VSTCxcbiAgICAgIGxhcmdlSW1hZ2VVUkwsXG4gICAgICB1c2VyLFxuICAgIH0gPSBpbWFnZVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2ViZm9ybWF0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHdlYmZvcm1hdEhlaWdodCxcbiAgICAgICdkYXRhLXByZXYnOiBwcmV2aWV3VVJMLFxuICAgICAgJ2RhdGEtc3JjJzogbGFyZ2VJbWFnZVVSTCxcbiAgICAgIGFsdDogYGJ5IHBpeGFiYXkgdXNlciA6ICR7dXNlcn1gLFxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRhdGFcbn1cbi8qXG4gICAgICAgICAgICBcImxhcmdlSW1hZ2VVUkxcIjogXCJodHRwczovL3BpeGFiYXkuY29tL2dldC81NWUwZDM0MDQ4NWFhODE0ZjZkYThjN2RkYTc5MzY3ZDE3MzZkY2U3NTM1MTZjNDg3MDI4N2FkNjllNGRjMTVhYmFfMTI4MC5qcGdcIixcbiAgICAgICAgICAgIFwid2ViZm9ybWF0SGVpZ2h0XCI6IDQyNixcbiAgICAgICAgICAgIFwid2ViZm9ybWF0V2lkdGhcIjogNjQwLFxuICAgICAgICAgICAgXCJsaWtlc1wiOiAxMDIwLFxuICAgICAgICAgICAgXCJpbWFnZVdpZHRoXCI6IDYwMDAsXG4gICAgICAgICAgICBcImlkXCI6IDMwNjMyODQsXG4gICAgICAgICAgICBcInVzZXJfaWRcIjogMTU2NDQ3MSxcbiAgICAgICAgICAgIFwidmlld3NcIjogNjU4MTE1LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiAyMjgsXG4gICAgICAgICAgICBcInBhZ2VVUkxcIjogXCJodHRwczovL3BpeGFiYXkuY29tL3Bob3Rvcy9yb3NlLWZsb3dlci1wZXRhbC1mbG9yYWwtbm9ibGUtMzA2MzI4NC9cIixcbiAgICAgICAgICAgIFwiaW1hZ2VIZWlnaHRcIjogNDAwMCxcbiAgICAgICAgICAgIFwid2ViZm9ybWF0VVJMXCI6IFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9nZXQvNTVlMGQzNDA0ODVhYTgxNGY2ZGE4YzdkZGE3OTM2N2QxNzM2ZGNlNzUzNTE2YzQ4NzAyODdhZDY5ZTRkYzE1YWJhXzY0MC5qcGdcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBob3RvXCIsXG4gICAgICAgICAgICBcInByZXZpZXdIZWlnaHRcIjogOTksXG4gICAgICAgICAgICBcInRhZ3NcIjogXCJyb3NlLCBmbG93ZXIsIHBldGFsXCIsXG4gICAgICAgICAgICBcImRvd25sb2Fkc1wiOiA0MTkwMDQsXG4gICAgICAgICAgICBcInVzZXJcIjogXCJhbm5jYVwiLFxuICAgICAgICAgICAgXCJmYXZvcml0ZXNcIjogODg1LFxuICAgICAgICAgICAgXCJpbWFnZVNpemVcIjogMzU3NDYyNSxcbiAgICAgICAgICAgIFwicHJldmlld1dpZHRoXCI6IDE1MCxcbiAgICAgICAgICAgIFwidXNlckltYWdlVVJMXCI6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vdXNlci8yMDE1LzExLzI3LzA2LTU4LTU0LTYwOV8yNTB4MjUwLmpwZ1wiLFxuICAgICAgICAgICAgXCJwcmV2aWV3VVJMXCI6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8wMS8wNS8xNi8yNC9yb3NlLTMwNjMyODRfMTUwLmpwZ1wiXG4gICAgICAgIH0sXG4qL1xuIiwiaW1wb3J0IExhenlsb2FkaW5nTm9ybWFsIGZyb20gJy4uL0xhenlsb2FkTm9ybWFsJ1xuaW1wb3J0IExhenlPYnNlcnZlciBmcm9tICcuLi9MYXp5T2JzZXJ2ZXInXG5pbXBvcnQgJy4uL3N0eWxlLmNzcydcbmltcG9ydCB7IGZldGNoSW1hZ2VzIH0gZnJvbSAnLi9pbWFnZXMnXG5cbi8qKlxuICpcbiAqXG4gKlxuICovXG5jb25zdCBpc1Rlc3QgPSAhdHJ1ZVxuY29uc3QgQ0xBU1NfTEFaWSA9ICdsYXp5J1xuY29uc3QgaDEgPSB0aXRsZSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoMS5pbm5lckhUTUwgPSB0aXRsZVxuICByZXR1cm4gaDFcbn1cbmNvbnN0IHBpeGFiYXlsb2dvID0gKCkgPT4ge1xuICBjb25zdCBsb2dvQXR0ciA9IHtcbiAgICBzcmM6ICdodHRwczovL3BpeGFiYXkuY29tL3N0YXRpYy9pbWcvcHVibGljL21lZGl1bV9yZWN0YW5nbGVfYS5wbmcnLFxuICAgIGFsdDogJ1BpeGFiYXknLFxuICAgIHN0eWxlOiAnd2lkdGg6MTAwcHg7aGVpZ2h0OmF1dG8nLFxuICB9XG4gIGNvbnN0IGxvZ28gPSBpbWcoKVxuICBsb2dvLnNyYyA9IGxvZ29BdHRyLnNyY1xuICBsb2dvLmFsdCA9IGxvZ29BdHRyLmFsdFxuICBsb2dvLnN0eWxlID0gbG9nb0F0dHIuc3R5bGVcbiAgcmV0dXJuIGxvZ29cbn0gLy8gbG9nb+udvCDsnbzri6hcblxuY29uc3QgZHJhdyA9ICh0YXJnZXQsIC4uLmVsZW1lbnRzKSA9PiB7XG4gIGxldCBkcmF3VGFyZ2V0ID0gZG9jdW1lbnQuYm9keVxuICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgIGRyYXdUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbiAgfVxuICBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoZWwgPT4ge1xuICAgIGRyYXdUYXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gIH0pXG59XG5cbmNvbnN0IGltZyA9IGNsYXNzTmFtZSA9PiB7XG4gIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKClcbiAgaW1nRWwuYWx0ID0gJydcbiAgaWYgKGNsYXNzTmFtZSkgaW1nRWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gIHJldHVybiBpbWdFbFxufVxuXG5jb25zdCBzZXRMYXp5SW1nID0gYXR0cnMgPT4ge1xuICBjb25zdCBpbWdFbCA9IGltZygpXG4gIGxldCB7IHdpZHRoLCBoZWlnaHQsIGFsdCB9ID0gYXR0cnNcbiAgaW1nRWxbJ3dpZHRoJ10gPSB3aWR0aFxuICBpbWdFbFsnaGVpZ2h0J10gPSBoZWlnaHRcbiAgaW1nRWxbJ2FsdCddID0gYWx0XG4gIGlmICghaXNUZXN0KSB7XG4gICAgaW1nRWwuZGF0YXNldC5zcmMgPSBhdHRyc1snZGF0YS1zcmMnXVxuICAgIGltZ0VsLmRhdGFzZXQucHJldiA9IGF0dHJzWydkYXRhLXByZXYnXVxuICAgIGltZ0VsLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTEFaWSlcbiAgfSBlbHNlIHtcbiAgICBpbWdFbC5zcmMgPSBhdHRyc1snZGF0YS1zcmMnXVxuICAgIGltZ0VsLnByZXYgPSBhdHRyc1snZGF0YS1wcmV2J11cbiAgfVxuICByZXR1cm4gaW1nRWxcbn1cblxuLypcbiAg7Jes6riw7IScIOu2gO2EsCDrr7jrlJTslrQg67iU65+sIOyymOumrCBcbiovXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIDogY2xhc3MgbmFtZVxuICovXG5jb25zdCBkaXYgPSBjbGFzc05hbWUgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpZiAoY2xhc3NOYW1lKSBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gIHJldHVybiBkaXZcbn1cblxuY29uc3Qgc2V0TWVkaXVtTGF6eUltZ0NvbnRhaW5lciA9IGF0dHJzID0+IHtcbiAgbGV0IHsgd2lkdGgsIGhlaWdodCwgYWx0IH0gPSBhdHRyc1xuICBjb25zdCBjb250YWluZXIgPSBkaXYoJ2NvbnRhaW5lcicpXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gaW1nKCdwbGFjZWhvbGRlcicpXG4gIGNvbnN0IHBpY3R1cmUgPSBpbWcoJ3BpY3R1cmUnKVxuICBwbGFjZWhvbGRlci5zcmMgPSBhdHRyc1snZGF0YS1wcmV2J11cbiAgcGxhY2Vob2xkZXJbJ3dpZHRoJ10gPSB3aWR0aFxuICBwbGFjZWhvbGRlclsnaGVpZ2h0J10gPSBoZWlnaHRcbiAgcGljdHVyZS5zcmMgPSBhdHRyc1snZGF0YS1zcmMnXVxuICBwaWN0dXJlLmFsdCA9IGFsdFxuICBwaWN0dXJlLm9ubG9hZCA9ICgpID0+IHtcbiAgICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpXG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBpY3R1cmUpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcilcbiAgcmV0dXJuIGNvbnRhaW5lclxuICAvLyByZXR1cm4gY29udGFpbmVyXG59XG5cbmNvbnN0IHNldFRlc3RNZWRpdW1MYXp5SW1nQ29udGFpbmVyID0gYXR0cnMgPT4ge1xuICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBhbHQgfSA9IGF0dHJzXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRpdignY29udGFpbmVyJylcbiAgY29uc3QgcGljdHVyZSA9IGltZygnJylcbiAgcGljdHVyZS5zcmMgPSBhdHRyc1snZGF0YS1zcmMnXVxuICBwaWN0dXJlWyd3aWR0aCddID0gd2lkdGhcbiAgcGljdHVyZVsnaGVpZ2h0J10gPSBoZWlnaHRcbiAgcGljdHVyZS5hbHQgPSBhbHRcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBpY3R1cmUpXG4gIHJldHVybiBjb250YWluZXJcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgOiDsg53shLHtlZjroKTripQg7Lu07Y+s64SM7Yq4IO2VqOyImOulvCDrhKPripTri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkcyA6IOu2iOufrOyYrCDsnbTrr7jsp4Ag6rKA7IOJIO2CpOybjOuTnFxuICpcbiAqL1xuY29uc3QgZHJhd0ltYWdlcyA9IChmdW5jLCBrZXl3b3JkcykgPT4ge1xuICBmZXRjaEltYWdlcyhrZXl3b3JkcylcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEubWFwKGl0ZW0gPT4gZnVuYyhpdGVtKSkpXG4gICAgLnRoZW4oaW1hZ2VzID0+IGRyYXcoJyNnYWxsZXJ5JywgLi4uaW1hZ2VzKSlcbiAgICAudGhlbigoKSA9PiAhaXNUZXN0ICYmIGxhenlMb2FkZXIoKSlcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnZHJhd2ltYWdlcycpKVxufVxuXG5jb25zdCBsYXp5TG9hZGVyID0gKCkgPT4ge1xuICAvLyDruIzrnbzsmrDsoIAg66Gc65Oc7JeQIOuMgO2VnCDshKTsoJXsnbQg7ZWE7JqUIO2VoOuTryDtlZjri6RcbiAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgTGF6eU9ic2VydmVyKClcbiAgfSBlbHNlIHtcbiAgICBMYXp5bG9hZGluZ05vcm1hbCgpXG4gIH1cbn1cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBoMSgnTGF6eSBsb2FkaW5nIFRlc3QnKVxuICBjb25zdCBsb2dvID0gcGl4YWJheWxvZ28oKVxuICAvLyBjb25zdCBkaXYgPSBzZXRNZWRpdW1MYXp5SW1nQ29udGFpbmVyKClcblxuICBkcmF3KCcjaGVhZGVyJywgdGl0bGUsIGxvZ28pXG4gIC8vIGRyYXcoJyNnYWxsZXJ5JywgZGl2KVxuICAvLyBkcmF3SW1hZ2VzKHNldExhenlJbWcpXG4gIGRyYXdJbWFnZXMoc2V0TGF6eUltZylcbiAgLy8gaWYgKGlzVGVzdCkge1xuICAvLyAgIGRyYXdJbWFnZXMoc2V0VGVzdE1lZGl1bUxhenlJbWdDb250YWluZXIsICcnKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIGRyYXdJbWFnZXMoc2V0TWVkaXVtTGF6eUltZ0NvbnRhaW5lciwgJycpXG4gIC8vIH1cblxuICAvKipcbiAgICpcbiAgICogdWkgZXZlbnTsl5Ag64yA7ZWY7JesIOqzteu2gCDtlYTsmpRcbiAgICpcbiAgICogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICogY29uc29sZS5sb2coJ+yLpO2WiScpXG4gICAqIH0pXG4gICAqXG4gICAqL1xuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygn7Iuk7ZaJIOuPlCcpXG5cbiAgLy8gfSlcbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ+yLpO2WiScpXG4gIC8vICAgbGF6eUxvYWRlcigpXG4gIC8vIH0pXG59XG5cbmluaXQoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==