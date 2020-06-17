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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Surviv.ts":
/*!***********************!*\
  !*** ./src/Surviv.ts ***!
  \***********************/
/*! exports provided: Surviv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Surviv", function() { return Surviv; });
/* harmony import */ var _engine_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Game */ "./src/engine/Game.ts");
/* harmony import */ var _engine_shape_Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/shape/Rectangle */ "./src/engine/shape/Rectangle.ts");
/* harmony import */ var _engine_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/Vector2 */ "./src/engine/Vector2.ts");



class Surviv extends _engine_Game__WEBPACK_IMPORTED_MODULE_0__["default"] {
    init(deltat) {
        // throw new Error("Method not implemented.");
    }
    draw(deltat) {
        this.canvas.fillMapRect(new _engine_shape_Rectangle__WEBPACK_IMPORTED_MODULE_1__["default"](100, 100, _engine_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].zero), "red");
        this.canvas.fillText("hello", new _engine_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"](10, 0), {
            fontSize: 50
        });
    }
    update(deltat) {
        // throw new Error("Method not implemented.");
    }
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Surviv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Surviv */ "./src/Surviv.ts");

let surviv = new _Surviv__WEBPACK_IMPORTED_MODULE_0__["Surviv"]();
surviv.start();


/***/ }),

/***/ "./src/engine/Game.ts":
/*!****************************!*\
  !*** ./src/engine/Game.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape/Rectangle */ "./src/engine/shape/Rectangle.ts");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector2 */ "./src/engine/Vector2.ts");
/* harmony import */ var _views_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Canvas */ "./src/engine/views/Canvas.ts");



class Game {
    constructor() {
        this.started = false;
        // The game loop
        this.loop = () => {
            // CLEAR
            this.canvas.clearRect(new _shape_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.width, this.canvas.height, _Vector2__WEBPACK_IMPORTED_MODULE_1__["default"].zero));
            // DRAW
            if (this.lastDraw === undefined) {
                this.lastDraw = Date.now();
            }
            this.draw(Date.now() - this.lastDraw);
            // UPDATE
            if (this.lastUpdate === undefined) {
                this.lastUpdate = Date.now();
            }
            this.update(Date.now() - this.lastUpdate);
            window.requestAnimationFrame(this.loop);
        };
        this.canvas = new _views_Canvas__WEBPACK_IMPORTED_MODULE_2__["default"](document.getElementById("game"));
    }
    start() {
        if (this.started) {
            throw new Error("The game is already running");
        }
        this.started = true;
        window.requestAnimationFrame(this.loop);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/engine/Vector2.ts":
/*!*******************************!*\
  !*** ./src/engine/Vector2.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2; });
class Vector2 {
    constructor(x, y) {
        if (y === undefined) {
            this.x = x;
            this.y = y;
        }
        else {
            this.x = x;
            this.y = y;
        }
    }
    add(vector) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }
    subtract(vector) {
        return new Vector2(this.x - vector.x, this.y -= vector.y);
    }
    multiply(vector) {
        return new Vector2(this.x * vector.x, this.y * vector.y);
    }
    divide(vector) {
        return new Vector2(this.x / vector.x, this.y / vector.y);
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize() {
        let length = this.length();
        if (length === 0) {
            return Vector2.unitX;
        }
        else {
            return this.divide(new Vector2(length, length));
        }
    }
}
Vector2.one = new Vector2(1, 1);
Vector2.zero = new Vector2(0, 0);
Vector2.unitX = new Vector2(1, 0);
Vector2.unitY = new Vector2(0, 1);


/***/ }),

/***/ "./src/engine/shape/Rectangle.ts":
/*!***************************************!*\
  !*** ./src/engine/shape/Rectangle.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rectangle; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/engine/shape/Shape.ts");

class Rectangle extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get top() {
        return this.position.y;
    }
    set top(value) {
        this.position.y = value;
    }
    get left() {
        return this.position.x;
    }
    set left(value) {
        this.position.x = value;
    }
    get bottom() {
        return this.position.y + this.height;
    }
    set bottom(value) {
        this.position.y = value - this.height;
    }
    get right() {
        return this.position.y + this.width;
    }
    set right(value) {
        this.position.x = value - this.width;
    }
    constructor(width, height, position) {
        super(position);
        this.width = width;
        this.height = height;
    }
    intersects(rect) {
        return !(((this.top + this.height) < (rect.top)) ||
            (this.top > (rect.top + rect.height)) ||
            ((this.left + this.width) < rect.left) ||
            (this.left > (rect.left + rect.width)));
    }
    includes(point) {
        return point.x > this.bottom && point.x < this.top
            && point.y > this.left && point.y < this.right;
    }
}


/***/ }),

