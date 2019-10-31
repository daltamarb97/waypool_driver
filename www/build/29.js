webpackJsonp([29],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSchedulePageModule", function() { return AddSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_instances_service__ = __webpack_require__(348);
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
    function AddSchedulePage(navCtrl, navParams, viewCtrl, alertCtrl, signUpService, angularFireAuth, instances) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.signUpService = signUpService;
        this.angularFireAuth = angularFireAuth;
        this.instances = instances;
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
    AddSchedulePage.prototype.button1 = function () {
        console.log('fue presionado boton 1');
        this.button1WasTapped = true;
        this.button2WasTapped = false;
        this.button1WasntTapped = false;
        this.button2WasntTapped = true;
        this.textMessage = 'trabajo/universidad a CASA';
        this.geofireType = 'destination';
        this.imageURL = 'assets/imgs/home.png';
    };
    AddSchedulePage.prototype.button2 = function () {
        console.log('fue presionado boton 2');
        this.button1WasTapped = false;
        this.button2WasTapped = true;
        this.button1WasntTapped = true;
        this.button2WasntTapped = false;
        this.textMessage = 'casa al TRABAJO/UNIVERSIDAD';
        this.geofireType = 'origin';
        this.imageURL = 'assets/imgs/work.png';
    };
    AddSchedulePage.prototype.confirm = function () {
        var _this = this;
        if (this.button1WasntTapped && this.button2WasntTapped === true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Debes seleccionar una opción',
                subTitle: '¿a esta hora vas de tu trabajo a tu casa o de tu casa a tu trabajo?',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.startHour === undefined || this.startHour === null) {
            var alert_2 = this.alertCtrl.create({
                title: 'Debes seleccionar una hora de partida',
                subTitle: '¿A qué hora sales del trabajo o de tu casa?',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.button1WasntTapped === true && this.button2WasntTapped === true && this.startHour === undefined) {
            var alert_3 = this.alertCtrl.create({
                title: 'Información incompleta',
                subTitle: 'Es aqui donde debes decirnos como te movilizas del trabajo a tu casa o de tu casa al trabajo',
                buttons: ['OK']
            });
            alert_3.present();
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: '¿vas de tu ' + this.textMessage + ' a las ' + this.startHour + '?',
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
            alert_4.present();
        }
    };
    AddSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-schedule',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/add-schedule/add-schedule.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n  \n        <ion-card-content>\n            <ion-row style="margin-top: 14px;    display: flex;\n            justify-content: center">\n                <ion-list>\n                    <ion-item>\n                        <ion-label>Hora:</ion-label>\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n                </ion-item>\n                </ion-list>                    \n            </ion-row>\n    </ion-card-content>\n\n    <br>\n    <h2 text-center>A esta hora vas de tu:</h2>\n     <h1 text-center class="texto1">{{textMessage}}</h1>\n      <ion-row>\n          <ion-col class="col1" *ngIf = \'button1WasntTapped\'>\n              <img src="assets/imgs/home2.png"  style="display:inline-block" height="140px" width="50px" (click)="button1()"/>\n          </ion-col>\n          <ion-col class="col1" *ngIf = \'button1WasTapped\'>\n              <img src="assets/imgs/home.png"  style="display:inline-block" height="140px" width="50px" (click)="button1()"/>\n          </ion-col>\n          <ion-col  class="col2" *ngIf = \'button2WasntTapped\'>\n              <img src="assets/imgs/work2.png"  style="display:inline-block" height="140px" width="50px" (click)="button2()"/>\n            \n          </ion-col>\n          <ion-col  class="col2" *ngIf = \'button2WasTapped\'>\n              <img src="assets/imgs/work.png"  style="display:inline-block" height="140px" width="50px" (click)="button2()"/>\n            \n          </ion-col>\n      </ion-row>\n  \n        <ion-card-content>\n            <div class="seats">           \n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="confirm()">Confirmar</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/add-schedule/add-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_instances_service__["a" /* instancesService */]])
    ], AddSchedulePage);
    return AddSchedulePage;
}());

//# sourceMappingURL=add-schedule.js.map

/***/ })

});
//# sourceMappingURL=29.js.map