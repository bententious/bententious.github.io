(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./can-deactivate-guard.service */ "./src/app/can-deactivate-guard.service.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");









var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'deals', component: _deals_deals_component__WEBPACK_IMPORTED_MODULE_3__["DealsComponent"], canDeactivate: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanDeactivateGuard"]], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], canDeactivate: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanDeactivateGuard"]], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            providers: [_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanDeactivateGuard"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<!-- <app-error *ngIf=\"hasError\"></app-error> -->\n<!-- <app-error></app-error> -->\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _error_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.service */ "./src/app/error/error.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, errorService, authService) {
        this.dialog = dialog;
        this.errorService = errorService;
        this.authService = authService;
        this.title = 'comm-calc';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.autoAuthUser();
        this.errorSubscription = this.errorService.errorCalled.subscribe(function (message) {
            _this.openDialog(message);
        });
    };
    AppComponent.prototype.openDialog = function (message) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            message: message
        };
        this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], dialogConfig);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _error_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _deals_create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deals/create-deal/create-deal.component */ "./src/app/deals/create-deal/create-deal.component.ts");
/* harmony import */ var _deals_deal_list_deal_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deals/deal-list/deal-list.component */ "./src/app/deals/deal-list/deal-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deals.service */ "./src/app/deals.service.ts");
/* harmony import */ var _deals_deal_list_deal_deal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deals/deal-list/deal/deal.component */ "./src/app/deals/deal-list/deal/deal.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");




















