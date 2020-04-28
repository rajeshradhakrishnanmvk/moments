(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _create_register_opener_create_register_opener_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-register-opener/create-register-opener.component */ "./src/app/create-register-opener/create-register-opener.component.ts");
/* harmony import */ var _create_category_opener_create_category_opener_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-category-opener/create-category-opener.component */ "./src/app/create-category-opener/create-category-opener.component.ts");
/* harmony import */ var _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-details/category-details.component */ "./src/app/category-details/category-details.component.ts");
/* harmony import */ var _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-view/category-view.component */ "./src/app/category-view/category-view.component.ts");
/* harmony import */ var _moment_search_moment_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moment-search/moment-search.component */ "./src/app/moment-search/moment-search.component.ts");
/* harmony import */ var _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./can-activate-route.guard */ "./src/app/can-activate-route.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        children: [
            {
                path: 'user/:userId/edit',
                component: _create_register_opener_create_register_opener_component__WEBPACK_IMPORTED_MODULE_4__["CreateRegisterOpenerComponent"], outlet: "userEditOutlet"
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'category',
        children: [
            {
                path: 'category/:categoryId',
                component: _create_category_opener_create_category_opener_component__WEBPACK_IMPORTED_MODULE_5__["CreateCategoryOpenerComponent"], outlet: "categoryEditOutlet"
            }
        ]
    },
    {
        path: 'categorydetails',
        component: _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailsComponent"]
    },
    {
        path: 'category/:categoryId',
        component: _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_7__["CategoryViewComponent"]
    },
    {
        path: 'moments',
        component: _moment_search_moment_search_component__WEBPACK_IMPORTED_MODULE_8__["MomentSearchComponent"],
        canActivate: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_9__["CanActivateRouteGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_9__["CanActivateRouteGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!-- <app-moment-search></app-moment-search> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _request_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-cache.service */ "./src/app/request-cache.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _nasa_nasa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nasa/nasa.component */ "./src/app/nasa/nasa.component.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _moment_search_moment_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./moment-search/moment-search.component */ "./src/app/moment-search/moment-search.component.ts");
/* harmony import */ var _http_interceptors_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./http-interceptors/index */ "./src/app/http-interceptors/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _create_register_opener_create_register_opener_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./create-register-opener/create-register-opener.component */ "./src/app/create-register-opener/create-register-opener.component.ts");
/* harmony import */ var _create_category_opener_create_category_opener_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-category-opener/create-category-opener.component */ "./src/app/create-category-opener/create-category-opener.component.ts");
/* harmony import */ var _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./category-details/category-details.component */ "./src/app/category-details/category-details.component.ts");
/* harmony import */ var _menu_list_category_menu_list_category_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./menu-list-category/menu-list-category.component */ "./src/app/menu-list-category/menu-list-category.component.ts");
/* harmony import */ var _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./category-view/category-view.component */ "./src/app/category-view/category-view.component.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_nasa_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/nasa.service */ "./src/app/services/nasa.service.ts");
/* harmony import */ var _services_userprofile_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/userprofile.service */ "./src/app/services/userprofile.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* Routing */


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                // import HttpClientModule after BrowserModule.
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'My-Xsrf-Cookie',
                    headerName: 'My-Xsrf-Header',
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_21__["CategoryComponent"],
                _nasa_nasa_component__WEBPACK_IMPORTED_MODULE_11__["NasaComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
                _create_register_opener_create_register_opener_component__WEBPACK_IMPORTED_MODULE_22__["CreateRegisterOpenerComponent"],
                _moment_search_moment_search_component__WEBPACK_IMPORTED_MODULE_15__["MomentSearchComponent"],
                _create_category_opener_create_category_opener_component__WEBPACK_IMPORTED_MODULE_23__["CreateCategoryOpenerComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_24__["CategoryDetailsComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _menu_list_category_menu_list_category_component__WEBPACK_IMPORTED_MODULE_25__["MenuListCategoryComponent"],
                _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_26__["CategoryViewComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _http_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["HttpErrorHandler"],
                _message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
                { provide: _request_cache_service__WEBPACK_IMPORTED_MODULE_7__["RequestCache"], useClass: _request_cache_service__WEBPACK_IMPORTED_MODULE_7__["RequestCacheWithMap"] },
                _http_interceptors_index__WEBPACK_IMPORTED_MODULE_16__["httpInterceptorProviders"],
                _services_router_service__WEBPACK_IMPORTED_MODULE_27__["RouterService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_28__["AuthenticationService"],
                _services_nasa_service__WEBPACK_IMPORTED_MODULE_29__["NasaService"],
                _services_userprofile_service__WEBPACK_IMPORTED_MODULE_30__["UserprofileService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_31__["CategoryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_21__["CategoryComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Mock client-side authentication/authorization service */
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getAuthorizationToken = function () {
        return localStorage.getItem("JWT_TOKEN");
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthService);
    return AuthService;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/can-activate-route.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/can-activate-route.guard.ts ***!
  \*********************************************/
/*! exports provided: CanActivateRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateRouteGuard", function() { return CanActivateRouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/router.service */ "./src/app/services/router.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateRouteGuard = /** @class */ (function () {
    function CanActivateRouteGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateRouteGuard.prototype.canActivate = function () {
        if (!this.authService.isTokenExpired()) {
            return true;
        }
        else {
            this.router.routeToLogin();
            return false;
        }
    };
    ;
    CanActivateRouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]])
    ], CanActivateRouteGuard);
    return CanActivateRouteGuard;
}());



/***/ }),

/***/ "./src/app/category-details/category-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/category-details/category-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-width: 80%;\r\n  }\r\n  \r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  a {\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktZGV0YWlscy9jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/category-details/category-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/category-details/category-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <br>\r\n      <div class=\"container\">\r\n          <div class=\"container\">\r\n            <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayout.gt-md=\"row\"  fxLayoutAlign=\"space-around center\" class=\"content\">\r\n                <div class=\"blocks\">\r\n                    <button button=\"submit\" mat-raised-button color=\"primary\" (click)=\"OpenCategoryView(0)\">\r\n                        <mat-icon>add</mat-icon> Add Category\r\n                    </button>\r\n                </div>\r\n          </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"container\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"content\">\r\n          <mat-card class=\"card\" >\r\n            <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\r\n              <h3>Categories</h3>\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n                <div class=\"example-container mat-elevation-z8\">\r\n                    <mat-table #table [dataSource]=\"dataSource\">\r\n                    <ng-container matColumnDef=\"id\">\r\n                        <mat-header-cell *matHeaderCellDef> Id </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"description\">\r\n                      <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let element\"> {{element.description}} </mat-cell>\r\n                    </ng-container>\r\n                      <ng-container matColumnDef=\"name\">\r\n                        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n                      </ng-container>\r\n                       <ng-container matColumnDef=\"createby\">\r\n                          <mat-header-cell *matHeaderCellDef> Create By </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let element\"> {{element.createby }} </mat-cell>\r\n                        </ng-container>\r\n                      <ng-container matColumnDef=\"creationdate\">\r\n                          <mat-header-cell *matHeaderCellDef> Creation Date </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let element\"> {{element.creationdate}} </mat-cell>\r\n                        </ng-container>\r\n                      <ng-container matColumnDef=\"edit\">\r\n                          <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let element\">\r\n                            <a\r\n                              (click)=\"OpenCategoryView(element.id)\"\r\n                                type=\"button\">\r\n                              <mat-icon class=\"icon\">edit</mat-icon>\r\n                            </a> \r\n                          </mat-cell>\r\n                        </ng-container> \r\n                      <ng-container matColumnDef=\"delete\">\r\n                        <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\">\r\n                          <a (click)=\"deleteCategory(element.id)\"\r\n                              type=\"button\">\r\n                            <mat-icon class=\"icon\">delete</mat-icon>\r\n                          </a> \r\n                        </mat-cell>\r\n                      </ng-container>   \r\n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n                  </div> \r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet name=\"reminderEditOutlet\"></router-outlet>"

