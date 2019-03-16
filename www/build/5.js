webpackJsonp([5],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmdirectionPageModule", function() { return ConfirmdirectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdirection__ = __webpack_require__(738);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmdirection__["a" /* ConfirmdirectionPage */]),
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

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(39));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmdirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(332);
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
    function ConfirmdirectionPage(navCtrl, appCtrl, alertCtrl, afDB, sendUsersService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        this.navCtrl = navCtrl;
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
        this.buttonColor = '#0fc874';
        this.buttonColor2 = '#0fc874';
        this.geoinfo1 = this.navParams.get('geoInfo1');
        console.log(this.geoinfo1);
        this.geoinfo2 = this.navParams.get('geoInfo2');
        console.log(this.geoinfo2);
        this.driverInfo = this.navParams.get('driverInfo');
        console.log(this.driverInfo);
    }
    ConfirmdirectionPage.prototype.acceptTrip = function () {
        this.accepted = true;
        this.dismiss();
    };
    ConfirmdirectionPage.prototype.setGeoFireOrigin = function () {
        this.buttonColor2 = '#1AA3E8';
        this.buttonColor = '#0fc874';
        this.geofireService.setGeofireOr(1, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
    };
    ConfirmdirectionPage.prototype.setGeoFireDestination = function () {
        this.buttonColor = '#1AA3E8';
        this.buttonColor2 = '#0fc874';
        this.geofireService.setGeofireDest(1, this.geoinfo2.lat, this.geoinfo2.lng, this.driverInfo);
    };
    ConfirmdirectionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ConfirmdirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmdirection',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/confirmdirection/confirmdirection.html"*/'<ion-content>\n  <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n  <ion-card>\n      <h6 class="text-theme">¿para donde vas?</h6>\n      <ion-card-content>\n          <div class="ride-detail">\n            <button class="btn bg-theme text-white rounded" (click)="setGeoFireDestination()" [ngStyle]="{\'background-color\': buttonColor}">\n                Casa\n              <ion-icon name="home"></ion-icon>\n            </button>\n            <button class="btn bg-theme text-white rounded" (click)="setGeoFireOrigin()" [ngStyle]="{\'background-color\': buttonColor2}">\n                  Universidad\n                <ion-icon name="book"></ion-icon>\n              </button>\n          </div>\n      </ion-card-content>\n\n      <ion-card-content>\n          <div class="seats">\n              \n              <ion-row style="margin-top: 14px;justify-content: center">\n                  \n                  <ion-col col-8>\n                      <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="acceptTrip()">Aceptar Viaje</button>\n                  </ion-col>\n              </ion-row>\n\n\n          </div>\n      </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/confirmdirection/confirmdirection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */]])
    ], ConfirmdirectionPage);
    return ConfirmdirectionPage;
}());

//# sourceMappingURL=confirmdirection.js.map

/***/ })

});
//# sourceMappingURL=5.js.map