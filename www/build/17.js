webpackJsonp([17],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsReservePagePageModule", function() { return DetailsReservePagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailsreserve__ = __webpack_require__(800);
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

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsReservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_instances_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_service__ = __webpack_require__(347);
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
        this.sendCoordsService.getPendingUsers(this.SignUpService.userUniversity, this.userUid, this.reserveKey).takeUntil(this.unsubscribe)
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
        this.geoFireService.deleteUserGeofireDest(this.SignUpService.userUniversity, this.reserveKey);
        this.geoFireService.deleteUserGeofireOr(this.SignUpService.userUniversity, this.reserveKey);
        this.TripsService.cancelReserve(this.SignUpService.userUniversity, this.userUid, this.reserveKey);
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
                        _this.sendCoordsService.eraseUser(_this.SignUpService.userUniversity, userId, _this.userUid, _this.reserveKey);
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
            selector: 'page-detailsreserve',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\detailsreserve\detailsreserve.html"*/'<ion-content>\n\n      <img src="assets/imgs/compaes.png" width="100%" style="display:inline-block" height="150px"/>\n\n\n\n         <ion-card *ngFor = "let passenger of passengers">\n\n               <ion-item>\n\n                   <ion-avatar item-start>\n\n                       <img src="assets/imgs/userPicture.png">\n\n                   </ion-avatar>\n\n                   <div class="name">\n\n                       <h2>{{user.name |titlecase}} {{user.lastname | slice:0:1 | titlecase}}.\n\n                         <ion-icon *ngIf=\'user.verifiedPerson\' name="ios-checkmark-circle" class="text-darkblue"></ion-icon>\n\n         \n\n                       </h2>\n\n                       <p>{{user.about}}</p>\n\n                   </div>\n\n                   <div class="more">\n\n                           <ion-icon name="md-more" (click)="presentActionSheet(user.userId,user.name)"></ion-icon>\n\n         \n\n                   </div>\n\n               </ion-item>\n\n               <ion-card-content>\n\n                   <div class="ride-detail">\n\n                       <p><small></small>\n\n                           <span class="icon-location bg-theme"></span>{{user.origin}}</p>\n\n                       <p><small></small>\n\n                           <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n\n                   </div>\n\n                   <ion-row>\n\n                         \n\n                               <ion-col class="detail-text">\n\n                                       <button class="btn bg-yellow rounded full text-white"(click)="callUser(user.phone)"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n           \n\n                                   </ion-col>\n\n                       <ion-col col-5>\n\n                           <button class="btn bg-theme rounded full text-white" (click)="goToRide(user)">Recoger/Dejar</button>\n\n                       </ion-col>\n\n                   </ion-row>\n\n               </ion-card-content>         \n\n         \n\n               \n\n           </ion-card>\n\n         \n\n </ion-content>\n\n\n\n '/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\detailsreserve\detailsreserve.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_signup_service__["a" /* SignUpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_geofire_services__["a" /* geofireService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_instances_service__["a" /* instancesService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _p || Object])
    ], DetailsReservePage);
    return DetailsReservePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=detailsreserve.js.map

/***/ })

});
//# sourceMappingURL=17.js.map