webpackJsonp([27],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatsPageModule = /** @class */ (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */]
            ]
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, sendUsersService, AngularFireAuth, signUpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sendUsersService = sendUsersService;
        this.AngularFireAuth = AngularFireAuth;
        this.signUpService = signUpService;
        this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.pickingUsers = [];
        this.sendUsersService.getUsersOnTrip(this.signUpService.userPlace, this.driverUid)
            .subscribe(function (user) {
            _this.pickingUsers = user;
            console.log(_this.pickingUsers);
        });
    }
    ChatsPage.prototype.chatting = function (user) {
        this.navCtrl.push('ChattingPage', { user: user });
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\driver\waypool_driver\src\pages\chats\chats.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">CHATS\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item (click)="chatting(user)" *ngFor="let user of pickingUsers">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/userPicture.png">\n\n            <ion-badge color="danger">9+</ion-badge>\n\n        </ion-avatar>\n\n        <h2 class="text-theme">{{user.name |titlecase}} {{user.lastname | titlecase}}.\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n   \n\n    <p text-center class="text-light"><small>Este chat se borrará automáticamente cuando  <br>terminado el viaje.</small></p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\driver\waypool_driver\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ })

});
//# sourceMappingURL=27.js.map