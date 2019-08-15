webpackJsonp([48],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpopupPageModule", function() { return ConfirmpopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmpopupPageModule = /** @class */ (function () {
    function ConfirmpopupPageModule() {
    }
    ConfirmpopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmpopup__["a" /* ConfirmpopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmpopup__["a" /* ConfirmpopupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmpopup__["a" /* ConfirmpopupPage */]
            ]
        })
    ], ConfirmpopupPageModule);
    return ConfirmpopupPageModule;
}());

//# sourceMappingURL=confirmpopup.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(16);
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


// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';




var ConfirmpopupPage = /** @class */ (function () {
    function ConfirmpopupPage(navCtrl, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geoFireService, instances, toastCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sendUsersService = sendUsersService;
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
        this.locationOrigin = [];
        this.locationDestination = [];
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.infoUser = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"];
        this.pickingUsers = [];
        this.pickedUpUsers = [];
        //we get the info of the users with navParams
        this.user = this.navParams.get('user');
        console.log(this.user);
        //get origin from driver
        this.sendCoordsService.getOrigin(this.userDriverUid).takeUntil(this.unsubscribe)
            .subscribe(function (origin) {
            _this.locationOrigin = origin;
        });
        //get destination from driver
        this.sendCoordsService.getDestination(this.userDriverUid).takeUntil(this.unsubscribe)
            .subscribe(function (destination) {
            _this.locationDestination = destination;
        });
        this.SignUpService.getMyInfoDriver(this.userDriverUid).takeUntil(this.unsubscribe)
            .subscribe(function (userDriver) {
            _this.userDriver = userDriver;
            _this.pickingUsers = _this.userDriver.trips.pickingUsers;
            _this.pickedUpUsers = _this.userDriver.trips.pickedUpUsers;
        });
    }
    ConfirmpopupPage.prototype.acceptUser = function () {
        if (this.userDriver.trips.pickingUsers) {
            if (this.userDriver.trips.pickedUpUsers) {
                if (Object.keys(this.pickingUsers).length + Object.keys(this.pickedUpUsers).length >= 4) {
                    this.sendUsersService.removeUsersOnListRideTotal(this.userDriverUid);
                    // this.geoFireService.cancelGeoqueryDest();
                    // this.geoFireService.cancelGeoqueryOr();
                    var alert_1 = this.alertCtrl.create({
                        title: 'limite de estudiantes permitido',
                        subTitle: 'ya recogiste o aceptaste más de 4 personas. Este es el limite de personas para cada viaje',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    this.instances.turnOntripUsersFalse(this.user.userId);
                }
                else {
                    console.log('before delete');
                    // this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
                    console.log('after delete');
                    this.sendUsersService.pushPickingUpUsersOnDrivers(this.userDriverUid, this.user.userId, this.user.origin, this.user.destination, this.user.name, this.user.lastname, this.user.phone, this.user.about);
                    this.sendUsersService.pushDriverOnUsers(this.userDriverUid, this.user.userId, this.locationOrigin, this.locationDestination, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriver.trips.price, this.userDriver.trips.car, this.userDriver.about);
                    this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
                    this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
                    this.instances.turnOntripUsers(this.user.userId);
                    //   this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
                    this.instances.turnOntripUsers(this.user.userId);
                    this.accepted = true;
                    this.dismiss();
                    var toast = this.toastCtrl.create({
                        message: "\u00A1Haz aceptado a " + this.user.name + " en tu viaje!, Acepta otros compa\u00F1eros y dirigete a Viajes para encontrar su direcci\u00F3n",
                        duration: 4500,
                        position: 'middle'
                    });
                    toast.present();
                }
            }
            else if (Object.keys(this.pickingUsers).length >= 4) {
                this.sendUsersService.removeUsersOnListRideTotal(this.userDriverUid);
                // this.geoFireService.cancelGeoqueryDest();
                // this.geoFireService.cancelGeoqueryOr();
                var alert_2 = this.alertCtrl.create({
                    title: 'limite de estudiantes permitido',
                    subTitle: 'ya recogiste o aceptaste más de 4 personas. Este es el limite de personas para cada viaje',
                    buttons: ['OK']
                });
                alert_2.present();
                this.instances.turnOntripUsersFalse(this.user.userId);
            }
            else {
                console.log('before delete');
                // this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
                console.log('after delete');
                this.sendUsersService.pushPickingUpUsersOnDrivers(this.userDriverUid, this.user.userId, this.user.origin, this.user.destination, this.user.name, this.user.lastname, this.user.phone, this.user.about);
                this.sendUsersService.pushDriverOnUsers(this.userDriverUid, this.user.userId, this.locationOrigin, this.locationDestination, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriver.trips.price, this.userDriver.trips.car, this.userDriver.about);
                this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
                this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
                this.instances.turnOntripUsers(this.user.userId);
                //   this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
                this.instances.turnOntripUsers(this.user.userId);
                this.accepted = true;
                this.dismiss();
                var toast = this.toastCtrl.create({
                    message: "\u00A1Haz aceptado a " + this.user.name + " en tu viaje!, Acepta otros compa\u00F1eros y dirigete a Viajes para encontrar su direcci\u00F3n",
                    duration: 4500,
                    position: 'middle'
                });
                toast.present();
            }
        }
        else {
            console.log('g');
            console.log('before delete');
            // this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
            console.log('after delete');
            this.sendUsersService.pushPickingUpUsersOnDrivers(this.userDriverUid, this.user.userId, this.user.origin, this.user.destination, this.user.name, this.user.lastname, this.user.phone, this.user.about);
            this.sendUsersService.pushDriverOnUsers(this.userDriverUid, this.user.userId, this.locationOrigin, this.locationDestination, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriver.trips.price, this.userDriver.trips.car, this.userDriver.about);
            this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
            this.geoFireService.deleteUserListRide(this.userDriverUid, this.user.userId);
            this.instances.turnOntripUsers(this.user.userId);
            //   this.sendUsersService.removeUsersOnListRide(this.userDriverUid, this.user.userId);
            this.instances.turnOntripUsers(this.user.userId);
            this.accepted = true;
            this.dismiss();
            var toast = this.toastCtrl.create({
                message: "\u00A1Haz aceptado a " + this.user.name + " en tu viaje!, Acepta otros compa\u00F1eros y dirigete a Viajes para encontrar su direcci\u00F3n",
                duration: 4500,
                position: 'middle'
            });
            toast.present();
        }
    };
    ConfirmpopupPage.prototype.dismiss = function () {
        console.log('deleted on click');
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"C:\Users\PC\Desktop\WAYPOOL_DRIVER\src\pages\confirmpopup\confirmpopup.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n    <ion-card>\n\n       <h6 class="text-theme">Detalles del Viaje</h6>\n\n       <ion-item >\n\n          <ion-avatar item-start>\n\n             <img src="assets/imgs/userPicture.png">\n\n          </ion-avatar>\n\n          <div  class="name">\n\n             <h2 >{{user.name |titlecase}} {{user.lastname  |titlecase | slice:0:1}}.</h2>\n\n          </div>\n\n       </ion-item>\n\n       <ion-card-content>\n\n          <div class="ride-detail">\n\n             <p><small>Origen:</small>\n\n                <span  class="icon-location bg-theme"></span>{{user.origin}}\n\n             </p>\n\n             <p>\n\n                <small>Destino:</small>\n\n                <span  class="icon-location bg-yellow"></span>{{user.destination}}\n\n             </p>\n\n          </div>\n\n       </ion-card-content>\n\n       <ion-card-content>\n\n          <div class="ride-detail no-before">\n\n             <p>\n\n                <small>Nota</small>\n\n                <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                {{user.note}}\n\n             </p>\n\n             \n\n          </div>\n\n       </ion-card-content>\n\n       <ion-card-content>\n\n          <div class="seats">\n\n             \n\n             <ion-row style="margin-top: 14px;   display: flex;\n\n             justify-content: center">\n\n                \n\n                <ion-col col-8>\n\n                   <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;"(click)="acceptUser()">Aceptar Viaje</button>\n\n                </ion-col>\n\n             </ion-row>\n\n          </div>\n\n       </ion-card-content>\n\n    </ion-card>\n\n </ion-content>'/*ion-inline-end:"C:\Users\PC\Desktop\WAYPOOL_DRIVER\src\pages\confirmpopup\confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_3__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_geofire_services__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ })

});
//# sourceMappingURL=48.js.map