webpackJsonp([14],{

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListridePageModule = /** @class */ (function () {
    function ListridePageModule() {
    }
    ListridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */]
            ]
        })
    ], ListridePageModule);
    return ListridePageModule;
}());

//# sourceMappingURL=listride.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RiderprofilePage } from '../riderprofile/riderprofile';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase} from 'angularfire2/database';







var ListridePage = /** @class */ (function () {
    function ListridePage(navCtrl, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, alertCtrl, geofireService, afDB, instances, sendUsersService, toastCtrl, geoFireService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.geofireService = geofireService;
        this.afDB = afDB;
        this.instances = instances;
        this.sendUsersService = sendUsersService;
        this.toastCtrl = toastCtrl;
        this.geoFireService = geoFireService;
        this.loadingCtrl = loadingCtrl;
        this.locationOrigin = [];
        this.locationDestination = [];
        this.driver = this.AngularFireAuth.auth.currentUser.uid;
        this.usersFindingTrip = [];
        this.user = [];
        this.usersOnListRide = [];
        this.text = 'Aceptar viaje';
        //get origin from driver
        this.sendCoordsService.getOrigin(this.driver)
            .subscribe(function (origin) {
            _this.locationOrigin = origin;
        });
        //get destination from driver
        this.sendCoordsService.getDestination(this.driver)
            .subscribe(function (destination) {
            _this.locationDestination = destination;
        });
        this.SignUpService.getMyInfoDriver(this.driver)
            .subscribe(function (userDriver) {
            _this.userDriver = userDriver;
        });
        this.subscribe = this.geofireService.getMyReserves(this.driver)
            .subscribe(function (reserve) {
            _this.usersFindingTrip = reserve;
            console.log(_this.usersFindingTrip);
        });
    }
    ListridePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // reserves delete itself after the startHour passes, TODO: dont eliminate if there are passengers in reserve
        // TODO: fix this because reserve must eliminate itself within a timeframe, not static times (currenthour / starthour)
        this.usersFindingTrip.forEach(function (reserveInd) {
            _this.reserveInd = reserveInd;
            var startTime = reserveInd.startHour.split(':');
            var currentTime = reserveInd.currentHour.split(':');
            var hours = startTime[0] - currentTime[0];
            var minutes = startTime[1] - currentTime[1];
            var hoursInMilliSeconds = hours * 3600000;
            var minutesInMilliseconds = minutes * 60000;
            _this.timeToWait = hoursInMilliSeconds + minutesInMilliseconds;
            console.log(_this.timeToWait);
            setTimeout(function () {
                _this.sendUsersService.removeReserve(_this.driver, reserveInd.keyTrip);
                //cancel specific geofire of reserve
                // TODO: geofire's reserve is not cancelling
                if (reserveInd.type == 'origin') {
                    console.log(reserveInd.geofireKey);
                    _this.geoFireService.cancelGeoqueryOr(reserveInd.geofireKey);
                }
                else if (reserveInd.type == 'destination') {
                    console.log(reserveInd.geofireKey);
                    _this.geoFireService.cancelGeoqueryDest(reserveInd.geofireKey);
                }
            }, _this.timeToWait);
        });
    };
    ListridePage.prototype.deleteUser = function (reserveKey, nameUser) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Usuario',
            message: "\u00BFEstas que deseas eliminar a este a " + nameUser + " de tus posibles compa\u00F1eros de viaje?",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.sendUsersService.removeReserve(_this.driver, reserveKey);
                        _this.geoFireService.cancelGeoqueryDest(_this.reserveInd.geofireKey);
                        _this.geoFireService.cancelGeoqueryOr(_this.reserveInd.geofireKey);
                    }
                }
            ]
        });
        alert.present();
    };
    ListridePage.prototype.confirmpopup = function (user) {
        var modal = this.modalCtrl.create('ConfirmpopupPage', { user: user });
        modal.present();
        // this.usersFindingTrip.pop();
        // this.subscribe.unsubscribe();
    };
    ListridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Aquí te saldrán los estudiantes que te hayan escogido, ahora te toca escoger a quienes y cuantos quieres llevar (máximo 4), a los que no quieras llevar, elimínalos',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/listride/listride.html"*/'<ion-header class="bg-theme title">\n    <ion-navbar >\n        <ion-title >USUARIOS DISPONIBLES\n\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light" class="hideLongText">\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col *ngFor = "let origin of locationOrigin"  class="hideLongText" col-5>\n            <h2>Mi Origen:</h2> {{origin}}\n\n        </ion-col>\n        <ion-col col-2 text-center>\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n        </ion-col>\n        <ion-col *ngFor = "let destination of locationDestination" class="hideLongText" col-5>\n            <h2>Mi Destino:</h2> {{destination}}\n        </ion-col>\n\n    </ion-row>\n    <div class="iconHelp">\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n    </div>\n\n    <ion-card *ngFor = "let reserve of usersFindingTrip">\n        \n                <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/userPicture.png">\n                        </ion-avatar>\n                        <div class="name">\n                            <h2>{{reserve.keyTrip |titlecase}}.\n            \n                                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                            </h2>\n                        </div>\n                        <div class="more">\n                            <ion-icon name="close-circle"  (click)="deleteUser(reserve.keyTrip, user.name)"></ion-icon>\n                        </div>\n                    </ion-item>\n                    <ion-card-content>\n                        <div class="ride-detail">\n                            <p  >\n                                <span class="icon-location bg-theme"></span>{{reserve.origin}}</p>\n                            <p > \n                                <span class="icon-location bg-yellow"></span>{{reserve.destination}}</p>\n                        </div>\n                        <ion-row class="center-align">\n                            <!-- <ion-col col-3 class="detail-text text-theme">\n                                3 seats\n                            </ion-col> -->\n                            <ion-col col-2 class="detail-text text-theme">\n                            </ion-col>\n                            <ion-col col-4 class="detail-text text-theme">\n                            \n                            </ion-col>\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                <button class="btn bg-theme rounded full text-white" (click)=confirmpopup(user) >Aceptar</button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n               \n        \n        \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["AngularFireDatabase"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _o || Object])
    ], ListridePage);
    return ListridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=14.js.map