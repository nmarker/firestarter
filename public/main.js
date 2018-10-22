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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _ui_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/user-login/user-login.component */ "./src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _notes_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes/notes-list/notes-list.component */ "./src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var _uploads_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploads/upload-page/upload-page.component */ "./src/app/uploads/upload-page/upload-page.component.ts");
/* harmony import */ var _ui_ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/ssr-page/ssr-page.component */ "./src/app/ui/ssr-page/ssr-page.component.ts");
/* harmony import */ var _ui_postjob_postjob_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/postjob/postjob.component */ "./src/app/ui/postjob/postjob.component.ts");
/* harmony import */ var _ui_addresume_addresume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/addresume/addresume.component */ "./src/app/ui/addresume/addresume.component.ts");
/* harmony import */ var _ui_viewresume_viewresume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/viewresume/viewresume.component */ "./src/app/ui/viewresume/viewresume.component.ts");
/* harmony import */ var _ui_resumelist_resumelist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/resumelist/resumelist.component */ "./src/app/ui/resumelist/resumelist.component.ts");
/* harmony import */ var _ui_ad_listing_ad_listing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/ad-listing/ad-listing.component */ "./src/app/ui/ad-listing/ad-listing.component.ts");
/* harmony import */ var _ui_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/profile/profile.component */ "./src/app/ui/profile/profile.component.ts");
/* harmony import */ var _ui_profileresume_profileresume_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/profileresume/profileresume.component */ "./src/app/ui/profileresume/profileresume.component.ts");
/* harmony import */ var _ui_onboarding_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/onboarding/welcome/welcome.component */ "./src/app/ui/onboarding/welcome/welcome.component.ts");
/* harmony import */ var _ui_onboarding_location_location_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/onboarding/location/location.component */ "./src/app/ui/onboarding/location/location.component.ts");
/* harmony import */ var _ui_onboarding_looking_looking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/onboarding/looking/looking.component */ "./src/app/ui/onboarding/looking/looking.component.ts");
/* harmony import */ var _ui_onboarding_onboardingprofile_onboardingprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/onboarding/onboardingprofile/onboardingprofile.component */ "./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.ts");
/* harmony import */ var _ui_searchcandidates_searchcandidates_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/searchcandidates/searchcandidates.component */ "./src/app/ui/searchcandidates/searchcandidates.component.ts");
/* harmony import */ var _ui_onboarding_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/onboarding/preferences/preferences.component */ "./src/app/ui/onboarding/preferences/preferences.component.ts");
/* harmony import */ var _ui_onboarding_builder_builder_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/onboarding/builder/builder.component */ "./src/app/ui/onboarding/builder/builder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', component: _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'login', component: _ui_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
    { path: 'notes', component: _notes_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__["NotesListComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'uploads', component: _uploads_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_6__["UploadPageComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'postjob', component: _ui_postjob_postjob_component__WEBPACK_IMPORTED_MODULE_8__["PostjobComponent"] },
    { path: 'addresume', component: _ui_addresume_addresume_component__WEBPACK_IMPORTED_MODULE_9__["AddresumeComponent"] },
    { path: 'viewresume', component: _ui_viewresume_viewresume_component__WEBPACK_IMPORTED_MODULE_10__["ViewresumeComponent"] },
    { path: 'resumelist', component: _ui_resumelist_resumelist_component__WEBPACK_IMPORTED_MODULE_11__["ResumelistComponent"] },
    { path: 'adlisting', component: _ui_ad_listing_ad_listing_component__WEBPACK_IMPORTED_MODULE_12__["AdListingComponent"] },
    { path: 'ssr', component: _ui_ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_7__["SsrPageComponent"] },
    { path: 'profile', component: _ui_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: 'profileresume', component: _ui_profileresume_profileresume_component__WEBPACK_IMPORTED_MODULE_14__["ProfileresumeComponent"] },
    { path: 'onboarding/welcome', component: _ui_onboarding_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"] },
    { path: 'onboarding/location', component: _ui_onboarding_location_location_component__WEBPACK_IMPORTED_MODULE_16__["LocationComponent"] },
    { path: 'onboarding/looking', component: _ui_onboarding_looking_looking_component__WEBPACK_IMPORTED_MODULE_17__["LookingComponent"] },
    { path: 'searchcandidates', component: _ui_searchcandidates_searchcandidates_component__WEBPACK_IMPORTED_MODULE_19__["SearchcandidatesComponent"] },
    { path: 'onboarding/profile', component: _ui_onboarding_onboardingprofile_onboardingprofile_component__WEBPACK_IMPORTED_MODULE_18__["OnboardingprofileComponent"] },
    { path: 'onboarding/preferences', component: _ui_onboarding_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_20__["PreferencesComponent"] },
    { path: 'onboarding/builder', component: _ui_onboarding_builder_builder_component__WEBPACK_IMPORTED_MODULE_21__["BuilderComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<div id=\"wrapper\" class=\"content\">\n    <main-nav></main-nav>\n\n    <div class=\"columns\">\n        <div class=\"column is-12\">\n            \n                <!-- <div class=\"columns\">\n                    <main class=\"column is-10 is-offset-1 \"> -->\n                        <notification-message></notification-message>\n                        <router-outlet></router-outlet>\n                    <!-- </main>\n                </div> -->\n            \n        </div>\n        <!-- <aside class=\"column is-2 is-offset-1\">\n            <user-profile></user-profile>\n        </aside> -->\n    </div>\n\n\n    <footer class=\"footer\">\n        Angular v6.x + Firebase PWA Starter App <br> Build me from scratch at <a href=\"https://angularfirebase.com\">AngularFirebase.com</a><br>\n        <br>Open Source | MIT License | Created by <a href=\"https://jeffdelaney.me\">Jeff Delaney</a>\n    </footer>\n\n\n    <!-- <div class=\"github-banner\" style=\"z-index: 9999999\">\n        <a href=\"https://github.com/codediodeio/angular-firestarter\" class=\"github-corner\" aria-label=\"View source on Github\">\n            <svg width=\"60\" height=\"60\" viewBox=\"0 0 250 250\" style=\"z-index: 11; fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path>\n      </svg>\n        </a>\n        <style>\n            .github-corner:hover .octo-arm {\n                animation: octocat-wave 560ms ease-in-out\n            }\n            \n            @keyframes octocat-wave {\n                0%,\n                100% {\n                    transform: rotate(0)\n                }\n                20%,\n                60% {\n                    transform: rotate(-25deg)\n                }\n                40%,\n                80% {\n                    transform: rotate(10deg)\n                }\n            }\n            \n            @media (max-width:500px) {\n                .github-corner:hover .octo-arm {\n                    animation: none\n                }\n                .github-corner .octo-arm {\n                    animation: octocat-wave 560ms ease-in-out\n                }\n            }\n        </style>\n    </div> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _uploads_uploads_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploads/uploads.module */ "./src/app/uploads/uploads.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _notes_notes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notes/notes.module */ "./src/app/notes/notes.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/functions */ "./node_modules/angularfire2/functions/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Firestarter App Modules




// AngularFire2 Modules





// IMPORTANT
// Add your own project credentials to environments/*.ts
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
                _notes_notes_module__WEBPACK_IMPORTED_MODULE_9__["NotesModule"],
                _uploads_uploads_module__WEBPACK_IMPORTED_MODULE_7__["UploadsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'firestarter'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
                angularfire2_functions__WEBPACK_IMPORTED_MODULE_14__["AngularFireFunctionsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
                })
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/AdListing.ts":
/*!***********************************!*\
  !*** ./src/app/core/AdListing.ts ***!
  \***********************************/
/*! exports provided: AdListing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdListing", function() { return AdListing; });
var AdListing = /** @class */ (function () {
    function AdListing() {
        this.title = 'Your Title';
        this.content = 'Ad Content';
        this.price = 5.00;
        this.image = 'http://via.placeholder.com/350x150';
    }
    return AdListing;
}());



/***/ }),

/***/ "./src/app/core/ad.service.ts":
/*!************************************!*\
  !*** ./src/app/core/ad.service.ts ***!
  \************************************/
/*! exports provided: AdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdService", function() { return AdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database-deprecated */ "./node_modules/angularfire2/database-deprecated/index.js");
/* harmony import */ var _AdListing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdListing */ "./src/app/core/AdListing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdService = /** @class */ (function () {
    function AdService(db) {
        this.db = db;
    }
    /// Creates an Ad, then returns as an object
    AdService.prototype.createAd = function () {
        var adDefault = new _AdListing__WEBPACK_IMPORTED_MODULE_2__["AdListing"]();
        var adKey = this.db.list('/ads').push(adDefault).key;
        return this.db.object('/ads/' + adKey);
    };
    /// Updates an existing Ad
    AdService.prototype.updateAd = function (ad, data) {
        return ad.update(data);
    };
    AdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AdService);
    return AdService;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, notify) {
        this.auth = auth;
        this.router = router;
        this.notify = notify;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.notify.update('You must be logged in!', 'error');
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router, notify) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.notify = notify;
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        })
        // tap(user => localStorage.setItem('user', JSON.stringify(user))),
        // startWith(JSON.parse(localStorage.getItem('user')))
        );
    }
    ////// OAuth Methods /////
    AuthService.prototype.googleLogin = function () {
        //const provider = new firebase.auth.GoogleAuthProvider();
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.githubLogin = function () {
        //const provider = new firebase.auth.GithubAuthProvider();
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GithubAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        //const provider = new firebase.auth.FacebookAuthProvider();
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        //const provider = new firebase.auth.TwitterAuthProvider();
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth
            .signInAnonymously()
            .then(function (credential) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(credential.user); // if using firestore
        })
            .catch(function (error) {
            _this.handleError(error);
        });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome new user!', 'success');
            return _this.updateUserData(credential.user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome back!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        //const fbAuth = firebase.auth();
        //const fbAuth = auth;
        //return fbAuth
        //.sendPasswordResetEmail(email)
        //.then(() => this.notify.update('Password update email sent', 'info'))
        //.catch(error => this.handleError(error));
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    // If error, console log and notify user
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    // Sets user data to firestore after succesful login
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || 'nameless user',
            photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
        };
        return userRef.set(data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/notify.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/notify.service.ts ***!
  \****************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this._msgSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-note\">\n    <h3>{{ note.content }}</h3>\n    <span class=\"button is-small is-info\" (click)='addHeartToNote(note.hearts)'>\n    Heart <i class=\"fa fa-heart\" style=\"margin-left: 5px;\"></i>\n  </span>\n    <span class=\"button is-small is-danger\" (click)='deleteNote(note?.id)'>Delete</span>\n    <p>This note has been hearted {{ note.hearts || 0 }} times.</p>\n</div>"

/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic-note {\n  visibility: visible; }\n"

/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.ts ***!
  \************************************************************/
/*! exports provided: NoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailComponent", function() { return NoteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteDetailComponent = /** @class */ (function () {
    function NoteDetailComponent(notesService) {
        this.notesService = notesService;
    }
    NoteDetailComponent.prototype.addHeartToNote = function (val) {
        if (this.note.id) {
            this.notesService.updateNote(this.note.id, { hearts: val + 1 });
        }
        else {
            console.error('Note missing ID!');
        }
    };
    NoteDetailComponent.prototype.deleteNote = function (id) {
        this.notesService.deleteNote(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoteDetailComponent.prototype, "note", void 0);
    NoteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'note-detail',
            template: __webpack_require__(/*! ./note-detail.component.html */ "./src/app/notes/note-detail/note-detail.component.html"),
            styles: [__webpack_require__(/*! ./note-detail.component.scss */ "./src/app/notes/note-detail/note-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Firestore Notes</h1>\n<p>\n    Learn how to build\n    <a href=\"https://angularfirebase.com/tag/firestore\">cool stuff with Firestore</a>\n</p>\n<hr>\n\n<input [(ngModel)]=\"content\" placeholder=\"Add your own note\" class=\"input\" name=\"note\">\n\n\n<button class=\"button is-success\" (click)=\"clickHandler()\" [disabled]=\"content?.length < 2 || content?.length > 200\">\n  Add Note\n</button>\n<hr>\n<div *ngFor=\"let note of notes | async\">\n    <note-detail [note]=\"note\"></note-detail>\n</div>"

/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.ts ***!
  \**********************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(notesService) {
        this.notesService = notesService;
    }
    NotesListComponent.prototype.ngOnInit = function () {
        this.notes = this.notesService.getData();
    };
    NotesListComponent.prototype.clickHandler = function () {
        this.notesService.createNote(this.content);
        this.content = '';
    };
    NotesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notes-list',
            template: __webpack_require__(/*! ./notes-list.component.html */ "./src/app/notes/notes-list/notes-list.component.html"),
            styles: [__webpack_require__(/*! ./notes-list.component.scss */ "./src/app/notes/notes-list/notes-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.module.ts":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes-list/notes-list.component */ "./src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-detail/note-detail.component */ "./src/app/notes/note-detail/note-detail.component.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotesModule = /** @class */ (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"], _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailComponent"]],
            providers: [_notes_service__WEBPACK_IMPORTED_MODULE_5__["NotesService"]]
        })
    ], NotesModule);
    return NotesModule;
}());



/***/ }),

/***/ "./src/app/notes/notes.service.ts":
/*!****************************************!*\
  !*** ./src/app/notes/notes.service.ts ***!
  \****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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



var NotesService = /** @class */ (function () {
    function NotesService(afs) {
        this.afs = afs;
        this.notesCollection = this.afs.collection('notes', function (ref) { return ref.orderBy('time', 'desc').limit(5); });
    }
    NotesService.prototype.getData = function () {
        // ['added', 'modified', 'removed']
        return this.notesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                return __assign({ id: a.payload.doc.id }, data);
            });
        }));
    };
    NotesService.prototype.getNote = function (id) {
        return this.afs.doc("notes/" + id);
    };
    NotesService.prototype.createNote = function (content) {
        var note = {
            content: content,
            hearts: 0,
            time: new Date().getTime(),
        };
        return this.notesCollection.add(note);
    };
    NotesService.prototype.updateNote = function (id, data) {
        return this.getNote(id).update(data);
    };
    NotesService.prototype.deleteNote = function (id) {
        return this.getNote(id).delete();
    };
    NotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/ui/ad-listing/ad-listing.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/ad-listing/ad-listing.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\" *ngIf=\"ad\">\n  <div class=\"column is-6\">\n    <h1>Ad Listing Preview</h1>\n\n    <article class=\"message\">\n      <div class=\"message-header\">\n        <p>{{(ad | async).title}}</p>\n      </div>\n      <div class=\"message-body\">\n\n        <img [src]=\"(ad | async).image\" width=\"350px\"><br>\n        <p>{{ (ad | async).content }}</p>\n\n        <hr>\n\n        <h4>List Price: {{ (ad | async).price | currency}}</h4>\n      </div>\n    </article>\n\n    <h3>Form Values</h3>\n\n    <p>Form value: <br> {{ adForm.value | json }}</p>\n    <p>Form status: {{ adForm.status | json }}</p>\n\n  </div>\n\n\n  <div class=\"column\">\n\n    <form  [formGroup]=\"adForm\" novalidate>\n\n    <h1>Create your Listing</h1>\n\n\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Title</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <div class=\"control\">\n            <input class=\"input\" type=\"text\"\n                   formControlName=\"title\"\n                   (change)=\"saveAdChanges()\"\n                   [ngClass]=\"{\n                                'is-success' :  adForm.get('title').valid &&  adForm.get('title').dirty,\n                                'is-danger'  :  !adForm.get('title').valid\n                              }\">\n          </div>\n\n          <p class=\"error is-danger\" [hidden]=\"adForm.get('title').valid\">\n            Title is required\n          </p>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Image URL</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <div class=\"control\">\n            <input class=\"input\" type=\"text\"\n                   formControlName=\"image\"\n                   (change)=\"saveAdChanges()\"\n                   [ngClass]=\"{\n                               'is-success' :  adForm.get('image').valid &&  adForm.get('image').dirty,\n                               'is-danger'  :  !adForm.get('image').valid\n                             }\">\n          </div>\n          <p class=\"error is-danger\" [hidden]=\"adForm.get('image').valid\">\n            Image is required\n          </p>\n        </div>\n      </div>\n    </div>\n\n\n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\"><label class=\"label\">Price</label></div>\n        <div class=\"field-body\">\n          <div class=\"field is-expanded\">\n            <div class=\"field has-addons\">\n              <p class=\"control\">\n                <a class=\"button is-static\">\n                  $\n                </a>\n              </p>\n              <p class=\"control is-expanded\">\n                <input class=\"input\" type=\"number\"\n                       formControlName=\"price\"\n                       (change)=\"saveAdChanges()\"\n                       [ngClass]=\"{\n                                   'is-success' :  adForm.get('price').valid &&  adForm.get('price').dirty,\n                                   'is-danger'  :  !adForm.get('price').valid\n                                 }\">\n              </p>\n            </div>\n            <p class=\"error\" [hidden]=\"adForm.get('price').valid\">Price is not valid</p>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Details</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <div class=\"control\">\n              <textarea class=\"textarea\"\n                  formControlName=\"content\"\n                  (change)=\"saveAdChanges()\"\n                  [ngClass]=\"{\n                               'is-success' :  adForm.get('content').valid &&  adForm.get('content').dirty,\n                               'is-danger'  :  !adForm.get('content').valid\n                             }\">\n              </textarea>\n              <p class=\"error\" [hidden]=\"adForm.get('content').valid\">Content is not valid</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n\n\n<button class=\"button is-success\" (click)=\"startNewAdListing()\" *ngIf=\"!ad\" >Start New Ad Listing</button>"

/***/ }),

/***/ "./src/app/ui/ad-listing/ad-listing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/ad-listing/ad-listing.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/ad-listing/ad-listing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/ad-listing/ad-listing.component.ts ***!
  \*******************************************************/
/*! exports provided: AdListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdListingComponent", function() { return AdListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_ad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ad.service */ "./src/app/core/ad.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdListingComponent = /** @class */ (function () {
    function AdListingComponent(adService, fb) {
        this.adService = adService;
        this.fb = fb;
    }
    //ngOnInit(){}
    AdListingComponent.prototype.startNewAdListing = function () {
        this.ad = this.adService.createAd();
        this.buildForm();
    };
    AdListingComponent.prototype.saveAdChanges = function () {
        if (this.adForm.status != 'VALID') {
            console.log('form is not valid, cannot save to database');
            return;
        }
        var data = this.adForm.value;
        this.adService.updateAd(this.ad, data);
    };
    AdListingComponent.prototype.buildForm = function () {
        var _this = this;
        this.adForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.ad.subscribe(function (ad) {
            _this.adForm.patchValue(ad);
        });
    };
    AdListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ad-listing',
            template: __webpack_require__(/*! ./ad-listing.component.html */ "./src/app/ui/ad-listing/ad-listing.component.html"),
            styles: [__webpack_require__(/*! ./ad-listing.component.scss */ "./src/app/ui/ad-listing/ad-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AdListingComponent);
    return AdListingComponent;
}());



/***/ }),

