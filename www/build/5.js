webpackJsonp([5],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationNumberPageModule", function() { return VerificationNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_number__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificationNumberPageModule = /** @class */ (function () {
    function VerificationNumberPageModule() {
    }
    VerificationNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verification_number__["a" /* VerificationNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verification_number__["a" /* VerificationNumberPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__verification_number__["a" /* VerificationNumberPage */]
            ]
        })
    ], VerificationNumberPageModule);
    return VerificationNumberPageModule;
}());

//# sourceMappingURL=verification-number.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverauthentication_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerificationNumberPage = /** @class */ (function () {
    function VerificationNumberPage(navCtrl, navParams, modalCtrl, authenticationService, alertCtrl, AngularFireAuth, signUpService, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.signUpService = signUpService;
        this.app = app;
        this.userId = this.navParams.get('userId');
    }
    VerificationNumberPage.prototype.code = function () {
        var _this = this;
        this.authenticationService.deleteResendCode(this.signUpService.userUniversity, this.userId);
        this.authenticationService.sendVerificationCodeToFirebase(this.signUpService.userUniversity, this.userId, this.confText);
        this.signUpService.getMyInfo(this.signUpService.userUniversity, this.userId).subscribe(function (driver) {
            _this.driverInfo = driver;
            if (_this.driverInfo.verificationCodeApproval === true) {
                _this.app.getRootNav().push('LoginPage');
                _this.authenticationService.deleteVerificationCode(_this.signUpService.userUniversity, _this.userId);
            }
            else if (_this.driverInfo.verificationCodeApproval === false) {
                _this.authenticationService.deleteVerificationCode(_this.signUpService.userUniversity, _this.userId);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Código Errado',
                    subTitle: 'el código de verificacón está errado',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    VerificationNumberPage.prototype.resendCode = function () {
        this.authenticationService.deleteverificationCodeApproval(this.signUpService.userUniversity, this.userId);
        this.authenticationService.resendVerificationCode(this.signUpService.userUniversity, this.userId);
    };
    VerificationNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification-number',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/verification-number/verification-number.html"*/'<ion-header class="transparent">\n  <ion-navbar>\n      <ion-title><span class="text-white">verification</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n  <div class="logo">\n      <img src="assets/imgs/logo waypool gris-01.png" alt="logo">\n  </div>\n  <div class="bg-white login">\n      <div class="">\n          <p padding text-center>Ingresa el código de confirmación<br>enviado a tu SMS!</p>\n          <br>\n          <ion-list class="form" text-center>\n              <ion-item>\n                  <ion-input type="text" [(ngModel)]=\'confText\' text-right></ion-input>\n              </ion-item>\n          </ion-list>\n          <button ion-button full class="bg-theme text-white btn rounded" (click)="code()">Next</button>\n          <br>\n          <p padding text-center class="resendingButton" (click)= "resendCode()">Reenviar código de verificación</p>      \n        </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/verification-number/verification-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], VerificationNumberPage);
    return VerificationNumberPage;
}());

//# sourceMappingURL=verification-number.js.map

/***/ })

});
//# sourceMappingURL=5.js.map