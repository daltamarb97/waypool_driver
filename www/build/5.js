webpackJsonp([5],{

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmdirectionPageModule", function() { return ConfirmdirectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdirection__ = __webpack_require__(745);
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

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(36));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmdirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(334);
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
    function ConfirmdirectionPage(navCtrl, appCtrl, alertCtrl, afDB, sendUsersService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService, instances, loadingCtrl) {
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
        this.instances = instances;
        this.loadingCtrl = loadingCtrl;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.buttonColor = '#001127';
        this.buttonColor2 = '#001127';
        this.buttonColor3 = '#001127';
        this.buttonColor4 = '#001127';
        this.geoinfo1 = this.navParams.get('geoInfo1');
        console.log(this.geoinfo1);
        this.geoinfo2 = this.navParams.get('geoInfo2');
        console.log(this.geoinfo2);
        this.driverInfo = this.navParams.get('driverInfo');
        console.log(this.driverInfo);
    }
    ConfirmdirectionPage.prototype.ionViewWillEnter = function () {
        this.click1 = false;
        this.click2 = false;
        this.click3 = false;
        this.click4 = false;
    };
    ConfirmdirectionPage.prototype.acceptTrip = function () {
        this.accepted = true;
        // this.instances.clickedDirectionMessage(this.userUid);
        this.dismiss();
    };
    ConfirmdirectionPage.prototype.setGeoFireOrigin = function () {
        this.buttonColor2 = '#0fc874';
        this.buttonColor = '#001127';
        this.buttonColor3 = '#001127';
        this.buttonColor4 = '#001127';
        this.geofireService.setGeofireOr(2, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
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
        this.geofireService.setGeofireOr(2, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
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
        this.geofireService.setGeofireOr(2, this.geoinfo1.lat, this.geoinfo1.lng, this.driverInfo);
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
        this.geofireService.setGeofireDest(2, this.geoinfo2.lat, this.geoinfo2.lng, this.driverInfo);
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
    ConfirmdirectionPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Buscando compañeros...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 30000);
    };
    ConfirmdirectionPage.prototype.ionViewDidLeave = function () {
        this.presentLoadingDefault();
    };
    ConfirmdirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmdirection',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/confirmdirection/confirmdirection.html"*/'<ion-content>\n  <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n  <ion-card>\n      <h6 class="text-theme">¿Cuál es tu destino? (IMPORTANTE)</h6>\n      <ion-card-content>\n          <div class="ride-detail">\n            <button class="btn bg-light text-white rounded" (click)="setGeoFireDestination()" [ngStyle]="{\'background-color\': buttonColor}">\n                Casa\n              <ion-icon name="home"></ion-icon>\n            </button>\n            <button class="btn bg-light text-white rounded" (click)="setGeoFireOrigin()" [ngStyle]="{\'background-color\': buttonColor2}">\n                  Universidad\n                <ion-icon name="book"></ion-icon>\n              </button>\n              <button class="btn bg-light text-white rounded" (click)="setGeoFireOrigin1()" [ngStyle]="{\'background-color\': buttonColor3}">\n                C. Jurídico Uninorte\n              \n            </button>\n            <button class="btn bg-light text-white rounded" (click)="setGeoFireOrigin2()"[ngStyle]="{\'background-color\': buttonColor4}">\n              Hospital Uninorte\n            <ion-icon name="book"></ion-icon>\n          </button>\n          </div>\n      </ion-card-content>\n\n      <ion-card-content>\n          <div class="seats">\n              \n              <ion-row style="margin-top: 14px;justify-content: center">\n                  \n                  <ion-col col-8>\n                      <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="acceptTrip()">Iniciar Viaje</button>\n                  </ion-col>\n              </ion-row>\n\n\n          </div>\n      </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/confirmdirection/confirmdirection.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _o || Object])
    ], ConfirmdirectionPage);
    return ConfirmdirectionPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=confirmdirection.js.map

/***/ })

});
//# sourceMappingURL=5.js.map