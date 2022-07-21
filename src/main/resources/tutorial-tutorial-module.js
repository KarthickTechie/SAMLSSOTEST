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
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <ul>\n        <li><a routerLink=\"['tutorial',1]\">Java</a></li>\n        <li><a routerLink=\"['tutorial',2]\">Python</a></li>\n        <li><a routerLink=\"['tutorial',3]\"><B>Kotlin - Programing Language of Android</B></a></li>\n        <li><a routerLink=\"['tutorial',4]\"></a>React - Javascript Library</li>\n    </ul>\n</nav>\n\n<div>\n    <h2></h2>\n</div>\n");

/***/ }),

/***/ "ukNU":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul:nth-child(even) {\r\n    color: red;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0VBQ1oiLCJmaWxlIjoidHV0b3JpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module.js.map