// import { ErrorInterceptor } from './error-interceptor';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _deals_create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_9__["CreateDealComponent"],
                _deals_deal_list_deal_list_component__WEBPACK_IMPORTED_MODULE_10__["DealListComponent"],
                _deals_deal_list_deal_deal_component__WEBPACK_IMPORTED_MODULE_13__["DealComponent"],
                _deals_deals_component__WEBPACK_IMPORTED_MODULE_14__["DealsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                _deals_service__WEBPACK_IMPORTED_MODULE_12__["DealsService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true }
                // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        var isGuest = this.authService.getIsGuest();
        var pass = false;
        if (isAuth || isGuest) {
            pass = true;
        }
        // if not logged in or not a guest, renavigate to login
        if (!pass) {
            this.router.navigate(['/login']);
        }
        return pass;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.isGuest = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getIsGuest = function () {
        return this.isGuest;
    };
    // getUserId() {
    //   return this.userId;
    // }
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (email, password) {
        var _this = this;
        // create auth data mode object
        var authData = { email: email, password: password };
        // make http call to api and subscribe to responsed
        this.http
            .post('http://localhost:3000/api/user/signup', authData)
            .subscribe(function () {
            // if success, navigate to home
            _this.router.navigate(['/login']);
            // if error, send false to observable so front end can display something
        }, function (error) {
            alert(error);
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http
            .post('http://localhost:3000/api/user/login', authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.userId = response.userId;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                _this.saveAuthData(token, expirationDate, _this.userId);
                _this.router.navigate(['/deals']);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
            alert(error);
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        // if auth hasn't expired, log user in.
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logInGuest = function () {
        this.isGuest = true;
        this.router.navigate(['/settings']);
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
        location.reload(true);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log('Setting timer: ' + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expiration');
        var userId = localStorage.getItem('userId');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form  [formGroup]=\"loginForm\" class=\"form-group\"(ngSubmit)=\"onLogin()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        name=\"email\"\n        id=\"email\"\n        formControlName=\"email\"\n      >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"value\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        name=\"password\"\n        id=\"password\"\n        formControlName=\"password\"\n      >\n    </div>\n    <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\">Login</button>\n  </form>\n  <hr>\n  <h4 class=\"text-muted\">or</h4>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"onGuest()\">Continue as Guest</button>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    LoginComponent.prototype.onLogin = function () {
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    };
    LoginComponent.prototype.onGuest = function () {
        this.authService.logInGuest();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());

// this.authenticationService.login(this.f.username.value, this.f.password.value)
// .pipe(first())
// .subscribe(
//     data => {
//         this.router.navigate([this.returnUrl]);
//     },
//     error => {
//         this.error = error;
//         this.loading = false;
//     });


/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form  [formGroup]=\"signupForm\" class=\"form-group\"(ngSubmit)=\"onSignup()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        name=\"email\"\n        id=\"email\"\n        formControlName=\"email\"\n      >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"value\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        name=\"password\"\n        id=\"password\"\n        formControlName=\"password\"\n      >\n    </div>\n    <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-primary\">Signup</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var SignupComponent = /** @class */ (function () {
    // private authStatusSub: Subscription;
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    SignupComponent.prototype.onSignup = function () {
        // if form is not valid, don't submit to api
        if (this.signupForm.invalid) {
            return;
        }
        // this.isLoading = true;
        this.authService.createUser(this.signupForm.value.email, this.signupForm.value.password);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/can-deactivate-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/can-deactivate-guard.service.ts ***!
  \*************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/deals.service.ts":
/*!**********************************!*\
  !*** ./src/app/deals.service.ts ***!
  \**********************************/
/*! exports provided: DealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsService", function() { return DealsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





// to do----------------------------------------------------------------------
// make last tier value default to previous tier max etc
// add scenarios
// fix header
// add re-enter password logic
// add better indicators visually for edit mode
// add error handling
// show 2 decimals on settings comm percent
// when tiers are changed, deal list is not refreshing
// add navigate away without saving message for deals: test for logged in and logged out
// commission that starts with tier base greater than 0 200-300 yields negative commission
// weird situation with logging in if no tier has been saved it doesnt show a tier option
var DealsService = /** @class */ (function () {
    // commissionTiers: Tier[] = [
    //   {min: 0, max: 2000000, rate: 7.5},
    //   {min: 2000000, max: 99999999, rate: 11.25}
    // ];
    function DealsService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.deals = [];
        this.dealsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tiersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.statsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.editIndex = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userIsAuthenticated = false;
        // stats = {
        //   quota: 2000000,
        //   cloudBonus: 5500,
        //   totalEarnings: 0,
        //   quotaAttainment: 0,
        //   totalSales: 0
        // };
        this.stats = {
            quota: 0,
            cloudBonus: 0,
            totalEarnings: 0,
            quotaAttainment: 0,
            totalSales: 0
        };
        // preseeding - remove array items for production
        // commissionTiers: Tier[];
        this.commissionTiers = [
            { min: 0, max: 9999999, rate: 10 }
        ];
        // set initial auth value
        this.userIsAuthenticated = this.authService.getIsAuth();
        // subscribe to auth changes
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    }
    // ---------internal data service functions ----------------------------------------------------------------------------------------
    DealsService.prototype.addDeal = function (newDeal) {
        this.deals.push(newDeal);
        this.calculateComp();
        this.dealsChanged.next(this.deals.slice());
        this.statsChanged.next(this.stats);
    };
    DealsService.prototype.setQuota = function (quota) {
        this.stats.quota = quota;
    };
    DealsService.prototype.getQuota = function () {
        return this.stats.quota;
    };
    DealsService.prototype.getCloudBonus = function () {
        return this.stats.cloudBonus;
    };
    DealsService.prototype.setCloudBonus = function (cloudBonus) {
        this.stats.cloudBonus = cloudBonus;
    };
    DealsService.prototype.getDeals = function () {
        return this.deals.slice();
    };
    DealsService.prototype.getTiers = function () {
        return this.commissionTiers.slice();
    };
    DealsService.prototype.getStats = function () {
        return this.stats;
    };
    DealsService.prototype.deleteDeal = function (index) {
        this.deals.splice(index, 1);
        this.calculateComp();
        this.dealsChanged.next(this.deals.slice());
        this.statsChanged.next(this.stats);
    };
    DealsService.prototype.editDeal = function (index, deal) {
        this.deals[index] = deal;
        this.calculateComp();
        this.dealsChanged.next(this.deals.slice());
        this.statsChanged.next(this.stats);
        // trigger API call to store deals if logged in
        if (this.userIsAuthenticated) {
            this.storeDealsToAPI();
        }
    };
    DealsService.prototype.updateTiers = function (newTiers) {
        this.commissionTiers = newTiers;
        this.calculateComp();
        this.tiersChanged.next(this.deals.slice());
        this.statsChanged.next(this.stats);
    };
    // tells create deal comp to toggle to edit mode and seed form
    DealsService.prototype.editDealTrigger = function (index) {
        this.editIndex.next(index);
    };
    // function for real time status change drop downs.
    // once API incorporated this needs to be rewritten to include a soft commit vs hard commit
    DealsService.prototype.onEditStatus = function (index, status) {
        this.deals[index].status = status;
        this.calculateComp();
        this.dealsChanged.next(this.deals.slice());
        this.statsChanged.next(this.stats);
    };
    // --------API call functions -----------------------------------------------------------------------------------------
    DealsService.prototype.refreshDataFromApi = function () {
        var _this = this;
        this.http
            .get('http://localhost:3000/api/user/me')
            // API will return user object
            .subscribe(function (user) {
            // seed service properties from API
            _this.deals = user.deals;
            _this.commissionTiers = user.settings.tiers;
            _this.stats.quota = user.settings.quota;
            _this.stats.cloudBonus = user.settings.cloudBonus;
            _this.calculateComp();
            _this.dealsChanged.next(_this.deals);
            _this.statsChanged.next(_this.stats);
        }, function (error) {
            alert(error);
        });
    };
    DealsService.prototype.storeDealsToAPI = function () {
        console.log('hello');
        this.http
            .patch('http://localhost:3000/api/user/deals', this.deals)
            // API will return user object
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            alert(error);
        });
    };
    DealsService.prototype.storeSettingsToAPI = function () {
        // create temp object for API to accept
        var settingsObject = {
            quota: this.stats.quota,
            cloudBonus: this.stats.cloudBonus,
            tiers: this.commissionTiers
        };
        this.http
            .patch('http://localhost:3000/api/user/settings', settingsObject)
            // API will return user object
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            alert(error);
        });
    };
    DealsService.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    /**************************************************************************
     * Name: calculateComp
     * Description: calculates the comp and populate the comp deal array
     * Parameters: none
     * Returns: none
     *************************************************************************/
    DealsService.prototype.calculateComp = function () {
        var cumulativeSales = 0;
        var cumulativeCommission = 0;
        var accumulator = 0;
        //calculate sum of deals in array
        var i = 0;
        for (i = 0; i < this.deals.length; i++) {
            //set partner commission to 0 if null
            if (!this.deals[i].partnerCommission) {
                this.deals[i].partnerCommission = 0;
            }
            //only count sold and forecasted deals
            if (this.deals[i].status !== 'Exclude') {
                //calculate synthetic cumulative commission amount for cumulative sales value
                var synthAccumComm = this.commission(Number(cumulativeSales));
                //increase sales accumulator for current deal's value
                cumulativeSales += Number(this.deals[i].value);
                //subtract previous synth accumulated commission from new commission total
                //include partner split in attainment but back it out of commission calc
                this.deals[i].commission = this.commission(Number(cumulativeSales -
                    (this.deals[i].partnerCommission * .01 * this.deals[i].value))) - synthAccumComm;
                cumulativeCommission += this.deals[i].commission;
                //store cloud spiff to object
                if (this.deals[i].type === 'Cloud') {
                    this.deals[i].cloudBonus = this.stats.cloudBonus;
                }
                else {
                    this.deals[i].cloudBonus = 0;
                }
                this.deals[i].incrementalComp = this.deals[i].commission + this.deals[i].cloudBonus;
                accumulator += this.deals[i].incrementalComp;
            }
            //only count sold and forecasted deals
            else {
                //subtract previous accumulated commission from new commission total
                this.deals[i].commission = 0;
                cumulativeCommission += this.deals[i].commission;
                //store cloud spiff to object
                if (this.deals[i].type === 'Cloud') {
                    this.deals[i].cloudBonus = 0;
                }
                this.deals[i].incrementalComp = this.deals[i].commission + this.deals[i].cloudBonus;
                accumulator += this.deals[i].incrementalComp;
            }
        }
        this.stats.totalSales = cumulativeSales;
        this.stats.totalEarnings = accumulator;
    };
    /**************************************************************************
     * Name: commission
     * Descriptions: calculates the total commission on all attainment
     * Parameters: takes the amount of attainment
     * Returns: the total commission
     *************************************************************************/
    DealsService.prototype.commission = function (amount) {
        var commission = 0;
        for (var i = 0; i < this.commissionTiers.length; i++) {
            // if first tier
            if (i === 0) {
                // if total sales is less than top bracket of tier, just apply tier rate and return
                if (amount < this.commissionTiers[i].max) {
                    commission = amount * (this.commissionTiers[i].rate / 100);
                    return commission;
                }
                // else if total sales >= top bracket of tier
                else {
                    commission = (this.commissionTiers[i].max - this.commissionTiers[i].min) * (this.commissionTiers[i].rate / 100);
                }
            }
            // if not first tier
            else {
                if (amount > this.commissionTiers[i].max) {
                    commission += (this.commissionTiers[i].max - this.commissionTiers[i].min) * (this.commissionTiers[i].rate / 100);
                    // // if last tier
                    // if (i === this.commissionTiers.length - 1) {
                    //   let carryoverAmount = amount - this.commissionTiers[i].max;
                    //   // use last tiers rate for any carryover
                    //   commission += carryoverAmount * this.commissionTiers[i].rate;
                    // }
                }
                else {
                    commission += (amount - this.commissionTiers[i].min) * (this.commissionTiers[i].rate / 100);
                    return commission;
                }
            }
        }
        return commission;
    };
    DealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DealsService);
    return DealsService;
}());



