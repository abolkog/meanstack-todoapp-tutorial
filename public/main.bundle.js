webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @Author: Khalid Elshafie <khalid>\n * @Date:   2017-10-03T15:12:36+09:00\n * @Email:  Khalid@abolkog.com\n */\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_task_add_task_component__ = __webpack_require__("../../../../../src/app/components/add-task/add-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-03T15:24:19+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_12__components_main_main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addTask', component: __WEBPACK_IMPORTED_MODULE_13__components_add_task_add_task_component__["a" /* AddTaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_add_task_add_task_component__["a" /* AddTaskComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(AppRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["HashLocationStrategy"] },
            __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__services_tasks_service__["a" /* TasksService */],
            __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/app.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_INFO; });
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-06T23:26:12+09:00
 * @Email:  Khalid@abolkog.com
 */
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-06T23:26:12+09:00
 * @Email:  Khalid@abolkog.com
 */ var AUTH_TOKEN = 'AuthToken';
var USER_INFO = 'mean_user';
//# sourceMappingURL=app.util.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-task/add-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-task/add-task.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onAddTask()\" class=\"form-horizontal\" >\n\n  <h2>Add New Task</h2>\n\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-2 control-label\">Name</label>\n    <div class=\"col-lg-10\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" >\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-2 control-label\">Completed</label>\n    <div class=\"col-lg-10\">\n      <input type=\"checkbox\" [(ngModel)]=\"done\" name=\"done\" >\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"pull-right\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-task/add-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-08T17:25:11+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTaskComponent = (function () {
    function AddTaskComponent(_tasks, _userService, _router, _flash) {
        this._tasks = _tasks;
        this._userService = _userService;
        this._router = _router;
        this._flash = _flash;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        var user = this._userService.getCurrentUser();
        this.owner = user.id;
        this.done = false;
    };
    AddTaskComponent.prototype.onAddTask = function () {
        var _this = this;
        if (!this.name) {
            this._flash.show('Task name is requried', { cssClass: 'alert-danger' });
            return false;
        }
        var task = {
            name: this.name,
            owner: this.owner,
            done: this.done
        };
        this._tasks.saveTask(task).subscribe(function (resp) {
            _this._flash.show('Task Saved', { cssClass: 'alert-success' });
            _this._router.navigate(['/main']);
        });
    };
    return AddTaskComponent;
}());
AddTaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-task',
        template: __webpack_require__("../../../../../src/app/components/add-task/add-task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-task/add-task.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AddTaskComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-task.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>MEAN Stack Tutorial</h1>\n    <p>A Dummy app built with MEAN stack for the tutorial: Learn MEAN Stack @abolkog.com</p>\n  </div>\n\n  <h3>Stack Used in this App</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">AngularJs: Angular 4 : Front-End</li>\n    <li class=\"list-group-item\">ExpressJS: Back-End (API)</li>\n    <li class=\"list-group-item\">NodeJS: Run-Time Env.</li>\n    <li class=\"list-group-item\">MongoDB</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @Author: Khalid Elshafie <khalid>\n * @Date:   2017-10-03T15:24:04+09:00\n * @Email:  Khalid@abolkog.com\n */\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onLogin()\" class=\"form-horizontal\" >\n\n  <h2>Login</h2>\n\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-2 control-label\">Email</label>\n    <div class=\"col-lg-10\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" >\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-2 control-label\">Password</label>\n    <div class=\"col-lg-10\">\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" >\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"pull-right\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-06T22:08:45+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_userService, _flash, _router) {
        this._userService = _userService;
        this._flash = _flash;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (!this.email || !this.password) {
            this._flash.show('All fields are required', { cssClass: 'alert-danger' });
            return false;
        }
        var user = {
            email: this.email,
            password: this.password
        };
        this._userService.auth(user).subscribe(function (resp) {
            if (!resp.success) {
                _this._flash.show(resp.message, { cssClass: 'alert-danger' });
                return false;
            }
            _this._userService.saveUserDate(resp.token, resp.user);
            _this._router.navigate(['/main']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <h2 class=\"page-title\">My Task List</h2>\n  <div class=\"pull-right\">\n    <a [routerLink]=\"['/addTask']\" class=\"btn btn-default\">Add Task</a>\n  </div>\n</div>\n\n<table class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Task Name</th>\n      <th>Completed</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let task of tasks; let i = index \">\n      <td> {{ i + 1 }} </td>\n      <td> {{ task.name }}</td>\n      <td> {{ task.done }}</td>\n      <td>\n        <button (click)=\"deleteTask(task._id)\"  class=\"btn btn-danger\">Delete</button>\n        <button (click)=\"editTask(task._id)\"  class=\"btn btn-info\">Edit</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-08T17:12:32+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(_taskService, _userService, _flash, _router) {
        this._taskService = _taskService;
        this._userService = _userService;
        this._flash = _flash;
        this._router = _router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this._fetchTasks();
    };
    MainComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        this._taskService.deleteTask(taskId).subscribe(function (resp) {
            if (!resp.success) {
                _this._flash.show(resp.message, { cssClass: 'alert-danger ' });
            }
            else {
                _this._fetchTasks();
                _this._flash.show('Task Deleted', { cssClass: 'alert-success ' });
            }
            _this._router.navigate(['/main']);
        });
    };
    MainComponent.prototype.editTask = function (taskId) {
        //TODO: Assignment: Implment Edit
        this._flash.show('This method is left as an assignment. Try to implement it', { cssClass: 'alert-info' });
        return false;
    };
    MainComponent.prototype._fetchTasks = function () {
        var _this = this;
        var currentUser = this._userService.getCurrentUser();
        var query = { owner: currentUser.id };
        this._taskService.getTasks(query).subscribe(function (resp) {
            _this.tasks = resp.tasks;
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], MainComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Task App (MEAN Stack)</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" >\n              <a [routerLink]=\"['/']\">Home</a>\n            </li>\n            <li *ngIf=\"_userService.isLoggedIn()\" [routerLinkActive]=\"['active']\">\n              <a [routerLink]=\"['/main']\">Main</a>\n            </li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!_userService.isLoggedIn()\" [routerLinkActive]=\"['active']\">\n              <a [routerLink]=\"['/login']\">Login</a>\n            </li>\n            <li *ngIf=\"!_userService.isLoggedIn()\" [routerLinkActive]=\"['active']\">\n              <a [routerLink]=\"['/register']\">Register</a>\n            </li>\n            <li *ngIf=\"_userService.isLoggedIn()\">\n              <a href=\"#\" (click)=\"onLogOutClicked()\">Logout</a>\n            </li>\n          </ul>\n\n\n        </div><!--/.nav-collapse -->\n      </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-03T15:21:10+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogOutClicked = function () {
        this._userService.logOut();
        this._router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onRegister()\" class=\"form-horizontal\" >\n\n  <h2>Signup</h2>\n  <div class=\"form-group\">\n    <label class=\"col-lg-2 control-label\">Name</label>\n    <div class=\"col-lg-10\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" >\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-2 control-label\">Email</label>\n    <div class=\"col-lg-10\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" >\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-2 control-label\">Password</label>\n    <div class=\"col-lg-10\">\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" >\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"pull-right\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-03T17:43:49+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_flash, _userService, _router) {
        this._flash = _flash;
        this._userService = _userService;
        this._router = _router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        if (!this.name || !this.email || !this.password) {
            this._flash.show('All fields are required', { cssClass: 'alert-danger' });
            return false;
        }
        var user = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        this._userService.createAccount(user).subscribe(function (resp) {
            if (!resp.success) {
                _this._flash.show(resp.message, { cssClass: 'alert-danger' });
                return false;
            }
            _this._flash.show('Account was created', { cssClass: 'alert-success' });
            return _this._router.navigate(['/login']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-06T23:31:30+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._userService.isLoggedIn()) {
            return true;
        }
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_app_util__ = __webpack_require__("../../../../../src/app/common/app.util.ts");
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-08T17:33:15+09:00
 * @Email:  Khalid@abolkog.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksService = (function () {
    function TasksService(_http) {
        this._http = _http;
    }
    TasksService.prototype.createAuthHeader = function (headers) {
        var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__common_app_util__["a" /* AUTH_TOKEN */]);
        headers.append('Authorization', "Bearer " + token);
    };
    TasksService.prototype.saveTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthHeader(headers);
        return this._http.post('tasks/add', task, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    TasksService.prototype.getTasks = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthHeader(headers);
        return this._http.post('tasks/list', query, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    TasksService.prototype.deleteTask = function (taskId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthHeader(headers);
        var url = "tasks/remove/" + taskId;
        return this._http.delete(url, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    return TasksService;
}());
TasksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TasksService);

var _a;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_app_util__ = __webpack_require__("../../../../../src/app/common/app.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-04T06:38:50+09:00
 * @Email:  Khalid@abolkog.com
 */




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.createAccount = function (user) {
        return this._http.post('users/register', user)
            .map(function (resp) { return resp.json(); });
    };
    UserService.prototype.auth = function (user) {
        return this._http.post('users/auth', user)
            .map(function (resp) { return resp.json(); });
    };
    UserService.prototype.saveUserDate = function (token, user) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__common_app_util__["a" /* AUTH_TOKEN */], token);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__common_app_util__["b" /* USER_INFO */], JSON.stringify(user));
    };
    UserService.prototype.isLoggedIn = function () {
        //TODO: Enhace this method. angular2-jwt
        return !!localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__common_app_util__["a" /* AUTH_TOKEN */]);
    };
    UserService.prototype.logOut = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_3__common_app_util__["a" /* AUTH_TOKEN */]);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_3__common_app_util__["b" /* USER_INFO */]);
    };
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__common_app_util__["b" /* USER_INFO */]));
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map