/***/ "./src/app/ui/addresume/addresume.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/addresume/addresume.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" profileResumeForm path=\"resume/{{resumename}}\" (stateChange)=\"changeHandler($event)\" class=\"example-form\">\n\n    <div class=\"columns\">\n        <div class=\"column is-narrow\" style=\"background-color:#f4f5f7; \">\n            <div class=\"\" style=\"width: 55px;\">\n                <mat-toolbar style=\"background-color: transparent\">\n                    <mat-toolbar-row>\n                        <button mat-icon-button color=\"blue\">\n                            <mat-icon class=\"example-icon\">description</mat-icon>\n                        </button>\n                    </mat-toolbar-row>\n                    <mat-toolbar-row>\n                        <button mat-icon-button color=\"\">\n                            <mat-icon aria-label=\"\">note_add</mat-icon>\n                        </button>\n                    </mat-toolbar-row>\n                    <mat-toolbar-row>\n                        <button mat-icon-button color=\"\">\n                            <mat-icon class=\"example-icon\">delete</mat-icon>\n                        </button>\n                    </mat-toolbar-row>\n                </mat-toolbar>\n            </div>\n        </div>\n        <div class=\"column\">\n\n            <div class=\"columns\">\n                <div class=\"column is-12\">\n                    <div class=\"columns\">\n                        <div class=\"column is-10 is-offset-1\">\n                            <h1 class=\"head\">Add Resume.</h1>\n                            <h4>Let's start with your profile. This will help you succeed on HireMuse.</h4>\n                        </div>\n                    </div>\n                    <div class=\"columns\">\n                        <div class=\"column is-10 is-offset-1\">\n                            <mat-card>\n                                <div class=\"columns\">\n                                    <div class=\"column\">\n                                        <mat-form-field>\n                                            <mat-label>Candidate Name</mat-label>\n                                            <input matInput placeholder=\"Candidate Name\" formControlName=\"name\">\n                                            <mat-hint>Candidate Name</mat-hint>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n\n                                <div class=\"columns\">\n                                    <div class=\"column\">\n                                        <mat-form-field>\n                                            <mat-label>Candidate Name</mat-label>\n                                            <input matInput placeholder=\"Candidate Name\" formControlName=\"name\">\n                                            <mat-hint>Candidate Name</mat-hint>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n\n                                <div class=\"columns\">\n                                    <div class=\"column\">\n                                        <mat-form-field>\n                                            <mat-label>Location</mat-label>\n                                            <input matInput formControlName=\"location\" type=\"text\" class=\"google-place-input\"\n                                                google-place (onSelect)=\"setAddress($event)\" placeholder=\"Type to search..\">\n                                            <mat-hint>Candidate Name</mat-hint>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"column\">\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"email\" formControlName=\"email\">\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                <div class=\"columns\">\n                                    <div class=\"column\">\n                                        <mat-form-field>\n                                            <textarea matInput #message rows=\"2\" maxlength=\"256\" placeholder=\"Mini Resume\"\n                                                formControlName=\"miniresume\"></textarea>\n                                            <mat-hint align=\"start\"><strong>Don't disclose personal info</strong></mat-hint>\n                                            <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n\n                                <br><br>\n\n                                <mat-tab-group dynamicHeight>\n                                    <mat-tab label=\"Basics\">\n                                        <div class=\"columns\">\n                                            <div class=\"column\">&nbsp;</div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <input matInput placeholder=\"Role\" formControlName=\"role\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <textarea matInput placeholder=\"your message...\" formControlName=\"message\"></textarea>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">&nbsp;</div>\n                                        </div>\n                                    </mat-tab>\n                                    <mat-tab label=\"Talent Profile\">\n                                        <div class=\"columns\">\n                                            <div class=\"column\">&nbsp;</div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\"><label class=\"label\">Search status</label></div>\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <mat-select placeholder=\"Job Search Status\" [(value)]=\"selected\"\n                                                        formControlName=\"jobsearchstatus\">\n                                                        <mat-option value=\"Actively Interviewing\">Actively\n                                                            Interviewing</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            \n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <mat-select placeholder=\"Job Type\" multiple formControlName=\"jobtype\">\n                                                        <mat-option *ngFor=\"let job of typesOfJobs\" [value]=\"job\">{{job}}</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </div>\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <input matInput formControlName=\"desiredannualsalary\" placeholder=\"Desired Annual Salary\"\n                                                        type=\"number\" class=\"example-right-align\">\n                                                    <span matPrefix>$&nbsp;</span>\n                                                    <span matSuffix>.00</span>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <input matInput placeholder=\"Desired Location\" type=\"text\"\n                                                        formControlName=\"desiredlocation\">\n                                                </mat-form-field>\n                                            </div>\n                                            <div class=\"column\">\n                                                <mat-checkbox formControlName=\"opentoworkremotely\">Open\n                                                    to work\n                                                    remotely</mat-checkbox>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <label class=\"label\">Work Authorization</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <h6>Are you legally authorized to work\n                                                    in\n                                                    the United\n                                                    States</h6>\n                                            </div>\n                                            <div class=\"column\">\n                                                <mat-radio-group formControlName=\"legallyauthorized\">\n                                                    <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                                                    <mat-radio-button value=\"No\">No</mat-radio-button>\n                                                </mat-radio-group>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <h6>Do you or will you require\n                                                    sponsorship\n                                                    for a US\n                                                    employment visa</h6>\n                                            </div>\n                                            <div class=\"column\">\n                                                <mat-radio-group formControlName=\"requiresponsorship\">\n                                                    <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                                                    <mat-radio-button value=\"No\">No</mat-radio-button>\n                                                </mat-radio-group>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                            </div>\n                                            <div class=\"column\">\n                                            </div>\n                                        </div>\n\n                                    </mat-tab>\n                                    <mat-tab label=\"Social\">\n                                        <div class=\"columns\">\n                                            <div class=\"column\">&nbsp;</div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                <input matInput placeholder=\"LinkedIn url\" type=\"url\"\n                                                        formControlName=\"linkedinurl\">\n                                                    <span matPrefix>http://&nbsp;</span>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <input matInput placeholder=\"Website url\"\n                                                        formControlName=\"websiteurl\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <input matInput placeholder=\"Twitter url\"\n                                                        formControlName=\"twitterurl\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"columns\">\n                                            <div class=\"column\">\n                                                <mat-form-field>\n                                                    <input matInput placeholder=\"Github url\"\n                                                        formControlName=\"githuburl\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                       \n                                    </mat-tab>\n                                </mat-tab-group>\n\n                                <table class=\"table is-fullwidth\">\n                                    <tr>\n                                        <td>\n                                            <div class=\"columns\">\n                                                <div class=\"column is-12\">\n                                                    <h5>Skills</h5>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"columns\">\n                                                <div class=\"column is-12\">\n\n                                                    <div class=\"columns\">\n                                                        <div class=\"column is-12\">\n                                                            <table class=\"table is-fullwidth\" formArrayName=\"skills\"\n                                                                style=\"background-color:rgb(245, 243, 243)\">\n                                                                <tr *ngIf=\"skillForms.controls == null\">\n                                                                    <td>\n                                                                        <h3>No skills added</h3>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr *ngFor=\"let skill of skillForms.controls; let i=index\"\n                                                                    [formGroupName]=\"i\">\n                                                                    <td style=\"border:0px; width: 650%;\">\n                                                                        <mat-form-field>\n                                                                            <mat-select placeholder=\"Choose skill\"\n                                                                                formControlName=\"skillname\">\n                                                                                <mat-option value=\".NET\">.NET</mat-option>\n                                                                                <mat-option value=\"Python\">Python</mat-option>\n                                                                                <mat-option value=\"Java\">Java</mat-option>\n                                                                            </mat-select>\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                    <td style=\"border:0px; width: 40%;\">\n                                                                        <mat-form-field>\n                                                                            <mat-select placeholder=\"Choose skill level\"\n                                                                                formControlName=\"skilllevel\">\n                                                                                <mat-option value=\"Expert\">Expert</mat-option>\n                                                                                <mat-option value=\"Intermediate\">Intermediate</mat-option>\n                                                                                <mat-option value=\"Beginner\">Beginner</mat-option>\n                                                                            </mat-select>\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                    <td style=\"border:0px; width: 5%;\">\n                                                                        <button mat-icon-button color=\"warn\" (click)=\"deleteSkill(i)\">\n                                                                            <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                                                                        </button>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td colspan=\"3\">\n                                                                        <table>\n                                                                            <tr>\n                                                                                <td>\n                                                                                    <button mat-button (click)=\"addSkill()\">\n                                                                                        <mat-icon aria-label=\"Add skill\">add_circle</mat-icon>\n                                                                                        Add another skill\n                                                                                    </button>\n                                                                                </td>\n                                                                            </tr>\n\n                                                                            <!-- <tr>\n                                                                                        <td style=\"width:80%;\">\n                                                                                            <mat-form-field>\n                                                                                                <input #NewSkill matInput placeholder=\"Skill name\"\n                                                                                                    required>\n                                                                                            </mat-form-field>\n                                                                                            <label #NewSkillError class=\"mat-error\" style=\"color:red;\"></label>\n                                                                                        </td>\n                                                                                        <td style=\"width:20%;\">\n                                                                                            <button mat-button (click)=\"saveSkill(NewSkill, NewSkillError)\">\n                                                                                                <mat-icon aria-label=\"Save skill\">save</mat-icon> Save\n                                                                                                skill\n                                                                                            </button>\n                                                                                        </td>\n                                                                                    </tr> -->\n                                                                        </table>\n\n                                                                    </td>\n                                                                </tr>\n                                                            </table>\n                                                            <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                                                <tr>\n                                                                    <td>\n                                                                        <mat-form-field>\n                                                                            <textarea matInput placeholder=\"Additional skills\"\n                                                                                formControlName=\"additionalskills\"></textarea>\n                                                                            <mat-hint align=\"start\"><strong>Add skills\n                                                                                    not in the drop down skill list.\n                                                                                    Separate with comma.</strong>\n                                                                            </mat-hint>\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n                                                            </table>\n                                                        </div>\n                                                        <div>\n                                                            &nbsp;\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n\n\n                                            <div class=\"columns\">\n                                                <div class=\"column is-12\">\n                                                    <div class=\"columns\">\n                                                        <div class=\"column is-12\">\n                                                            <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                                                <tr>\n                                                                    <td style=\"width:30%;\">\n                                                                        <mat-form-field>\n                                                                            <mat-select #AddType [(value)]=\"selected\">\n                                                                                <mat-option value=\"Project\">Add Project</mat-option>\n                                                                                <mat-option value=\"Title\">Add Title</mat-option>\n                                                                                <mat-option value=\"Company Name\">Add\n                                                                                    Company Name</mat-option>\n                                                                            </mat-select>\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                    <td style=\"width:70%;\">\n                                                                        <mat-form-field>\n                                                                            <input #ProjectName matInput placeholder=\"{{AddType.value}}\"\n                                                                                required>\n                                                                            <mat-error>{{message.valid}}</mat-error>\n                                                                        </mat-form-field>\n                                                                        <label #tempError class=\"mat-error\" style=\"color:red;\"></label>\n                                                                    </td>\n\n                                                                </tr>\n                                                            </table>\n                                                        </div>\n                                                        <div>\n                                                            <br>\n                                                            <button mat-fab color=\"primary\" [disabled]=\"ProjectName.invalid\"\n                                                                (click)=\"addExperience(AddType, ProjectName, tempError)\">\n                                                                <mat-icon aria-label=\"Example icon-button with a heart icon\">save</mat-icon>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n\n                                            <div class=\"columns\" formArrayName=\"experiences\">\n                                                <div class=\"column is-12\">\n                                                    <div class=\"columns\" *ngFor=\"let exp of experienceForms.controls; let i=index\"\n                                                        [formGroupName]=\"i\">\n                                                        <div class=\"column is-12\">\n                                                            <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                                                <tr>\n                                                                    <td style=\"border:0px;\" colspan=\"2\">\n                                                                        {{i+1}}\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput placeholder=\"Project\"\n                                                                                formControlName=\"project\">\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td style=\"border:0px;\" colspan=\"2\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput placeholder=\"Title\"\n                                                                                formControlName=\"title\">\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td style=\"border:0px;\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput placeholder=\"Company\"\n                                                                                formControlName=\"company\">\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                    <td style=\"border:0px;\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput placeholder=\"Location\"\n                                                                                formControlName=\"location\" class=\"google-place-input\"\n                                                                                google-place (onSelect)=\"setexperienceAddress($event, experiencelocation)\">\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td style=\"border:0px;\">\n                                                                        <mat-form-field>\n                                                                            <input matInput [matDatepicker]=\"picker\"\n                                                                                formControlName=\"fromdate\" placeholder=\"From\"\n                                                                                disabled>\n                                                                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                                                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                    <td style=\"border:0px;\">\n                                                                        <mat-form-field>\n                                                                            <input matInput [matDatepicker]=\"dp3\"\n                                                                                formControlName=\"todate\" placeholder=\"To\"\n                                                                                disabled>\n                                                                            <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n                                                                            <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n                                                                        </mat-form-field>\n                                                                        <mat-checkbox formControlName=\"currentlyemployed\">Currently\n                                                                            employed</mat-checkbox>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td style=\"border:0px;\" colspan=\"2\">\n                                                                        <mat-form-field>\n                                                                            <textarea matInput placeholder=\"Project description\"\n                                                                                formControlName=\"projectdescription\"></textarea>\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n\n                                                            </table>\n                                                        </div>\n                                                        <div>\n                                                            <br>\n                                                            <button mat-fab color=\"warn\" (click)=\"openDialog('experience', i)\"\n                                                                matTooltip=\"Delete experience\">\n                                                                <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                                                            </button>\n                                                            <br><br>\n                                                            <!-- <button mat-fab color=\"primary\" (click)=\"openDialog('experience',-1)\">\n                                                                        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n                                                                    </button> -->\n\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"columns\">\n                                                <div class=\"column is-12\">\n                                                    <h5>Education</h5>\n                                                </div>\n                                            </div>\n\n\n\n                                            <div class=\"columns\">\n                                                <div class=\"column is-12\">\n                                                    <div class=\"columns\">\n                                                        <div class=\"column is-12\">\n                                                            <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                                                <tr>\n                                                                    <td style=\"width:30%;\">\n                                                                        School Name\n                                                                    </td>\n                                                                    <td style=\"width:70%;\">\n                                                                        <mat-form-field>\n                                                                            <input #SchoolName matInput placeholder=\"School Name\"\n                                                                                required>\n                                                                        </mat-form-field>\n                                                                        <label #SchoolNameError class=\"mat-error\" style=\"color:red;\"></label>\n                                                                    </td>\n\n                                                                </tr>\n                                                            </table>\n                                                        </div>\n                                                        <div>\n                                                            <br>\n                                                            <button mat-fab color=\"primary\" (click)=\"addSchool(SchoolName, SchoolNameError)\">\n                                                                <mat-icon aria-label=\"Example icon-button with a heart icon\">save</mat-icon>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n\n                                            <div class=\"columns\" formArrayName=\"educationalqualifications\">\n                                                <div class=\"column is-12\">\n                                                    <div class=\"columns\" *ngFor=\"let school of educationalqualificationsForms.controls; let i=index\"\n                                                        [formGroupName]=\"i\">\n                                                        <div class=\"column is-12\">\n                                                            <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                                                <tr>\n                                                                    <td style=\"border:0px;\" colspan=\"2\">\n                                                                        {{i+1}}\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput placeholder=\"College / University name\"\n                                                                                formControlName=\"collegeuniversityname\">\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td style=\"border:0px;\" colspan=\"2\">\n                                                                        <mat-form-field>\n                                                                            <input matInput [matDatepicker]=\"dateofcompletionpicker\"\n                                                                                formControlName=\"dateofcompletion\"\n                                                                                placeholder=\"Date of completion\"\n                                                                                disabled>\n                                                                            <mat-datepicker-toggle matSuffix [for]=\"dateofcompletionpicker\"></mat-datepicker-toggle>\n                                                                            <mat-datepicker #dateofcompletionpicker\n                                                                                disabled=\"false\"></mat-datepicker>\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td style=\"border:0px;\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput placeholder=\"Degree Type\"\n                                                                                formControlName=\"degreetype\">\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                    <td style=\"border:0px;\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput placeholder=\"Major Field of study\"\n                                                                                formControlName=\"majorfieldofstudy\">\n                                                                        </mat-form-field>\n                                                                    </td>\n                                                                </tr>\n\n                                                            </table>\n                                                        </div>\n                                                        <div>\n                                                            <br>\n                                                            <button mat-fab color=\"warn\" (click)=\"openDialog('education', i)\"\n                                                                matTooltip=\"Delete education\">\n                                                                <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"columns\">\n                                                <div class=\"column is-12\">\n                                                    <button mat-raised-button color=\"primary\" [disabled]=\"myForm.invalid || state !== 'modified'\">\n                                                        <mat-icon aria-label=\"Save resume\">save</mat-icon> Save Resume\n                                                    </button>\n                                                    <a *ngIf=\"state === 'synced'\" mat-button routerLink=\".\"><i class=\"material-icons\">check_circle_outline</i>\n                                                        Resume saved.</a>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n\n\n\n                            </mat-card>\n\n\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/ui/addresume/addresume.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/addresume/addresume.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  display: block; }\n\n.example-form {\n  min-width: 500px;\n  max-width: 1500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.content table td {\n  border: 0px; }\n"

/***/ }),

/***/ "./src/app/ui/addresume/addresume.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/addresume/addresume.component.ts ***!
  \*****************************************************/
