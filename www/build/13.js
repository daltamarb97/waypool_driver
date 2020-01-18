webpackJsonp([13],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(831);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */]),
            ],
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_instances_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
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
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, navParams, modalCtrl, signUpService, angularFireAuth, app, alertCtrl, camera, loadingCtrl, instances, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.signUpService = signUpService;
        this.angularFireAuth = angularFireAuth;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.instances = instances;
        this.afDB = afDB;
        this.schedule = "makeYourOwn";
        this.schedules = [];
        this.showButtonWorkSchedule = false;
        this.optionsCamera = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.optionsLibrary = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.defaultZone = this.navParams.get('defaultZone');
        this.userId = this.angularFireAuth.auth.currentUser.uid;
        this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then(function (snap) {
            _this.userInfo = snap.val();
        });
        this.signUpService.getSchedule(this.signUpService.userPlace, this.userId).subscribe(function (hour) {
            _this.schedules = hour;
            console.log(_this.schedules);
            if (_this.schedules.length !== 0) {
                _this.afDB.database.ref(_this.signUpService.userPlace + '/drivers/' + _this.userId + '/scheduleType/').once('value').then(function (snap) {
                    if (snap.val() === 'picture') {
                    }
                    else {
                        _this.showButtonWorkSchedule = true;
                    }
                });
            }
            else {
                _this.showButtonWorkSchedule = false;
            }
        });
    }
    SchedulePage.prototype.makeSchedule = function () {
        var _this = this;
        this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then(function (snap) {
            if (snap.val().toggleStatus === 'online') {
                var alert = _this.alertCtrl.create({
                    title: 'Para añadir un nuevo horario debes estar offline',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                var modal = _this.modalCtrl.create('AddSchedulePage');
                modal.onDidDismiss(function (accepted) {
                    if (accepted) {
                    }
                });
                modal.present();
            }
        });
    };
    SchedulePage.prototype.skipSchedule = function () {
        if (!this.userInfo.houseAddress) {
            this.app.getRootNav().push('SpecifyOriginPage');
        }
        else {
            this.navCtrl.setRoot('FindridePage');
        }
    };
    SchedulePage.prototype.removeTime = function (sche) {
        var _this = this;
        this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then(function (snap) {
            if (snap.val().toggleStatus === 'online') {
                var alert = _this.alertCtrl.create({
                    title: 'Para eliminar este horario debes estar offline',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                var modal = _this.modalCtrl.create('RemoveSchedulePage', {
                    schedule: sche
                });
                modal.onDidDismiss(function (accepted) {
                    if (accepted) {
                        // this.navCtrl.push('ListridePage');
                        var alert = _this.alertCtrl.create({
                            title: 'Este horario ha sido eliminado',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                });
                modal.present();
            }
        });
    };
    SchedulePage.prototype.usageCameraSchedule = function () {
        var _this = this;
        this.camera.getPicture(this.optionsCamera).then(function (imageData) {
            _this.afDB.database.ref('allCities/' + _this.userInfo.city + '/allPlaces/' + _this.userInfo.company + '/zones').once('value').then(function (snap) {
                var obj = snap.val();
                Object.getOwnPropertyNames(obj).forEach(function (key) {
                    if (obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10) {
                    }
                    else {
                        _this.instances.scheduleTypePicture(obj[key], _this.userId);
                    }
                });
            });
            var loading = _this.loadingCtrl.create({
                spinner: 'crescent',
                content: "\n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
            });
            loading.present();
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictureSchedule = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(_this.userInfo.company + '/schedules/' + _this.userId);
            pictureSchedule.putString(base64Image, 'data_url').then(function () {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                _this.app.getRootNav().push('TabsPage');
                            }
                        }]
                });
                alert.present();
            }).catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'hubo un error',
                    subTitle: 'intenta subir el horario otra vez',
                    buttons: ['OK']
                });
                alert.present();
            });
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el horario otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SchedulePage.prototype.accessLibrary = function () {
        var _this = this;
        this.camera.getPicture(this.optionsLibrary).then(function (imageData) {
            var loading = _this.loadingCtrl.create({
                spinner: 'crescent',
                content: "\n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
            });
            loading.present();
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictureSchedule = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(_this.userInfo.company + '/schedules/' + _this.userId);
            pictureSchedule.putString(base64Image, 'data_url').then(function () {
                loading.dismiss();
                _this.afDB.database.ref('allCities/' + _this.userInfo.city + '/allPlaces/' + _this.userInfo.company + '/zones').once('value').then(function (snap) {
                    var obj = snap.val();
                    Object.getOwnPropertyNames(obj).forEach(function (key) {
                        if (obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10) {
                        }
                        else {
                            _this.instances.scheduleTypePicture(obj[key], _this.userId);
                        }
                    });
                });
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                _this.app.getRootNav().push('TabsPage');
                            }
                        }]
                });
                alert.present();
            }).catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'hubo un error',
                    subTitle: 'intenta subir el horario otra vez',
                    buttons: ['OK']
                });
                alert.present();
            });
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el horario otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SchedulePage.prototype.goFindride = function () {
        var _this = this;
        this.skipSchedule();
        this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then(function (snap) {
            var obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach(function (key) {
                if (obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10) {
                }
                else {
                    _this.instances.scheduleTypeManual(obj[key], _this.userId);
                }
            });
        });
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/schedule/schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MI HORARIO</ion-title>\n    </ion-navbar>\n    <div padding-left padding-right>\n        <ion-segment [(ngModel)]="schedule">\n            <ion-segment-button value=makeYourOwn>\n                Arma tu horario\n            </ion-segment-button>\n            <ion-segment-button value="picture">\n                Foto de mi horario\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="schedule">\n      <div *ngSwitchCase="\'makeYourOwn\'">\n\n\n\n        <p text-center padding-top margin-top>Agrega cada una de las horas en las que vas de tu casa al trabajo/universidad o viceversa</p>\n\n            <ion-card *ngFor = "let sche of schedules" (click) = \'removeTime(sche)\' style="border-radius: 5%;" >\n                    <ng-container>\n                        <ion-card-content style="display: flex; ">\n                            <img [src]="sche.image"  style="height:50px; width:150px;     margin-right: 20px;" />\n                            <p>Destino: {{ sche.description }} <br> Hora: <span style="color:#3fb1df;">{{ sche.hour}}</span></p>\n\n                                                                       \n                            \n                        </ion-card-content>\n                    </ng-container>\n                </ion-card>\n\n\n                <ion-row *ngIf= \'showButtonWorkSchedule\'>\n                        <ion-col>\n                            <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="goFindride()">Continuar</button></p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row >\n                        <div style="position: relative">\n                                <p style="position: fixed; bottom: 10px; width:100%; text-align: left" class="skipText"  (click)="skipSchedule()"> No lo quiero hacer ahora </p>\n\n                        </div>\n                       \n                    </ion-row>\n\n\n\n\n\n          <ion-fab bottom right>\n              <button ion-fab (click)=\'makeSchedule()\'><ion-icon name="add"></ion-icon></button>\n            </ion-fab>\n      </div>\n\n\n      <div *ngSwitchCase="\'picture\'">\n            <p text-center padding-top margin-top>Toma un screenshot o una foto de tu <span style="color:#3fb1df;">HORARIO</span>, mándanoslo y haremos el resto por ti</p>\n        \n            <div text-center class="verifiy">\n                <img src="assets/imgs/v1.png">\n            </div>\n            <ion-row>\n                <ion-col>\n                    <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCameraSchedule()">Tomar Foto de horario</button></p>\n                </ion-col>\n\n                <ion-col>\n                        <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="accessLibrary()">Subir Foto de galería</button></p>\n                    </ion-col>\n            </ion-row>\n            <br>\n            <br>\n            <br>\n            <ion-row>\n                \n                    <p padding-top class="skipText"  (click)="skipSchedule()"> No lo quiero hacer ahora </p>\n               \n            </ion-row>\n      </div>\n      \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/schedule/schedule.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signup_service__["a" /* SignUpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_instances_service__["a" /* instancesService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"]) === "function" && _l || Object])
    ], SchedulePage);
    return SchedulePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=schedule.js.map

/***/ })

});
//# sourceMappingURL=13.js.map