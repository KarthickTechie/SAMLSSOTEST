(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "4yXv":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customers.component.html */ "r1bX");
/* harmony import */ var _customers_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.component.css */ "G7Ko");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





let CustomersComponent = class CustomersComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.copyright = 'All Rights Reserved';
    }
    ngOnInit() { }
    selectLanguage(e) {
        this.translateService.use(e.target.value);
    }
    showAlert() {
        this.translateService.get('retail_customer').subscribe((text) => {
            alert(text);
        });
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
CustomersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customers',
        template: _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customers_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomersComponent);



/***/ }),

/***/ "G7Ko":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "lA+e":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ "4yXv");




const routes = [{ path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] }];
let CustomersRoutingModule = class CustomersRoutingModule {
};
CustomersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomersRoutingModule);



/***/ }),

/***/ "r1bX":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<select name=\"language\" id=\"language\" (change)=\"selectLanguage($event)\">\n    <option value=\"en-US\">English</option>\n    <option value=\"de-DE\">German</option>\n    <option value=\"fr-FR\">French</option>\n    <option value=\"ta-TA\">Tamil</option>\n    <option value=\"hi-HI\">Hindi</option>\n</select>\n\n<div class=\"container\">\n    <h4>{{ 'retail_customer' |  translate }}</h4>\n    <h4>MSME Customer</h4>\n    <h4>Agri Customers</h4>\n</div>\n\n<p>{{copyright | translate}}</p>\n\n<button (click)=\"showAlert()\">test</button>");

/***/ }),

/***/ "vfUp":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: HttpLoaderFactory, CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-routing.module */ "lA+e");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers.component */ "4yXv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let CustomersModule = class CustomersModule {
};
CustomersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                defaultLanguage: 'en-US',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
    })
], CustomersModule);



/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map