/*! exports provided: AddresumeComponent, DeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddresumeComponent", function() { return AddresumeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialog", function() { return DeleteDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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






var AddresumeComponent = /** @class */ (function () {
    function AddresumeComponent(fb, afs, snackBar, dialog, activatedRoute, router, zone) {
        //this.resumename = this.revisedRandId();
        this.fb = fb;
        this.afs = afs;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.zone = zone;
        this.typesOfJobs = ['Full time employee', 'Contractor', 'Intern'];
        this.skillList = ['.NET', 'Python', 'Django'];
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = true;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.horizontalPosition = 'left';
        this.verticalPosition = 'bottom';
        this.selected = 'Project';
        this.title = 'Places';
    }
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    AddresumeComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            _this.myForm.controls['location'].setValue(addrObj['formatted_address']);
        });
    };
    AddresumeComponent.prototype.setexperienceAddress = function (addrObj, x) {
        var _this = this;
        console.log('in setexperienceAddress');
        console.log(' caller : ' + x.value);
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            //this.myForm.controls['location'].setValue(addrObj['formatted_address'];
            x.setValue(addrObj['formatted_address']);
        });
    };
    AddresumeComponent.prototype.getFirestoreId = function () {
        return this.afs.createId();
    };
    AddresumeComponent.prototype.revisedRandId = function () {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    };
    AddresumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.resumename = params['jid'];
        });
        if (this.resumename == undefined) {
            this.resumename = this.getFirestoreId();
            this.navigateToFoo();
        }
        this.myForm = this.fb.group({
            _id: [this.resumename],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            miniresume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            jobsearchstatus: [''],
            jobtype: [''],
            desiredannualsalary: [''],
            desiredlocation: [''],
            opentoworkremotely: [''],
            legallyauthorized: [''],
            requiresponsorship: [''],
            linkedinurl: [''],
            websiteurl: [''],
            twitterurl: [''],
            githuburl: [''],
            skills: this.fb.array([]),
            additionalskills: [''],
            //phones: this.fb.array([]),
            experiences: this.fb.array([]),
            educationalqualifications: this.fb.array([])
        });
        //this.myDoc = this.afs.doc('contacts/test2').valueChanges();
        this.myDoc = this.afs.doc('resume/' + this.resumename).valueChanges();
        this.preloadData();
    };
    AddresumeComponent.prototype.preloadData = function () {
        var _this = this;
        console.log('createId: ' + this.afs.createId());
        this.state = 'loading';
        //this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').valueChanges().pipe(
        this.afs.doc('resume/' + this.resumename).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            //this.myForm.patchValue(data);
            if (data) {
                console.log(JSON.stringify(data));
                _this.myForm.controls['name'].setValue(data['name']);
                _this.myForm.controls['location'].setValue(data['location']);
                _this.myForm.controls['miniresume'].setValue(data['miniresume']);
                _this.myForm.controls['role'].setValue(data['role']);
                _this.myForm.controls['email'].setValue(data['email']);
                _this.myForm.controls['message'].setValue(data['message']);
                _this.myForm.controls['jobsearchstatus'].setValue(data['jobsearchstatus']);
                _this.myForm.controls['jobtype'].setValue(data['jobtype']);
                _this.myForm.controls['desiredannualsalary'].setValue(data['desiredannualsalary']);
                _this.myForm.controls['desiredlocation'].setValue(data['desiredlocation']);
                _this.myForm.controls['opentoworkremotely'].setValue(data['opentoworkremotely']);
                _this.myForm.controls['legallyauthorized'].setValue(data['legallyauthorized']);
                _this.myForm.controls['requiresponsorship'].setValue(data['requiresponsorship']);
                if (data['skills']) {
                    console.log('skills : ' + JSON.stringify(data['skills']));
                    //console.log('skills empty check : ' + Object.keys(data['skills']).length)
                    data['skills'].forEach(function (item) {
                        var skill = _this.fb.group({
                            skillname: [item['skillname']],
                            skilllevel: [item['skilllevel']]
                        });
                        _this.skillForms.push(skill);
                    });
                }
                else {
                    console.log('no skills');
                    //there are no skills available in DB add three skills as default
                }
                _this.myForm.controls['additionalskills'].setValue(data['additionalskills']);
                if (data['experiences']) {
                    console.log('experiences : ' + JSON.stringify(data['experiences']));
                    data['experiences'].forEach(function (item) {
                        var experience = _this.fb.group({
                            project: [item['project']],
                            title: [item['title']],
                            company: [item['company']],
                            fromdate: [new Date(_this.toDateTime(item['fromdate'] ? item['fromdate']['seconds'] : ''))],
                            todate: [new Date(_this.toDateTime(item['todate'] ? item['todate']['seconds'] : ''))],
                            currentlyemployed: [item['currentlyemployed']],
                            location: [item['location']],
                            projectdescription: [item['projectdescription']]
                        });
                        _this.experienceForms.push(experience);
                    });
                }
                else {
                    console.log('no experience found');
                }
                if (data['educationalqualifications']) {
                    console.log('educationalqualifications : ' + JSON.stringify(data['educationalqualifications']));
                    data['educationalqualifications'].forEach(function (item) {
                        var education = _this.fb.group({
                            collegeuniversityname: [item['collegeuniversityname']],
                            dateofcompletion: [new Date(_this.toDateTime(item['dateofcompletion'] ? item['dateofcompletion']['seconds'] : ''))],
                            degreetype: [item['degreetype']],
                            majorfieldofstudy: [item['majorfieldofstudy']],
                        });
                        _this.educationalqualificationsForms.push(education);
                    });
                }
                else {
                    console.log('no educationalqualifications found');
                }
                //this.isAdding = false;
            }
            else {
                //this.isAdding = true;
                var i;
                for (i = 0; i < 2; i++) {
                    var skill = _this.fb.group({
                        skillname: '',
                        skilllevel: ''
                    });
                    _this.skillForms.push(skill);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    AddresumeComponent.prototype.toDateTime = function (utcSeconds) {
        var returndate = "";
        if (utcSeconds != null) {
            var myDate = new Date(utcSeconds * 1000);
            returndate = myDate.toLocaleString();
        }
        return returndate;
    };
    AddresumeComponent.prototype.navigateToFoo = function () {
        // changes the route without moving from the current view or
        // triggering a navigation event
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                'jid': this.resumename
            },
            queryParamsHandling: 'merge',
            // preserve the existing query params in the route
            skipLocationChange: false
            // do not trigger navigation
        });
    };
    AddresumeComponent.prototype.initSkill = function () {
        console.log("in initSkill");
        // initialize our address
        return this.fb.group({
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            skill: ['']
        });
    };
    AddresumeComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarConfig"]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);
    };
    AddresumeComponent.prototype.openDialog = function (deltype, todelete) {
        //const dialogRef = this.dialog.open(DialogContentExampleDialog);
        var _this = this;
        var dialogRef = this.dialog.open(DeleteDialog, {
            data: {
                deletetype: deltype,
                displaytext: 'todelete id: ' + todelete
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            console.log('####' + result);
            if (result == true) {
                console.log('in result check true');
                switch (deltype) {
                    case "experience":
                        console.log('in switch case');
                        _this.deleteExperience(todelete);
                        break;
                    case "education":
                        _this.deleteEducation(todelete);
                        break;
                }
            }
        });
    };
    Object.defineProperty(AddresumeComponent.prototype, "skillForms", {
        get: function () {
            return this.myForm.get('skills');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddresumeComponent.prototype, "experienceForms", {
        get: function () {
            return this.myForm.get('experiences');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddresumeComponent.prototype, "educationalqualificationsForms", {
        get: function () {
            return this.myForm.get('educationalqualifications');
        },
        enumerable: true,
        configurable: true
    });
    AddresumeComponent.prototype.changeHandler = function (e) {
        // console.log(e)
        this.state = e;
    };
    AddresumeComponent.prototype.addSkill = function () {
        console.log('in add skill');
        try {
            var skill = this.fb.group({
                skillname: [],
                skilllevel: []
            });
            this.skillForms.push(skill);
        }
        catch (err) {
            console.error(err);
        }
    };
    AddresumeComponent.prototype.saveSkill = function (skillName, skilloutText) {
        console.log("skillName.value : " + skillName.value);
        if (skillName.value.trim() != '') {
            var skill = this.fb.group({
                skillname: [skillName.value],
                skilllevel: ['']
            });
            this.skillForms.push(skill);
        }
    };
    AddresumeComponent.prototype.addExperience = function (addtypevalue, input, outText) {
        console.log('####' + input.value);
        console.log('@@@' + addtypevalue.value);
        if (input.value.trim() != '') {
            var experience = this.fb.group({
                project: [input.value],
                title: [],
                company: [],
                location: [],
                fromdate: [],
                todate: [],
                currentlyemployed: [],
                projectdescription: []
            });
            this.experienceForms.push(experience);
        }
        else {
            //console.log('Project name required!!')
            //outText.textContent='Project name required!!'
        }
    };
    AddresumeComponent.prototype.addSchool = function (SchoolName, SchoolNameError) {
        if (SchoolName.value.trim() != '') {
            var school = this.fb.group({
                collegeuniversityname: [SchoolName.value],
                dateofcompletion: [],
                degreetype: [],
                majorfieldofstudy: []
            });
            this.educationalqualificationsForms.push(school);
        }
        else {
            //console.log('Project name required!!')
            //outText.textContent='Project name required!!'
        }
    };
    AddresumeComponent.prototype.deleteExperience = function (i) {
        console.log('in deleteExperience: ' + i);
        this.experienceForms.removeAt(i);
        this.openSnackBar('Experience deleted.', 'Succes');
    };
    AddresumeComponent.prototype.deleteSkill = function (i) {
        //console.log('deleteStill @ ')
        this.skillForms.removeAt(i);
    };
    AddresumeComponent.prototype.deleteEducation = function (i) {
        this.educationalqualificationsForms.removeAt(i);
        this.openSnackBar('School deleted.', 'Succes');
    };
    AddresumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'addresume',
            template: __webpack_require__(/*! ./addresume.component.html */ "./src/app/ui/addresume/addresume.component.html"),
            styles: [__webpack_require__(/*! ./addresume.component.scss */ "./src/app/ui/addresume/addresume.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AddresumeComponent);
    return AddresumeComponent;
}());

var DeleteDialog = /** @class */ (function () {
    function DeleteDialog(data) {
        this.data = data;
    }
    DeleteDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./dialog-content-example-dialog.html */ "./src/app/ui/addresume/dialog-content-example-dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DeleteDialog);
    return DeleteDialog;
}());



/***/ }),

/***/ "./src/app/ui/addresume/dialog-content-example-dialog.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui/addresume/dialog-content-example-dialog.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title><i class=\"material-icons\">thumbs_up_down</i> Confirm Delete</h2>\n\n\n<mat-dialog-content class=\"mat-typography\">\n    <h1>{{data.displaytext}}</h1>\n    <h2>{{data.deletetype}}</h2>\n    <ul>\n        <li>\n          <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n        </li>\n      </ul>\n  <h3>Are you sure?</h3>\n  <p> Vivamus varius lacus id elit venenatis aliquet. Duis vitae libero nisl. Sed vitae ligula id nisi ullamcorper vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique et sapien eget egestas. Proin gravida erat et turpis tincidunt, quis consectetur tellus aliquet. Vivamus eu sapien diam. Proin sit amet convallis magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu nec ante auctor ultricies. Sed efficitur cursus rutrum. In molestie lectus eu nulla posuere ultricies. Nunc porta nunc vulputate, imperdiet tortor ac, sollicitudin ante. Donec in vulputate augue, a tempus purus. Aliquam posuere porttitor sodales. </p>\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Confirm Delete</button>\n</mat-dialog-actions>\n\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/ui/fire-form.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/fire-form.directive.ts ***!
  \*******************************************/
/*! exports provided: FireFormDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireFormDirective", function() { return FireFormDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FireFormDirective = /** @class */ (function () {
    function FireFormDirective(fb, afs) {
        this.fb = fb;
        this.afs = afs;
        // Outputs
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FireFormDirective.prototype.ngOnInit = function () {
        this.preloadData();
        this.autoSave();
    };
    // Loads initial form data from Firestore
    FireFormDirective.prototype.preloadData = function () {
        var _this = this;
        console.log('in preloadData');
        this.state = 'loading';
        this.docRef = this.getDocRef(this.path);
        this.docRef
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (doc) {
            if (doc) {
                //console.log('preloadData: ' + JSON.stringify(doc))
                //this.formGroup.patchValue(doc);
                // this.formGroup.patchValue({
                //   email: 'nimeshmarker@path.com',
                //   career: 'Clown',
                //   bio: 'patch bio',
                //   skillArrayForm:  [ 
                //     { 
                //       level: "Advanced", 
                //       skill: "Juggler" 
                //     }, 
                //     { 
                //       level: "Medium", 
                //       skill: "Wizard" 
                //     } 
                //   ] 
                // })
                console.log('###email: ' + doc['email']);
                console.log('@@' + JSON.stringify(doc['skillArrayForm']));
                _this.formGroup.setValue({
                    candidatename: doc['candidatename'],
                    email: doc['email'],
                    career: doc['career'],
                    bio: doc['bio']
                    //skillarrayjson: JSON.stringify(doc['skillArrayForm']),
                    //skillArrayForm: this.formGroup.setValue(doc['skillArrayForm'])
                    //skillArrayForm: JSON.stringify(doc['skillArrayForm'])
                    //skillArrayForm: this.getskillForms.setValue([ { level: "Advanced", skill: "Juggler" }])
                    //skillArrayForm: this.formGroup.setValue([ { level: "Advanced", skill: "Juggler" }, { level: "Medium", skill: "Juggler" }, { level: "Beginner", skill: "Juggler" } ])
                    //skillArrayForm: this.testparse(doc['skillArrayForm'])
                });
                console.log(_this.formGroup);
                _this.formGroup.markAsPristine();
                _this.state = 'synced';
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    Object.defineProperty(FireFormDirective.prototype, "getskillForms", {
        get: function () {
            return this.formGroup.get('skillArrayForm');
        },
        enumerable: true,
        configurable: true
    });
    FireFormDirective.prototype.addArray = function () {
        var phone = this.fb.group({
            level: ['level'],
            skill: ['skill']
        });
        var control = this.formGroup.controls['skillArrayForm'];
        //control.setValue(phone)
        console.log(control);
    };
    FireFormDirective.prototype.testparse = function (skillarray) {
        console.log('typeof: ' + typeof skillarray);
        console.log('isarray: ' + Object(util__WEBPACK_IMPORTED_MODULE_4__["isArray"])(skillarray));
        console.log('in testparse: ' + skillarray);
        for (var temp in skillarray) {
            console.log('temp:' + temp.toString() + ' : ' + skillarray[temp.toString()]['level'] + ' : ' + skillarray[temp.toString()]['skill']);
            var phone = this.fb.group({
                level: [skillarray[temp.toString()]['level']],
                skill: [skillarray[temp.toString()]['skill']]
            });
            //this.getskillForms.push(phone)    
            this.formGroup.setValue(phone);
        }
        //return this.formGroup.setValue([ { level: "Advanced", skill: "Juggler" }, { level: "Medium", skill: "Juggler" }, { level: "Beginner", skill: "Juggler" } ])
    };
    // Autosaves form changes
    FireFormDirective.prototype.autoSave = function () {
        var _this = this;
        this.formSub = this.formGroup.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (change) {
            _this.state = 'modified';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (change) {
            if (_this.formGroup.valid && _this._state === 'modified') {
                _this.setDoc();
            }
        }))
            .subscribe();
    };
    // Intercept form submissions to perform the document write
    FireFormDirective.prototype.onSubmit = function (e) {
        this.setDoc();
    };
    // Determines if path is a collection or document
    FireFormDirective.prototype.getDocRef = function (path) {
        if (path.split('/').length % 2) {
            return this.afs.doc(path + "/" + this.afs.createId());
        }
        else {
            return this.afs.doc(path);
        }
    };
    // Writes changes to Firestore
    FireFormDirective.prototype.setDoc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.docRef.set(this.formGroup.value, { merge: true })];
                    case 1:
                        _a.sent();
                        this.state = 'synced';
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.formError.emit(err_1.message);
                        this.state = 'error';
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(FireFormDirective.prototype, "state", {
        // Setter for state changes
        set: function (val) {
            this._state = val;
            this.stateChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    FireFormDirective.prototype.ngOnDestroy = function () {
        this.formSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FireFormDirective.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], FireFormDirective.prototype, "formGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FireFormDirective.prototype, "stateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FireFormDirective.prototype, "formError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('ngSubmit', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FireFormDirective.prototype, "onSubmit", null);
    FireFormDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[fireForm]'
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FireFormDirective);
    return FireFormDirective;
}());



/***/ }),

/***/ "./src/app/ui/google-places.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/google-places.directive.ts ***!
  \***********************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GooglePlacesDirective = /** @class */ (function () {
    function GooglePlacesDirective(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    GooglePlacesDirective.prototype.getFormattedAddress = function (place) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        console.log(JSON.stringify(place));
        var location_obj = {};
        location_obj['response'] = JSON.stringify(place);
        for (var i in place.address_components) {
            var item = place.address_components[i];
            //let geometry = place.geometry;
            //console.log(geometry)
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    };
    GooglePlacesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //Emit the new address object for the updated place
            _this.onSelect.emit(_this.getFormattedAddress(autocomplete.getPlace()));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GooglePlacesDirective.prototype, "onSelect", void 0);
    GooglePlacesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[google-place]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GooglePlacesDirective);
    return GooglePlacesDirective;
}());



/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\" style=\"min-height:500px;\">\n  <div class=\"column is-10 is-offset-1\">\n    <div class=\"columns\">\n      <div class=\"column is-12 freehand\">Job search</div>\n    </div>\n    <div class=\"columns is-gapless  is-centered\">\n      <div class=\"column is-6\">\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Job search term</mat-label>\n          <input matInput placeholder=\"Placeholder\">\n          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n              <mat-icon>close</mat-icon>\n            </button>\n          <!-- <mat-icon matSuffix>next_week</mat-icon> -->\n          <mat-hint>Ex: Python, Java, MongoDB</mat-hint>\n        </mat-form-field>\n      </div>\n      <div class=\"column is-5\">\n        <mat-form-field appearance=\"fill\">\n          <mat-label>\n            <mat-icon matSuffix>place</mat-icon>Location\n          </mat-label>\n          <mat-select [(value)]=\"selected\">\n            <mat-option>None</mat-option>\n            <mat-option value=\"option1\">San Francisco</mat-option>\n            <mat-option value=\"option2\">San Jose</mat-option>\n          </mat-select>\n\n          <mat-hint>Hint</mat-hint>\n        </mat-form-field>\n      </div>\n      <div class=\"column is-1\">\n          <p style=\"padding-left:20px;\">\n            <button mat-fab color=\"basic\">Search</button>\n          </p>\n      </div>\n    </div>\n\n    <!-- <div class=\"columns is-centered\">\n      <div class=\"column is-1\">\n        <button class=\"example-full-width\" mat-raised-button>Search</button>\n      </div>\n    </div> -->\n\n    <div class=\"columns is-centered\">\n      <div class=\"column half\">\n\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <mat-card-title>CANDIDATES</mat-card-title>\n          </mat-card-header>\n          <mat-card-actions>\n            <button mat-button [routerLink]=\"['/searchcandidates']\">View all candidates</button>\n            <button mat-raised-button color=\"accent\" [routerLink]=\"['/onboarding/welcome']\">ADD RESUME <i class=\"material-icons\">note_add</i></button>\n          </mat-card-actions>\n          <mat-card-content>\n            <p>\n              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n              bred for hunting.\n            </p>\n          </mat-card-content>\n\n        </mat-card>\n\n      </div>\n      <div class=\"column half\">\n\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <mat-card-title>JOBS</mat-card-title>\n          </mat-card-header>\n          <mat-card-actions>\n            <button mat-button>View all jobs</button>\n            <button mat-raised-button [routerLink]=\"['/postjob']\" color=\"accent\">POST JOB <i class=\"material-icons\">add_circle_outline</i></button>\n          </mat-card-actions>\n          <mat-card-content>\n            <p>\n              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n              bred for hunting.\n            </p>\n          </mat-card-content>\n\n        </mat-card>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n\n<div class=\"columns\">\n  <div class=\"column is-10 is-offset-1\">\n\n\n\n    <h1>#### Welcome to Firestarter</h1>\n\n    <a href=\"https://slackin-pbfjhfxnsa.now.sh\"><img src=\"https://slackin-pbfjhfxnsa.now.sh/badge.svg\"></a><br>\n    <a href=\"https://circleci.com/gh/codediodeio/angular-firestarter\"><img src=\"https://circleci.com/gh/codediodeio/angular-firestarter.svg?style=svg\"></a>\n\n    <p>I am a Progressive Web App (PWA) built with Angular and Firebase.</p>\n\n    <h2>Have Questions?</h2>\n\n    <br>\n    <a [routerLink]=\"['/adlisting']\">\n      Ad listing\n    </a>\n    <br>\n    <a [routerLink]=\"['/postjob']\">\n      Post Job\n    </a>\n    <br>\n    <a [routerLink]=\"['/addresume']\">\n      Add Resume\n    </a>\n    <br>\n    <a [routerLink]=\"['/viewresume']\">\n      View Resume\n    </a>\n\n    <br>\n    <a [routerLink]=\"['/resumelist']\">\n      List Resume\n    </a>\n\n    <br>\n    <a [routerLink]=\"['/profile']\">\n      Profile\n    </a>\n    <br>\n    <a [routerLink]=\"['/profileresume']\">\n      Profile Resume\n    </a>\n    <br>\n    <br>\n    <a [routerLink]=\"['/onboarding/welcome']\">on boarding welcome</a>\n    <br>\n    <br>\n    <a [routerLink]=\"['/searchcandidates']\">search candidates</a>\n    <br>\n    <br>\n    <br>\n    <a [routerLink]=\"['/onboarding/builder']\">resume builder</a>\n    <br>\n    <p>\n      <i class=\"fa fa-slack fa-lg\"></i> Let's talk on the <a target=\"blank\" href=\"https://goo.gl/qF8Q5r\">\n        Angular Firebase Developers Slack Team\n      </a>\n    </p>\n\n    <h2>Free Open Source Screencasts</h2>\n\n    <p>\n      <i class=\"fa fa-youtube fa-lg\"></i> Subscribe to the <a href=\"https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA\">AngularFirebase\n        YouTube Channel</a> for weekly lessons.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  display: block; }\n\n.example-full-width {\n  width: 100%; }\n\n.freehand {\n  font-family: 'Gochi Hand', cursive;\n  font-size: 40px; }\n"

/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.ts ***!
  \*****************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/ui/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/ui/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n"

/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/ui/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n        <a class=\"navbar-item\" routerLink=\"/\">\n            <img src=\"assets/images/angularfirebase.png\" width=\"30px\" alt=\"Firestarter Angular4 Demo App\" /> FireStarter\n        </a>\n\n        <a id=\"navToggle\" role=\"button\" class=\"navbar-burger\" (click)=\"toggleCollapse()\" [ngClass]=\"{'is-active': show}\">\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n        </a>\n        \n    </div>\n\n      \n    <!-- User NOT logged in -->\n    <ng-template #guest>\n    <!-- <p class=\"card-text\">Login to get started...</p> -->\n    <div class=\"navbar-end\">\n        <a class=\"navbar-item\" routerLink=\"/login\">Login</a>\n        <a class=\"navbar-item\" routerLink=\"/ssr\">SSR Universal</a>\n        <a class=\"navbar-item\" routerLink=\"/notes\">Firestore</a>\n        <a class=\"navbar-item\" routerLink=\"/uploads\">File Uploads</a>\n    </div>\n    </ng-template>\n    \n    <!-- User logged in -->\n    <ng-template #authenticated>\n    <div class=\"navbar-end\" *ngIf=\"auth.user | async as user\">\n        <a class=\"navbar-item\" [matMenuTriggerFor]=\"menu\">Howdy, <i class=\"material-icons\">\n            account_circle\n            </i>{{ user.displayName }}</a>\n        \n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>dialpad</mat-icon>\n              <span>Redial</span>\n            </button>\n            <button mat-menu-item disabled>\n              <mat-icon>voicemail</mat-icon>\n              <span>Check voicemail</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>notifications_off</mat-icon>\n              <span>Disable alerts</span>\n            </button>\n          </mat-menu>\n        <!-- <a class=\"navbar-item mat-icon-button\" [matMenuTriggerFor]=\"notifications\"><i class=\"material-icons\">\n            notification_important\n            </i></a>  \n        <mat-menu #notifications=\"matMenu\"></mat-menu> -->\n        <a class=\"navbar-item\" (click)=\"logout()\">Logout <i class=\"material-icons\">\n            exit_to_app\n            </i></a>\n    </div>\n    </ng-template>\n    \n    <div class=\"navbar-menu\" [ngClass]=\"{'is-active': show}\">\n        <div class=\"navbar-item\"  *ngIf=\"auth.user | async; then authenticated else guest\">\n            \n                    <!-- template will replace this div -->\n            \n        </div>\n    </div>\n</nav>\n\n  \n  "

/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  border-bottom: 1px solid #E4E4E4; }\n\n.navbar-brand {\n  padding: 0 3em 0 2em; }\n\n.navbar-menu {\n  padding-right: 3em; }\n"

/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.ts ***!
  \***************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(auth) {
        this.auth = auth;
        this.show = false;
    }
    MainNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    MainNavComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/ui/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/ui/main-nav/main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notify.msg | async as msg\" class=\"notification\"\n  [ngClass]=\"{ \n    'is-danger': msg.style == 'error',\n    'is-success': msg.style == 'success',\n    'is-info': msg.style == 'info'\n  }\">\n  <button class=\"delete\" (click)=\"notify.clear()\"></button>\n  {{ msg.content }}\n</div>\n"

/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMessageComponent", function() { return NotificationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationMessageComponent = /** @class */ (function () {
    function NotificationMessageComponent(notify) {
        this.notify = notify;
    }
    NotificationMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification-message',
            template: __webpack_require__(/*! ./notification-message.component.html */ "./src/app/ui/notification-message/notification-message.component.html"),
            styles: [__webpack_require__(/*! ./notification-message.component.scss */ "./src/app/ui/notification-message/notification-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"]])
    ], NotificationMessageComponent);
    return NotificationMessageComponent;
}());



/***/ }),

/***/ "./src/app/ui/onboarding/builder/builder.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/builder/builder.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Linear Vertical Stepper Demo using a single form</h3>\n<form [formGroup]=\"formGroup\" profileResumeForm path=\"location/500\" (stateChange)=\"changeHandler($event)\">\n  <mat-vertical-stepper #linearVerticalStepper=\"matVerticalStepper\" formArrayName=\"formArray\" [linear]=\"false\">\n    <mat-step formGroupName=\"0\" [stepControl]=\"formArray?.get([0])\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <mat-label>First name</mat-label>\n        <input matInput formControlName=\"firstNameFormCtrl\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Last name</mat-label>\n        <input matInput formControlName=\"lastNameFormCtrl\" required>\n        <mat-error>This field is required</mat-error>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-step>\n\n    <mat-step formGroupName=\"1\" [stepControl]=\"formArray?.get([1])\">\n      <ng-template matStepLabel>\n        <div>Fill out your email address</div>\n      </ng-template>\n      <mat-form-field>\n        <mat-label>Email address</mat-label>\n        <input matInput formControlName=\"emailFormCtrl\">\n        <mat-error>The input is invalid.</mat-error>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-step>\n\n    <mat-step>\n      <ng-template matStepLabel>Confirm your information</ng-template>\n      Everything seems correct.\n      <div>\n        <button mat-button>Done</button>\n        <button type=\"button\" mat-button (click)=\"linearVerticalStepper.reset()\">Reset</button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n</form>\n\n"

/***/ }),

/***/ "./src/app/ui/onboarding/builder/builder.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/builder/builder.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/onboarding/builder/builder.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/onboarding/builder/builder.component.ts ***!
  \************************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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




