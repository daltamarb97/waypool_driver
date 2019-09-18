webpackJsonp([4],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]
            ]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());

//# sourceMappingURL=wallet.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, toastCtrl, sendUsersService, sendCoordsService, AngularFireAuth, signupService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.sendUsersService = sendUsersService;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.signupService = signupService;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.recordTrips = [];
        this.total = 0;
        this.subtotal = 0;
        this.pickedUpUsers = [];
        this.newNumber = 0;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.sendUsersService.getRecordTrips(this.signupService.userUniversity, this.userUid)
            .subscribe(function (user) {
            _this.recordTrips = user;
            console.log(_this.recordTrips);
            _this.hola();
        });
        console.log(this.total);
    }
    WalletPage.prototype.hola = function () {
        var _this = this;
        this.newNumber = 0;
        this.total = 0;
        console.log(this.total);
        this.recordTrips.forEach(function (trip) {
            _this.trip = trip;
            _this.pickedUpUsers = Object.keys(_this.trip.pickedUpUsers);
            _this.totalTrip = _this.pickedUpUsers.length * _this.trip.price;
            console.log(_this.newNumber);
            _this.newNumber = _this.newNumber + _this.totalTrip;
        });
        this.total = this.total + this.newNumber;
    };
    WalletPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás ver cuanto dinero haz hecho por viaje, ádemas del historial de viajes en los que podrás ver la hora en la que terminaste el viaje, origen y destino, y el precio que colocaste por persona',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\waypool_driver\src\pages\wallet\wallet.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">Mis Ganancias</ion-title>\n\n        <ion-icon name="help-circle-outline" class="text-white" (click)="help() " style="float: right;"></ion-icon> \n\n\n\n    </ion-navbar>\n\n    <div text-center >\n\n        <p><small class="text-white">Ganancias Totales:</small></p>\n\n        <h1 class="text-white">$ {{total}}</h1>\n\n        <ion-row>\n\n           \n\n        </ion-row>\n\n    </div>\n\n\n\n</ion-header>\n\n \n\n<ion-content class="bg-light">\n\n        <p class="love">Historial de viajes</p> \n\n\n\n    <ion-list>\n\n            <ion-card *ngFor = "let user of recordTrips">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/userPicture.png">\n\n                        </ion-avatar>\n\n                        <div class="name">\n\n                            <h2>{{user.DestinationTime}}\n\n                            </h2>\n\n                            <p>{{user.car}}</p>\n\n                        </div>\n\n                        <div class="more">                       \n\n                                <ion-badge  class="badge">$ {{user.price}}</ion-badge>                                  \n\n                                    \n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        <div class="ride-detail">\n\n                            <p>\n\n                                <span class="icon-location bg-theme"></span>{{user.origin}}</p>\n\n                            <p>\n\n                                <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n\n                        </div>\n\n                       \n\n                    </ion-card-content>       \n\n\n\n                </ion-card>  \n\n    </ion-list>\n\n   \n\n   \n\n    \n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\waypool_driver\src\pages\wallet\wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ })

});
//# sourceMappingURL=4.js.map