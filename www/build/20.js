webpackJsonp([20],{

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverauthentication_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
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






// import * as firebase from 'firebase';
// import { SignUpService } from '../../services/signup.service';
var LoginPage = /** @class */ (function () {
    // userFirebase = this.AngularFireAuth.auth.currentUser;
    function LoginPage(navCtrl, authenticationService, alertCtrl, AngularFireAuth, navParams, formBuilder, SignUpService, platform, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.SignUpService = SignUpService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.auth = this.AngularFireAuth.auth;
        this.loginGroup = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
        if (this.auth.currentUser) {
            this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.auth.currentUser.uid).subscribe(function (driver) {
                _this.driverInfo = driver;
            });
        }
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    ;
    LoginPage.prototype.resetPassword = function (email) {
        if (this.loginGroup.controls['email'].value == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'no hay ningun email',
                subTitle: 'ingresa un email para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_1.present();
            console.log("reset password email hasn't been sent");
        }
        else {
            this.auth.sendPasswordResetEmail(this.loginGroup.controls['email'].value);
            var alert_2 = this.alertCtrl.create({
                title: 'revisa tu email',
                subTitle: 'un correo te ha sido enviado para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_2.present();
            console.log("reset password email has been sent");
        }
        ;
    };
    ;
    LoginPage.prototype.logIn = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "\n              <div class=\"custom-spinner-container\">\n                <div class=\"custom-spinner-box\"></div>\n              </div>"
        });
        loading.present();
        this.receivedUser = this.navParams.data;
        var email = this.loginGroup.controls['email'].value;
        var password = this.loginGroup.controls['password'].value;
        this.authenticationService.loginWithEmail(email, password).then(function (data) {
            console.log(data);
            if (data.user.emailVerified == false) {
                loading.dismiss();
                var alert_3 = _this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else {
                // let metadata = this.auth.currentUser.metadata;
                // if(metadata.creationTime === metadata.lastSignInTime){
                //     console.log(metadata.creationTime);
                //     console.log(metadata.lastSignInTime);
                //     this.navCtrl.push('CarRegistrationLoginPage');
                //     setTimeout(()=>{
                //         if(this.navCtrl.getActive().id === 'LoginPage'){
                //             this.navCtrl.push('CarRegistrationLoginPage');
                //         }else{
                //             console.log('actuo el abservable')
                //         }
                //     }, 500)
                // }
                setTimeout(function () {
                    if (_this.navCtrl.getActive().id === 'LoginPage') {
                        loading.dismiss();
                        _this.navCtrl.setRoot('FindridePage');
                    }
                    else {
                        loading.dismiss();
                        console.log('actuo el abservable');
                    }
                }, 500);
                _this.authenticationService.getStatus;
            }
            ;
        }).catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'El usuario o la contraseña están incorrectas',
                buttons: ['OK']
            });
            alert.present();
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL2/waypool_driver/src/pages/login/login.html"*/'<ion-header class="transparent">\n    <ion-navbar hide-tabs>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="logo">\n        <img src="assets/imgs/logo waypool gris-01.png" alt="logo">\n    </div>\n\n<div class="bg-white login">\n    <div >\n     <div [formGroup]="loginGroup" >\n        <ion-list class="form">\n            <ion-item>\n                <ion-label></ion-label>\n                <ion-input type="email"  text-right  formControlName="email" placeholder= "email universitario"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label></ion-label>\n                <ion-input type="password" text-right  formControlName="password" placeholder= "Tú contraseña"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n    <button ion-button full class="bg-theme text-white btn rounded" (click)="logIn()" [disabled]="!loginGroup.valid">ENTRAR</button>\n\n\n            <ion-row style="padding-top: 8px;">\n                <ion-col class="col"(click)="signup()"><small>Eres Nuevo Usuario? <strong class="text-theme">¡Regístrate!</strong></small></ion-col>\n                <ion-col text-right (click)="resetPassword(email)"><small>Olvidaste tu <strong class="text-theme"> contraseña?</strong></small></ion-col>\n            </ion-row>\n\n\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL2/waypool_driver/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=20.js.map