/***/ }),

/***/ "./src/app/category-details/category-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/category-details/category-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryDetailsComponent, CategoryDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function() { return CategoryDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDataSource", function() { return CategoryDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category */ "./src/app/category.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryDetailsComponent = /** @class */ (function () {
    function CategoryDetailsComponent(routerService, categoryService, _authService) {
        this.routerService = routerService;
        this.categoryService = categoryService;
        this._authService = _authService;
        this.displayedColumns = ['description', 'name', 'createby', 'creationdate', 'edit', 'delete'];
        this.dataSource = new CategoryDataSource(this.categoryService);
    }
    CategoryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._authService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
        this.categoryService.fetchCategoriesFromServer();
    };
    CategoryDetailsComponent.prototype.OpenCategoryView = function (categoryId) {
        this.routerService.routeToCategoryView(categoryId);
    };
    CategoryDetailsComponent.prototype.deleteCategory = function (categoryId) {
        if (this.status) {
            this.categoryService.deleteCategory(categoryId);
            this.dataSource = new CategoryDataSource(this.categoryService);
        }
        else {
            //alert('Login in Before');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _category__WEBPACK_IMPORTED_MODULE_4__["Category"])
    ], CategoryDetailsComponent.prototype, "category", void 0);
    CategoryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-details',
            template: __webpack_require__(/*! ./category-details.component.html */ "./src/app/category-details/category-details.component.html"),
            styles: [__webpack_require__(/*! ./category-details.component.css */ "./src/app/category-details/category-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], CategoryDetailsComponent);
    return CategoryDetailsComponent;
}());

var CategoryDataSource = /** @class */ (function (_super) {
    __extends(CategoryDataSource, _super);
    function CategoryDataSource(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    CategoryDataSource.prototype.connect = function () {
        return this.dataService.getCategories();
    };
    CategoryDataSource.prototype.disconnect = function () {
    };
    return CategoryDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/category-view/category-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/category-view/category-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXZpZXcvY2F0ZWdvcnktdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/category-view/category-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/category-view/category-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"keep-c-list-container\">\r\n  <app-nasa [moment]=\"moment\" *ngFor=\"let moment of categoryMoments\">\r\n  </app-nasa>\r\n</div>"

/***/ }),

/***/ "./src/app/category-view/category-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/category-view/category-view.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryViewComponent", function() { return CategoryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_nasa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nasa.service */ "./src/app/services/nasa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryViewComponent = /** @class */ (function () {
    function CategoryViewComponent(activateRoute, nasaService) {
        this.activateRoute = activateRoute;
        this.nasaService = nasaService;
        this.categoryId = 0;
        this.categoryId =
            +this.activateRoute.snapshot.paramMap.get('categoryId');
    }
    CategoryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nasaService.getMoments().subscribe(function (data) {
            _this.categoryMoments = data.filter(function (moment) { return _this.categoryId === moment.category.id; });
        }, function (error) {
            if (404 === error.status) {
                console.log(error.message);
            }
            else {
                console.log(error.message);
            }
        });
    };
    CategoryViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-view',
            template: __webpack_require__(/*! ./category-view.component.html */ "./src/app/category-view/category-view.component.html"),
            styles: [__webpack_require__(/*! ./category-view.component.css */ "./src/app/category-view/category-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_nasa_service__WEBPACK_IMPORTED_MODULE_2__["NasaService"]])
    ], CategoryViewComponent);
    return CategoryViewComponent;
}());



/***/ }),

/***/ "./src/app/category.ts":
/*!*****************************!*\
  !*** ./src/app/category.ts ***!
  \*****************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
        this.name = '';
        this.description = '';
        this.creationDate = new Date();
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-category-form{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n  .keep-category-wrapper{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n  } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBeUI7WUFBekIseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZWVwLWNhdGVnb3J5LWZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmtlZXAtY2F0ZWdvcnktd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH0gIl19 */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Label to display any error messages -->\r\n<label class=\"error-message\">{{ errMessage }}</label>\r\n\r\n<div class=\"keep-category-form\">\r\n<mat-form-field> \r\n  <input [(ngModel)]=\"category.description\" name=\"editDescription\" matInput placeholder=\"Description\" type=\"text\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <input [(ngModel)]=\"category.name\" name=\"editName\" matInput placeholder=\"Name\" type=\"text\">\r\n</mat-form-field>\r\n</div>\r\n<div class=\"keep-category-wrapper\">\r\n  <button mat-button (click)=\"onSave()\">Save</button>\r\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(dialogRef, data, categoryService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.categoryService = categoryService;
        if (this.data.categoryId != 0) {
            this.category = this.categoryService.getCategoryById(this.data.categoryId);
        }
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.onSave = function () {
        var _this = this;
        this.category.createdBy = "FrontEnd";
        this.category.creationDate = new Date();
        if (this.data.categoryId == 0) {
            this.categoryService.addCategory(this.category).subscribe(function (editCategory) {
                _this.dialogRef.close();
            }, function (error) {
                if (404 === error.status) {
                    _this.errMessage = error.message;
                }
                else {
                    _this.errMessage = error.message;
                }
            });
        }
        else {
            this.categoryService.editCategory(this.category).subscribe(function (editCategory) {
                _this.dialogRef.close();
            }, function (error) {
                if (404 === error.status) {
                    _this.errMessage = error.message;
                }
                else {
                    _this.errMessage = error.message;
                }
            });
        }
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Get configuration from JSON file</h3>\r\n<div>\r\n  <button (click)=\"clear(); showConfig()\">get</button>\r\n  <button (click)=\"clear(); showConfigResponse()\">getResponse</button>\r\n  <button (click)=\"clear()\">clear</button>\r\n  <button (click)=\"clear(); makeError()\">error</button>\r\n  <span *ngIf=\"config\">\r\n    <p>Heroes API URL is \"{{config.heroesUrl}}\"</p>\r\n    <p>Textfile URL is \"{{config.textfile}}\"</p>\r\n    <div *ngIf=\"headers\">\r\n      Response headers:\r\n      <ul>\r\n        <li *ngFor=\"let header of headers\">{{header}}</li>\r\n      </ul>\r\n    </div>\r\n  </span>\r\n</div>\r\n<p *ngIf=\"error\" class=\"error\">{{error | json}}</p>\r\n\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/config/config.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(configService) {
        this.configService = configService;
    }
    ConfigComponent.prototype.clear = function () {
        this.config = undefined;
        this.error = undefined;
        this.headers = undefined;
    };
    ConfigComponent.prototype.showConfig = function () {
        var _this = this;
        this.configService.getConfig()
            .subscribe(function (data) { return _this.config = __assign({}, data); }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
    };
    ConfigComponent.prototype.showConfig_v1 = function () {
        var _this = this;
        this.configService.getConfig_1()
            .subscribe(function (data) { return _this.config = {
            heroesUrl: data['heroesUrl'],
            textfile: data['textfile']
        }; });
    };
    ConfigComponent.prototype.showConfig_v2 = function () {
        var _this = this;
        this.configService.getConfig()
            // clone the data object, using its known Config shape
            .subscribe(function (data) { return _this.config = __assign({}, data); });
    };
    ConfigComponent.prototype.showConfigResponse = function () {
        var _this = this;
        this.configService.getConfigResponse()
            // resp is of type `HttpResponse<Config>`
            .subscribe(function (resp) {
            // display its headers
            var keys = resp.headers.keys();
            _this.headers = keys.map(function (key) {
                return key + ": " + resp.headers.get(key);
            });
            // access the body directly, which is typed as `Config`.
            _this.config = __assign({}, resp.body);
        });
    };
    ConfigComponent.prototype.makeError = function () {
        var _this = this;
        this.configService.makeIntentionalError().subscribe(null, function (error) { return _this.error = error; });
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]],
            styles: ['.error {color: red;}']
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/config/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.configUrl = 'assets/config.json';
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get(this.configUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError) // then handle the error
        );
    };
    ConfigService.prototype.getConfig_1 = function () {
        return this.http.get(this.configUrl);
    };
    ConfigService.prototype.getConfig_2 = function () {
        // now returns an Observable of Config
        return this.http.get(this.configUrl);
    };
    ConfigService.prototype.getConfig_3 = function () {
        return this.http.get(this.configUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ConfigService.prototype.getConfigResponse = function () {
        return this.http.get(this.configUrl, { observe: 'response' });
    };
    ConfigService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ConfigService.prototype.makeIntentionalError = function () {
        return this.http.get('not/a/real/url')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/create-category-opener/create-category-opener.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/create-category-opener/create-category-opener.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1jYXRlZ29yeS1vcGVuZXIvY3JlYXRlLWNhdGVnb3J5LW9wZW5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-category-opener/create-category-opener.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/create-category-opener/create-category-opener.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  create-category-opener works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/create-category-opener/create-category-opener.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/create-category-opener/create-category-opener.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateCategoryOpenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryOpenerComponent", function() { return CreateCategoryOpenerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCategoryOpenerComponent = /** @class */ (function () {
    function CreateCategoryOpenerComponent(dialog, activateRoute, routerService) {
        var _this = this;
        this.dialog = dialog;
        this.activateRoute = activateRoute;
        this.routerService = routerService;
        var categoryId = +this.activateRoute.snapshot.paramMap.get('categoryId');
        this.dialog
            .open(_category_category_component__WEBPACK_IMPORTED_MODULE_1__["CategoryComponent"], {
            data: {
                categoryId: categoryId
            }
        }).afterClosed()
            .subscribe(function (result) {
            _this.routerService.routeBack();
        });
    }
    CreateCategoryOpenerComponent.prototype.ngOnInit = function () {
    };
    CreateCategoryOpenerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-category-opener',
            template: __webpack_require__(/*! ./create-category-opener.component.html */ "./src/app/create-category-opener/create-category-opener.component.html"),
            styles: [__webpack_require__(/*! ./create-category-opener.component.css */ "./src/app/create-category-opener/create-category-opener.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]])
    ], CreateCategoryOpenerComponent);
    return CreateCategoryOpenerComponent;
}());



/***/ }),

