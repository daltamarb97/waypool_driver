webpackJsonp([12],{

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatetripPageModule", function() { return RatetripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratetrip__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RatetripPageModule = /** @class */ (function () {
    function RatetripPageModule() {
    }
    RatetripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ratetrip__["a" /* RatetripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ratetrip__["a" /* RatetripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ratetrip__["a" /* RatetripPage */]
            ]
        })
    ], RatetripPageModule);
    return RatetripPageModule;
}());

//# sourceMappingURL=ratetrip.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendFeedback_service__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RatetripPage = /** @class */ (function () {
    function RatetripPage(navCtrl, navParams, SignUpServices, afDB, SignUpService, AngularFireAuth, sendfeedback, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SignUpServices = SignUpServices;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.AngularFireAuth = AngularFireAuth;
        this.sendfeedback = sendfeedback;
        this.alertCtrl = alertCtrl;
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.userDriver = {};
        this.title = 'calificacion de viaje';
        this.today = Date.now();
        this.userDriver = this.navParams.get('user');
        this.trip = this.navParams.get('trip');
    }
    RatetripPage.prototype.sendEmail = function () {
        if (this.experience === null || this.experience === undefined) {
            this.experience = 'no hay feedback';
            this.sendfeedback.sendFeedback(this.SignUpService.userUniversity, this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
            this.navCtrl.setRoot('TabsPage');
        }
        else {
            this.sendfeedback.sendFeedback(this.SignUpService.userUniversity, this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
            this.navCtrl.setRoot('TabsPage');
        }
    };
    RatetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratetrip',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\waypool_driver\src\pages\ratetrip\ratetrip.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>Viaje Finalizado</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="slip">\n\n        <div text-center>\n\n            <h4 class="text-dark">¡Esperamos que hayas tenido un excelente viaje!</h4>\n\n            <p class="text-light">{{today | date}}\n\n\n\n        </p>\n\n            <h1 class="text-theme">$ {{trip.price}}</h1>\n\n            <h4 class="text-dark">Podrás ver tu pago en el ícono<br>Ganancias</h4>\n\n        </div>\n\n    </ion-card>\n\n    <ion-card class="rate">\n\n        <div text-center>\n\n                <h4 class="text-dark">Cuéntanos {{userDriver.name}} como ha sido la experiencia con Waypool </h4>           \n\n            <div class="driver">                \n\n                <div class="form">\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-textarea [(ngModel)]="experience" type="text" placeholder="Déjanos tu sugerencia" ></ion-textarea>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n                <p padding-top><button navPop (click)="sendEmail()" class="btn text-white bg-theme rounded" style="width: 100%;">ENVIAR</button></p>\n\n            </div>\n\n        </div>\n\n        <!-- <ion-row>\n\n            <button navPop (click)="sendEmail()" class="btn text-white bg-theme rounded" style="width: 30%;">ENVIAR</button>\n\n\n\n        </ion-row> -->\n\n    </ion-card>\n\n    <p class="love">Desarrollado con Amor para universitarios  <ion-icon name="heart"></ion-icon></p> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\waypool_driver\src\pages\ratetrip\ratetrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_sendFeedback_service__["a" /* sendFeedbackService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RatetripPage);
    return RatetripPage;
}());

//# sourceMappingURL=ratetrip.js.map

/***/ })

});
//# sourceMappingURL=12.js.map