var BuilderComponent = /** @class */ (function () {
    function BuilderComponent(_formBuilder, afs, zone) {
        this._formBuilder = _formBuilder;
        this.afs = afs;
        this.zone = zone;
        this.fruits = ["apple", "pear", "kiwi", "banana", "grape", "strawberry", "grapefruit", "melon", "mango", "plum"];
        this.steps = [
            { label: 'Confirm your name', content: 'Last name, First name.' },
            { label: 'Confirm your contact information', content: '123-456-7890' },
            { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
            { label: 'You are now done', content: 'Finished!' }
        ];
    }
    Object.defineProperty(BuilderComponent.prototype, "formArray", {
        /** Returns a FormArray with the name 'formArray'. */
        get: function () { return this.formGroup.get('formArray'); },
        enumerable: true,
        configurable: true
    });
    BuilderComponent.prototype.ngOnInit = function () {
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    firstNameFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    lastNameFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                }),
                this._formBuilder.group({
                    emailFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
                }),
            ])
        });
        this.myDoc = this.afs.doc('location/500').valueChanges();
        this.preloadData();
        this.nameFormGroup = this._formBuilder.group({
            firstNameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastNameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.emailFormGroup = this._formBuilder.group({
            emailCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
        });
    };
    BuilderComponent.prototype.changeHandler = function (e) {
        console.log(e);
        //this.state = e;
    };
    BuilderComponent.prototype.preloadData = function () {
        var _this = this;
        this.state = 'loading';
        this.afs.doc('location/500').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            //this.myForm.patchValue(data);
            if (data) {
                console.log(JSON.stringify(data));
                _this.formGroup.controls['location'].setValue(data['location']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    BuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'builder',
            template: __webpack_require__(/*! ./builder.component.html */ "./src/app/ui/onboarding/builder/builder.component.html"),
            styles: [__webpack_require__(/*! ./builder.component.scss */ "./src/app/ui/onboarding/builder/builder.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/ui/onboarding/location/location.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/onboarding/location/location.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"myForm\" profileResumeForm path=\"location/1\" \n      (stateChange)=\"changeHandler($event)\">\n<div class=\"columns\">\n  <div class=\"column is-12\">\n    <div class=\"columns\">\n        <div class=\"column is-10 is-offset-1\">\n            <h1 class=\"head\">Welcome to HireMuse!</h1>\n            <h4>Let's start with your profile. This will help you succeed on HireMuse.</h4>\n        </div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column is-10 is-offset-1\">\n          <mat-card>\n              <mat-form-field class=\"example-full-width\">\n                  <mat-label>Current city, state or country</mat-label>\n                  <input \n                    #locationinput\n                    matInput\n                    formControlName=\"location\"\n                    type=\"text\"\n                    class=\"google-place-input\"\n                    google-place\n                    (onSelect)=\"setAddress($event)\"\n                    placeholder=\"Type to search..\">\n                  <mat-hint>Current location</mat-hint>\n\n              </mat-form-field>\n              <!-- Displaying the contents of the address object received from our event emitter -->\n              <!-- <ul style=\"list-style-type: none;\">\n                <li *ngFor=\"let key of addrKeys\">\n                  <span style=\"font-weight: bold\">{{key}}</span>: <span>{{addr[key]}}</span>\n                </li>\n              </ul> -->\n              <br><br><br>\n              <div class=\"columns is-mobile is-centered\">\n                <div class=\"column is-half\">\n                  <button class=\"example-full-width\" mat-raised-button color=\"primary\">Save & continue</button>\n                  <br><br>\n                  <a mat-button class=\"example-full-width\" [routerLink]=\"['/onboarding/looking']\">Skip for now >></a>\n                </div>\n              </div>\n                              \n          </mat-card>\n        </div>\n      </div>\n    </div>\n    \n</div>\n            \n</form>"

/***/ }),

/***/ "./src/app/ui/onboarding/location/location.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ui/onboarding/location/location.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.head {\n  font-family: 'IBM Plex Sans', sans-serif; }\n"

/***/ }),

/***/ "./src/app/ui/onboarding/location/location.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/location/location.component.ts ***!
  \**************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var LocationComponent = /** @class */ (function () {
    function LocationComponent(fb, afs, zone) {
        this.fb = fb;
        this.afs = afs;
        this.zone = zone;
        this.title = 'Places';
    }
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    LocationComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        //console.log(JSON.stringify(addrObj))
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            console.log(addrObj['formatted_address']);
            //this.myForm.controls['location'].setValue(addrObj)
            _this.myForm.controls['location'].setValue(addrObj['formatted_address']);
            //this.myForm.addControl('location', new FormControl('formatted_address'));
            _this.myForm.addControl('locationname', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](addrObj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            //this.state = 'modified';
        });
    };
    LocationComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            location: [''],
            chosenlocations: this.fb.array([])
        });
        this.myDoc = this.afs.doc('location/1').valueChanges();
        this.preloadData();
    };
    LocationComponent.prototype.changeHandler = function (e) {
        console.log(e);
        //this.state = e;
    };
    LocationComponent.prototype.locationprint = function (inVal) {
        console.log(inVal.value);
        this.state = 'modified';
        //console.log(locationname.value);
    };
    Object.defineProperty(LocationComponent.prototype, "chosenlocationForms", {
        get: function () {
            return this.myForm.get('chosenlocations');
        },
        enumerable: true,
        configurable: true
    });
    LocationComponent.prototype.preloadData = function () {
        var _this = this;
        this.state = 'loading';
        this.afs.doc('location/1').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            //this.myForm.patchValue(data);
            if (data) {
                console.log(JSON.stringify(data));
                _this.myForm.controls['location'].setValue(data['location']);
                //this.myForm.controls['locationname'].setValue(data['locationname'])
                if (data['chosenlocations']) {
                    data['chosenlocations'].forEach(function (item) {
                        var pickedlocation = _this.fb.group({
                            locale: [item['location']]
                        });
                    });
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/ui/onboarding/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/ui/onboarding/location/location.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/ui/onboarding/looking/looking.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/looking/looking.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column is-12\">\n    <div class=\"columns\">\n      <div class=\"column is-10 is-offset-1\">\n        <h1 class=\"head\">Resume onboarding</h1>\n      </div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column is-10 is-offset-1\">\n        <mat-card>\n\n\n\n          <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n            <mat-step [stepControl]=\"firstFormGroup\">\n              \n              <form [formGroup]=\"firstFormGroup\" profileResumeForm path=\"location/100\" (stateChange)=\"changeHandler($event)\">\n                <ng-template matStepLabel>Desired job location</ng-template>\n\n                <h5 class=\"hiremusefont\">Apply privately. No middlemen. Build your network and future team.</h5>\n                <mat-divider></mat-divider>\n                <br>\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Current city, state or country</mat-label>\n                    <input \n                      matInput\n                      formControlName=\"location\"\n                      type=\"text\"\n                      placeholder=\"Type to search..\">\n                    <mat-hint>Current location</mat-hint>\n                  </mat-form-field>\n                <!-- <div class=\"columns\">\n                  <div class=\"column is-5\">\n                    <mat-radio-group class=\"example-radio-group\">\n                      <mat-radio-button class=\"example-radio-button\" value=\"1\">Yes, Actively looking</mat-radio-button>\n                      <mat-radio-button class=\"example-radio-button\" value=\"2\">No, NOT actively</mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div> -->\n                <!-- <div class=\"columns is-mobile is-centered\">\n                        <div class=\"column is-5\">\n                          <button class=\"example-full-width\" mat-raised-button color=\"primary\">Save & continue</button>\n                          <br><br>\n                          <a mat-button class=\"example-full-width\" [routerLink]=\"['/onboarding/profile']\">Skip for now >></a>\n                        </div>\n                      </div> -->\n\n                <div>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n            <mat-step [stepControl]=\"secondFormGroup\">\n              <form [formGroup]=\"secondFormGroup\">\n                <ng-template matStepLabel>Fill out your address</ng-template>\n                <mat-form-field>\n                  <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n                </mat-form-field>\n                <div>\n                  <button mat-button matStepperPrevious>Back</button>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n            </mat-step>\n            <mat-step [stepControl]=\"thirdFormGroup\">\n              <form [formGroup]=\"thirdFormGroup\">\n                <ng-template matStepLabel>Fill out your address</ng-template>\n                <mat-form-field>\n                  <input matInput placeholder=\"Address\" formControlName=\"thirdCtrl\" required>\n                </mat-form-field>\n                <div>\n                  <button mat-button matStepperPrevious>Back</button>\n                  <button mat-button matStepperNext>Next</button>\n                </div>\n              </form>\n\n            </mat-step>\n            <mat-step>\n              <ng-template matStepLabel>Done</ng-template>\n              You are now done.\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button (click)=\"stepper.reset()\">Reset</button>\n              </div>\n            </mat-step>\n          </mat-vertical-stepper>\n        </mat-card>\n\n\n\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/ui/onboarding/looking/looking.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/looking/looking.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.example-radio-button {\n  margin: 5px; }\n\n.example-selected-value {\n  margin: 15px 0; }\n\n.example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/ui/onboarding/looking/looking.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/onboarding/looking/looking.component.ts ***!
  \************************************************************/
/*! exports provided: LookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookingComponent", function() { return LookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var LookingComponent = /** @class */ (function () {
    function LookingComponent(_formBuilder, afs, zone) {
        this._formBuilder = _formBuilder;
        this.afs = afs;
        this.zone = zone;
        this.isLinear = false;
    }
    LookingComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            location: ['']
        });
        this.myDoc = this.afs.doc('location/100').valueChanges();
        this.preloadData();
        this.firstFormGroup = this._formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LookingComponent.prototype.changeHandler = function (e) {
        console.log(e);
        //this.state = e;
    };
    LookingComponent.prototype.preloadData = function () {
        var _this = this;
        this.state = 'loading';
        this.afs.doc('location/100').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            //this.myForm.patchValue(data);
            if (data) {
                console.log(JSON.stringify(data));
                _this.firstFormGroup.controls['location'].setValue(data['location']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    LookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'looking',
            template: __webpack_require__(/*! ./looking.component.html */ "./src/app/ui/onboarding/looking/looking.component.html"),
            styles: [__webpack_require__(/*! ./looking.component.scss */ "./src/app/ui/onboarding/looking/looking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LookingComponent);
    return LookingComponent;
}());



/***/ }),

/***/ "./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column is-12\">\n    <div class=\"columns\">\n      <div class=\"column is-10 is-offset-1\">\n        <h1 class=\"head\">Profile basics.</h1>\n        <h4>Tell potential employers who you are and what you do.</h4>\n      </div>\n    </div>\n    <div class=\"columns\" style=\"min-height:500px;\">\n      <div class=\"column is-10 is-offset-1\">\n\n        <div class=\"columns\">\n          <div class=\"column\">\n            <h5>* Are you a student or a new grad?</h5>\n            <mat-radio-group class=\"example-radio-group\">\n              <mat-radio-button class=\"example-radio-button\" value=\"1\">Yes</mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" value=\"2\">No</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column\">\n            <h5>* What best describes your current role?</h5>\n            <mat-checkbox class=\"example-margin\">Software Engineer</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">Designer UI/UX</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">Software Architect</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">Product Manager</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">Quality Assurance</mat-checkbox>\n\n          </div>\n        </div>\n\n        <br><br><br>\n        <div class=\"columns is-mobile is-centered\">\n          <div class=\"column is-5\">\n            <button class=\"example-full-width\" mat-raised-button color=\"primary\">Save and continue</button>\n            <br><br>\n            <a mat-button class=\"example-full-width\" [routerLink]=\"['/onboarding/preferences']\">Skip for now <i class=\"material-icons\">arrow_forward_ios</i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-margin {\n  margin: 0 10px; }\n\n.example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.ts ***!
  \********************************************************************************/
/*! exports provided: OnboardingprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingprofileComponent", function() { return OnboardingprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnboardingprofileComponent = /** @class */ (function () {
    function OnboardingprofileComponent() {
    }
    OnboardingprofileComponent.prototype.ngOnInit = function () {
    };
    OnboardingprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'onboardingprofile',
            template: __webpack_require__(/*! ./onboardingprofile.component.html */ "./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.html"),
            styles: [__webpack_require__(/*! ./onboardingprofile.component.scss */ "./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OnboardingprofileComponent);
    return OnboardingprofileComponent;
}());



/***/ }),

/***/ "./src/app/ui/onboarding/preferences/preferences.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ui/onboarding/preferences/preferences.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n    <div class=\"column is-12\">\n      <div class=\"columns\">\n        <div class=\"column is-10 is-offset-1\">\n          <h1 class=\"head\">Find the right opportunities</h1>\n          <h4>Your answers determine which jobs we recommend for you and which companies see your profile.</h4>\n        </div>\n      </div>\n      <div class=\"columns\" style=\"min-height:500px;\">\n        <div class=\"column is-10 is-offset-1\">\n  \n          <div class=\"columns\">\n            <div class=\"column\">\n              <h5>* What types of job are you interested in?</h5>\n              <mat-radio-group class=\"example-radio-group\">\n                <mat-radio-button class=\"example-radio-button\" value=\"Full-time Employee\">Full-time Employee</mat-radio-button>\n                <mat-radio-button class=\"example-radio-button\" value=\"Contractor\">Contractor</mat-radio-button>\n                <mat-radio-button class=\"example-radio-button\" value=\"Intern\">Intern</mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n  \n          <div class=\"columns\">\n            <div class=\"column\">\n              <h5>* Desired salary?</h5>\n              <mat-form-field>\n                  <input matInput \n                      placeholder=\"Desired Annual Salary\" type=\"number\" class=\"example-right-align\">\n                  <span matPrefix>$&nbsp;</span>\n                  <span matSuffix>.00</span>\n              </mat-form-field>\n  \n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column\">\n              <h5>* Are you legally authorized to work in the United States?</h5>\n              <mat-radio-group>\n                  <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                  <mat-radio-button value=\"No\">No</mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n  \n          <div class=\"columns\">\n              <div class=\"column\">\n                <h5>* Do you or will you require sponsorship for a US employment visa?</h5>\n                <mat-radio-group>\n                    <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n              </div>\n            </div>\n\n          <br><br><br>\n          <div class=\"columns is-mobile is-centered\">\n            <div class=\"column is-5\">\n              <button class=\"example-full-width\" mat-raised-button color=\"primary\">Save and continue</button>\n              <br><br>\n              <a mat-button class=\"example-full-width\" [routerLink]=\"['/profileresume']\">Skip for now <i class=\"material-icons\">arrow_forward_ios</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/ui/onboarding/preferences/preferences.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/ui/onboarding/preferences/preferences.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/onboarding/preferences/preferences.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui/onboarding/preferences/preferences.component.ts ***!
  \********************************************************************/
/*! exports provided: PreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function() { return PreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreferencesComponent = /** @class */ (function () {
    function PreferencesComponent() {
    }
    PreferencesComponent.prototype.ngOnInit = function () {
    };
    PreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preferences',
            template: __webpack_require__(/*! ./preferences.component.html */ "./src/app/ui/onboarding/preferences/preferences.component.html"),
            styles: [__webpack_require__(/*! ./preferences.component.scss */ "./src/app/ui/onboarding/preferences/preferences.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PreferencesComponent);
    return PreferencesComponent;
}());



/***/ }),

/***/ "./src/app/ui/onboarding/preview/preview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/preview/preview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  preview works!\n</p>\n"

/***/ }),

/***/ "./src/app/ui/onboarding/preview/preview.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/preview/preview.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/onboarding/preview/preview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/onboarding/preview/preview.component.ts ***!
  \************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/ui/onboarding/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.scss */ "./src/app/ui/onboarding/preview/preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/ui/onboarding/welcome/welcome.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/welcome/welcome.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column is-12\">\n    <div class=\"columns\">\n      <div class=\"column is-10 is-offset-1\">\n        <h1 class=\"head\">What are you interested in?</h1>\n        <h4>Personalize your experience</h4>\n      </div>\n    </div>\n    <div class=\"columns\" style=\"min-height:500px;\">\n      <div class=\"column is-10 is-offset-1\">\n        \n          <div class=\"columns is-centered\">\n            <div class=\"column half\">\n              <h5 class=\"hiremusefont\">FOR INDIVIDUALS</h5>\n              <mat-divider></mat-divider>\n              <br>\n              <div class=\"columns\">\n                <div class=\"column\">\n                  <mat-checkbox class=\"example-margin\">Jobs</mat-checkbox>\n                  <br><span class=\"testpad\">Search apply, connect with teams and companies.</span>\n                </div>\n              </div>\n\n              <div class=\"columns\">\n                <div class=\"column\">\n                  <mat-checkbox class=\"example-margin\">Build your network</mat-checkbox>\n                  <br><span class=\"testpad\">Extend your network.</span>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"column half\">\n              <h5 class=\"hiremusefont\">FOR COMPANIES</h5>\n              <mat-divider></mat-divider>\n              <br>\n              <div class=\"columns\">\n                <div class=\"column\">\n                  <mat-checkbox class=\"example-margin\">Recruit</mat-checkbox>\n                  <br><span class=\"testpad\">Meet your future team.</span>\n                </div>\n              </div>\n              <div class=\"columns\">\n                <div class=\"column\">\n                  <mat-checkbox class=\"example-margin\">Promote your company</mat-checkbox>\n                  <br><span class=\"testpad\">Share your product(s), inspire, find partners.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br><br><br>\n          <div class=\"columns is-mobile is-centered\">\n            <div class=\"column is-half\">\n              <button class=\"example-full-width\" mat-raised-button color=\"primary\">Save and continue</button>\n              <br><br>\n              <a mat-button class=\"example-full-width\" [routerLink]=\"['/onboarding/location']\">Skip for now <i class=\"material-icons\">arrow_forward_ios</i>\n              </a>\n            </div>\n          </div>\n\n        \n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/ui/onboarding/welcome/welcome.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui/onboarding/welcome/welcome.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px;\n  width: 100%; }\n\n.testpad {\n  margin: 40px; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.head {\n  font-family: 'IBM Plex Sans', sans-serif; }\n"

/***/ }),

/***/ "./src/app/ui/onboarding/welcome/welcome.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/onboarding/welcome/welcome.component.ts ***!
  \************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/ui/onboarding/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/ui/onboarding/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/ui/postjob/postjob.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/postjob/postjob.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" profileResumeForm path=\"jobs/1\" (stateChange)=\"changeHandler($event)\">\n\n<div class=\"columns\">\n  <div class=\"column is-narrow\" style=\"background-color:#f4f5f7; \">\n    <div class=\"\" style=\"width: 55px;\">\n      <mat-toolbar style=\"background-color: transparent\">\n          <mat-toolbar-row>\n            <button mat-icon-button color=\"blue\">\n              <mat-icon class=\"example-icon\">description</mat-icon>\n            </button>\n          </mat-toolbar-row>\n          <mat-toolbar-row>\n            <button mat-icon-button color=\"\">\n              <mat-icon aria-label=\"\">note_add</mat-icon>\n            </button>\n          </mat-toolbar-row>\n          <mat-toolbar-row>\n            <button mat-icon-button color=\"\">\n              <mat-icon class=\"example-icon\">delete</mat-icon>\n            </button>\n          </mat-toolbar-row>\n        </mat-toolbar>\n    </div>\n  </div>\n  <div class=\"column\">\n    \n      <div class=\"columns\">\n          <div class=\"column is-12\">\n            <div class=\"columns\">\n              <div class=\"column is-10 is-offset-1\">\n                <h1 class=\"head\">Post Job!!</h1>\n                <h4>Let's start with your profile. This will help you succeed on HireMuse.</h4>\n              </div>\n            </div>\n            <div class=\"columns\">\n              <div class=\"column is-10 is-offset-1\">\n                <mat-card>\n    \n                  <mat-form-field class=\"example-full-width\">\n                    <mat-label>Job Title</mat-label>\n                    <input matInput placeholder=\"Candidate Name\" formControlName=\"jobtitle\">\n                    <mat-hint>Ex: Software Engineer, Product Manager</mat-hint>\n                  </mat-form-field>\n                    \n                  <mat-form-field class=\"example-full-width\">\n                    <textarea matInput #jobdescription maxlength=\"500\" placeholder=\"Job Description\" cdkTextareaAutosize\n                      #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"2\" cdkAutosizeMaxRows=\"15\" formControlName=\"jobdescription\"></textarea>\n                    <mat-hint align=\"start\"><strong>Regular job duties, expected and performed.</strong>\n                    </mat-hint>\n                    <mat-hint align=\"end\">{{jobdescription.value.length}} / 500</mat-hint>\n                  </mat-form-field>\n                  \n                  <mat-form-field>\n                    <mat-select placeholder=\"Choose skill\" formControlName=\"skillname\">\n                      <mat-option value=\".NET\">.NET</mat-option>\n                      <mat-option value=\"Python\">Python</mat-option>\n                      <mat-option value=\"Java\">Java</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n    \n                  <div class=\"columns\">\n                    <div class=\"column is-6\">\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-label>Current city, state or country</mat-label>\n                        <input #locationinput matInput formControlName=\"location\" type=\"text\" class=\"google-place-input\"\n                          google-place (onSelect)=\"setAddress($event)\" placeholder=\"Type to search..\">\n                        <mat-hint>Current location</mat-hint>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"column is-6\">\n                      <mat-checkbox formControlName=\"canworkremotely\">Can work remotely</mat-checkbox>\n                    </div>\n                  </div>\n                  <br>\n    \n                  <mat-accordion class=\"example-headers-align\">\n                    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\">\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          Other details\n                        </mat-panel-title>\n                        <mat-panel-description class=\"is-pulled-right\t\">\n                          Type, experience and role\n                          <mat-icon>account_circle</mat-icon>\n                        </mat-panel-description>\n                      </mat-expansion-panel-header>\n                      <p>I'm visible because I am open</p>\n                      <div class=\"columns\">\n                          <div class=\"column is-5\">\n                            <mat-form-field class=\"example-full-width\">\n                              <mat-select placeholder=\"Job Type\" multiple formControlName=\"jobtype\">\n                                <mat-option *ngFor=\"let job of typesOfJobs\" [value]=\"job\">{{job}}</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                          </div>\n                          <div class=\"column is-5\">\n                            <mat-form-field class=\"example-full-width\">\n                              <mat-select placeholder=\"Role\" multiple formControlName=\"primaryrole\">\n                                <mat-option *ngFor=\"let role of listRole\" [value]=\"role\">{{role}}</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                          </div>\n                        </div>\n            \n                        <div class=\"columns\">\n                          <div class=\"column is-5\">\n                            <mat-form-field class=\"example-full-width\">\n                              <mat-select placeholder=\"Work experience\" formControlName=\"workexperience\">\n                                <mat-option value=\"0-1 years\">0-1 years</mat-option>\n                                <mat-option value=\"1-5 years\">1-5 years</mat-option>\n                                <mat-option value=\"5-8 years\">5-8 years</mat-option>\n                                <mat-option value=\"8-15 years\">8-15 years</mat-option>\n                                <mat-option value=\"15+ years\">15+ years</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                          </div>\n                          <div class=\"column is-6\"></div>\n                        </div>\n            \n    \n                      <mat-action-row>\n                        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                      </mat-action-row>\n                    </mat-expansion-panel>\n    \n                    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\">\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Work Authorization\n                        </mat-panel-title>\n                        <mat-panel-description>\n                          Sponsorship and authorization\n                          <mat-icon>map</mat-icon>\n                        </mat-panel-description>\n                      </mat-expansion-panel-header>\n    \n                      <h6>Are you legally authorized to work in the United\n                          States</h6>\n                        <mat-radio-group formControlName=\"legallyauthorized\">\n                          <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                          <mat-radio-button value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                        <h6>Do you or will you require sponsorship for a US\n                          employment visa</h6>\n                        <mat-radio-group formControlName=\"requiresponsorship\">\n                          <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                          <mat-radio-button value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n    \n                      <mat-action-row>\n                        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                      </mat-action-row>\n                    </mat-expansion-panel>\n    \n                    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\">\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          Day of the trip\n                        </mat-panel-title>\n                        <mat-panel-description>\n                          Inform the date you wish to travel\n                          <mat-icon>date_range</mat-icon>\n                        </mat-panel-description>\n                      </mat-expansion-panel-header>\n    \n                      <mat-form-field>\n                        <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n                      </mat-form-field>\n                      <mat-datepicker #picker></mat-datepicker>\n    \n                      <mat-action-row>\n                        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                        <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n                      </mat-action-row>\n                    </mat-expansion-panel>\n    \n                  </mat-accordion>\n    \n                  <br><br>\n                  <div class=\"columns\">\n                    <div class=\"column is-6\">\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-label>Your name</mat-label>\n                        <input matInput formControlName=\"contactname\" type=\"text\" placeholder=\"Job contact name.\">\n                        <mat-hint>Job posted by name</mat-hint>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"column is-6\">\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-label>Your company name</mat-label>\n                        <input matInput formControlName=\"companyname\" type=\"text\" placeholder=\"Company name.\">\n                        <mat-hint>Company name</mat-hint>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"columns\">\n                    <div class=\"column is-3\">\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-label>Contact phone number</mat-label>\n                        <input matInput formControlName=\"contactphonenumber1\" type=\"text\" placeholder=\"Phone number\">\n                        <mat-hint>Contact phone number</mat-hint>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"column is-3\">\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-label>Alternate phone number</mat-label>\n                        <input matInput formControlName=\"contactphonenumber2\" type=\"text\" placeholder=\"Alternate phone number\">\n                        <mat-hint>Alternate phone number</mat-hint>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"column is-3\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Enter your email\" formControlName=\"contactemail\" required>\n                        <!-- <mat-error *ngIf=\"contactemail.invalid\">{{getErrorMessage()}}</mat-error> -->\n                      </mat-form-field>\n                    </div>\n                    <div class=\"column is-3\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Confirm your email\" formControlName=\"confirmcontactemail\" required>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <br>\n    \n                  <br><br><br>\n                  <div class=\"columns is-mobile is-centered\">\n                    <div class=\"column is-half\">\n                      <button class=\"example-full-width\" mat-raised-button color=\"primary\">Save & continue</button>\n                    </div>\n                  </div>\n    \n                </mat-card>\n              </div>\n            </div>\n          </div>\n    \n        </div>\n  </div>\n</div>\n\n\n</form>"

