webpackJsonp([15],{

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(749);
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

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__ = __webpack_require__(331);
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
    ListridePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            if (_this.usersFindingTrip.length == 0) {
                _this.instances.noDriversAvailableInstance(_this.driver);
                setTimeout(function () {
                    if (_this.userDriver.noUsersMessage == true) {
                        _this.instances.clickedDirectionMessageCancel(_this.driver);
                        var alert_1 = _this.alertCtrl.create({
                            message: 'No hay compañeros en este momento para compartir tu viaje, vuelve a intentar en unos minutos',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        _this.instances.noDriversAvailableInstanceDelete(_this.driver);
                                        _this.geoFireService.cancelGeoqueryDest();
                                        _this.geoFireService.cancelGeoqueryOr();
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                }, 500);
            }
        }, 63000);
    };
    ListridePage.prototype.ionViewDidLeave = function () {
        this.geoFireService.cancelGeoqueryDest();
        this.geoFireService.cancelGeoqueryOr();
        clearTimeout(this.timer);
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
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/listride/listride.html"*/'<ion-header class="bg-theme title">\n    <ion-navbar >\n        <ion-title >USUARIOS DISPONIBLES\n\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light" class="hideLongText">\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col *ngFor = "let origin of locationOrigin"  class="hideLongText" col-5>\n            <h2>Mi Origen:</h2> {{origin}}\n\n        </ion-col>\n        <ion-col col-2 text-center>\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n        </ion-col>\n        <ion-col *ngFor = "let destination of locationDestination" class="hideLongText" col-5>\n            <h2>Mi Destino:</h2> {{destination}}\n        </ion-col>\n\n    </ion-row>\n    <div class="iconHelp">\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n    </div>\n\n    <ion-card *ngFor = "let user of usersFindingTrip">\n        \n                <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/userPicture.png">\n                        </ion-avatar>\n                        <div class="name">\n                            <h2>{{user.name |titlecase}} {{user.lastname |titlecase | slice:0:1}}.\n            \n                                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                            </h2>\n                        </div>\n                        <div class="more">\n                            <ion-icon name="close-circle"  (click)="deleteUser(user.userId, user.name)"></ion-icon>\n                        </div>\n                    </ion-item>\n                    <ion-card-content>\n                        <div class="ride-detail">\n                            <p  >\n                                <span class="icon-location bg-theme"></span>{{user.origin}}</p>\n                            <p > \n                                <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n                        </div>\n                        <ion-row class="center-align">\n                            <!-- <ion-col col-3 class="detail-text text-theme">\n                                3 seats\n                            </ion-col> -->\n                            <ion-col col-2 class="detail-text text-theme">\n                            </ion-col>\n                            <ion-col col-4 class="detail-text text-theme">\n                            \n                            </ion-col>\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                <button class="btn bg-theme rounded full text-white" (click)=confirmpopup(user) >Aceptar</button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n               \n        \n        \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=15.js.map