webpackJsonp([12],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_driverauthentication_service__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, modalCtrl, toastCtrl, alertCtrl, AngularFireAuth, authenticationService, SignupService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.myprofile = "about";
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.user = {};
        this.SignupService.getMyInfoForProfile(this.userUid).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            _this.showInfoProfile(user);
        });
    }
    ProfilePage.prototype.saveChanges = function () {
        this.SignupService.saveInfoProfile(this.userUid, this.phone);
    };
    ProfilePage.prototype.deleteAccount = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Cuenta',
            message: "\u00BFEstas segur@ que deseas eliminar esta cuenta?",
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
                        // this.SignupService.deleteAccount(this.userUid) TO-DO:QUITARLE EL COMENTARIO
                        // this.navCtrl.setRoot(LoginPage)
                        var toast = _this.toastCtrl.create({
                            message: "Acabas de eliminar esta cuenta, si deseas volver a ser parte de la comunidad por favor reg\u00EDstrate de nuevo",
                            showCloseButton: true,
                            closeButtonText: 'Ok'
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.showInfoProfile = function (user) {
        this.name = user.name;
        this.lastname = user.lastname;
        this.phone = user.phone;
        this.email = user.email;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/profile/profile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MI PERFIL</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n            </h2>\n            \n        </div>\n        \n    </ion-item>\n    \n    <div [ngSwitch]="myprofile">\n        <ion-list *ngSwitchCase="\'about\'">\n              \n                     \n            <div class="bg-white" padding>\n                    <p>Sólo podrás cambiar la información de tu número telefónico.</p>\n\n                <ion-list no-lines class="form-list">\n                    <ion-item>\n                        <ion-label floating >Nombre</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.name" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating >Apellido</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.lastname" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Número Telefónico</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.phone"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="text"  [(ngModel)]="user.email"  readonly></ion-input>\n                    </ion-item>\n                    <div padding-top padding-left padding-right text-center>\n                        <p>\n                            <button class="btn text-white rounded bg-theme" style="width: 100%;margin-bottom: 8px;" (click)="showInfoCars()">Ver Carros</button>\n  \n                      \n                        </p>\n        \n                    </div>\n                </ion-list>\n            </div>\n            <div padding-top padding-left padding-right text-center>\n                <p>\n                    <button class="btn text-white rounded bg-theme" style="width: 100%;margin-bottom: 8px;" (click)="saveChanges()">Guardar Cambios</button>\n\n                    <button class="btn text-theme rounded bg-white" style="width: 100%;    margin-bottom: 8px;">Cambiar Contraseña</button>\n                    <button class="btn text-white rounded bg-red" style="width: 100%;    margin-bottom: 8px;" (click)="deleteAccount()">Eliminar Cuenta</button>\n              \n                </p>\n\n            </div>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'reviews\'">\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n                <div class="rating-box">\n                    <p>\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n                        <span class="text-2">100</span>\n                    </p>\n                    <p>\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n                        <span class="text-2">90</span></p>\n                    <p>\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n                        <span class="text-2">60</span>\n                    </p>\n                    <p>\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n                        <span class="text-2">40</span>\n                    </p>\n                    <p>\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n                        <span class="text-2">20</span>\n                    </p>\n                </div>\n            </div>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_signup_service__["a" /* SignUpService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map