webpackJsonp([17],{

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more__ = __webpack_require__(806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MorePageModule = /** @class */ (function () {
    function MorePageModule() {
    }
    MorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */]
            ]
        })
    ], MorePageModule);
    return MorePageModule;
}());

//# sourceMappingURL=more.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverauthentication_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UploadPage } from '../upload/upload';




var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, modalCtrl, AngularFireAuth, authenticationService, SignupService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.app = app;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.user = {};
        this.verified = false;
        this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            if (_this.user.verifiedPerson === true) {
                _this.verified = true;
            }
        });
    }
    MorePage.prototype.profile = function () {
        this.app.getRootNav().push('ProfilePage');
    };
    MorePage.prototype.showInfoCars = function () {
        var modal = this.modalCtrl.create('ShowInfoCarPage', { user: this.user });
        modal.present();
    };
    MorePage.prototype.terms = function () {
        this.navCtrl.push('TermsPage');
    };
    MorePage.prototype.help = function () {
        this.navCtrl.push('HelpPage');
    };
    MorePage.prototype.logout = function () {
        this.authenticationService.logOut();
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser);
        this.SignupService.userPlace = undefined;
        this.navCtrl.setRoot('LoginPage');
    };
    MorePage.prototype.docs = function () {
        this.app.getRootNav().push('CarRegistrationPage');
    };
    MorePage.prototype.schedule = function () {
        this.app.getRootNav().push('SchedulePage');
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/more/more.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">PERFIL</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" >\n    <ion-item>\n        \n                <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n                            <ion-icon *ngIf = \'verified\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p (click)="profile()">Editar Perfil</p>\n                    </div>\n        \n        \n        \n    </ion-item>\n\n    <ion-list no-lines>\n        <!-- <button ion-item (click)="reviews()">\n            <ion-avatar item-start>\n                <ion-icon name="ios-star"></ion-icon>\n            </ion-avatar>\n            Mis calificaciones (Próximamente)\n        </button> -->\n        <button ion-item (click)="showInfoCars()">\n            <ion-avatar item-start>\n                <ion-icon name="car"></ion-icon>\n            </ion-avatar>\n            Mis Vehículos        </button>\n        <button ion-item (click)="terms()">\n            <ion-avatar item-start>\n                <ion-icon name="md-paper"></ion-icon>\n            </ion-avatar>\n            Terminos y Condiciones\n        </button>\n        <button ion-item (click)="docs()">\n            <ion-avatar item-start>\n                <ion-icon name="md-paper"></ion-icon>\n            </ion-avatar>\n            Tus documentos\n        </button>\n        <!-- <button ion-item (click)="earn()">\n            <ion-avatar item-start>\n                <ion-icon name="md-share"></ion-icon>\n            </ion-avatar>\n            Refiérenos y Ganas (Próximamente)\n        </button>\n        <button ion-item (click)="ratevroom()">\n            <ion-avatar item-start>\n                <ion-icon name="md-thumbs-up"></ion-icon>\n            </ion-avatar>\n            Cálifica a Waypool (Próximamente)\n        </button> -->\n        <button ion-item (click)="help()">\n            <ion-avatar item-start>\n                <ion-icon name="md-alert"></ion-icon>\n            </ion-avatar>\n           Soporte \n        </button>\n\n        <button ion-item (click)="schedule()">\n                <ion-avatar item-start>\n                    <ion-icon name="md-paper"></ion-icon>\n                </ion-avatar>\n                Mi horario\n            </button>\n    </ion-list>\n  \n    \n    <ion-list no-lines>\n        <button ion-item (click)="logout()" text-center><h2 class="text-theme"><strong>Salir de mi cuenta</strong></h2></button>\n\n    </ion-list>\n    <p class="love">Desarrollado con Amor para universitarios  <ion-icon name="heart"></ion-icon></p> \n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ })

});
//# sourceMappingURL=17.js.map