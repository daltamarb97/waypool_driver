webpackJsonp([19],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsReservePagePageModule", function() { return DetailsReservePagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailsreserve__ = __webpack_require__(803);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsReservePagePageModule = /** @class */ (function () {
    function DetailsReservePagePageModule() {
    }
    DetailsReservePagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detailsreserve__["a" /* DetailsReservePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detailsreserve__["a" /* DetailsReservePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__detailsreserve__["a" /* DetailsReservePage */]
            ]
        })
    ], DetailsReservePagePageModule);
    return DetailsReservePagePageModule;
}());

//# sourceMappingURL=detailsreserve.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsReservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_instances_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_service__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFireDatabase } from 'angularfire2/database';






var DetailsReservePage = /** @class */ (function () {
    function DetailsReservePage(navCtrl, actionSheetCtrl, TripsService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geoFireService, instances, toastCtrl, alertCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.TripsService = TripsService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geoFireService = geoFireService;
        this.instances = instances;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.infoUser = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.reserves = [];
        this.passengers = [];
        this.reserveKey = this.navParams.get('reserveKey');
        console.log(this.reserveKey);
        this.sendCoordsService.getPendingUsers(this.SignUpService.userPlace, this.userUid, this.reserveKey).takeUntil(this.unsubscribe)
            .subscribe(function (users) {
            _this.passengers = users;
            console.log(_this.passengers);
        });
    }
    DetailsReservePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DetailsReservePage.prototype.showProfilePassegner = function (passenger) {
        this.app.getRootNav().push('PublicProfilePage', { passenger: passenger });
        this.accepted = true;
        this.dismiss();
    };
    DetailsReservePage.prototype.cancelReserve = function () {
        // //HERE IT IS NECESSARY TO SET A PUSH NOT NOTICING USERS IN THE RESERVE THAT IT HAS BEEN REMOVED
        // if(typeOfReserve == 'origin'){
        //   this.geofireService.cancelGeoqueryOr(geofireKey);
        // }else if(typeOfReserve == 'destination'){
        //   this.geofireService.cancelGeoqueryDest(geofireKey);
        // }
        this.geoFireService.deleteUserGeofireDest(this.SignUpService.userPlace, this.reserveKey);
        this.geoFireService.deleteUserGeofireOr(this.SignUpService.userPlace, this.reserveKey);
        this.TripsService.cancelReserve(this.SignUpService.userPlace, this.userUid, this.reserveKey);
        this.dismiss();
    };
    DetailsReservePage.prototype.presentActionSheet = function (userId, nameUser) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opciones',
            buttons: [
                {
                    text: 'Cancelar Usuario',
                    role: 'destructive',
                    handler: function () {
                        _this.deleteUser(userId, nameUser);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DetailsReservePage.prototype.deleteUser = function (userId, nameUser) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Usuario',
            message: "\u00BFEstas que deseas eliminar a este a " + nameUser + " de tu viaje?,borrar muchos usuarios por d\u00EDa/semana esta en contra de nuestras pol\u00EDticas",
            buttons: [{
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.sendCoordsService.eraseUser(_this.SignUpService.userPlace, userId, _this.userUid, _this.reserveKey);
                        _this.presentToast("Haz eliminado a " + nameUser + " de tu viaje", 3000, 'bottom');
                    }
                }
            ]
        });
        alert.present();
    };
    DetailsReservePage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    DetailsReservePage.prototype.dismiss = function () {
        console.log('deleted on click');
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DetailsReservePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailsreserve',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/detailsreserve/detailsreserve.html"*/'<ion-content>\n      <img src="assets/imgs/compaes.png" width="100%" style="display:inline-block" height="150px"/>\n\n         <ion-card *ngFor = "let passenger of passengers">\n               <ion-item>\n                   <ion-avatar item-start>\n                       <img src="assets/imgs/userPicture.png">\n                   </ion-avatar>\n                   <div class="name">\n                       <h2>{{user.name |titlecase}} {{user.lastname | slice:0:1 | titlecase}}.\n                         <ion-icon *ngIf=\'user.verifiedPerson\' name="ios-checkmark-circle" class="text-darkblue"></ion-icon>\n         \n                       </h2>\n                       <p>{{user.about}}</p>\n                   </div>\n                   <div class="more">\n                           <ion-icon name="md-more" (click)="presentActionSheet(user.userId,user.name)"></ion-icon>\n         \n                   </div>\n               </ion-item>\n               <ion-card-content>\n                   <div class="ride-detail">\n                       <p><small></small>\n                           <span class="icon-location bg-theme"></span>{{user.origin}}</p>\n                       <p><small></small>\n                           <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n                   </div>\n                   <ion-row>\n                         \n                               <ion-col class="detail-text">\n                                       <button class="btn bg-yellow rounded full text-white"(click)="callUser(user.phone)"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n           \n                                   </ion-col>\n                       <ion-col col-5>\n                           <button class="btn bg-theme rounded full text-white" (click)="goToRide(user)">Recoger/Dejar</button>\n                       </ion-col>\n                   </ion-row>\n               </ion-card-content>         \n         \n               \n           </ion-card>\n         \n </ion-content>\n\n '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/detailsreserve/detailsreserve.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_3__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_6__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], DetailsReservePage);
    return DetailsReservePage;
}());

//# sourceMappingURL=detailsreserve.js.map

/***/ })

});
//# sourceMappingURL=19.js.map