/***/ "./src/engine/shape/Shape.ts":
/*!***********************************!*\
  !*** ./src/engine/shape/Shape.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Shape {
    get x() {
        return this.position.x;
    }
    set x(value) {
        this.position.x = value;
    }
    get y() {
        return this.position.y;
    }
    set y(value) {
        this.position.y = value;
    }
    constructor(position) {
        this.position = position;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Shape);


/***/ }),

/***/ "./src/engine/views/Camera.ts":
/*!************************************!*\
  !*** ./src/engine/views/Camera.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var _shape_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shape/Rectangle */ "./src/engine/shape/Rectangle.ts");

class Camera {
    get width() {
        return this.rectangle.width;
    }
    get height() {
        return this.rectangle.height;
    }
    get position() {
        return this.rectangle.position;
    }
    get x() {
        return this.position.x;
    }
    set x(value) {
        this.position.x = value;
    }
    get y() {
        return this.position.y;
    }
    set y(value) {
        this.position.y = value;
    }
    // TODO: zoom
    constructor(size) {
        this.rectangle = size;
    }
    /** Convert map coordanants to screen coords */
    mapToScreenPos(map) {
        return map.subtract(this.rectangle.position);
    }
    /** Convert map coordanants to screen coords */
    mapToScreenRect(map) {
        return new _shape_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"](map.width, map.height, map.position.subtract(this.rectangle.position));
    }
}


/***/ }),

/***/ "./src/engine/views/Canvas.ts":
/*!************************************!*\
  !*** ./src/engine/views/Canvas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _shape_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shape/Rectangle */ "./src/engine/shape/Rectangle.ts");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vector2 */ "./src/engine/Vector2.ts");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera */ "./src/engine/views/Camera.ts");



