(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"],{

/***/ "6MGo":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial-routing.module */ "SF65");
/* harmony import */ var _tutorial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial.component */ "PT6J");





let TutorialModule = class TutorialModule {
};
TutorialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tutorial_component__WEBPACK_IMPORTED_MODULE_4__["TutorialComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_3__["TutorialRoutingModule"]
        ]
    })
], TutorialModule);



/***/ }),

/***/ "PT6J":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tutorial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tutorial.component.html */ "c2Ls");
/* harmony import */ var _tutorial_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial.component.css */ "ukNU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TutorialComponent = class TutorialComponent {
    constructor() {
        // list : any = []
        this.list = ["Java", 'Python', 'Kotlin - android', 'React Native'];
    }
    ngOnInit() {
    }
};
TutorialComponent.ctorParameters = () => [];
TutorialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tutorial',
        template: _raw_loader_tutorial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tutorial_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TutorialComponent);



/***/ }),

/***/ "SF65":
/*!*****************************************************!*\
  !*** ./src/app/tutorial/tutorial-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TutorialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialRoutingModule", function() { return TutorialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tutorial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial.component */ "PT6J");




const routes = [{ path: '', component: _tutorial_component__WEBPACK_IMPORTED_MODULE_3__["TutorialComponent"] }];
let TutorialRoutingModule = class TutorialRoutingModule {
};
TutorialRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TutorialRoutingModule);



/***/ }),

/***/ "c2Ls":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n\n\n    <ul>\n        <div class=\"indicator\"></div>\n        <li><a routerLink=\"['tutorial',1]\">Java</a></li>\n        <li><a routerLink=\"['tutorial',2]\">Python</a></li>\n        <li><a routerLink=\"['tutorial',3]\"><B>Kotlin</B></a></li>\n        <li><a routerLink=\"['tutorial',4]\"></a>React</li>\n    </ul>\n</nav>\n\n");

/***/ }),

/***/ "ukNU":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul:nth-child(even) {\r\n  color: red;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  position: relative;\r\n  top: 200px;\r\n}\r\n\r\nul > li {\r\n  min-width: 20vw;\r\n  text-align: center;\r\n}\r\n\r\n.indicator {\r\n  width: 25px;\r\n  height: 25px;\r\n  background-color: teal;\r\n  border-radius: 50%;\r\n  border: 2px solid rgb(126, 123, 123);\r\n  position: relative;\r\n  left: 0;\r\n}\r\n\r\n@media only screen and (max-width: 380px) {\r\n  .indicator {\r\n    background-color: red;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 381px) {\r\n  .indicator {\r\n    background-color: blue;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 720px) {\r\n  .indicator {\r\n    background-color: orange;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .indicator {\r\n    background-color: orange;\r\n    left: calc(80% + 29px);\r\n    top: -5px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .indicator {\r\n    background-color: green;\r\n    left: calc(20% + 29px);\r\n    top: -5px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoidHV0b3JpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsOm50aC1jaGlsZChldmVuKSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxudWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIwMHB4O1xyXG59XHJcblxyXG51bCA+IGxpIHtcclxuICBtaW4td2lkdGg6IDIwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5kaWNhdG9yIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyNiwgMTIzLCAxMjMpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLmluZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MXB4KSB7XHJcbiAgLmluZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gIC5pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuaW5kaWNhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGxlZnQ6IGNhbGMoODAlICsgMjlweCk7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gIC5pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBsZWZ0OiBjYWxjKDIwJSArIDI5cHgpO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module.js.map