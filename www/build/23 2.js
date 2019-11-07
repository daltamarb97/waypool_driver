webpackJsonp([23],{

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmUniversityPageModule", function() { return ConfirmUniversityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_university__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmUniversityPageModule = /** @class */ (function () {
    function ConfirmUniversityPageModule() {
    }
    ConfirmUniversityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_university__["a" /* ConfirmUniversityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_university__["a" /* ConfirmUniversityPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_university__["a" /* ConfirmUniversityPage */]
            ]
        })
    ], ConfirmUniversityPageModule);
    return ConfirmUniversityPageModule;
}());

//# sourceMappingURL=confirm-university.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmUniversityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmUniversityPage = /** @class */ (function () {
    function ConfirmUniversityPage(signUpService, viewCtrl, angularFireAuth, alertCtrl, afDB) {
        var _this = this;
        this.signUpService = signUpService;
        this.viewCtrl = viewCtrl;
        this.angularFireAuth = angularFireAuth;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.universities = [];
        this.showButton = false;
        this.signUpService.getAllPlaces().subscribe(function (universities) {
            _this.universities = universities;
            console.log(_this.universities);
        });
        this.userId = this.angularFireAuth.auth.currentUser.uid;
    }
    ConfirmUniversityPage.prototype.onChange = function () {
        var _this = this;
        this.showButton = false;
        this.signUpService.userPlace = this.universityChosen;
        setTimeout(function () {
            _this.afDB.database.ref(_this.signUpService.userPlace + '/drivers/' + _this.userId)
                .once('value')
                .then(function (snap) {
                var user = snap.val();
                if (user === null) {
                    _this.alertUni();
                }
                else {
                    _this.showButton = true;
                }
            });
        }, 500);
    };
    ConfirmUniversityPage.prototype.alertUni = function () {
        var alert = this.alertCtrl.create({
            title: '¿estas seguro que es tu universidad?',
            subTitle: 'Seleccionaste una universidad que no es la misma que seleccionaste cuando te registraste',
            buttons: ['OK']
        });
        alert.present();
    };
    ConfirmUniversityPage.prototype.goToFindaride = function () {
        this.readyToStart = true;
        this.viewCtrl.dismiss(this.readyToStart);
    };
    ConfirmUniversityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-university',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/confirm-university/confirm-university.html"*/'<ion-content>\n  <ion-card>\n  <h6 class="text-theme">¿CUÁL ES TU UNIVERSIDAD?</h6>\n  <ion-card-content>\n      <ion-list>\n          <ion-item>\n            <ion-label>escoge tu universidad </ion-label>\n            <ion-select (ionChange)="onChange()" okText="Ok" cancelText="Cancel" [(ngModel)]= \'universityChosen\'>\n              <ion-option  *ngFor="let uni of universities"  name="fieldName" ngDefaultControl>{{uni.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n        \n        </ion-list>\n  </ion-card-content>\n\n  <ion-card-content>\n      <div >\n          \n          <ion-row style="margin-top: 14px;justify-content: center">\n              \n              <ion-col col-8>\n                  <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: 1.5rem;" *ngIf=\'showButton\' (click)="goToFindaride()">Continuar</button>\n              </ion-col>\n          </ion-row>\n\n\n      </div>\n  </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/confirm-university/confirm-university.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"]])
    ], ConfirmUniversityPage);
    return ConfirmUniversityPage;
}());

//# sourceMappingURL=confirm-university.js.map

/***/ })

});
//# sourceMappingURL=23.js.map