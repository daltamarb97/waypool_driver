webpackJsonp([15],{

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(731);
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

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(336);
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
    function ListridePage(navCtrl, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, alertCtrl, geofireService, afDB, instances, sendUsersService, toastCtrl) {
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
        this.locationOrigin = [];
        this.locationDestination = [];
        this.driver = this.AngularFireAuth.auth.currentUser.uid;
        this.usersFindingTrip = [];
        this.user = [];
        this.usersOnListRide = [];
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
        this.subscribe = this.geofireService.getUsersListRide()
            .subscribe(function (user) {
            _this.usersFindingTrip = user;
        });
    }
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
                        _this.sendUsersService.removeUsersOnListRide(_this.driver, userId);
                    }
                }
            ]
        });
        alert.present();
    };
    ListridePage.prototype.confirmpopup = function (user) {
        var modal = this.modalCtrl.create('ConfirmpopupPage', { user: user });
        modal.present();
        this.usersFindingTrip.pop();
        this.subscribe.unsubscribe();
    };
    ListridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás ver que estudiantes te han pedido compartir un viaje contigo, sólo tendrás máximo 4 estudiantes debido a que es el máximo numero permitido en colombia para carros particulares, si tienes un carro con más asientos, escríbenos para darte acceso a más',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_driver\src\pages\listride\listride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="Title">DRIVER\n\n                <ion-icon name="help-circle-outline" class="text-white" (click)="help() " style="margin-left: auto;float: right;"></ion-icon> \n\n\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light" class="hideLongText">\n\n    <ion-row class="center-align bg-white flow-ride">\n\n        <ion-col *ngFor = "let origin of locationOrigin"  class="hideLongText" col-5>\n\n            <h2>Origen:</h2> {{origin}}\n\n\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n            <img src="assets/imgs/arrow.jpg">\n\n        </ion-col>\n\n        <ion-col *ngFor = "let destination of locationDestination" class="hideLongText" col-5>\n\n            <h2>Destino:</h2> {{destination}}\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n    \n\n    <ion-card *ngFor = "let user of usersFindingTrip">\n\n        \n\n                <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/face-1.jpg">\n\n                        </ion-avatar>\n\n                        <div class="name">\n\n                            <h2>{{user.name |titlecase}} {{user.lastname |titlecase | slice:0:1}}.\n\n            \n\n                                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                            </h2>\n\n                            <p>Honda Cvic | White</p>\n\n                        </div>\n\n                        <div class="more">\n\n                            <ion-icon name="close-circle" (click)="deleteUser(user.userId,user.name)"></ion-icon>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        <div class="ride-detail">\n\n                            <p  >\n\n                                <span class="icon-location bg-theme"></span>{{user.origin}}</p>\n\n                            <p > \n\n                                <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n\n                        </div>\n\n                        <ion-row class="center-align">\n\n                            <!-- <ion-col col-3 class="detail-text text-theme">\n\n                                3 seats\n\n                            </ion-col> -->\n\n                            <ion-col col-2 class="detail-text text-theme">\n\n                            </ion-col>\n\n                            <ion-col col-4 class="detail-text text-theme">\n\n                            \n\n                            </ion-col>\n\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                                <button class="btn bg-theme rounded full text-white" (click)=confirmpopup(user)>Request Ride</button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-card-content>\n\n               \n\n        \n\n        \n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_driver\src\pages\listride\listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_8__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=15.js.map