/***/ }),

/***/ "./src/app/deals/create-deal/create-deal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/deals/create-deal/create-deal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button2 {\r\n  margin-left: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvY3JlYXRlLWRlYWwvY3JlYXRlLWRlYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2NyZWF0ZS1kZWFsL2NyZWF0ZS1kZWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/deals/create-deal/create-deal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/deals/create-deal/create-deal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-expansion-panel color=\"primary\" [expanded]=\"panelOpenState\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{ editIndex === null ? 'Add Deal' : 'Edit Deal'}}\n        </mat-panel-title>\n        <!-- <mat-panel-description>\n          This is a summary of the content\n        </mat-panel-description> -->\n      </mat-expansion-panel-header>\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8\">\n          <form [formGroup]=\"newDealForm\" class=\"form-group\"(ngSubmit)=\"onAdd()\">\n            <div class=\"form-group\">\n              <label for=\"dealName\">Deal Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"dealName\"\n                id=\"dealName\"\n                formControlName=\"dealName\"\n              >\n            </div>\n            <div class=\"form-group\">\n              <label for=\"value\">Deal Value</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                name=\"value\"\n                id=\"value\"\n                formControlName=\"value\"\n              >\n            </div>\n            <div class=\"row\">\n            <div class=\"form-group col\">\n              <label for=\"partnerCommission\">Partner Commission %</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                name=\"partnerCommission\"\n                id=\"partnerCommission\"\n                formControlName=\"partnerCommission\"\n              >\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"type\">Deal Type</label>\n              <select\n                type=\"select\"\n                class=\"form-control\"\n                name=\"type\"\n                id=\"type\"\n                formControlName=\"type\"\n              >\n                <option\n                  *ngFor=\"let type of types\"\n                  [value]=\"type\">{{ type }}\n                </option>\n              </select>\n            </div>\n          </div>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newDealForm.valid\" *ngIf=\"editIndex === null\">Add</button>\n            <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!newDealForm.valid\" *ngIf=\"editIndex !== null\" (click)=\"onSaveEdit()\">Save</button>\n            <button type=\"button\" class=\"btn btn-primary button2\" *ngIf=\"editIndex !== null\" (click)=\"onDiscardEdit()\">Discard</button>\n          </form>\n        </div>\n      </div>\n\n\n  </mat-expansion-panel>\n</div>\n\n"

