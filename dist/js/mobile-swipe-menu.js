/**
 * @package        mobile-swipe-menu
 * @version        1.0.2
 * @description    Swipe Menu with Vanilla JS for mobile
 * @author         milkamil93
 * @copyright      2020 mobile-swipe-menu
 * @license        GPL-3.0
 * @link           https://github.com/milkamil93/mobile-swipe-menu
*//******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");

window.MobileSwipeMenu = _menu__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swipe */ "./src/js/swipe.js");




var _default = /*#__PURE__*/function () {
  function _default(selector, mode, width) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.mode = mode || 'right';
    this.width = width || 0;
    this.hookWidth = 30;
    this.windowWidth = 0;
    this._scrollWidth = false;
    this.connectElement(selector);
    this.createHook();
    this.swipe(selector);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "connectElement",
    value: function connectElement(selector) {
      this.element = document.querySelector(selector);
      this.element.style.height = '100%'; //this.element.style.willChange = 'transform';

      this.element.style.top = '0';
      this.element.style.zIndex = '9999';
      this.element.style.position = 'fixed';
      this.windowWidth = window.innerWidth - this.scrollWidth();
      this.width = this.width || this.windowWidth;
      this.element.style.width = this.width + 'px';
      this.element.style[this.mode] = -this.width + 'px';
    }
  }, {
    key: "createHook",
    value: function createHook() {
      var hook = document.createElement('div');
      hook.style.width = this.hookWidth + 'px';
      hook.style.height = '100%';
      hook.style.top = '0';
      hook.style.position = 'absolute';

      if (this.mode === 'right') {
        hook.style.left = '-30px';
      } else {
        hook.style.right = '-30px';
      }

      hook.style.cursor = 'pointer';
      this.element.append(hook);
    }
  }, {
    key: "swipe",
    value: function swipe() {
      var self = this;
      var target = this.element;
      var swipe = new _swipe__WEBPACK_IMPORTED_MODULE_2__["Swipe"](target);

      swipe.start = function (e) {
        var matrix = new WebKitCSSMatrix(getComputedStyle(target).transform).m41,
            toucheX = this.getTouches(e).offsetX;
        if (matrix) this.set('xStart', toucheX - matrix);
      };

      swipe.drag = function (e) {
        this.preventDefault(e);
        var xCurrent = this.get('xCurrent');
        var boxLeft = Math.floor(target.getBoundingClientRect().left) - (self.windowWidth - self.width);

        if (self.mode === 'right') {
          switch (this.currentDirection) {
            case 'left':
              {
                console.log(boxLeft);

                if (boxLeft > 0 && self.width >= boxLeft) {
                  this.preventDefault(e);

                  if (-xCurrent > self.width) {
                    xCurrent = -self.width;
                  } else if (xCurrent > 0) {
                    xCurrent = 0;
                  }

                  target.style.transform = 'translateX(' + xCurrent + 'px)';
                }

                break;
              }

            case 'right':
              {
                if (self.windowWidth > boxLeft) {
                  this.preventDefault(e);

                  if (-xCurrent < 0) {
                    xCurrent = 0;
                  } else if (-xCurrent > self.width) {
                    xCurrent = -self.width;
                  }

                  target.style.transform = 'translateX(' + xCurrent + 'px)';
                }

                break;
              }
          }
        } else if (self.mode === 'left') {
          switch (this.currentDirection) {
            case 'right':
              {
                if (boxLeft < 0) {
                  if (xCurrent > self.width) {
                    xCurrent = self.width;
                  } else if (xCurrent <= 0) {
                    xCurrent = 0;
                  }

                  target.style.transform = 'translateX(' + xCurrent + 'px)';
                }

                break;
              }

            case 'left':
              {
                if (-boxLeft < self.windowWidth) {
                  if (xCurrent > self.width) {
                    xCurrent = self.width;
                  } else if (xCurrent < 0) {
                    xCurrent = 0;
                  }

                  target.style.transform = 'translateX(' + xCurrent + 'px)';
                }

                break;
              }
          }
        }
      };

      swipe.stop = function () {
        var boxLeft = Math.floor(target.getBoundingClientRect().left);

        if (self.mode === 'right') {
          boxLeft = boxLeft - (self.windowWidth - self.width);

          switch (this.currentDirection) {
            case 'left':
              {
                if (boxLeft < self.width) {
                  var variable = self.width - boxLeft;
                  var animate = setInterval(function () {
                    variable = variable + 7;
                    if (variable >= self.width) clearInterval(animate);
                    variable = variable > self.width ? self.width : variable;
                    target.style.transform = 'translateX(-' + variable + 'px)';
                  }, 1);
                } else {
                  target.style.transform = 'translateX(0px)';
                }

                break;
              }

            case 'right':
              {
                if (boxLeft > 0) {
                  var _variable = self.width - boxLeft;

                  var _animate = setInterval(function () {
                    _variable = _variable - 7;
                    if (_variable <= 0) clearInterval(_animate);
                    _variable = _variable < 0 ? 0 : _variable;
                    target.style.transform = 'translateX(-' + _variable + 'px)';
                  }, 1);
                } else {
                  target.style.transform = "translateX(-".concat(self.width, "px)");
                }

                break;
              }
          }
        } else if (self.mode === 'left') {
          switch (this.currentDirection) {
            case 'right':
              {
                if (-boxLeft < self.width) {
                  var _variable2 = self.width + boxLeft;

                  var _animate2 = setInterval(function () {
                    _variable2 = _variable2 + 7;
                    if (_variable2 >= self.width) clearInterval(_animate2);
                    _variable2 = _variable2 > self.width ? self.width : _variable2;
                    target.style.transform = 'translateX(' + _variable2 + 'px)';
                  }, 1);
                } else {
                  target.style.transform = 'translateX(0px)';
                }

                break;
              }

            case 'left':
              {
                if (boxLeft < 0) {
                  var _variable3 = self.width + boxLeft;

                  var _animate3 = setInterval(function () {
                    _variable3 = _variable3 - 7;
                    if (_variable3 <= 0) clearInterval(_animate3);
                    _variable3 = _variable3 < 0 ? 0 : _variable3;
                    target.style.transform = 'translateX(' + _variable3 + 'px)';
                  }, 1);
                } else {
                  target.style.transform = 'translateX(' + self.width + 'px)';
                }

                break;
              }
          }
        }
      };
    }
  }, {
    key: "scrollWidth",
    value: function scrollWidth() {
      var result = this._scrollWidth;

      if (result === false) {
        var div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        this._scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
      }

      return result;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/js/swipe.js":
/*!*************************!*\
  !*** ./src/js/swipe.js ***!
  \*************************/
/*! exports provided: Swipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swipe", function() { return Swipe; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Swipe = /*#__PURE__*/function () {
  function Swipe(selector) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Swipe);

    this.inWork = false;
    this.xDown = null;
    this.yDown = null;
    this.xStart = null;
    this.yStart = null;
    this.xCurrent = null;
    this.yCurrent = null;
    this.currentDirection = null;

    if (typeof selector === 'string') {
      document.querySelectorAll(selector).forEach(this.eventListener.bind(this));
    } else {
      this.eventListener(selector);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Swipe, [{
    key: "set",
    value: function set(field, value) {
      this[field] = value;
    }
  }, {
    key: "get",
    value: function get(field) {
      return this[field];
    }
  }, {
    key: "eventListener",
    value: function eventListener(element) {
      element.addEventListener('mousedown', this.handleTouchStart.bind(this), false);
      element.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
      element.addEventListener('mousemove', this.handleTouchMove.bind(this), false);
      element.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
      element.addEventListener('mouseup', this.handleTouchEnd.bind(this), false);
      element.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
    }
  }, {
    key: "getTouches",
    value: function getTouches(e) {
      var result = {
        offsetX: 0,
        offsetY: 0
      };
      var touch = e.touches ? e.touches[0] : e.originalEvent ? e.originalEvent.touches[0] : false;

      if (touch) {
        result.offsetX = touch.clientX;
        result.offsetY = touch.clientY;
      } else {
        result.offsetX = e.clientX;
        result.offsetY = e.clientY;
      }

      return result;
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      var touche = this.getTouches(e);
      this.set('inWork', true);
      this.set('xDown', touche.offsetX);
      this.set('yDown', touche.offsetY);
      this.set('xStart', touche.offsetX);
      this.set('yStart', touche.offsetY);
      this.start(e);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      if (!this.get('inWork')) return false;
      var touche = this.getTouches(e);
      this.set('xCurrent', touche.offsetX - this.get('xStart'));
      this.set('yCurrent', touche.offsetY - this.get('yStart'));
      this.drag(e);
      if (!this.get('xDown') || !this.get('yDown')) return false;
      var xDiff = this.get('xDown') - touche.offsetX;
      var yDiff = this.get('yDown') - touche.offsetY;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          this.set('currentDirection', 'left');
          this.left(e);
        } else {
          this.set('currentDirection', 'right');
          this.right(e);
        }
      } else {
        if (yDiff > 0) {
          this.set('currentDirection', 'up');
          this.up(e);
        } else {
          this.set('currentDirection', 'down');
          this.down(e);
        }
      }

      this.set('xDown', null);
      this.set('yDown', null);
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      this.set('inWork', false);
      this.stop(e);
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(e) {
      if (e.type === 'touchmove') {
        e.stopImmediatePropagation();
      } else {
        e.preventDefault();
      }
    }
  }, {
    key: "drag",
    value: function drag(e) {
      this.preventDefault(e);
      e.target.style.transition = 'none';
      e.target.style.transform = 'translate(' + this.get('xCurrent') + 'px, ' + this.get('yCurrent') + 'px)';
    }
  }, {
    key: "left",
    value: function left(e) {}
  }, {
    key: "right",
    value: function right(e) {}
  }, {
    key: "up",
    value: function up(e) {}
  }, {
    key: "down",
    value: function down(e) {}
  }, {
    key: "start",
    value: function start(e) {}
  }, {
    key: "stop",
    value: function stop(e) {}
  }]);

  return Swipe;
}();

/***/ })

/******/ });
//# sourceMappingURL=mobile-swipe-menu.js.map
//# sourceMappingURL=mobile-swipe-menu.js.map