/***/ "./src/app/create-register-opener/create-register-opener.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/create-register-opener/create-register-opener.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1yZWdpc3Rlci1vcGVuZXIvY3JlYXRlLXJlZ2lzdGVyLW9wZW5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-register-opener/create-register-opener.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/create-register-opener/create-register-opener.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  create-register-opener works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/create-register-opener/create-register-opener.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/create-register-opener/create-register-opener.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateRegisterOpenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRegisterOpenerComponent", function() { return CreateRegisterOpenerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateRegisterOpenerComponent = /** @class */ (function () {
    function CreateRegisterOpenerComponent(dialog, activateRoute, routerService) {
        var _this = this;
        this.dialog = dialog;
        this.activateRoute = activateRoute;
        this.routerService = routerService;
        var userId = this.activateRoute.snapshot.paramMap.get('userId');
        this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"], {
            data: {
                userId: userId
            }
        }).afterClosed().subscribe(function (result) {
            _this.routerService.routeBack();
        });
    }
    CreateRegisterOpenerComponent.prototype.ngOnInit = function () {
    };
    CreateRegisterOpenerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-register-opener',
            template: __webpack_require__(/*! ./create-register-opener.component.html */ "./src/app/create-register-opener/create-register-opener.component.html"),
            styles: [__webpack_require__(/*! ./create-register-opener.component.css */ "./src/app/create-register-opener/create-register-opener.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]])
    ], CreateRegisterOpenerComponent);
    return CreateRegisterOpenerComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n  }\r\n  \r\n  mat-sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n  \r\n  a:hover,\r\n  a:active {\r\n    color: lightgray;\r\n  }\r\n  \r\n  .navigation-items {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .icon {\r\n    display: inline-block;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n    padding-right: 5px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    width: 15%;\r\n  }\r\n  \r\n  .label {\r\n    display: inline-block;\r\n    line-height: 30px;\r\n    margin: 0;\r\n    width: 85%;\r\n  }\r\n  \r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUNBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDViIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVyLFxyXG4gIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZpZ2F0aW9uLWl0ZW1zIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar -->\r\n<div class=\"example-container\">\r\n\t<mat-toolbar color=\"primary\">\r\n\t\t<div *ngIf=\"status\">\r\n\t\t\t<button mat-icon-button (click)=\"sidenav.toggle()\">\r\n\t\t\t\t<mat-icon>menu</mat-icon>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<a routerLink=\"/\">\r\n\t\t\t\tMoments\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\r\n\t\t\t<ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a *ngIf=\"!status\" (click)=\"OpenRegisterView()\">\r\n\t\t\t\t\t\t<mat-icon class=\"icon\">input</mat-icon>\r\n\t\t\t\t\t\t<span class=\"label\">Register</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a *ngIf=\"!status\" (click)=\"login()\">\r\n\t\t\t\t\t\t<mat-icon class=\"icon\">input</mat-icon>\r\n\t\t\t\t\t\t<span class=\"label\">Login</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a (click)=\"dashboard()\">\r\n\t\t\t\t\t\t<mat-icon class=\"icon\">dashboard</mat-icon>\r\n\t\t\t\t\t\t<span class=\"label\">Dashboard</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a *ngIf=\"status\" (click)=\"logout()\" type=\"button\">\r\n\t\t\t\t\t\t<mat-icon class=\"icon\">input</mat-icon>\r\n\t\t\t\t\t\t<span class=\"label\">LogOut</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</mat-toolbar>\r\n\t<mat-sidenav-container>\r\n\t\t<mat-sidenav-content>\r\n\r\n\t\t\t<main>\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t<router-outlet name=\"categoryEditOutlet\"></router-outlet>\r\n\r\n\t\t\t</main>\r\n\t\t</mat-sidenav-content>\r\n\t\t<mat-sidenav #sidenav [mode]=\"side\" fixedTopGap=\"56\">\r\n\t\t\t<mat-nav-list>\r\n\t\t\t\t<a mat-list-item routerLink=\"moments\">NASA Image Library</a>\r\n\t\t\t\t<a mat-list-item routerLink=\"categorydetails\">Categories</a>\r\n\t\t\t\t<app-menu-list-category *ngFor=\"let category of navCategory\" [category]=\"category\">\r\n\t\t\t\t</app-menu-list-category>\r\n\t\t\t\t<!-- <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a> -->\r\n\t\t\t</mat-nav-list>\r\n\t\t</mat-sidenav>\r\n\t</mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(routerService, _authService, categoryService) {
        this.routerService = routerService;
        this._authService = _authService;
        this.categoryService = categoryService;
        this.categoryService.fetchCategoriesFromServer();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._authService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
        this.categoryService.getCategories().subscribe(function (data) { return _this.navCategory = data; }, function (error) {
            if (404 === error.status) {
                console.log(error.message);
            }
            else {
                console.log(error.message);
            }
        });
    };
    HeaderComponent.prototype.login = function () {
        this.routerService.routeToLogin();
    };
    HeaderComponent.prototype.dashboard = function () {
        this.routerService.routeToDashboard();
    };
    HeaderComponent.prototype.OpenRegisterView = function () {
        this.routerService.routeToRegisterView('test');
    };
    HeaderComponent.prototype.logout = function () {
        this._authService.logout();
        this.login();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/http-error-handler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/http-error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/auth-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/auth-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem("JWT_TOKEN");
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/caching-interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/http-interceptors/caching-interceptor.ts ***!
  \**********************************************************/
/*! exports provided: CachingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingInterceptor", function() { return CachingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _request_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request-cache.service */ "./src/app/request-cache.service.ts");
/* harmony import */ var _services_moment_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/moment-search.service */ "./src/app/services/moment-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * If request is cachable (e.g., package search) and
 * response is in cache return the cached response as observable.
 * If has 'x-refresh' header that is true,
 * then also re-run the package search, using response from next(),
 * returning an observable that emits the cached response first.
 *
 * If not in cache or not cachable,
 * pass request through to next()
 */
