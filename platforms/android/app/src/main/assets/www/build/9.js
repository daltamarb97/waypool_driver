webpackJsonp([9],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(739);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]
            ]
        })
    ], SupportPageModule);
    return SupportPageModule;
}());

//# sourceMappingURL=support.module.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer_ngx__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SupportPage = /** @class */ (function () {
    function SupportPage(navCtrl, navParams, AngularFireAuth, emailComposer, authenticationService, SignupService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.emailComposer = emailComposer;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.user = {};
        this.typeOfSituation = this.navParams.get('typeOfSituation');
        this.info = this.navParams.get('info');
        this.today = Date.now();
        this.SignupService.getMyInfoForProfile(this.userUid).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    }
    SupportPage.prototype.sendEmail = function () {
        var _this = this;
        //send email
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //if its available we can send the mail
                _this.email = {
                    to: 'waypooltec@gmail.com',
                    cc: "" + _this.user.email + _this.user.fixedemail,
                    subject: _this.typeOfSituation,
                    body: _this.experience,
                    isHtml: true
                };
                _this.emailComposer.open(_this.email);
                // add alias
                _this.email.addAlias('gmail', 'com.google.android.gm');
                // then use alias when sending email
                _this.email.open({
                    app: 'gmail'
                });
            }
            else {
                console.log('hay un problema con el correo');
            }
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_driver\src\pages\support\support.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>Soporte</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="slip">\n\n        <div text-center>\n\n            <h1 class="text-theme">{{typeOfSituation}}</h1>\n\n            <p class="text-light">{{today | date}}\n\n            </p>\n\n           \n\n            <h4 class="text-dark">{{info}}</h4>\n\n        </div>\n\n    </ion-card>\n\n    <ion-card class="rate">\n\n        <div text-center>\n\n            \n\n            <div class="driver">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                    </h2>\n\n            \n\n                </ion-item>\n\n                \n\n                <div class="form">\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-textarea [(ngModel)]="experience" type="text" placeholder="¡Escríbenos con detalle!"></ion-textarea>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">ENVIAR</button></p>\n\n            </div>\n\n        </div>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_driver\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer_ngx__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=9.js.map