/***/ }),

/***/ "./src/app/ui/postjob/postjob.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/postjob/postjob.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n#contentAddJob {\n  /* padding: 20px;\n    width: 70%;\n    margin: 10px;\n    z-index: 3;\n    display: inline-block; */\n  /*width: 930px;*/\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  padding: 20px 20px 20px;\n  margin-bottom: 20px;\n  z-index: 3;\n  position: relative; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n  align-items: right; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: right; }\n"

/***/ }),

/***/ "./src/app/ui/postjob/postjob.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/postjob/postjob.component.ts ***!
  \*************************************************/
/*! exports provided: PostjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostjobComponent", function() { return PostjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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




var PostjobComponent = /** @class */ (function () {
    function PostjobComponent(fb, afs, zone) {
        this.fb = fb;
        this.afs = afs;
        this.zone = zone;
        this.title = 'Places';
        this.typesOfJobs = ['Full time employee', 'Contractor', 'Intern'];
        this.listRole = ['Software Engineer', 'Product Manager', 'Designer'];
        this.step = 1;
    }
    PostjobComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            jobtitle: [''],
            jobdescription: [''],
            jobtype: [''],
            primaryrole: [''],
            workexperience: [''],
            skillname: [''],
            location: [''],
            legallyauthorized: [''],
            canworkremotely: [''],
            requiresponsorship: [''],
            contactname: [''],
            companyname: [''],
            contactemail: [''],
            confirmcontactemail: [''],
            contactphonenumber1: [''],
            contactphonenumber2: ['']
            //contactemail: ['', Validators.required, Validators.email]
            //chosenlocations: this.fb.array([])
        });
        this.myDoc = this.afs.doc('jobs/1').valueChanges();
        this.preloadData();
    };
    PostjobComponent.prototype.preloadData = function () {
        var _this = this;
        this.state = 'loading';
        this.afs.doc('jobs/1').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            //this.myForm.patchValue(data);
            if (data) {
                console.log(JSON.stringify(data));
                _this.myForm.controls['jobtitle'].setValue(data['jobtitle']);
                _this.myForm.controls['jobdescription'].setValue(data['jobdescription']);
                _this.myForm.controls['location'].setValue(data['location']);
                _this.myForm.controls['canworkremotely'].setValue(data['canworkremotely']);
                _this.myForm.controls['jobtype'].setValue(data['jobtype']);
                _this.myForm.controls['primaryrole'].setValue(data['primaryrole']);
                _this.myForm.controls['workexperience'].setValue(data['workexperience']);
                _this.myForm.controls['skillname'].setValue(data['skillname']);
                _this.myForm.controls['legallyauthorized'].setValue(data['legallyauthorized']);
                _this.myForm.controls['requiresponsorship'].setValue(data['requiresponsorship']);
                _this.myForm.controls['contactname'].setValue(data['contactname']);
                _this.myForm.controls['companyname'].setValue(data['companyname']);
                _this.myForm.controls['contactemail'].setValue(data['contactemail']);
                _this.myForm.controls['confirmcontactemail'].setValue(data['confirmcontactemail']);
                _this.myForm.controls['contactphonenumber1'].setValue(data['contactphonenumber1']);
                _this.myForm.controls['contactphonenumber2'].setValue(data['contactphonenumber2']);
                //this.myForm.controls[''].setValue(data['']);
                // if (data['chosenlocations']){
                //   data['chosenlocations'].forEach(item => {
                //     const pickedlocation = this.fb.group({
                //       locale : [item['location']]
                //     })
                //   });
                // }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    PostjobComponent.prototype.changeHandler = function (e) {
        console.log(e);
        //this.state = e;
    };
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    PostjobComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        //console.log(JSON.stringify(addrObj))
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            console.log(addrObj['formatted_address']);
            //this.myForm.controls['location'].setValue(addrObj)
            _this.myForm.controls['location'].setValue(addrObj['formatted_address']);
            //this.myForm.addControl('location', new FormControl('formatted_address'));
            //this.myForm.addControl('locationname', new FormControl(addrObj, Validators.required));
            //this.state = 'modified';
        });
    };
    PostjobComponent.prototype.locationprint = function (inVal) {
        console.log(inVal.value);
        this.state = 'modified';
        //console.log(locationname.value);
    };
    PostjobComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    PostjobComponent.prototype.nextStep = function () {
        this.step++;
    };
    PostjobComponent.prototype.prevStep = function () {
        this.step--;
    };
    PostjobComponent.prototype.getErrorMessage = function () {
        return this.myForm.controls['contactemail'].hasError('required') ? 'You must enter a value' :
            this.myForm.controls['contactemail'].hasError('email') ? 'Not a valid email' :
                '';
    };
    PostjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'postjob',
            template: __webpack_require__(/*! ./postjob.component.html */ "./src/app/ui/postjob/postjob.component.html"),
            styles: [__webpack_require__(/*! ./postjob.component.scss */ "./src/app/ui/postjob/postjob.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], PostjobComponent);
    return PostjobComponent;
}());



/***/ }),

/***/ "./src/app/ui/profile-resume-form.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/profile-resume-form.directive.ts ***!
  \*****************************************************/
/*! exports provided: ProfileResumeFormDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResumeFormDirective", function() { return ProfileResumeFormDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProfileResumeFormDirective = /** @class */ (function () {
    function ProfileResumeFormDirective(fb, afs, snackBar, dialog) {
        this.fb = fb;
        this.afs = afs;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = true;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.horizontalPosition = 'left';
        this.verticalPosition = 'bottom';
        // Outputs
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProfileResumeFormDirective.prototype.ngOnInit = function () {
        this.docRef = this.getDocRef(this.path);
        this.autoSave();
    };
    // Autosaves form changes
    ProfileResumeFormDirective.prototype.autoSave = function () {
        var _this = this;
        this.formSub = this.formGroup.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (change) {
            _this.state = 'modified';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (change) {
            if (_this.formGroup.valid && _this._state === 'modified') {
                _this.setDoc();
            }
        }))
            .subscribe();
    };
    // Intercept form submissions to perform the document write
    ProfileResumeFormDirective.prototype.onSubmit = function (e) {
        this.setDoc();
    };
    // Determines if path is a collection or document
    ProfileResumeFormDirective.prototype.getDocRef = function (path) {
        if (path.split('/').length % 2) {
            return this.afs.doc(path + "/" + this.afs.createId());
        }
        else {
            return this.afs.doc(path);
        }
    };
    ProfileResumeFormDirective.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        //this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);
        this.snackBar.open(message, '', config);
    };
    // Writes changes to Firestore
    ProfileResumeFormDirective.prototype.setDoc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.docRef.set(this.formGroup.value, { merge: true })];
                    case 1:
                        _a.sent();
                        this.state = 'synced';
                        this.openSnackBar('Auto saved.', 'Succes');
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.formError.emit(err_1.message);
                        this.state = 'error';
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ProfileResumeFormDirective.prototype, "state", {
        // Setter for state changes
        set: function (val) {
            this._state = val;
            this.stateChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    ProfileResumeFormDirective.prototype.ngOnDestroy = function () {
        this.formSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileResumeFormDirective.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], ProfileResumeFormDirective.prototype, "formGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProfileResumeFormDirective.prototype, "stateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProfileResumeFormDirective.prototype, "formError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('ngSubmit', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProfileResumeFormDirective.prototype, "onSubmit", null);
    ProfileResumeFormDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[profileResumeForm]'
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ProfileResumeFormDirective);
    return ProfileResumeFormDirective;
}());



/***/ }),

/***/ "./src/app/ui/profile/dialog-overview-example-dialog.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/profile/dialog-overview-example-dialog.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <!-- <input matInput [(ngModel)]=\"data.animal\"> -->\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/ui/profile/profile.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/profile/profile.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\">\n  <!-- <mat-drawer-container class=\"example-container\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n      <p>Auto-resizing sidenav</p>\n      <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n      <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n        Toggle extra text\n      </button>\n    </mat-drawer>\n    <hr>\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button> -->\n  <div class=\"columns\">\n    <div class=\"column is-12\">\n      <div class=\"columns\">\n        <div class=\"column is-10 is-offset-1\">\n          <span class=\"font-family: 'Raleway', sans-serif;\">Resume</span>\n        </div>\n      </div>\n      <div class=\"columns\">\n        <div class=\"column is-10 is-offset-1\">\n          <mat-tab-group dynamicHeight>\n            <mat-tab label=\"Basics\">\n              <div class=\"example-large-box mat-elevation-z4\">\n                <div class=\"columns\">\n                  <div class=\"column is-11\">\n                    <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">&nbsp;</td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Candidate Name\" formControlName=\"name\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Location\" formControlName=\"location\">\n                          </mat-form-field>\n                        </td>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"email\" formControlName=\"email\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <!-- <textarea matInput placeholder=\"Mini Resume\" formControlName=\"miniresume\"></textarea> -->\n                            <textarea matInput #message maxlength=\"256\" placeholder=\"Mini Resume\" formControlName=\"miniresume\"></textarea>\n                            <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n                            <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Role\" formControlName=\"role\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <textarea matInput placeholder=\"your message...\" formControlName=\"message\"></textarea>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                    </table>\n\n                  </div>\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Talent Profile\">\n              <div class=\"example-large-box mat-elevation-z4\">\n                <div class=\"columns\">\n                  <div class=\"column is-11\">\n                    <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">&nbsp;</td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <label class=\"label\">Search status</label>\n                        </td>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <mat-select placeholder=\"Job Search Status\" [(value)]=\"selected\" formControlName=\"jobsearchstatus\">\n                              <mat-option value=\"Actively Interviewing\">Actively Interviewing</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <label class=\"label\">Job Type</label>\n                        </td>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <mat-select placeholder=\"Job Type\" multiple formControlName=\"jobtype\">\n                              <mat-option *ngFor=\"let job of typesOfJobs\" [value]=\"job\">{{job}}</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <label class=\"label\">Annual Salary</label>\n                        </td>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput formControlName=\"desiredannualsalary\" placeholder=\"Desired Annual Salary\"\n                              type=\"number\" class=\"example-right-align\">\n                            <span matPrefix>$&nbsp;</span>\n                            <span matSuffix>.00</span>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Desired Location\" type=\"text\" formControlName=\"desiredlocation\">\n                          </mat-form-field>\n                        </td>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-checkbox formControlName=\"opentoworkremotely\">Open to work remotely</mat-checkbox>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <label class=\"label\">Work Authorization</label>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <table>\n                            <tr>\n                              <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                <h6>Are you legally authorized to work in the United States</h6>\n                              </td>\n                              <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                <mat-radio-group formControlName=\"legallyauthorized\">\n                                  <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                                  <mat-radio-button value=\"No\">No</mat-radio-button>\n                                </mat-radio-group>\n                              </td>\n                            </tr>\n                            <tr>\n                              <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                <h6>Do you or will you require sponsorship for a US employment visa</h6>\n                              </td>\n                              <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                <mat-radio-group formControlName=\"requiresponsorship\">\n                                  <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                                  <mat-radio-button value=\"No\">No</mat-radio-button>\n                                </mat-radio-group>\n                              </td>\n                            </tr>\n                          </table>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                      </tr>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Social\">\n              <div class=\"example-large-box mat-elevation-z4\">\n                <div class=\"columns\">\n                  <div class=\"column is-11\">\n                    <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">&nbsp;</td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"LinkedIn url\" type=\"url\" formControlName=\"linkedinurl\">\n                            <span matPrefix>http://&nbsp;</span>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Website url\" formControlName=\"websiteurl\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Twitter url\" formControlName=\"twitterurl\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Github url\" formControlName=\"githuburl\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n\n\n          <div class=\"columns\">\n            <div class=\"column is-12\">&nbsp;</div>\n          </div>\n          <div class=\"columns\">\n            <div class=\"column is-12\">\n              <h5>Skills</h5>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-12\">\n              \n            </div>\n          </div>\n\n\n          <div class=\"columns\">\n            <div class=\"column is-12\">\n\n              <div class=\"columns\">\n                <div class=\"column is-11\">\n                  <table class=\"table is-fullwidth\" formArrayName=\"skills\" style=\"background-color:rgb(245, 243, 243)\">\n                    <tr *ngIf=\"skillForms.controls == null\"><td><h3>No skills added</h3></td></tr>\n                    <tr *ngFor=\"let skill of skillForms.controls; let i=index\" [formGroupName]=\"i\">\n                        <!-- <td style=\"border:0px;\">\n                            {{i+1}}</td> -->\n                      <td style=\"border:0px;\">\n                        <mat-form-field>\n                          <mat-select placeholder=\"Choose skill\" formControlName=\"skillname\">\n                            <mat-option value=\".NET\">.NET</mat-option>\n                            <mat-option value=\"Python\">Python</mat-option>\n                            <mat-option value=\"Java\">Java</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                        <!-- <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Skill Name\" formControlName=\"skillname\">\n                        </mat-form-field> -->\n                      </td>\n                      <td style=\"border:0px;\">\n                        <mat-form-field>\n                            <mat-select placeholder=\"Choose skill level\" formControlName=\"skilllevel\">\n                              <mat-option value=\"Expert\">Expert</mat-option>\n                              <mat-option value=\"Intermediate\">Intermediate</mat-option>\n                              <mat-option value=\"Beginner\">Beginner</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                      </td>\n                      <td style=\"border:0px;\">&nbsp;\n                        <button mat-button color=\"warn\" (click)=\"deleteSkill(i)\">\n                          <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon> Delete\n                        </button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                          <button mat-button (click)=\"addSkill()\">\n                              <mat-icon aria-label=\"Add skill\">add_circle</mat-icon> Add skill</button>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n                <div>\n                  &nbsp;\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-12\">\n              <div class=\"columns\">\n                <div class=\"column is-11\">\n                  \n                  <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                    <tr>\n                        <td style=\"border:0px;\">Add</td>\n                      <td>\n                        <mat-form-field>\n                          <mat-select [(value)]=\"selected\" placeholder=\"Choose skill\">\n                            \n                            <mat-option *ngFor=\"let sk of skillList\" [value]=\"sk\">\n                                {{sk}}\n                              </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field>\n                            <mat-select [(value)]=\"selected\" placeholder=\"Choose skill level\">\n                                <mat-option value=\"Beginner\">Beginner</mat-option>\n                                <mat-option value=\"Medium\">Medium</mat-option>\n                                <mat-option value=\"Expert\">Expert</mat-option>\n                              </mat-select>\n                        </mat-form-field>\n                      </td>\n                      <td>\n                          <button mat-button (click)=\"addSkill()\">\n                              <mat-icon aria-label=\"Add skill\">add_circle</mat-icon> Save skill</button>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n                <div>\n                  <!-- <br>\n                  <button mat-fab color=\"primary\" (click)=\"addSkill()\">\n                    <mat-icon aria-label=\"Example icon-button with a heart icon\">save</mat-icon>\n                  </button> -->\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"columns\">\n            <div class=\"column is-12\">&nbsp;</div>\n          </div>\n          <div class=\"columns\">\n            <div class=\"column is-12\">\n              <h5>Experience</h5>\n              <button mat-button (click)=\"openSnackBar('message.value', 'action.value')\">Show snack-bar</button>\n              <button mat-button (click)=\"openDialog()\">Open dialog</button>\n            </div>\n          </div>\n\n\n\n          <div class=\"columns\">\n            <div class=\"column is-12\">\n              <div class=\"columns\">\n                <div class=\"column is-11\">\n                  <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                    <tr>\n                      <td>\n                        <mat-form-field>\n                          <mat-select [(value)]=\"selected\">\n                            <mat-option value=\"Project\">Add Project</mat-option>\n                            <mat-option value=\"Title\">Add Title</mat-option>\n                            <mat-option value=\"Company Name\">Add Company Name</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field>\n                          <input matInput placeholder=\"\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-raised-button matTooltip=\"Info about the action\" (click)=\"addExperience()\">Add</button>\n\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n                <div>\n                  <br>\n                  <button mat-fab color=\"primary\">\n                    <mat-icon aria-label=\"Example icon-button with a heart icon\">save</mat-icon>\n                  </button>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\" formArrayName=\"experiences\">\n            <div class=\"column is-12\">\n              <div class=\"columns\" *ngFor=\"let exp of experienceForms.controls; let i=index\" [formGroupName]=\"i\">\n                <div class=\"column is-11\">\n                  <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                    <tr>\n                      <td style=\"border:0px;\" colspan=\"2\">\n                        {{i+1}}\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Project\" formControlName=\"project\">\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td style=\"border:0px;\" colspan=\"2\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Title\" formControlName=\"title\">\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td style=\"border:0px;\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Company\" formControlName=\"company\">\n                        </mat-form-field>\n                      </td>\n                      <td style=\"border:0px;\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Location\" formControlName=\"location\">\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td style=\"border:0px;\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"fromdate\" formControlName=\"fromdate\">\n                        </mat-form-field>\n                        <!-- <mat-form-field class=\"example-full-width\">\n                            <input matInput [matDatepicker]=\"picker\" formControlName=\"fromdate\" placeholder=\"Choose a date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                              <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                            </mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                          </mat-form-field> -->\n\n\n                      </td>\n                      <td style=\"border:0px;\">\n                      </td>\n                    <tr>\n                      <td style=\"border:0px;\" colspan=\"2\">\n                        <mat-form-field>\n                          <textarea matInput placeholder=\"Project description\" formControlName=\"projectdescription\"></textarea>\n                        </mat-form-field>\n                      </td>\n                    </tr>\n\n                  </table>\n                </div>\n                <div>\n                  <button mat-fab color=\"warn\" (click)=\"deleteExperience(i)\">\n                    <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                  </button>\n                  <br><br>\n                  <button mat-fab color=\"primary\" (click)=\"openDialog()\">\n                    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n                  </button>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-12\">\n              <button mat-button mat-raised-button color=\"primary\" type=\"button\" (click)=\"savedata()\" [disabled]=\"myForm.invalid\">Submit\n                Form</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!-- <h5>Phone numbers</h5>\n    <table formArrayName=\"phones\" class=\"example-full-width\" cellspacing=\"0\">\n      <tr *ngFor=\"let phone of phoneForms.controls; let i=index\" [formGroupName]=\"i\">\n        <td style=\"border:0px;\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"City\" formControlName=\"area\">\n          </mat-form-field>\n        </td>\n        <td style=\"border:0px;\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"State\" formControlName=\"prefix\">\n          </mat-form-field>\n        </td>\n        <td style=\"border:0px;\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" formControlName=\"line\">\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n          </mat-form-field>\n        </td>\n        <td style=\"border:0px;\">\n          <button mat-button (click)=\"deletePhone(i)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n\n    <button mat-raised-button (click)=\"addPhone()\">Add Phone Number</button> -->\n\n\n\n  <!-- </mat-drawer-container> -->\n</form>\n\n<div *ngIf=\"success\" class=\"notification is-success\">\n  Yay! We received your submission\n</div>"

/***/ }),

/***/ "./src/app/ui/profile/profile.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/profile/profile.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  display: block; }\n\ntextarea {\n  min-height: 130px; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.content table td {\n  border: 0px; }\n"

