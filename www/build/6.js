webpackJsonp([6],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationImagesPageModule", function() { return VerificationImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_images__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificationImagesPageModule = /** @class */ (function () {
    function VerificationImagesPageModule() {
    }
    VerificationImagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verification_images__["a" /* VerificationImagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verification_images__["a" /* VerificationImagesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__verification_images__["a" /* VerificationImagesPage */]
            ]
        })
    ], VerificationImagesPageModule);
    return VerificationImagesPageModule;
}());

//# sourceMappingURL=verification-images.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(52);
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






var VerificationImagesPage = /** @class */ (function () {
    function VerificationImagesPage(navCtrl, navParams, viewCtrl, camera, AngularFireauth, alertCtrl, SignUpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.AngularFireauth = AngularFireauth;
        this.alertCtrl = alertCtrl;
        this.SignUpService = SignUpService;
        this.namePicture = "Cédula";
        this.description = "Sube una foto clara de tu";
        this.img1 = "Carné de la U";
        this.img2 = "Cédula";
        this.des1 = "Sube una foto clara de tu";
        this.picToView = "assets/imgs/v2.png";
        this.picToViewCarne = "assets/imgs/v2.png";
        this.picToViewId = "assets/imgs/v4.png";
        this.showCarne = true;
        this.showId = false;
        this.cameraPicCarne = false;
        this.cameraPicId = false;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.driver = this.AngularFireauth.auth.currentUser.uid;
        this.SignUpService.getMyInfo(this.SignUpService.userUniversity, this.driver).subscribe(function (user) {
            _this.driverInfo = user;
            if (_this.driverInfo.documents) {
                if (_this.driverInfo.documents.carne == true) {
                    _this.picToViewCarne = "assets/imgs/v2.3.png";
                    _this.picToView = "assets/imgs/v2.3.png";
                    _this.showCarne = false;
                }
                else if (_this.driverInfo.documents.id == true) {
                    _this.picToViewId = "assets/imgs/_v4.3.png";
                    _this.showId = false;
                }
                else if (_this.driverInfo.documents.carne == false) {
                    _this.picToViewCarne = "assets/imgs/v2.2.png";
                    _this.picToView = "assets/imgs/v2.2.png";
                    _this.showCarne = false;
                }
                else if (_this.driverInfo.documents.id == false) {
                    _this.picToViewId = "assets/imgs/v4.2.png";
                    _this.showId = false;
                }
                else if (_this.driverInfo.documents.carne == undefined) {
                    _this.picToViewCarne = "assets/imgs/v2.png";
                    _this.picToView = "assets/imgs/v2.png";
                }
                else if (_this.driverInfo.documents.id == undefined) {
                    _this.picToViewId = "assets/imgs/v4.png";
                }
            }
        });
    }
    ;
    VerificationImagesPage.prototype.skipVerification = function () {
        this.viewCtrl.dismiss();
    };
    VerificationImagesPage.prototype.usageCameraCarne = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(_this.SignUpService.userUniversity + '/verificationDocuments/' + _this.driver + '/' + _this.data);
            picturesDrivers.putString(base64Image, 'data_url');
            var alert = _this.alertCtrl.create({
                title: '¡HECHO!',
                subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
                buttons: ['OK']
            });
            alert.present();
            _this.picToViewCarne = "assets/imgs/v2.2.png";
            _this.picToView = "assets/imgs/v2.2.png";
            _this.SignUpService.pushDocsCarne(_this.SignUpService.userUniversity, _this.driver);
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
    VerificationImagesPage.prototype.usageCameraId = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(_this.SignUpService.userUniversity + '/verificationDocuments/' + _this.driver + '/' + _this.data);
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
    VerificationImagesPage.prototype.changeNamePicture1 = function () {
        if (this.driverInfo.documents) {
            if (this.driverInfo.documents.carne == undefined) {
                this.picToViewCarne = "assets/imgs/v2.png";
                this.picToView = "assets/imgs/v2.png";
                this.showCarne = true;
            }
            else if (this.driverInfo.documents.carne == false) {
                this.picToViewCarne = "assets/imgs/v2.2.png";
                this.picToView = "assets/imgs/v2.2.png";
                this.showCarne = false;
            }
            else if (this.driverInfo.documents.carne == true) {
                this.picToViewCarne = "assets/imgs/v2.3.png";
                this.picToView = "assets/imgs/v2.3.png";
                this.showCarne = false;
            }
            else {
                this.picToViewCarne = "assets/imgs/v2.png";
                this.picToView = "assets/imgs/v2.png";
                this.showCarne = true;
            }
        }
        this.namePicture = this.img1;
        this.description = this.des1;
        this.data = "carné";
        // this.showCarne = true;
        this.showId = false;
    };
    ;
    VerificationImagesPage.prototype.changeNamePicture2 = function () {
        if (this.driverInfo.documents) {
            if (this.driverInfo.documents.id == undefined) {
                this.picToViewId = "assets/imgs/v4.png";
                this.picToView = "assets/imgs/v4.png";
                this.showId = true;
            }
            else if (this.driverInfo.documents.id == false) {
                this.picToViewId = "assets/imgs/v4.2.png";
                this.picToView = "assets/imgs/v4.2.png";
                this.showId = false;
            }
            else if (this.driverInfo.documents.id == true) {
                this.picToViewId = "assets/imgs/_v4.3.png";
                this.picToView = "assets/imgs/_v4.3.png";
                this.showId = false;
            }
            else {
                this.picToViewId = "assets/imgs/v4.png";
                this.picToView = "assets/imgs/v4.png";
                this.showId = true;
            }
        }
        this.namePicture = this.img2;
        this.description = this.des1;
        this.data = "cédula";
        // this.showId = true;
        this.showCarne = false;
    };
    ;
    VerificationImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification-images',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/verification-images/verification-images.html"*/'<ion-header class="bg-theme">\n    <ion-navbar >\n        <ion-title>VERIFÍCATE \n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding-right padding-left>\n    <p text-center padding-top margin-top>{{description}}</p>\n    <h2 text-center>{{namePicture}}</h2>\n\n    <ion-row>\n        <ion-col col-4 text-center>\n            <img  [src]="picToViewCarne" (click)="changeNamePicture1()">\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img   [src]="picToViewId" (click)="changeNamePicture2()">\n        </ion-col>\n    </ion-row>\n\n    <div text-center class="verifiy">\n        <img [src]="picToView">\n    </div>\n    <ion-row>\n        <ion-col>\n            <p padding-top class="btn-box" *ngIf = \'showCarne\'><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCameraCarne()">Subir Foto</button></p>\n            <p padding-top class="btn-box" *ngIf = \'showId\'><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCameraId()">Subir Foto</button></p>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <p padding-top class="skipText"  (click)="skipVerification()"> No me quiero verificar ahora </p>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/verification-images/verification-images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_signup_service__["a" /* SignUpService */]])
    ], VerificationImagesPage);
    return VerificationImagesPage;
}());

//# sourceMappingURL=verification-images.js.map

/***/ })

});
//# sourceMappingURL=6.js.map