/***/ }),

/***/ "./src/app/deals/create-deal/create-deal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/deals/create-deal/create-deal.component.ts ***!
  \************************************************************/
/*! exports provided: CreateDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDealComponent", function() { return CreateDealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _deal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../deal.model */ "./src/app/deals/deal.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../deals.service */ "./src/app/deals.service.ts");
/* harmony import */ var src_app_shared_event_trigger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/event-trigger.service */ "./src/app/shared/event-trigger.service.ts");






var CreateDealComponent = /** @class */ (function () {
    function CreateDealComponent(dealsService, eventTriggerService) {
        this.dealsService = dealsService;
        this.eventTriggerService = eventTriggerService;
        this.types = ['Cloud', 'On Prem'];
        this.editIndex = null;
        this.panelOpenState = false;
        this.statusOptions = ['Forecast', 'Sold', 'Exclude'];
    }
    CreateDealComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newDealForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'dealName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'value': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'partnerCommission': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Cloud', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.subscription = this.dealsService.editIndex.subscribe(function (index) {
            var deals = _this.dealsService.getDeals();
            _this.seedEditForm(deals[index]);
            _this.editIndex = index;
        });
    };
    //need to add status to all of these as well as maybe constructor
    CreateDealComponent.prototype.onAdd = function () {
        var newDeal = new _deal_model__WEBPACK_IMPORTED_MODULE_1__["Deal"](this.newDealForm.get('dealName').value, this.newDealForm.get('value').value, this.newDealForm.get('partnerCommission').value, this.newDealForm.get('type').value, 'Forecast');
        this.dealsService.addDeal(newDeal);
        this.newDealForm.reset();
        this.eventTriggerService.dealHasBeenEdited();
    };
    CreateDealComponent.prototype.seedEditForm = function (deal) {
        this.newDealForm.setValue({ dealName: deal.name, value: deal.value, partnerCommission: deal.partnerCommission,
            type: deal.type, status: deal.status });
        this.panelOpenState = true;
    };
    //this needs to be saved without killing or hardcoding status value
    CreateDealComponent.prototype.onSaveEdit = function () {
        var newDeal = new _deal_model__WEBPACK_IMPORTED_MODULE_1__["Deal"](this.newDealForm.get('dealName').value, this.newDealForm.get('value').value, this.newDealForm.get('partnerCommission').value, this.newDealForm.get('type').value, this.newDealForm.get('status').value);
        this.dealsService.editDeal(this.editIndex, newDeal);
        this.editIndex = null;
        this.newDealForm.reset();
        this.panelOpenState = false;
    };
    CreateDealComponent.prototype.onDiscardEdit = function () {
        this.newDealForm.reset();
        this.panelOpenState = false;
        this.editIndex = null;
    };
    CreateDealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-deal',
            template: __webpack_require__(/*! ./create-deal.component.html */ "./src/app/deals/create-deal/create-deal.component.html"),
            styles: [__webpack_require__(/*! ./create-deal.component.css */ "./src/app/deals/create-deal/create-deal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_deals_service__WEBPACK_IMPORTED_MODULE_4__["DealsService"], src_app_shared_event_trigger_service__WEBPACK_IMPORTED_MODULE_5__["EventTriggerService"]])
    ], CreateDealComponent);
    return CreateDealComponent;
}());



/***/ }),

