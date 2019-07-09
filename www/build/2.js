webpackJsonp([2],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatetripPageModule", function() { return RatetripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratetrip__ = __webpack_require__(752);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ratetrip__["a" /* RatetripPage */]),
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

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(31));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer_ngx__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendFeedback_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geofire_services__ = __webpack_require__(333);
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
    function RatetripPage(navCtrl, navParams, emailComposer, SignUpServices, afDB, SignUpService, AngularFireAuth, sendfeedback, geofireService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.SignUpServices = SignUpServices;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.AngularFireAuth = AngularFireAuth;
        this.sendfeedback = sendfeedback;
        this.geofireService = geofireService;
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.userDriver = {};
        this.title = 'calificacion de viaje';
        this.today = Date.now();
        this.userDriver = this.navParams.get('user');
    }
    RatetripPage.prototype.sendEmail = function () {
        this.sendfeedback.sendFeedback(this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
        // this.geofireService.cancelGeoqueryDest();
        // this.geofireService.cancelGeoqueryOr();
    };
    RatetripPage.prototype.ionViewWillLeave = function () {
        // this.geofireService.cancelGeoqueryDest();
        // this.geofireService.cancelGeoqueryOr();
    };
    RatetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratetrip',template:/*ion-inline-start:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\ratetrip\ratetrip.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>Viaje Finalizado</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="slip">\n\n        <div text-center>\n\n            <h4 class="text-dark">¡Esperamos que hayas tenido un excelente viaje!</h4>\n\n            <p class="text-light">{{today | date}}\n\n\n\n        </p>\n\n            <h1 class="text-theme">$ {{userDriver.trips.price}}</h1>\n\n            <h4 class="text-dark">Podrás ver tu pago en el ícono<br>Ganancias</h4>\n\n        </div>\n\n    </ion-card>\n\n    <ion-card class="rate">\n\n        <div text-center>\n\n                <h4 class="text-dark">Cuéntanos {{userDriver.name}} como ha sido la experiencia con Waypool</h4>\n\n\n\n           \n\n            <div class="driver">\n\n                \n\n                <div class="form">\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-textarea [(ngModel)]="experience" type="text" placeholder="Déjanos tu sugerencia" ></ion-textarea>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n\n\n\n\n                <p padding-top><button navPop (click)="sendEmail()" class="btn text-white bg-theme rounded" style="width: 100%;">ENVIAR</button></p>\n\n            </div>\n\n        </div>\n\n    </ion-card>\n\n    <p class="love">Desarrollado con Amor para universitarios  <ion-icon name="heart"></ion-icon></p> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\ratetrip\ratetrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer_ngx__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_6__services_sendFeedback_service__["a" /* sendFeedbackService */], __WEBPACK_IMPORTED_MODULE_7__services_geofire_services__["a" /* geofireService */]])
    ], RatetripPage);
    return RatetripPage;
}());

//# sourceMappingURL=ratetrip.js.map

/***/ })

});
//# sourceMappingURL=2.js.map