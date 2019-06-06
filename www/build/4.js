webpackJsonp([4],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmdirectionPageModule", function() { return ConfirmdirectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdirection__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmdirectionPageModule = /** @class */ (function () {
    function ConfirmdirectionPageModule() {
    }
    ConfirmdirectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmdirection__["a" /* ConfirmdirectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmdirection__["a" /* ConfirmdirectionPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmdirection__["a" /* ConfirmdirectionPage */]
            ]
        })
    ], ConfirmdirectionPageModule);
    return ConfirmdirectionPageModule;
}());

//# sourceMappingURL=confirmdirection.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(31));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmdirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_price_service__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfirmdirectionPage = /** @class */ (function () {
    function ConfirmdirectionPage(navCtrl, PriceService, appCtrl, alertCtrl, afDB, sendUsersService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        this.navCtrl = navCtrl;
        this.PriceService = PriceService;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.sendUsersService = sendUsersService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geofireService = geofireService;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.buttonColor = '#001127';
        this.buttonColor2 = '#001127';
        this.buttonColor3 = '#001127';
        this.buttonColor4 = '#001127';
        this.click1 = false;
        this.click2 = false;
        this.click3 = false;
        this.click4 = false;
        this.geoinfo1 = this.navParams.get('geoInfo1');
        console.log(this.geoinfo1);
        this.geoinfo2 = this.navParams.get('geoInfo2');
        console.log(this.geoinfo2);
        this.driverInfo = this.navParams.get('driverInfo');
        console.log(this.driverInfo);
    }
    ConfirmdirectionPage.prototype.acceptTrip = function () {
        this.PriceService.saveTripToReserves(this.userUid, this.driverInfo.origin, this.driverInfo.destination, this.driverInfo.timeLeaving, this.driverInfo.price, this.driverInfo.car, this.driverInfo.note, this.driverInfo);
        this.accepted = true;
        this.dismiss();
    };
    ConfirmdirectionPage.prototype.setGeoFireOrigin = function () {
        this.buttonColor2 = '#0fc874';
        this.buttonColor = '#001127';
        this.buttonColor3 = '#001127';
        this.buttonColor4 = '#001127';
        this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
        this.click1 = true;
        if (this.click4 == true) {
            this.geofireService.cancelGeoqueryDest();
            this.click4 = false;
        }
    };
    ConfirmdirectionPage.prototype.setGeoFireOrigin1 = function () {
        this.buttonColor2 = '#001127';
        this.buttonColor = '#001127';
        this.buttonColor3 = '#0fc874';
        this.buttonColor4 = '#001127';
        this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
        this.click2 = true;
        if (this.click4 == true) {
            this.geofireService.cancelGeoqueryDest();
            this.click4 = false;
        }
    };
    ConfirmdirectionPage.prototype.setGeoFireOrigin2 = function () {
        this.buttonColor2 = '#001127';
        this.buttonColor = '#001127';
        this.buttonColor3 = '#001127';
        this.buttonColor4 = '#0fc874';
        this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
        this.click3 = true;
        if (this.click4 == true) {
            this.geofireService.cancelGeoqueryDest();
            this.click4 = false;
        }
    };
    ConfirmdirectionPage.prototype.setGeoFireDestination = function () {
        this.buttonColor = '#0fc874';
        this.buttonColor2 = '#001127';
        this.buttonColor3 = '#001127';
        this.buttonColor4 = '#001127';
        this.geofireService.setGeofireDest(1, this.geoinfo2.lat, this.geoinfo2.lng, this.driverInfo);
        this.click4 = true;
        if (this.click1 == true || this.click2 == true || this.click3 == true) {
            this.geofireService.cancelGeoqueryOr();
            this.click1 = false;
            this.click2 = false;
            this.click3 = false;
        }
    };
    ConfirmdirectionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ConfirmdirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmdirection',template:/*ion-inline-start:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\confirmdirection\confirmdirection.html"*/'<ion-content>\n\n  <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n  <ion-card>\n\n      <h6 class="text-theme">¿Cuál es tu destino? (IMPORTANTE)</h6>\n\n      <ion-card-content>\n\n          <div class="ride-detail">\n\n            <button class="btn bg-light text-white rounded" (click)="setGeoFireDestination()" [ngStyle]="{\'background-color\': buttonColor}">\n\n                Casa\n\n              <ion-icon name="home"></ion-icon>\n\n            </button>\n\n            <button class="btn bg-light text-white rounded" (click)="setGeoFireOrigin()" [ngStyle]="{\'background-color\': buttonColor2}">\n\n                  Universidad\n\n                <ion-icon name="book"></ion-icon>\n\n              </button>\n\n              <button class="btn bg-light text-white rounded" (click)="setGeoFireOrigin1()" [ngStyle]="{\'background-color\': buttonColor3}">\n\n                C. Jurídico Uninorte\n\n              \n\n            </button>\n\n            <button class="btn bg-light text-white rounded" (click)="setGeoFireOrigin2()"[ngStyle]="{\'background-color\': buttonColor4}">\n\n              Hospital Uninorte\n\n            <ion-icon name="book"></ion-icon>\n\n          </button>\n\n          </div>\n\n      </ion-card-content>\n\n\n\n      <ion-card-content>\n\n          <div class="seats">\n\n              \n\n              <ion-row style="margin-top: 14px;justify-content: center">\n\n                  \n\n                  <ion-col col-8>\n\n                      <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="acceptTrip()">Aceptar Viaje</button>\n\n                  </ion-col>\n\n              </ion-row>\n\n\n\n\n\n          </div>\n\n      </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\confirmdirection\confirmdirection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__services_price_service__["a" /* priceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */]])
    ], ConfirmdirectionPage);
    return ConfirmdirectionPage;
}());

//# sourceMappingURL=confirmdirection.js.map

/***/ })

});
//# sourceMappingURL=4.js.map