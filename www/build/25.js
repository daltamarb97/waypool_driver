webpackJsonp([25],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarRegistrationPageModule", function() { return CarRegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_registration_login__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarRegistrationPageModule = /** @class */ (function () {
    function CarRegistrationPageModule() {
    }
    CarRegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_registration_login__["a" /* CarRegistrationLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__car_registration_login__["a" /* CarRegistrationLoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__car_registration_login__["a" /* CarRegistrationLoginPage */]
            ]
        })
    ], CarRegistrationPageModule);
    return CarRegistrationPageModule;
}());

//# sourceMappingURL=car-registration-login.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarRegistrationLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_service__ = __webpack_require__(199);
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







/**
 * Generated class for the CarRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarRegistrationLoginPage = /** @class */ (function () {
    function CarRegistrationLoginPage(navCtrl, navParams, viewCtrl, camera, AngularFireauth, alertCtrl, SignUpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.AngularFireauth = AngularFireauth;
        this.alertCtrl = alertCtrl;
        this.SignUpService = SignUpService;
        this.namePicture = "Licencia";
        this.description = "Sube una foto clara de tu";
        this.img1 = "Licencia";
        this.img2 = "Cédula";
        this.des1 = "Sube una foto clara de tu";
        this.picToView = "assets/imgs/v2.png";
        this.picToViewLicense = "assets/imgs/v2.png";
        this.picToViewId = "assets/imgs/v4.png";
        this.showLicense = true;
        this.showId = false;
        this.cameraPicLicense = false;
        this.cameraPicId = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.driver = this.AngularFireauth.auth.currentUser.uid;
        this.SignUpService.getMyInfo(this.SignUpService.userUniversity, this.driver).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.driverInfo = user;
        });
    }
    CarRegistrationLoginPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CarRegistrationLoginPage.prototype.usageCameraLicense = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(_this.SignUpService.userUniversity + '/documentsDrivers/' + _this.driver + '/documents/' + _this.data);
            picturesDrivers.putString(base64Image, 'data_url');
            var alert = _this.alertCtrl.create({
                title: '¡HECHO!',
                subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
                buttons: ['OK']
            });
            alert.present();
            _this.picToViewLicense = "assets/imgs/v2.2.png";
            _this.picToView = "assets/imgs/v2.2.png";
            _this.SignUpService.pushDocsL(_this.SignUpService.userUniversity, _this.driver);
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el documento otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    CarRegistrationLoginPage.prototype.usageCameraId = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(_this.SignUpService.userUniversity + '/documentsDrivers/' + _this.driver + '/documents/' + _this.data);
            picturesDrivers.putString(base64Image, 'data_url');
            var alert = _this.alertCtrl.create({
                title: '¡HECHO!',
                subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
                buttons: ['OK']
            });
            alert.present();
            _this.picToViewId = "assets/imgs/v4.2.png";
            _this.picToView = "assets/imgs/v4.2.png";
            _this.SignUpService.pushDocsId(_this.SignUpService.userUniversity, _this.driver);
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el documento otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    CarRegistrationLoginPage.prototype.changeNamePicture1 = function () {
        if (this.driverInfo.documents) {
            if (this.driverInfo.documents.license == undefined) {
                this.picToViewLicense = "assets/imgs/v2.png";
                this.picToView = "assets/imgs/v2.png";
            }
            else if (this.driverInfo.documents.license == false) {
                this.picToViewLicense = "assets/imgs/v2.2.png";
                this.picToView = "assets/imgs/v2.2.png";
            }
            else if (this.driverInfo.documents.license == true) {
                this.picToViewLicense = "assets/imgs/v2.3.png";
                this.picToView = "assets/imgs/v2.3.png";
            }
            else {
                this.picToViewLicense = "assets/imgs/v2.png";
                this.picToView = "assets/imgs/v2.png";
            }
        }
        this.namePicture = this.img1;
        this.description = this.des1;
        this.data = "licencia";
        this.showLicense = true;
        this.showId = false;
    };
    ;
    CarRegistrationLoginPage.prototype.changeNamePicture2 = function () {
        if (this.driverInfo.documents) {
            if (this.driverInfo.documents.id == undefined) {
                this.picToViewId = "assets/imgs/v4.png";
                this.picToView = "assets/imgs/v4.png";
            }
            else if (this.driverInfo.documents.id == false) {
                this.picToViewId = "assets/imgs/v4.2.png";
                this.picToView = "assets/imgs/v4.2.png";
            }
            else if (this.driverInfo.documents.id == true) {
                this.picToViewId = "assets/imgs/_v4.3.png";
                this.picToView = "assets/imgs/_v4.3.png";
            }
            else {
                this.picToViewId = "assets/imgs/v4.png";
                this.picToView = "assets/imgs/v4.png";
            }
        }
        this.namePicture = this.img2;
        this.description = this.des1;
        this.data = "cedula";
        this.showId = true;
        this.showLicense = false;
    };
    ;
    CarRegistrationLoginPage.prototype.findRide = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    CarRegistrationLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-registration-login',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\car-registration-login\car-registration-login.html"*/'<!--\n\n  Generated template for the CarRegistrationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="bg-theme">\n\n    <ion-navbar hideBackButton>\n\n        <ion-title>SUBIR DOCUMENTOS\n\n            <!--           <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>-->\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-right padding-left>\n\n    <p text-center padding-top margin-top>{{description}}</p>\n\n    <h2 text-center>{{namePicture}}</h2>\n\n\n\n    <ion-row>\n\n        <ion-col col-4 text-center>\n\n            <img  [src]="picToViewLicense" (click)="changeNamePicture1()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img   [src]="picToViewId" (click)="changeNamePicture2()">\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <div text-center class="verifiy">\n\n        <img [src]="picToView">\n\n    </div>\n\n    <ion-row>\n\n        <ion-col>\n\n            <p padding-top class="btn-box" *ngIf = \'showLicense\'><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCameraLicense()">Subir Foto</button></p>\n\n            <p padding-top class="btn-box" *ngIf = \'showId\'><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCameraId()">Subir Foto</button></p>\n\n        </ion-col>\n\n      <ion-col>\n\n          <p padding-top class="btn-box"><button class="btn text-yellow rounded buttonLight" style="width: 80%;" (click)= "findRide()" >Hacer después</button></p>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_driver\src\pages\car-registration-login\car-registration-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */]])
    ], CarRegistrationLoginPage);
    return CarRegistrationLoginPage;
}());

//# sourceMappingURL=car-registration-login.js.map

/***/ })

});
//# sourceMappingURL=25.js.map