var CachingInterceptor = /** @class */ (function () {
    function CachingInterceptor(cache) {
        this.cache = cache;
    }
    CachingInterceptor.prototype.intercept = function (req, next) {
        // continue if not cachable.
        if (!isCachable(req)) {
            return next.handle(req);
        }
        var cachedResponse = this.cache.get(req);
        // cache-then-refresh
        if (req.headers.get('x-refresh')) {
            var results$ = sendRequest(req, next, this.cache);
            return cachedResponse ?
                results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(cachedResponse)) :
                results$;
        }
        // cache-or-fetch
        return cachedResponse ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(cachedResponse) : sendRequest(req, next, this.cache);
    };
    CachingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_request_cache_service__WEBPACK_IMPORTED_MODULE_4__["RequestCache"]])
    ], CachingInterceptor);
    return CachingInterceptor;
}());

/** Is this request cachable? */
function isCachable(req) {
    // Only GET requests are cachable
    return req.method === 'GET' &&
        // Only npm package search is cachable in this app
        -1 < req.url.indexOf(_services_moment_search_service__WEBPACK_IMPORTED_MODULE_5__["searchUrl"]);
}
/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(req, next, cache) {
    // No headers allowed in npm search request
    var noHeaderReq = req.clone({ headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]() });
    return next.handle(noHeaderReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
        // There may be other events besides the response.
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
            cache.put(req, event); // Update the cache.
        }
    }));
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/ensure-https-interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/http-interceptors/ensure-https-interceptor.ts ***!
  \***************************************************************/
/*! exports provided: EnsureHttpsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureHttpsInterceptor", function() { return EnsureHttpsInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnsureHttpsInterceptor = /** @class */ (function () {
    function EnsureHttpsInterceptor() {
    }
    EnsureHttpsInterceptor.prototype.intercept = function (req, next) {
        // clone request and replace 'http://' with 'https://' at the same time
        var secureReq = req.clone({
            url: req.url.replace('http://', 'http://') //TODO: Change to https
        });
        // send the cloned, "secure" request to the next handler.
        return next.handle(secureReq);
    };
    EnsureHttpsInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EnsureHttpsInterceptor);
    return EnsureHttpsInterceptor;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/http-interceptors/index.ts ***!
  \********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/http-interceptors/auth-interceptor.ts");
/* harmony import */ var _caching_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching-interceptor */ "./src/app/http-interceptors/caching-interceptor.ts");
/* harmony import */ var _ensure_https_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensure-https-interceptor */ "./src/app/http-interceptors/ensure-https-interceptor.ts");
/* harmony import */ var _logging_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logging-interceptor */ "./src/app/http-interceptors/logging-interceptor.ts");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noop-interceptor */ "./src/app/http-interceptors/noop-interceptor.ts");
/* harmony import */ var _trim_name_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trim-name-interceptor */ "./src/app/http-interceptors/trim-name-interceptor.ts");
/* harmony import */ var _upload_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload-interceptor */ "./src/app/http-interceptors/upload-interceptor.ts");
/* "Barrel" of Http Interceptors */








/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_5__["NoopInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _ensure_https_interceptor__WEBPACK_IMPORTED_MODULE_3__["EnsureHttpsInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _trim_name_interceptor__WEBPACK_IMPORTED_MODULE_6__["TrimNameInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _logging_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoggingInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _upload_interceptor__WEBPACK_IMPORTED_MODULE_7__["UploadInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _caching_interceptor__WEBPACK_IMPORTED_MODULE_2__["CachingInterceptor"], multi: true },
];
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/logging-interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/http-interceptors/logging-interceptor.ts ***!
  \**********************************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor(messenger) {
        this.messenger = messenger;
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var started = Date.now();
        var ok;
        // extend server response observable with logging
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
        // Succeeds when there is a response; ignore other events
        function (event) { return ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] ? 'succeeded' : ''; }, 
        // Operation failed; error is an HttpErrorResponse
        function (error) { return ok = 'failed'; }), 
        // Log when response observable either completes or errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            var elapsed = Date.now() - started;
            var msg = req.method + " \"" + req.urlWithParams + "\"\n             " + ok + " in " + elapsed + " ms.";
            _this.messenger.add(msg);
        }));
    };
    LoggingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/noop-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/noop-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Pass untouched request through to the next request handler. */
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/trim-name-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/http-interceptors/trim-name-interceptor.ts ***!
  \************************************************************/
/*! exports provided: TrimNameInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimNameInterceptor", function() { return TrimNameInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimNameInterceptor = /** @class */ (function () {
    function TrimNameInterceptor() {
    }
    TrimNameInterceptor.prototype.intercept = function (req, next) {
        var body = req.body;
        if (!body || !body.name) {
            return next.handle(req);
        }
        // copy the body and trim whitespace from the name property
        var newBody = __assign({}, body, { name: body.name.trim() });
        // clone request and set its body
        var newReq = req.clone({ body: newBody });
        // send the cloned request to the next handler.
        return next.handle(newReq);
    };
    TrimNameInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TrimNameInterceptor);
    return TrimNameInterceptor;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/http-interceptors/upload-interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/http-interceptors/upload-interceptor.ts ***!
  \*********************************************************/
/*! exports provided: UploadInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadInterceptor", function() { return UploadInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/** Simulate server replying to file upload request */
var UploadInterceptor = /** @class */ (function () {
    function UploadInterceptor() {
    }
    UploadInterceptor.prototype.intercept = function (req, next) {
        if (req.url.indexOf('/upload/file') === -1) {
            return next.handle(req);
        }
        var delay = 300; // TODO: inject delay?
        return createUploadEvents(delay);
    };
    UploadInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UploadInterceptor);
    return UploadInterceptor;
}());

