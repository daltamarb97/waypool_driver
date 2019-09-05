webpackJsonp([11],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInfoCarPageModule", function() { return ShowInfoCarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showinfocar__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowInfoCarPageModule = /** @class */ (function () {
    function ShowInfoCarPageModule() {
    }
    ShowInfoCarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__showinfocar__["a" /* ShowInfoCarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__showinfocar__["a" /* ShowInfoCarPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__showinfocar__["a" /* ShowInfoCarPage */]
            ]
        })
    ], ShowInfoCarPageModule);
    return ShowInfoCarPageModule;
}());

//# sourceMappingURL=showinfocar.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowInfoCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShowInfoCarPage = /** @class */ (function () {
    function ShowInfoCarPage(modalCtrl, alertCtrl, SignupService, navParams, viewCtrl, navCtrl, toastCtrl, AngularFireAuth, afDB, SignUpService) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.SignupService = SignupService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.carList = [];
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"];
        this.user = this.navParams.get('user');
        this.SignUpService.getCar(this.SignUpService.userUniversity, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (car) {
            _this.carList = car;
            console.log(_this.carList);
        });
    }
    ShowInfoCarPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ShowInfoCarPage.prototype.addCar = function () {
        if (this.carList.length >= 3) {
            var alert_1 = this.alertCtrl.create({
                title: 'OPERACION DENEGADA',
                subTitle: 'No puedes tener más de 3 carros en tu cuenta, si quieres agregar otro, elimina alguno de los que tienes',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.SignUpService.addCar(this.SignupService.userUniversity, this.userUid, this.carModel, this.plateNumber, this.color);
        }
        this.carModel = null;
        this.plateNumber = null;
        this.color = null;
    };
    ShowInfoCarPage.prototype.deleteCar = function (carKey) {
        console.log(carKey);
        this.SignUpService.deleteCar(this.SignupService.userUniversity, this.userUid, carKey);
    };
    ShowInfoCarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShowInfoCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showinfocar',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/showinfocar/showinfocar.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Mis vehículos</h6>\n        <ion-item *ngFor="let car of carList">\n            <div  style="display: flex">\n                    <div class="name"  style="margin-top:2px">\n                            <h2><ion-icon name="car" class="icon-location" style="margin-right: 15px;"></ion-icon>{{car.carModel}}</h2>\n                            <p>{{car.plateNumber}} | {{car.color}}</p>\n                        </div>\n                            <ion-icon name="close-circle"  (click)="deleteCar(car.keyCar)"></ion-icon>\n                         \n            </div>\n            \n        </ion-item>\n        \n\n    \n        <ion-row>\n            <ion-col class="name-fild-2">\n                <ion-list class="form">\n                    <ion-item class="carModel">\n                            <ion-label></ion-label>\n                                <ion-input class="input" [(ngModel)]="carModel"type="text" text-right  placeholder= "ej: Mazda"></ion-input>\n                            </ion-item>\n                    </ion-list>\n            </ion-col>\n            <ion-col class="name-fild-2">\n                <ion-list class="form">\n                    <ion-item class="plateNumber">\n                            <ion-input type="text" [(ngModel)]="plateNumber" text-right  placeholder= "placa de carro" ></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n          \n                <ion-list class="form">\n                    <ion-item class="plateNumber">\n                            <ion-input type="text" [(ngModel)]="color" text-right  placeholder= "Color" ></ion-input>\n                    </ion-item>\n                </ion-list>\n           \n        </ion-row>\n\n        <ion-card-content>\n            <div class="seats">\n                \n                <button class="btn bg-theme text-white rounded" (click)="addCar()" style="width: 100%;margin-top: 14px;"> AGREGAR VEHÍCULO </button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/showinfocar/showinfocar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */]])
    ], ShowInfoCarPage);
    return ShowInfoCarPage;
}());

//# sourceMappingURL=showinfocar.js.map

/***/ })

});
//# sourceMappingURL=11.js.map