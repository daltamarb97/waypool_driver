webpackJsonp([10],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { VerificationPage } from '../verification/verification';
// import { AngularFireDatabase } from '@angular/fire/database';






// import * as firebase from 'firebase';
var SignupPage = /** @class */ (function () {
    // userFirebase = this.AngularFireAuth.auth.currentUser;
    function SignupPage(navCtrl, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.user = {};
        this.car = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fixedemail: [""],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            carModel: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            plateNumber: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            color: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.scrolling = function () {
        this.content.scrollTo(30, 0);
    };
    ;
    SignupPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    SignupPage.prototype.verification = function () {
        var _this = this;
        //creating user on firebase
        //   let userName = this.signupGroup.controls['name'].value;
        //   let userLastName = this.signupGroup.controls['lastname'].value;
        var userEmail = this.signupGroup.controls['email'].value;
        var userFixedemail = this.signupGroup.controls['fixedemail'].value;
        var userEmailComplete = userEmail + userFixedemail;
        var userPassword = this.signupGroup.controls['password'].value;
        var userPasswordconf = this.signupGroup.controls['passwordconf'].value;
        //   let userPhone = this.signupGroup.controls['phone'].value;
        var userCarModel = this.signupGroup.controls['carModel'].value;
        var userPlateNumber = this.signupGroup.controls['plateNumber'].value;
        var usercarColor = this.signupGroup.controls['color'].value;
        this.user = this.signupGroup.value;
        this.car = {
            carModel: userCarModel,
            plateNumber: userPlateNumber,
            color: usercarColor
        };
        if (userPassword === userPasswordconf) {
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
            this.navCtrl.push('LoginPage', this.user);
            if (!this.user.userId) {
                this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                    if (user) {
                        user.getIdToken().then(function (token) {
                            _this.user.tokenId = token;
                        });
                        if (!_this.user.userId) {
                            _this.user.userId = user.uid;
                        }
                        _this.SignUpService.saveUser(_this.user);
                        _this.SignUpService.addCarProfile(_this.user.userId, _this.car);
                    }
                    else {
                        console.log('there is no user');
                    }
                });
            }
            ;
            // sending email verification and verifying weather email is verified or not
            this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                if (user) {
                    if (user.emailVerified == false) {
                        user.sendEmailVerification();
                        console.log("verification email has been sent");
                    }
                    else {
                        console.log("verification email has not been sent or the email is already verifyied");
                    }
                }
                else {
                    console.log('there is no user');
                }
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/signup/signup.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-theme">REGÍSTRATE</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n    <ion-content>\n\n        <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n        <div>\n            <div class="">\n                <ion-row>\n                    <ion-col class="name-fild">\n                        <ion-list class="form" style="margin-bottom: 0">\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="name-fild-2">\n                        <ion-list class="form">\n                            <ion-item class="editable-email">\n                                    <ion-label></ion-label>\n                                        <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n                                    </ion-item>\n                            </ion-list>\n                    </ion-col>\n                    <ion-col class="name-fild-2">\n                        <ion-list class="form">\n                            <ion-item  class="nonEditable-email">\n                                    <!-- <ion-input type="email" value="@uninorte.edu.co"  text-right formControlName="fixedemail" [readonly]="isReadonly"></ion-input> -->\n                                    <ion-select formControlName="fixedemail" placeholder="@uninorte.edu.co" type="email">\n                                            <ion-option value="@uninorte.edu.co">@uninorte.edu.co</ion-option>\n                                        </ion-select>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <ion-list class="form" style="margin-bottom: 0">\n                    <ion-item>\n                        <ion-label floating>contraseña nueva <span style="font-weight: bold; color: red;">(minimo 6 caracteres)</span></ion-label>\n                        <ion-input type="password"  text-right formControlName="password"  minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="text" text-right formControlName="phone" placeholder= "Tú número de celular"></ion-input>\n                    </ion-item>\n                    <ion-row>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="carModel">\n                                        <ion-label></ion-label>\n                                            <ion-input type="text" text-right formControlName="carModel" placeholder= "marca de carro"></ion-input>\n                                        </ion-item>\n                                </ion-list>\n                        </ion-col>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="plateNumber">\n                                        <ion-input type="text"  text-right formControlName="plateNumber" placeholder= "placa de carro" ></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                        <ion-item class="plateNumber">\n                            <ion-input type="text"  text-right formControlName="color" placeholder= "Color de carro" ></ion-input>\n                    </ion-item>\n                    </ion-row>\n                </ion-list>\n                        <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n                        <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Inicia Sesión</strong></p>\n            </div>\n        </div>\n    </form>\n    </ion-content>\n    \n\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=10.js.map