/***/ }),

/***/ "./src/app/ui/profile/profile.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/profile/profile.component.ts ***!
  \*************************************************/
/*! exports provided: ProfileComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, afs, snackBar, dialog, activatedRoute, router) {
        this.fb = fb;
        this.afs = afs;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isAdding = false;
        this.typesOfJobs = ['Full time employee', 'Contractor', 'Intern'];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.skillList = ['.NET', 'Python', 'Django'];
        // Form state
        this.loading = false;
        this.success = false;
        this.selected = 'Project';
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = true;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.horizontalPosition = 'left';
        this.verticalPosition = 'bottom';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            miniresume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            jobsearchstatus: [''],
            jobtype: [''],
            desiredannualsalary: [''],
            desiredlocation: [''],
            opentoworkremotely: [''],
            legallyauthorized: [''],
            requiresponsorship: [''],
            linkedinurl: [''],
            websiteurl: [''],
            twitterurl: [''],
            githuburl: [''],
            skills: this.fb.array([]),
            //phones: this.fb.array([]),
            experiences: this.fb.array([])
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.resumename = params['jid'];
        });
        if (this.resumename == undefined) {
            this.resumename = this.afs.createId();
            this.navigateToFoo();
        }
        this.preloadData();
    };
    ProfileComponent.prototype.navigateToFoo = function () {
        // changes the route without moving from the current view or
        // triggering a navigation event
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                'jid': this.resumename
            },
            queryParamsHandling: 'merge',
            // preserve the existing query params in the route
            skipLocationChange: false
            // do not trigger navigation
        });
    };
    ProfileComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);
    };
    ProfileComponent.prototype.openDialog = function () {
        // const dialogRef = this.dialog.open(DialogContentExampleDialog);
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
        // });
    };
    ProfileComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    Object.defineProperty(ProfileComponent.prototype, "skillForms", {
        get: function () {
            //console.log(this.myForm.get('experiences').toString)
            return this.myForm.get('skills');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "experienceForms", {
        get: function () {
            //console.log(this.myForm.get('experiences').toString)
            return this.myForm.get('experiences');
        },
        enumerable: true,
        configurable: true
    });
    // get phoneForms() {
    //   return this.myForm.get('phones') as FormArray
    // }
    ProfileComponent.prototype.addSkill = function () {
        console.log('in add skill');
        try {
            var skill = this.fb.group({
                skillname: [],
                skilllevel: []
            });
            this.skillForms.push(skill);
        }
        catch (err) {
            console.error(err);
        }
    };
    ProfileComponent.prototype.addExperience = function () {
        var experience = this.fb.group({
            project: [],
            title: [],
            company: [],
            location: [],
            fromdate: [],
            projectdescription: []
        });
        this.experienceForms.push(experience);
    };
    // addPhone() {
    //   const phone = this.fb.group({
    //     area: [],
    //     prefix: [],
    //     line: [],
    //   })
    //   this.phoneForms.push(phone);
    // }
    // deletePhone(i) {
    //   this.phoneForms.removeAt(i)
    // }
    ProfileComponent.prototype.deleteExperience = function (i) {
        this.experienceForms.removeAt(i);
    };
    ProfileComponent.prototype.deleteSkill = function (i) {
        //console.log('deleteStill @ ')
        this.skillForms.removeAt(i);
    };
    ProfileComponent.prototype.savedata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formValue = this.myForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.isAdding) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.afs.doc('contacts/' + this.resumename).set(formValue, { merge: true })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.afs.doc('contacts/' + this.resumename).update(formValue)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.openSnackBar('saved', '');
                        this.success = true;
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // async submitHandler() {
    //   this.loading = true;
    //   const formValue = this.myForm.value;
    //   try {
    //     await this.afs.collection('contacts').add(formValue);
    //     this.success = true;
    //   } catch(err) {
    //     console.error(err)
    //   }
    //   this.loading = false;
    // }
    ProfileComponent.prototype.preloadData = function () {
        var _this = this;
        console.log('createId: ' + this.afs.createId());
        //this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').valueChanges().pipe(
        this.afs.doc('contacts/' + this.resumename).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            //this.myForm.patchValue(data);
            if (data) {
                console.log(JSON.stringify(data));
                _this.myForm.controls['name'].setValue(data['name']);
                _this.myForm.controls['location'].setValue(data['location']);
                _this.myForm.controls['miniresume'].setValue(data['miniresume']);
                _this.myForm.controls['role'].setValue(data['role']);
                _this.myForm.controls['email'].setValue(data['email']);
                _this.myForm.controls['message'].setValue(data['message']);
                _this.myForm.controls['jobsearchstatus'].setValue(data['jobsearchstatus']);
                _this.myForm.controls['jobtype'].setValue(data['jobtype']);
                _this.myForm.controls['desiredannualsalary'].setValue(data['desiredannualsalary']);
                _this.myForm.controls['desiredlocation'].setValue(data['desiredlocation']);
                _this.myForm.controls['opentoworkremotely'].setValue(data['opentoworkremotely']);
                _this.myForm.controls['legallyauthorized'].setValue(data['legallyauthorized']);
                _this.myForm.controls['requiresponsorship'].setValue(data['requiresponsorship']);
                //this.myForm.controls['phones'].setValue(this.fb.array([{"area":"123", "line":"", "prefix":""}]))
                //this.myForm.controls['phones'].setValue(this.fb.array([{"area":"1312","line":"q3332","prefix":"13"},{"area":"13123","line":"123123","prefix":"123123"},{"area":"13123","line":"123123","prefix":"123123"}]))
                //this.myForm.controls['phones'].setValue(this.fb.array([]))
                //const phone = this.fb.group({ 
                //  area: ['123'],
                //  prefix: ['456'],
                //  line: ['7890'],
                //})
                //console.log(data['phones'][0]['area'])
                if (data['skills']) {
                    console.log('skills : ' + JSON.stringify(data['skills']));
                    data['skills'].forEach(function (item) {
                        var skill = _this.fb.group({
                            skillname: [item['skillname']],
                            skilllevel: [item['skilllevel']]
                        });
                        _this.skillForms.push(skill);
                    });
                }
                // if (data['phones']) {
                //   data['phones'].forEach(item => {
                //     console.log(item['area'] + ':' + item['line'] + ':' + item['prefix'])
                //     const phone = this.fb.group({
                //       area: [item['area']],
                //       prefix: [item['line']],
                //       line: [item['prefix']],
                //     })
                //     this.phoneForms.push(phone);
                //   })
                // }
                if (data['experiences']) {
                    console.log('experiences : ' + JSON.stringify(data['experiences']));
                    data['experiences'].forEach(function (item) {
                        var experience = _this.fb.group({
                            project: [item['project']],
                            title: [item['title']],
                            company: [item['company']],
                            //fromdate: [new FormControl(new Date(item['fromdate']*1000))],
                            fromdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString()),
                            //fromdate: new FormControl((new Date(Date.parse(item['fromdate']))).toISOString()),
                            location: [item['location']],
                            projectdescription: [item['projectdescription']]
                        });
                        _this.experienceForms.push(experience);
                    });
                }
                else {
                    console.log('no experience found');
                }
                //this.phoneForms.push(phone);
                _this.isAdding = false;
            }
            else {
                _this.isAdding = true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/ui/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/ui/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/ui/profile/dialog-overview-example-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog { }


/***/ }),

/***/ "./src/app/ui/profileresume/dialog-content-example-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui/profileresume/dialog-content-example-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title><i class=\"material-icons\">thumbs_up_down</i> Confirm Delete</h2>\n\n\n<mat-dialog-content class=\"mat-typography\">\n    <h1>{{data.displaytext}}</h1>\n    <h2>{{data.deletetype}}</h2>\n    <ul>\n        <li>\n          <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n        </li>\n      </ul>\n  <h3>Are you sure?</h3>\n  <p> Vivamus varius lacus id elit venenatis aliquet. Duis vitae libero nisl. Sed vitae ligula id nisi ullamcorper vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique et sapien eget egestas. Proin gravida erat et turpis tincidunt, quis consectetur tellus aliquet. Vivamus eu sapien diam. Proin sit amet convallis magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu nec ante auctor ultricies. Sed efficitur cursus rutrum. In molestie lectus eu nulla posuere ultricies. Nunc porta nunc vulputate, imperdiet tortor ac, sollicitudin ante. Donec in vulputate augue, a tempus purus. Aliquam posuere porttitor sodales. </p>\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Confirm Delete</button>\n</mat-dialog-actions>\n\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/ui/profileresume/profileresume.component.html":
/*!***************************************************************!*\
  !*** ./src/app/ui/profileresume/profileresume.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div [ngSwitch]=\"state || null\"> -->\n\n<form [formGroup]=\"myForm\" profileResumeForm path=\"resume/{{resumename}}\" (stateChange)=\"changeHandler($event)\">\n\n    <div class=\"columns\">\n        <div class=\"column is-12\">\n            <div class=\"columns\">\n                <div class=\"column is-10 is-offset-1\">\n                    <h1>MDA</h1>\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column is-10 is-offset-1\">\n\n                    <div *ngIf=\"state === 'synced'\" class=\"notification is-success\">\n                        Form is synced with Firestore\n                    </div>\n\n                    <div *ngIf=\"state === 'modified'\" class=\"notification is-warning\">\n                        Form has unsaved changes\n                    </div>\n                    <!-- Getting an ERROR Error: ExpressionChangedAfterItHasBeenCheckedError -->\n                    <!-- <div *ngIf=\"state === 'loading'\" class=\"notification is-info\">\n                            Form data is preloading\n                        </div> -->\n                    <div *ngIf=\"state === 'error'\" class=\"notification is-danger\">\n                        Form tried and failed to save to Firestore\n                    </div>\n                    <!-- </div> -->\n\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column is-10 is-offset-1\">\n                    <mat-tab-group dynamicHeight>\n                        <mat-tab label=\"Basics\">\n                            <div class=\"example-large-box mat-elevation-z4\">\n                                <div class=\"columns\">\n                                    <div class=\"column is-11\">\n                                        <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <mat-label>Candidate Name</mat-label>\n                                                        <input matInput placeholder=\"Candidate Name\" formControlName=\"name\">\n                                                        <mat-hint>Candidate Name</mat-hint>\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    \n                                                    <mat-form-field>\n                                                        <mat-label>Location</mat-label>\n                                                        <input \n                                                            matInput\n                                                            formControlName=\"location\"\n                                                            type=\"text\"\n                                                            class=\"google-place-input\"\n                                                            google-place\n                                                            (onSelect)=\"setAddress($event)\"\n                                                            placeholder=\"Type to search..\">\n                                                        <mat-hint>Candidate Name</mat-hint>\n                                                    </mat-form-field>\n                                                    \n                                                </td>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput placeholder=\"email\" formControlName=\"email\">\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <!-- <textarea matInput placeholder=\"Mini Resume\" formControlName=\"miniresume\"></textarea> -->\n                                                        <textarea matInput #message maxlength=\"256\" placeholder=\"Mini Resume\"\n                                                            formControlName=\"miniresume\"></textarea>\n                                                        <mat-hint align=\"start\"><strong>Don't disclose personal info</strong>\n                                                        </mat-hint>\n                                                        <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput placeholder=\"Role\" formControlName=\"role\">\n                                                    </mat-form-field>\n\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <textarea matInput placeholder=\"your message...\"\n                                                            formControlName=\"message\"></textarea>\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                        </table>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n                        <mat-tab label=\"Talent Profile\">\n                            <div class=\"example-large-box mat-elevation-z4\">\n                                <div class=\"columns\">\n                                    <div class=\"column is-11\">\n                                        <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243); width: 20%;\">\n                                                    <label class=\"label\">Search status</label>\n                                                </td>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <mat-select placeholder=\"Job Search Status\" [(value)]=\"selected\"\n                                                            formControlName=\"jobsearchstatus\">\n                                                            <mat-option value=\"Actively Interviewing\">Actively\n                                                                Interviewing</mat-option>\n                                                        </mat-select>\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <label class=\"label\">Job Type</label>\n                                                </td>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <mat-select placeholder=\"Job Type\" multiple formControlName=\"jobtype\">\n                                                            <mat-option *ngFor=\"let job of typesOfJobs\" [value]=\"job\">{{job}}</mat-option>\n                                                        </mat-select>\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <label class=\"label\">Annual Salary</label>\n                                                </td>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput formControlName=\"desiredannualsalary\"\n                                                            placeholder=\"Desired Annual Salary\" type=\"number\" class=\"example-right-align\">\n                                                        <span matPrefix>$&nbsp;</span>\n                                                        <span matSuffix>.00</span>\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <label class=\"label\">Annual Salary</label>\n                                                </td>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput placeholder=\"Desired Location\" type=\"text\"\n                                                            formControlName=\"desiredlocation\">\n                                                    </mat-form-field>\n                                                    <br>\n                                                    <mat-checkbox formControlName=\"opentoworkremotely\">Open to work\n                                                        remotely</mat-checkbox>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <label class=\"label\">Work Authorization</label>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <table>\n                                                        <tr>\n                                                            <td style=\"border-bottom-color:rgb(245, 243, 243); width: 50%;\">\n                                                                <h6>Are you legally authorized to work in the United\n                                                                    States</h6>\n                                                            </td>\n                                                            <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                                <mat-radio-group formControlName=\"legallyauthorized\">\n                                                                    <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                                                                    <mat-radio-button value=\"No\">No</mat-radio-button>\n                                                                </mat-radio-group>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                                <h6>Do you or will you require sponsorship for a US\n                                                                    employment visa</h6>\n                                                            </td>\n                                                            <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                                <mat-radio-group formControlName=\"requiresponsorship\">\n                                                                    <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n                                                                    <mat-radio-button value=\"No\">No</mat-radio-button>\n                                                                </mat-radio-group>\n                                                            </td>\n                                                        </tr>\n                                                    </table>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"2\" style=\"border-bottom-color:rgb(245, 243, 243);\">\n\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\"></td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n                        <mat-tab label=\"Social\">\n                            <div class=\"example-large-box mat-elevation-z4\">\n                                <div class=\"columns\">\n                                    <div class=\"column is-11\">\n                                        <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput placeholder=\"LinkedIn url\" type=\"url\"\n                                                            formControlName=\"linkedinurl\">\n                                                        <span matPrefix>http://&nbsp;</span>\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput placeholder=\"Website url\" formControlName=\"websiteurl\">\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput placeholder=\"Twitter url\" formControlName=\"twitterurl\">\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"border-bottom-color:rgb(245, 243, 243);\">\n                                                    <mat-form-field>\n                                                        <input matInput placeholder=\"Github url\" formControlName=\"githuburl\">\n                                                    </mat-form-field>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n                    </mat-tab-group>\n\n\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">&nbsp;</div>\n                    </div>\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">\n                            <h5>Skills</h5>\n                        </div>\n                    </div>\n\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">\n\n                            <div class=\"columns\">\n                                <div class=\"column is-11\">\n                                    <table class=\"table is-fullwidth\" formArrayName=\"skills\" style=\"background-color:rgb(245, 243, 243)\">\n                                        <tr *ngIf=\"skillForms.controls == null\">\n                                            <td>\n                                                <h3>No skills added</h3>\n                                            </td>\n                                        </tr>\n                                        <tr *ngFor=\"let skill of skillForms.controls; let i=index\" [formGroupName]=\"i\">\n                                            <td style=\"border:0px; width: 650%;\">\n                                                <mat-form-field>\n                                                    <mat-select placeholder=\"Choose skill\" formControlName=\"skillname\">\n                                                        <mat-option value=\".NET\">.NET</mat-option>\n                                                        <mat-option value=\"Python\">Python</mat-option>\n                                                        <mat-option value=\"Java\">Java</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </td>\n                                            <td style=\"border:0px; width: 40%;\">\n                                                <mat-form-field>\n                                                    <mat-select placeholder=\"Choose skill level\" formControlName=\"skilllevel\">\n                                                        <mat-option value=\"Expert\">Expert</mat-option>\n                                                        <mat-option value=\"Intermediate\">Intermediate</mat-option>\n                                                        <mat-option value=\"Beginner\">Beginner</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </td>\n                                            <td style=\"border:0px; width: 5%;\">\n                                                <button mat-icon-button color=\"warn\" (click)=\"deleteSkill(i)\">\n                                                    <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td colspan=\"3\">\n                                                <table>\n                                                    <tr>\n                                                        <td>\n                                                            <button mat-button (click)=\"addSkill()\">\n                                                                <mat-icon aria-label=\"Add skill\">add_circle</mat-icon>\n                                                                Add another skill\n                                                            </button>\n                                                        </td>\n                                                    </tr>\n                                                    \n                                                    <!-- <tr>\n                                                        <td style=\"width:80%;\">\n                                                            <mat-form-field>\n                                                                <input #NewSkill matInput placeholder=\"Skill name\"\n                                                                    required>\n                                                            </mat-form-field>\n                                                            <label #NewSkillError class=\"mat-error\" style=\"color:red;\"></label>\n                                                        </td>\n                                                        <td style=\"width:20%;\">\n                                                            <button mat-button (click)=\"saveSkill(NewSkill, NewSkillError)\">\n                                                                <mat-icon aria-label=\"Save skill\">save</mat-icon> Save\n                                                                skill\n                                                            </button>\n                                                        </td>\n                                                    </tr> -->\n                                                </table>\n\n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <table class=\"table is-fullwidth\"  style=\"background-color:rgb(245, 243, 243)\">\n                                        <tr>\n                                            <td>\n                                                <mat-form-field>\n                                                    <textarea matInput placeholder=\"Additional skills\" formControlName=\"additionalskills\"></textarea>\n                                                    <mat-hint align=\"start\"><strong>Add skills not in the drop down skill list. Separate with comma.</strong>\n                                                    </mat-hint>\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </div>\n                                <div>\n                                    &nbsp;\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">&nbsp;</div>\n                    </div>\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">\n                            <h5>Experience</h5>\n                            <button mat-button (click)=\"openSnackBar('message.value', 'action.value')\">Show snack-bar</button>\n                            <button mat-button (click)=\"openDialog()\">Open dialog</button>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">\n                            <div class=\"columns\">\n                                <div class=\"column is-11\">\n                                    <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                        <tr>\n                                            <td style=\"width:30%;\">\n                                                <mat-form-field>\n                                                    <mat-select #AddType [(value)]=\"selected\">\n                                                        <mat-option value=\"Project\">Add Project</mat-option>\n                                                        <mat-option value=\"Title\">Add Title</mat-option>\n                                                        <mat-option value=\"Company Name\">Add Company Name</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </td>\n                                            <td style=\"width:70%;\">\n                                                <mat-form-field>\n                                                    <input #ProjectName matInput placeholder=\"{{AddType.value}}\"\n                                                        required>\n                                                    <mat-error>{{message.valid}}</mat-error>\n                                                </mat-form-field>\n                                                <label #tempError class=\"mat-error\" style=\"color:red;\"></label>\n                                            </td>\n\n                                        </tr>\n                                    </table>\n                                </div>\n                                <div>\n                                    <br>\n                                    <button mat-fab color=\"primary\" [disabled]=\"ProjectName.invalid\" (click)=\"addExperience(AddType, ProjectName, tempError)\">\n                                        <mat-icon aria-label=\"Example icon-button with a heart icon\">save</mat-icon>\n                                    </button>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"columns\" formArrayName=\"experiences\">\n                        <div class=\"column is-12\">\n                            <div class=\"columns\" *ngFor=\"let exp of experienceForms.controls; let i=index\"\n                                [formGroupName]=\"i\">\n                                <div class=\"column is-11\">\n                                    <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                        <tr>\n                                            <td style=\"border:0px;\" colspan=\"2\">\n                                                {{i+1}}\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Project\" formControlName=\"project\">\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"border:0px;\" colspan=\"2\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Title\" formControlName=\"title\">\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"border:0px;\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Company\" formControlName=\"company\">\n                                                </mat-form-field>\n                                            </td>\n                                            <td style=\"border:0px;\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Location\" formControlName=\"location\"\n                                                    class=\"google-place-input\"\n                                                            google-place\n                                                            (onSelect)=\"setexperienceAddress($event, experiencelocation)\">\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"border:0px;\">\n                                                <mat-form-field>\n                                                    <input matInput [matDatepicker]=\"picker\" formControlName=\"fromdate\"\n                                                        placeholder=\"From\" disabled>\n                                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                                </mat-form-field>\n                                            </td>\n                                            <td style=\"border:0px;\">\n                                                <mat-form-field>\n                                                    <input matInput [matDatepicker]=\"dp3\" formControlName=\"todate\"\n                                                        placeholder=\"To\" disabled>\n                                                    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n                                                    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n                                                </mat-form-field>\n                                                <mat-checkbox formControlName=\"currentlyemployed\">Currently employed</mat-checkbox>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"border:0px;\" colspan=\"2\">\n                                                <mat-form-field>\n                                                    <textarea matInput placeholder=\"Project description\"\n                                                        formControlName=\"projectdescription\"></textarea>\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n\n                                    </table>\n                                </div>\n                                <div>\n                                    <br>\n                                    <button mat-fab color=\"warn\" (click)=\"openDialog('experience', i)\" matTooltip=\"Delete experience\">\n                                        <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                                    </button>\n                                    <br><br>\n                                    <!-- <button mat-fab color=\"primary\" (click)=\"openDialog('experience',-1)\">\n                                        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n                                    </button> -->\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n\n\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">&nbsp;</div>\n                    </div>\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">\n                            <h5>Education</h5>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">\n                            <div class=\"columns\">\n                                <div class=\"column is-11\">\n                                    <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                        <tr>\n                                            <td style=\"width:30%;\">\n                                                School Name\n                                            </td>\n                                            <td style=\"width:70%;\">\n                                                <mat-form-field>\n                                                    <input #SchoolName matInput placeholder=\"School Name\" required>\n                                                </mat-form-field>\n                                                <label #SchoolNameError class=\"mat-error\" style=\"color:red;\"></label>\n                                            </td>\n\n                                        </tr>\n                                    </table>\n                                </div>\n                                <div>\n                                    <br>\n                                    <button mat-fab color=\"primary\" (click)=\"addSchool(SchoolName, SchoolNameError)\">\n                                        <mat-icon aria-label=\"Example icon-button with a heart icon\">save</mat-icon>\n                                    </button>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"columns\" formArrayName=\"educationalqualifications\">\n                        <div class=\"column is-12\">\n                            <div class=\"columns\" *ngFor=\"let school of educationalqualificationsForms.controls; let i=index\"\n                                [formGroupName]=\"i\">\n                                <div class=\"column is-11\">\n                                    <table class=\"table is-fullwidth\" style=\"background-color:rgb(245, 243, 243)\">\n                                        <tr>\n                                            <td style=\"border:0px;\" colspan=\"2\">\n                                                {{i+1}}\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"College / University name\"\n                                                        formControlName=\"collegeuniversityname\">\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"border:0px;\" colspan=\"2\">\n                                                <mat-form-field>\n                                                    <input matInput [matDatepicker]=\"dateofcompletionpicker\"\n                                                        formControlName=\"dateofcompletion\" placeholder=\"Date of completion\"\n                                                        disabled>\n                                                    <mat-datepicker-toggle matSuffix [for]=\"dateofcompletionpicker\"></mat-datepicker-toggle>\n                                                    <mat-datepicker #dateofcompletionpicker disabled=\"false\"></mat-datepicker>\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"border:0px;\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Degree Type\" formControlName=\"degreetype\">\n                                                </mat-form-field>\n                                            </td>\n                                            <td style=\"border:0px;\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Major Field of study\" formControlName=\"majorfieldofstudy\">\n                                                </mat-form-field>\n                                            </td>\n                                        </tr>\n\n                                    </table>\n                                </div>\n                                <div>\n                                    <br>\n                                    <button mat-fab color=\"warn\" (click)=\"openDialog('education', i)\" matTooltip=\"Delete education\">\n                                        <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                                    </button>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"columns\">\n                        <div class=\"column is-12\">\n                            <button mat-raised-button color=\"primary\" [disabled]=\"myForm.invalid || state !== 'modified'\">\n                                <mat-icon aria-label=\"Save resume\">save</mat-icon> Save Resume\n                            </button>\n                            <a *ngIf=\"state === 'synced'\" mat-button routerLink=\".\"><i class=\"material-icons\">check_circle_outline</i>\n                                Resume saved.</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <hr> Fireform state: {{ state }} <br>\n        <hr>\n\n        <button mat-raised-button color=\"primary\" [disabled]=\"myForm.invalid || state !== 'modified'\">Save</button>\n\n        <div class=\"columns\">\n            <div class=\"column\">\n                <h3>Reactive Form Data</h3><br> {{ myForm.value | json }}\n            </div>\n\n            <div class=\"column\">\n\n                <h3>Firestore Data</h3><br> {{ myDoc | async | json }}\n                <br>\n                trial: {{ myDoc.bio | async | json }}\n            </div>\n\n\n        </div>\n\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/ui/profileresume/profileresume.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/ui/profileresume/profileresume.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  display: block; }\n\ntextarea {\n  min-height: 130px; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.content table td {\n  border: 0px; }\n"

/***/ }),