/** Create simulation of upload event stream */
function createUploadEvents(delay) {
    // Simulate XHR behavior which would provide this information in a ProgressEvent
    var chunks = 5;
    var total = 12345678;
    var chunkSize = Math.ceil(total / chunks);
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
        // notify the event stream that the request was sent.
        observer.next({ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent });
        uploadLoop(0);
        function uploadLoop(loaded) {
            // N.B.: Cannot use setInterval or rxjs delay (which uses setInterval)
            // because e2e test won't complete. A zone thing?
            // Use setTimeout and tail recursion instead.
            setTimeout(function () {
                loaded += chunkSize;
                if (loaded >= total) {
                    var doneResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                        status: 201,
                    });
                    observer.next(doneResponse);
                    observer.complete();
                    return;
                }
                var progressEvent = {
                    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress,
                    loaded: loaded,
                    total: total
                };
                observer.next(progressEvent);
                uploadLoop(loaded);
            }, delay);
        }
    });
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-c-form-wrapper{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    padding: 1em;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;height: 70vh;\r\n    }\r\n    .divcls{\r\n    margin: 0.5em;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUIsQ0FBQyxZQUFZO0lBQ2hDO0lBQ0E7SUFDQSxhQUFhO0lBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWMtZm9ybS13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7aGVpZ2h0OiA3MHZoO1xyXG4gICAgfVxyXG4gICAgLmRpdmNsc3tcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"frmLogin\" (submit)=\"loginSubmit()\" class=\"login-c-form-wrapper\">\r\n    <div class=\"divcls\">\r\n    <label for=\"username\">UserName</label>\r\n    <input class=\"userid\" matInput [formControl]='userid'> \r\n    </div>\r\n    <div class=\"divcls\">\r\n    <label for=\"password\">Password</label>\r\n    <input class=\"password\" matInput type = 'password' [formControl]='password'> \r\n  \r\n    </div>\r\n    <div class=\"divcls\">\r\n    <button type=\"submit\" [disabled]=\"!frmLogin.valid\">Submit</button>\r\n    <strong *ngIf=\"submitMessage\" class=\"error-message\">{{submitMessage}}</strong>\r\n    </div>\r\n</form>\r\n<router-outlet name=\"userEditOutlet\"></router-outlet>\r\n\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, routerService) {
        this._authService = _authService;
        this.routerService = routerService;
        this.userid = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        //user = new User(this.username.value,this.password.value);
        this.frmLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userid: this.userid,
            password: this.password
        });
    }
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this._authService.authenticateUser(this.frmLogin.value)
            .then(function (res) {
            if (res) {
                //this._authService.setBearerToken(JSON.parse(res).token);
                //this._authService.setUserId(this.frmLogin.value.userid)
                _this.routerService.routeToDashboard();
            }
            else {
                _this.submitMessage = "No token found";
            }
        })
            .catch(this.handleError());
        ;
    };
    LoginComponent.prototype.handleError = function () {
        var _this = this;
        return function (error) {
            if ((error.status === 404 || error.status === 403)) {
                console.error(error);
                _this.log("Failed: Server Error");
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        };
    };
    LoginComponent.prototype.log = function (message) {
        console.log("NotesService: " + message);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu-list-category/menu-list-category.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/menu-list-category/menu-list-category.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbGlzdC1jYXRlZ29yeS9tZW51LWxpc3QtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/menu-list-category/menu-list-category.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/menu-list-category/menu-list-category.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a mat-list-item >\r\n  <li  (click)=\"routeToCategoryListView(category.id)\">{{category.name}}</li>\r\n  </a>\r\n"

/***/ }),

/***/ "./src/app/menu-list-category/menu-list-category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/menu-list-category/menu-list-category.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuListCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListCategoryComponent", function() { return MenuListCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category */ "./src/app/category.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuListCategoryComponent = /** @class */ (function () {
    function MenuListCategoryComponent(routerService) {
        this.routerService = routerService;
    }
    MenuListCategoryComponent.prototype.ngOnInit = function () {
    };
    MenuListCategoryComponent.prototype.routeToCategoryListView = function (categoryId) {
        this.routerService.routeToCategoryListView(categoryId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _category__WEBPACK_IMPORTED_MODULE_1__["Category"])
    ], MenuListCategoryComponent.prototype, "category", void 0);
    MenuListCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-list-category',
            template: __webpack_require__(/*! ./menu-list-category.component.html */ "./src/app/menu-list-category/menu-list-category.component.html"),
            styles: [__webpack_require__(/*! ./menu-list-category.component.css */ "./src/app/menu-list-category/menu-list-category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]])
    ], MenuListCategoryComponent);
    return MenuListCategoryComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n  <h3>Messages</h3>\r\n  <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\r\n  <br>\r\n  <ol>\r\n    <li *ngFor='let message of messageService.messages'> {{message}} </li>\r\n  </ol>\r\n</div>\r\n\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html")
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/moment-search/moment-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/moment-search/moment-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n#leftbox { \r\n  float:left;  \r\n  background:Red; \r\n  width:25%; \r\n  height:280px; \r\n}\r\n\r\n#rightbox{ \r\n  float:right; \r\n  background:blue; \r\n  width:25%; \r\n  height:280px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9tZW50LXNlYXJjaC9tb21lbnQtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3RkFBd0Y7RUFDeEYsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9tZW50LXNlYXJjaC9tb21lbnQtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMtYXNzZXRzLm5hc2EuZ292L2ltYWdlL1BJQTAxNDkyL1BJQTAxNDkyfm9yaWcuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jbGVmdGJveCB7IFxyXG4gIGZsb2F0OmxlZnQ7ICBcclxuICBiYWNrZ3JvdW5kOlJlZDsgXHJcbiAgd2lkdGg6MjUlOyBcclxuICBoZWlnaHQ6MjgwcHg7IFxyXG59IFxyXG4jcmlnaHRib3h7IFxyXG4gIGZsb2F0OnJpZ2h0OyBcclxuICBiYWNrZ3JvdW5kOmJsdWU7IFxyXG4gIHdpZHRoOjI1JTsgXHJcbiAgaGVpZ2h0OjI4MHB4OyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/moment-search/moment-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/moment-search/moment-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Search Moments from NASA</h3>\r\n<p><i>Searches when typing stops. Caches for 30 seconds.</i></p>\r\n<input (keyup)=\"search($event.target.value)\" id=\"name\" placeholder=\"Search\" />\r\n<input type=\"checkbox\" id=\"refresh\" [checked]=\"withRefresh\" (click)=\"toggleRefresh()\">\r\n<label for=\"refresh\">with refresh</label>\r\n\r\n<div *ngFor=\"let moment of moments$ | async\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>{{moment.nasaid}}</mat-card-title>\r\n      <mat-card-subtitle>{{moment.title}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src={{moment.href}} alt=\"{{moment.nasaId}}\">\r\n    <mat-card-content>\r\n      <p>\r\n        {{moment.description}}\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <mat-select name=\"editCategory\" placeholder=\"Select category\" [(ngModel)]=\"moment.category\">\r\n        <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\r\n          {{ category.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <button mat-button (click)=\"add(moment)\">ADD</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/moment-search/moment-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/moment-search/moment-search.component.ts ***!
  \**********************************************************/
