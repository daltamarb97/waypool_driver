webpackJsonp([19],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmtripPageModule", function() { return ConfirmtripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmtrip__ = __webpack_require__(756);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmtripPageModule = /** @class */ (function () {
    function ConfirmtripPageModule() {
    }
    ConfirmtripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmtrip__["a" /* ConfirmtripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmtrip__["a" /* ConfirmtripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmtrip__["a" /* ConfirmtripPage */]
            ]
        })
    ], ConfirmtripPageModule);
    return ConfirmtripPageModule;
}());

//# sourceMappingURL=confirmtrip.module.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_instances_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_signup_service__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConfirmtripPage = /** @class */ (function () {
    function ConfirmtripPage(navCtrl, SignUpServices, sendUsersService, TripsService, toastCtrl, viewCtrl, afDB, sendCoordsService, navParams, AngularFireAuth, instances) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.SignUpServices = SignUpServices;
        this.sendUsersService = sendUsersService;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.sendCoordsService = sendCoordsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.instances = instances;
        this.user = {};
        this.hideButton = true;
        this.hideText = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.user = this.navParams.get('user');
        console.log(this.user);
        this.SignUpServices.getMyInfo(this.SignUpServices.userUniversity, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (driverInfo) {
            _this.driver = driverInfo;
            console.log(_this.driver);
        });
    }
    ConfirmtripPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmtripPage.prototype.rejectUser = function () {
        this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userUniversity, this.userUid, this.driver.keyTrip, this.user.userId);
        console.log("nanai kukas");
        this.dismiss();
    };
    ConfirmtripPage.prototype.acceptUser = function () {
        this.TripsService.acceptLastMinute(this.SignUpServices.userUniversity, this.userUid, this.driver.keyTrip, this.user);
        this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userUniversity, this.userUid, this.driver.keyTrip, this.user.userId);
        console.log("bienvenido al combo");
        this.dismiss();
    };
    ConfirmtripPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // this.navCtrl.pop();
    };
    ConfirmtripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmtrip',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\merge\driver\waypool_driver\src\pages\confirmtrip\confirmtrip.html"*/'<ion-content>\n\n  \n\n    <ion-card>\n\n            <img src="assets/imgs/merecoges.png" width="100px" style="display:inline-block" height="150px"/>\n\n\n\n        <!-- <h5 class="text-hot">Este usuario desea irse contigo</h5> -->\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/flame.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>{{user.name|titlecase }} {{user.lastname|titlecase | slice:0:1}}</h2>\n\n                <p>Ingeniero de sistemas</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Origen</small>\n\n                    <span class="icon-location bg-hot"></span>{{user.origin}}</p>\n\n                <p>\n\n                    <small>Destino del viaje</small>\n\n                    <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before" >\n\n                <p><small>Nota:<span class="text-theme" float-right></span></small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                   {{user.note}}</p>               \n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button class="btn bg-white text-hot rounded" (click)="rejectUser()"  style="width: 100%;margin-top: 14px;">Rechazar</button>\n\n\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button class="btn bg-hot text-white rounded" (click)="acceptUser()"  style="width: 100%;margin-top: 14px;">Aceptar</button>\n\n                </ion-col>\n\n            </ion-row>\n\n           \n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\merge\driver\waypool_driver\src\pages\confirmtrip\confirmtrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_6__services_instances_service__["a" /* instancesService */]])
    ], ConfirmtripPage);
    return ConfirmtripPage;
}());

//# sourceMappingURL=confirmtrip.js.map

/***/ })

});
//# sourceMappingURL=19.js.map