/***/ "./src/app/ui/profileresume/profileresume.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/profileresume/profileresume.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileresumeComponent, DialogContentExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileresumeComponent", function() { return ProfileresumeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function() { return DialogContentExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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






var ProfileresumeComponent = /** @class */ (function () {
    function ProfileresumeComponent(fb, afs, snackBar, dialog, activatedRoute, router, zone) {
        //this.resumename = this.revisedRandId();
        this.fb = fb;
        this.afs = afs;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.zone = zone;
        this.typesOfJobs = ['Full time employee', 'Contractor', 'Intern'];
        this.skillList = ['.NET', 'Python', 'Django'];
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = true;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.horizontalPosition = 'left';
        this.verticalPosition = 'bottom';
        this.selected = 'Project';
        this.title = 'Places';
    }
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    ProfileresumeComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            _this.myForm.controls['location'].setValue(addrObj['formatted_address']);
        });
    };
    ProfileresumeComponent.prototype.setexperienceAddress = function (addrObj, x) {
        var _this = this;
        console.log('in setexperienceAddress');
        console.log(' caller : ' + x.value);
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            //this.myForm.controls['location'].setValue(addrObj['formatted_address'];
            x.setValue(addrObj['formatted_address']);
        });
    };
    ProfileresumeComponent.prototype.getFirestoreId = function () {
        return this.afs.createId();
    };
    ProfileresumeComponent.prototype.revisedRandId = function () {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    };
    ProfileresumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.resumename = params['jid'];
        });
        if (this.resumename == undefined) {
            this.resumename = this.getFirestoreId();
            this.navigateToFoo();
        }
        this.myForm = this.fb.group({
            _id: [this.resumename],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            miniresume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            jobsearchstatus: [''],
            jobtype: [''],
            desiredannualsalary: [''],
            desiredlocation: [''],
            opentoworkremotely: [''],
            legallyauthorized: [''],
            requiresponsorship: [''],
            linkedinurl: [''],
            websiteurl: [''],
            twitterurl: [''],
            githuburl: [''],
            skills: this.fb.array([]),
            additionalskills: [''],
            //phones: this.fb.array([]),
            experiences: this.fb.array([]),
            educationalqualifications: this.fb.array([])
        });
        //this.myDoc = this.afs.doc('contacts/test2').valueChanges();
        this.myDoc = this.afs.doc('resume/' + this.resumename).valueChanges();
        this.preloadData();
    };
    ProfileresumeComponent.prototype.preloadData = function () {
        var _this = this;
        console.log('createId: ' + this.afs.createId());
        this.state = 'loading';
        //this.afs.doc('contacts/x7rtxWnvtg5062p9ZXo5').valueChanges().pipe(
        this.afs.doc('resume/' + this.resumename).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            //this.myForm.patchValue(data);
            if (data) {
                console.log(JSON.stringify(data));
                _this.myForm.controls['name'].setValue(data['name']);
                _this.myForm.controls['location'].setValue(data['location']);
                _this.myForm.controls['miniresume'].setValue(data['miniresume']);
                _this.myForm.controls['role'].setValue(data['role']);
                _this.myForm.controls['email'].setValue(data['email']);
                _this.myForm.controls['message'].setValue(data['message']);
                _this.myForm.controls['jobsearchstatus'].setValue(data['jobsearchstatus']);
                _this.myForm.controls['jobtype'].setValue(data['jobtype']);
                _this.myForm.controls['desiredannualsalary'].setValue(data['desiredannualsalary']);
                _this.myForm.controls['desiredlocation'].setValue(data['desiredlocation']);
                _this.myForm.controls['opentoworkremotely'].setValue(data['opentoworkremotely']);
                _this.myForm.controls['legallyauthorized'].setValue(data['legallyauthorized']);
                _this.myForm.controls['requiresponsorship'].setValue(data['requiresponsorship']);
                if (data['skills']) {
                    console.log('skills : ' + JSON.stringify(data['skills']));
                    //console.log('skills empty check : ' + Object.keys(data['skills']).length)
                    data['skills'].forEach(function (item) {
                        var skill = _this.fb.group({
                            skillname: [item['skillname']],
                            skilllevel: [item['skilllevel']]
                        });
                        _this.skillForms.push(skill);
                    });
                }
                else {
                    console.log('no skills');
                    //there are no skills available in DB add three skills as default
                }
                _this.myForm.controls['additionalskills'].setValue(data['additionalskills']);
                if (data['experiences']) {
                    console.log('experiences : ' + JSON.stringify(data['experiences']));
                    data['experiences'].forEach(function (item) {
                        var experience = _this.fb.group({
                            project: [item['project']],
                            title: [item['title']],
                            company: [item['company']],
                            fromdate: [new Date(_this.toDateTime(item['fromdate'] ? item['fromdate']['seconds'] : ''))],
                            todate: [new Date(_this.toDateTime(item['todate'] ? item['todate']['seconds'] : ''))],
                            currentlyemployed: [item['currentlyemployed']],
                            location: [item['location']],
                            projectdescription: [item['projectdescription']]
                        });
                        _this.experienceForms.push(experience);
                    });
                }
                else {
                    console.log('no experience found');
                }
                if (data['educationalqualifications']) {
                    console.log('educationalqualifications : ' + JSON.stringify(data['educationalqualifications']));
                    data['educationalqualifications'].forEach(function (item) {
                        var education = _this.fb.group({
                            collegeuniversityname: [item['collegeuniversityname']],
                            dateofcompletion: [new Date(_this.toDateTime(item['dateofcompletion'] ? item['dateofcompletion']['seconds'] : ''))],
                            degreetype: [item['degreetype']],
                            majorfieldofstudy: [item['majorfieldofstudy']],
                        });
                        _this.educationalqualificationsForms.push(education);
                    });
                }
                else {
                    console.log('no educationalqualifications found');
                }
                //this.isAdding = false;
            }
            else {
                //this.isAdding = true;
                var i;
                for (i = 0; i < 2; i++) {
                    var skill = _this.fb.group({
                        skillname: '',
                        skilllevel: ''
                    });
                    _this.skillForms.push(skill);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe();
    };
    ProfileresumeComponent.prototype.toDateTime = function (utcSeconds) {
        var returndate = "";
        if (utcSeconds != null) {
            var myDate = new Date(utcSeconds * 1000);
            returndate = myDate.toLocaleString();
        }
        return returndate;
    };
    ProfileresumeComponent.prototype.navigateToFoo = function () {
        // changes the route without moving from the current view or
        // triggering a navigation event
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                'jid': this.resumename
            },
            queryParamsHandling: 'merge',
            // preserve the existing query params in the route
            skipLocationChange: false
            // do not trigger navigation
        });
    };
    ProfileresumeComponent.prototype.initSkill = function () {
        console.log("in initSkill");
        // initialize our address
        return this.fb.group({
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            skill: ['']
        });
    };
    ProfileresumeComponent.prototype.openSnackBar = function (message, action) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarConfig"]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);
    };
    ProfileresumeComponent.prototype.openDialog = function (deltype, todelete) {
        //const dialogRef = this.dialog.open(DialogContentExampleDialog);
        var _this = this;
        var dialogRef = this.dialog.open(DialogContentExampleDialog, {
            data: {
                deletetype: deltype,
                displaytext: 'todelete id: ' + todelete
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            console.log('####' + result);
            if (result == true) {
                console.log('in result check true');
                switch (deltype) {
                    case "experience":
                        console.log('in switch case');
                        _this.deleteExperience(todelete);
                        break;
                    case "education":
                        _this.deleteEducation(todelete);
                        break;
                }
            }
        });
    };
    Object.defineProperty(ProfileresumeComponent.prototype, "skillForms", {
        get: function () {
            return this.myForm.get('skills');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileresumeComponent.prototype, "experienceForms", {
        get: function () {
            return this.myForm.get('experiences');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileresumeComponent.prototype, "educationalqualificationsForms", {
        get: function () {
            return this.myForm.get('educationalqualifications');
        },
        enumerable: true,
        configurable: true
    });
    ProfileresumeComponent.prototype.changeHandler = function (e) {
        // console.log(e)
        this.state = e;
    };
    ProfileresumeComponent.prototype.addSkill = function () {
        console.log('in add skill');
        try {
            var skill = this.fb.group({
                skillname: [],
                skilllevel: []
            });
            this.skillForms.push(skill);
        }
        catch (err) {
            console.error(err);
        }
    };
    ProfileresumeComponent.prototype.saveSkill = function (skillName, skilloutText) {
        console.log("skillName.value : " + skillName.value);
        if (skillName.value.trim() != '') {
            var skill = this.fb.group({
                skillname: [skillName.value],
                skilllevel: ['']
            });
            this.skillForms.push(skill);
        }
    };
    ProfileresumeComponent.prototype.addExperience = function (addtypevalue, input, outText) {
        console.log('####' + input.value);
        console.log('@@@' + addtypevalue.value);
        if (input.value.trim() != '') {
            var experience = this.fb.group({
                project: [input.value],
                title: [],
                company: [],
                location: [],
                fromdate: [],
                todate: [],
                currentlyemployed: [],
                projectdescription: []
            });
            this.experienceForms.push(experience);
        }
        else {
            //console.log('Project name required!!')
            //outText.textContent='Project name required!!'
        }
    };
    ProfileresumeComponent.prototype.addSchool = function (SchoolName, SchoolNameError) {
        if (SchoolName.value.trim() != '') {
            var school = this.fb.group({
                collegeuniversityname: [SchoolName.value],
                dateofcompletion: [],
                degreetype: [],
                majorfieldofstudy: []
            });
            this.educationalqualificationsForms.push(school);
        }
        else {
            //console.log('Project name required!!')
            //outText.textContent='Project name required!!'
        }
    };
    ProfileresumeComponent.prototype.deleteExperience = function (i) {
        console.log('in deleteExperience: ' + i);
        this.experienceForms.removeAt(i);
        this.openSnackBar('Experience deleted.', 'Succes');
    };
    ProfileresumeComponent.prototype.deleteSkill = function (i) {
        //console.log('deleteStill @ ')
        this.skillForms.removeAt(i);
    };
    ProfileresumeComponent.prototype.deleteEducation = function (i) {
        this.educationalqualificationsForms.removeAt(i);
        this.openSnackBar('School deleted.', 'Succes');
    };
    ProfileresumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profileresume',
            template: __webpack_require__(/*! ./profileresume.component.html */ "./src/app/ui/profileresume/profileresume.component.html"),
            styles: [__webpack_require__(/*! ./profileresume.component.scss */ "./src/app/ui/profileresume/profileresume.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ProfileresumeComponent);
    return ProfileresumeComponent;
}());

var DialogContentExampleDialog = /** @class */ (function () {
    function DialogContentExampleDialog(data) {
        this.data = data;
    }
    DialogContentExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./dialog-content-example-dialog.html */ "./src/app/ui/profileresume/dialog-content-example-dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DialogContentExampleDialog);
    return DialogContentExampleDialog;
}());



/***/ }),

/***/ "./src/app/ui/resumelist/resumelist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/resumelist/resumelist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"columns\">\n    <div class=\"column is-12\">\n        <div class=\"columns\">\n            <div class=\"column is-10 is-offset-1\">\n                <h1>MDA</h1>\n            </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-10 is-offset-1\">\n\n            <mat-tab-group dynamicHeight>\n              <mat-tab label=\"Short tab\">\n                <!-- <div class=\"example-small-box mat-elevation-z4\"> -->\n                  Small content\n                  <!-- <postjob></postjob> -->\n                <!-- </div> -->\n              </mat-tab>\n              <mat-tab label=\"Long tab\">\n                <div class=\"example-large-box mat-elevation-z4 columns\">\n                  \n                  <main class=\"column is-7\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                    \n                    <br>\n                    \n                    <mat-table #table [dataSource]=\"dataSource\" \n                          [trackBy]=\"trackByUid\" matSort class=\"animate\">\n                  \n                          \n                      <ng-container matColumnDef=\"name\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                        <mat-cell *matCellDef=\"let hacker\"> {{ hacker.name }} </mat-cell>\n                      </ng-container>\n                  \n                  \n                      <ng-container matColumnDef=\"age\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> age </mat-header-cell>\n                        <mat-cell *matCellDef=\"let hacker\"> {{ hacker.age }} <br> {{ hacker.email }} </mat-cell>\n                      </ng-container>\n                  \n                  \n                      <!-- <ng-container matColumnDef=\"email\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                        <mat-cell *matCellDef=\"let hacker\"> {{ hacker.email }} </mat-cell>\n                      </ng-container> -->\n                  \n                  \n                      <ng-container matColumnDef=\"phrase\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Phrase </mat-header-cell>\n                        <mat-cell *matCellDef=\"let hacker\"> {{ hacker.phrase }} </mat-cell>\n                      </ng-container>\n                  \n                      <!-- <ng-container matColumnDef=\"edit\">\n                          <mat-header-cell *matHeaderCellDef mat-sort-header> Edit </mat-header-cell>\n                          <mat-cell *matCellDef=\"let hacker\"> \n                            <button mat-raised-button  color=\"primary\" (click)=\"openDialog(hacker)\">Edit</button> \n                          </mat-cell>\n                      </ng-container> -->\n                  \n                  \n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></mat-row>\n                  \n                  </mat-table>\n                \n                  <mat-paginator [length]=\"100\"\n                                [pageSize]=\"10\"\n                                [pageSizeOptions]=\"[2, 5, 10, 25, 100]\">\n                    </mat-paginator>\n                  </main>\n                  <aside class=\"column is-2\">\n                    <h5>show details</h5>\n                    {{todisplayname}}\n                    <br>\n                    {{todisplayage}}\n                    <br>\n                    {{todisplayphrase}}\n                  </aside>\n                  </div>\n              </mat-tab>\n            </mat-tab-group>\n\n          </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/ui/resumelist/resumelist.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/resumelist/resumelist.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-small-box, .example-large-box {\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/ui/resumelist/resumelist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/resumelist/resumelist.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumelistComponent", function() { return ResumelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResumelistComponent = /** @class */ (function () {
    function ResumelistComponent(afs, dialog) {
        this.afs = afs;
        this.dialog = dialog;
        //displayedColumns = ['name', 'age', 'email', 'phrase', 'edit'];
        this.displayedColumns = ['name', 'age', 'phrase'];
        this.countItems = 0;
    }
    ResumelistComponent.prototype.addOne = function () {
        var hacker = {
            name: faker__WEBPACK_IMPORTED_MODULE_3__["name"].findName(),
            age: faker__WEBPACK_IMPORTED_MODULE_3__["random"].number({ min: 18, max: 99 }),
            email: faker__WEBPACK_IMPORTED_MODULE_3__["internet"].email(),
            phrase: faker__WEBPACK_IMPORTED_MODULE_3__["hacker"].phrase(),
            uid: faker__WEBPACK_IMPORTED_MODULE_3__["random"].alphaNumeric(16)
        };
        this.afs.collection('hackers').doc(hacker.uid).set(hacker);
    };
    ResumelistComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.afs.collection('resume').valueChanges().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
        // this.fetchData().subscribe(data => {
        //     console.log(JSON.stringify(data))
        //     this.dataSource = new MatTableDataSource(data);
        //     this.dataSource.sort = this.sort;
        //     this.dataSource.paginator = this.paginator;
        //   })
    };
    ResumelistComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ResumelistComponent.prototype.fetchData = function () {
        var _this = this;
        this.itemsCollection = this.afs.collection('resume');
        this.items = this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            _this.countItems = actions.length;
            return actions.map(function (action) { return ({ $key: action.payload.doc.id }); });
        }));
    };
    //openDialog(data): void {
    //  const dialogRef = this.dialog.open(EditDialogComponent, {
    //    width: '350px',
    //    data: data
    //  });
    //}
    ResumelistComponent.prototype.trackByUid = function (index, item) {
        return item.uid;
    };
    ResumelistComponent.prototype.selectRow = function (row) {
        console.log(row);
        this.todisplayname = row['name'];
        this.todisplayage = row['email'];
        this.todisplayphrase = row['phrase'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ResumelistComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ResumelistComponent.prototype, "paginator", void 0);
    ResumelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'resumelist',
            template: __webpack_require__(/*! ./resumelist.component.html */ "./src/app/ui/resumelist/resumelist.component.html"),
            styles: [__webpack_require__(/*! ./resumelist.component.scss */ "./src/app/ui/resumelist/resumelist.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ResumelistComponent);
    return ResumelistComponent;
}());



/***/ }),

/***/ "./src/app/ui/searchcandidates/searchcandidates.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui/searchcandidates/searchcandidates.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column is-narrow\">\n    <div class=\"\" style=\"width: 150px;\">\n      <!-- <p class=\"title is-5\">Narrow column</p>\n      <p class=\"subtitle\">This column is only 200px wide.</p>\n      <mat-toolbar color=\"\">\n          <mat-toolbar-row>\n            Custom Toolbar\n          </mat-toolbar-row>\n        \n          <mat-toolbar-row>\n            <span>Second Line</span>\n            <span class=\"example-spacer\"></span>\n            <mat-icon class=\"example-icon\">verified_user</mat-icon>\n          </mat-toolbar-row>\n        \n          <mat-toolbar-row>\n            <span>Third Line</span>\n            <span class=\"example-spacer\"></span>\n            <mat-icon class=\"example-icon\">favorite</mat-icon>\n            <mat-icon class=\"example-icon\">delete</mat-icon>\n          </mat-toolbar-row>\n        </mat-toolbar> -->\n    </div>\n  </div>\n  <div class=\"column\">\n    <mat-drawer-container class=\"example-container\" autosize>\n      <mat-drawer #drawer class=\"example-sidenav\" mode=\"over\">\n        <button mat-icon-button class=\"is-pulled-right\" (click)=\"drawer.toggle()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">clear</mat-icon>\n        </button>\n        {{todisplayname}}\n        <br>\n        {{todisplayage}}\n        <br>\n        {{todisplayphrase}}\n\n        <p>Auto-resizing sidenav asdf sadf dsf dsf df dsaf sdaf sdaf asdf dsaf sdaf sadfad dsaf sdfd</p>\n        <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n        <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n          Toggle extra text\n        </button>\n        <button (click)=\"drawer.toggle()\" mat-raised-button>\n          Close\n        </button>\n      </mat-drawer>\n\n      <div class=\"example-sidenav-content\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <br>\n        <mat-table #table [dataSource]=\"dataSource\" [trackBy]=\"trackByUid\" matSort class=\"animate\">\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let hacker\">\n              {{ hacker.name }} {{ hacker.email }}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"age\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> age </mat-header-cell>\n            <mat-cell *matCellDef=\"let hacker\"> {{ hacker.age }} <br> {{ hacker.email }} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"phrase\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Phrase </mat-header-cell>\n            <mat-cell *matCellDef=\"let hacker\"> {{ hacker.phrase }} </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row); drawer.toggle();\"></mat-row>\n\n        </mat-table>\n\n        <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[2, 5, 10, 25, 100]\">\n        </mat-paginator>\n        \n\n\n      </div>\n\n    </mat-drawer-container>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/searchcandidates/searchcandidates.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui/searchcandidates/searchcandidates.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 100%; }\n\n.example-sidenav-content {\n  height: 100%;\n  min-height: 500px; }\n\n.example-sidenav {\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/app/ui/searchcandidates/searchcandidates.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/searchcandidates/searchcandidates.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchcandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcandidatesComponent", function() { return SearchcandidatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchcandidatesComponent = /** @class */ (function () {
    function SearchcandidatesComponent(afs, dialog) {
        this.afs = afs;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'age', 'phrase'];
        this.countItems = 0;
    }
    SearchcandidatesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.afs.collection('resume').valueChanges().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    SearchcandidatesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    SearchcandidatesComponent.prototype.trackByUid = function (index, item) {
        return item.uid;
    };
    SearchcandidatesComponent.prototype.selectRow = function (row) {
        console.log(row);
        this.todisplayname = row['name'];
        this.todisplayage = row['email'];
        this.todisplayphrase = row['phrase'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SearchcandidatesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SearchcandidatesComponent.prototype, "paginator", void 0);
    SearchcandidatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'searchcandidates',
            template: __webpack_require__(/*! ./searchcandidates.component.html */ "./src/app/ui/searchcandidates/searchcandidates.component.html"),
            styles: [__webpack_require__(/*! ./searchcandidates.component.scss */ "./src/app/ui/searchcandidates/searchcandidates.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], SearchcandidatesComponent);
    return SearchcandidatesComponent;
}());



/***/ }),

/***/ "./src/app/ui/ssr-page/ssr-page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/ssr-page/ssr-page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular Universal Server Rendered Page</h1>\n\n<p>\n  This page is prerendered with Angular Universal and is 100% search engine and linkbot friedly - and highly performant. Give this URL a whirl in the\n  <a href=\"https://cards-dev.twitter.com/validator\">twitter-card validator</a>\n</p>\n\n<p>Learn all about <a href=\"https://angularfirebase.com/tag/ssr/\">server-side rendering strategies in Angular</a></p>\n\n<h2>Dynamic Firebase Data</h2>\n\n<p>Need SSR with dynamic Firebase data? No problem. Here are some animals I retrieved from Cloud Firestore.</p>\n\n<div *ngFor=\"let animal of animals\" class=\"box\">\n  <article class=\"media\">\n    <div class=\"media-left\">\n      <figure class=\"image is-128x128\">\n        <img [src]=\"animal.imgURL\" alt=\"{{ animal.bio }}\">\n      </figure>\n    </div>\n    <div class=\"media-content\">\n      <div class=\"content\">\n        <p>\n          <strong>{{ animal.name }}</strong>\n          <br> {{ animal.bio }}\n        </p>\n      </div>\n    </div>\n  </article>\n</div>"

/***/ }),