/***/ "./src/app/deals/deal-list/deal-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/deals/deal-list/deal-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myContainer {\r\n  margin-top: 5%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGVhbC1saXN0L2RlYWwtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvZGVhbC1saXN0L2RlYWwtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/deals/deal-list/deal-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/deals/deal-list/deal-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col\">\n    <div class=\"myContainer\">\n      <table class=\"table\" *ngIf=\"deals.length>0\">\n        <thead>\n          <th>Status</th>\n          <th>Name</th>\n          <th>Amount</th>\n          <th>Type</th>\n          <th>Commission</th>\n          <th>Cloud Spiff</th>\n          <th>Total Comp</th>\n          <th></th>\n          <th></th>\n        </thead>\n        <tbody>\n          <tr  *ngFor=\"let dealElement of deals; let i = index\" app-deal [deal]=\"dealElement\" [index]=\"i\"></tr>\n      </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <button type=\"button\" class=\"btn btn-success float-right\" *ngIf=\"hasBeenEdited && userIsAuthenticated\" (click)=\"onSave()\">Save Changes</button>\n</div>\n"

/***/ }),

/***/ "./src/app/deals/deal-list/deal-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/deals/deal-list/deal-list.component.ts ***!
  \********************************************************/
/*! exports provided: DealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealListComponent", function() { return DealListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_event_trigger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/event-trigger.service */ "./src/app/shared/event-trigger.service.ts");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../deals.service */ "./src/app/deals.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var DealListComponent = /** @class */ (function () {
    function DealListComponent(dealsService, eventTriggerService, authService) {
        this.dealsService = dealsService;
        this.eventTriggerService = eventTriggerService;
        this.authService = authService;
        this.hasBeenEdited = false;
        this.userIsAuthenticated = false;
    }
    DealListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set initial auth value
        this.userIsAuthenticated = this.authService.getIsAuth();
        // subscribe to auth changes
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        // get fresh data from API
        if (this.userIsAuthenticated) {
            this.dealsService.refreshDataFromApi();
        }
        // get new deals array (and recalculate) if deals change
        this.dealChangeSubscription = this.dealsService.dealsChanged.subscribe(function (deals) {
            _this.deals = deals;
        });
        // get new deals array (and recalculate) if tieres change
        this.tierChangeSubscription = this.dealsService.tiersChanged.subscribe(function (deals) {
            _this.deals = deals;
        });
        // catch event to show save changes button once changes have been made
        this.editTriggerSubscription = this.eventTriggerService.dealEditFlag.subscribe(function (flag) {
            _this.hasBeenEdited = flag;
        });
        this.deals = this.dealsService.getDeals();
    };
    // function to write back to API
    DealListComponent.prototype.onSave = function () {
        this.hasBeenEdited = false;
        if (this.userIsAuthenticated) {
            this.dealsService.storeDealsToAPI();
        }
    };
    DealListComponent.prototype.ngOnDestroy = function () {
        this.dealChangeSubscription.unsubscribe();
        this.tierChangeSubscription.unsubscribe();
        this.editTriggerSubscription.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    DealListComponent.prototype.canDeactivate = function () {
        console.log('here');
        if (this.hasBeenEdited) {
            if (window.confirm('YYYUnsaved changes will be lost. Would you like to continue?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    };
    DealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-deal-list',
            template: __webpack_require__(/*! ./deal-list.component.html */ "./src/app/deals/deal-list/deal-list.component.html"),
            styles: [__webpack_require__(/*! ./deal-list.component.css */ "./src/app/deals/deal-list/deal-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"], _shared_event_trigger_service__WEBPACK_IMPORTED_MODULE_2__["EventTriggerService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DealListComponent);
    return DealListComponent;
}());



/***/ }),

/***/ "./src/app/deals/deal-list/deal/deal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/deals/deal-list/deal/deal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* select {\r\n  width: 7em;\r\n} */\r\n\r\n/* #name {\r\n  width: 15em;\r\n} */\r\n\r\n/* #type {\r\n  width: 8em;\r\n}\r\n\r\n#bonus {\r\n  width: 10em;\r\n}\r\n\r\n#totalComp {\r\n  width: 10em;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGVhbC1saXN0L2RlYWwvZGVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJOztBQUVKOztJQUVJOztBQUVKOzs7Ozs7Ozs7O0lBVUkiLCJmaWxlIjoic3JjL2FwcC9kZWFscy9kZWFsLWxpc3QvZGVhbC9kZWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzZWxlY3Qge1xyXG4gIHdpZHRoOiA3ZW07XHJcbn0gKi9cclxuXHJcbi8qICNuYW1lIHtcclxuICB3aWR0aDogMTVlbTtcclxufSAqL1xyXG5cclxuLyogI3R5cGUge1xyXG4gIHdpZHRoOiA4ZW07XHJcbn1cclxuXHJcbiNib251cyB7XHJcbiAgd2lkdGg6IDEwZW07XHJcbn1cclxuXHJcbiN0b3RhbENvbXAge1xyXG4gIHdpZHRoOiAxMGVtO1xyXG59ICovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/deals/deal-list/deal/deal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/deals/deal-list/deal/deal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td>\n  <form [formGroup]=\"statusDropDown\" class=\"form-group\">\n    <select\n      type=\"select\"\n      class=\"form-control\"\n      name=\"status\"\n      id=\"status\"\n      formControlName=\"status\"\n      ng-change=\"onChange()\"\n    >\n    <option\n      *ngFor=\"let status of dealStatuses\"\n      [value]=\"status\">{{ status }}\n    </option>\n\n    </select>\n  </form>\n</td>\n\n<td id=\"name\">{{deal.name}}</td>\n<td id=\"value\">{{deal.value | currency:'USD':'symbol':'1.0-0'}}</td>\n<td id=\"type\">{{deal.type}}</td>\n<td id=\"commission\">{{deal.commission | currency:'USD':'symbol':'1.0-0'}}</td>\n<td id=\"bonus\">{{deal.cloudBonus | currency:'USD':'symbol':'1.0-0'}}</td>\n<td id=\"totalComp\">{{deal.incrementalComp | currency:'USD':'symbol':'1.0-0'}}</td>\n<td class=\"buttontd\">\n    <button class=\"btn btn-sm btn-primary\" (click)=\"onEdit()\">Edit</button>\n</td>\n<td class=\"buttontd\">\n    <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete()\">Delete</button>\n</td>\n\n\n"

/***/ }),

/***/ "./src/app/deals/deal-list/deal/deal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/deals/deal-list/deal/deal.component.ts ***!
  \********************************************************/
/*! exports provided: DealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealComponent", function() { return DealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_event_trigger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/event-trigger.service */ "./src/app/shared/event-trigger.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _deal_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../deal.model */ "./src/app/deals/deal.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_deals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/deals.service */ "./src/app/deals.service.ts");






