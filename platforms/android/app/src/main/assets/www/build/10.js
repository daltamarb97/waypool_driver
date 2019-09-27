webpackJsonp([10],{

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(814);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
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

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_window_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(18);
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








var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams, windowService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.windowService = windowService;
        this.app = app;
        this.user = {};
        this.car = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.universities = [];
        this.showReadonly = true;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.noShowButton = false;
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fixedemail: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */]],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            carModel: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            plateNumber: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            color: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            university: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            isChecked: [true, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.SignUpService.getUniversities().takeUntil(this.unsubscribe)
            .subscribe(function (universities) {
            _this.universities = universities;
            console.log(_this.universities);
        });
    }
    SignupPage.prototype.onChange = function () {
        this.showReadonly = true;
        if (this.showReadonly == true) {
            var count = this.universities.length;
            for (var i = 0; i < count; i++) {
                if (this.universities[i].name == this.universityVar) {
                    if (this.universities[i].email == undefined) {
                        this.showReadonly = false;
                    }
                    else {
                        this.emailVar = this.universities[i].email;
                    }
                }
            }
        }
    };
    SignupPage.prototype.scrolling = function () {
        this.content.scrollTo(30, 0);
    };
    ;
    SignupPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    SignupPage.prototype.verification = function () {
        var _this = this;
        if (!this.signupGroup.controls['isChecked'].value === true) {
            var alert_1 = this.alertCtrl.create({
                title: 'No aceptaste nuestros términos y condiciones',
                subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.showReadonly == true) {
                var userName = this.signupGroup.controls['name'].value;
                var userLastName = this.signupGroup.controls['lastname'].value;
                var userPhone = this.signupGroup.controls['phone'].value;
                var userEmail = this.signupGroup.controls['email'].value;
                var userFixedemail = this.signupGroup.controls['fixedemail'].value;
                var userEmailComplete = userEmail + userFixedemail;
                var userPassword = this.signupGroup.controls['password'].value;
                var userPasswordconf = this.signupGroup.controls['passwordconf'].value;
                //   let userPhone = this.signupGroup.controls['phone'].value;
                var userCarModel = this.signupGroup.controls['carModel'].value;
                var userPlateNumber = this.signupGroup.controls['plateNumber'].value;
                var usercarColor = this.signupGroup.controls['color'].value;
                var userUniversity = this.signupGroup.controls['university'].value;
                this.car = {
                    carModel: userCarModel,
                    plateNumber: userPlateNumber,
                    color: usercarColor
                };
                // saving data in variable
                this.user = {
                    name: userName,
                    lastname: userLastName,
                    email: userEmailComplete,
                    phone: '+57' + userPhone,
                    university: userUniversity,
                    createdBy: 'driver'
                };
                this.SignUpService.userUniversity = userUniversity;
                if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                    this.authenticationService.registerWithEmail(userEmailComplete, userPassword).then(function () {
                        if (!_this.user.userId) {
                            _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                if (user) {
                                    user.getIdToken().then(function (token) {
                                        _this.user.tokenId = token;
                                    });
                                    if (!_this.user.userId) {
                                        _this.user.userId = user.uid;
                                    }
                                    _this.SignUpService.saveUser(_this.SignUpService.userUniversity, _this.user);
                                    _this.SignUpService.addCarProfile(_this.SignUpService.userUniversity, _this.user.userId, _this.car);
                                    //send text message with code
                                    // this.sendVerificationCode(this.user.userId);
                                    // this.app.getRootNav().push('LoginPage');
                                }
                                else {
                                    console.log('there is no user');
                                }
                            });
                        }
                        ;
                        //sending email verification and verifying weather email is verified or not
                        _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                            if (user) {
                                if (user.emailVerified == false) {
                                    user.sendEmailVerification();
                                    var alert_2 = _this.alertCtrl.create({
                                        title: '¡REGISTRO EXITOSO!',
                                        subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                        buttons: [
                                            {
                                                text: 'OK',
                                                handler: function () {
                                                    _this.app.getRootNav().push('LoginPage');
                                                }
                                            }
                                        ]
                                    });
                                    alert_2.present();
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
                    }).catch(function (error) {
                        if (error.code === "auth/email-already-in-use") {
                            var alert_3 = _this.alertCtrl.create({
                                title: 'ya existe una cuenta con este correo',
                                subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                buttons: ['OK']
                            });
                            alert_3.present();
                        }
                    });
                    // this.navCtrl.push('LoginPage', this.user);
                }
                else {
                    var alert_4 = this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                        buttons: ['OK']
                    });
                    alert_4.present();
                }
            }
            else if (this.showReadonly === false) {
                var userName = this.signupGroup.controls['name'].value;
                var userLastName = this.signupGroup.controls['lastname'].value;
                var userPhone = this.signupGroup.controls['phone'].value;
                var userEmail = this.signupGroup.controls['email'].value;
                var userFixedemail = this.signupGroup.controls['fixedemail'].value;
                var userEmailComplete = userEmail + userFixedemail;
                var userPassword = this.signupGroup.controls['password'].value;
                var userPasswordconf = this.signupGroup.controls['passwordconf'].value;
                //   let userPhone = this.signupGroup.controls['phone'].value;
                var userCarModel = this.signupGroup.controls['carModel'].value;
                var userPlateNumber = this.signupGroup.controls['plateNumber'].value;
                var usercarColor = this.signupGroup.controls['color'].value;
                var userUniversity = this.signupGroup.controls['university'].value;
                this.car = {
                    carModel: userCarModel,
                    plateNumber: userPlateNumber,
                    color: usercarColor
                };
                // saving data in variable
                this.user = {
                    name: userName,
                    lastname: userLastName,
                    email: userEmail,
                    phone: '+57' + userPhone,
                    university: userUniversity,
                    createdBy: 'driver'
                };
                this.SignUpService.userUniversity = userUniversity;
                if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                    this.authenticationService.registerWithEmail(userEmailComplete, userPassword).then(function () {
                        if (!_this.user.userId) {
                            _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                if (user) {
                                    user.getIdToken().then(function (token) {
                                        _this.user.tokenId = token;
                                    });
                                    if (!_this.user.userId) {
                                        _this.user.userId = user.uid;
                                    }
                                    _this.SignUpService.saveUser(_this.SignUpService.userUniversity, _this.user);
                                    _this.SignUpService.addCarProfile(_this.SignUpService.userUniversity, _this.user.userId, _this.car);
                                    //send text message with code
                                    //  this.sendVerificationCode(this.user.userId);
                                    // this.app.getRootNav().push('LoginPage');
                                }
                                else {
                                    console.log('there is no user');
                                }
                            });
                        }
                        ;
                        // sending email verification and verifying weather email is verified or not
                        _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                            if (user) {
                                if (user.emailVerified == false) {
                                    user.sendEmailVerification();
                                    var alert_5 = _this.alertCtrl.create({
                                        title: '¡REGISTRO EXITOSO!',
                                        subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                        buttons: [
                                            {
                                                text: 'OK',
                                                handler: function () {
                                                    _this.app.getRootNav().push('LoginPage');
                                                }
                                            }
                                        ]
                                    });
                                    alert_5.present();
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
                    }).catch(function (error) {
                        if (error.code === "auth/email-already-in-use") {
                            var alert_6 = _this.alertCtrl.create({
                                title: 'ya existe una cuenta con este correo',
                                subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                buttons: ['OK']
                            });
                            alert_6.present();
                        }
                    });
                }
                else {
                    var alert_7 = this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                        buttons: ['OK']
                    });
                    alert_7.present();
                }
            }
        }
    };
    SignupPage.prototype.sendVerificationCode = function (userId) {
        this.navCtrl.push('VerificationNumberPage', { userId: userId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/signup/signup.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-theme"></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n    <ion-content>\n\n        <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n        <div>\n            <div class="">\n                <ion-row>\n                    <ion-col class="name-fild">\n                        <ion-list class="form" style="margin-bottom: 0">\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label  text-right >selecciona tu universidad</ion-label>\n                                    <ion-select (ionChange)="onChange()" [(ngModel)]="universityVar" formControlName="university">\n                                        <ion-option *ngFor="let uni of universities">{{uni.name}}</ion-option>\n                                    </ion-select>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <div [ngSwitch]="showReadonly">\n                    <ion-row *ngSwitchCase=true>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="editable-email">\n                                        <ion-label></ion-label>\n                                            <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n                                        </ion-item>\n                                </ion-list>\n                        </ion-col>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item  class="nonEditable-email">                                        \n                                    <ion-input readonly [(ngModel)]=\'emailVar\' formControlName="fixedemail"></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n\n\n\n                    <ion-row *ngSwitchCase=false >\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="editable-email">\n                                        <ion-label></ion-label>\n                                            <ion-input type="text" text-right [(ngModel)]=\'onlyEmail\' formControlName="email" placeholder= "email"></ion-input>\n                                        </ion-item>\n                                        <ion-item class="editable-email" *ngIf=\'noShowButton\'>\n                                            <ion-label></ion-label>\n                                                <ion-input readonly formControlName="fixedemail"></ion-input>\n                                            </ion-item>\n                                </ion-list>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <ion-list class="form" style="margin-bottom: 0">\n                    <ion-item>\n                            <ion-label  fixed><span style="font-weight: bold; color: red;">(mínimo 6 caracteres)</span></ion-label>\n                            <ion-input type="password"  text-right formControlName="password" placeholder= "Escribe tu contraseña" minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="text" text-right formControlName="phone" placeholder= "Tú número de celular"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n\n                    <ion-row class="col-car">\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="carModel">\n                                        <ion-label></ion-label>\n                                            <ion-input type="text" text-right formControlName="carModel" placeholder= "marca de carro"></ion-input>\n                                        </ion-item>\n                                </ion-list>\n                        </ion-col>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="plateNumber">\n                                        <ion-input type="text"  text-right formControlName="plateNumber" placeholder= "placa de carro" ></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>               \n                    </ion-row>     \n                            <ion-list class="form">\n                                    <ion-item class="form" class="plateNumber" >\n                                            <ion-input type="text"  text-right formControlName="color" placeholder= "Color de carro" class="name-fild-2"></ion-input>\n                                        </ion-item>\n\n                                        <ion-item>\n                                            <ion-label>Por favor lee y acepta nuestro términos y condiciones</ion-label>\n                                            <ion-checkbox formControlName="isChecked" ></ion-checkbox>\n                                        </ion-item>\n                                        <ion-item>\n                                            <p>Ver <a href="https://waypooltech.wordpress.com/">términos y condiciones</a></p>                                        </ion-item>\n                                </ion-list>\n                   \n                </ion-list>\n                        <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n                        <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Inicia Sesión</strong></p>\n            </div>\n        </div>\n    </form>\n    </ion-content>\n    \n\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=10.js.map