/*! exports provided: MomentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentSearchComponent", function() { return MomentSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_moment_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/moment-search.service */ "./src/app/services/moment-search.service.ts");
/* harmony import */ var _services_nasa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/nasa.service */ "./src/app/services/nasa.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MomentSearchComponent = /** @class */ (function () {
    function MomentSearchComponent(searchService, momentsService, categoryService) {
        this.searchService = searchService;
        this.momentsService = momentsService;
        this.categoryService = categoryService;
        this.withRefresh = false;
        this.searchText$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.categories = [];
    }
    MomentSearchComponent.prototype.search = function (momentName) {
        this.searchText$.next(momentName);
    };
    MomentSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moments$ = this.searchText$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (momentName) {
            return _this.searchService.search(momentName, _this.withRefresh);
        }));
        this.categoryService.getCategories().subscribe(function (data) { return _this.categories = data; }, function (error) {
            if (404 === error.status) {
                console.log(error.message);
            }
            else {
                console.log(error.message);
            }
        });
    };
    MomentSearchComponent.prototype.toggleRefresh = function () { this.withRefresh = !this.withRefresh; };
    MomentSearchComponent.prototype.add = function (nasaMoment) {
        nasaMoment.nasaId = nasaMoment.nasaId.trim();
        if (!nasaMoment.nasaId) {
            return;
        }
        //nasaMoment.id = 0;// The server will generate the id for this new moment
        nasaMoment.creationDate = new Date();
        nasaMoment.createdBy = "Front End";
        this.momentsService.addMoment(nasaMoment);
    };
    MomentSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moment-search',
            template: __webpack_require__(/*! ./moment-search.component.html */ "./src/app/moment-search/moment-search.component.html"),
            providers: [_services_moment_search_service__WEBPACK_IMPORTED_MODULE_3__["MomentSearchService"]],
            styles: [__webpack_require__(/*! .//moment-search.component.css */ "./src/app/moment-search/moment-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_moment_search_service__WEBPACK_IMPORTED_MODULE_3__["MomentSearchService"],
            _services_nasa_service__WEBPACK_IMPORTED_MODULE_4__["NasaService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]])
    ], MomentSearchComponent);
    return MomentSearchComponent;
}());



/***/ }),

/***/ "./src/app/moment.ts":
/*!***************************!*\
  !*** ./src/app/moment.ts ***!
  \***************************/
/*! exports provided: Moment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moment", function() { return Moment; });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/app/category.ts");

var Moment = /** @class */ (function () {
    function Moment() {
        this.title = '';
        this.description = '';
        this.href = '';
        this.category = new _category__WEBPACK_IMPORTED_MODULE_0__["Category"]();
    }
    return Moment;
}());



/***/ }),

/***/ "./src/app/nasa/nasa.component.css":
/*!*****************************************!*\
  !*** ./src/app/nasa/nasa.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFzYS9uYXNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbmFzYS9uYXNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nasa/nasa.component.html":
/*!******************************************!*\
  !*** ./src/app/nasa/nasa.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Moments</h3>\n<div *ngFor=\"let moment of moments\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{moment.nasaid}}</mat-card-title>\n      <mat-card-subtitle>{{moment.title}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src={{moment.href}} alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        {{moment.description}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button (click)=\"add(moment.nasaid)\">ADD</button>\n      <button mat-button (click)=\"edit(moment.nasaid)\">EDIT</button>\n      <button mat-button (click)=\"delete(moment.nasaid)\">DELETE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/nasa/nasa.component.ts":
/*!****************************************!*\
  !*** ./src/app/nasa/nasa.component.ts ***!
  \****************************************/