var DealComponent = /** @class */ (function () {
    function DealComponent(dealsService, eventTriggerService) {
        this.dealsService = dealsService;
        this.eventTriggerService = eventTriggerService;
        this.dealStatuses = ['Forecast', 'Sold', 'Exclude'];
    }
    DealComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusDropDown = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.deal.status)
        });
        this.statusDropDown.valueChanges.subscribe(function (val) {
            _this.onChangeStatus();
        });
    };
    DealComponent.prototype.onDelete = function () {
        this.dealsService.deleteDeal(this.index);
    };
    DealComponent.prototype.onEdit = function () {
        this.dealsService.editDealTrigger(this.index);
    };
    DealComponent.prototype.onChangeStatus = function () {
        // trigger recalculation
        this.dealsService.onEditStatus(this.index, this.statusDropDown.get('status').value);
        // trigger hasBeenEdited flag to show save changes button in deal list component
        this.eventTriggerService.dealHasBeenEdited();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _deal_model__WEBPACK_IMPORTED_MODULE_3__["Deal"])
    ], DealComponent.prototype, "deal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DealComponent.prototype, "index", void 0);
    DealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: '[app-deal]',
            template: __webpack_require__(/*! ./deal.component.html */ "./src/app/deals/deal-list/deal/deal.component.html"),
            styles: [__webpack_require__(/*! ./deal.component.css */ "./src/app/deals/deal-list/deal/deal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_deals_service__WEBPACK_IMPORTED_MODULE_5__["DealsService"], _shared_event_trigger_service__WEBPACK_IMPORTED_MODULE_1__["EventTriggerService"]])
    ], DealComponent);
    return DealComponent;
}());



/***/ }),

/***/ "./src/app/deals/deal.model.ts":
/*!*************************************!*\
  !*** ./src/app/deals/deal.model.ts ***!
  \*************************************/
/*! exports provided: Deal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deal", function() { return Deal; });
var Deal = /** @class */ (function () {
    // constructor(name: string, value: number, type: string, commission: number, cloudBonus: number, incrementalComp: number) {
    function Deal(name, value, partnerCommission, type, status) {
        this.name = name;
        this.value = value;
        this.partnerCommission = partnerCommission;
        this.type = type;
        this.status = status;
        this.commission = 0;
        this.cloudBonus = 0;
        this.incrementalComp = 0;
    }
    return Deal;
}());



/***/ }),