class Canvas {
    constructor(canvas) {
        this.styles = {
            fill: "",
            line: {},
            stroke: "",
            text: {}
        };
        this.initializeScreen = () => {
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            this.camera.rectangle.width = this.canvas.clientWidth;
            this.camera.rectangle.height = this.canvas.clientHeight;
            console.log(this.canvas.width, this.canvas.height);
        };
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_2__["default"](new _shape_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, _Vector2__WEBPACK_IMPORTED_MODULE_1__["default"].zero));
        this.initializeScreen();
        window.addEventListener("resize", this.initializeScreen);
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    /** Runs a drawing function with the given styles */
    runWithStyles(fn, styles) {
        // Save the default state
        this.context.save();
        // Set options
        if (styles !== undefined) {
            if (styles.line !== undefined) {
                this.context.lineWidth = styles.line.lineWidth !== undefined ? styles.line.lineWidth : this.styles.line.lineWidth;
                this.context.lineCap = styles.line.lineCap !== undefined ? styles.line.lineCap : this.styles.line.lineCap;
                this.context.lineJoin = styles.line.lineJoin !== undefined ? styles.line.lineJoin : this.styles.line.lineJoin;
                this.context.miterLimit = styles.line.miterLimit !== undefined ? styles.line.miterLimit : this.styles.line.miterLimit;
                this.context.setLineDash(styles.line.lineDash);
                this.context.lineDashOffset = styles.line.lineDashOffset !== undefined ? styles.line.lineDashOffset : this.styles.line.lineDashOffset;
            }
            if (styles.text !== undefined) {
                this.context.font = `${styles.text.fontSize !== undefined ? styles.text.fontSize : this.styles.text.fontSize}px ${styles.text.font !== undefined ? styles.text.font : this.styles.text.font}`;
                this.context.textAlign = styles.text.textAlign !== undefined ? styles.text.textAlign : this.styles.text.textAlign;
                this.context.textBaseline = styles.text.textBaseline !== undefined ? styles.text.textBaseline : this.styles.text.textBaseline;
                this.context.direction = styles.text.direction !== undefined ? styles.text.direction : this.styles.text.direction;
            }
            if (styles.fill !== undefined) {
                this.context.fillStyle = styles.fill !== undefined ? styles.fill : this.styles.fill;
            }
            if (styles.stroke !== undefined) {
                this.context.strokeStyle = styles.stroke !== undefined ? styles.stroke : this.styles.stroke;
            }
        }
        let output = fn();
        // Restore the default state
        this.context.restore();
        return output;
    }
    /** Sets all pixels in the rectangle relitive to the map to transparent black, erasing any previously drawn content. */
    clearMapRect(rectangle) {
        let maprect = this.camera.mapToScreenRect(rectangle);
        this.clearRect(maprect);
    }
    /** Sets all pixels in the rectangle to transparent black, erasing any previously drawn content. */
    clearRect(rectangle) {
        this.context.clearRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
    /** Draws a filled rectangle relitive to the map with the given styles */
    fillMapRect(rectangle, fill) {
        let maprect = this.camera.mapToScreenRect(rectangle);
        this.fillRect(maprect, fill);
    }
    /** Draws a filled rectangle with the given styles */
    fillRect(rectangle, fill) {
        this.runWithStyles(() => this.context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height), { fill });
    }
    /** Paints a rectangle relitive to the map onto the canvas, using the current stroke style. */
    strokeMapRect(rectangle, stroke) {
        let maprect = this.camera.mapToScreenRect(rectangle);
        this.strokeRect(maprect, stroke);
    }
    /** Paints a rectangle onto the canvas, using the current stroke style. */
    strokeRect(rectangle, stroke) {
        this.runWithStyles(() => this.context.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height), { stroke });
    }
    /** Draws (fills) a given text at the given position on the map. */
    fillMapText(string, point, text, fill) {
        let mapPoint = this.camera.mapToScreenPos(point);
        this.fillText(string, mapPoint, text, fill);
    }
    /** Draws (fills) a given text at the given position. */
    fillText(string, point, text, fill) {
        this.runWithStyles(() => this.context.fillText(string, point.x, point.y + text.fontSize), { fill, text });
    }
    /** Paints a rectangle onto the canvas, using the current stroke style. */
    strokeMapText(string, point, text, stroke) {
        let mapPoint = this.camera.mapToScreenPos(point);
        this.strokeText(string, mapPoint, text, stroke);
    }
    /** Paints a rectangle onto the canvas, using the current stroke style. */
    strokeText(string, point, text, stroke) {
        this.runWithStyles(() => this.context.strokeText(string, point.x, point.y), { stroke, text });
    }
    /** Measure a given string with the given styles */
    measureText(string, text) {
        // Measure the text
        return this.runWithStyles(() => this.context.measureText(string), { text }).width;
    }
    // EVENTS
    addClickHandler(shape, handler) {
        this.canvas.addEventListener("click", (e) => {
            let position = new _Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](e.x, e.y);
            if (shape.includes(position)) {
                handler(e);
            }
        });
    }
    addHoverHandler(shape, handler) {
        this.canvas.addEventListener("mousemove", (e) => {
            let position = new _Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](e.x, e.y);
            if (shape.includes(position)) {
                handler(e);
            }
        });
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N1cnZpdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL1ZlY3RvcjIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zaGFwZS9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zaGFwZS9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3ZpZXdzL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3ZpZXdzL0NhbnZhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFD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UUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDZDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGVBQWUsQ0FBQyxLQUFZLEVBQUUsT0FBc0I7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGdEQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFckMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDZDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2VuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZW5naW5lL3NoYXBlL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi9lbmdpbmUvVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZpdiBleHRlbmRzIEdhbWUge1xyXG4gICAgcHVibGljIGluaXQoZGVsdGF0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkcmF3KGRlbHRhdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbE1hcFJlY3QobmV3IFJlY3RhbmdsZSgxMDAsIDEwMCwgVmVjdG9yMi56ZXJvKSwgXCJyZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGxUZXh0KFwiaGVsbG9cIiwgbmV3IFZlY3RvcjIoMTAsIDApLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA1MFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGF0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN1cnZpdiB9IGZyb20gXCIuL1N1cnZpdlwiO1xyXG5cclxubGV0IHN1cnZpdiA9IG5ldyBTdXJ2aXYoKTtcclxuc3Vydml2LnN0YXJ0KCk7IiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9zaGFwZS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IFZlY3RvcjIgZnJvbSBcIi4vVmVjdG9yMlwiO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3ZpZXdzL0NhbnZhc1wiO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgR2FtZSB7XHJcbiAgICBwcm90ZWN0ZWQgY2FudmFzOiBDYW52YXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydGVkID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2FtZSBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxhc3REcmF3OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RVcGRhdGU6IG51bWJlcjtcclxuXHJcbiAgICAvLyBUaGUgZ2FtZSBsb29wXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvb3AgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ0xFQVJcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhclJlY3QobmV3IFJlY3RhbmdsZSh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCBWZWN0b3IyLnplcm8pKTtcclxuXHJcbiAgICAgICAgLy8gRFJBV1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3REcmF3ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RHJhdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhdyhEYXRlLm5vdygpIC0gdGhpcy5sYXN0RHJhdyk7XHJcblxyXG4gICAgICAgIC8vIFVQREFURVxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZShEYXRlLm5vdygpIC0gdGhpcy5sYXN0VXBkYXRlKTtcclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBJbml0aWFsaXplIHRoZSBnYW1lICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5pdChkZWx0YXQ6IG51bWJlcik6IHZvaWQ7XHJcbiAgICAvKiogRHJhdyB0aGUgc2NlbmUgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3KGRlbHRhdDogbnVtYmVyKTogdm9pZDtcclxuICAgIC8qKiBVcGRhdGUgdGhlIHNjZW5lICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgdXBkYXRlKGRlbHRhdDogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG9uZSA9IG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB6ZXJvID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHVuaXRYID0gbmV3IFZlY3RvcjIoMSwgMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHVuaXRZID0gbmV3IFZlY3RvcjIoMCwgMSk7XHJcblxyXG4gICAgcHVibGljIGFkZCh2ZWN0b3I6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54ICsgdmVjdG9yLngsIHRoaXMueSArIHZlY3Rvci55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VidHJhY3QodmVjdG9yOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCAtIHZlY3Rvci54LCB0aGlzLnkgLT0gdmVjdG9yLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aXBseSh2ZWN0b3I6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54ICogdmVjdG9yLngsIHRoaXMueSAqIHZlY3Rvci55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGl2aWRlKHZlY3RvcjogVmVjdG9yMikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnggLyB2ZWN0b3IueCwgdGhpcy55IC8gdmVjdG9yLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjIudW5pdFg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlKG5ldyBWZWN0b3IyKGxlbmd0aCwgbGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvcjIgZnJvbSBcIi4uL1ZlY3RvcjJcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZSB7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0b3AodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbGVmdCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgYm90dG9tKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdmFsdWUgLSB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCByaWdodCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHZhbHVlIC0gdGhpcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcG9zaXRpb246IFZlY3RvcjIpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcnNlY3RzKHJlY3Q6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhKFxyXG4gICAgICAgICAgICAoKHRoaXMudG9wICsgdGhpcy5oZWlnaHQpIDwgKHJlY3QudG9wKSkgfHxcclxuICAgICAgICAgICAgKHRoaXMudG9wID4gKHJlY3QudG9wICsgcmVjdC5oZWlnaHQpKSB8fFxyXG4gICAgICAgICAgICAoKHRoaXMubGVmdCArIHRoaXMud2lkdGgpIDwgcmVjdC5sZWZ0KSB8fFxyXG4gICAgICAgICAgICAodGhpcy5sZWZ0ID4gKHJlY3QubGVmdCArIHJlY3Qud2lkdGgpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluY2x1ZGVzKHBvaW50OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPiB0aGlzLmJvdHRvbSAmJiBwb2ludC54IDwgdGhpcy50b3BcclxuICAgICAgICAgICAgJiYgcG9pbnQueSA+IHRoaXMubGVmdCAmJiBwb2ludC55IDwgdGhpcy5yaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IyIGZyb20gXCIuLi9WZWN0b3IyXCI7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBTaGFwZSB7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjI7XHJcblxyXG4gICAgcHVibGljIGdldCB4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbnRlcnNlY3RzKHNoYXBlOiBTaGFwZSk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5jbHVkZXMocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFwZTsiLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9zaGFwZS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IFZlY3RvcjIgZnJvbSBcIi4uL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XHJcbiAgICBwdWJsaWMgcmVjdGFuZ2xlOiBSZWN0YW5nbGU7XHJcblxyXG4gICAgcHVibGljIGdldCB3aWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWN0YW5nbGUud2lkdGg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWN0YW5nbGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB4KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiB6b29tXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBSZWN0YW5nbGUpIHtcclxuICAgICAgICB0aGlzLnJlY3RhbmdsZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnQgbWFwIGNvb3JkYW5hbnRzIHRvIHNjcmVlbiBjb29yZHMgKi9cclxuICAgIHB1YmxpYyBtYXBUb1NjcmVlblBvcyhtYXA6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbWFwLnN1YnRyYWN0KHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydCBtYXAgY29vcmRhbmFudHMgdG8gc2NyZWVuIGNvb3JkcyAqL1xyXG4gICAgcHVibGljIG1hcFRvU2NyZWVuUmVjdChtYXA6IFJlY3RhbmdsZSk6IFJlY3RhbmdsZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUobWFwLndpZHRoLCBtYXAuaGVpZ2h0LCBtYXAucG9zaXRpb24uc3VidHJhY3QodGhpcy5yZWN0YW5nbGUucG9zaXRpb24pKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4uL3NoYXBlL0NpcmNsZVwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9zaGFwZS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi9zaGFwZS9TaGFwZVwiO1xyXG5pbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi4vVmVjdG9yMlwiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL0NhbWVyYVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVzIHtcclxuICAgIGxpbmU/OiBJTGluZVN0eWxlcztcclxuICAgIHRleHQ/OiBJVGV4dFN0eWxlcztcclxuICAgIGZpbGw/OiBJRmlsbFN0eWxlcztcclxuICAgIHN0cm9rZT86IElTdHJva2VTdHlsZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmVTdHlsZXMge1xyXG4gICAgLyoqIFdpZHRoIG9mIGxpbmVzLiBEZWZhdWx0IGAxLjBgICovXHJcbiAgICBsaW5lV2lkdGg/OiBudW1iZXI7XHJcbiAgICAvKiogVHlwZSBvZiBlbmRpbmdzIG9uIHRoZSBlbmQgb2YgbGluZXMuIFBvc3NpYmxlIHZhbHVlczogYGJ1dHRgIChkZWZhdWx0KSwgYHJvdW5kYCwgYHNxdWFyZWAuICovXHJcbiAgICBsaW5lQ2FwPzogXCJidXR0XCIgfCBcInJvdW5kXCIgfCBcInNxdWFyZVwiO1xyXG4gICAgLyoqIERlZmluZXMgdGhlIHR5cGUgb2YgY29ybmVycyB3aGVyZSB0d28gbGluZXMgbWVldC4gUG9zc2libGUgdmFsdWVzOiBgcm91bmRgLCBgYmV2ZWxgLCBgbWl0ZXJgIChkZWZhdWx0KS4gKi9cclxuICAgIGxpbmVKb2luPzogXCJyb3VuZFwiIHwgXCJiZXZlbFwiIHwgXCJtaXRlclwiO1xyXG4gICAgLyoqIE1pdGVyIGxpbWl0IHJhdGlvLiBEZWZhdWx0IGAxMGAuICovXHJcbiAgICBtaXRlckxpbWl0PzogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IGxpbmUgZGFzaCBwYXR0ZXJuLiAqL1xyXG4gICAgbGluZURhc2g/OiBudW1iZXJbXTtcclxuICAgIC8qKiBTcGVjaWZpZXMgd2hlcmUgdG8gc3RhcnQgYSBkYXNoIGFycmF5IG9uIGEgbGluZS4gKi9cclxuICAgIGxpbmVEYXNoT2Zmc2V0PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0U3R5bGVzIHtcclxuICAgIC8qKiBGb250IHNpemUgc2V0dGluZy4gRGVmYXVsdCB2YWx1ZSBgMTBgICovXHJcbiAgICBmb250U2l6ZT86IG51bWJlcjtcclxuICAgIC8qKiBGb250IHNldHRpbmcuIERlZmF1bHQgdmFsdWUgYHNhbnMtc2VyaWZgICovXHJcbiAgICBmb250Pzogc3RyaW5nO1xyXG4gICAgLyoqIFRleHQgYWxpZ25tZW50IHNldHRpbmcuIFBvc3NpYmxlIHZhbHVlczogYHN0YXJ0YCAoZGVmYXVsdCksIGBlbmRgLCBgbGVmdGAsIGByaWdodGAgb3IgYGNlbnRlcmAuICovXHJcbiAgICB0ZXh0QWxpZ24/OiBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xyXG4gICAgLyoqIEJhc2VsaW5lIGFsaWdubWVudCBzZXR0aW5nLiBQb3NzaWJsZSB2YWx1ZXM6IGB0b3BgLCBgaGFuZ2luZ2AsIGBtaWRkbGVgLCBgYWxwaGFiZXRpY2AgKGRlZmF1bHQpLCBgaWRlb2dyYXBoaWNgLCBgYm90dG9tYC4gKi9cclxuICAgIHRleHRCYXNlbGluZT86IFwidG9wXCIgfCBcImhhbmdpbmdcIiB8IFwibWlkZGxlXCIgfCBcImFscGhhYmV0aWNcIiB8IFwiaWRlb2dyYXBoaWNcIiB8IFwiYm90dG9tXCI7XHJcbiAgICAvKiogRGlyZWN0aW9uYWxpdHkuIFBvc3NpYmxlIHZhbHVlczogYGx0cmAsIGBydGxgLCBgaW5oZXJpdGAgKGRlZmF1bHQpLiAqL1xyXG4gICAgZGlyZWN0aW9uPzogXCJsdHJcIiB8IFwicnRsXCIgfCBcImluaGVyaXRcIjtcclxufVxyXG5cclxuLyoqIENvbG9yIG9yIHN0eWxlIHRvIHVzZSBpbnNpZGUgc2hhcGVzLiBEZWZhdWx0OiBgIzAwMGAgKGJsYWNrKS4gKi9cclxuZXhwb3J0IHR5cGUgSUZpbGxTdHlsZXMgPSBzdHJpbmc7XHJcblxyXG4vKiogQ29sb3Igb3Igc3R5bGUgdG8gdXNlIGZvciB0aGUgbGluZXMgYXJvdW5kIHNoYXBlcy4gRGVmYXVsdCBgIzAwMGAgKGJsYWNrKS4gKi9cclxuZXhwb3J0IHR5cGUgSVN0cm9rZVN0eWxlcyA9IHN0cmluZztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FtZXJhOiBDYW1lcmE7XHJcblxyXG4gICAgcHVibGljIHN0eWxlczogSVN0eWxlcyA9IHtcclxuICAgICAgICBmaWxsOiBcIlwiLFxyXG4gICAgICAgIGxpbmU6IHt9LFxyXG4gICAgICAgIHN0cm9rZTogXCJcIixcclxuICAgICAgICB0ZXh0OiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKG5ldyBSZWN0YW5nbGUoMCwgMCwgVmVjdG9yMi56ZXJvKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNjcmVlbigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaW5pdGlhbGl6ZVNjcmVlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbml0aWFsaXplU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYS5yZWN0YW5nbGUud2lkdGggPSB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbWVyYS5yZWN0YW5nbGUuaGVpZ2h0ID0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUnVucyBhIGRyYXdpbmcgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gc3R5bGVzICovXHJcbiAgICBwcml2YXRlIHJ1bldpdGhTdHlsZXM8VD4oZm46ICgpID0+IFQsIHN0eWxlcz86IElTdHlsZXMpOiBUIHtcclxuICAgICAgICAvLyBTYXZlIHRoZSBkZWZhdWx0IHN0YXRlXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IG9wdGlvbnNcclxuICAgICAgICBpZiAoc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHN0eWxlcy5saW5lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBzdHlsZXMubGluZS5saW5lV2lkdGggIT09IHVuZGVmaW5lZCA/IHN0eWxlcy5saW5lLmxpbmVXaWR0aCA6IHRoaXMuc3R5bGVzLmxpbmUubGluZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVDYXAgPSBzdHlsZXMubGluZS5saW5lQ2FwICE9PSB1bmRlZmluZWQgPyBzdHlsZXMubGluZS5saW5lQ2FwIDogdGhpcy5zdHlsZXMubGluZS5saW5lQ2FwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVKb2luID0gc3R5bGVzLmxpbmUubGluZUpvaW4gIT09IHVuZGVmaW5lZCA/IHN0eWxlcy5saW5lLmxpbmVKb2luIDogdGhpcy5zdHlsZXMubGluZS5saW5lSm9pbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5taXRlckxpbWl0ID0gc3R5bGVzLmxpbmUubWl0ZXJMaW1pdCAhPT0gdW5kZWZpbmVkID8gc3R5bGVzLmxpbmUubWl0ZXJMaW1pdCA6IHRoaXMuc3R5bGVzLmxpbmUubWl0ZXJMaW1pdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRMaW5lRGFzaChzdHlsZXMubGluZS5saW5lRGFzaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZURhc2hPZmZzZXQgPSBzdHlsZXMubGluZS5saW5lRGFzaE9mZnNldCAhPT0gdW5kZWZpbmVkID8gc3R5bGVzLmxpbmUubGluZURhc2hPZmZzZXQgOiB0aGlzLnN0eWxlcy5saW5lLmxpbmVEYXNoT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdHlsZXMudGV4dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke3N0eWxlcy50ZXh0LmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzdHlsZXMudGV4dC5mb250U2l6ZSA6IHRoaXMuc3R5bGVzLnRleHQuZm9udFNpemV9cHggJHtzdHlsZXMudGV4dC5mb250ICE9PSB1bmRlZmluZWQgPyBzdHlsZXMudGV4dC5mb250IDogdGhpcy5zdHlsZXMudGV4dC5mb250fWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gc3R5bGVzLnRleHQudGV4dEFsaWduICE9PSB1bmRlZmluZWQgPyBzdHlsZXMudGV4dC50ZXh0QWxpZ24gOiB0aGlzLnN0eWxlcy50ZXh0LnRleHRBbGlnbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC50ZXh0QmFzZWxpbmUgPSBzdHlsZXMudGV4dC50ZXh0QmFzZWxpbmUgIT09IHVuZGVmaW5lZCA/IHN0eWxlcy50ZXh0LnRleHRCYXNlbGluZSA6IHRoaXMuc3R5bGVzLnRleHQudGV4dEJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRpcmVjdGlvbiA9IHN0eWxlcy50ZXh0LmRpcmVjdGlvbiAhPT0gdW5kZWZpbmVkID8gc3R5bGVzLnRleHQuZGlyZWN0aW9uIDogdGhpcy5zdHlsZXMudGV4dC5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0eWxlcy5maWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBzdHlsZXMuZmlsbCAhPT0gdW5kZWZpbmVkID8gc3R5bGVzLmZpbGwgOiB0aGlzLnN0eWxlcy5maWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdHlsZXMuc3Ryb2tlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlcy5zdHJva2UgIT09IHVuZGVmaW5lZCA/IHN0eWxlcy5zdHJva2UgOiB0aGlzLnN0eWxlcy5zdHJva2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvdXRwdXQgPSBmbigpO1xyXG5cclxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBkZWZhdWx0IHN0YXRlXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogU2V0cyBhbGwgcGl4ZWxzIGluIHRoZSByZWN0YW5nbGUgcmVsaXRpdmUgdG8gdGhlIG1hcCB0byB0cmFuc3BhcmVudCBibGFjaywgZXJhc2luZyBhbnkgcHJldmlvdXNseSBkcmF3biBjb250ZW50LiAqL1xyXG4gICAgcHVibGljIGNsZWFyTWFwUmVjdChyZWN0YW5nbGU6IFJlY3RhbmdsZSkge1xyXG4gICAgICAgIGxldCBtYXByZWN0ID0gdGhpcy5jYW1lcmEubWFwVG9TY3JlZW5SZWN0KHJlY3RhbmdsZSk7XHJcbiAgICAgICAgdGhpcy5jbGVhclJlY3QobWFwcmVjdCk7XHJcbiAgICB9XHJcbiAgICAvKiogU2V0cyBhbGwgcGl4ZWxzIGluIHRoZSByZWN0YW5nbGUgdG8gdHJhbnNwYXJlbnQgYmxhY2ssIGVyYXNpbmcgYW55IHByZXZpb3VzbHkgZHJhd24gY29udGVudC4gKi9cclxuICAgIHB1YmxpYyBjbGVhclJlY3QocmVjdGFuZ2xlOiBSZWN0YW5nbGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRHJhd3MgYSBmaWxsZWQgcmVjdGFuZ2xlIHJlbGl0aXZlIHRvIHRoZSBtYXAgd2l0aCB0aGUgZ2l2ZW4gc3R5bGVzICovXHJcbiAgICBwdWJsaWMgZmlsbE1hcFJlY3QocmVjdGFuZ2xlOiBSZWN0YW5nbGUsIGZpbGw/OiBJRmlsbFN0eWxlcykge1xyXG4gICAgICAgIGxldCBtYXByZWN0ID0gdGhpcy5jYW1lcmEubWFwVG9TY3JlZW5SZWN0KHJlY3RhbmdsZSk7XHJcbiAgICAgICAgdGhpcy5maWxsUmVjdChtYXByZWN0LCBmaWxsKTtcclxuICAgIH1cclxuICAgIC8qKiBEcmF3cyBhIGZpbGxlZCByZWN0YW5nbGUgd2l0aCB0aGUgZ2l2ZW4gc3R5bGVzICovXHJcbiAgICBwdWJsaWMgZmlsbFJlY3QocmVjdGFuZ2xlOiBSZWN0YW5nbGUsIGZpbGw/OiBJRmlsbFN0eWxlcykge1xyXG4gICAgICAgIHRoaXMucnVuV2l0aFN0eWxlcygoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QocmVjdGFuZ2xlLngsIHJlY3RhbmdsZS55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICB7IGZpbGwgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvKiogUGFpbnRzIGEgcmVjdGFuZ2xlIHJlbGl0aXZlIHRvIHRoZSBtYXAgb250byB0aGUgY2FudmFzLCB1c2luZyB0aGUgY3VycmVudCBzdHJva2Ugc3R5bGUuICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlTWFwUmVjdChyZWN0YW5nbGU6IFJlY3RhbmdsZSwgc3Ryb2tlPzogSVN0cm9rZVN0eWxlcykge1xyXG4gICAgICAgIGxldCBtYXByZWN0ID0gdGhpcy5jYW1lcmEubWFwVG9TY3JlZW5SZWN0KHJlY3RhbmdsZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2VSZWN0KG1hcHJlY3QsIHN0cm9rZSk7XHJcbiAgICB9XHJcbiAgICAvKiogUGFpbnRzIGEgcmVjdGFuZ2xlIG9udG8gdGhlIGNhbnZhcywgdXNpbmcgdGhlIGN1cnJlbnQgc3Ryb2tlIHN0eWxlLiAqL1xyXG4gICAgcHVibGljIHN0cm9rZVJlY3QocmVjdGFuZ2xlOiBSZWN0YW5nbGUsIHN0cm9rZT86IElTdHJva2VTdHlsZXMpIHtcclxuICAgICAgICB0aGlzLnJ1bldpdGhTdHlsZXMoKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QocmVjdGFuZ2xlLngsIHJlY3RhbmdsZS55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICB7IHN0cm9rZSB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRHJhd3MgKGZpbGxzKSBhIGdpdmVuIHRleHQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uIG9uIHRoZSBtYXAuICovXHJcbiAgICBwdWJsaWMgZmlsbE1hcFRleHQoc3RyaW5nOiBzdHJpbmcsIHBvaW50OiBWZWN0b3IyLCB0ZXh0PzogSVRleHRTdHlsZXMsIGZpbGw/OiBJU3Ryb2tlU3R5bGVzKSB7XHJcbiAgICAgICAgbGV0IG1hcFBvaW50ID0gdGhpcy5jYW1lcmEubWFwVG9TY3JlZW5Qb3MocG9pbnQpO1xyXG4gICAgICAgIHRoaXMuZmlsbFRleHQoc3RyaW5nLCBtYXBQb2ludCwgdGV4dCwgZmlsbCk7XHJcbiAgICB9XHJcbiAgICAvKiogRHJhd3MgKGZpbGxzKSBhIGdpdmVuIHRleHQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLiAqL1xyXG4gICAgcHVibGljIGZpbGxUZXh0KHN0cmluZzogc3RyaW5nLCBwb2ludDogVmVjdG9yMiwgdGV4dD86IElUZXh0U3R5bGVzLCBmaWxsPzogSVN0cm9rZVN0eWxlcykge1xyXG4gICAgICAgIHRoaXMucnVuV2l0aFN0eWxlcygoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoc3RyaW5nLCBwb2ludC54LCBwb2ludC55ICsgdGV4dC5mb250U2l6ZSksXHJcbiAgICAgICAgICAgIHsgZmlsbCwgdGV4dCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUGFpbnRzIGEgcmVjdGFuZ2xlIG9udG8gdGhlIGNhbnZhcywgdXNpbmcgdGhlIGN1cnJlbnQgc3Ryb2tlIHN0eWxlLiAqL1xyXG4gICAgcHVibGljIHN0cm9rZU1hcFRleHQoc3RyaW5nOiBzdHJpbmcsIHBvaW50OiBWZWN0b3IyLCB0ZXh0PzogSVRleHRTdHlsZXMsIHN0cm9rZT86IElTdHJva2VTdHlsZXMpIHtcclxuICAgICAgICBsZXQgbWFwUG9pbnQgPSB0aGlzLmNhbWVyYS5tYXBUb1NjcmVlblBvcyhwb2ludCk7XHJcbiAgICAgICAgdGhpcy5zdHJva2VUZXh0KHN0cmluZywgbWFwUG9pbnQsIHRleHQsIHN0cm9rZSk7XHJcbiAgICB9XHJcbiAgICAvKiogUGFpbnRzIGEgcmVjdGFuZ2xlIG9udG8gdGhlIGNhbnZhcywgdXNpbmcgdGhlIGN1cnJlbnQgc3Ryb2tlIHN0eWxlLiAqL1xyXG4gICAgcHVibGljIHN0cm9rZVRleHQoc3RyaW5nOiBzdHJpbmcsIHBvaW50OiBWZWN0b3IyLCB0ZXh0PzogSVRleHRTdHlsZXMsIHN0cm9rZT86IElTdHJva2VTdHlsZXMpIHtcclxuICAgICAgICB0aGlzLnJ1bldpdGhTdHlsZXMoKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQoc3RyaW5nLCBwb2ludC54LCBwb2ludC55KSxcclxuICAgICAgICAgICAgeyBzdHJva2UsIHRleHQgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIE1lYXN1cmUgYSBnaXZlbiBzdHJpbmcgd2l0aCB0aGUgZ2l2ZW4gc3R5bGVzICovXHJcbiAgICBwdWJsaWMgbWVhc3VyZVRleHQoc3RyaW5nOiBzdHJpbmcsIHRleHQ/OiBJVGV4dFN0eWxlcyk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gTWVhc3VyZSB0aGUgdGV4dFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJ1bldpdGhTdHlsZXMoKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1lYXN1cmVUZXh0KHN0cmluZyksXHJcbiAgICAgICAgICAgIHsgdGV4dCB9XHJcbiAgICAgICAgKS53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFVkVOVFNcclxuICAgIHB1YmxpYyBhZGRDbGlja0hhbmRsZXIoc2hhcGU6IFNoYXBlLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IG5ldyBWZWN0b3IyKGUueCwgZS55KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaGFwZS5pbmNsdWRlcyhwb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSG92ZXJIYW5kbGVyKHNoYXBlOiBTaGFwZSwgaGFuZGxlcjogRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gbmV3IFZlY3RvcjIoZS54LCBlLnkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNoYXBlLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==