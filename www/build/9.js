webpackJsonp([9],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(829);
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

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_window_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
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
    function SignupPage(navCtrl, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams, windowService, app, afDB) {
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
        this.afDB = afDB;
        this.user = {};
        this.car = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.cities = [];
        this.showReadonly = true;
        // onlyEmail:any;
        this.arrayEmails = [];
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.zones = [];
        this.forLoopsCompleted = 0;
        this.companyIdentified = false;
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            carModel: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            plateNumber: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            color: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            city: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            isChecked: [true, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.geocoder = new google.maps.Geocoder;
        // this.SignUpService.pushEmails('uninorte', '@uninorte.edu.co');
        // this.SignUpService.pushEmails('uninorte', '@jhggh.edu.co');
        this.SignUpService.getAllCities().takeUntil(this.unsubscribe)
            .subscribe(function (cities) {
            _this.cities = cities;
            console.log(_this.cities);
        });
    }
    SignupPage.prototype.onChange = function () {
        var _this = this;
        this.arrayEmails = [];
        this.afDB.database.ref('allCities/' + this.cityVar + '/allPlaces').once('value').then(function (snap) {
            var obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach(function (key) {
                _this.arrayEmails.push(obj[key].email);
                console.log(_this.arrayEmails);
            });
        });
    };
    SignupPage.prototype.noCompanyIdentified = function (numberToExecute) {
        ++this.forLoopsCompleted;
        if (this.forLoopsCompleted === numberToExecute) {
            if (this.companyIdentified === false) {
                var alert_1 = this.alertCtrl.create({
                    title: 'El correo que ingresaste no concuerda con el de ninguna empresa de la red de Waypool',
                    subTitle: 'Revisa si escribiste el correo bien o si tu empresa no está en Waypool, envianos un correo a waypooltec@gmail.com',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }
    };
    SignupPage.prototype.scrolling = function () {
        this.content.scrollTo(30, 0);
    };
    ;
    SignupPage.prototype.login = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    SignupPage.prototype.verification = function () {
        var _this = this;
        this.forLoopsCompleted = 0;
        this.companyIdentified = false;
        var count = this.arrayEmails.length;
        for (var i = 0; i < count; i++) {
            this.emailStringVerification = this.email.indexOf(this.arrayEmails[i]);
            console.log(this.emailStringVerification);
            if (this.emailStringVerification > -1) {
                this.companyIdentified = true;
                this.rightEmailOnDatabase = this.arrayEmails[i];
                this.afDB.database.ref('allCities/' + this.cityVar + '/allPlaces').once('value').then(function (snap) {
                    var obj = snap.val();
                    Object.getOwnPropertyNames(obj).forEach(function (key) {
                        if (obj[key].email === _this.rightEmailOnDatabase) {
                            console.log("la empresa es " + obj[key].name);
                            _this.company = obj[key].name;
                            obj[key].zones.forEach(function (zone) {
                                _this.zones.push(zone);
                            });
                        }
                    });
                }).then(function () {
                    if (!_this.signupGroup.controls['isChecked'].value === true) {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'No aceptaste nuestros términos y condiciones',
                            subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                    else {
                        var userName = _this.signupGroup.controls['name'].value;
                        var userLastName = _this.signupGroup.controls['lastname'].value;
                        var userPhone = _this.signupGroup.controls['phone'].value;
                        var userEmail = _this.signupGroup.controls['email'].value;
                        var userPassword = _this.signupGroup.controls['password'].value;
                        var userCarModel = _this.signupGroup.controls['carModel'].value;
                        var userPlateNumber = _this.signupGroup.controls['plateNumber'].value;
                        var usercarColor = _this.signupGroup.controls['color'].value;
                        _this.car = {
                            carModel: userCarModel,
                            plateNumber: userPlateNumber,
                            color: usercarColor
                        };
                        // saving data in variable
                        _this.user = {
                            name: userName,
                            lastname: userLastName,
                            email: userEmail,
                            phone: '+57' + userPhone,
                            createdBy: 'driver',
                            company: _this.company,
                            city: _this.cityVar
                        };
                        // this.SignUpService.userPlace = this.userPlace;
                        if (_this.signupGroup.controls['password'].value === _this.signupGroup.controls['passwordconf'].value) {
                            _this.authenticationService.registerWithEmail(userEmail, userPassword).then(function () {
                                if (!_this.user.userId) {
                                    _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                        if (user) {
                                            user.getIdToken().then(function (token) {
                                                _this.user.tokenId = token;
                                            });
                                            if (!_this.user.userId) {
                                                _this.user.userId = user.uid;
                                            }
                                            _this.zones.forEach(function (zone) {
                                                _this.SignUpService.saveUser(zone, _this.user);
                                            });
                                            _this.afDB.database.ref('allCities/' + _this.cityVar + '/allPlaces/' + _this.company + '/location').once('value').then(function (snap) {
                                                console.log(snap.val());
                                                snap.val().forEach(function (location) {
                                                    _this.SignUpService.setFixedLocationCoordinates(location.zone, _this.user.userId, location.lat, location.lng);
                                                    _this.SignUpService.setFixedLocationName(location.zone, _this.user.userId, location.name);
                                                    _this.SignUpService.addCarProfile(location.zone, _this.user.userId, _this.car);
                                                    _this.SignUpService.addPlaceZone(location.zone, _this.user.userId);
                                                });
                                            }).then(function () {
                                                _this.SignUpService.saveUserInAllUsers(_this.company, _this.user.userId, _this.cityVar);
                                            });
                                            //send text message with code - LATER ON
                                            // this.sendVerificationCode(this.user.userId);
                                            // this.app.getRootNav().push('LoginPage');
                                        }
                                        else {
                                            console.log('there is no user');
                                        }
                                    });
                                }
                                ;
                                //sending email verification and verifying whether email is verified or not
                                _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                    if (user) {
                                        if (user.emailVerified == false) {
                                            user.sendEmailVerification();
                                            var alert_3 = _this.alertCtrl.create({
                                                title: '¡REGISTRO EXITOSO!',
                                                subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                                buttons: [
                                                    {
                                                        text: 'OK',
                                                        handler: function () {
                                                            _this.afDB.database.ref('allCities/' + _this.cityVar + '/allPlaces/' + _this.company + '/zones').once('value').then(function (snap) {
                                                                _this.app.getRootNav().push('CarRegistrationLoginPage', { defaultZone: snap.val()[0] });
                                                            });
                                                        }
                                                    }
                                                ]
                                            });
                                            alert_3.present();
                                            console.log("verification email has been sent");
                                        }
                                        else {
                                            console.log("verification email has not been sent or the email is already verified");
                                        }
                                    }
                                    else {
                                        console.log('there is no user');
                                    }
                                });
                            }).catch(function (error) {
                                if (error.code === "auth/email-already-in-use") {
                                    var alert_4 = _this.alertCtrl.create({
                                        title: 'ya existe una cuenta con este correo',
                                        subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                        buttons: ['OK']
                                    });
                                    alert_4.present();
                                }
                            });
                        }
                        else {
                            var alert_5 = _this.alertCtrl.create({
                                title: 'Oops!',
                                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                                buttons: ['OK']
                            });
                            alert_5.present();
                        }
                    }
                });
            }
            this.noCompanyIdentified(count);
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/signup/signup.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-theme"></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n    <ion-content>\n\n        <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n        <div>\n            <div class="">\n                <ion-row>\n                    <ion-col class="name-fild">\n                        <ion-list class="form" style="margin-bottom: 0">\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label></ion-label>\n                                <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label  text-right >selecciona tu ciudad</ion-label>\n                                    <ion-select (ionChange)="onChange()" [(ngModel)]="cityVar" formControlName="city">\n                                        <ion-option *ngFor="let city of cities">{{city.name}}</ion-option>\n                                    </ion-select>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <div>\n                    <ion-row>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="editable-email">\n                                        <ion-label></ion-label>\n                                            <ion-input type="text" text-right [(ngModel)]=\'email\' formControlName="email" placeholder= "email"></ion-input>\n                                        </ion-item>\n                                </ion-list>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <ion-list class="form" style="margin-bottom: 0">\n                    <ion-item>\n                            <ion-label  fixed><span style="font-weight: bold; color: red;">(mínimo 6 caracteres)</span></ion-label>\n                            <ion-input type="password"  text-right formControlName="password" placeholder= "Escribe tu contraseña" minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label></ion-label>\n                        <ion-input type="text" text-right formControlName="phone" placeholder= "Tú número de celular"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n \n                    <ion-row class="col-car">\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="carModel">\n                                        <ion-label></ion-label>\n                                            <ion-input type="text" text-right formControlName="carModel" placeholder= "marca de carro"></ion-input>\n                                        </ion-item>\n                                </ion-list>\n                        </ion-col>\n                        <ion-col class="name-fild-2">\n                            <ion-list class="form">\n                                <ion-item class="plateNumber">\n                                        <ion-input type="text"  text-right formControlName="plateNumber" placeholder= "placa de carro" ></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>               \n                    </ion-row>     \n                            <ion-list class="form">\n                                    <ion-item class="form" class="plateNumber" >\n                                            <ion-input type="text"  text-right formControlName="color" placeholder= "Color de carro" class="name-fild-2"></ion-input>\n                                        </ion-item>\n\n                                        <ion-item>\n                                            <ion-label>Por favor lee y acepta nuestro términos y condiciones</ion-label>\n                                            <ion-checkbox formControlName="isChecked" ></ion-checkbox>\n                                        </ion-item>\n                                        <ion-item>\n                                            <p>Ver <a href="https://waypooltech.wordpress.com/">términos y condiciones</a></p>                                        </ion-item>\n                                </ion-list>\n                   \n                </ion-list>\n                        <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">Continuar</button>\n                        <p text-center>¿ya estás registrado? <strong class="text-theme" (click)="login()">Inicia Sesión</strong></p>\n            </div>\n        </div>\n    </form>\n    </ion-content>\n    \n\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_driverauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabase"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=9.js.map