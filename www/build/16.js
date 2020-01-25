webpackJsonp([16],{

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePageModule", function() { return PublicProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_profile__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PublicProfilePageModule = /** @class */ (function () {
    function PublicProfilePageModule() {
    }
    PublicProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */]
            ]
        })
    ], PublicProfilePageModule);
    return PublicProfilePageModule;
}());

//# sourceMappingURL=public-profile.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_driverauthentication_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(18);
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
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicProfilePage = /** @class */ (function () {
    function PublicProfilePage(navCtrl, modalCtrl, toastCtrl, alertCtrl, AngularFireAuth, authenticationService, SignupService, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.navParams = navParams;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"];
        this.passenger = this.navParams.get('passenger');
        console.log(this.passenger);
    }
    PublicProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public-profile',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\driver\waypool_driver\src\pages\public-profile\public-profile.html"*/'<ion-header class="bg-theme">\n\n  <ion-navbar>\n\n      <ion-title>PERFIL DE {{passenger.name | uppercase}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n<!-- <ion-row>\n\n        <ion-item style="position: relative;z-index: 2;">\n\n                <ion-avatar item-start>\n\n                    <img class="image" src="assets/imgs/userPicture.png">\n\n                </ion-avatar>\n\n            </ion-item>\n\n</ion-row> -->\n\n<ion-row>\n\n    <ion-item>\n\n            <div class="name">\n\n                    <h1> \n\n                        {{passenger.name |titlecase}} {{passenger.lastname |titlecase}}\n\n                    </h1>\n\n                    \n\n                </div>\n\n    </ion-item>\n\n \n\n</ion-row>\n\n  \n\n  <div class="textBox">\n\n      <ion-list>   \n\n          <div class="bg-white" padding>\n\n              <ion-list no-lines>\n\n                  <ion-item>\n\n                      <ion-label stacked>Número Telefónico</ion-label>\n\n                      <ion-input type="text" [(ngModel)]="passenger.phone" readonly></ion-input>\n\n                    </ion-item>\n\n                    <!-- PROBLEM WITH DISPLAYING THE EMAIL -->\n\n                  <!-- <ion-item>\n\n                      <ion-label stacked>Email</ion-label>\n\n                      <ion-input type="text" [(ngModel)]="email" readonly></ion-input>                        <ion-input type="text" [(ngModel)]="user.name" readonly></ion-input>\n\n                  </ion-item> -->\n\n                  <ion-item>\n\n                      <ion-label stacked >Sobre {{passenger.name}}</ion-label>\n\n                      <ion-input type="text" [(ngModel)]="passenger.about" readonly></ion-input>\n\n                    </ion-item>\n\n                  <ion-item>\n\n                      <ion-label stacked>URL de interés</ion-label>\n\n                      <ion-input type="text" [(ngModel)]="passenger.url" readonly></ion-input>\n\n                  </ion-item>\n\n                 \n\n              </ion-list>\n\n          </div>\n\n      </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\driver\waypool_driver\src\pages\public-profile\public-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], PublicProfilePage);
    return PublicProfilePage;
}());

//# sourceMappingURL=public-profile.js.map

/***/ })

});
//# sourceMappingURL=16.js.map