/*! exports provided: NasaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasaComponent", function() { return NasaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moment */ "./src/app/moment.ts");
/* harmony import */ var _services_nasa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nasa.service */ "./src/app/services/nasa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NasaComponent = /** @class */ (function () {
    function NasaComponent(momentsService) {
        this.momentsService = momentsService;
    }
    NasaComponent.prototype.ngOnInit = function () {
        this.getMoments();
    };
    NasaComponent.prototype.getMoments = function () {
        var _this = this;
        this.momentsService.getMoments()
            .subscribe(function (moments) { return (_this.moments = moments); });
    };
    NasaComponent.prototype.add = function (nasaId) {
        var _this = this;
        this.editMoment = undefined;
        nasaId = nasaId.trim();
        if (!nasaId) {
            return;
        }
        // The server will generate the id for this new moment
        var newMoment = { nasaId: nasaId };
        this.momentsService
            .addMoment(newMoment)
            .subscribe(function (moment) { return _this.moments.push(moment); });
    };
    NasaComponent.prototype.edit = function (moment) {
        this.editMoment = moment;
    };
    NasaComponent.prototype.update = function () {
        var _this = this;
        if (this.editMoment) {
            this.momentsService
                .editMoment(this.editMoment)
                .subscribe(function (moment) {
                // replace the moment in the moments list with update from server
                var ix = moment ? _this.moments.findIndex(function (h) { return h.id === moment.id; }) : -1;
                if (ix > -1) {
                    _this.moments[ix] = moment;
                }
            });
            this.editMoment = undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _moment__WEBPACK_IMPORTED_MODULE_1__["Moment"])
    ], NasaComponent.prototype, "moment", void 0);
    NasaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nasa',
            template: __webpack_require__(/*! ./nasa.component.html */ "./src/app/nasa/nasa.component.html"),
            providers: [_services_nasa_service__WEBPACK_IMPORTED_MODULE_2__["NasaService"]],
            styles: [__webpack_require__(/*! ./nasa.component.css */ "./src/app/nasa/nasa.component.css")]
        }),
        __metadata("design:paramtypes", [_services_nasa_service__WEBPACK_IMPORTED_MODULE_2__["NasaService"]])
    ], NasaComponent);
    return NasaComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-user-register-form{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n  .keep-user-register-wrapper{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n  } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBeUI7WUFBekIseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZWVwLXVzZXItcmVnaXN0ZXItZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAua2VlcC11c2VyLXJlZ2lzdGVyLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9ICJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Label to display any error messages -->\r\n<label class=\"error-message\">{{ errMessage }}</label>\r\n\r\n<div class=\"keep-user-register-form\">\r\n<mat-form-field> \r\n  <input [(ngModel)]=\"userprofile.userid\" name=\"editUserId\" matInput placeholder=\"User Id\" type=\"text\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <input [(ngModel)]=\"userprofile.password\" name=\"editPassword\" matInput placeholder=\"Password\"  type=\"text\">\r\n</mat-form-field>\r\n<mat-form-field> \r\n  <input [(ngModel)]=\"userprofile.firstname\" name=\"editFirstName\" matInput placeholder=\"First Name\" type=\"text\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <input [(ngModel)]=\"userprofile.lastname\" name=\"editLastName\" matInput placeholder=\"Last name\"  type=\"text\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <input [(ngModel)]=\"userprofile.role\" name=\"editRole\" matInput placeholder=\"Role\"  type=\"text\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <input [(ngModel)]=\"userprofile.contact\" name=\"editContact\" matInput placeholder=\"Contact\"  type=\"text\">\r\n</mat-form-field>\r\n</div>\r\n<div class=\"keep-user-register-wrapper\">\r\n  <button mat-button (click)=\"onSave()\">Save</button>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_userprofile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userprofile.service */ "./src/app/services/userprofile.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, _authService, routerService) {
        this.userService = userService;
        this._authService = _authService;
        this.routerService = routerService;
        this.userprofile = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '');
        //this.userid=this.data.userid;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //this.userid=this.data.userid;
    };
    RegisterComponent.prototype.onSave = function () {
        var _this = this;
        this.userprofile.fullName();
        this._authService.registerUser(this.userprofile)
            .then(function (res) {
            if (res) {
                _this.performLogin();
            }
        })
            .catch(this.handleError());
        ;
    };
    RegisterComponent.prototype.performLogin = function () {
        var _this = this;
        this._authService.authenticateUser(this.userprofile)
            .then(function (res) {
            if (res) {
                _this.AddUserDetails();
            }
            else {
                _this.errMessage = "No token found";
            }
        })
            .catch(this.handleError());
        ;
    };
    RegisterComponent.prototype.AddUserDetails = function () {
        var _this = this;
        this.userService.addUser(this.userprofile).subscribe(function (editUser) {
            //this.dialogRef.close();
        }, function (error) {
            if (404 === error.status) {
                _this.errMessage = error.message;
            }
            else {
                _this.errMessage = error.message;
            }
        });
    };
    RegisterComponent.prototype.handleError = function () {
        var _this = this;
        return function (error) {
            if ((error.status === 404 || error.status === 403)) {
                console.error(error);
                _this.log("Failed: Server Error");
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
        };
    };
    RegisterComponent.prototype.log = function (message) {
        console.log("NotesService: " + message);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_userprofile_service__WEBPACK_IMPORTED_MODULE_3__["UserprofileService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/request-cache.service.ts":
/*!******************************************!*\
  !*** ./src/app/request-cache.service.ts ***!
  \******************************************/
/*! exports provided: RequestCache, RequestCacheWithMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCache", function() { return RequestCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCacheWithMap", function() { return RequestCacheWithMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestCache = /** @class */ (function () {
    function RequestCache() {
    }
    return RequestCache;
}());

var maxAge = 30000; // maximum cache age (ms)
var RequestCacheWithMap = /** @class */ (function () {
    function RequestCacheWithMap(messenger) {
        this.messenger = messenger;
        this.cache = new Map();
    }
    RequestCacheWithMap.prototype.get = function (req) {
        var url = req.urlWithParams;
        var cached = this.cache.get(url);
        if (!cached) {
            return undefined;
        }
        var isExpired = cached.lastRead < (Date.now() - maxAge);
        var expired = isExpired ? 'expired ' : '';
        this.messenger.add("Found " + expired + "cached response for \"" + url + "\".");
        return isExpired ? undefined : cached.response;
    };
    RequestCacheWithMap.prototype.put = function (req, response) {
        var _this = this;
        var url = req.urlWithParams;
        this.messenger.add("Caching response from \"" + url + "\".");
        var entry = { url: url, response: response, lastRead: Date.now() };
        this.cache.set(url, entry);
        // remove expired cache entries
        var expired = Date.now() - maxAge;
        this.cache.forEach(function (entry) {
            if (entry.lastRead < expired) {
                _this.cache.delete(entry.url);
            }
        });
        this.messenger.add("Request cache size: " + this.cache.size + ".");
    };
    RequestCacheWithMap = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], RequestCacheWithMap);
    return RequestCacheWithMap;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: TOKEN_NAME, USER_ID, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ID", function() { return USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TOKEN_NAME = 'JWT_TOKEN';
var USER_ID = 'USER_ID';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        this.serviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authservice; //'http://localhost:8081/auth/';
        // Observable navItem source
        this._authNavStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // Observable navItem stream
        this.authNavStatus$ = this._authNavStatusSource.asObservable();
        // private _userLoggedinSource = new BehaviorSubject<string>("");
        // _userLoggedinStatus$ = this._userLoggedinSource.asObservable();
        this.loggedIn = false;
        this.loggedIn = !!this.getBearerToken();
        this._authNavStatusSource.next(this.loggedIn);
    }
    AuthenticationService.prototype.setBearerToken = function (token) {
        localStorage.setItem(TOKEN_NAME, token);
    };
    AuthenticationService.prototype.getBearerToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    AuthenticationService.prototype.setUserId = function (userId) {
        localStorage.setItem(USER_ID, userId);
    };
    AuthenticationService.prototype.getUserId = function () {
        return localStorage.getItem(USER_ID);
    };
    AuthenticationService.prototype.deleteToken = function () {
        localStorage.removeItem(TOKEN_NAME);
    };
    AuthenticationService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthenticationService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getBearerToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined || date === null)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthenticationService.prototype.authenticateUser = function (data) {
        var _this = this;
        var url = this.serviceUrl + 'login';
        var json = JSON.stringify(data);
        return this.http.post(url, json, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            _this.setBearerToken(JSON.parse(res.toString()).token);
            _this.setUserId(data.userid);
            //this._userLoggedinSource.next(data.userid);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError());
    };
    AuthenticationService.prototype.registerUser = function (data) {
        var url = this.serviceUrl + 'register';
        var json = JSON.stringify(data);
        return this.http.post(url, json, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError());
    };
    AuthenticationService.prototype.logout = function () {
        this.deleteToken();
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthenticationService.prototype.handleError = function () {
        var _this = this;
        return function (error) {
            if ((error.status === 404 || error.status === 403)) {
                console.error(error);
                _this.log("Failed: Server Error");
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        };
    };
    AuthenticationService.prototype.log = function (message) {
        console.log("NotesService: " + message);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryService = /** @class */ (function () {
    function CategoryService(http, auth_Service) {
        this.http = http;
        this.auth_Service = auth_Service;
        this.serviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cateservice;
        this.categories = [];
        this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.categories);
        this.fetchCategoriesFromServer();
    }
    CategoryService.prototype.ngOnInit = function () {
        //this.subscription = this.auth_Service._userLoggedinStatus$.subscribe(user => this.user = user);
        this.fetchCategoriesFromServer();
    };
    CategoryService.prototype.fetchCategoriesFromServer = function () {
        var _this = this;
        if (this.auth_Service.getUserId() != null) {
            var url = this.serviceUrl + 'user/' + this.auth_Service.getUserId();
            return this.http.get(url)
                .subscribe(function (categories) {
                _this.categories = categories;
                _this.categoriesSubject.next(_this.categories);
            });
        }
    };
    CategoryService.prototype.getCategories = function () {
        return this.categoriesSubject;
    };
    CategoryService.prototype.getCategoryById = function (CategoryId) {
        var Category = this.categories.find(function (b_Category) { return b_Category.id === CategoryId; });
        return Object.assign({}, Category);
    };
    CategoryService.prototype.addCategory = function (Category) {
        var _this = this;
        return this.http.post(this.serviceUrl, Category)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (addedCategory) {
            console.log('Added Note', addedCategory);
            _this.categories.push(addedCategory);
            _this.categoriesSubject.next(_this.categories);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Unable to add Category")));
    };
    CategoryService.prototype.editCategory = function (category) {
        var _this = this;
        return this.http.put(this.serviceUrl + ("" + category.id), category)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (editedCategory) {
            var Category1 = _this.categories.find(function (a_category) { return a_category.id === editedCategory.id; });
            Object.assign(Category1, editedCategory);
            _this.categoriesSubject.next(_this.categories);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Unable to edit Category")));
    };
    CategoryService.prototype.deleteCategory = function (CategoryId) {
        return this.http.delete(this.serviceUrl + '/' + CategoryId)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError("Unable to delete Category"));
    };
    CategoryService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
        };
    };
    CategoryService.prototype.log = function (message) {
        console.log("Category Service: " + message);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/moment-search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/moment-search.service.ts ***!
  \***************************************************/
/*! exports provided: searchUrl, MomentSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUrl", function() { return searchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentSearchService", function() { return MomentSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var searchUrl = 'https://images-api.nasa.gov/search';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'x-refresh': 'true'
    })
};
function createHttpOptions(searchName, refresh) {
    if (refresh === void 0) { refresh = false; }
    // nasa images search api
    // e.g., https://images-api.nasa.gov/search?q=apollo'
    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: { q: searchName } });
    var headerMap = refresh ? { 'x-refresh': 'true' } : {};
    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerMap);
    return { headers: headers, params: params };
}
var MomentSearchService = /** @class */ (function () {
    function MomentSearchService(http, httpErrorHandler) {
        this.http = http;
        this.handleError = httpErrorHandler.createHandleError('MomentsService');
    }
    MomentSearchService.prototype.search = function (searchName, refresh) {
        if (refresh === void 0) { refresh = false; }
        // clear if no search name
        if (!searchName.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        var options = createHttpOptions(searchName, refresh);
        // TODO: Add error handling
        return this.http.get(searchUrl, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.collection.items.map(function (entry) { return ({
                nasaId: entry.data[0].nasa_id,
                title: entry.data[0].title,
                description: entry.data[0].description,
                href: entry.links ? entry.links[0].href : ''
            }); });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('search', [])));
    };
    MomentSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], MomentSearchService);
    return MomentSearchService;
}());



/***/ }),

/***/ "./src/app/services/nasa.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/nasa.service.ts ***!
  \******************************************/
/*! exports provided: NasaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasaService", function() { return NasaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NasaService = /** @class */ (function () {
    function NasaService(http, httpErrorHandler, auth_Service) {
        this.http = http;
        this.auth_Service = auth_Service;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.serviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].momentsservice; // URL to web api
        this.handleError = httpErrorHandler.createHandleError('momentsService');
        this.moments = [];
        this.momentsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.moments);
        this.fetchMomentsFromServer();
    }
    NasaService.prototype.ngOnInit = function () {
        this.fetchMomentsFromServer();
    };
    NasaService.prototype.fetchMomentsFromServer = function () {
        var _this = this;
        return this.http.get(this.serviceUrl + this.auth_Service.getUserId(), this.httpOptions)
            .subscribe(function (moments) {
            _this.moments = moments;
            _this.momentsSubject.next(_this.moments);
        });
    };
    NasaService.prototype.getMoments = function () {
        return this.momentsSubject;
    };
    NasaService.prototype.addMoment = function (moment) {
        var _this = this;
        return this.http.post(this.serviceUrl + this.auth_Service.getUserId(), moment, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (addedMoment) {
            console.log('Added Moment', addedMoment);
            _this.fetchMomentsFromServer();
            //this.moments.push(addedMoment);
            //this.momentsSubject.next(this.moments);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Unable to add Moments")));
    };
    NasaService.prototype.editMoment = function (moment) {
        var _this = this;
        return this.http.put(this.serviceUrl + this.auth_Service.getUserId() + ("/" + moment.id), moment, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (editedMoment) {
            _this.fetchMomentsFromServer();
            // const moment1 = this.moments.find(a_moment => a_moment.id === editedMoment.id);
            // Object.assign(moment1, editedMoment);
            // this.momentsSubject.next(this.moments);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Unable to edit Moments")));
    };
    NasaService.prototype.getMomentById = function (momentId) {
        var moment = this.moments.find(function (b_moment) { return b_moment.id === momentId; });
        return Object.assign({}, moment);
    };
    NasaService.prototype.getMomentByCateogoryId = function (categoryId) {
        var moment = this.moments.find(function (b_moment) { return b_moment.category.id === categoryId; });
        return Object.assign({}, moment);
    };
    NasaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], NasaService);
    return NasaService;
}());



/***/ }),

