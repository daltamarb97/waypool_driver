webpackJsonp([16],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(741);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */]),
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

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__ = __webpack_require__(333);
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
    function ListridePage(navCtrl, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, alertCtrl, geofireService, afDB, instances, sendUsersService, toastCtrl, geoFireService) {
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
            console.log(_this.locationOrigin[0]);
        });
        //get destination from driver
        this.sendCoordsService.getDestination(this.driver)
            .subscribe(function (destination) {
            _this.locationDestination = destination;
            console.log(destination);
        });
        this.SignUpService.getMyInfoDriver(this.driver)
            .subscribe(function (userDriver) {
            _this.userDriver = userDriver;
            console.log(_this.userDriver);
        });
    }
    ListridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.subscribe = this.geofireService.getUsersListRide()
            .subscribe(function (user) {
            _this.usersFindingTrip = user;
        });
    };
    ListridePage.prototype.deleteUser = function (userId, nameUser) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Usuario',
            message: "\u00BFEstas que deseas eliminar a este a " + nameUser + " de tus posibles compa\u00F1eros de viaje?",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('holi');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        console.log('user eliminado');
                        // setTimeout(()=>{
                        //   //REVISAR
                        //   this.sendUsersService.removeUsersOnListRide(this.driver, userId);
                        //   this.sendUsersService.removeUsersOnPickingUsers(this.driver, userId );
                        // }, 600)
                        _this.sendUsersService.removeUsersOnListRide(_this.driver, userId);
                        console.log('remove on list');
                        _this.sendUsersService.removeUsersOnPickingUsers(_this.driver, userId);
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
            selector: 'page-listride',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_driver\src\pages\listride\listride.html"*/'<ion-header class="bg-theme title">\n\n    <ion-navbar >\n\n        <ion-title >USUARIOS DISPONIBLES\n\n\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light" class="hideLongText">\n\n    <ion-row class="center-align bg-white flow-ride">\n\n        <ion-col *ngFor = "let origin of locationOrigin"  class="hideLongText" col-5>\n\n            <h2>Mi Origen:</h2> {{origin}}\n\n\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n\n        </ion-col>\n\n        <ion-col *ngFor = "let destination of locationDestination" class="hideLongText" col-5>\n\n            <h2>Mi Destino:</h2> {{destination}}\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n    <div class="iconHelp">\n\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n\n\n    </div>\n\n\n\n    <ion-card *ngFor = "let user of usersFindingTrip">\n\n        \n\n                <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/userPicture.png">\n\n                        </ion-avatar>\n\n                        <div class="name">\n\n                            <h2>{{user.name |titlecase}} {{user.lastname |titlecase | slice:0:1}}.\n\n            \n\n                                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                            </h2>\n\n                        </div>\n\n                        <div class="more">\n\n                            <ion-icon name="close-circle"  (click)="deleteUser(user.userId, user.name)"></ion-icon>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        <div class="ride-detail">\n\n                            <p  >\n\n                                <span class="icon-location bg-theme"></span>{{user.origin}}</p>\n\n                            <p > \n\n                                <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n\n                        </div>\n\n                        <ion-row class="center-align">\n\n                            <!-- <ion-col col-3 class="detail-text text-theme">\n\n                                3 seats\n\n                            </ion-col> -->\n\n                            <ion-col col-2 class="detail-text text-theme">\n\n                            </ion-col>\n\n                            <ion-col col-4 class="detail-text text-theme">\n\n                            \n\n                            </ion-col>\n\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                                <button class="btn bg-theme rounded full text-white" (click)=confirmpopup(user) >Aceptar Usuario</button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-card-content>\n\n               \n\n        \n\n        \n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_driver\src\pages\listride\listride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["AngularFireDatabase"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */]) === "function" && _m || Object])
    ], ListridePage);
    return ListridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=16.js.map