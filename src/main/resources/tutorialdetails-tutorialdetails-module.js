(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorialdetails-tutorialdetails-module"],{

/***/ "4uu5":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorialdetails/tutorialdetails.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tutorialdetails works!</p>\n");

/***/ }),

/***/ "OuU8":
/*!***********************************************************!*\
  !*** ./src/app/tutorialdetails/tutorialdetails.module.ts ***!
  \***********************************************************/
/*! exports provided: TutorialdetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialdetailsModule", function() { return TutorialdetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tutorialdetails_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorialdetails-routing.module */ "nZVO");
/* harmony import */ var _tutorialdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorialdetails.component */ "dYs1");





let TutorialdetailsModule = class TutorialdetailsModule {
};
TutorialdetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tutorialdetails_component__WEBPACK_IMPORTED_MODULE_4__["TutorialdetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tutorialdetails_routing_module__WEBPACK_IMPORTED_MODULE_3__["TutorialdetailsRoutingModule"]
        ]
    })
], TutorialdetailsModule);



/***/ }),

/***/ "dYs1":
/*!**************************************************************!*\
  !*** ./src/app/tutorialdetails/tutorialdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: TutorialdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialdetailsComponent", function() { return TutorialdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tutorialdetails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tutorialdetails.component.html */ "4uu5");
/* harmony import */ var _tutorialdetails_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorialdetails.component.css */ "u5FQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let TutorialdetailsComponent = class TutorialdetailsComponent {
    constructor(route) {
        this.route = route;
        const params = this.route.snapshot.paramMap.get('id');
        params;
    }
    ngOnInit() { }
};
TutorialdetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
TutorialdetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tutorialdetails',
        template: _raw_loader_tutorialdetails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tutorialdetails_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TutorialdetailsComponent);



/***/ }),

/***/ "nZVO":
/*!*******************************************************************!*\
  !*** ./src/app/tutorialdetails/tutorialdetails-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TutorialdetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialdetailsRoutingModule", function() { return TutorialdetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tutorialdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorialdetails.component */ "dYs1");




const routes = [{ path: '', component: _tutorialdetails_component__WEBPACK_IMPORTED_MODULE_3__["TutorialdetailsComponent"] }];
let TutorialdetailsRoutingModule = class TutorialdetailsRoutingModule {
};
TutorialdetailsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TutorialdetailsRoutingModule);



/***/ }),

/***/ "u5FQ":
/*!***************************************************************!*\
  !*** ./src/app/tutorialdetails/tutorialdetails.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXRvcmlhbGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=tutorialdetails-tutorialdetails-module.js.map