/**
 * @package        mobile-swipe-menu
 * @version        2.1.0
 * @description    Swipe Menu with Vanilla JS for mobile
 * @author         milkamil93
 * @copyright      2021 mobile-swipe-menu
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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swipe */ "./src/js/swipe.js");





var _default = /*#__PURE__*/function () {
  /**
   * @description Operating mode. Possible values: `right`, `left`
   * @type string
   */

  /**
   * @deprecated Will be deleted in version 3.0. Use `disableSwipe` or `enableSwipe` methods instead.
   * @description The status of whether the swipe will run.
   * @type boolean
   */

  /**
   * @description Menu width.
   * @type number
   * */

  /**
   * @description Side grip width. Does not work if `enableBodyHook` is enabled.
   * @type number
   * */

  /**
   * @description Capture mode. If enabled, the entire screen is taken into account.
   * @type boolean
   * */

  /**
   * @description Scrolling bar width.
   * @types number, boolean
   * */

  /**
   * @description Menu open status.
   * @type boolean
   * */

  /**
   * @description Event set.
   * @type object
   * */

  /**
   * @description Menu element in document.
   * @type object
   * */

  /**
   * @description Window width.
   * @type number
   * */

  /**
   * @constructor
   * @param {string, object} selector - Menu element or selector in document.
   * @param {object} options - Customization options.
   * @param {string} options.mode - Operating mode. Possible values: right, left
   * @param {number} options.width - Menu width.
   * @param {number} options.hookWidth - Side grip width. Does not work if `enableBodyHook` is enabled.
   * @param {boolean} options.enableBodyHook - Capture mode. If enabled, the entire screen is taken into account.
   * @param {object} options.events - Event set.
   * @param {function} options.events.start - Event starting swiping menu.
   * @param {function} options.events.stop - Event stopping swiping menu.
   * @param {function} options.events.opened - Event menu is opened.
   * @param {function} options.events.closed - Event menu is closed.
   * @param {function} options.events.drag - Event menu is swiping.
   * */
  function _default(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_mode", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "lock", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_width", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_hookWidth", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_enableBodyHook", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_scrollWidth", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_isOpened", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_events", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_element", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_windowWidth", void 0);

    var _options$mode = options.mode,
        mode = _options$mode === void 0 ? 'right' : _options$mode,
        _options$width = options.width,
        width = _options$width === void 0 ? 0 : _options$width,
        _options$hookWidth = options.hookWidth,
        hookWidth = _options$hookWidth === void 0 ? 30 : _options$hookWidth,
        _options$enableBodyHo = options.enableBodyHook,
        enableBodyHook = _options$enableBodyHo === void 0 ? false : _options$enableBodyHo,
        _options$events = options.events,
        events = _options$events === void 0 ? {} : _options$events;
    this._mode = mode;
    this._width = width;
    this._hookWidth = hookWidth;
    this._enableBodyHook = enableBodyHook;
    this._events = Object.assign({
      start: function start() {},
      stop: function stop() {},
      opened: function opened() {},
      closed: function closed() {},
      drag: function drag() {}
    }, events);

    this._connectElement(selector);

    if (!enableBodyHook) {
      this._createHook();
    }

    this._init();
  }
  /**
   * @description Creating a menu element in a document.
   * @param {string, object} selector - Menu element or selector in document.
   * */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "_connectElement",
    value: function _connectElement(selector) {
      this._element = typeof selector === 'string' ? document.querySelector(selector) : selector;
      this._element.style.height = '100%';
      this._element.style.top = '0';
      this._element.style.zIndex = '1000';
      this._element.style.position = 'fixed';
      this._windowWidth = window.innerWidth - this._getScrollWidth();
      this._width = this._width || this._windowWidth;
      this._element.style.width = this._width + 'px';
      this._element.style[this._mode] = -this._width + 'px';
    }
    /**
     * @description Side grip creation.
     * */

  }, {
    key: "_createHook",
    value: function _createHook() {
      var hook = document.createElement('div');
      hook.style.width = this._hookWidth + 'px';
      hook.style.height = '100%';
      hook.style.top = '0';
      hook.style.position = 'absolute';
      hook.style.cursor = 'pointer';

      if (this._mode === 'right') {
        hook.style.left = "-".concat(this._hookWidth, "px");
      } else {
        hook.style.right = "-".concat(this._hookWidth, "px");
      }

      this._element.append(hook);
    }
    /**
     * @description Opening the menu with mode `right`.
     * */

  }, {
    key: "_openRightMenu",
    value: function _openRightMenu() {
      this._transition();

      this._element.style.transform = "translateX(-".concat(this._width, "px)");
      this._isOpened = true;

      this._events.opened.bind(this)();
    }
    /**
     * @description Closing the menu with mode `right`.
     * */

  }, {
    key: "_closeRightMenu",
    value: function _closeRightMenu() {
      this._transition();

      this._element.style.transform = 'translateX(0px)';
      this._isOpened = false;

      this._events.closed.bind(this)();
    }
    /**
     * @description Opening the menu with mode `left`.
     * */

  }, {
    key: "_openLeftMenu",
    value: function _openLeftMenu() {
      this._transition();

      this._element.style.transform = "translateX(".concat(this._width, "px)");
      this._isOpened = true;

      this._events.opened.bind(this)();
    }
    /**
     * @description Closing the menu with mode `left`.
     * */

  }, {
    key: "_closeLeftMenu",
    value: function _closeLeftMenu() {
      this._transition();

      this._element.style.transform = 'translateX(0px)';
      this._isOpened = false;

      this._events.closed.bind(this)();
    }
    /**
     * @description Smooth movement.
     * */

  }, {
    key: "_transition",
    value: function _transition() {
      var _this = this;

      this._element.style.transitionDuration = '300ms';
      setTimeout(function () {
        _this._element.style.transitionDuration = '0ms';
      }, 200);
    }
    /**
     * @description Initialization.
     * */

  }, {
    key: "_init",
    value: function _init() {
      var self = this;
      var target = this._element;
      var hookTarget = this._enableBodyHook ? document.body : this._element;
      hookTarget.style['cursor'] = 'auto';
      hookTarget.style['touch-action'] = 'pan-y';
      hookTarget.style['-ms-touch-action'] = 'pan-y';
      var swipe = new _swipe__WEBPACK_IMPORTED_MODULE_3__["Swipe"](hookTarget);

      swipe.start = function (e) {
        if (self._lock && !self._isOpened) {
          return false;
        }

        var matrix = new WebKitCSSMatrix(getComputedStyle(target).transform).m41;
        var toucheX = this.getTouches(e).offsetX;

        if (matrix) {
          this.set('xStart', toucheX - matrix);
        }

        self._events.start.bind(self)(this);
      };

      swipe.drag = function (e) {
        if (self._lock && !self._isOpened) {
          return false;
        }

        if (['left', 'right'].indexOf(this.currentDirection) >= 0 && e.type === 'touchmove') {
          e.stopImmediatePropagation();
          e.stopPropagation();

          if (e.cancelable) {
            e.preventDefault();
          }
        }

        self._events.drag.bind(self)(this);

        var xCurrent = this.get('xCurrent');

        var boxLeft = Math.floor(target.getBoundingClientRect().left) - (self._windowWidth - self._width);

        if (self._mode === 'right') {
          switch (this.currentDirection) {
            case 'left':
              {
                if (self._width >= boxLeft) {
                  if (-xCurrent > self._width) {
                    xCurrent = -self._width;
                  } else if (xCurrent > 0) {
                    xCurrent = 0;
                  }

                  target.style.transform = "translateX(".concat(xCurrent, "px)");
                }

                break;
              }

            case 'right':
              {
                if (self._windowWidth > boxLeft) {
                  if (-xCurrent < 0) {
                    xCurrent = 0;
                  } else if (-xCurrent > self._width) {
                    xCurrent = -self._width;
                  }

                  target.style.transform = "translateX(".concat(xCurrent, "px)");
                }

                break;
              }
          }
        } else if (self._mode === 'left') {
          switch (this.currentDirection) {
            case 'right':
              {
                if (boxLeft < 0) {
                  if (xCurrent > self._width) {
                    xCurrent = self._width;
                  } else if (xCurrent <= 0) {
                    xCurrent = 0;
                  }

                  target.style.transform = "translateX(".concat(xCurrent, "px)");
                }

                break;
              }

            case 'left':
              {
                if (xCurrent >= self._width) {
                  xCurrent = self._width;
                } else if (xCurrent < 0) {
                  xCurrent = 0;
                }

                target.style.transform = "translateX(".concat(xCurrent, "px)");
                break;
              }
          }
        }
      };

      swipe.stop = function () {
        if (self._lock && !self._isOpened) {
          return false;
        }

        var boxLeft = Math.floor(target.getBoundingClientRect().left);

        if (self._mode === 'right') {
          boxLeft = boxLeft - (self._windowWidth - self._width);

          switch (this.currentDirection) {
            case 'left':
              {
                if (boxLeft < self._width) {
                  if (boxLeft < self._width - 30) {
                    self._openRightMenu();
                  } else {
                    self._closeRightMenu();
                  }
                } else {
                  target.style.transform = 'translateX(0px)';
                }

                break;
              }

            case 'right':
              {
                if (boxLeft > 0) {
                  if (boxLeft > 30) {
                    self._closeRightMenu();
                  } else {
                    self._openRightMenu();
                  }
                } else {
                  target.style.transform = "translateX(-".concat(self._width, "px)");
                }

                break;
              }
          }
        } else if (self._mode === 'left') {
          switch (this.currentDirection) {
            case 'right':
              {
                if (-boxLeft < self._width) {
                  if (-boxLeft < self._width - 30) {
                    self._openLeftMenu();
                  } else {
                    self._closeLeftMenu();
                  }
                } else {
                  target.style.transform = 'translateX(0px)';
                }

                break;
              }

            case 'left':
              {
                if (boxLeft < 0) {
                  if (boxLeft < -30) {
                    self._closeLeftMenu();
                  } else {
                    self._openLeftMenu();
                  }
                } else {
                  target.style.transform = "translateX(".concat(self._width, "px)");
                }

                break;
              }
          }
        }

        self._events.stop.bind(self)(this);
      };
    }
    /**
     * @description Getting the width of the scrollbar.
     * */

  }, {
    key: "_getScrollWidth",
    value: function _getScrollWidth() {
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
    /**
     * @deprecated Since version 2.1 Will be deleted in version 3.0. Use openMenu instead.
     */

  }, {
    key: "open",
    value: function open() {
      this.openMenu();
    }
    /**
     * @description Opens the menu.
     * */

  }, {
    key: "openMenu",
    value: function openMenu() {
      if (this._mode === 'right') {
        this._openRightMenu();
      } else {
        this._openLeftMenu();
      }
    }
    /**
     * @deprecated Since version 2.1 Will be deleted in version 3.0. Use closeMenu instead.
     */

  }, {
    key: "close",
    value: function close() {
      this.closeMenu();
    }
    /**
     * @description Closes the menu.
     * */

  }, {
    key: "closeMenu",
    value: function closeMenu() {
      if (this._mode === 'right') {
        this._closeRightMenu();
      } else {
        this._closeLeftMenu();
      }
    }
    /**
     * @deprecated Since version 2.1 Will be deleted in version 3.0. Use toggleMenu instead.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.toggleMenu();
    }
    /**
     * @description Opens or closes the menu.
     * */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (this._isOpened) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    }
    /**
     * @description Disables menu swiping.
     * */

  }, {
    key: "disableSwipe",
    value: function disableSwipe() {
      this.lock = true;
    }
    /**
     * @description Enables menu swiping.
     * */

  }, {
    key: "enableSwipe",
    value: function enableSwipe() {
      this.lock = false;
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
      element.addEventListener('mousedown', this.handleTouchStart.bind(this));
      element.addEventListener('touchstart', this.handleTouchStart.bind(this));
      element.addEventListener('mousemove', this.handleTouchMove.bind(this));
      element.addEventListener('touchmove', this.handleTouchMove.bind(this), {
        passive: false
      });
      element.addEventListener('mouseup', this.handleTouchEnd.bind(this));
      element.addEventListener('touchend', this.handleTouchEnd.bind(this));
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
        result.offsetX = Math.round(touch.clientX);
        result.offsetY = Math.round(touch.clientY);
      } else {
        result.offsetX = Math.round(e.clientX);
        result.offsetY = Math.round(e.clientY);
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
      if (!this.get('inWork')) {
        return false;
      }

      var touche = this.getTouches(e);
      this.set('xCurrent', touche.offsetX - this.get('xStart'));
      this.set('yCurrent', touche.offsetY - this.get('yStart'));
      var xDiff = this.get('xDown') - touche.offsetX;
      var yDiff = this.get('yDown') - touche.offsetY;

      if (!this.get('currentDirection')) {
        this.setDirection(e, xDiff, yDiff);
      }

      this.drag(e);

      if (!this.get('xDown') || !this.get('yDown')) {
        return false;
      }

      this.setDirection(e, xDiff, yDiff);
      this.set('xDown', null);
      this.set('yDown', null);
    }
  }, {
    key: "setDirection",
    value: function setDirection(e, xDiff, yDiff) {
      if (Math.abs(xDiff) >= Math.abs(yDiff)) {
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
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      this.set('inWork', false);
      this.stop(e);
    }
  }, {
    key: "drag",
    value: function drag(e) {
      e.target.style.transition = 'none';
      e.target.style.transform = "translate(".concat(this.get('xCurrent'), "px, ").concat(this.get('yCurrent'), "px)");
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
