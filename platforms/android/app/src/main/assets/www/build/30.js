webpackJsonp([30],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSchedulePageModule", function() { return AddSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_schedule__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddSchedulePageModule = /** @class */ (function () {
    function AddSchedulePageModule() {
    }
    AddSchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_schedule__["a" /* AddSchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_schedule__["a" /* AddSchedulePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_schedule__["a" /* AddSchedulePage */]
            ]
        })
    ], AddSchedulePageModule);
    return AddSchedulePageModule;
}());

//# sourceMappingURL=add-schedule.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_instances_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddSchedulePage = /** @class */ (function () {
    function AddSchedulePage(navCtrl, navParams, viewCtrl, renderer, alertCtrl, signUpService, angularFireAuth, instances, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.signUpService = signUpService;
        this.angularFireAuth = angularFireAuth;
        this.instances = instances;
        this.afDB = afDB;
        this.imageHouseToWork = false;
        this.imageWorkToHouse = false;
        this.button1WasntTapped = true;
        this.button2WasntTapped = true;
        this.userId = this.angularFireAuth.auth.currentUser.uid;
    }
    AddSchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSchedulePage');
    };
    AddSchedulePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    AddSchedulePage.prototype.selectImageHouse = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.house.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.house.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.house.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.work.nativeElement, 'border-width', '0px');
        this.imageURL = 'assets/imgs/houseToWork.png';
        this.textMessage = 'Trabajo';
        this.geofireType = 'origin';
        this.imageHouseToWork = true;
        this.imageWorkToHouse = false;
    };
    AddSchedulePage.prototype.selectImageWork = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.work.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.work.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.work.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.house.nativeElement, 'border-width', '0px');
        this.textMessage = 'Casa';
        this.geofireType = 'destination';
        this.imageURL = 'assets/imgs/workToHouse.png';
        this.imageHouseToWork = false;
        this.imageWorkToHouse = true;
    };
    AddSchedulePage.prototype.confirm = function () {
        var _this = this;
        console.log(this.imageHouseToWork);
        console.log(this.imageWorkToHouse);
        this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId + '/scheduleType/').once('value').then(function (snap) {
            if (snap.val() === 'picture') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Ya haz enviado FOTO de tu horario',
                    subTitle: '¿deseas crear tu horario personalizado? Perderás los horarios creados automaticamente por la foto',
                    buttons: [
                        {
                            text: 'No',
                            handler: (function () {
                                _this.viewCtrl.dismiss();
                            }),
                            role: 'cancel'
                        },
                        {
                            text: 'Si',
                            handler: (function () {
                                _this.afDB.database.ref(_this.signUpService.userPlace + '/drivers/' + _this.userId + '/schedule/').remove().then(function () {
                                    if (_this.imageHouseToWork === true || _this.imageWorkToHouse === true) {
                                        if (_this.startHour === undefined || _this.startHour === null) {
                                            var alert_2 = _this.alertCtrl.create({
                                                title: 'Debes seleccionar una hora de partida',
                                                subTitle: '¿A qué hora sales del trabajo o de tu casa?',
                                                buttons: ['OK']
                                            });
                                            alert_2.present();
                                        }
                                        else {
                                            var alert_3 = _this.alertCtrl.create({
                                                title: '¿vas de tu ' + _this.textMessage + ' a las ' + _this.startHour + '?',
                                                buttons: [
                                                    {
                                                        text: 'Confirmo este horario',
                                                        handler: function () {
                                                            _this.signUpService.pushSchedule(_this.signUpService.userPlace, _this.userId, _this.startHour, _this.geofireType, _this.textMessage, _this.imageURL);
                                                            _this.instances.scheduleTypeManual(_this.signUpService.userPlace, _this.userId);
                                                            _this.viewCtrl.dismiss();
                                                        }
                                                    }
                                                ]
                                            });
                                            alert_3.present();
                                        }
                                    }
                                    else {
                                        var alert_4 = _this.alertCtrl.create({
                                            title: 'Debes seleccionar una opción',
                                            subTitle: '¿a esta hora vas de tu trabajo a tu casa o de tu casa a tu trabajo?',
                                            buttons: ['OK']
                                        });
                                        alert_4.present();
                                    }
                                });
                            })
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                if (_this.imageHouseToWork === true || _this.imageWorkToHouse === true) {
                    if (_this.startHour === undefined || _this.startHour === null) {
                        var alert_5 = _this.alertCtrl.create({
                            title: 'Debes seleccionar una hora de partida',
                            subTitle: '¿A qué hora sales del trabajo o de tu casa?',
                            buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        var alert_6 = _this.alertCtrl.create({
                            title: '¿vas de tu ' + _this.textMessage + ' a las ' + _this.startHour + '?',
                            buttons: [
                                {
                                    text: 'Confirmo este horario',
                                    handler: function () {
                                        _this.signUpService.pushSchedule(_this.signUpService.userPlace, _this.userId, _this.startHour, _this.geofireType, _this.textMessage, _this.imageURL);
                                        _this.viewCtrl.dismiss();
                                    }
                                }
                            ]
                        });
                        alert_6.present();
                    }
                }
                else {
                    var alert_7 = _this.alertCtrl.create({
                        title: 'Debes seleccionar una opción',
                        subTitle: '¿a esta hora vas de tu trabajo a tu casa o de tu casa a tu trabajo?',
                        buttons: ['OK']
                    });
                    alert_7.present();
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('house', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], AddSchedulePage.prototype, "house", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('work', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], AddSchedulePage.prototype, "work", void 0);
    AddSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-schedule',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/add-schedule/add-schedule.html"*/'<ion-content>\n\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n\n        <ion-card-content>\n                <h2 text-center class="text-theme">AÑADE UN VIAJE</h2>\n\n            <ion-row style="margin-top: 14px;    display: flex;\n            justify-content: center">\n                <ion-list>\n             <h2 text-center>Coloca la hora a la que te vas:</h2>\n\n                    <ion-item>\n                        <ion-label>Hora:</ion-label>\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n                </ion-item>\n                </ion-list>                    \n            </ion-row>\n    </ion-card-content>\n\n    <br>\n    <h2 style="margin-bottom: 20px;" text-center>¿Vas al trabajo o la casa?</h2>\n      <ion-row  style="display: flex; flex-direction: row;">\n            <ion-avatar style="border-radius: 15%;" #house>\n                <p text-center class="texto1">A la casa</p>\n\n                    <img class="house" style="width: 138px;" src="assets/imgs/workToHouse.png" (click)="selectImageHouse()"/>\n\n                </ion-avatar>\n\n                <ion-avatar  style="border-radius: 15%;" #work>\n                    <p text-center class="texto1">Al Trabajo</p>\n\n                        <img src="assets/imgs/houseToWork.png" style="width: 138px;" (click)="selectImageWork()"/>\n                 </ion-avatar>\n     \n      </ion-row>\n  \n        <ion-card-content>\n            <div class="seats">           \n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: 1.25rem;" (click)="confirm()">Confirmar</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/add-schedule/add-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], AddSchedulePage);
    return AddSchedulePage;
}());

//# sourceMappingURL=add-schedule.js.map

/***/ })

});
//# sourceMappingURL=30.js.map