/***/ "./src/app/ui/ssr-page/ssr-page.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/ssr-page/ssr-page.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/ssr-page/ssr-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/ssr-page/ssr-page.component.ts ***!
  \***************************************************/
/*! exports provided: SsrPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsrPageComponent", function() { return SsrPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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





var DATA = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])('animals');
var SsrPageComponent = /** @class */ (function () {
    function SsrPageComponent(afs, meta, titleService, state) {
        this.afs = afs;
        this.meta = meta;
        this.titleService = titleService;
        this.state = state;
    }
    SsrPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set metatags for twitter
        this.setMetaTags();
        // Get the animals from the database
        var animals$ = this.afs.collection('animals').valueChanges();
        // If state is available, start with it your observable
        var exists = this.state.get(DATA, []);
        if (!exists.length) {
            animals$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (list) {
                _this.state.set(DATA, list);
                _this.animals = list;
            }))
                .subscribe();
        }
        else {
            this.animals = exists;
        }
    };
    SsrPageComponent.prototype.setMetaTags = function () {
        this.titleService.setTitle('Angular Firebase Animals');
        // Set meta tags
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Angular Firebase Animals' });
        this.meta.updateTag({ name: 'twitter:description', content: 'A server-rendered list of animals from Cloud Firestore in Angular' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://goo.gl/MzskMe' });
    };
    SsrPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ssr-page',
            template: __webpack_require__(/*! ./ssr-page.component.html */ "./src/app/ui/ssr-page/ssr-page.component.html"),
            styles: [__webpack_require__(/*! ./ssr-page.component.scss */ "./src/app/ui/ssr-page/ssr-page.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["TransferState"]])
    ], SsrPageComponent);
    return SsrPageComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/ui/main-nav/main-nav.component.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/ui/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification-message/notification-message.component */ "./src/app/ui/notification-message/notification-message.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/ui/user-form/user-form.component.ts");
/* harmony import */ var _ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ssr-page/ssr-page.component */ "./src/app/ui/ssr-page/ssr-page.component.ts");
/* harmony import */ var _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./postjob/postjob.component */ "./src/app/ui/postjob/postjob.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fire_form_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fire-form.directive */ "./src/app/ui/fire-form.directive.ts");
/* harmony import */ var _profile_resume_form_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile-resume-form.directive */ "./src/app/ui/profile-resume-form.directive.ts");
/* harmony import */ var _addresume_addresume_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./addresume/addresume.component */ "./src/app/ui/addresume/addresume.component.ts");
/* harmony import */ var _viewresume_viewresume_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./viewresume/viewresume.component */ "./src/app/ui/viewresume/viewresume.component.ts");
/* harmony import */ var _resumelist_resumelist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resumelist/resumelist.component */ "./src/app/ui/resumelist/resumelist.component.ts");
/* harmony import */ var _ad_listing_ad_listing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ad-listing/ad-listing.component */ "./src/app/ui/ad-listing/ad-listing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/ui/profile/profile.component.ts");
/* harmony import */ var _profileresume_profileresume_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profileresume/profileresume.component */ "./src/app/ui/profileresume/profileresume.component.ts");
/* harmony import */ var _onboarding_location_location_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./onboarding/location/location.component */ "./src/app/ui/onboarding/location/location.component.ts");
/* harmony import */ var _onboarding_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./onboarding/welcome/welcome.component */ "./src/app/ui/onboarding/welcome/welcome.component.ts");
/* harmony import */ var _onboarding_looking_looking_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./onboarding/looking/looking.component */ "./src/app/ui/onboarding/looking/looking.component.ts");
/* harmony import */ var _onboarding_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./onboarding/preferences/preferences.component */ "./src/app/ui/onboarding/preferences/preferences.component.ts");
/* harmony import */ var _onboarding_preview_preview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./onboarding/preview/preview.component */ "./src/app/ui/onboarding/preview/preview.component.ts");
/* harmony import */ var _google_places_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./google-places.directive */ "./src/app/ui/google-places.directive.ts");
/* harmony import */ var _searchcandidates_searchcandidates_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./searchcandidates/searchcandidates.component */ "./src/app/ui/searchcandidates/searchcandidates.component.ts");
/* harmony import */ var _onboarding_onboardingprofile_onboardingprofile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./onboarding/onboardingprofile/onboardingprofile.component */ "./src/app/ui/onboarding/onboardingprofile/onboardingprofile.component.ts");
/* harmony import */ var _onboarding_builder_builder_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./onboarding/builder/builder.component */ "./src/app/ui/onboarding/builder/builder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































//import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
//import 'rxjs/Rx';
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"]
                //Ng4GeoautocompleteModule.forRoot()
            ],
            declarations: [
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"],
                _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_8__["NotificationMessageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"],
                _ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_11__["SsrPageComponent"],
                _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_12__["PostjobComponent"],
                _fire_form_directive__WEBPACK_IMPORTED_MODULE_16__["FireFormDirective"],
                _profile_resume_form_directive__WEBPACK_IMPORTED_MODULE_17__["ProfileResumeFormDirective"],
                _addresume_addresume_component__WEBPACK_IMPORTED_MODULE_18__["AddresumeComponent"],
                _viewresume_viewresume_component__WEBPACK_IMPORTED_MODULE_19__["ViewresumeComponent"],
                _resumelist_resumelist_component__WEBPACK_IMPORTED_MODULE_20__["ResumelistComponent"],
                _ad_listing_ad_listing_component__WEBPACK_IMPORTED_MODULE_21__["AdListingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["DialogOverviewExampleDialog"],
                _profileresume_profileresume_component__WEBPACK_IMPORTED_MODULE_23__["DialogContentExampleDialog"],
                _addresume_addresume_component__WEBPACK_IMPORTED_MODULE_18__["DeleteDialog"],
                _profileresume_profileresume_component__WEBPACK_IMPORTED_MODULE_23__["ProfileresumeComponent"],
                _onboarding_location_location_component__WEBPACK_IMPORTED_MODULE_24__["LocationComponent"],
                _onboarding_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__["WelcomeComponent"],
                _onboarding_looking_looking_component__WEBPACK_IMPORTED_MODULE_26__["LookingComponent"],
                _onboarding_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_27__["PreferencesComponent"],
                _onboarding_preview_preview_component__WEBPACK_IMPORTED_MODULE_28__["PreviewComponent"],
                _google_places_directive__WEBPACK_IMPORTED_MODULE_29__["GooglePlacesDirective"],
                _searchcandidates_searchcandidates_component__WEBPACK_IMPORTED_MODULE_30__["SearchcandidatesComponent"],
                _onboarding_onboardingprofile_onboardingprofile_component__WEBPACK_IMPORTED_MODULE_31__["OnboardingprofileComponent"],
                _onboarding_builder_builder_component__WEBPACK_IMPORTED_MODULE_32__["BuilderComponent"]
            ],
            exports: [
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"],
                _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_8__["NotificationMessageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"]
            ],
            entryComponents: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["DialogOverviewExampleDialog"], _profileresume_profileresume_component__WEBPACK_IMPORTED_MODULE_23__["DialogContentExampleDialog"], _addresume_addresume_component__WEBPACK_IMPORTED_MODULE_18__["DeleteDialog"]],
            providers: []
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" *ngIf=\"newUser\" (ngSubmit)=\"signup()\">\n\n    <h3>New User Signup</h3>\n    <p class=\"button is-small\" (click)=\"toggleForm()\">Already Registered?</p>\n    <hr>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"input\" formControlName=\"email\" name=\"email\" required autocomplete=\"new-password\">\n\n    <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n        {{ formErrors.email }}\n    </div>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"input\" formControlName=\"password\" name=\"password\" required>\n\n    <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n        {{ formErrors.password }}\n    </div>\n\n    <div *ngIf=\"userForm.valid\" class=\"notification is-success\">Form is valid</div>\n    <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n</form>\n\n\n<form [formGroup]=\"userForm\" *ngIf=\"!newUser\" (ngSubmit)=\"login()\">\n\n    <h3>Existing User Login</h3>\n    <p class=\"btn button is-small\" (click)=\"toggleForm()\">New User?</p>\n    <hr>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\" name=\"email2\" class=\"input\" formControlName=\"email\" required autocomplete=\"new-password\">\n\n    <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n        {{ formErrors.email }}\n    </div>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" id=\"password\" name=\"password2\" class=\"input\" formControlName=\"password\" required autocomplete=\"new-password\">\n\n    <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n    </div>\n\n    <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n    <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n\n    <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n    <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n\n</form>"

/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.ts ***!
  \*****************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        //this.auth.resetPassword(this.userForm.value['email'])
        //  .then(() => this.passReset = true);
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                ]],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                ]],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/ui/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/ui/user-form/user-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Firebase User Auth Demo</h1>\n\n<p>\n  Learn more about \n  <a href=\"https://angularfirebase.com/tag/authentication\">Firebase auth strategies</a>.\n</p>\n<hr>\n\n<div *ngIf=\"!(auth.user | async); else alreadyLoggedIn\">\n\n  <h3>Social Login</h3>\n\n    <button (click)=\"signInWithGoogle()\" class=\"button btn-social btn-google\">\n      <i class=\"fa fa-google fa-lg\"></i> Connect Google\n    </button>\n\n    <button (click)=\"signInWithGithub()\" class=\"button btn-social btn-github\" disabled>\n      <i class=\"fa fa-github fa-lg\"></i> Connect GitHub\n    </button>\n\n    <button (click)=\"signInWithFacebook()\" class=\"button  btn-social btn-facebook\" disabled>\n      <i class=\"fa fa-facebook fa-lg\"></i> Connect Facebook\n    </button>\n\n    <button (click)=\"signInWithTwitter()\" class=\"button  btn-social btn-twitter\" disabled>\n      <i class=\"fa fa-twitter fa-lg\"></i> Connect Twitter\n    </button>\n\n    <hr>\n\n    <h3>Anonymous Login</h3>\n\n      <button (click)=\"signInAnonymously()\" class=\"button button-info\">\n        <i class=\"fa fa-user-secret fa-lg\"></i> Connect Anonymously\n      </button>\n\n    <hr>\n\n    <user-form></user-form>\n\n</div>\n\n<ng-template #alreadyLoggedIn>\n  <p class=\"text-success\">\n    You are logged in <i class=\"fa fa-thumbs-up\"></i>\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.ts ***!
  \*******************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    /// Social Login
    UserLoginComponent.prototype.signInWithGithub = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.githubLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.googleLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.facebookLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.twitterLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /// Anonymous Sign In
    UserLoginComponent.prototype.signInAnonymously = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.anonymousLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /// Shared
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        return this.router.navigate(['/']);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/ui/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/ui/user-login/user-login.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" >\n  <div *ngIf=\"auth.user | async; then authenticated else guest\">\n          <!-- template will replace this div -->\n  </div>\n</div>\n\n<!-- User NOT logged in -->\n<ng-template #guest class=\"box\">\n  <h3>Howdy, GUEST</h3>\n  <p class=\"card-text\">Login to get started...</p>\n  <button class=\"button\" routerLink=\"/login\">Login</button>\n</ng-template>\n\n<!-- User logged in -->\n<ng-template #authenticated>\n  <div *ngIf=\"auth.user | async as user\">\n    <h3>Howdy, {{ user.displayName }}</h3>\n    <img class=\"card-img-top\" [src]=\"user.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50px>\n    <p class=\"text-truncate\">UID: {{ user.uid }}</p>\n    <button class=\"button\" (click)=\"logout()\">Logout</button>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.ts ***!
  \***********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/ui/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/ui/user-profile/user-profile.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/ui/viewresume/viewresume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/viewresume/viewresume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewresume works!\n  \n  <br>\n  <span *ngIf=\"resumeObservable | async as resume\">\n    bio: <i>{{resume.bio}}</i><br>\n    career: <i>{{resume.career}}</i><br>\n    skill: <i>{{resume.skillArrayForm}}</i>\n\n    <ul>\n      <li *ngFor=\"let skills of resume.skillArrayForm\">\n      {{ skills.level }} by {{ skills.skill }}\n      </li>\n    </ul>\n    \n  </span>\n  <br>\n  {{resumeObservable | async | json }}\n</p>\n"

/***/ }),

/***/ "./src/app/ui/viewresume/viewresume.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/viewresume/viewresume.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/viewresume/viewresume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/viewresume/viewresume.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewresumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewresumeComponent", function() { return ViewresumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewresumeComponent = /** @class */ (function () {
    function ViewresumeComponent(afs) {
        this.afs = afs;
    }
    ViewresumeComponent.prototype.ngOnInit = function () {
        this.myDoc = this.afs.doc('contacts/test');
        this.resumeObservable = this.myDoc.valueChanges();
    };
    ViewresumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'viewresume',
            template: __webpack_require__(/*! ./viewresume.component.html */ "./src/app/ui/viewresume/viewresume.component.html"),
            styles: [__webpack_require__(/*! ./viewresume.component.scss */ "./src/app/ui/viewresume/viewresume.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ViewresumeComponent);
    return ViewresumeComponent;
}());



/***/ }),

/***/ "./src/app/uploads/drop-zone.directive.ts":
/*!************************************************!*\
  !*** ./src/app/uploads/drop-zone.directive.ts ***!
  \************************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropZoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropZoneDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropZoneDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "dropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "hovered", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragLeave", null);
    DropZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropZone]'
        }),
        __metadata("design:paramtypes", [])
    ], DropZoneDirective);
    return DropZoneDirective;
}());



/***/ }),

/***/ "./src/app/uploads/file-size.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/uploads/file-size.pipe.ts ***!
  \*******************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (sizeInBytes, longForm) {
        var units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        var size = sizeInBytes / Math.pow(1024, power); // size in new units
        var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        var unit = units[power];
        return size ? formattedSize + " " + unit : '0';
    };
    FileSizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fileSize'
        })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "./src/app/uploads/upload-page/upload-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/uploads/upload-page/upload-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Firebase Storage Demo</h1>\n\n<p>\n  Learn how to build an\n  <a href=\"https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/\">AngularFirebase dropzone uploader</a>\n</p>\n\n<hr>\n\n<div class=\"dropzone\" dropZone (hovered)=\"toggleHover($event)\" (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\">\n\n  <h3>AngularFire Drop Zone</h3>\n  <p>Drag and Drop a File</p>\n  <div class=\"file\">\n    <label class=\"file-label\">\n\n\n      <input class=\"file-input\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n\n      <span class=\"file-cta\">\n        <span class=\"file-icon\">\n          <i class=\"fa fa-upload\"></i>\n        </span>\n        <span class=\"file-label\">\n          or choose a file…\n        </span>\n      </span>\n    </label>\n  </div>\n</div>\n\n\n\n\n<div *ngIf=\"percentage | async as pct\">\n\n  <progress class=\"progress is-info\" [value]=\"pct\" max=\"100\">\n  </progress>\n\n  {{ pct | number }}%\n\n</div>\n\n\n\n\n\n\n<div *ngIf=\"(snapshot | async) as snap\">\n  {{ snap.bytesTransferred | fileSize }} of {{ snap.totalBytes | fileSize }}\n\n\n  <div *ngIf=\"downloadURL | async as url\">\n    <h3>Results!</h3>\n    <img [src]=\"url\">\n    <br>\n    <a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download Me!</a>\n  </div>\n  <hr>\n\n\n\n\n\n\n  <button (click)=\"task.pause()\" class=\"button is-warning\" [disabled]=\"!isActive(snap)\">Pause</button>\n  <button (click)=\"task.cancel()\" class=\"button is-danger\" [disabled]=\"!isActive(snap)\">Cancel</button>\n  <button (click)=\"task.resume()\" class=\"button is-info\" [disabled]=\"!(snap?.state === 'paused')\">Resume</button>\n\n\n</div>"

/***/ }),

/***/ "./src/app/uploads/upload-page/upload-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/uploads/upload-page/upload-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: 200;\n  height: 300px;\n  border: 2px dashed #f16624;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0; }\n  .dropzone.hovering {\n    border: 2px solid #f16624;\n    color: #dadada !important; }\n  .dropzone .file-label {\n    font-size: 1.2em; }\n  progress::-webkit-progress-value {\n  transition: width 0.1s ease; }\n  img {\n  width: 250px; }\n"

/***/ }),

/***/ "./src/app/uploads/upload-page/upload-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/uploads/upload-page/upload-page.component.ts ***!
  \**************************************************************/
/*! exports provided: UploadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageComponent", function() { return UploadPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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




var UploadPageComponent = /** @class */ (function () {
    function UploadPageComponent(storage, db) {
        this.storage = storage;
        this.db = db;
    }
    UploadPageComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    UploadPageComponent.prototype.startUpload = function (event) {
        var _this = this;
        // The File object
        var file = event.item(0);
        // Client-side validation example
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
            return;
        }
        // The storage path
        var path = "test/" + new Date().getTime() + "_" + file.name;
        // Totally optional metadata
        var customMetadata = { app: 'My AngularFire-powered PWA!' };
        // The main task
        this.task = this.storage.upload(path, file, { customMetadata: customMetadata });
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (snap) {
            if (snap.bytesTransferred === snap.totalBytes) {
                // Update firestore on completion
                _this.db.collection('photos').add({ path: path, size: snap.totalBytes });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.downloadURL = _this.storage.ref(path).getDownloadURL(); }));
        // The file's download URL
    };
    // Determines if the upload task is active
    UploadPageComponent.prototype.isActive = function (snapshot) {
        return (snapshot.state === 'running' &&
            snapshot.bytesTransferred < snapshot.totalBytes);
    };
    UploadPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'upload-page',
            template: __webpack_require__(/*! ./upload-page.component.html */ "./src/app/uploads/upload-page/upload-page.component.html"),
            styles: [__webpack_require__(/*! ./upload-page.component.scss */ "./src/app/uploads/upload-page/upload-page.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UploadPageComponent);
    return UploadPageComponent;
}());



/***/ }),

/***/ "./src/app/uploads/uploads.module.ts":
/*!*******************************************!*\
  !*** ./src/app/uploads/uploads.module.ts ***!
  \*******************************************/
/*! exports provided: UploadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsModule", function() { return UploadsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-page/upload-page.component */ "./src/app/uploads/upload-page/upload-page.component.ts");
/* harmony import */ var _drop_zone_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop-zone.directive */ "./src/app/uploads/drop-zone.directive.ts");
/* harmony import */ var _file_size_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-size.pipe */ "./src/app/uploads/file-size.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UploadsModule = /** @class */ (function () {
    function UploadsModule() {
    }
    UploadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_2__["UploadPageComponent"], _drop_zone_directive__WEBPACK_IMPORTED_MODULE_3__["DropZoneDirective"], _file_size_pipe__WEBPACK_IMPORTED_MODULE_4__["FileSizePipe"]]
        })
    ], UploadsModule);
    return UploadsModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAjU-xUFinMv34LwGnyB0V23r0mPQLIQHs",
        authDomain: "hiremuse-3da59.firebaseapp.com",
        databaseURL: "https://hiremuse-3da59.firebaseio.com",
        projectId: "hiremuse-3da59",
        storageBucket: "hiremuse-3da59.appspot.com",
        messagingSenderId: "590426111911"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nmarker/work/learnfirebase/firestarter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map