/***/ "./src/app/services/router.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/router.service.ts ***!
  \********************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouterService = /** @class */ (function () {
    function RouterService(router, location) {
        this.router = router;
        this.location = location;
    }
    RouterService.prototype.routeToDashboard = function () {
        this.router.navigate(['moments']);
    };
    RouterService.prototype.routeToLogin = function () {
        this.router.navigate(['login']);
    };
    RouterService.prototype.routeToEditNoteView = function (noteId) {
        this.router.navigate([
            'dashboard',
            {
                outlets: {
                    noteEditOutlet: ['note', noteId, 'edit']
                }
            }
        ]);
    };
    RouterService.prototype.routeBack = function () {
        this.location.back();
    };
    RouterService.prototype.routeToNoteView = function () {
        this.router.navigate(['dashboard']);
    };
    RouterService.prototype.routeToCategoryListView = function (categoryId) {
        this.router.navigate(["category/" + categoryId]);
    };
    RouterService.prototype.routeToRegisterView = function (userId) {
        this.router.navigate([
            'login',
            {
                outlets: {
                    userEditOutlet: ['user', userId, 'edit']
                }
            }
        ]);
    };
    RouterService.prototype.routeToCategoryView = function (categoryId) {
        this.router.navigate(['category',
            {
                outlets: {
                    categoryEditOutlet: ['category', categoryId]
                }
            }]);
    };
    RouterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], RouterService);
    return RouterService;
}());



/***/ }),

/***/ "./src/app/services/userprofile.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/userprofile.service.ts ***!
  \*************************************************/
/*! exports provided: UserprofileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileService", function() { return UserprofileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserprofileService = /** @class */ (function () {
    function UserprofileService(http, auth_Service) {
        this.http = http;
        this.auth_Service = auth_Service;
        this.serviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].userervice; //'http://localhost:8121/api/user/';
        this.users = [];
        this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.users);
    }
    UserprofileService.prototype.fetchUsersFromServer = function () {
        var _this = this;
        return this.http.get(this.serviceUrl)
            .subscribe(function (users) {
            _this.users = users;
            _this.usersSubject.next(_this.users);
        });
    };
    UserprofileService.prototype.getUser = function () {
        return this.usersSubject;
    };
    UserprofileService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(this.serviceUrl, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (addedUser) {
            console.log('Added User', addedUser);
            _this.users.push(addedUser);
            _this.usersSubject.next(_this.users);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Unable to add Users")));
    };
    UserprofileService.prototype.editNote = function (user) {
        var _this = this;
        return this.http.put(this.serviceUrl + ("/" + user.userid), user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (editedUser) {
            var user1 = _this.users.find(function (a_user) { return a_user.userid === editedUser.userid; });
            Object.assign(user1, editedUser);
            _this.usersSubject.next(_this.users);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Unable to edit Users")));
    };
    UserprofileService.prototype.getUserById = function (userId) {
        var user = this.users.find(function (b_user) { return b_user.userid === userId; });
        return Object.assign({}, user);
    };
    UserprofileService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
        };
    };
    UserprofileService.prototype.log = function (message) {
        console.log("UserService: " + message);
    };
    UserprofileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], UserprofileService);
    return UserprofileService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(user, pass) {
        this.userid = user;
        this.password = pass;
        this.name = '';
        this.firstname = '';
        this.lastname = '';
        this.role = '';
        this.contact = '';
        this.AddedDate = new Date();
    }
    User.prototype.fullName = function () {
        this.name = this.firstname + this.lastname;
    };
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    authservice: "http://localhost:8081/auth/",
    cateservice: "http://localhost:8091/api/category/",
    momentsservice: "http://localhost:8131/api/moments/",
    userervice: "http://localhost:8121/api/user/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Rajesh\myLab\moments\moments.ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map