/***/ "./src/app/deals/deals.component.css":
/*!*******************************************!*\
  !*** ./src/app/deals/deals.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badgeHolder {\r\n  display: inline-block;\r\n  margin: 1%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGVhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9kZWFscy9kZWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlSG9sZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/deals/deals.component.html":
/*!********************************************!*\
  !*** ./src/app/deals/deals.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 class=\"badgeHolder\" *ngIf=\"attainment<1\"><span class=\"badge badge-danger\"> Quota: {{ attainment | percent:'1.2-2' }}</span></h3>\n    <h3 class=\"badgeHolder\" *ngIf=\"attainment>=1\"><span class=\"badge badge-success\"> Quota: {{ attainment | percent:'1.2-2' }}</span></h3>\n    <h3 class=\"badgeHolder\"><span class=\"badge badge-primary\"> Sales: {{sales | currency:'USD':'symbol':'0.0-0'}}</span></h3>\n    <h3 class=\"badgeHolder\"><span class=\"badge badge-primary\"> Earnings: {{earnings | currency:'USD':'symbol':'0.0-0'}}</span></h3>\n\n\n</div>\n<app-create-deal></app-create-deal>\n<app-deal-list #dealList></app-deal-list>\n"

/***/ }),

/***/ "./src/app/deals/deals.component.ts":
/*!******************************************!*\
  !*** ./src/app/deals/deals.component.ts ***!
  \******************************************/
/*! exports provided: DealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsComponent", function() { return DealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _deal_list_deal_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deal-list/deal-list.component */ "./src/app/deals/deal-list/deal-list.component.ts");
/* harmony import */ var src_app_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/deals.service */ "./src/app/deals.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var DealsComponent = /** @class */ (function () {
    function DealsComponent(dealsService) {
        this.dealsService = dealsService;
        this.earnings = 0;
        this.attainment = 0;
        this.sales = 0;
    }
    DealsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dealsService.statsChanged.subscribe(function (stats) {
            _this.earnings = stats.totalEarnings;
            _this.attainment = (stats.totalSales / stats.quota);
            _this.sales = stats.totalSales;
        });
        var stats = this.dealsService.getStats();
        this.earnings = stats.totalEarnings;
        this.attainment = stats.totalSales / stats.quota;
        this.sales = stats.totalSales;
    };
    DealsComponent.prototype.canDeactivate = function () {
        if (this.dealList.hasBeenEdited) {
            if (window.confirm('Unsaved changes will be lost. Would you like to continue?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('dealList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _deal_list_deal_list_component__WEBPACK_IMPORTED_MODULE_1__["DealListComponent"])
    ], DealsComponent.prototype, "dealList", void 0);
    DealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-deals',
            template: __webpack_require__(/*! ./deals.component.html */ "./src/app/deals/deals.component.html"),
            styles: [__webpack_require__(/*! ./deals.component.css */ "./src/app/deals/deals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]])
    ], DealsComponent);
    return DealsComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{ message }}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</div> -->\n\n<h2 mat-dialog-title>Error</h2>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{ message }}</p>\n</div>\n<mat-dialog-actions>\n    <button mat-button (click)=\"close()\">OK</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.message = '';
        this.message = data.message;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    //https://blog.angular-university.io/angular-material-dialog/
    // unused code that passes form value along with action
    // save() {
    //     this.dialogRef.close(this.form.value);
    // }
    ErrorComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/error/error.service.ts":
