webpackJsonp([12],{

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSchedulePageModule", function() { return RemoveSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remove_schedule__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RemoveSchedulePageModule = /** @class */ (function () {
    function RemoveSchedulePageModule() {
    }
    RemoveSchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__remove_schedule__["a" /* RemoveSchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__remove_schedule__["a" /* RemoveSchedulePage */]),
            ],
        })
    ], RemoveSchedulePageModule);
    return RemoveSchedulePageModule;
}());

//# sourceMappingURL=remove-schedule.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
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





var RemoveSchedulePage = /** @class */ (function () {
    function RemoveSchedulePage(navCtrl, navParams, viewCtrl, alertCtrl, signUpService, angularFireAuth, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.signUpService = signUpService;
        this.angularFireAuth = angularFireAuth;
        this.afDB = afDB;
        this.schedule = this.navParams.get('schedule');
        console.log(this.schedule);
        this.userId = this.angularFireAuth.auth.currentUser.uid;
        this.startHour = this.schedule.hour;
        this.picToView = this.schedule.image;
        this.textMessage = this.schedule.description;
        this.afDB.database.ref(this.signUpService.userPlace + '/drivers/' + this.userId).once('value').then(function (snap) {
            _this.userInfo = snap.val();
        });
    }
    RemoveSchedulePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    RemoveSchedulePage.prototype.remove = function () {
        var _this = this;
        this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then(function (snap) {
            var obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach(function (key) {
                if (obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10) {
                }
                else {
                    _this.signUpService.removeSchedule(obj[key], _this.userId, _this.schedule.key);
                }
            });
        }).then(function () {
            _this.afDB.database.ref('allSchedules/' + _this.userId + '/' + _this.schedule.key).remove();
            _this.dismiss();
        });
    };
    RemoveSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remove-schedule',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/remove-schedule/remove-schedule.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n  \n        <ion-card-content>\n            <ion-row style="margin-top: 14px;    display: flex;\n            justify-content: center">\n                <ion-list>\n                    <ion-item>\n                        <ion-label>Hora:</ion-label>\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n                </ion-item>\n                </ion-list>                    \n            </ion-row>\n    </ion-card-content>\n\n    <br>\n    <h2 text-center>A esta hora vas a tu:</h2>\n     <h1 text-center class="texto1">{{textMessage}}</h1>\n      <ion-row>\n          <ion-col class="col1">\n              <img [src]="picToView" height="100px" width="100%"/>\n          </ion-col>\n      </ion-row>\n  \n        <ion-card-content>\n            <div class="seats">           \n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-red text-white rounded" style="width: 100%;font-size: .95rem;" (click)="remove()">Eliminar este horario</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_driver/src/pages/remove-schedule/remove-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignUpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _g || Object])
    ], RemoveSchedulePage);
    return RemoveSchedulePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=remove-schedule.js.map

/***/ })

});
//# sourceMappingURL=12.js.map