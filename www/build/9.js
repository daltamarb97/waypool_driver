webpackJsonp([9],{

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservetripPageModule", function() { return ReservetripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservetrip__ = __webpack_require__(756);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservetripPageModule = /** @class */ (function () {
    function ReservetripPageModule() {
    }
    ReservetripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservetrip__["a" /* ReservetripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservetrip__["a" /* ReservetripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__reservetrip__["a" /* ReservetripPage */]
            ]
        })
    ], ReservetripPageModule);
    return ReservetripPageModule;
}());

//# sourceMappingURL=reservetrip.module.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trips_service__ = __webpack_require__(336);
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








var ReservetripPage = /** @class */ (function () {
    function ReservetripPage(navCtrl, SignUpService, TripsService, sendCoordsService, modalCtrl, AngularFireAuth, alertCtrl, geofireService, afDB, instances, sendUsersService, toastCtrl, geoFireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.SignUpService = SignUpService;
        this.TripsService = TripsService;
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
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.usersFindingTrip = [];
        this.user = [];
        this.usersOnListRide = [];
        this.text = 'Aceptar viaje';
        this.tripsReserves = [];
        //get personal info of the driver
        this.SignUpService.getMyInfoDriver(this.userUid)
            .subscribe(function (userDriver) {
            _this.userDriver = userDriver;
            console.log(_this.userDriver);
        });
        this.sendUsersService.getTripsOfReserves(this.userUid)
            .subscribe(function (tripsReserves) {
            _this.tripsReserves = tripsReserves;
            console.log(_this.tripsReserves);
        });
    }
    ReservetripPage.prototype.ionViewDidLoad = function () {
    };
    ReservetripPage.prototype.deleteUser = function (userId, nameUser) {
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
                        // this.sendUsersService.removeUsersOnListRide(this.userUid, userId);
                        // console.log('remove on list')
                        _this.sendUsersService.removeUsersOnPickingUsers(_this.userUid, userId);
                    }
                }
            ]
        });
        alert.present();
    };
    ReservetripPage.prototype.startTrip = function (tripKeyTrip, trip) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Iniciar Viaje',
            message: "\u00BFEstas que seguro deseas iniciar viaje?",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('holi');
                    }
                },
                {
                    text: 'Sí',
                    handler: function () {
                        //check if driver has an active trip
                        if (_this.userDriver.onTrip === true) {
                            var toast = _this.toastCtrl.create({
                                message: 'No puedes iniciar otro viaje porque tienes un viaje en curso',
                                showCloseButton: true,
                                closeButtonText: 'OK',
                                position: 'middle'
                            });
                            toast.present();
                        }
                        else {
                            console.log(tripKeyTrip);
                            console.log(trip);
                            _this.TripsService.startTrip(tripKeyTrip, _this.userUid, trip);
                            _this.TripsService.pushKeyInDriver(tripKeyTrip, _this.userUid);
                            _this.TripsService.pushOnTripInDriver(_this.userUid);
                            //BORRAR RESERVA
                            // this.TripsService.deleteReserve(tripKeyTrip,this.userUid);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ReservetripPage.prototype.seePassengers = function (tripKeyTrip) {
        var modal = this.modalCtrl.create('ConfirmreservationPage', { reserveKey: tripKeyTrip });
        modal.present();
        // this.usersFindingTrip.pop();
        // this.subscribe.unsubscribe();
    };
    ReservetripPage.prototype.cancelReserve = function (typeOfReserve, geofireKey, keyTrip) {
        var _this = this;
        //HERE IT IS NECESSARY TO SET A PUSH NOT NOTICING USERS IN THE RESERVE THAT IT HAS BEEN REMOVED
        if (typeOfReserve == 'origin') {
            this.geofireService.cancelGeoqueryOr(geofireKey);
        }
        else if (typeOfReserve == 'destination') {
            this.geofireService.cancelGeoqueryDest(geofireKey);
        }
        this.afDB.database.ref('/reserves/' + this.userUid + '/' + keyTrip).remove()
            .then(function () {
            console.log('the reserve which key is ' + keyTrip + ' has been removed');
            _this.afDB.list('/reservesInfoInCaseOfCancelling/' + _this.userUid + '/' + keyTrip).valueChanges()
                .subscribe(function (userInRsv) {
                userInRsv.forEach(function (user) {
                    _this.userInReserveInfo = user;
                    _this.afDB.database.ref('/users/' + _this.userInReserveInfo.userId + '/availableReserves/' + keyTrip).remove();
                    _this.afDB.database.ref('/users/' + _this.userInReserveInfo.userId + '/myReserves/' + keyTrip).remove();
                });
                _this.afDB.database.ref('/reservesInfoInCaseOfCancelling/' + _this.userUid + '/' + keyTrip).remove();
            });
        });
    };
    ReservetripPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Aquí te saldrán las personas que quieren irse contigo',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ReservetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservetrip',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/reservetrip/reservetrip.html"*/'<ion-header class="bg-theme title">\n    <ion-navbar >\n        <ion-title >Mis Reservas\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light" class="hideLongText">\n\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col *ngFor = "let origin of locationOrigin"  class="hideLongText" col-5>\n            <h2>Mi Origen:</h2> {{origin}}\n\n        </ion-col>\n      \n        <ion-col *ngFor = "let destination of locationDestination" class="hideLongText" col-5>\n            <h2>Mi Destino:</h2> {{destination}}\n        </ion-col>\n\n    </ion-row>\n    <div class="iconHelp">\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n    </div>\n\n    <ion-card *ngFor = "let trip of tripsReserves">\n        \n                <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/userPicture.png">\n                        </ion-avatar>\n                        <div class="name">\n                            <h2>Inicio de viaje: {{trip.startHour |titlecase}} \n            \n                            </h2>\n                        </div>\n                        <div class="more">\n                              \n                                        <h2 class="text text-theme">                        \n                                            $ {{trip.price}}                          \n                                        </h2>                        \n                                 \n                        </div>\n                    </ion-item>\n                    <ion-card-content>\n                        <div class="ride-detail">\n                            <p  >\n                                <span class="icon-location bg-theme"></span>{{trip.origin}}</p>\n                            <p > \n                                <span class="icon-location bg-yellow"></span>{{trip.destination}}</p>\n                        </div>\n                        <ion-row class="center-align">\n                            <!-- <ion-col col-3 class="detail-text text-theme">\n                                3 seats\n                            </ion-col> -->\n                            <ion-col col-2 class="detail-text text-theme">\n                            </ion-col>\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                <button class="btn bg-theme rounded full text-white" (click)="startTrip(trip.keyTrip,trip)">\n                                    <ion-icon class="icon" name="play"></ion-icon> Iniciar viaje\n                                </button>\n                             </ion-col>\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                <button class="btn bg-theme rounded full text-white" (click)="seePassengers(trip.keyTrip)">Ver pasajeros</button>\n                            </ion-col>\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                    <button class="btn bg-red rounded full text-white" (click)="cancelReserve(trip.type, trip.geofireKey, trip.keyTrip)">cancelar reserva</button>\n                                </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n               \n        \n        \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/reservetrip/reservetrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_9__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */]])
    ], ReservetripPage);
    return ReservetripPage;
}());

//# sourceMappingURL=reservetrip.js.map

/***/ })

});
//# sourceMappingURL=9.js.map