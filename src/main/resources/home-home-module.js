(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() {
        this.title = 'Todo';
        this.loanapplication = [];
        this.sel = 's';
        this.products = [
            { name: 'Personal Loan', id: 'personal' },
            { name: 'Car Loan', id: 'car' },
            { name: 'Home Loan', id: 'home' },
            { name: 'Mortgage Loan', id: 'mortgage' },
            { name: 'Gold Loan', id: 'gold' },
        ];
    }
    onSubmit(userForm) {
        console.log(userForm.value);
        const loandetail = {};
        loandetail.name = userForm.value.name;
        loandetail.phone = userForm.value.phone;
        loandetail.amount = +userForm.value.amount;
        loandetail.facility = userForm.value.products;
        loandetail.theme = this.getTheme(loandetail.amount);
        loandetail.icon = this.getIcon(userForm.value.products);
        this.loanapplication.push(loandetail);
        userForm.form.reset();
    }
    getIcon(product) {
        let icon = '';
        switch (product) {
            case 'home':
                icon = 'fa fa-home';
                break;
            case 'car':
                icon = 'fa fa-car';
                break;
            case 'mortgage':
                icon = 'fa fa-inr';
                break;
            case 'gold':
                icon = 'fa-solid fa-gem';
                break;
            case 'personal':
                icon = 'fa-solid fa-money-check-dollar-pen';
                break;
        }
        return icon;
    }
    getTheme(amount) {
        let bgcolor = '';
        if (amount >= 1000000) {
            bgcolor = 'red';
        }
        else if (amount < 100000) {
            bgcolor = 'grey';
        }
        else if (amount >= 100000 && amount < 1000000) {
            bgcolor = 'green';
        }
        return bgcolor;
    }
    setTheme(loanamount) { }
    ngOnInit() {
        let s = navigator.userAgent;
        let windowspattern = /windows/gi;
        let androidpattern = /android/gi;
        let iphonepattern = /iphone/gi;
        const patternarray = [windowspattern, androidpattern, iphonepattern];
        patternarray.forEach((e, index) => {
            if (e.test(s)) {
                switch (index) {
                    case 0:
                        this.env = 'desktop';
                        break;
                    case 1:
                        this.env = 'android';
                        break;
                    case 2:
                        this.env = 'iphone';
                        break;
                    default:
                        this.env = 'desktop';
                        break;
                }
            }
        });
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent.propDecorators = {
    cardcontainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cardcontainer',] }]
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "9vUh");




const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'tutorial/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | tutorialdetails-tutorialdetails-module */ "tutorialdetails-tutorialdetails-module").then(__webpack_require__.bind(null, /*! ../tutorialdetails/tutorialdetails.module */ "OuU8")).then((m) => m.TutorialdetailsModule),
    },
    {
        path: 'tutorial',
        loadChildren: () => __webpack_require__.e(/*! import() | tutorial-tutorial-module */ "tutorial-tutorial-module").then(__webpack_require__.bind(null, /*! ../tutorial/tutorial.module */ "6MGo")).then((m) => m.TutorialModule),
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeRoutingModule);



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <div>\n    <h4>You have {{taskArray.length}} in Shopping Cart</h4>\n    <h1 class=\"offer\" *ngIf=\"taskArray.length === 0\">Please Do Shopping...!! Don't Miss exclusive offers ...!!!</h1>\n    <input type=\"text\" name=\"username\"  #usernametmpvar>\n  \n    <button (click)=\"addTask(usernametmpvar.value)\">Add To Cart</button>\n  \n  \n    <ul>\n      <li *ngFor=\"let task of taskArray;let i = index;\" (click)=\"onListClicked(i)\"\n      [class.gold]=\"task>=100000 && task<=500000\"\n      [class.diamond]=\"task>500000\"\n      [class.silver]=\"task<100000\"\n      >\n      <i></i>\n      {{task}}</li>\n    </ul>\n  </div> -->\n\n  <div *ngIf=\"env=='android'\">\n    <label for=\"imageFile\">Upload a photo of yourself:</label>\n    <input type=\"file\" id=\"imageFile\" capture=\"environment\" accept=\"image/*\">\n</div>\n\n<div *ngIf=\"env=='desktop'\">\n  <label for=\"imageFile\">Upload From Gallery:</label>\n  <input type=\"file\" id=\"imageFile\">\n</div>\n\n\n\n  <h1>Loan Product</h1>\n  <form #userForm=\"ngForm\" >\n    \n      <label>Name</label>\n      <input ngModel type=\"text\" name=\"name\"/>\n      <br>\n      <br>\n  \n      <label>Phone</label>     \n      <input ngModel type=\"text\" name=\"phone\">\n      <br>\n      <br>\n  \n      <label>Loan Amount</label>      \n      <input ngModel type=\"text\" name=\"amount\">\n      <br>\n      <br>\n\n    \n      <label>Loan Product</label>\n       <select name=\"products\" [(ngModel)]=\"sel\">\n        <option value=\"s\" selected >Select products</option>\n        <option *ngFor=\"let product of products\" [value]=\"product.id\">{{product.name}}</option>\n       </select>\n      <br>\n      <br> \n      \n<button (click)=\"onSubmit(userForm)\">Submit</button>\n \n    \n  </form>\n  <br>\n\n  <div *ngIf=\"loanapplication.length>0\">\n\n    <div class=\"container\"  [style.background]=\"person.theme\"  *ngFor=\"let person of loanapplication\" #cardcontainer>\n      <div class=\"container1\">\n          <p>{{person.name}}</p>\n          <p>{{person.phone}}</p>\n     </div>\n    \n     <div class=\"container2\">\n         <p><i [class]=\"person.icon\"></i>{{person.facility}}</p>\n         <p><i class=\"fa fa-inr\"></i>{{person.amount}}</p>\n     </div>\n\n    \n\n  </div>\n \n \n\n\n\n");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n  display: inline-block;\r\n  width: 115px;\r\n}\r\n\r\n.container {\r\n  height: 30%;\r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: rgb(81, 140, 160);\r\n  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\r\n  border-radius: 10px;\r\n  justify-content: space-around;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.container1 {\r\n  padding: 2.5px;\r\n  font-family: \"monospace\", \"Courier New\";\r\n  font-size: medium;\r\n  color: white;\r\n}\r\n\r\n.container2 {\r\n  padding-left: 2.5px;\r\n  font-family: \"monospace\", \"Courier New\";\r\n  font-size: medium;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLDhDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMTVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgxLCAxNDAsIDE2MCk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IDAgcmdiYSgzMiwgMzMsIDM2LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjEge1xyXG4gIHBhZGRpbmc6IDIuNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1vbm9zcGFjZVwiLCBcIkNvdXJpZXIgTmV3XCI7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjVweDtcclxuICBmb250LWZhbWlseTogXCJtb25vc3BhY2VcIiwgXCJDb3VyaWVyIE5ld1wiO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let HomeModule = class HomeModule {
};
HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map