/*!****************************************!*\
  !*** ./src/app/error/error.service.ts ***!
  \****************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorCalled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ErrorService.prototype.throwError = function (message) {
        this.errorCalled.next(message);
    };
    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-default\">\n  <a class=\"navbar-brand\" href=\"#\">Commission Calculator</a>\n</nav> -->\n\n\n<!-- <nav class=\"navbar navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Commission Calculator</a>\n    </div>\n\n    <div>\n\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/deals\">Forecast</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/settings\">Settings</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/signup\">Signup</a></li>\n      </ul>\n    </div>\n  </div>\n</nav> -->\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <a class=\"navbar-brand\"  routerLink=\"/\">Comp Calculator</a>\n\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/deals\">Deals <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/settings\">Settings</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!userIsAuthenticated\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!userIsAuthenticated\">\n        <a class=\"nav-link\" routerLink=\"/signup\">Sign Up</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\n        <a class=\"nav-link\" routerLink=\"/signup\" (click)=\"onLogout()\">Log Out</a>\n      </li>\n    </ul>\n\n\n\n</nav>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tier {\r\n  width: 30%;\r\n  /* margin-left: 1%;\r\n  margin-right: 1%;\r\n  margin-top: 1%;\r\n  margin-bottom: 1%; */\r\n  display: inline;\r\n}\r\n.percent {\r\n  width: 10%;\r\n  margin-left: 5%;\r\n  display: inline;\r\n}\r\n.tier {\r\n  width: 200px;\r\n}\r\n.stat {\r\n  width: 200px;\r\n}\r\n.btn-sm {\r\n  margin: 1%;\r\n}\r\nspan {\r\n  margin-left: 2%;\r\n  margin-right: 1%;\r\n}\r\n.addButton {\r\n  margin-left: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWDs7O3VCQUdxQjtFQUNyQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsV0FBVztDQUNaO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpZXIge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7ICovXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5wZXJjZW50IHtcclxuICB3aWR0aDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi50aWVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLnN0YXQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmJ0bi1zbSB7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuXHJcbi5hZGRCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form [formGroup]=\"settingsForm\" class=\"form-group\" (ngSubmit)=\"onSave()\">\n        <div class=\"row container\">\n          <div class=\"col-lg-3 col-md-6 col-sm-12 stat\">\n            <label for=\"quota\">$ Quota</label>\n            <input id=\"quota\" class=\"form-control\" type=\"number\" formControlName=\"quota\">\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-12 stat\">\n            <label for=\"cloudBonus\">$ Cloud Bonus</label>\n            <input id=\"cloudBonus\" class=\"form-control\" type=\"number\" formControlName=\"cloudBonus\">\n          </div>\n        </div>\n\n      <hr>\n      <h5>Commission Tiers</h5>\n        <div formArrayName=\"tiers\"\n          *ngFor=\"let tier of settingsForm.get('tiers').controls; let i = index;\">\n          <div [formGroupName]=\"i\">\n            $ <input class=\"form-control tier\" type=\"number\" formControlName=\"min\">\n            <span>-</span>\n            $ <input class=\"form-control tier\" type=\"number\" formControlName=\"max\">\n            <input class=\"form-control percent\" type=\"number\" formControlName=\"rate\"> %\n            <button type=\"button\" class=\"btn btn-sm btn-success addButton\" (click)=\"onAddTier(i)\">+</button>\n            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"onDeleteTier(i)\">X</button>\n          </div>\n        </div>\n        <button *ngIf=\"hasBeenEdited || settingsForm.dirty\" type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../deals.service */ "./src/app/deals.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, dealsService, authService) {
        this.formBuilder = formBuilder;
        this.dealsService = dealsService;
        this.authService = authService;
        this.hasBeenEdited = false;
        this.userIsAuthenticated = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set initial auth value
        this.userIsAuthenticated = this.authService.getIsAuth();
        // subscribe to auth changes
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.settingsForm = this.formBuilder.group({
            'quota': '',
            'cloudBonus': '',
            'tiers': this.formBuilder.array([])
        });
        this.initForm();
    };
    SettingsComponent.prototype.createTier = function (min, max, rate) {
        return this.formBuilder.group({
            min: [min],
            max: [max],
            rate: [rate]
        });
    };
    SettingsComponent.prototype.onAddTier = function (index) {
        this.tiersFormArray = this.settingsForm.get('tiers');
        this.tiersFormArray.insert(index + 1, this.createTier(0, 0, 0));
        this.hasBeenEdited = true;
    };
    SettingsComponent.prototype.onDeleteTier = function (index) {
        this.settingsForm.get('tiers').removeAt(index);
        this.hasBeenEdited = true;
    };
    SettingsComponent.prototype.initForm = function () {
        var _this = this;
        this.hasBeenEdited = false;
        this.tiersFormArray = this.settingsForm.get('tiers');
        //clear form array to avoid concatination
        while (this.tiersFormArray.length !== 0) {
            this.tiersFormArray.removeAt(0);
        }
        this.settingsForm.reset();
        var tiers = this.dealsService.getTiers();
        tiers.forEach(function (tier) {
            if (tier) {
                _this.tiersFormArray.push(_this.createTier(tier.min, tier.max, tier.rate));
            }
        });
        var quota = this.dealsService.getQuota();
        var cloudBonus = this.dealsService.getCloudBonus();
        this.settingsForm.patchValue({ 'quota': quota, 'cloudBonus': cloudBonus });
    };
    SettingsComponent.prototype.onSave = function () {
        var tempArray = [];
        this.tiersFormArray = this.settingsForm.get('tiers');
        this.tiersFormArray.value.forEach(function (tier) {
            tempArray.push(tier);
        });
        this.dealsService.setQuota(this.settingsForm.get('quota').value);
        this.dealsService.setCloudBonus(this.settingsForm.get('cloudBonus').value);
        this.dealsService.updateTiers(tempArray);
        this.hasBeenEdited = false;
        this.initForm();
        // trigger API call to store settings if logged in
        if (this.userIsAuthenticated) {
            this.dealsService.storeSettingsToAPI();
        }
    };
    SettingsComponent.prototype.canDeactivate = function () {
        if (this.hasBeenEdited || this.settingsForm.dirty) {
            if (window.confirm('Unsaved changes will be lost. Would you like to continue?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/event-trigger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/event-trigger.service.ts ***!
  \*************************************************/
/*! exports provided: EventTriggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTriggerService", function() { return EventTriggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EventTriggerService = /** @class */ (function () {
    function EventTriggerService() {
        this.dealEditFlag = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // tells create deal comp to toggle to edit mode and seed form
    EventTriggerService.prototype.dealHasBeenEdited = function () {
        this.dealEditFlag.next(true);
    };
    EventTriggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventTriggerService);
    return EventTriggerService;
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
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bhaass\Documents\AAA School\Practice\Angular Commission\comm-calc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map