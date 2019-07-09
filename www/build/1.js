webpackJsonp([1],{

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInfoCarPageModule", function() { return ShowInfoCarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showinfocar__ = __webpack_require__(754);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__showinfocar__["a" /* ShowInfoCarPage */]),
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

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(31));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowInfoCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(329);
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
    function ShowInfoCarPage(modalCtrl, SignupService, navParams, viewCtrl, navCtrl, toastCtrl, AngularFireAuth, afDB, SignUpService) {
        var _this = this;
        this.modalCtrl = modalCtrl;
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
        this.user = this.navParams.get('user');
        this.SignUpService.getCar(this.userUid)
            .subscribe(function (car) {
            _this.carList = car;
            console.log(_this.carList);
        });
    }
    ShowInfoCarPage.prototype.addCar = function () {
        this.SignUpService.addCar(this.userUid, this.carModel, this.plateNumber, this.color);
    };
    ShowInfoCarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShowInfoCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showinfocar',template:/*ion-inline-start:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\showinfocar\showinfocar.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n    <ion-card>\n\n        <h6 class="text-theme">Mis vehículos</h6>\n\n        <ion-item>\n\n            <div class="name" *ngFor="let car of carList">\n\n                <h2><ion-icon name="car" class="icon-location"></ion-icon>{{car.carModel}}</h2>\n\n                <p>{{car.plateNumber}} | {{car.color}}</p>\n\n            </div>\n\n       \n\n        </ion-item>\n\n        \n\n\n\n    \n\n        <ion-row>\n\n            <ion-col class="name-fild-2">\n\n                <ion-list class="form">\n\n                    <ion-item class="carModel">\n\n                            <ion-label></ion-label>\n\n                                <ion-input class="input" [(ngModel)]="carModel"type="text" text-right  placeholder= "ej: Mazda"></ion-input>\n\n                            </ion-item>\n\n                    </ion-list>\n\n            </ion-col>\n\n            <ion-col class="name-fild-2">\n\n                <ion-list class="form">\n\n                    <ion-item class="plateNumber">\n\n                            <ion-input type="text" [(ngModel)]="plateNumber" text-right  placeholder= "placa de carro" ></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n          \n\n                <ion-list class="form">\n\n                    <ion-item class="plateNumber">\n\n                            <ion-input type="text" [(ngModel)]="color" text-right  placeholder= "Color" ></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n           \n\n        </ion-row>\n\n\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                \n\n                <button class="btn bg-theme text-white rounded" (click)="addCar()" style="width: 100%;margin-top: 14px;"> AGREGAR VEHÍCULO </button>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\waypool\waypooltest\w_driver_test\src\pages\showinfocar\showinfocar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */]])
    ], ShowInfoCarPage);
    return ShowInfoCarPage;
}());

//# sourceMappingURL=showinfocar.js.map

/***/ })

});
//# sourceMappingURL=1.js.map